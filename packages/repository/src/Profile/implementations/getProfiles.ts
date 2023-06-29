import { Profile } from '@monorepo/model';
import { IProfile } from '@monorepo/types';

export const getProfiles = async (): Promise<IProfile[]> => {
  const profiles = await Profile.find().sort('name');

  return profiles;
};
