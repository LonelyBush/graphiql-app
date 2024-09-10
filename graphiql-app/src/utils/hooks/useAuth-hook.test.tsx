import { renderHook } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { User, IdTokenResult } from 'firebase/auth';
import { AuthContext, ContextType } from '../../lib/context/auth-context';
import useAuth from './useAuth-hook';

describe('useAuth', () => {
  it('should return context when used within AuthProvider', () => {
    const mockAuthContextValue: ContextType = {
      user: {
        uid: 'mock-uid',
        email: 'mock-email@example.com',
        displayName: 'Mock User',
        photoURL: 'http://mock-photo-url.com',
        phoneNumber: '123-456-7890',
        emailVerified: true,
        isAnonymous: false,
        metadata: {},
        providerData: [],
        refreshToken: 'mock-token',
        tenantId: 'mock-tenant-id',
        providerId: 'mock-provider-id',
        getIdToken: async () => 'mock-id-token',
        getIdTokenResult: async () =>
          ({
            authTime: 'mock-auth-time',
            expirationTime: 'mock-expiration-time',
            issuedAtTime: 'mock-issued-at-time',
            signInProvider: 'mock-provider',
          }) as IdTokenResult,
        reload: async () => {},
        delete: async () => {},
        toJSON: () => ({}),
      } as User,
      loading: false,
      error: undefined,
    };

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <AuthContext.Provider value={mockAuthContextValue}>
        {children}
      </AuthContext.Provider>
    );

    const { result } = renderHook(() => useAuth(), { wrapper });

    expect(result.current).toEqual(mockAuthContextValue);
  });
});
