import { IProfile } from '@monorepo/types';
import { IProfileCreate, IProfileRepository } from './interfaces';
import { createProfile, getProfileById, getProfiles } from './implementations';

export class ProfileRepository implements IProfileRepository {
  createProfile(profile: IProfileCreate): Promise<IProfile> {
    return createProfile(profile);
  }

  getProfileById(id: string): Promise<IProfile | null> {
    return getProfileById(id);
  }

  getProfiles(): Promise<IProfile[]> {
    return getProfiles();
  }
}
