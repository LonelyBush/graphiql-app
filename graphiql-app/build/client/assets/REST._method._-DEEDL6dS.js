import { j as e, r as u, u as E, d as O, e as z } from './index-wWMGXTih.js';
import { u as L } from './react-redux-CHx4hV8O.js';
import { d as U, R as V } from './response-BYer4qt1.js';
import { u as T, B as P } from './button-CmpeQtVi.js';
import { G as I } from './iconBase-QCAFBzlY.js';
import { u as A } from './index-Dpa_0JzH.js';
import { a as G } from './rest-history-slice-BfPXPxgQ.js';
import { j as J, F as w } from './components-Cvv4xV_s.js';
import './redux-toolkit.modern-C1Urj9PA.js';
const W = (s) => btoa(s),
  N = (s) => atob(s),
  M = '_tabsWrapper_1g7tz_1',
  Z = '_tabsNavigationSection_1g7tz_9',
  q = '_tabNav_1g7tz_15',
  D = '_active_1g7tz_30',
  F = '_tabContentWrapper_1g7tz_35',
  K = '_tabContent_1g7tz_35',
  v = {
    tabsWrapper: M,
    tabsNavigationSection: Z,
    tabNav: q,
    active: D,
    tabContentWrapper: F,
    tabContent: K,
  };
function R({ children: s }) {
  return e.jsx('div', { children: s });
}
function Q({ defaultSelect: s = 0, children: n }) {
  const { t } = T(),
    [r, d] = u.useState(s),
    c = (l) => {
      d(l);
    };
  return e.jsxs('div', {
    className: v.tabsWrapper,
    children: [
      e.jsx('div', {
        className: v.tabsNavigationSection,
        children: u.Children.map(n, ({ props: { index: l, label: h } }) =>
          e.jsx('button', {
            type: 'button',
            onClick: () => c(l),
            className: r === l ? `${v.tabNav} ${v.active}` : v.tabNav,
            children: t(h),
          }),
        ),
      }),
      e.jsx('div', {
        className: v.tabContentWrapper,
        children: u.Children.map(n, ({ props: { index: l, children: h } }) =>
          r === l
            ? e.jsx('div', {
                className: `${v.tabContent} ${v.active}`,
                children: h,
              })
            : null,
        ),
      }),
    ],
  });
}
function X(s) {
  return I({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M16 1.75V3h5.25a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5H8V1.75C8 .784 8.784 0 9.75 0h4.5C15.216 0 16 .784 16 1.75Zm-6.5 0V3h5V1.75a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25ZM4.997 6.178a.75.75 0 1 0-1.493.144L4.916 20.92a1.75 1.75 0 0 0 1.742 1.58h10.684a1.75 1.75 0 0 0 1.742-1.581l1.413-14.597a.75.75 0 0 0-1.494-.144l-1.412 14.596a.25.25 0 0 1-.249.226H6.658a.25.25 0 0 1-.249-.226L4.997 6.178Z',
        },
        child: [],
      },
      {
        tag: 'path',
        attr: {
          d: 'M9.206 7.501a.75.75 0 0 1 .793.705l.5 8.5A.75.75 0 1 1 9 16.794l-.5-8.5a.75.75 0 0 1 .705-.793Zm6.293.793A.75.75 0 1 0 14 8.206l-.5 8.5a.75.75 0 0 0 1.498.088l.5-8.5Z',
        },
        child: [],
      },
    ],
  })(s);
}
const Y = '_goTrashIcon_1mid8_1',
  ee = '_inputSection_1mid8_6',
  te = '_inputStyle_1mid8_11',
  se = '_headersList_1mid8_25',
  ae = '_headersWrapper_1mid8_31',
  ne = '_tableHeaders_1mid8_42',
  S = {
    goTrashIcon: Y,
    inputSection: ee,
    inputStyle: te,
    headersList: se,
    headersWrapper: ae,
    tableHeaders: ne,
  };
function re(s) {
  return Object.entries(Object.fromEntries(new URLSearchParams(s))).map((n) =>
    n.reduce(
      (t, r, d) => (
        d === 0 && (t['header-key'] = r), d === 1 && (t['header-value'] = r), t
      ),
      {},
    ),
  );
}
function oe({ outerSetHeader: s }) {
  const n = E(),
    t = () => re(n.search),
    { t: r } = T(),
    [, d] = A(),
    [c, l] = u.useState(t),
    h = () => {
      l([...c, { 'header-key': '', 'header-value': '' }]);
    },
    f = (a) =>
      a.reduce((i, p) => {
        if (p['header-key']) {
          const b = p['header-key'];
          i[b] = p['header-value'];
        }
        return i;
      }, {}),
    j = (a, o) => {
      const { name: i, value: p } = o.currentTarget,
        b = c.map((y, C) => (C === a ? { ...y, [i]: p } : y));
      l(b);
    },
    g = (a) => {
      l(c.filter((o, i) => i !== a));
    };
  return (
    u.useEffect(() => {
      s(JSON.stringify(f(c))), d(JSON.parse(JSON.stringify(f(c))));
    }, [c, s, d, n.search]),
    e.jsxs('div', {
      className: S.headersWrapper,
      children: [
        e.jsx(P, { btnType: 'button', onClick: h, children: r('AddHeader') }),
        c.length > 0 &&
          e.jsxs('div', {
            className: S.tableHeaders,
            children: [
              e.jsx('p', { children: r('Key') }),
              e.jsx('p', { children: r('Value') }),
            ],
          }),
        e.jsx('div', {
          'aria-live': 'polite',
          role: 'rowgroup',
          className: S.headersList,
          children: c.map((a, o) =>
            e.jsxs(
              'div',
              {
                className: S.inputSection,
                children: [
                  e.jsx('input', {
                    className: S.inputStyle,
                    type: 'text',
                    name: 'header-key',
                    'aria-label': 'header-key',
                    value: a['header-key'],
                    onChange: (i) => {
                      j(o, i);
                    },
                  }),
                  e.jsx('input', {
                    className: S.inputStyle,
                    type: 'text',
                    name: 'header-value',
                    'aria-label': 'header-value',
                    value: a['header-value'],
                    onChange: (i) => {
                      j(o, i);
                    },
                  }),
                  e.jsx('button', {
                    type: 'button',
                    'aria-label': 'trash-btn',
                    className: S.goTrashIcon,
                    onClick: () => {
                      g(o);
                    },
                    children: e.jsx(X, { color: '#e9c2c5' }),
                  }),
                ],
              },
              `index-id-${o}`,
            ),
          ),
        }),
      ],
    })
  );
}
function B(s) {
  return s
    ? s
        .split('/')
        .reduce((n, t, r) => ({ ...n, [r === 0 ? 'url' : 'body']: t }), {})
    : {};
}
const ce = '_editorWrapper_1sqom_1',
  ie = { editorWrapper: ce };
function le({ setBody: s, setHeaders: n, params: t }) {
  const r = O(),
    d = E(),
    c = u.useRef(null),
    l = (a) => {
      a && s(a);
    },
    h = () => (c.current ? c.current.getValue() : ''),
    f = (a) => {
      c.current && c.current.setValue(a);
    },
    j = (a) => {
      var o, i;
      (c.current = a),
        a.setValue(
          ((o = t['*']) == null ? void 0 : o.split('/')[1]) !== void 0
            ? N((i = t['*']) == null ? void 0 : i.split('/')[1])
            : '',
        );
    };
  u.useEffect(() => {
    var a, o, i, p;
    if (t['*']) {
      t['*'].split('/').length > 2 && r('/errorPage');
      try {
        s(
          ((a = t['*']) == null ? void 0 : a.split('/')[1]) !== void 0
            ? N((o = t['*']) == null ? void 0 : o.split('/')[1])
            : '',
        ),
          f(
            ((i = t['*']) == null ? void 0 : i.split('/')[1]) !== void 0
              ? N((p = t['*']) == null ? void 0 : p.split('/')[1])
              : '',
          );
      } catch (b) {
        b instanceof Error && r('/error');
      }
    }
  }, [t, r, s]);
  const { t: g } = T();
  return e.jsxs(Q, {
    defaultSelect: 0,
    children: [
      e.jsx(R, {
        label: g('Body'),
        index: 0,
        children: e.jsx('div', {
          className: ie.editorWrapper,
          'data-testid': 'editorWrapper',
          onBlur: () => {
            const a = B(t['*']);
            a.body = W(h());
            const o = Object.keys(a).includes('url')
              ? Object.values(a).join('/')
              : Object.values(Object.assign({ url: '' }, a)).join('/');
            r(`/REST/${t.method}/${o}${d.search}`);
          },
          children: e.jsx(U, {
            theme: 'vs-dark',
            loading: 'Loading...',
            height: '30vh',
            defaultLanguage: 'json',
            onChange: l,
            onMount: j,
          }),
        }),
      }),
      e.jsx(R, {
        label: g('Headers'),
        index: 1,
        children: e.jsx(oe, { outerSetHeader: n }),
      }),
    ],
  });
}
const de = '_container_zvf35_1',
  ue = '_title_zvf35_13',
  he = '_RestBlock_zvf35_17',
  pe = '_methodSection_zvf35_25',
  me = '_formAction_zvf35_31',
  ve = '_methodBlock_zvf35_37',
  _e = '_customSelect_zvf35_48',
  fe = '_inputUrl_zvf35_86',
  _ = {
    container: de,
    title: ue,
    RestBlock: he,
    methodSection: pe,
    formAction: me,
    methodBlock: ve,
    customSelect: _e,
    inputUrl: fe,
  };
function Ee() {
  var k;
  const s = O(),
    n = z(),
    t = J(),
    r = E(),
    [d, c] = u.useState(n.method || 'GET'),
    [l, h] = u.useState(
      ((k = n['*']) == null ? void 0 : k.split('/')[0]) || '',
    ),
    [f, j] = u.useState(''),
    [g, a] = u.useState(''),
    { t: o } = T(),
    i = L(),
    p = (t == null ? void 0 : t.data) || '',
    b = (t == null ? void 0 : t.status) || null,
    y = (t == null ? void 0 : t.error) || null,
    C = async () => {
      const m = new Date().toISOString(),
        x = { url: l, method: d, headers: f, body: d !== 'GET' ? g : void 0 },
        H = {
          urlPage: `${r.pathname}${r.search}`.replace('/REST/', ''),
          requestData: x,
          data: m,
        };
      i(G([H]));
    };
  return (
    u.useEffect(() => {
      var m;
      if ((c(n.method), n['*'])) {
        n['*'].split('/').length > 2 && s('/errorPage');
        try {
          h(N((m = n['*']) == null ? void 0 : m.split('/')[0]));
        } catch (x) {
          x instanceof Error && s('/errorPage');
        }
      }
    }, [n.method, n, s]),
    e.jsxs('div', {
      className: _.container,
      children: [
        e.jsxs('div', {
          className: _.RestBlock,
          children: [
            e.jsx('h2', { className: _.title, children: o('RESTClient') }),
            e.jsx('div', {
              className: _.methodSection,
              children: e.jsxs(w, {
                className: _.formAction,
                method: 'post',
                action: `/REST/${d}/${n['*']}${r.search}`,
                children: [
                  e.jsxs('div', {
                    className: _.methodBlock,
                    children: [
                      e.jsxs('select', {
                        name: 'method',
                        className: _.customSelect,
                        value: d,
                        onChange: (m) => {
                          s(`/REST/${m.target.value}/${n['*']}${r.search}`),
                            c(m.target.value);
                        },
                        children: [
                          e.jsx('option', { value: 'GET', children: 'GET' }),
                          e.jsx('option', { value: 'POST', children: 'POST' }),
                          e.jsx('option', { value: 'PUT', children: 'PUT' }),
                          e.jsx('option', {
                            value: 'DELETE',
                            children: 'DELETE',
                          }),
                        ],
                      }),
                      e.jsx('input', {
                        className: _.inputUrl,
                        type: 'text',
                        name: 'url',
                        value: l,
                        onChange: (m) => {
                          const x = B(n['*']);
                          x.url = W(m.target.value);
                          const $ = Object.values(x).join('/');
                          s(`/REST/${n.method}/${$}${r.search}`),
                            h(m.target.value);
                        },
                      }),
                    ],
                  }),
                  e.jsx('input', { type: 'hidden', name: 'headers', value: f }),
                  e.jsx('input', { type: 'hidden', name: 'body', value: g }),
                  e.jsx(P, {
                    btnType: 'submit',
                    onClick: C,
                    children: o('Send'),
                  }),
                ],
              }),
            }),
            e.jsx(le, { params: n || {}, setHeaders: j, setBody: a }),
          ],
        }),
        e.jsx(V, {
          responseStatus: b,
          response: JSON.stringify(p, null, 2),
          error: y,
          title: o('Response'),
        }),
      ],
    })
  );
}
export { Ee as default };
