import Router from 'koa-router';

export default class BaseRouter {
  public routerConfig: Router;

  constructor(prefix: string) {
    this.routerConfig = new Router({
      prefix: `/${prefix}`,
    });
  }

  public get routers(): Router {
    return this.routerConfig;
  }
}
