import { describe, expect, test } from '@jest/globals';
import { mock } from 'jest-mock-extended';

import { IProfileRepository } from '@monorepo/repository';
import { IProfile } from '@monorepo/types';
import { createProfile, getProfileById, getProfiles } from './implementations';
import { ProfileService } from './profile.service';
import { IProfileCreate } from './interfaces';

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
  test('createProfile', async () => {
    // Arrange
    const repositoryMock = mock<IProfileRepository>();
    const sut = new ProfileService(repositoryMock);
    const input: IProfileCreate = {
      name: 'Djalma',
    };

    // Act
    const result = await sut.createProfile(input);

    // Assert
    expect(jest.isMockFunction(createProfile)).toBeTruthy();
    expect(result).toBe(profile);
  });

  test('getProfileById', async () => {
    // Arrange
    const repositoryMock = mock<IProfileRepository>();
    const sut = new ProfileService(repositoryMock);
    const input: string = 'asdin1290';

    // Act
    const result = await sut.getProfileById(input);

    // Assert
    expect(jest.isMockFunction(getProfileById)).toBeTruthy();
    expect(result).toBe(profile);
  });

  test('getProfiles', async () => {
    // Arrange
    const repositoryMock = mock<IProfileRepository>();
    const sut = new ProfileService(repositoryMock);

    // Act
    const result = await sut.getProfiles();

    // Assert
    expect(jest.isMockFunction(getProfiles)).toBeTruthy();
    expect(result).toHaveLength(1);
    expect(result[0]).toBe(profile);
  });
});
