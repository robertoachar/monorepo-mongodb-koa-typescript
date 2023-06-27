import { describe, expect, test } from '@jest/globals';
import { mock } from 'jest-mock-extended';

import { IProfile } from '@monorepo/types';
import { IProfileRepository } from '@monorepo/repository';

import { getProfileById } from '../../../src/Profile/implementations';

describe('get', () => {
  test('Should return empty case no profiles on database', async () => {
    // Arrange
    const id = 'ssijioj';
    const repositoryMock = mock<IProfileRepository>();
    repositoryMock.getProfileById
      .calledWith(id)
      .mockReturnValue(Promise.resolve(null));

    // Act
    const result = await getProfileById(repositoryMock, id);

    // Assert
    expect(result).toBe(null);
  });

  test('Should return data', async () => {
    // Arrange
    const id = 'ssijioj';
    const repositoryMock = mock<IProfileRepository>();
    const profile: IProfile = {
      name: 'Lucas',
      id,
      createdAt: '2023/01/01',
      updatedAt: '2023/01/01',
    };
    repositoryMock.getProfileById
      .calledWith(id)
      .mockReturnValue(Promise.resolve(profile));

    // Act
    const result = await getProfileById(repositoryMock, id);

    // Assert
    expect(result?.name).toBe('Lucas');
    expect(result?.id).toBe(id);
    expect(result?.createdAt).toBe('2023/01/01');
    expect(result?.updatedAt).toBe('2023/01/01');
  });
});
