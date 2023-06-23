import { Profile } from '@monorepo/model';
import { IProfile } from '@monorepo/types';
import { IProfileCreate } from '../interfaces';

export const createProfile = async ({
  name,
}: IProfileCreate): Promise<IProfile> => {
  const newProfile = new Profile({ name });

  await newProfile.save();

  return newProfile;
};
