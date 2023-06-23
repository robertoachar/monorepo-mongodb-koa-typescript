import { IProfile } from '@monorepo/types';
import { IProfileRepository } from '@monorepo/repository';

export const getProfiles = async (
  repository: IProfileRepository
): Promise<IProfile[]> => repository.getProfiles();
