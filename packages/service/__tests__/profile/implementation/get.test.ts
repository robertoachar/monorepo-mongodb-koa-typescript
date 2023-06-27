import { describe, expect, test } from '@jest/globals';
import { mock } from 'jest-mock-extended';

import { IProfile } from '@monorepo/types';
import { IProfileRepository } from '@monorepo/repository';

import { getProfiles } from '../../../src/Profile/implementations';

describe('get', () => {
  test('Should return empty case no profiles on database', async () => {
    // Arrange
    const repositoryMock = mock<IProfileRepository>();
    repositoryMock.getProfiles.mockReturnValue(Promise.resolve([]));

    // Act
    const result = await getProfiles(repositoryMock);

    // Assert
    expect(result.length).toBe(0);
  });

  test('Should return one', async () => {
    // Arrange
    const repositoryMock = mock<IProfileRepository>();
    const profile: IProfile = {
      name: 'Lucas',
      id: 'asdijda12312',
      createdAt: '2023/01/01',
      updatedAt: '2023/01/01',
    };
    repositoryMock.getProfiles.mockReturnValue(Promise.resolve([profile]));

    // Act
    const result = await getProfiles(repositoryMock);

    // Assert
    expect(result.length).toBe(1);

    expect(result[0]?.name).toBe('Lucas');
    expect(result[0]?.id).toBe('asdijda12312');
    expect(result[0]?.createdAt).toBe('2023/01/01');
    expect(result[0]?.updatedAt).toBe('2023/01/01');
  });

  test('Should return two', async () => {
    // Arrange
    const repositoryMock = mock<IProfileRepository>();
    const profile: IProfile = {
      name: 'Lucas',
      id: 'asdijda12312',
      createdAt: '2023/01/01',
      updatedAt: '2023/01/01',
    };
    repositoryMock.getProfiles.mockReturnValue(
      Promise.resolve([profile, profile])
    );

    // Act
    const result = await getProfiles(repositoryMock);

    // Assert
    expect(result.length).toBe(2);
  });
});
