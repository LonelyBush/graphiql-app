import { r } from './index-DeHznlkS.js';
import { c as o } from './auth-context-CQxQiTwU.js';
const u = () => {
  const t = r.useContext(o);
  if (!t) throw new Error('useAuth must be used within a AuthProvider');
  return t;
};
export { u };
