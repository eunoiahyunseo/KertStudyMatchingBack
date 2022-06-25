import Post from '../../models/post';
import mongoose from 'mongoose';
import Joi from 'joi';
import sanitizeHtml from 'sanitize-html';
const { ObjectId } = mongoose.Types;
import Like from '../../models/like';

// 제한할 태그와 허용할 테그를 선언한다. ( post의 본문에 삽입 되는 것을 막기 위함 )
const sanitizeOption = {
  allowedTags: [
    'h1',
    'h2',
    'b',
    'i',
    'u',
    's',
    'p',
    'ul',
    'ol',
    'li',
    'blockquote',
    'a',
    'img',
  ],
  allowedAttributes: {
    a: ['href', 'name', 'target'],
    img: ['src'],
    li: ['class'],
  },
  allowedSchemes: ['data', 'http', 'https'],
};

// 파라미터로 들어온 id로 연관된 포스틀 찾는 함수
// 그리고 찾은 post를 ctx.state.post에 집어 넣는다.
export const getPostById = async (ctx, next) => {
  const { id } = ctx.params;
  if (!ObjectId.isValid(id)) {
    ctx.status = 400;
    return;
  }
  try {
    const post = await Post.findById(id).populate('creator').populate('likeId');
    // const filteredData = await Post.populate(post, { path: 'creator' });
    // filteredData.creator.hashedPassword = '응 뚫어봐~';
    post.creator.hashedPassword = '응 뚫어봐~';

    // 포스트가 존재하지 않을 때
    if (!post) {
      ctx.status = 404;
      return;
    }
    ctx.state.post = post;
  } catch (e) {
    ctx.throw(500, e);
  }
  return next();
};

export const checkOwnPost = (ctx, next) => {
  const { user, post } = ctx.state;
  if (post.user._id.toString() !== user._id) {
    ctx.status = 403;
    return;
  }
  return next();
};

/**
 * 포스트 작성
 * POST /api/posts
 * { title, body }
 */
export const write = async (ctx) => {
  // REST API의 Request Body는 ctx.request.body에서 조회할 수 있습니다.
  const schema = Joi.object().keys({
    // 객체가 가져야할 schemea에 대한 제한을 걸어 놓는다.
    title: Joi.string().required(),
    body: Joi.string().required(),
    tags: Joi.array().items(Joi.string()).required(),
    capacity: Joi.string().required(),
  });

  // 위에서 선언한 제한을 ctx.request.body에 대해서 검증해야 한다.
  const result = schema.validate(ctx.request.body);

  // 만약 검증에 error가 났다면 바로 API호출을 중단해야 한다.
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  const { title, body, tags, capacity } = ctx.request.body;
  const post = new Post({
    title,
    capacity,
    body: sanitizeHtml(body, sanitizeOption),
    tags,
    user: ctx.state.user,
    creator: ctx.state.user._id,
  });

  // 그리고 좋아요 기능을 위해서 Like객체를 하나 만들어야 한다.
  const like = new Like({
    postId: post._id,
    like_user: [],
  });

  // post에 기본적인 like데이터를 연관시켜준다.
  post.addLikeField(like);

  // creator와 관련된 UserCollection의 값을 가져옴
  const result_ = await Post.populate(post, { path: 'creator' });

  try {
    await post.save();
    await like.save();
    const data = await Post.populate(post, { path: 'likeId' });
    console.log('data >> ', data);
    ctx.body = result_;
  } catch (e) {
    ctx.throw(500, e);
  }
};

/**
 * 포스트 목록 조회
 * GET /api/posts?username=&tag=&page=
 */
export const list = async (ctx) => {
  const removeHtmlAndShorten = (body) => {
    const filtered = sanitizeHtml(body, sanitizeOption);
    return filtered.length < 200 ? filtered : `${filtered.slice(0, 200)}...`;
  };

  // page의 default값은 1으로 설정한다. 그리고 음수 같은게 들어오면 오류로 처리해 준다.
  const page = parseInt(ctx.query.page || '1', 10);
  if (page < 1) {
    ctx.status = 400;
    return;
  }

  const { tag, username } = ctx.query;
  // tag, username값이 유효하면 객체 안에 넣고, 그렇지 않으면 넣지 않음
  const query = {
    ...(tag ? { tags: tag } : {}),
  };

  try {
    let posts = await Post.find(query)
      .populate('creator')
      .populate('likeId')
      .sort({ _id: -1 })
      .lean()
      .exec();

    if (username) {
      posts = posts.filter(
        ({ creator: { username: filterUserName } }) =>
          filterUserName === username,
      );
    }
    posts = posts.map((post) => {
      post.creator.hashedPassword = '응 뚫어봐';
      return post;
    });

    const postCount = posts.length;

    // 이제 여기서 6개를 뽑아오면 되는 것이다.
    const filteredPost = posts.splice((page - 1) * 6, 6);

    // console.log('postCount >> ', postCount);
    // console.log('last-page >> ', Math.ceil(postCount / 6));

    ctx.set('Access-Control-Expose-Headers', 'Last-Page');
    ctx.set('Last-page', Math.ceil(postCount / 6));
    ctx.body = filteredPost.map((post) => ({
      ...post,
      body: removeHtmlAndShorten(post.body),
    }));
  } catch (e) {
    ctx.throw(500, e);
  }
};

/**
 * 특정 포스트 조회
 * GET /api/posts/:id
 */
export const read = async (ctx) => {
  ctx.body = ctx.state.post;
};

/**
 * 특정 포스트 제거
 * DELETE /api/posts/:id
 */
export const remove = async (ctx) => {
  const { id } = ctx.params;
  try {
    await Post.findByIdAndRemove(id).exec();
    ctx.status = 204;
  } catch (e) {
    ctx.throw(500, e);
  }
};

/**
 * 포스트 수정(특정 필드 변경)
 * PATCH /api/posts/:id
 * { title, body }
 */

export const update = async (ctx) => {
  // PATCH 메서드는 주어진 필드만 교체합니다.
  const { id } = ctx.params;
  // write에서 사용한 schema와 비슷한데, required()가 없습니다.
  const schema = Joi.object().keys({
    title: Joi.string(),
    body: Joi.string(),
    tags: Joi.array().items(Joi.string()),
    capacity: Joi.string().required(),
  });

  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  const nextData = { ...ctx.request.body };
  if (nextData.body) {
    nextData.body = sanitizeHtml(nextData.body, sanitizeOption);
  }

  try {
    const post = await Post.findByIdAndUpdate(id, nextData, {
      new: true,
    }).exec();

    if (!post) {
      ctx.status = 404;
      return;
    }
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};

/**
 * 포스트 좋아요 누르기
 * PATCH /api/posts/:id/:userId
 *
 * postId에 해당하는 필드와 연결되어 있는 likeId
 */

export const like = async (ctx) => {
  const { userId } = ctx.params;
  try {
    const data = await Like.findById(ctx.state.post.likeId);

    // 또한 기존에 userId가 있다면 추가하면 안된다.
    // 기존에 userId가 존재한다면 삭제하면 된다.
    if (data.like_user.includes(userId)) {
      var index = data.like_user.indexOf(userId);
      data.like_user.splice(index, 1);
    } else {
      data.like_user.push(userId);
    }

    const post = await Like.findByIdAndUpdate(ctx.state.post.likeId, data, {
      new: true,
    });

    // 그냥 ctx.state.post에다가 new User를 추가한 것일 뿐이다.

    ctx.state.post.likeId.like_user = post.like_user;
    console.log(ctx.state.post);
    ctx.body = ctx.state.post;
  } catch (e) {
    ctx.throw(500, e);
  }
};
