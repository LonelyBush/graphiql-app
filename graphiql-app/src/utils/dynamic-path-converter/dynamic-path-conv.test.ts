import { describe, it, expect } from 'vitest';
import dynamicPathConverter from './dynamic-path-conv';

describe('dynamicPathConverter', () => {
  it('should convert path string to an object with url and body', () => {
    const path = 'example.com/123';
    const result = dynamicPathConverter(path);

    expect(result).toEqual({
      url: 'example.com',
      body: '123',
    });
  });

  it('should handle undefined path and return an empty object', () => {
    const result = dynamicPathConverter(undefined);

    expect(result).toEqual({});
  });

  it('should handle multiple segments in path', () => {
    const path = 'example.com/abc';
    const result = dynamicPathConverter(path);

    expect(result).toEqual({
      url: 'example.com',
      body: 'abc',
    });
  });
});
