import { l as u, j as i } from './index-k4sjWK-j.js';
const c = '_btn_nkz0b_1',
  l = { btn: c };
function f({
  btnType: s = 'button',
  children: o,
  onClick: t,
  to: n,
  disabled: a = !1,
}) {
  const e = u(),
    b = () => {
      n && e(n), t && t();
    };
  return i.jsx('button', {
    className: l.btn,
    type: s === 'button' ? 'button' : 'submit',
    onClick: b,
    disabled: a,
    children: o,
  });
}
export { f as B };
