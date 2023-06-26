import { ProfileController } from './profile.controller';
import { BaseRouter, IBaseRouter } from '../router.base';

export default class ProfileRouter extends BaseRouter implements IBaseRouter {
  private controller = new ProfileController();

  constructor() {
    super('profiles');

    this.routerConfig.get('/', (ctx) => this.controller.list(ctx));
    this.routerConfig.post('/', (ctx) => this.controller.create(ctx));
  }
}
