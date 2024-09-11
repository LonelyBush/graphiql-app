import { j as r } from './index-DeHznlkS.js';
import { u as n, B as t } from './button-DYUIl9Ir.js';
const o = '_errorBlock_qrino_1',
  e = '_errorContainer_qrino_12',
  a = '_title_qrino_19',
  c = '_spanError_qrino_23',
  d = '_digitFirst_qrino_30',
  l = '_digitSecond_qrino_31',
  _ = '_digitThird_qrino_32',
  i = {
    errorBlock: o,
    errorContainer: e,
    title: a,
    spanError: c,
    digitFirst: d,
    digitSecond: l,
    digitThird: _,
  },
  m = { hideHeader: !0 };
function g() {
  const { t: s } = n();
  return r.jsxs('div', {
    className: i.errorBlock,
    children: [
      r.jsx('h1', { className: i.title, children: s('NotFound') }),
      r.jsxs('section', {
        className: i.errorContainer,
        children: [
          r.jsx('span', {
            className: i.spanError,
            children: r.jsx('span', { className: i.digitFirst, children: '4' }),
          }),
          r.jsx('span', {
            className: `${i.spanError} ${i.digitSecond}`,
            children: '0',
          }),
          r.jsx('span', {
            className: i.spanError,
            children: r.jsx('span', { className: i.digitThird, children: '4' }),
          }),
        ],
      }),
      r.jsx(t, { btnType: 'button', to: '/', children: s('BackToMain') }),
    ],
  });
}
export { g as default, m as handle };
