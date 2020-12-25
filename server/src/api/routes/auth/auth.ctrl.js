import Joi from '@hapi/joi';
// import jwt from 'jsonwebtoken';
import User from '../../../models/user';
import jwt from 'jsonwebtoken';

// router POST /api/auth/register
// desc Register
// access public
export const register = async (req, res) => {
  console.log('register 요청', req.body);
  const { userId, email, password, phone, name } = req.body;
  //유효성 검사
  const schema = Joi.object().keys({
    userId: Joi.string().min(3).max(20).required(),
    password: Joi.string().required(),
    email: Joi.string().min(3).max(50).required(),
    name: Joi.string().min(2).max(20).required(),
    phone: Joi.string()
      .regex(/^[0-9]+$/)
      .min(9)
      .max(12)
      .required(),
  });

  const validation = schema.validate(req.body);
  if (validation.error) {
    res.status(400).json({ msg: '회원가입실패' });
    console.error('에러값', validation.error);
  }
  try {
    const exist = await User.findByUserId(userId);
    if (exist) return res.status(409).json({ msg: '이미 가입된 ID입니다.' });
    const user = new User({ name, email, password, phone, userId });
    await user.setPassword(password);
    await user.save();
    const token = user.generateToken();
    res.cookie('access_token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 5,
    });
    res.json(user.serialize());
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
};

// router : POST /api/auth/login
// access : public
// desc : login
export const login = async (req, res) => {
  const { userId, password } = req.body;
  if (!userId || !password) return res.status(401).json({ msg: '빈칸을 모두 채워주세요.' });
  try {
    //계정 확인
    const exist = await User.findByUserId(userId);
    if (!exist) return res.status(401).json({ msg: '아이디를 확인해주시기바랍니다.' });
    //암호 확인
    const valid = await exist.checkPassword(password);
    if (!valid) return res.status(401).json({ msg: '암호를 확인해주시기바랍니다.' });
    // 인증
    const token = exist.generateToken();
    res.cookie('access_token', token, {
      maxAge: 1000 * 60 * 2,
      httpOnly: true,
    });
    res.json(exist.serialize());
  } catch (e) {
    res.status(404).json({ msg: e.message });
  }
};

export const check = async (req, res) => {
  const token = req.cookies['access_token'];
  if (!token) return res.status(401).json({ msg: '로그인중이아님.' });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userData = {
      _id: decoded._id,
      userId: decoded.userId,
    };
    res.status(200).json(userData);
  } catch (e) {
    res.status(404).json({ msg: e.message });
  }
};

export const logout = async (req, res) => {
  res.clearCookie('access_token');
  res.json({ msg: 'clearCookie' });
};
