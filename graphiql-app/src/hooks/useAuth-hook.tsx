import { useContext } from 'react';
import { AuthContext } from '../lib/context/auth-context';

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export default useAuth;
