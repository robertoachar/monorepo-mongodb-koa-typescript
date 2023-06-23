import Router from 'koa-router';

const mainRouter = new Router();

mainRouter.get('/', (ctx) => {
  const body = {
    name: 'API',
  };

  ctx.body = body;
});

export { mainRouter };
