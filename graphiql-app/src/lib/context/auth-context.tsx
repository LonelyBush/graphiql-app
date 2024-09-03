import { createContext, ReactNode, useEffect, useMemo } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from '@remix-run/react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '../../utils/firebase-auth/firebase';

interface ContextType {
  user: User | undefined | null;
  loading: boolean;
  error: Error | undefined;
}

export const AuthContext = createContext<ContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (stateUser) => {
      if (!stateUser) {
        navigate('/');
      }
    });
  }, [user, navigate]);
  const value = useMemo(
    () => ({ user, loading, error }),
    [user, loading, error],
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
