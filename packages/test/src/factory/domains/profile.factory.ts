import { Profile } from '@monorepo/model';
import { IProfile } from '@monorepo/types';
import { randFullName } from '@ngneat/falso';

export interface IProfileFactory {
  stub(): IProfile;
  stubSaved(): Promise<IProfile>;
  stubsSaved(number: number): Promise<IProfile[]>;
}

export interface IProfileStub {
  name?: string;
}

export class ProfileFactory implements IProfileFactory {
  stub(stub?: IProfileStub): IProfile {
    return new Profile({ name: stub?.name?.toString() || randFullName() });
  }

  async stubSaved(stub?: IProfileStub): Promise<IProfile> {
    const profile = await new Profile({
      name: stub?.name?.toString() || randFullName(),
    }).save();
    return profile;
  }

  async stubsSaved(number: number): Promise<IProfile[]> {
    const list: Promise<IProfile>[] = [];

    for (let i = number; i > 1; i -= 1) {
      list.push(this.stubSaved());
    }

    return Promise.all<IProfile>(list);
  }
}
