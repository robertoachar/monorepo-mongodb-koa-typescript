import { describe, expect, test } from '@jest/globals';
import { mock } from 'jest-mock-extended';

import { IProfile } from '@monorepo/types';
import { IProfileRepository } from '@monorepo/repository';

import { createProfile } from '../../../src/Profile/implementations';
import { IProfileCreate } from '../../../src';

describe('create', () => {
  describe('Should raise exception', () => {
    test('case empty name', async () => {
      // Arrange
      const repositoryMock = mock<IProfileRepository>();
      const input: IProfileCreate = {
        name: '',
      };

      // Act / Assert
      expect(createProfile(repositoryMock, input)).rejects.toThrow(Error);
      expect(createProfile(repositoryMock, input)).rejects.toThrow(
        'Nome é obrigatório'
      );
      expect(repositoryMock.createProfile).toHaveBeenCalledTimes(0);
    });
  });

  test('Case input is valid', async () => {
    // Arrange
    const repositoryMock = mock<IProfileRepository>();
    const input: IProfileCreate = {
      name: 'Mauro Silva',
    };
    const profile: IProfile = {
      name: 'Mauro Silva',
      id: 'asdijda12312',
      createdAt: '2023/01/01',
      updatedAt: '2023/01/01',
    };
    repositoryMock.createProfile.mockReturnValue(Promise.resolve(profile));

    // Act
    const result = await createProfile(repositoryMock, input);

    expect(result.name).toBe('Mauro Silva');
    expect(result.id).toBe('asdijda12312');
    expect(result.createdAt).toBe('2023/01/01');
    expect(result.updatedAt).toBe('2023/01/01');
  });
});
