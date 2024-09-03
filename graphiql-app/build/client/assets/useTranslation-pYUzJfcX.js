import { r as l } from './index-k4sjWK-j.js';
const U = (...e) => {
    console != null &&
      console.warn &&
      (g(e[0]) && (e[0] = `react-i18next:: ${e[0]}`), console.warn(...e));
  },
  j = {},
  x = (...e) => {
    (g(e[0]) && j[e[0]]) || (g(e[0]) && (j[e[0]] = new Date()), U(...e));
  },
  M = (e, n) => () => {
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
  k = (e, n, s) => {
    e.loadNamespaces(n, M(e, s));
  },
  H = (e, n, s, a) => {
    g(s) && (s = [s]),
      s.forEach((p) => {
        e.options.ns.indexOf(p) < 0 && e.options.ns.push(p);
      }),
      e.loadLanguages(n, M(e, a));
  },
  $ = (e, n, s = {}) =>
    !n.languages || !n.languages.length
      ? (x('i18n.languages were undefined or empty', n.languages), !0)
      : n.hasLoadedNamespace(e, {
          lng: s.lng,
          precheck: (a, p) => {
            var t;
            if (
              ((t = s.bindI18n) == null
                ? void 0
                : t.indexOf('languageChanging')) > -1 &&
              a.services.backendConnector.backend &&
              a.isLanguageChangingTo &&
              !p(a.isLanguageChangingTo, e)
            )
              return !1;
          },
        }),
  g = (e) => typeof e == 'string',
  q = (e) => typeof e == 'object' && e !== null,
  A =
    /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
  B = {
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
  W = (e) => B[e],
  G = (e) => e.replace(A, W);
let S = {
  bindI18n: 'languageChanged',
  bindI18nStore: '',
  transEmptyNodeValue: '',
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: '',
  transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
  useSuspense: !0,
  unescape: G,
};
const D = (e = {}) => {
    S = { ...S, ...e };
  },
  J = () => S;
let O;
const V = (e) => {
    O = e;
  },
  K = () => O,
  Y = l.createContext();
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
  v = (e, n, s, a) => e.getFixedT(n, s, a),
  Z = (e, n, s, a) => l.useCallback(v(e, n, s, a), [e, n, s, a]),
  ee = (e, n = {}) => {
    var z, F, R, L;
    const { i18n: s } = n,
      { i18n: a, defaultNS: p } = l.useContext(Y) || {},
      t = s || a || K();
    if ((t && !t.reportNamespaces && (t.reportNamespaces = new Q()), !t)) {
      x(
        'You will need to pass in an i18next instance by using initReactI18next',
      );
      const i = (c, u) =>
          g(u)
            ? u
            : q(u) && g(u.defaultValue)
              ? u.defaultValue
              : Array.isArray(c)
                ? c[c.length - 1]
                : c,
        r = [i, {}, !1];
      return (r.t = i), (r.i18n = {}), (r.ready = !1), r;
    }
    (z = t.options.react) != null &&
      z.wait &&
      x(
        'It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.',
      );
    const m = { ...J(), ...t.options.react, ...n },
      { useSuspense: T, keyPrefix: w } = m;
    let o = p || ((F = t.options) == null ? void 0 : F.defaultNS);
    (o = g(o) ? [o] : o || ['translation']),
      (L = (R = t.reportNamespaces).addUsedNamespaces) == null || L.call(R, o);
    const f =
        (t.isInitialized || t.initializedStoreOnce) &&
        o.every((i) => $(i, t, m)),
      P = Z(t, n.lng || null, m.nsMode === 'fallback' ? o : o[0], w),
      C = () => P,
      b = () => v(t, n.lng || null, m.nsMode === 'fallback' ? o : o[0], w),
      [E, N] = l.useState(C);
    let h = o.join();
    n.lng && (h = `${n.lng}${h}`);
    const I = X(h),
      d = l.useRef(!0);
    l.useEffect(() => {
      const { bindI18n: i, bindI18nStore: r } = m;
      (d.current = !0),
        !f &&
          !T &&
          (n.lng
            ? H(t, n.lng, o, () => {
                d.current && N(b);
              })
            : k(t, o, () => {
                d.current && N(b);
              })),
        f && I && I !== h && d.current && N(b);
      const c = () => {
        d.current && N(b);
      };
      return (
        i && (t == null || t.on(i, c)),
        r && (t == null || t.store.on(r, c)),
        () => {
          (d.current = !1),
            t && (i == null || i.split(' ').forEach((u) => t.off(u, c))),
            r && t && r.split(' ').forEach((u) => t.store.off(u, c));
        }
      );
    }, [t, h]),
      l.useEffect(() => {
        d.current && f && N(C);
      }, [t, w, f]);
    const y = [E, t, f];
    if (((y.t = E), (y.i18n = t), (y.ready = f), f || (!f && !T))) return y;
    throw new Promise((i) => {
      n.lng ? H(t, n.lng, o, () => i()) : k(t, o, () => i());
    });
  };
export { Y as I, V as a, D as s, ee as u };
