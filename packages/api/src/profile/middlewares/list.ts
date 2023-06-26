import * as Koa from 'koa';
import { ProfileService } from '@monorepo/service';

export const list = async (ctx: Koa.Context): Promise<void> => {
  const profileService = new ProfileService();

  const profiles = await profileService.getProfiles();

  ctx.body = profiles;
};
