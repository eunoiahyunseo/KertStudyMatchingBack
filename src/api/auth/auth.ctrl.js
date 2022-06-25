import Joi from 'joi';
import User from '../../models/user';

/**
 * POST /api/auth/register
 * {
 *      email: 'hyunseo',
 *      password: '123123',
 * }
 *
 * default username은 user[번호(number)]로 한다.
 */
export const register = async (ctx) => {
  // 회원가입
  // request body 검증하기
  const schema = Joi.object().keys({
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ['com', 'net', 'kr', 'org'] },
      })
      .required(),
    password: Joi.string().required(),
  });
  const result = schema.validate(ctx.request.body);

  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  const { email, password } = ctx.request.body;
  try {
    // username이 이미 존재하는지 확인
    const exists = await User.findByEmail(email);
    if (exists) {
      ctx.status = 409; // Conflict
      return;
    }

    const userCount = await User.countDocuments({}).exec();
    // user에는 username과 password가 있어야 한다.
    const user = new User({
      email,
      username: `User-${userCount + 1}`,
    });

    await user.setPassword(password); // 비밀번호 설정
    await user.save(); // 데이터베이스에 저장

    // hashedPassword를 제거한 user문서를 반환
    ctx.body = user.serialize();
    const token = user.generateToken();

    ctx.cookies.set('access_token', token, {
      maxAge: 100 * 60 * 60 * 24 * 7, // 7일
      // js로 cookie에 접근 못하게 해야 한다. CSRF공격에 대비해야 한다
      // 추후에 referer정책 수정을 해서 방어 해줘야만 한다.
      httpOnly: true,
      // sameSite: 'none',
      // secure: true,
    });
  } catch (e) {
    ctx.throw(500, e);
  }
};

/**
 * POST /api/auth/login
 * {
 *      email: 'heart20021010@gmail.com',
 *      password: '123123',
 * }
 */
export const login = async (ctx) => {
  // 로그인
  const { email, password } = ctx.request.body;

  // username, password가 없으면 에러 처리
  if (!email || !password) {
    ctx.status = 401;
    return;
  }

  try {
    const user = await User.findByEmail(email);
    // 계정이 존재하지 않으면 에러 러리
    if (!user) {
      ctx.status = 401;
      return;
    }

    const valid = await user.checkPassword(password);
    // 잘못된 비밀번호
    if (!valid) {
      ctx.status = 401;
      return;
    }
    ctx.body = user.serialize();
    // generateToken은 _id와 username으로 만든다
    // 그리고 꼭 전에 hashedPassword를 삭제해야 한다.
    const token = user.generateToken();
    ctx.cookies.set('access_token', token, {
      maxAge: 10000 * 60 * 60 * 24 * 7, // 7일
      httpOnly: true,
      // sameSite: 'none',
      // secure: true,
    });
  } catch (e) {
    ctx.throw(500, e);
  }
};

/**
 * GET /api/auth/check
 * token이 잘 발급되는지 확인용
 */
export const check = async (ctx) => {
  // 로그인 상태 확인
  const { user } = ctx.state;
  if (!user) {
    // 로그인 중 아님
    ctx.status = 401; //Unauthorized
    return;
  }
  ctx.body = user;
};

/**
 * POST /api/auth/logout
 */
export const logout = async (ctx) => {
  // 로그 아웃
  ctx.cookies.set('access_token');
  ctx.status = 204;
};

/**
 * PATCH /api/auth/:id
 */

export const editProfile = async (ctx) => {
  console.log('Asdfasdf');
  const { id } = ctx.params;

  const schema = Joi.object().keys({
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ['com', 'net', 'kr', 'org'] },
      })
      .required(),
    username: Joi.string().required(),
  });

  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  // bdoy에는 무조건 username과 email, _id가 들어가야 한다
  const nextData = { ...ctx.request.body };

  try {
    const user = await User.findByIdAndUpdate(id, nextData, {
      new: true,
    }).exec();

    if (!user) {
      ctx.status = 404;
      return;
    }

    user.serialize();
    const token = user.generateToken();
    // 또한 Profile을 재발급 하면 토큰을 재발급 해야 한다.
    ctx.cookies.set('access_token', token, {
      maxAge: 100 * 60 * 60 * 24 * 7, // 7일
      httpOnly: true,
    });

    console.log('쿠키를 업데이트 한 프로필로 재 발급 하였습니다.');

    ctx.body = user;
  } catch (e) {
    ctx.throw(500, e);
  }
};

/**
 * 마지막으로 like_user배열을 받으면 ObjectId를 모두 User와 매핑 시켜주는 API를 작성해야 한다.
 * GET /api/auth/like_user
 *
 * 이 떄 ctx.body로 like_user 배열이 올 것이다.
 */
export const check_like_user = async (ctx) => {
  const like_user = ctx.request.body;
  const result = await Promise.all(
    like_user.map((userId) => {
      return User.findById(userId);
    }),
  );

  const userInfo = result.map((user) => {
    user.hashedPassword = '못 뚫어~';
    return user;
  });
  ctx.body = userInfo;
};
