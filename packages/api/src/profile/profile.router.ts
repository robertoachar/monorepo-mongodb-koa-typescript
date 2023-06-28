import * as Koa from 'koa';
import { ProfileController } from './profile.controller';
import { BaseRouter, IBaseRouter } from '../router.base';

export default class ProfileRouter extends BaseRouter implements IBaseRouter {
  private controller = new ProfileController();

  constructor() {
    super('profiles');

    this.routerConfig.get('/', (ctx: Koa.Context) => this.controller.list(ctx));
    this.routerConfig.post('/', (ctx: Koa.Context) =>
      this.controller.create(ctx)
    );
    this.routerConfig.get('/:id', (ctx: Koa.Context) =>
      this.controller.list(ctx)
    );
  }
}
