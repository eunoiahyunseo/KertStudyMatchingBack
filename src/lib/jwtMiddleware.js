/* eslint-disable no-undef */
import jwt from 'jsonwebtoken';
import User from '../models/user';

// jwt를 인증하는 미들웨어를 만들어서 각각의 요청 전에 실행해 줘야 한다.
// access_token은 cookie형태로 들어가 있다.
const jwtMiddleware = async (ctx, next) => {
  const token = ctx.cookies.get('access_token');

  // 만약 token이 없다면 그냥 넘어간다.
  if (!token) {
    return next();
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // ctx.state.user에 user정보를 저장해 둔다.
    ctx.state.user = {
      _id: decoded._id,
      username: decoded.username,
      email: decoded.email,
    };
    const now = Math.floor(Date.now() / 1000);
    if (decoded.exp - now < 60 * 60 * 24 * 3.5) {
      const user = await User.findById(decoded._id);
      const token = user.generateToken();
      ctx.cookies.set('access_token', token, {
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7일
        httpOnly: true,
        // sameSite: 'none',
        // secure: true,
      });
    }
    return next();
  } catch (e) {
    // 토큰 검증 실패
    return next();
  }
};

export default jwtMiddleware;
