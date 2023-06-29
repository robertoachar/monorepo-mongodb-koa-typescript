import { IProfile } from './Profile';

describe('IProfile', () => {
  test('validate properties', () => {
    // Arrange
    const input: IProfile = {
      name: 'Ronaldo',
      id: 'ijdasoi',
      createdAt: '2023/01/01',
      updatedAt: '2023/01/01',
    };

    // Act
    const result = Object.keys(input);

    // Assert
    expect(result.length).toBe(4);

    expect(result.includes('name')).toBeTruthy();
    expect(result.includes('id')).toBeTruthy();
    expect(result.includes('createdAt')).toBeTruthy();
    expect(result.includes('updatedAt')).toBeTruthy();
  });
});
