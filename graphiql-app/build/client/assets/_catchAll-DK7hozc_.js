import { j as s } from './jsx-runtime-56DGgGmo.js';
const a = '_btn_1die7_1',
  d = { btn: a };
function l({
  btnType: i = 'button',
  children: o,
  onClick: r,
  to: n,
  disabled: e = !1,
}) {
  const c = () => {
    n && (window.location.href = n), r && r();
  };
  return s.jsx('button', {
    className: d.btn,
    type: i === 'button' ? 'button' : 'submit',
    onClick: c,
    disabled: e,
    children: o,
  });
}
const x = '_errorBlock_xxmjs_1',
  _ = '_errorContainer_xxmjs_11',
  m = '_title_xxmjs_18',
  j = '_spanError_xxmjs_22',
  h = '_digitFirst_xxmjs_29',
  p = '_digitSecond_xxmjs_30',
  u = '_digitThird_xxmjs_31',
  t = {
    errorBlock: x,
    errorContainer: _,
    title: m,
    spanError: j,
    digitFirst: h,
    digitSecond: p,
    digitThird: u,
  };
function b() {
  return s.jsxs('div', {
    className: t.errorBlock,
    children: [
      s.jsx('h1', { className: t.title, children: ' Ooops... Page not found' }),
      s.jsxs('section', {
        className: t.errorContainer,
        children: [
          s.jsx('span', {
            className: t.spanError,
            children: s.jsx('span', { className: t.digitFirst, children: '4' }),
          }),
          s.jsx('span', {
            className: `${t.spanError} ${t.digitSecond}`,
            children: '0',
          }),
          s.jsx('span', {
            className: t.spanError,
            children: s.jsx('span', { className: t.digitThird, children: '4' }),
          }),
        ],
      }),
      s.jsx(l, { btnType: 'button', to: '/', children: 'Back to main' }),
    ],
  });
}
export { b as default };
