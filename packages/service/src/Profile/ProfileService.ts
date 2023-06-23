import { IProfile } from '@monorepo/types';
import { IProfileRepository, ProfileRepository } from '@monorepo/repository';
import { IProfileCreate, IProfileService } from './interfaces';
import { createProfile, getProfileById, getProfiles } from './implementations';

export class ProfileService implements IProfileService {
  private repository: IProfileRepository = new ProfileRepository();

  constructor(profileRepository?: IProfileRepository) {
    if (profileRepository) {
      this.repository = profileRepository;
    }
  }

  createProfile(profile: IProfileCreate): Promise<IProfile> {
    return createProfile(this.repository, profile);
  }

  getProfileById(id: string): Promise<IProfile | null> {
    return getProfileById(this.repository, id);
  }

  getProfiles(): Promise<IProfile[]> {
    return getProfiles(this.repository);
  }
}
