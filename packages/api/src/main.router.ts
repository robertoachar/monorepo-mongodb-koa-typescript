import * as Koa from 'koa';
import { BaseRouter, IBaseRouter } from './router.base';

export default class MainRouter extends BaseRouter implements IBaseRouter {
  constructor() {
    super();

    this.routerConfig.get('/', (ctx: Koa.Context) => {
      const body = {
        name: 'API',
      };

      ctx.body = body;
    });
  }
}
