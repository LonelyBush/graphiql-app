import { beforeEach, describe, expect, it, Mock, vi } from 'vitest';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import {
  logInWithEmailAndPassword,
  auth,
  registerWithEmailAndPassword,
  logout,
} from './firebase';

// Mock Firebase methods
vi.mock('firebase/auth', () => {
  return {
    getAuth: vi.fn(() => ({
      currentUser: {
        uid: '123',
        displayName: 'testuser',
        email: 'test@example.com',
        reload: vi.fn(),
      },
    })),
    signInWithEmailAndPassword: vi.fn(),
    createUserWithEmailAndPassword: vi.fn(),
    signOut: vi.fn(),
    updateProfile: vi.fn(),
  };
});

describe('Firebase test', () => {
  const mockUser = {
    uid: '123',
    displayName: 'testuser',
    email: 'test@example.com',
    reload: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });
  it('should resolve with user when signIn is successful', async () => {
    (signInWithEmailAndPassword as Mock).mockResolvedValue({ user: mockUser });

    const result = await logInWithEmailAndPassword(
      'test@example.com',
      'password',
    );
    expect(result).toEqual(mockUser);
    expect(signInWithEmailAndPassword).toHaveBeenCalledWith(
      auth,
      'test@example.com',
      'password',
    );
  });
  it('should reject with an error on failed login', async () => {
    (signInWithEmailAndPassword as Mock).mockRejectedValue(
      new Error('Auth is failed'),
    );

    await expect(
      logInWithEmailAndPassword('test@example.com', 'wrongpassword'),
    ).rejects.toThrow('Auth is failed');
    expect(signInWithEmailAndPassword).toHaveBeenCalledWith(
      auth,
      'test@example.com',
      'wrongpassword',
    );
  });

  it('should reject with an error on failed registration', async () => {
    (createUserWithEmailAndPassword as Mock).mockRejectedValue(
      new Error('Registration failed'),
    );

    await expect(
      registerWithEmailAndPassword('testuser', 'test@example.com', 'password'),
    ).rejects.toThrow('Registration failed');
    expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(
      auth,
      'test@example.com',
      'password',
    );
  });

  it('should call signOut on logout', async () => {
    (signOut as Mock).mockResolvedValueOnce({});

    logout();
    expect(signOut).toHaveBeenCalledWith(auth);
  });

  it('should resolve with updated user object on successful registration', async () => {
    (createUserWithEmailAndPassword as Mock).mockResolvedValue({
      user: mockUser,
    });
    (updateProfile as Mock).mockResolvedValueOnce({});
    mockUser.reload = vi.fn();

    const result = await registerWithEmailAndPassword(
      'testuser',
      'test@example.com',
      'password',
    );
    expect(result).toMatchObject({
      uid: mockUser.uid,
      displayName: mockUser.displayName,
      email: mockUser.email,
    });
    expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(
      expect.any(Object),
      'test@example.com',
      'password',
    );
    expect(updateProfile).toHaveBeenCalledWith(mockUser, {
      displayName: 'testuser',
    });
    expect(mockUser.reload).toHaveBeenCalled();
  });
});
