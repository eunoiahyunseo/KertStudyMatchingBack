import Post from '../../models/post';
import mongoose from 'mongoose';
import Joi from 'joi';
import sanitizeHtml from 'sanitize-html';
const { ObjectId } = mongoose.Types;

const sanitizeOption = {
  allowTags: [
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
  allowedSchemes: ['data', 'http'],
};

export const getPostById = async (ctx, next) => {
  const { id } = ctx.params;
  if (!ObjectId.isValid(id)) {
    ctx.status = 400;
    return;
  }
  try {
    const post = await Post.findById(id);
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
    // 객체가 다음 필드를 가지고 있음을 검증
    title: Joi.string().required(),
    body: Joi.string().required(),
    tags: Joi.array().items(Joi.string()).required(),
  });

  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  const { title, body, tags } = ctx.request.body;
  const post = new Post({
    title,
    body: sanitizeHtml(body, sanitizeHtml),
    tags,
    user: ctx.state.user,
  });

  try {
    await post.save();
    ctx.body = post;
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
  const page = parseInt(ctx.query.page || '1', 10);
  if (page < 1) {
    ctx.status = 400;
    return;
  }

  const { tag, username } = ctx.query;
  // tag, username값이 유효하면 객체 안에 넣고, 그렇지 않으면 넣지 않음
  const query = {
    ...(username ? { 'user.username': username } : {}),
    ...(tag ? { tags: tag } : {}),
  };
  console.log('query >> ', query);
  try {
    const posts = await Post.find(query)
      .sort({ _id: -1 })
      .limit(10)
      .skip((page - 1) * 10)
      .lean()
      .exec();
    console.log('posts >> ', posts);
    const postCount = await Post.countDocuments(query).exec();
    ctx.set('Access-Control-Expose-Headers', 'Last-Page');
    ctx.set('Last-page', Math.ceil(postCount / 10));
    ctx.body = posts.map((post) => ({
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
  console.log('adsf');
  ctx.body = ctx.state.post;
};

/**
 * 특정 포스트 제거
 * DELETE /api/posts/:id
 */

export const remove = async (ctx) => {
  const { id } = ctx.params;
  console.log(id);
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
  console.log('Adsf');
  // PATCH 메서드는 주어진 필드만 교체합니다.
  const { id } = ctx.params;
  // write에서 사용한 schema와 비슷한데, required()가 없습니다.
  const schema = Joi.object().keys({
    title: Joi.string(),
    body: Joi.string(),
    tags: Joi.array().items(Joi.string()),
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
