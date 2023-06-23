import { IProfileRepository } from '@monorepo/repository';
import { IProfile } from '@monorepo/types';

export const getProfileById = async (
  repository: IProfileRepository,
  id: string
): Promise<IProfile | null> => repository.getProfileById(id);
