import { describe, it, expect } from 'vitest';
import * as yup from 'yup';
import getLoginSchema from '../validation/login-validation';

const t = (key: string) => key;

describe('getLoginSchema', () => {
  const schema = getLoginSchema(t);

  it('should fail validation if password is too short', async () => {
    const invalidData = {
      email: 'test@example.com',
      password: 'P1!',
    };

    try {
      await schema.validate(invalidData);
      throw new Error('Expected validation to fail, but it succeeded.');
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        expect(error.errors).toContain('PasswordMinLength');
      } else {
        throw error;
      }
    }
  });
});
