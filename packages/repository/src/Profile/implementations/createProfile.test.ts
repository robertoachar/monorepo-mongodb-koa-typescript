import { describe, expect, test } from '@jest/globals';
import { connectTest, disconnectTest, Profile } from '@monorepo/model';

import { createProfile } from './createProfile';

describe('createProfile', () => {
  beforeAll(async () => {
    await connectTest();
  });

  test('Should return profile', async () => {
    // Arrange
    const name = 'Iuri';

    // Act
    const result = await createProfile({ name });

    // Assert
    expect(result?.name).toBe(name);

    // Assert Database
    const resultDatabase = await Profile.findById(result.id);
    expect(result).not.toBeNull();
    expect(resultDatabase?.id).toBe(result.id);
    expect(resultDatabase?.name).toBe(result.name);
  });

  afterAll(async () => {
    await disconnectTest();
  });
});
