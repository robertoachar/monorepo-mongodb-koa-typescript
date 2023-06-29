import * as KoaRouter from 'koa-router';
import { ProfileController } from './profile.controller';
import { BaseRouter, IBaseRouter } from '../router.base';

export default class ProfileRouter extends BaseRouter implements IBaseRouter {
  private controller = new ProfileController();

  constructor() {
    super('profiles');

    this.routerConfig.get('/', (ctx: KoaRouter.RouterContext) =>
      this.controller.list(ctx)
    );
    this.routerConfig.get('/:id', (ctx: KoaRouter.RouterContext) =>
      this.controller.getById(ctx)
    );
    this.routerConfig.post('/', (ctx: KoaRouter.RouterContext) =>
      this.controller.create(ctx)
    );
  }
}
