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
  private service: IProfileService = new ProfileService();

  constructor(profileService?: IProfileService) {
    if (profileService) {
      this.service = profileService;
    }
  }

  async create(ctx: Koa.Context): Promise<void> {
    const profileData = <IProfileCreate>ctx.request.body;
    const profile = await this.service.createProfile(profileData);

    ctx.body = profile;
  }

  async list(ctx: Koa.Context): Promise<void> {
    const profiles = await this.service.getProfiles();

    ctx.body = profiles;
  }
}
