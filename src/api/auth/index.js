import Router from 'koa-router';
import * as authCtrl from './auth.ctrl';

const auth = new Router();

auth.post('/register', authCtrl.register);

auth.post('/login', authCtrl.login);

auth.get('/check', authCtrl.check);

auth.post('/logout', authCtrl.logout);

auth.patch('/:id', authCtrl.editProfile);

auth.post('/like_user', authCtrl.check_like_user);

export default auth;
