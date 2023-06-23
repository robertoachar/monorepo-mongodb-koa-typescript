import * as Koa from 'koa';
import { ProfileService } from '@monorepo/service';

interface IRequestProfileCreate {
  name: string;
}

export const create = async (ctx: Koa.Context): Promise<void> => {
  const { name } = <IRequestProfileCreate>ctx.request.body;

  const profileService = new ProfileService();

  const profile = await profileService.createProfile({ name });

  ctx.body = profile;
};
