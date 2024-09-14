import { createContext, ReactNode, useEffect, useMemo } from 'react';
import { useNavigate } from '@remix-run/react';
import { User } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../utils/firebase-auth/firebase';

export interface ContextType {
  user: User | undefined | null;
  loading: boolean;
  error: Error | undefined;
}

export const AuthContext = createContext<ContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user && !loading) {
      navigate('/');
    }
  }, [user, loading, navigate]);

  const value = useMemo(
    () => ({ user, loading, error }),
    [user, loading, error],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
