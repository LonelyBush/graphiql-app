import { describe, it, expect } from 'vitest';
import searchParamURLConverter from './search-params-converter';

describe('searchParamURLConverter', () => {
  it('should convert a search param string into an array of header objects', () => {
    const search = '?name=John&age=30';
    const result = searchParamURLConverter(search);

    expect(result).toEqual([
      { 'header-key': 'name', 'header-value': 'John' },
      { 'header-key': 'age', 'header-value': '30' },
    ]);
  });

  it('should handle an empty search param string', () => {
    const search = '';
    const result = searchParamURLConverter(search);

    expect(result).toEqual([]);
  });

  it('should handle special characters in search params', () => {
    const search = '?key=value%20with%20spaces&key2=value@special';
    const result = searchParamURLConverter(search);

    expect(result).toEqual([
      { 'header-key': 'key', 'header-value': 'value with spaces' },
      { 'header-key': 'key2', 'header-value': 'value@special' },
    ]);
  });
});
