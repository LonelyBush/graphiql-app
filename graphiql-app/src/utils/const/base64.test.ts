import { describe, it, expect } from 'vitest';
import createEncodedUrl, { decodeToString, encodeToBase64 } from './base64';

describe('encodeToBase64', () => {
  it('should encode a string to Base64', () => {
    const result = encodeToBase64('Hello, World!');
    expect(result).toBe('SGVsbG8sIFdvcmxkIQ==');
  });
});

describe('decodeToString', () => {
  it('should decode a Base64 string to the original string', () => {
    const result = decodeToString('SGVsbG8sIFdvcmxkIQ==');
    expect(result).toBe('Hello, World!');
  });
});

describe('createEncodedUrl', () => {
  it('should create an encoded URL without body and headers', () => {
    const result = createEncodedUrl('GET', 'https://example.com');
    expect(result).toBe('GET/aHR0cHM6Ly9leGFtcGxlLmNvbQ==');
  });

  it('should create an encoded URL with body but without headers', () => {
    const result = createEncodedUrl('POST', 'https://example.com', 'Test body');
    expect(result).toBe('POST/aHR0cHM6Ly9leGFtcGxlLmNvbQ==/VGVzdCBib2R5');
  });

  it('should create an encoded URL with body and headers', () => {
    const result = createEncodedUrl(
      'POST',
      'https://example.com',
      'Test body',
      {
        Authorization: 'Bearer token',
        'Content-Type': 'application/json',
      },
    );
    const formattedResult = result.replace(/\+/g, '%20');

    expect(formattedResult).toBe(
      'POST/aHR0cHM6Ly9leGFtcGxlLmNvbQ==/VGVzdCBib2R5?Authorization=Bearer%20token&Content-Type=application%2Fjson',
    );
  });

  it('should create an encoded URL without body but with headers', () => {
    const result = createEncodedUrl('GET', 'https://example.com', undefined, {
      'X-Custom-Header': 'CustomValue',
    });
    expect(result).toBe(
      'GET/aHR0cHM6Ly9leGFtcGxlLmNvbQ==?X-Custom-Header=CustomValue',
    );
  });
});
