import { describe, expect, test } from '@jest/globals';
import { connectTest, disconnectTest } from '@monorepo/model';

import { getProfiles } from './getProfiles';
import { Factory, IFactory } from '../../factory';

describe('getProfileById', () => {
  let factory: IFactory;

  beforeAll(async () => {
    factory = new Factory();
    await connectTest();
  });

  test('Should return one profile', async () => {
    // Arrange
    const profile = await factory.profile.stubSaved();

    // Act
    const result = await getProfiles();

    // Assert
    expect(result.length).toBe(1);

    expect(profile.id).toBe(result[0]?.id);
    expect(profile.name).toBe(result[0]?.name);
  });

  test('Should return five profiles', async () => {
    // Arrange
    await factory.profile.stubsSaved(5);

    // Act
    const result = await getProfiles();

    // Assert
    expect(result.length).toBe(5);
  });

  afterAll(async () => {
    await disconnectTest();
  });
});
