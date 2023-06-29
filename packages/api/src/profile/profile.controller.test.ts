import { describe, expect, test } from '@jest/globals';
import { mock } from 'jest-mock-extended';
import { IProfileCreate, IProfileService } from '@monorepo/service';
import { IProfile } from '@monorepo/types';
import { createMockContext } from '@shopify/jest-koa-mocks';
import { ProfileController } from './profile.controller';

describe('IProfileController', () => {
  describe('create', () => {
    test('should add profile on context body', async () => {
      // Arrange
      const serviceMock = mock<IProfileService>();
      const createProfile: IProfileCreate = {
        name: 'Djair',
      };
      const profile: IProfile = {
        name: 'Djair',
        id: 'asdin1290',
        createdAt: '2023/01/01',
        updatedAt: '2023/01/01',
      };
      const context = createMockContext({ requestBody: createProfile });
      serviceMock.createProfile
        .calledWith(createProfile)
        .mockReturnValue(Promise.resolve(profile));

      const sut = new ProfileController(serviceMock);
      // Act
      await sut.create(context);

      // Assert
      const result = context.body as IProfile;
      expect(result).toBe(profile);
    });
  });

  describe('list', () => {
    test('should add profiles on context body', async () => {
      // Arrange
      const serviceMock = mock<IProfileService>();
      const profile: IProfile = {
        name: 'Djair',
        id: 'asdin1290',
        createdAt: '2023/01/01',
        updatedAt: '2023/01/01',
      };
      const context = createMockContext();
      serviceMock.getProfiles
        .calledWith()
        .mockReturnValue(Promise.resolve([profile]));

      const sut = new ProfileController(serviceMock);
      // Act
      await sut.list(context);

      // Assert
      const result = context.body as IProfile[];
      expect(result.length).toBe(1);
      expect(result[0]).toBe(profile);
    });
  });

  describe('getById', () => {
    test('should add profile on context body', async () => {
      // Arrange
      const serviceMock = mock<IProfileService>();
      const profile: IProfile = {
        name: 'Djair',
        id: 'asdin1290',
        createdAt: '2023/01/01',
        updatedAt: '2023/01/01',
      };
      const context = createMockContext({
        customProperties: { params: { id: profile.id } },
      });
      serviceMock.getProfileById
        .calledWith(profile.id)
        .mockReturnValue(Promise.resolve(profile));

      const sut = new ProfileController(serviceMock);
      // Act
      await sut.getById(context);

      // Assert
      const result = context.body as IProfile;
      expect(result).toBe(profile);
    });
  });
});
