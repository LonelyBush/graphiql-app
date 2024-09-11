import { r as l, d as U, j as P } from './index-DeHznlkS.js';
const _ = (...e) => {
    console != null &&
      console.warn &&
      (g(e[0]) && (e[0] = `react-i18next:: ${e[0]}`), console.warn(...e));
  },
  F = {},
  w = (...e) => {
    (g(e[0]) && F[e[0]]) || (g(e[0]) && (F[e[0]] = new Date()), _(...e));
  },
  B = (e, n) => () => {
    if (e.isInitialized) n();
    else {
      const s = () => {
        setTimeout(() => {
          e.off('initialized', s);
        }, 0),
          n();
      };
      e.on('initialized', s);
    }
  },
  L = (e, n, s) => {
    e.loadNamespaces(n, B(e, s));
  },
  v = (e, n, s, a) => {
    g(s) && (s = [s]),
      s.forEach((f) => {
        e.options.ns.indexOf(f) < 0 && e.options.ns.push(f);
      }),
      e.loadLanguages(n, B(e, a));
  },
  $ = (e, n, s = {}) =>
    !n.languages || !n.languages.length
      ? (w('i18n.languages were undefined or empty', n.languages), !0)
      : n.hasLoadedNamespace(e, {
          lng: s.lng,
          precheck: (a, f) => {
            var t;
            if (
              ((t = s.bindI18n) == null
                ? void 0
                : t.indexOf('languageChanging')) > -1 &&
              a.services.backendConnector.backend &&
              a.isLanguageChangingTo &&
              !f(a.isLanguageChangingTo, e)
            )
              return !1;
          },
        }),
  ne = (e) => e.displayName || e.name || (g(e) && e.length > 0 ? e : 'Unknown'),
  g = (e) => typeof e == 'string',
  q = (e) => typeof e == 'object' && e !== null,
  A =
    /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
  W = {
    '&amp;': '&',
    '&#38;': '&',
    '&lt;': '<',
    '&#60;': '<',
    '&gt;': '>',
    '&#62;': '>',
    '&apos;': "'",
    '&#39;': "'",
    '&quot;': '"',
    '&#34;': '"',
    '&nbsp;': ' ',
    '&#160;': ' ',
    '&copy;': '©',
    '&#169;': '©',
    '&reg;': '®',
    '&#174;': '®',
    '&hellip;': '…',
    '&#8230;': '…',
    '&#x2F;': '/',
    '&#47;': '/',
  },
  G = (e) => W[e],
  J = (e) => e.replace(A, G);
let S = {
  bindI18n: 'languageChanged',
  bindI18nStore: '',
  transEmptyNodeValue: '',
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: '',
  transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
  useSuspense: !0,
  unescape: J,
};
const se = (e = {}) => {
    S = { ...S, ...e };
  },
  K = () => S;
let H;
const ae = (e) => {
    H = e;
  },
  Y = () => H,
  D = l.createContext();
class Q {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(n) {
    n.forEach((s) => {
      var a;
      (a = this.usedNamespaces)[s] ?? (a[s] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
const X = (e, n) => {
    const s = l.useRef();
    return (
      l.useEffect(() => {
        s.current = e;
      }, [e, n]),
      s.current
    );
  },
  M = (e, n, s, a) => e.getFixedT(n, s, a),
  Z = (e, n, s, a) => l.useCallback(M(e, n, s, a), [e, n, s, a]),
  oe = (e, n = {}) => {
    var z, R, j, k;
    const { i18n: s } = n,
      { i18n: a, defaultNS: f } = l.useContext(D) || {},
      t = s || a || Y();
    if ((t && !t.reportNamespaces && (t.reportNamespaces = new Q()), !t)) {
      w(
        'You will need to pass in an i18next instance by using initReactI18next',
      );
      const i = (r, u) =>
          g(u)
            ? u
            : q(u) && g(u.defaultValue)
              ? u.defaultValue
              : Array.isArray(r)
                ? r[r.length - 1]
                : r,
        c = [i, {}, !1];
      return (c.t = i), (c.i18n = {}), (c.ready = !1), c;
    }
    (z = t.options.react) != null &&
      z.wait &&
      w(
        'It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.',
      );
    const m = { ...K(), ...t.options.react, ...n },
      { useSuspense: E, keyPrefix: x } = m;
    let o = f || ((R = t.options) == null ? void 0 : R.defaultNS);
    (o = g(o) ? [o] : o || ['translation']),
      (k = (j = t.reportNamespaces).addUsedNamespaces) == null || k.call(j, o);
    const d =
        (t.isInitialized || t.initializedStoreOnce) &&
        o.every((i) => $(i, t, m)),
      O = Z(t, n.lng || null, m.nsMode === 'fallback' ? o : o[0], x),
      T = () => O,
      b = () => M(t, n.lng || null, m.nsMode === 'fallback' ? o : o[0], x),
      [I, N] = l.useState(T);
    let h = o.join();
    n.lng && (h = `${n.lng}${h}`);
    const C = X(h),
      p = l.useRef(!0);
    l.useEffect(() => {
      const { bindI18n: i, bindI18nStore: c } = m;
      (p.current = !0),
        !d &&
          !E &&
          (n.lng
            ? v(t, n.lng, o, () => {
                p.current && N(b);
              })
            : L(t, o, () => {
                p.current && N(b);
              })),
        d && C && C !== h && p.current && N(b);
      const r = () => {
        p.current && N(b);
      };
      return (
        i && (t == null || t.on(i, r)),
        c && (t == null || t.store.on(c, r)),
        () => {
          (p.current = !1),
            t && (i == null || i.split(' ').forEach((u) => t.off(u, r))),
            c && t && c.split(' ').forEach((u) => t.store.off(u, r));
        }
      );
    }, [t, h]),
      l.useEffect(() => {
        p.current && d && N(T);
      }, [t, x, d]);
    const y = [I, t, d];
    if (((y.t = I), (y.i18n = t), (y.ready = d), d || (!d && !E))) return y;
    throw new Promise((i) => {
      n.lng ? v(t, n.lng, o, () => i()) : L(t, o, () => i());
    });
  },
  V = '_btn_nkz0b_1',
  ee = { btn: V };
function ie({
  btnType: e = 'button',
  children: n,
  onClick: s,
  to: a,
  disabled: f = !1,
}) {
  const t = U(),
    m = () => {
      a && t(a), s && s();
    };
  return P.jsx('button', {
    className: ee.btn,
    type: e === 'button' ? 'button' : 'submit',
    onClick: m,
    disabled: f,
    children: n,
  });
}
export { ie as B, D as I, ae as a, ne as g, se as s, oe as u };
