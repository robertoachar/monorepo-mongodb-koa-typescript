import { Profile } from '@monorepo/model';
import { IProfile } from '@monorepo/types';
import { randFullName } from '@ngneat/falso';

export interface IProfileFactory {
  stub(): IProfile;
  stubSaved(): Promise<IProfile>;
}

export class ProfileFactory implements IProfileFactory {
  stub(): IProfile {
    return new Profile({ name: randFullName() });
  }

  async stubSaved(): Promise<IProfile> {
    const profile = await new Profile({ name: randFullName() }).save();
    return profile;
  }
}
