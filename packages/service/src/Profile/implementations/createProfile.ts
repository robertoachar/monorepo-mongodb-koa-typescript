import { IProfile } from '@monorepo/types';
import { IProfileRepository } from '@monorepo/repository';
import { IProfileCreate } from '../interfaces';

export const createProfile = async (
  repository: IProfileRepository,
  profile: IProfileCreate
): Promise<IProfile> => {
  if (!profile.name) {
    throw new Error('Nome é obrigatório');
  }

  return repository.createProfile(profile);
};
