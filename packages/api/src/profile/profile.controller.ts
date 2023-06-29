import {
  IProfileCreate,
  IProfileGetById,
  IProfileService,
  ProfileService,
} from '@monorepo/service';
import * as KoaRouter from 'koa-router';

interface IProfileController {
  create(ctx: KoaRouter.RouterContext): Promise<void>;
  list(ctx: KoaRouter.RouterContext): Promise<void>;
  getById(ctx: KoaRouter.RouterContext): Promise<void>;
}

export class ProfileController implements IProfileController {
  private service: IProfileService;

  constructor(profileService?: IProfileService) {
    this.service = profileService || new ProfileService();
  }

  async create(ctx: KoaRouter.RouterContext): Promise<void> {
    const profileData = <IProfileCreate>ctx.request.body;
    ctx.body = await this.service.createProfile(profileData);
  }

  async list(ctx: KoaRouter.RouterContext): Promise<void> {
    ctx.body = await this.service.getProfiles();
  }

  async getById(ctx: KoaRouter.RouterContext): Promise<void> {
    const profileData = ctx.params as unknown as IProfileGetById;
    ctx.body = await this.service.getProfileById(profileData.id);
  }
}
