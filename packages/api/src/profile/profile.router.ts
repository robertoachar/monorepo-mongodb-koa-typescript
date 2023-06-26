import Router from 'koa-router';
import { ProfileController } from './profile.controller';

export default class ProfileRouter {
  private routerConfig = new Router({
    prefix: '/profiles',
  });

  private controller = new ProfileController();

  constructor() {
    this.routerConfig.get('/', (ctx) => this.controller.list(ctx));
    this.routerConfig.post('/', (ctx) => this.controller.create(ctx));
  }

  public get routers(): Router {
    return this.routerConfig;
  }
}
