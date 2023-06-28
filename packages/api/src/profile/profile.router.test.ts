import { describe, expect, test } from '@jest/globals';
import ProfileRouter from './profile.router';

describe('ProfileRouter', () => {
  describe('routers', () => {
    test('should configure routers', () => {
      // Arrange
      const sut = new ProfileRouter();

      // Act
      const result = sut.routers;

      // Assert
      expect(result.stack.length).toBe(3);

      result.stack.forEach((config) => {
        expect(config.opts.prefix).toBe('/profiles');
      });

      expect(result.stack[0]?.methods.toString()).toBe(
        ['HEAD', 'GET'].toString()
      );
      expect(result.stack[0]?.path).toBe('/profiles');

      expect(result.stack[1]?.methods.toString()).toBe(['POST'].toString());
      expect(result.stack[1]?.path).toBe('/profiles');

      expect(result.stack[2]?.methods.toString()).toBe(
        ['HEAD', 'GET'].toString()
      );
      expect(result.stack[2]?.path).toBe('/profiles/:id');
      expect(result.stack[2]?.paramNames[0]?.name).toBe('id');
    });
  });
});
