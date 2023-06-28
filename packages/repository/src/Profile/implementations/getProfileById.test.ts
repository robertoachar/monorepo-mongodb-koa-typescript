import { describe, expect, test } from '@jest/globals';
import { connect, disconnect, Profile } from '@monorepo/model';
import { MongoMemoryServer } from 'mongodb-memory-server';

import { getProfileById } from './getProfileById';

describe('getProfileById', () => {
  let mongod: MongoMemoryServer;

  beforeAll(async () => {
    mongod = await MongoMemoryServer.create();
    const uri = mongod.getUri();
    await connect(uri);
  });

  test('Should return profile', async () => {
    // Arrange
    const profile = await new Profile({ name: 'Raí' }).save();

    // Act
    const result = await getProfileById(profile.id);

    // Assert
    expect(result?.id).toBe(profile.id);
    expect(result?.name).toBe(profile.name);
  });

  describe('Should return null', () => {
    test('case invalid id', async () => {
      // Arrange
      await new Profile({ name: 'Raí' }).save();

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
    await disconnect();
    await mongod.stop();
  });
});
