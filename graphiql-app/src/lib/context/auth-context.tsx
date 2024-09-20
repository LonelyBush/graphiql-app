import { createContext, ReactNode, useEffect, useMemo, useState } from 'react';
import { useNavigate } from '@remix-run/react';
import { Auth, onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '../../utils/firebase-auth/firebase';

export interface ContextType {
  user: User | null;
  loading: boolean;
  error: Error | null;
}

function useAuthState(authData: Auth): [User | null, boolean, Error | null] {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      authData,
      (newUser) => {
        setUser(newUser);
        setLoading(false);
      },
      (errorMessage) => {
        setError(errorMessage);
        setLoading(false);
      },
    );

    return () => unsubscribe();
  }, [authData]);

  return [user, loading, error];
}

export default useAuthState;
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
