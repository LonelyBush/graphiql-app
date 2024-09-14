import { r } from './index-wWMGXTih.js';
import { c as o } from './auth-context-BVoH_ZDZ.js';
const u = () => {
  const t = r.useContext(o);
  if (!t) throw new Error('useAuth must be used within a AuthProvider');
  return t;
};
export { u };
