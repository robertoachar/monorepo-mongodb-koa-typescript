import * as Koa from 'koa';
import { IProfile } from '@monorepo/types';
import { ProfileController } from './profile.controller';
import { BaseRouter, IBaseRouter } from '../router.base';

export default class ProfileRouter extends BaseRouter implements IBaseRouter {
  private controller = new ProfileController();

  constructor() {
    super('profiles');

    this.routerConfig.get('/', (ctx: Koa.Context) =>
      super.output<Promise<IProfile[]>>(ctx, this.controller.list())
    );
    this.routerConfig.post('/', (ctx) => this.controller.create(ctx));
  }
}
