import { ProfileService } from '@monorepo/service';

export const list = async (ctx): Promise<void> => {
  const profileService = new ProfileService();

  const profiles = await profileService.getProfiles();

  ctx.body = profiles;
};
