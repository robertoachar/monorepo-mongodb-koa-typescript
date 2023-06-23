import { IProfile } from '@monorepo/types';
import { IProfileCreate } from './IProfileCreate';

export interface IProfileService {
  createProfile(profile: IProfileCreate): Promise<IProfile>;

  getProfileById(id: string): Promise<IProfile | null>;

  getProfiles(): Promise<IProfile[]>;
}
