import Router from 'koa-router';

import { create, list } from './middlewares';

const profileRouter = new Router({
  prefix: '/profiles',
});

profileRouter.get('/', list);
profileRouter.post('/', create);

export { profileRouter };
