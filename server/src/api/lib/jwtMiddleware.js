import jwt from 'jsonwebtoken';
// import User from '../models/user';

const jwtMiddleware = async (req, res, next) => {
  const token = req.cookies['access_token'];

  if (!token) return next();

  try {
    // const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // console.log('decoded: ', decoded);
    // res.locals.user = {
    //   _id: decoded._id,
    //   userId: decoded.userId,
    // };
    // const now = Math.floor(Date.now() / 1000);
    // if (decoded.exp - now < 60 * 60 * 24 * 3.5) {
    //   const user = await User.findById(decoded._id);
    //   const token = user.generateToken();

    //   ctx.cookies.set('access_token', token, {
    //     maxAge: 1000 * 60 * 60 * 24 * 7, // 7일
    //     httpOnly: true,
    //   });
    // }
    next();
  } catch (e) {
    console.log('토근검증실패');
    next();
  }
};

export default jwtMiddleware;
