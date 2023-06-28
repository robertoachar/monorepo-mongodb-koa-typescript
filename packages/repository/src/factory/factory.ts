import { IProfileFactory, ProfileFactory } from './profile.factory';

export interface IFactory {
  profile: IProfileFactory;
}

export class Factory implements IFactory {
  profileFactory: IProfileFactory;

  constructor() {
    this.profileFactory = new ProfileFactory();
  }

  public get profile(): IProfileFactory {
    return this.profileFactory;
  }
}
