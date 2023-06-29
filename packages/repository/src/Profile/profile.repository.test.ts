import { describe, expect, test } from '@jest/globals';

import { IProfile } from '@monorepo/types';
import { createProfile, getProfileById, getProfiles } from './implementations';
import { IProfileCreate, IProfileRepository } from './interfaces';
import { ProfileRepository } from './ProfileRepository';

const profile: IProfile = {
  name: 'Lucas',
  id: 'asdin1290',
  createdAt: '2023/01/01',
  updatedAt: '2023/01/01',
};
jest.mock('./implementations', () => ({
  createProfile: jest.fn(() => profile),
  getProfileById: jest.fn(() => profile),
  getProfiles: jest.fn(() => [profile]),
}));

describe('ProfileService', () => {
  let sut: IProfileRepository;

  beforeEach(() => {
    sut = new ProfileRepository();
  });

  test('createProfile', async () => {
    // Arrange
    const input: IProfileCreate = {
      name: 'Djalma',
    };

    // Act
    const result = await sut.createProfile(input);

    // Assert - mock
    expect(jest.isMockFunction(createProfile)).toBeTruthy();
    expect(createProfile).toHaveBeenCalledTimes(1);
    expect(createProfile).toHaveBeenCalledWith(input);

    // Assert - result
    expect(result).toBe(profile);
  });

  test('getProfileById', async () => {
    // Arrange
    const input: string = 'asdin1290';

    // Act
    const result = await sut.getProfileById(input);

    // Assert - mock
    expect(jest.isMockFunction(getProfileById)).toBeTruthy();
    expect(getProfileById).toHaveBeenCalledTimes(1);
    expect(getProfileById).toHaveBeenCalledWith(input);

    // Assert - result
    expect(result).toBe(profile);
  });

  test('getProfiles', async () => {
    // Arrange

    // Act
    const result = await sut.getProfiles();

    // Assert - mock
    expect(jest.isMockFunction(getProfiles)).toBeTruthy();
    expect(getProfiles).toHaveBeenCalledTimes(1);
    expect(getProfiles).toHaveBeenCalledWith();

    // Assert - result
    expect(result).toHaveLength(1);

    expect(result[0]).toBe(profile);
  });
});
