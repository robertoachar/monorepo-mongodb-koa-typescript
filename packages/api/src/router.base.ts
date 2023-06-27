import * as Koa from 'koa';
import Router from 'koa-router';

export interface IBaseRouter {
  get routers(): Router;
}

export class BaseRouter {
  public routerConfig: Router;

  constructor(prefix?: string) {
    const config: Router.IRouterOptions = {};
    if (prefix) config.prefix = `/${prefix}`;

    this.routerConfig = new Router(config);
  }

  public get routers(): Router {
    return this.routerConfig;
  }

  async output<O>(ctx: Koa.Context, output: O): Promise<void> {
    ctx.body = await output;
  }
}
