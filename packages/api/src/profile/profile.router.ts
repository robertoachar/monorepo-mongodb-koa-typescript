import { ProfileController } from './profile.controller';
import BaseRouter from '../base.router';

export default class ProfileRouter extends BaseRouter {
  private controller = new ProfileController();

  constructor() {
    super('profiles');

    this.routerConfig.get('/', (ctx) => this.controller.list(ctx));
    this.routerConfig.post('/', (ctx) => this.controller.create(ctx));
  }
}
