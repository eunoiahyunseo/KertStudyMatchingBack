import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';
import checkLoggedIn from '../../lib/checkLoggedIn';

const posts = new Router();

/**
 * checkLoggedIn >> 로그인 확인 미들웨어
 * getPostById >> id parameter가 들어 있는 모든 요청에서 실행 -> ctx.state.post에 저장
 * postsCtrl.checkOwnPost >> ctx.state에 있는 user와 post정보를 활용하여
 * 해당 post가 user것인지를 확인하는 과정이다.
 */

posts.get('/', postsCtrl.list);
// Login 전용 -> ctx.state.user에 있는 정보를 활용해서 정보를 저장해야 하기 때문이다.
posts.post('/', checkLoggedIn, postsCtrl.write);

const post = new Router();
post.get('/', postsCtrl.read);
// delete와 update는 해당 post가 자기것 이여지만 가능하니까 미들웨어 추가 해줘야 한다.
post.delete('/', checkLoggedIn, postsCtrl.checkOwnPost, postsCtrl.remove);
post.patch('/', checkLoggedIn, postsCtrl.checkOwnPost, postsCtrl.update);
post.patch('/:userId', checkLoggedIn, postsCtrl.like);

posts.use('/:id', postsCtrl.getPostById, post.routes());

export default posts;
