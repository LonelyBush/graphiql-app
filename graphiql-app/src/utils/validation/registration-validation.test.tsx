import { describe, it, expect } from 'vitest';
import { ValidationError } from 'yup';
import getRegistrationSchema from './registration-validation';

const mockTranslate = (key: string) => {
  const translations: { [key: string]: string } = {
    RemoveSpecialCharacters: 'Please remove special characters',
    NicknameRequired: 'Nickname is required',
    InvalidEmail: 'Invalid email format',
    EmailRequired: 'Email is required',
    PasswordRequired: 'Password is required',
    PasswordContainsNumber: 'Password must contain a number',
    PasswordContainsUppercase: 'Password must contain an uppercase letter',
    PasswordContainsLowercase: 'Password must contain a lowercase letter',
    PasswordContainsSpecialCharacter:
      'Password must contain a special character',
    PasswordMinLength: 'Password must be at least 6 characters',
    PasswordMustMatch: 'Passwords must match',
  };
  return translations[key] || key;
};

describe('getRegistrationSchema', () => {
  const schema = getRegistrationSchema(mockTranslate);

  it('should validate valid data', async () => {
    const validData = {
      nickname: 'JohnDoe123',
      email: 'johndoe@example.com',
      password: 'Password123!',
      confirmPassword: 'Password123!',
    };

    await expect(schema.isValid(validData)).resolves.toBe(true);
  });

  it('should invalidate data with missing fields', async () => {
    const invalidData = {
      nickname: '',
      email: '',
      password: '',
      confirmPassword: '',
    };

    try {
      await schema.validate(invalidData, { abortEarly: false });
    } catch (error) {
      if (error instanceof ValidationError) {
        const { errors } = error;
        expect(errors).toContain('Nickname is required');
        expect(errors).toContain('Email is required');
        expect(errors).toContain('Password is required');
      }
    }
  });

  it('should invalidate password without required conditions', async () => {
    const invalidPasswordData = {
      nickname: 'JohnDoe123',
      email: 'johndoe@example.com',
      password: 'password',
      confirmPassword: 'password',
    };

    try {
      await schema.validate(invalidPasswordData, { abortEarly: false });
    } catch (error) {
      if (error instanceof ValidationError) {
        const { errors } = error;
        expect(errors).toContain('Password must contain a number');
        expect(errors).toContain('Password must contain an uppercase letter');
        expect(errors).toContain('Password must contain a special character');
      }
    }
  });

  it('should invalidate if passwords do not match', async () => {
    const invalidConfirmPasswordData = {
      nickname: 'JohnDoe123',
      email: 'johndoe@example.com',
      password: 'Password123!',
      confirmPassword: 'DifferentPassword123!',
    };

    try {
      await schema.validate(invalidConfirmPasswordData, { abortEarly: false });
    } catch (error) {
      if (error instanceof ValidationError) {
        const { errors } = error;
        expect(errors).toContain('Passwords must match');
      }
    }
  });

  it('should invalidate nickname with special characters', async () => {
    const invalidNicknameData = {
      nickname: 'JohnDoe@123',
      email: 'johndoe@example.com',
      password: 'Password123!',
      confirmPassword: 'Password123!',
    };

    try {
      await schema.validate(invalidNicknameData, { abortEarly: false });
    } catch (error) {
      if (error instanceof ValidationError) {
        const { errors } = error;
        expect(errors).toContain('Please remove special characters');
      }
    }
  });
});
