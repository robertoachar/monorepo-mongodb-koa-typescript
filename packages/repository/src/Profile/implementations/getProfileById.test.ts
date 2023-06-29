import { describe, expect, test } from '@jest/globals';
import { connectTest, disconnectTest } from '@monorepo/model';
import { Factory, IFactory } from '@monorepo/test';

import { getProfileById } from './getProfileById';

describe('getProfileById', () => {
  let factory: IFactory;

  beforeAll(async () => {
    factory = new Factory();
    await connectTest();
  });

  test('Should return profile', async () => {
    // Arrange
    const profile = await factory.profile.stubSaved();

    // Act
    const result = await getProfileById(profile.id);

    // Assert
    expect(result?.id).toBe(profile.id);
    expect(result?.name).toBe(profile.name);
  });

  describe('Should return null', () => {
    test('case invalid id', async () => {
      // Arrange
      await factory.profile.stubSaved();

      // Act
      const result = await getProfileById('649c746c3682a45c3d808e49');

      // Assert
      expect(result).toBeNull();
    });

    test('case empty database', async () => {
      // Arrange

      // Act
      const result = await getProfileById('649c746c3682a45c3d808e49');

      // Assert
      expect(result).toBeNull();
    });
  });

  afterAll(async () => {
    await disconnectTest();
  });
});
