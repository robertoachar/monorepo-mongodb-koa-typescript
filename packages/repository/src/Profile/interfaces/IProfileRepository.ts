import { IProfile } from '@monorepo/types';
import { IProfileCreate } from './IProfileCreate';

export interface IProfileRepository {
  createProfile(profile: IProfileCreate): Promise<IProfile>;
  getProfileById(id: string): Promise<IProfile | null>;
  getProfiles(): Promise<IProfile[]>;
}
