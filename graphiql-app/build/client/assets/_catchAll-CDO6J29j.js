import { j as r } from './index-k4sjWK-j.js';
import { B as n } from './button-ikYNQhX4.js';
import { u as o } from './useTranslation-pYUzJfcX.js';
const t = '_errorBlock_qrino_1',
  e = '_errorContainer_qrino_12',
  a = '_title_qrino_19',
  c = '_spanError_qrino_23',
  d = '_digitFirst_qrino_30',
  l = '_digitSecond_qrino_31',
  _ = '_digitThird_qrino_32',
  i = {
    errorBlock: t,
    errorContainer: e,
    title: a,
    spanError: c,
    digitFirst: d,
    digitSecond: l,
    digitThird: _,
  },
  g = { hideHeader: !0 };
function x() {
  const { t: s } = o();
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
      r.jsx(n, { btnType: 'button', to: '/', children: s('BackToMain') }),
    ],
  });
}
export { x as default, g as handle };
