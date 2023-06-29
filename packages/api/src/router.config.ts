import Koa from 'koa';
import { IBaseRouter } from './router.base';
import MainRouter from './main.router';
import ProfileRouter from './profile/profile.router';

export default class ConfigRouter {
  app: Koa;

  routers: IBaseRouter[];

  constructor(app: Koa) {
    this.routers = [new MainRouter(), new ProfileRouter()];
    this.app = app;
  }

  public config(): void {
    this.routers.forEach((router) => {
      this.app.use(router.routers.routes());
      this.app.use(router.routers.allowedMethods());
    });
  }
}
