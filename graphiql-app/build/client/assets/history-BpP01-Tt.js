import { d as p, r as B, j as s } from './index-wWMGXTih.js';
import { a as c } from './react-redux-CHx4hV8O.js';
import { u as f } from './useAuth-hook-DYEurJeX.js';
import { u as x, B as l } from './button-CmpeQtVi.js';
import { L as g } from './components-Cvv4xV_s.js';
import './auth-context-BVoH_ZDZ.js';
import './index-Dpa_0JzH.js';
const j = '_historyBlock_803f7_1',
  _ = '_buttonBlock_803f7_11',
  y = '_resultBlock_803f7_16',
  L = '_method_803f7_21',
  H = '_linksBlock_803f7_25',
  o = {
    historyBlock: j,
    buttonBlock: _,
    resultBlock: y,
    method: L,
    linksBlock: H,
  };
function R() {
  const { t: e } = x(),
    { user: n, loading: a } = f(),
    r = p();
  B.useEffect(() => {
    a || r(n ? '/history' : '/');
  }, [n, a, r]);
  const d = c((t) => t.restLinks.restLinks),
    h = c((t) => t.graphiQLLinks.graphiQLLinks),
    i = [...d, ...h].sort((t, m) => {
      const u = new Date(t.data).getTime(),
        k = new Date(m.data).getTime();
      return u - k;
    });
  return s.jsx('div', {
    className: o.historyBlock,
    children:
      i.length === 0
        ? s.jsxs(s.Fragment, {
            children: [
              s.jsxs('p', { children: [e('NoHistory'), ' '] }),
              s.jsxs('div', {
                className: o.buttonBlock,
                children: [
                  ' ',
                  s.jsx(l, {
                    btnType: 'button',
                    to: '/REST/GET',
                    children: e('RESTClient'),
                  }),
                  s.jsx(l, {
                    btnType: 'button',
                    to: '/GRAPHIQL',
                    children: e('GraphiQLClient'),
                  }),
                ],
              }),
            ],
          })
        : s.jsxs(s.Fragment, {
            children: [
              ' ',
              s.jsx('h2', { children: e('HistoryRequests') }),
              s.jsx('div', {
                className: o.linksBlock,
                children: i.map((t) =>
                  s.jsxs(
                    'div',
                    {
                      className: o.resultBlock,
                      children: [
                        s.jsx(
                          'p',
                          {
                            className: o.method,
                            children: t.requestData.method,
                          },
                          t.requestData.method,
                        ),
                        s.jsx(
                          g,
                          {
                            to:
                              t.requestData.method !== 'GRAPHIQL'
                                ? `/REST/${t.urlPage}`
                                : `/GRAPHIQL/${t.urlPage}`,
                            children: t.requestData.url,
                          },
                          t.urlPage + Math.random(),
                        ),
                      ],
                    },
                    t.requestData.method + t.urlPage + Math.random(),
                  ),
                ),
              }),
            ],
          }),
  });
}
function Q() {
  return s.jsx(R, {});
}
export { Q as default };
