import * as Koa from 'koa';
import Router from 'koa-router';

const mainRouter = new Router();

mainRouter.get('/', (ctx: Koa.Context) => {
  const body = {
    name: 'API',
  };

  ctx.body = body;
});

export { mainRouter };
