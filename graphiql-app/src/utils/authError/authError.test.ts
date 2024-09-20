import { describe, it, expect } from 'vitest';
import authError from './authError';

describe('authError', () => {
  it('should return "wrongCredentials" for auth/invalid-credential error', () => {
    const error = new Error('Firebase: Error (auth/invalid-credential).');
    expect(authError(error)).toBe('wrongCredentials');
  });

  it('should return "emailAlreadyUse" for auth/email-already-in-use error', () => {
    const error = new Error('Firebase: Error (auth/email-already-in-use).');
    expect(authError(error)).toBe('emailAlreadyUse');
  });

  it('should return "temporaryBlock" for auth/too-many-requests error', () => {
    const error = new Error(
      'Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).',
    );
    expect(authError(error)).toBe('temporaryBlock');
  });

  it('should return "unexpectedError" for any other error', () => {
    const error = new Error('Some other error message');
    expect(authError(error)).toBe('unexpectedError');
  });
});
