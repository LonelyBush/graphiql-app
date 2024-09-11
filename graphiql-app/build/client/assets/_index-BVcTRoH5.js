import { j as n } from './index-DeHznlkS.js';
import { u as a, B as t } from './button-DYUIl9Ir.js';
import { L as l } from './loading-DSuaqnr6.js';
import { u as d } from './useAuth-hook-6GkHdI7V.js';
import './auth-context-CQxQiTwU.js';
const m = '_contentInner_8piex_1',
  j = '_description_8piex_9',
  x = '_buttonBlock_8piex_13',
  h = '_title_8piex_18',
  o = { contentInner: m, description: j, buttonBlock: x, title: h },
  p = '/assets/yana-BB-jdOhc.jpg',
  _ = '/assets/roman-BhWAxZYb.jpg',
  k = '/assets/nikita-DpnL6Sd8.jpg',
  g = '_cardBlock_1y4gj_1',
  N = '_imgBlock_1y4gj_14',
  u = '_img_1y4gj_14',
  B = '_cardInfoBlock_1y4gj_30',
  f = '_cardName_1y4gj_37',
  b = '_info_1y4gj_43',
  c = {
    cardBlock: g,
    imgBlock: N,
    img: u,
    cardInfoBlock: B,
    cardName: f,
    info: b,
  };
function y() {
  const { t: s } = a();
  return n.jsxs(n.Fragment, {
    children: [
      n.jsxs('article', {
        className: c.cardBlock,
        children: [
          n.jsx('div', {
            className: c.imgBlock,
            children: n.jsx('img', {
              src: _,
              alt: s('RomanSokolov'),
              className: c.img,
            }),
          }),
          n.jsxs('div', {
            className: c.cardInfoBlock,
            children: [
              n.jsx('h3', {
                className: c.cardName,
                children: s('RomanSokolov'),
              }),
              n.jsx('p', { className: c.info, children: s('RomanText') }),
            ],
          }),
        ],
      }),
      n.jsxs('article', {
        className: c.cardBlock,
        children: [
          n.jsx('div', {
            className: c.imgBlock,
            children: n.jsx('img', {
              src: p,
              alt: s('YanaDyachok'),
              className: c.img,
            }),
          }),
          n.jsxs('div', {
            className: c.cardInfoBlock,
            children: [
              n.jsx('h3', {
                className: c.cardName,
                children: s('YanaDyachok'),
              }),
              n.jsx('p', { className: c.info, children: s('YanaText') }),
            ],
          }),
        ],
      }),
      n.jsxs('article', {
        className: c.cardBlock,
        children: [
          n.jsx('div', {
            className: c.imgBlock,
            children: n.jsx('img', {
              src: k,
              alt: s('NikitaRadevich'),
              className: c.img,
            }),
          }),
          n.jsxs('div', {
            className: c.cardInfoBlock,
            children: [
              n.jsx('h3', {
                className: c.cardName,
                children: s('NikitaRadevich'),
              }),
              n.jsx('p', { className: c.info, children: s('NikitaText') }),
            ],
          }),
        ],
      }),
    ],
  });
}
const v = '_contentInner_q30k9_1',
  I = '_aboutUsBlock_q30k9_10',
  T = '_description_q30k9_17',
  i = { contentInner: v, aboutUsBlock: I, description: T };
function R() {
  const { t: s } = a();
  return n.jsxs('div', {
    className: i.contentInner,
    children: [
      n.jsx('h2', { children: s('OurUndefinedsTeam') }),
      n.jsx('div', { className: i.aboutUsBlock, children: n.jsx(y, {}) }),
      n.jsx('h2', { children: s('AboutTeam') }),
      n.jsx('p', { className: i.description, children: s('TeamDescription') }),
      n.jsx('h2', { children: s('AboutCourse') }),
      n.jsx('p', {
        className: i.description,
        children: s('CourseDescription'),
      }),
    ],
  });
}
function $() {
  const { t: s } = a(),
    { user: e, loading: r } = d();
  return r
    ? n.jsx(l, {})
    : n.jsxs(n.Fragment, {
        children: [
          n.jsxs('div', {
            className: o.contentInner,
            children: [
              n.jsx('h1', {
                className: o.title,
                children: e
                  ? `${s('WelcomeBack')}, ${e == null ? void 0 : e.displayName}!`
                  : `${s('Welcome')}!`,
              }),
              n.jsx('p', {
                className: o.description,
                children: s('ProjectDescription'),
              }),
              n.jsx('div', {
                className: o.buttonBlock,
                children: e
                  ? n.jsxs(n.Fragment, {
                      children: [
                        n.jsx(t, {
                          btnType: 'button',
                          to: '/REST/GET',
                          children: s('RESTClient'),
                        }),
                        n.jsx(t, {
                          btnType: 'button',
                          to: '/graphiql',
                          children: s('GraphiQLClient'),
                        }),
                        n.jsx(t, {
                          btnType: 'button',
                          to: '/history',
                          children: s('History'),
                        }),
                      ],
                    })
                  : n.jsxs(n.Fragment, {
                      children: [
                        n.jsx(t, {
                          btnType: 'button',
                          to: '/login',
                          children: s('SignIn'),
                        }),
                        n.jsx(t, {
                          btnType: 'button',
                          to: '/registration',
                          children: s('SignUp'),
                        }),
                      ],
                    }),
              }),
            ],
          }),
          n.jsx(R, {}),
        ],
      });
}
const C = '_container_10gft_1',
  S = { container: C };
function E() {
  return n.jsx('div', { className: S.container, children: n.jsx($, {}) });
}
export { E as default };
