import {
  IProfileCreate,
  IProfileService,
  ProfileService,
} from '@monorepo/service';
import * as Koa from 'koa';

interface IProfileController {
  create(ctx: Koa.Context): Promise<void>;
  list(ctx: Koa.Context): Promise<void>;
}

export class ProfileController implements IProfileController {
  private service: IProfileService;

  constructor(profileService?: IProfileService) {
    this.service = profileService || new ProfileService();
  }

  async create(ctx: Koa.Context): Promise<void> {
    const profileData = <IProfileCreate>ctx.request.body;
    ctx.body = await this.service.createProfile(profileData);
  }

  async list(ctx: Koa.Context): Promise<void> {
    ctx.body = await this.service.getProfiles();
  }
}
