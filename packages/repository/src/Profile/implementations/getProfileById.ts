import { Profile } from '@monorepo/model';
import { IProfile } from '@monorepo/types';

export const getProfileById = async (id: string): Promise<IProfile | null> => {
  const profile = await Profile.findById(id);

  return profile;
};
