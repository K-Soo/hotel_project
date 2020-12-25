import express from 'express';
import * as authCtrl from './auth.ctrl';

const auth = express.Router();

// api/auth
auth.post('/register', authCtrl.register);
auth.post('/login', authCtrl.login);
auth.post('/check', authCtrl.check);
auth.post('/logout', authCtrl.logout);

export default auth;
