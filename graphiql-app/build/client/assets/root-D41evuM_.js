import { j as o } from './jsx-runtime-56DGgGmo.js';
import {
  L as t,
  M as e,
  l as a,
  O as c,
  S as i,
} from './components-CG6_eaI5.js';
const n = '_footer_9dj0p_1',
  r = '_iconGitHub_9dj0p_10',
  l = '_teamBlock_9dj0p_20',
  j = '_footerNav_9dj0p_25',
  h = '_logoRS_9dj0p_34',
  d = '_year_9dj0p_53',
  s = {
    footer: n,
    iconGitHub: r,
    teamBlock: l,
    footerNav: j,
    logoRS: h,
    year: d,
  };
function x() {
  return o.jsxs('footer', {
    className: s.footer,
    children: [
      o.jsx(t, {
        to: 'https://rs.school/',
        className: s.linkBlock,
        children: o.jsx('div', { className: s.logoRS }),
      }),
      o.jsx('p', { className: s.year, children: '2024' }),
      o.jsxs('div', {
        className: s.teamBlock,
        children: [
          o.jsx('div', { className: s.iconGitHub }),
          o.jsxs('nav', {
            className: s.footerNav,
            children: [
              ' ',
              o.jsx(t, {
                to: 'https://github.com/rs0048',
                children: 'Roman Sokolov',
              }),
              o.jsx(t, {
                to: 'https://github.com/Yana-Dyachok',
                children: 'Yana Dyachok',
              }),
              o.jsx(t, {
                to: 'https://github.com/lonelybush',
                children: 'Nikita Radevich',
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function _() {
  return o.jsxs('html', {
    lang: 'en',
    children: [
      o.jsxs('head', {
        children: [
          o.jsx('link', {
            rel: 'icon',
            href: '/favicon-react.ico',
            type: 'image/x-icon',
          }),
          o.jsx(e, {}),
          o.jsx(a, {}),
        ],
      }),
      o.jsxs('body', { children: [o.jsx(c, {}), o.jsx(x, {}), o.jsx(i, {})] }),
    ],
  });
}
export { _ as default };
