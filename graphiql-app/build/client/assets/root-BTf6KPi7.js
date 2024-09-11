import { r as P, j as h, O as Oe, R as Ne } from './index-DeHznlkS.js';
import {
  c as xe,
  s as Pe,
  a as Ce,
  r as je,
} from './rest-history-slice-ClFBwpBo.js';
import {
  s as $e,
  a as Ee,
  g as Ie,
  u as se,
  I as Ae,
  B as Te,
} from './button-DYUIl9Ir.js';
import { u as Fe, l as De, a as Ue, A as He } from './auth-context-CQxQiTwU.js';
import { u as Ve, a as Me, P as Ke } from './react-redux-ulQB2trU.js';
import {
  N as Y,
  h as Be,
  L as _,
  M as _e,
  j as ze,
  S as Je,
} from './components-D8uQ7O_9.js';
import { F as Ge, a as Qe, Q as We } from './react-toastify.esm-OaNhFX5r.js';
import './iconBase-z_erZi_H.js';
const qe = {
    type: '3rdParty',
    init(i) {
      $e(i.options.react), Ee(i);
    },
  },
  Ye = (i, e = {}) =>
    function (s) {
      function n({ forwardedRef: a, ...o }) {
        const [l, c, g] = se(i, { ...o, keyPrefix: e.keyPrefix }),
          f = { ...o, t: l, i18n: c, tReady: g };
        return (
          e.withRef && a
            ? (f.ref = a)
            : !e.withRef && a && (f.forwardedRef = a),
          P.createElement(s, f)
        );
      }
      (n.displayName = `withI18nextTranslation(${Ie(s)})`),
        (n.WrappedComponent = s);
      const r = (a, o) =>
        P.createElement(n, Object.assign({}, a, { forwardedRef: o }));
      return e.withRef ? P.forwardRef(r) : n;
    };
function Ze({ i18n: i, defaultNS: e, children: t }) {
  const s = P.useMemo(() => ({ i18n: i, defaultNS: e }), [i, e]);
  return P.createElement(Ae.Provider, { value: s }, t);
}
const Xe = {
  type: 'logger',
  log(i) {
    this.output('log', i);
  },
  warn(i) {
    this.output('warn', i);
  },
  error(i) {
    this.output('error', i);
  },
  output(i, e) {
    console && console[i] && console[i].apply(console, e);
  },
};
class J {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(e, t);
  }
  init(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.prefix = t.prefix || 'i18next:'),
      (this.logger = e || Xe),
      (this.options = t),
      (this.debug = t.debug);
  }
  log() {
    for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
      t[s] = arguments[s];
    return this.forward(t, 'log', '', !0);
  }
  warn() {
    for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
      t[s] = arguments[s];
    return this.forward(t, 'warn', '', !0);
  }
  error() {
    for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
      t[s] = arguments[s];
    return this.forward(t, 'error', '');
  }
  deprecate() {
    for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
      t[s] = arguments[s];
    return this.forward(t, 'warn', 'WARNING DEPRECATED: ', !0);
  }
  forward(e, t, s, n) {
    return n && !this.debug
      ? null
      : (typeof e[0] == 'string' && (e[0] = `${s}${this.prefix} ${e[0]}`),
        this.logger[t](e));
  }
  create(e) {
    return new J(this.logger, {
      prefix: `${this.prefix}:${e}:`,
      ...this.options,
    });
  }
  clone(e) {
    return (
      (e = e || this.options),
      (e.prefix = e.prefix || this.prefix),
      new J(this.logger, e)
    );
  }
}
var N = new J();
class q {
  constructor() {
    this.observers = {};
  }
  on(e, t) {
    return (
      e.split(' ').forEach((s) => {
        this.observers[s] || (this.observers[s] = new Map());
        const n = this.observers[s].get(t) || 0;
        this.observers[s].set(t, n + 1);
      }),
      this
    );
  }
  off(e, t) {
    if (this.observers[e]) {
      if (!t) {
        delete this.observers[e];
        return;
      }
      this.observers[e].delete(t);
    }
  }
  emit(e) {
    for (
      var t = arguments.length, s = new Array(t > 1 ? t - 1 : 0), n = 1;
      n < t;
      n++
    )
      s[n - 1] = arguments[n];
    this.observers[e] &&
      Array.from(this.observers[e].entries()).forEach((a) => {
        let [o, l] = a;
        for (let c = 0; c < l; c++) o(...s);
      }),
      this.observers['*'] &&
        Array.from(this.observers['*'].entries()).forEach((a) => {
          let [o, l] = a;
          for (let c = 0; c < l; c++) o.apply(o, [e, ...s]);
        });
  }
}
const U = () => {
    let i, e;
    const t = new Promise((s, n) => {
      (i = s), (e = n);
    });
    return (t.resolve = i), (t.reject = e), t;
  },
  ae = (i) => (i == null ? '' : '' + i),
  et = (i, e, t) => {
    i.forEach((s) => {
      e[s] && (t[s] = e[s]);
    });
  },
  tt = /###/g,
  oe = (i) => (i && i.indexOf('###') > -1 ? i.replace(tt, '.') : i),
  le = (i) => !i || typeof i == 'string',
  H = (i, e, t) => {
    const s = typeof e != 'string' ? e : e.split('.');
    let n = 0;
    for (; n < s.length - 1; ) {
      if (le(i)) return {};
      const r = oe(s[n]);
      !i[r] && t && (i[r] = new t()),
        Object.prototype.hasOwnProperty.call(i, r) ? (i = i[r]) : (i = {}),
        ++n;
    }
    return le(i) ? {} : { obj: i, k: oe(s[n]) };
  },
  ue = (i, e, t) => {
    const { obj: s, k: n } = H(i, e, Object);
    if (s !== void 0 || e.length === 1) {
      s[n] = t;
      return;
    }
    let r = e[e.length - 1],
      a = e.slice(0, e.length - 1),
      o = H(i, a, Object);
    for (; o.obj === void 0 && a.length; )
      (r = `${a[a.length - 1]}.${r}`),
        (a = a.slice(0, a.length - 1)),
        (o = H(i, a, Object)),
        o && o.obj && typeof o.obj[`${o.k}.${r}`] < 'u' && (o.obj = void 0);
    o.obj[`${o.k}.${r}`] = t;
  },
  st = (i, e, t, s) => {
    const { obj: n, k: r } = H(i, e, Object);
    (n[r] = n[r] || []), n[r].push(t);
  },
  G = (i, e) => {
    const { obj: t, k: s } = H(i, e);
    if (t) return t[s];
  },
  nt = (i, e, t) => {
    const s = G(i, t);
    return s !== void 0 ? s : G(e, t);
  },
  be = (i, e, t) => {
    for (const s in e)
      s !== '__proto__' &&
        s !== 'constructor' &&
        (s in i
          ? typeof i[s] == 'string' ||
            i[s] instanceof String ||
            typeof e[s] == 'string' ||
            e[s] instanceof String
            ? t && (i[s] = e[s])
            : be(i[s], e[s], t)
          : (i[s] = e[s]));
    return i;
  },
  $ = (i) => i.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
var it = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;',
};
const rt = (i) =>
  typeof i == 'string' ? i.replace(/[&<>"'\/]/g, (e) => it[e]) : i;
class at {
  constructor(e) {
    (this.capacity = e), (this.regExpMap = new Map()), (this.regExpQueue = []);
  }
  getRegExp(e) {
    const t = this.regExpMap.get(e);
    if (t !== void 0) return t;
    const s = new RegExp(e);
    return (
      this.regExpQueue.length === this.capacity &&
        this.regExpMap.delete(this.regExpQueue.shift()),
      this.regExpMap.set(e, s),
      this.regExpQueue.push(e),
      s
    );
  }
}
const ot = [' ', ',', '?', '!', ';'],
  lt = new at(20),
  ut = (i, e, t) => {
    (e = e || ''), (t = t || '');
    const s = ot.filter((a) => e.indexOf(a) < 0 && t.indexOf(a) < 0);
    if (s.length === 0) return !0;
    const n = lt.getRegExp(
      `(${s.map((a) => (a === '?' ? '\\?' : a)).join('|')})`,
    );
    let r = !n.test(i);
    if (!r) {
      const a = i.indexOf(t);
      a > 0 && !n.test(i.substring(0, a)) && (r = !0);
    }
    return r;
  },
  ee = function (i, e) {
    let t =
      arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '.';
    if (!i) return;
    if (i[e]) return i[e];
    const s = e.split(t);
    let n = i;
    for (let r = 0; r < s.length; ) {
      if (!n || typeof n != 'object') return;
      let a,
        o = '';
      for (let l = r; l < s.length; ++l)
        if ((l !== r && (o += t), (o += s[l]), (a = n[o]), a !== void 0)) {
          if (
            ['string', 'number', 'boolean'].indexOf(typeof a) > -1 &&
            l < s.length - 1
          )
            continue;
          r += l - r + 1;
          break;
        }
      n = a;
    }
    return n;
  },
  Q = (i) => (i && i.indexOf('_') > 0 ? i.replace('_', '-') : i);
class ce extends q {
  constructor(e) {
    let t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { ns: ['translation'], defaultNS: 'translation' };
    super(),
      (this.data = e || {}),
      (this.options = t),
      this.options.keySeparator === void 0 && (this.options.keySeparator = '.'),
      this.options.ignoreJSONStructure === void 0 &&
        (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(e) {
    this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
  }
  removeNamespaces(e) {
    const t = this.options.ns.indexOf(e);
    t > -1 && this.options.ns.splice(t, 1);
  }
  getResource(e, t, s) {
    let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const r =
        n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator,
      a =
        n.ignoreJSONStructure !== void 0
          ? n.ignoreJSONStructure
          : this.options.ignoreJSONStructure;
    let o;
    e.indexOf('.') > -1
      ? (o = e.split('.'))
      : ((o = [e, t]),
        s &&
          (Array.isArray(s)
            ? o.push(...s)
            : typeof s == 'string' && r
              ? o.push(...s.split(r))
              : o.push(s)));
    const l = G(this.data, o);
    return (
      !l &&
        !t &&
        !s &&
        e.indexOf('.') > -1 &&
        ((e = o[0]), (t = o[1]), (s = o.slice(2).join('.'))),
      l || !a || typeof s != 'string'
        ? l
        : ee(this.data && this.data[e] && this.data[e][t], s, r)
    );
  }
  addResource(e, t, s, n) {
    let r =
      arguments.length > 4 && arguments[4] !== void 0
        ? arguments[4]
        : { silent: !1 };
    const a =
      r.keySeparator !== void 0 ? r.keySeparator : this.options.keySeparator;
    let o = [e, t];
    s && (o = o.concat(a ? s.split(a) : s)),
      e.indexOf('.') > -1 && ((o = e.split('.')), (n = t), (t = o[1])),
      this.addNamespaces(t),
      ue(this.data, o, n),
      r.silent || this.emit('added', e, t, s, n);
  }
  addResources(e, t, s) {
    let n =
      arguments.length > 3 && arguments[3] !== void 0
        ? arguments[3]
        : { silent: !1 };
    for (const r in s)
      (typeof s[r] == 'string' || Array.isArray(s[r])) &&
        this.addResource(e, t, r, s[r], { silent: !0 });
    n.silent || this.emit('added', e, t, s);
  }
  addResourceBundle(e, t, s, n, r) {
    let a =
        arguments.length > 5 && arguments[5] !== void 0
          ? arguments[5]
          : { silent: !1, skipCopy: !1 },
      o = [e, t];
    e.indexOf('.') > -1 && ((o = e.split('.')), (n = s), (s = t), (t = o[1])),
      this.addNamespaces(t);
    let l = G(this.data, o) || {};
    a.skipCopy || (s = JSON.parse(JSON.stringify(s))),
      n ? be(l, s, r) : (l = { ...l, ...s }),
      ue(this.data, o, l),
      a.silent || this.emit('added', e, t, s);
  }
  removeResourceBundle(e, t) {
    this.hasResourceBundle(e, t) && delete this.data[e][t],
      this.removeNamespaces(t),
      this.emit('removed', e, t);
  }
  hasResourceBundle(e, t) {
    return this.getResource(e, t) !== void 0;
  }
  getResourceBundle(e, t) {
    return (
      t || (t = this.options.defaultNS),
      this.options.compatibilityAPI === 'v1'
        ? { ...this.getResource(e, t) }
        : this.getResource(e, t)
    );
  }
  getDataByLanguage(e) {
    return this.data[e];
  }
  hasLanguageSomeTranslations(e) {
    const t = this.getDataByLanguage(e);
    return !!((t && Object.keys(t)) || []).find(
      (n) => t[n] && Object.keys(t[n]).length > 0,
    );
  }
  toJSON() {
    return this.data;
  }
}
var Se = {
  processors: {},
  addPostProcessor(i) {
    this.processors[i.name] = i;
  },
  handle(i, e, t, s, n) {
    return (
      i.forEach((r) => {
        this.processors[r] && (e = this.processors[r].process(e, t, s, n));
      }),
      e
    );
  },
};
const ge = {};
class W extends q {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(),
      et(
        [
          'resourceStore',
          'languageUtils',
          'pluralResolver',
          'interpolator',
          'backendConnector',
          'i18nFormat',
          'utils',
        ],
        e,
        this,
      ),
      (this.options = t),
      this.options.keySeparator === void 0 && (this.options.keySeparator = '.'),
      (this.logger = N.create('translator'));
  }
  changeLanguage(e) {
    e && (this.language = e);
  }
  exists(e) {
    let t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { interpolation: {} };
    if (e == null) return !1;
    const s = this.resolve(e, t);
    return s && s.res !== void 0;
  }
  extractFromKey(e, t) {
    let s = t.nsSeparator !== void 0 ? t.nsSeparator : this.options.nsSeparator;
    s === void 0 && (s = ':');
    const n =
      t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator;
    let r = t.ns || this.options.defaultNS || [];
    const a = s && e.indexOf(s) > -1,
      o =
        !this.options.userDefinedKeySeparator &&
        !t.keySeparator &&
        !this.options.userDefinedNsSeparator &&
        !t.nsSeparator &&
        !ut(e, s, n);
    if (a && !o) {
      const l = e.match(this.interpolator.nestingRegexp);
      if (l && l.length > 0) return { key: e, namespaces: r };
      const c = e.split(s);
      (s !== n || (s === n && this.options.ns.indexOf(c[0]) > -1)) &&
        (r = c.shift()),
        (e = c.join(n));
    }
    return typeof r == 'string' && (r = [r]), { key: e, namespaces: r };
  }
  translate(e, t, s) {
    if (
      (typeof t != 'object' &&
        this.options.overloadTranslationOptionHandler &&
        (t = this.options.overloadTranslationOptionHandler(arguments)),
      typeof t == 'object' && (t = { ...t }),
      t || (t = {}),
      e == null)
    )
      return '';
    Array.isArray(e) || (e = [String(e)]);
    const n =
        t.returnDetails !== void 0
          ? t.returnDetails
          : this.options.returnDetails,
      r =
        t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator,
      { key: a, namespaces: o } = this.extractFromKey(e[e.length - 1], t),
      l = o[o.length - 1],
      c = t.lng || this.language,
      g = t.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (c && c.toLowerCase() === 'cimode') {
      if (g) {
        const x = t.nsSeparator || this.options.nsSeparator;
        return n
          ? {
              res: `${l}${x}${a}`,
              usedKey: a,
              exactUsedKey: a,
              usedLng: c,
              usedNS: l,
              usedParams: this.getUsedParamsDetails(t),
            }
          : `${l}${x}${a}`;
      }
      return n
        ? {
            res: a,
            usedKey: a,
            exactUsedKey: a,
            usedLng: c,
            usedNS: l,
            usedParams: this.getUsedParamsDetails(t),
          }
        : a;
    }
    const f = this.resolve(e, t);
    let u = f && f.res;
    const d = (f && f.usedKey) || a,
      p = (f && f.exactUsedKey) || a,
      y = Object.prototype.toString.apply(u),
      m = ['[object Number]', '[object Function]', '[object RegExp]'],
      L = t.joinArrays !== void 0 ? t.joinArrays : this.options.joinArrays,
      S = !this.i18nFormat || this.i18nFormat.handleAsObject;
    if (
      S &&
      u &&
      typeof u != 'string' &&
      typeof u != 'boolean' &&
      typeof u != 'number' &&
      m.indexOf(y) < 0 &&
      !(typeof L == 'string' && Array.isArray(u))
    ) {
      if (!t.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler ||
          this.logger.warn(
            'accessing an object - but returnObjects options is not enabled!',
          );
        const x = this.options.returnedObjectHandler
          ? this.options.returnedObjectHandler(d, u, { ...t, ns: o })
          : `key '${a} (${this.language})' returned an object instead of string.`;
        return n
          ? ((f.res = x), (f.usedParams = this.getUsedParamsDetails(t)), f)
          : x;
      }
      if (r) {
        const x = Array.isArray(u),
          w = x ? [] : {},
          O = x ? p : d;
        for (const v in u)
          if (Object.prototype.hasOwnProperty.call(u, v)) {
            const K = `${O}${r}${v}`;
            (w[v] = this.translate(K, { ...t, joinArrays: !1, ns: o })),
              w[v] === K && (w[v] = u[v]);
          }
        u = w;
      }
    } else if (S && typeof L == 'string' && Array.isArray(u))
      (u = u.join(L)), u && (u = this.extendTranslation(u, e, t, s));
    else {
      let x = !1,
        w = !1;
      const O = t.count !== void 0 && typeof t.count != 'string',
        v = W.hasDefaultValue(t),
        K = O ? this.pluralResolver.getSuffix(c, t.count, t) : '',
        ke =
          t.ordinal && O
            ? this.pluralResolver.getSuffix(c, t.count, { ordinal: !1 })
            : '',
        ne =
          O &&
          !t.ordinal &&
          t.count === 0 &&
          this.pluralResolver.shouldUseIntlApi(),
        A =
          (ne && t[`defaultValue${this.options.pluralSeparator}zero`]) ||
          t[`defaultValue${K}`] ||
          t[`defaultValue${ke}`] ||
          t.defaultValue;
      !this.isValidLookup(u) && v && ((x = !0), (u = A)),
        this.isValidLookup(u) || ((w = !0), (u = a));
      const Re =
          (t.missingKeyNoValueFallbackToKey ||
            this.options.missingKeyNoValueFallbackToKey) &&
          w
            ? void 0
            : u,
        T = v && A !== u && this.options.updateMissing;
      if (w || x || T) {
        if (
          (this.logger.log(T ? 'updateKey' : 'missingKey', c, l, a, T ? A : u),
          r)
        ) {
          const k = this.resolve(a, { ...t, keySeparator: !1 });
          k &&
            k.res &&
            this.logger.warn(
              'Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.',
            );
        }
        let F = [];
        const B = this.languageUtils.getFallbackCodes(
          this.options.fallbackLng,
          t.lng || this.language,
        );
        if (this.options.saveMissingTo === 'fallback' && B && B[0])
          for (let k = 0; k < B.length; k++) F.push(B[k]);
        else
          this.options.saveMissingTo === 'all'
            ? (F = this.languageUtils.toResolveHierarchy(
                t.lng || this.language,
              ))
            : F.push(t.lng || this.language);
        const ie = (k, j, D) => {
          const re = v && D !== u ? D : Re;
          this.options.missingKeyHandler
            ? this.options.missingKeyHandler(k, l, j, re, T, t)
            : this.backendConnector &&
              this.backendConnector.saveMissing &&
              this.backendConnector.saveMissing(k, l, j, re, T, t),
            this.emit('missingKey', k, l, j, u);
        };
        this.options.saveMissing &&
          (this.options.saveMissingPlurals && O
            ? F.forEach((k) => {
                const j = this.pluralResolver.getSuffixes(k, t);
                ne &&
                  t[`defaultValue${this.options.pluralSeparator}zero`] &&
                  j.indexOf(`${this.options.pluralSeparator}zero`) < 0 &&
                  j.push(`${this.options.pluralSeparator}zero`),
                  j.forEach((D) => {
                    ie([k], a + D, t[`defaultValue${D}`] || A);
                  });
              })
            : ie(F, a, A));
      }
      (u = this.extendTranslation(u, e, t, f, s)),
        w &&
          u === a &&
          this.options.appendNamespaceToMissingKey &&
          (u = `${l}:${a}`),
        (w || x) &&
          this.options.parseMissingKeyHandler &&
          (this.options.compatibilityAPI !== 'v1'
            ? (u = this.options.parseMissingKeyHandler(
                this.options.appendNamespaceToMissingKey ? `${l}:${a}` : a,
                x ? u : void 0,
              ))
            : (u = this.options.parseMissingKeyHandler(u)));
    }
    return n
      ? ((f.res = u), (f.usedParams = this.getUsedParamsDetails(t)), f)
      : u;
  }
  extendTranslation(e, t, s, n, r) {
    var a = this;
    if (this.i18nFormat && this.i18nFormat.parse)
      e = this.i18nFormat.parse(
        e,
        { ...this.options.interpolation.defaultVariables, ...s },
        s.lng || this.language || n.usedLng,
        n.usedNS,
        n.usedKey,
        { resolved: n },
      );
    else if (!s.skipInterpolation) {
      s.interpolation &&
        this.interpolator.init({
          ...s,
          interpolation: { ...this.options.interpolation, ...s.interpolation },
        });
      const c =
        typeof e == 'string' &&
        (s && s.interpolation && s.interpolation.skipOnVariables !== void 0
          ? s.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables);
      let g;
      if (c) {
        const u = e.match(this.interpolator.nestingRegexp);
        g = u && u.length;
      }
      let f = s.replace && typeof s.replace != 'string' ? s.replace : s;
      if (
        (this.options.interpolation.defaultVariables &&
          (f = { ...this.options.interpolation.defaultVariables, ...f }),
        (e = this.interpolator.interpolate(
          e,
          f,
          s.lng || this.language || n.usedLng,
          s,
        )),
        c)
      ) {
        const u = e.match(this.interpolator.nestingRegexp),
          d = u && u.length;
        g < d && (s.nest = !1);
      }
      !s.lng &&
        this.options.compatibilityAPI !== 'v1' &&
        n &&
        n.res &&
        (s.lng = this.language || n.usedLng),
        s.nest !== !1 &&
          (e = this.interpolator.nest(
            e,
            function () {
              for (
                var u = arguments.length, d = new Array(u), p = 0;
                p < u;
                p++
              )
                d[p] = arguments[p];
              return r && r[0] === d[0] && !s.context
                ? (a.logger.warn(
                    `It seems you are nesting recursively key: ${d[0]} in key: ${t[0]}`,
                  ),
                  null)
                : a.translate(...d, t);
            },
            s,
          )),
        s.interpolation && this.interpolator.reset();
    }
    const o = s.postProcess || this.options.postProcess,
      l = typeof o == 'string' ? [o] : o;
    return (
      e != null &&
        l &&
        l.length &&
        s.applyPostProcessor !== !1 &&
        (e = Se.handle(
          l,
          e,
          t,
          this.options && this.options.postProcessPassResolved
            ? {
                i18nResolved: {
                  ...n,
                  usedParams: this.getUsedParamsDetails(s),
                },
                ...s,
              }
            : s,
          this,
        )),
      e
    );
  }
  resolve(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      s,
      n,
      r,
      a,
      o;
    return (
      typeof e == 'string' && (e = [e]),
      e.forEach((l) => {
        if (this.isValidLookup(s)) return;
        const c = this.extractFromKey(l, t),
          g = c.key;
        n = g;
        let f = c.namespaces;
        this.options.fallbackNS && (f = f.concat(this.options.fallbackNS));
        const u = t.count !== void 0 && typeof t.count != 'string',
          d =
            u &&
            !t.ordinal &&
            t.count === 0 &&
            this.pluralResolver.shouldUseIntlApi(),
          p =
            t.context !== void 0 &&
            (typeof t.context == 'string' || typeof t.context == 'number') &&
            t.context !== '',
          y = t.lngs
            ? t.lngs
            : this.languageUtils.toResolveHierarchy(
                t.lng || this.language,
                t.fallbackLng,
              );
        f.forEach((m) => {
          this.isValidLookup(s) ||
            ((o = m),
            !ge[`${y[0]}-${m}`] &&
              this.utils &&
              this.utils.hasLoadedNamespace &&
              !this.utils.hasLoadedNamespace(o) &&
              ((ge[`${y[0]}-${m}`] = !0),
              this.logger.warn(
                `key "${n}" for languages "${y.join(', ')}" won't get resolved as namespace "${o}" was not yet loaded`,
                'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!',
              )),
            y.forEach((L) => {
              if (this.isValidLookup(s)) return;
              a = L;
              const S = [g];
              if (this.i18nFormat && this.i18nFormat.addLookupKeys)
                this.i18nFormat.addLookupKeys(S, g, L, m, t);
              else {
                let x;
                u && (x = this.pluralResolver.getSuffix(L, t.count, t));
                const w = `${this.options.pluralSeparator}zero`,
                  O = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                if (
                  (u &&
                    (S.push(g + x),
                    t.ordinal &&
                      x.indexOf(O) === 0 &&
                      S.push(g + x.replace(O, this.options.pluralSeparator)),
                    d && S.push(g + w)),
                  p)
                ) {
                  const v = `${g}${this.options.contextSeparator}${t.context}`;
                  S.push(v),
                    u &&
                      (S.push(v + x),
                      t.ordinal &&
                        x.indexOf(O) === 0 &&
                        S.push(v + x.replace(O, this.options.pluralSeparator)),
                      d && S.push(v + w));
                }
              }
              let M;
              for (; (M = S.pop()); )
                this.isValidLookup(s) ||
                  ((r = M), (s = this.getResource(L, m, M, t)));
            }));
        });
      }),
      { res: s, usedKey: n, exactUsedKey: r, usedLng: a, usedNS: o }
    );
  }
  isValidLookup(e) {
    return (
      e !== void 0 &&
      !(!this.options.returnNull && e === null) &&
      !(!this.options.returnEmptyString && e === '')
    );
  }
  getResource(e, t, s) {
    let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return this.i18nFormat && this.i18nFormat.getResource
      ? this.i18nFormat.getResource(e, t, s, n)
      : this.resourceStore.getResource(e, t, s, n);
  }
  getUsedParamsDetails() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const t = [
        'defaultValue',
        'ordinal',
        'context',
        'replace',
        'lng',
        'lngs',
        'fallbackLng',
        'ns',
        'keySeparator',
        'nsSeparator',
        'returnObjects',
        'returnDetails',
        'joinArrays',
        'postProcess',
        'interpolation',
      ],
      s = e.replace && typeof e.replace != 'string';
    let n = s ? e.replace : e;
    if (
      (s && typeof e.count < 'u' && (n.count = e.count),
      this.options.interpolation.defaultVariables &&
        (n = { ...this.options.interpolation.defaultVariables, ...n }),
      !s)
    ) {
      n = { ...n };
      for (const r of t) delete n[r];
    }
    return n;
  }
  static hasDefaultValue(e) {
    const t = 'defaultValue';
    for (const s in e)
      if (
        Object.prototype.hasOwnProperty.call(e, s) &&
        t === s.substring(0, t.length) &&
        e[s] !== void 0
      )
        return !0;
    return !1;
  }
}
const Z = (i) => i.charAt(0).toUpperCase() + i.slice(1);
class fe {
  constructor(e) {
    (this.options = e),
      (this.supportedLngs = this.options.supportedLngs || !1),
      (this.logger = N.create('languageUtils'));
  }
  getScriptPartFromCode(e) {
    if (((e = Q(e)), !e || e.indexOf('-') < 0)) return null;
    const t = e.split('-');
    return t.length === 2 || (t.pop(), t[t.length - 1].toLowerCase() === 'x')
      ? null
      : this.formatLanguageCode(t.join('-'));
  }
  getLanguagePartFromCode(e) {
    if (((e = Q(e)), !e || e.indexOf('-') < 0)) return e;
    const t = e.split('-');
    return this.formatLanguageCode(t[0]);
  }
  formatLanguageCode(e) {
    if (typeof e == 'string' && e.indexOf('-') > -1) {
      const t = ['hans', 'hant', 'latn', 'cyrl', 'cans', 'mong', 'arab'];
      let s = e.split('-');
      return (
        this.options.lowerCaseLng
          ? (s = s.map((n) => n.toLowerCase()))
          : s.length === 2
            ? ((s[0] = s[0].toLowerCase()),
              (s[1] = s[1].toUpperCase()),
              t.indexOf(s[1].toLowerCase()) > -1 &&
                (s[1] = Z(s[1].toLowerCase())))
            : s.length === 3 &&
              ((s[0] = s[0].toLowerCase()),
              s[1].length === 2 && (s[1] = s[1].toUpperCase()),
              s[0] !== 'sgn' &&
                s[2].length === 2 &&
                (s[2] = s[2].toUpperCase()),
              t.indexOf(s[1].toLowerCase()) > -1 &&
                (s[1] = Z(s[1].toLowerCase())),
              t.indexOf(s[2].toLowerCase()) > -1 &&
                (s[2] = Z(s[2].toLowerCase()))),
        s.join('-')
      );
    }
    return this.options.cleanCode || this.options.lowerCaseLng
      ? e.toLowerCase()
      : e;
  }
  isSupportedCode(e) {
    return (
      (this.options.load === 'languageOnly' ||
        this.options.nonExplicitSupportedLngs) &&
        (e = this.getLanguagePartFromCode(e)),
      !this.supportedLngs ||
        !this.supportedLngs.length ||
        this.supportedLngs.indexOf(e) > -1
    );
  }
  getBestMatchFromCodes(e) {
    if (!e) return null;
    let t;
    return (
      e.forEach((s) => {
        if (t) return;
        const n = this.formatLanguageCode(s);
        (!this.options.supportedLngs || this.isSupportedCode(n)) && (t = n);
      }),
      !t &&
        this.options.supportedLngs &&
        e.forEach((s) => {
          if (t) return;
          const n = this.getLanguagePartFromCode(s);
          if (this.isSupportedCode(n)) return (t = n);
          t = this.options.supportedLngs.find((r) => {
            if (r === n) return r;
            if (
              !(r.indexOf('-') < 0 && n.indexOf('-') < 0) &&
              ((r.indexOf('-') > 0 &&
                n.indexOf('-') < 0 &&
                r.substring(0, r.indexOf('-')) === n) ||
                (r.indexOf(n) === 0 && n.length > 1))
            )
              return r;
          });
        }),
      t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]),
      t
    );
  }
  getFallbackCodes(e, t) {
    if (!e) return [];
    if (
      (typeof e == 'function' && (e = e(t)),
      typeof e == 'string' && (e = [e]),
      Array.isArray(e))
    )
      return e;
    if (!t) return e.default || [];
    let s = e[t];
    return (
      s || (s = e[this.getScriptPartFromCode(t)]),
      s || (s = e[this.formatLanguageCode(t)]),
      s || (s = e[this.getLanguagePartFromCode(t)]),
      s || (s = e.default),
      s || []
    );
  }
  toResolveHierarchy(e, t) {
    const s = this.getFallbackCodes(t || this.options.fallbackLng || [], e),
      n = [],
      r = (a) => {
        a &&
          (this.isSupportedCode(a)
            ? n.push(a)
            : this.logger.warn(
                `rejecting language code not found in supportedLngs: ${a}`,
              ));
      };
    return (
      typeof e == 'string' && (e.indexOf('-') > -1 || e.indexOf('_') > -1)
        ? (this.options.load !== 'languageOnly' &&
            r(this.formatLanguageCode(e)),
          this.options.load !== 'languageOnly' &&
            this.options.load !== 'currentOnly' &&
            r(this.getScriptPartFromCode(e)),
          this.options.load !== 'currentOnly' &&
            r(this.getLanguagePartFromCode(e)))
        : typeof e == 'string' && r(this.formatLanguageCode(e)),
      s.forEach((a) => {
        n.indexOf(a) < 0 && r(this.formatLanguageCode(a));
      }),
      n
    );
  }
}
let ct = [
    {
      lngs: [
        'ach',
        'ak',
        'am',
        'arn',
        'br',
        'fil',
        'gun',
        'ln',
        'mfe',
        'mg',
        'mi',
        'oc',
        'pt',
        'pt-BR',
        'tg',
        'tl',
        'ti',
        'tr',
        'uz',
        'wa',
      ],
      nr: [1, 2],
      fc: 1,
    },
    {
      lngs: [
        'af',
        'an',
        'ast',
        'az',
        'bg',
        'bn',
        'ca',
        'da',
        'de',
        'dev',
        'el',
        'en',
        'eo',
        'es',
        'et',
        'eu',
        'fi',
        'fo',
        'fur',
        'fy',
        'gl',
        'gu',
        'ha',
        'hi',
        'hu',
        'hy',
        'ia',
        'it',
        'kk',
        'kn',
        'ku',
        'lb',
        'mai',
        'ml',
        'mn',
        'mr',
        'nah',
        'nap',
        'nb',
        'ne',
        'nl',
        'nn',
        'no',
        'nso',
        'pa',
        'pap',
        'pms',
        'ps',
        'pt-PT',
        'rm',
        'sco',
        'se',
        'si',
        'so',
        'son',
        'sq',
        'sv',
        'sw',
        'ta',
        'te',
        'tk',
        'ur',
        'yo',
      ],
      nr: [1, 2],
      fc: 2,
    },
    {
      lngs: [
        'ay',
        'bo',
        'cgg',
        'fa',
        'ht',
        'id',
        'ja',
        'jbo',
        'ka',
        'km',
        'ko',
        'ky',
        'lo',
        'ms',
        'sah',
        'su',
        'th',
        'tt',
        'ug',
        'vi',
        'wo',
        'zh',
      ],
      nr: [1],
      fc: 3,
    },
    {
      lngs: ['be', 'bs', 'cnr', 'dz', 'hr', 'ru', 'sr', 'uk'],
      nr: [1, 2, 5],
      fc: 4,
    },
    { lngs: ['ar'], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
    { lngs: ['cs', 'sk'], nr: [1, 2, 5], fc: 6 },
    { lngs: ['csb', 'pl'], nr: [1, 2, 5], fc: 7 },
    { lngs: ['cy'], nr: [1, 2, 3, 8], fc: 8 },
    { lngs: ['fr'], nr: [1, 2], fc: 9 },
    { lngs: ['ga'], nr: [1, 2, 3, 7, 11], fc: 10 },
    { lngs: ['gd'], nr: [1, 2, 3, 20], fc: 11 },
    { lngs: ['is'], nr: [1, 2], fc: 12 },
    { lngs: ['jv'], nr: [0, 1], fc: 13 },
    { lngs: ['kw'], nr: [1, 2, 3, 4], fc: 14 },
    { lngs: ['lt'], nr: [1, 2, 10], fc: 15 },
    { lngs: ['lv'], nr: [1, 2, 0], fc: 16 },
    { lngs: ['mk'], nr: [1, 2], fc: 17 },
    { lngs: ['mnk'], nr: [0, 1, 2], fc: 18 },
    { lngs: ['mt'], nr: [1, 2, 11, 20], fc: 19 },
    { lngs: ['or'], nr: [2, 1], fc: 2 },
    { lngs: ['ro'], nr: [1, 2, 20], fc: 20 },
    { lngs: ['sl'], nr: [5, 1, 2, 3], fc: 21 },
    { lngs: ['he', 'iw'], nr: [1, 2, 20, 21], fc: 22 },
  ],
  gt = {
    1: (i) => +(i > 1),
    2: (i) => +(i != 1),
    3: (i) => 0,
    4: (i) =>
      i % 10 == 1 && i % 100 != 11
        ? 0
        : i % 10 >= 2 && i % 10 <= 4 && (i % 100 < 10 || i % 100 >= 20)
          ? 1
          : 2,
    5: (i) =>
      i == 0
        ? 0
        : i == 1
          ? 1
          : i == 2
            ? 2
            : i % 100 >= 3 && i % 100 <= 10
              ? 3
              : i % 100 >= 11
                ? 4
                : 5,
    6: (i) => (i == 1 ? 0 : i >= 2 && i <= 4 ? 1 : 2),
    7: (i) =>
      i == 1
        ? 0
        : i % 10 >= 2 && i % 10 <= 4 && (i % 100 < 10 || i % 100 >= 20)
          ? 1
          : 2,
    8: (i) => (i == 1 ? 0 : i == 2 ? 1 : i != 8 && i != 11 ? 2 : 3),
    9: (i) => +(i >= 2),
    10: (i) => (i == 1 ? 0 : i == 2 ? 1 : i < 7 ? 2 : i < 11 ? 3 : 4),
    11: (i) =>
      i == 1 || i == 11 ? 0 : i == 2 || i == 12 ? 1 : i > 2 && i < 20 ? 2 : 3,
    12: (i) => +(i % 10 != 1 || i % 100 == 11),
    13: (i) => +(i !== 0),
    14: (i) => (i == 1 ? 0 : i == 2 ? 1 : i == 3 ? 2 : 3),
    15: (i) =>
      i % 10 == 1 && i % 100 != 11
        ? 0
        : i % 10 >= 2 && (i % 100 < 10 || i % 100 >= 20)
          ? 1
          : 2,
    16: (i) => (i % 10 == 1 && i % 100 != 11 ? 0 : i !== 0 ? 1 : 2),
    17: (i) => (i == 1 || (i % 10 == 1 && i % 100 != 11) ? 0 : 1),
    18: (i) => (i == 0 ? 0 : i == 1 ? 1 : 2),
    19: (i) =>
      i == 1
        ? 0
        : i == 0 || (i % 100 > 1 && i % 100 < 11)
          ? 1
          : i % 100 > 10 && i % 100 < 20
            ? 2
            : 3,
    20: (i) => (i == 1 ? 0 : i == 0 || (i % 100 > 0 && i % 100 < 20) ? 1 : 2),
    21: (i) =>
      i % 100 == 1
        ? 1
        : i % 100 == 2
          ? 2
          : i % 100 == 3 || i % 100 == 4
            ? 3
            : 0,
    22: (i) =>
      i == 1 ? 0 : i == 2 ? 1 : (i < 0 || i > 10) && i % 10 == 0 ? 2 : 3,
  };
const ft = ['v1', 'v2', 'v3'],
  ht = ['v4'],
  he = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 },
  dt = () => {
    const i = {};
    return (
      ct.forEach((e) => {
        e.lngs.forEach((t) => {
          i[t] = { numbers: e.nr, plurals: gt[e.fc] };
        });
      }),
      i
    );
  };
class pt {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.languageUtils = e),
      (this.options = t),
      (this.logger = N.create('pluralResolver')),
      (!this.options.compatibilityJSON ||
        ht.includes(this.options.compatibilityJSON)) &&
        (typeof Intl > 'u' || !Intl.PluralRules) &&
        ((this.options.compatibilityJSON = 'v3'),
        this.logger.error(
          'Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.',
        )),
      (this.rules = dt()),
      (this.pluralRulesCache = {});
  }
  addRule(e, t) {
    this.rules[e] = t;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi())
      try {
        const s = Q(e === 'dev' ? 'en' : e),
          n = t.ordinal ? 'ordinal' : 'cardinal',
          r = JSON.stringify({ cleanedCode: s, type: n });
        if (r in this.pluralRulesCache) return this.pluralRulesCache[r];
        const a = new Intl.PluralRules(s, { type: n });
        return (this.pluralRulesCache[r] = a), a;
      } catch {
        return;
      }
    return (
      this.rules[e] || this.rules[this.languageUtils.getLanguagePartFromCode(e)]
    );
  }
  needsPlural(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const s = this.getRule(e, t);
    return this.shouldUseIntlApi()
      ? s && s.resolvedOptions().pluralCategories.length > 1
      : s && s.numbers.length > 1;
  }
  getPluralFormsOfKey(e, t) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(e, s).map((n) => `${t}${n}`);
  }
  getSuffixes(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const s = this.getRule(e, t);
    return s
      ? this.shouldUseIntlApi()
        ? s
            .resolvedOptions()
            .pluralCategories.sort((n, r) => he[n] - he[r])
            .map(
              (n) =>
                `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ''}${n}`,
            )
        : s.numbers.map((n) => this.getSuffix(e, n, t))
      : [];
  }
  getSuffix(e, t) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const n = this.getRule(e, s);
    return n
      ? this.shouldUseIntlApi()
        ? `${this.options.prepend}${s.ordinal ? `ordinal${this.options.prepend}` : ''}${n.select(t)}`
        : this.getSuffixRetroCompatible(n, t)
      : (this.logger.warn(`no plural rule found for: ${e}`), '');
  }
  getSuffixRetroCompatible(e, t) {
    const s = e.noAbs ? e.plurals(t) : e.plurals(Math.abs(t));
    let n = e.numbers[s];
    this.options.simplifyPluralSuffix &&
      e.numbers.length === 2 &&
      e.numbers[0] === 1 &&
      (n === 2 ? (n = 'plural') : n === 1 && (n = ''));
    const r = () =>
      this.options.prepend && n.toString()
        ? this.options.prepend + n.toString()
        : n.toString();
    return this.options.compatibilityJSON === 'v1'
      ? n === 1
        ? ''
        : typeof n == 'number'
          ? `_plural_${n.toString()}`
          : r()
      : this.options.compatibilityJSON === 'v2' ||
          (this.options.simplifyPluralSuffix &&
            e.numbers.length === 2 &&
            e.numbers[0] === 1)
        ? r()
        : this.options.prepend && s.toString()
          ? this.options.prepend + s.toString()
          : s.toString();
  }
  shouldUseIntlApi() {
    return !ft.includes(this.options.compatibilityJSON);
  }
}
const de = function (i, e, t) {
    let s =
        arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : '.',
      n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0,
      r = nt(i, e, t);
    return (
      !r &&
        n &&
        typeof t == 'string' &&
        ((r = ee(i, t, s)), r === void 0 && (r = ee(e, t, s))),
      r
    );
  },
  X = (i) => i.replace(/\$/g, '$$$$');
class mt {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    (this.logger = N.create('interpolator')),
      (this.options = e),
      (this.format = (e.interpolation && e.interpolation.format) || ((t) => t)),
      this.init(e);
  }
  init() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    e.interpolation || (e.interpolation = { escapeValue: !0 });
    const {
      escape: t,
      escapeValue: s,
      useRawValueToEscape: n,
      prefix: r,
      prefixEscaped: a,
      suffix: o,
      suffixEscaped: l,
      formatSeparator: c,
      unescapeSuffix: g,
      unescapePrefix: f,
      nestingPrefix: u,
      nestingPrefixEscaped: d,
      nestingSuffix: p,
      nestingSuffixEscaped: y,
      nestingOptionsSeparator: m,
      maxReplaces: L,
      alwaysFormat: S,
    } = e.interpolation;
    (this.escape = t !== void 0 ? t : rt),
      (this.escapeValue = s !== void 0 ? s : !0),
      (this.useRawValueToEscape = n !== void 0 ? n : !1),
      (this.prefix = r ? $(r) : a || '{{'),
      (this.suffix = o ? $(o) : l || '}}'),
      (this.formatSeparator = c || ','),
      (this.unescapePrefix = g ? '' : f || '-'),
      (this.unescapeSuffix = this.unescapePrefix ? '' : g || ''),
      (this.nestingPrefix = u ? $(u) : d || $('$t(')),
      (this.nestingSuffix = p ? $(p) : y || $(')')),
      (this.nestingOptionsSeparator = m || ','),
      (this.maxReplaces = L || 1e3),
      (this.alwaysFormat = S !== void 0 ? S : !1),
      this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const e = (t, s) =>
      t && t.source === s ? ((t.lastIndex = 0), t) : new RegExp(s, 'g');
    (this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`)),
      (this.regexpUnescape = e(
        this.regexpUnescape,
        `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`,
      )),
      (this.nestingRegexp = e(
        this.nestingRegexp,
        `${this.nestingPrefix}(.+?)${this.nestingSuffix}`,
      ));
  }
  interpolate(e, t, s, n) {
    let r, a, o;
    const l =
        (this.options &&
          this.options.interpolation &&
          this.options.interpolation.defaultVariables) ||
        {},
      c = (d) => {
        if (d.indexOf(this.formatSeparator) < 0) {
          const L = de(
            t,
            l,
            d,
            this.options.keySeparator,
            this.options.ignoreJSONStructure,
          );
          return this.alwaysFormat
            ? this.format(L, void 0, s, { ...n, ...t, interpolationkey: d })
            : L;
        }
        const p = d.split(this.formatSeparator),
          y = p.shift().trim(),
          m = p.join(this.formatSeparator).trim();
        return this.format(
          de(
            t,
            l,
            y,
            this.options.keySeparator,
            this.options.ignoreJSONStructure,
          ),
          m,
          s,
          { ...n, ...t, interpolationkey: y },
        );
      };
    this.resetRegExp();
    const g =
        (n && n.missingInterpolationHandler) ||
        this.options.missingInterpolationHandler,
      f =
        n && n.interpolation && n.interpolation.skipOnVariables !== void 0
          ? n.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables;
    return (
      [
        { regex: this.regexpUnescape, safeValue: (d) => X(d) },
        {
          regex: this.regexp,
          safeValue: (d) => (this.escapeValue ? X(this.escape(d)) : X(d)),
        },
      ].forEach((d) => {
        for (o = 0; (r = d.regex.exec(e)); ) {
          const p = r[1].trim();
          if (((a = c(p)), a === void 0))
            if (typeof g == 'function') {
              const m = g(e, r, n);
              a = typeof m == 'string' ? m : '';
            } else if (n && Object.prototype.hasOwnProperty.call(n, p)) a = '';
            else if (f) {
              a = r[0];
              continue;
            } else
              this.logger.warn(
                `missed to pass in variable ${p} for interpolating ${e}`,
              ),
                (a = '');
          else typeof a != 'string' && !this.useRawValueToEscape && (a = ae(a));
          const y = d.safeValue(a);
          if (
            ((e = e.replace(r[0], y)),
            f
              ? ((d.regex.lastIndex += a.length),
                (d.regex.lastIndex -= r[0].length))
              : (d.regex.lastIndex = 0),
            o++,
            o >= this.maxReplaces)
          )
            break;
        }
      }),
      e
    );
  }
  nest(e, t) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      n,
      r,
      a;
    const o = (l, c) => {
      const g = this.nestingOptionsSeparator;
      if (l.indexOf(g) < 0) return l;
      const f = l.split(new RegExp(`${g}[ ]*{`));
      let u = `{${f[1]}`;
      (l = f[0]), (u = this.interpolate(u, a));
      const d = u.match(/'/g),
        p = u.match(/"/g);
      ((d && d.length % 2 === 0 && !p) || p.length % 2 !== 0) &&
        (u = u.replace(/'/g, '"'));
      try {
        (a = JSON.parse(u)), c && (a = { ...c, ...a });
      } catch (y) {
        return (
          this.logger.warn(
            `failed parsing options string in nesting for key ${l}`,
            y,
          ),
          `${l}${g}${u}`
        );
      }
      return (
        a.defaultValue &&
          a.defaultValue.indexOf(this.prefix) > -1 &&
          delete a.defaultValue,
        l
      );
    };
    for (; (n = this.nestingRegexp.exec(e)); ) {
      let l = [];
      (a = { ...s }),
        (a = a.replace && typeof a.replace != 'string' ? a.replace : a),
        (a.applyPostProcessor = !1),
        delete a.defaultValue;
      let c = !1;
      if (n[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(n[1])) {
        const g = n[1].split(this.formatSeparator).map((f) => f.trim());
        (n[1] = g.shift()), (l = g), (c = !0);
      }
      if (
        ((r = t(o.call(this, n[1].trim(), a), a)),
        r && n[0] === e && typeof r != 'string')
      )
        return r;
      typeof r != 'string' && (r = ae(r)),
        r ||
          (this.logger.warn(`missed to resolve ${n[1]} for nesting ${e}`),
          (r = '')),
        c &&
          (r = l.reduce(
            (g, f) =>
              this.format(g, f, s.lng, { ...s, interpolationkey: n[1].trim() }),
            r.trim(),
          )),
        (e = e.replace(n[0], r)),
        (this.regexp.lastIndex = 0);
    }
    return e;
  }
}
const yt = (i) => {
    let e = i.toLowerCase().trim();
    const t = {};
    if (i.indexOf('(') > -1) {
      const s = i.split('(');
      e = s[0].toLowerCase().trim();
      const n = s[1].substring(0, s[1].length - 1);
      e === 'currency' && n.indexOf(':') < 0
        ? t.currency || (t.currency = n.trim())
        : e === 'relativetime' && n.indexOf(':') < 0
          ? t.range || (t.range = n.trim())
          : n.split(';').forEach((a) => {
              if (a) {
                const [o, ...l] = a.split(':'),
                  c = l
                    .join(':')
                    .trim()
                    .replace(/^'+|'+$/g, ''),
                  g = o.trim();
                t[g] || (t[g] = c),
                  c === 'false' && (t[g] = !1),
                  c === 'true' && (t[g] = !0),
                  isNaN(c) || (t[g] = parseInt(c, 10));
              }
            });
    }
    return { formatName: e, formatOptions: t };
  },
  E = (i) => {
    const e = {};
    return (t, s, n) => {
      let r = n;
      n &&
        n.interpolationkey &&
        n.formatParams &&
        n.formatParams[n.interpolationkey] &&
        n[n.interpolationkey] &&
        (r = { ...r, [n.interpolationkey]: void 0 });
      const a = s + JSON.stringify(r);
      let o = e[a];
      return o || ((o = i(Q(s), n)), (e[a] = o)), o(t);
    };
  };
class xt {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    (this.logger = N.create('formatter')),
      (this.options = e),
      (this.formats = {
        number: E((t, s) => {
          const n = new Intl.NumberFormat(t, { ...s });
          return (r) => n.format(r);
        }),
        currency: E((t, s) => {
          const n = new Intl.NumberFormat(t, { ...s, style: 'currency' });
          return (r) => n.format(r);
        }),
        datetime: E((t, s) => {
          const n = new Intl.DateTimeFormat(t, { ...s });
          return (r) => n.format(r);
        }),
        relativetime: E((t, s) => {
          const n = new Intl.RelativeTimeFormat(t, { ...s });
          return (r) => n.format(r, s.range || 'day');
        }),
        list: E((t, s) => {
          const n = new Intl.ListFormat(t, { ...s });
          return (r) => n.format(r);
        }),
      }),
      this.init(e);
  }
  init(e) {
    const s = (
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { interpolation: {} }
    ).interpolation;
    this.formatSeparator = s.formatSeparator
      ? s.formatSeparator
      : s.formatSeparator || ',';
  }
  add(e, t) {
    this.formats[e.toLowerCase().trim()] = t;
  }
  addCached(e, t) {
    this.formats[e.toLowerCase().trim()] = E(t);
  }
  format(e, t, s) {
    let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const r = t.split(this.formatSeparator);
    if (
      r.length > 1 &&
      r[0].indexOf('(') > 1 &&
      r[0].indexOf(')') < 0 &&
      r.find((o) => o.indexOf(')') > -1)
    ) {
      const o = r.findIndex((l) => l.indexOf(')') > -1);
      r[0] = [r[0], ...r.splice(1, o)].join(this.formatSeparator);
    }
    return r.reduce((o, l) => {
      const { formatName: c, formatOptions: g } = yt(l);
      if (this.formats[c]) {
        let f = o;
        try {
          const u =
              (n && n.formatParams && n.formatParams[n.interpolationkey]) || {},
            d = u.locale || u.lng || n.locale || n.lng || s;
          f = this.formats[c](o, d, { ...g, ...n, ...u });
        } catch (u) {
          this.logger.warn(u);
        }
        return f;
      } else this.logger.warn(`there was no format function for ${c}`);
      return o;
    }, e);
  }
}
const bt = (i, e) => {
  i.pending[e] !== void 0 && (delete i.pending[e], i.pendingCount--);
};
class St extends q {
  constructor(e, t, s) {
    let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(),
      (this.backend = e),
      (this.store = t),
      (this.services = s),
      (this.languageUtils = s.languageUtils),
      (this.options = n),
      (this.logger = N.create('backendConnector')),
      (this.waitingReads = []),
      (this.maxParallelReads = n.maxParallelReads || 10),
      (this.readingCalls = 0),
      (this.maxRetries = n.maxRetries >= 0 ? n.maxRetries : 5),
      (this.retryTimeout = n.retryTimeout >= 1 ? n.retryTimeout : 350),
      (this.state = {}),
      (this.queue = []),
      this.backend && this.backend.init && this.backend.init(s, n.backend, n);
  }
  queueLoad(e, t, s, n) {
    const r = {},
      a = {},
      o = {},
      l = {};
    return (
      e.forEach((c) => {
        let g = !0;
        t.forEach((f) => {
          const u = `${c}|${f}`;
          !s.reload && this.store.hasResourceBundle(c, f)
            ? (this.state[u] = 2)
            : this.state[u] < 0 ||
              (this.state[u] === 1
                ? a[u] === void 0 && (a[u] = !0)
                : ((this.state[u] = 1),
                  (g = !1),
                  a[u] === void 0 && (a[u] = !0),
                  r[u] === void 0 && (r[u] = !0),
                  l[f] === void 0 && (l[f] = !0)));
        }),
          g || (o[c] = !0);
      }),
      (Object.keys(r).length || Object.keys(a).length) &&
        this.queue.push({
          pending: a,
          pendingCount: Object.keys(a).length,
          loaded: {},
          errors: [],
          callback: n,
        }),
      {
        toLoad: Object.keys(r),
        pending: Object.keys(a),
        toLoadLanguages: Object.keys(o),
        toLoadNamespaces: Object.keys(l),
      }
    );
  }
  loaded(e, t, s) {
    const n = e.split('|'),
      r = n[0],
      a = n[1];
    t && this.emit('failedLoading', r, a, t),
      !t &&
        s &&
        this.store.addResourceBundle(r, a, s, void 0, void 0, { skipCopy: !0 }),
      (this.state[e] = t ? -1 : 2),
      t && s && (this.state[e] = 0);
    const o = {};
    this.queue.forEach((l) => {
      st(l.loaded, [r], a),
        bt(l, e),
        t && l.errors.push(t),
        l.pendingCount === 0 &&
          !l.done &&
          (Object.keys(l.loaded).forEach((c) => {
            o[c] || (o[c] = {});
            const g = l.loaded[c];
            g.length &&
              g.forEach((f) => {
                o[c][f] === void 0 && (o[c][f] = !0);
              });
          }),
          (l.done = !0),
          l.errors.length ? l.callback(l.errors) : l.callback());
    }),
      this.emit('loaded', o),
      (this.queue = this.queue.filter((l) => !l.done));
  }
  read(e, t, s) {
    let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
      r =
        arguments.length > 4 && arguments[4] !== void 0
          ? arguments[4]
          : this.retryTimeout,
      a = arguments.length > 5 ? arguments[5] : void 0;
    if (!e.length) return a(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: e,
        ns: t,
        fcName: s,
        tried: n,
        wait: r,
        callback: a,
      });
      return;
    }
    this.readingCalls++;
    const o = (c, g) => {
        if ((this.readingCalls--, this.waitingReads.length > 0)) {
          const f = this.waitingReads.shift();
          this.read(f.lng, f.ns, f.fcName, f.tried, f.wait, f.callback);
        }
        if (c && g && n < this.maxRetries) {
          setTimeout(() => {
            this.read.call(this, e, t, s, n + 1, r * 2, a);
          }, r);
          return;
        }
        a(c, g);
      },
      l = this.backend[s].bind(this.backend);
    if (l.length === 2) {
      try {
        const c = l(e, t);
        c && typeof c.then == 'function'
          ? c.then((g) => o(null, g)).catch(o)
          : o(null, c);
      } catch (c) {
        o(c);
      }
      return;
    }
    return l(e, t, o);
  }
  prepareLoading(e, t) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      n = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return (
        this.logger.warn(
          'No backend was added via i18next.use. Will not load resources.',
        ),
        n && n()
      );
    typeof e == 'string' && (e = this.languageUtils.toResolveHierarchy(e)),
      typeof t == 'string' && (t = [t]);
    const r = this.queueLoad(e, t, s, n);
    if (!r.toLoad.length) return r.pending.length || n(), null;
    r.toLoad.forEach((a) => {
      this.loadOne(a);
    });
  }
  load(e, t, s) {
    this.prepareLoading(e, t, {}, s);
  }
  reload(e, t, s) {
    this.prepareLoading(e, t, { reload: !0 }, s);
  }
  loadOne(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '';
    const s = e.split('|'),
      n = s[0],
      r = s[1];
    this.read(n, r, 'read', void 0, void 0, (a, o) => {
      a &&
        this.logger.warn(
          `${t}loading namespace ${r} for language ${n} failed`,
          a,
        ),
        !a &&
          o &&
          this.logger.log(`${t}loaded namespace ${r} for language ${n}`, o),
        this.loaded(e, a, o);
    });
  }
  saveMissing(e, t, s, n, r) {
    let a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {},
      o =
        arguments.length > 6 && arguments[6] !== void 0
          ? arguments[6]
          : () => {};
    if (
      this.services.utils &&
      this.services.utils.hasLoadedNamespace &&
      !this.services.utils.hasLoadedNamespace(t)
    ) {
      this.logger.warn(
        `did not save key "${s}" as the namespace "${t}" was not yet loaded`,
        'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!',
      );
      return;
    }
    if (!(s == null || s === '')) {
      if (this.backend && this.backend.create) {
        const l = { ...a, isUpdate: r },
          c = this.backend.create.bind(this.backend);
        if (c.length < 6)
          try {
            let g;
            c.length === 5 ? (g = c(e, t, s, n, l)) : (g = c(e, t, s, n)),
              g && typeof g.then == 'function'
                ? g.then((f) => o(null, f)).catch(o)
                : o(null, g);
          } catch (g) {
            o(g);
          }
        else c(e, t, s, n, o, l);
      }
      !e || !e[0] || this.store.addResource(e[0], t, s, n);
    }
  }
}
const pe = () => ({
    debug: !1,
    initImmediate: !0,
    ns: ['translation'],
    defaultNS: ['translation'],
    fallbackLng: ['dev'],
    fallbackNS: !1,
    supportedLngs: !1,
    nonExplicitSupportedLngs: !1,
    load: 'all',
    preload: !1,
    simplifyPluralSuffix: !0,
    keySeparator: '.',
    nsSeparator: ':',
    pluralSeparator: '_',
    contextSeparator: '_',
    partialBundledLanguages: !1,
    saveMissing: !1,
    updateMissing: !1,
    saveMissingTo: 'fallback',
    saveMissingPlurals: !0,
    missingKeyHandler: !1,
    missingInterpolationHandler: !1,
    postProcess: !1,
    postProcessPassResolved: !1,
    returnNull: !1,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: (i) => {
      let e = {};
      if (
        (typeof i[1] == 'object' && (e = i[1]),
        typeof i[1] == 'string' && (e.defaultValue = i[1]),
        typeof i[2] == 'string' && (e.tDescription = i[2]),
        typeof i[2] == 'object' || typeof i[3] == 'object')
      ) {
        const t = i[3] || i[2];
        Object.keys(t).forEach((s) => {
          e[s] = t[s];
        });
      }
      return e;
    },
    interpolation: {
      escapeValue: !0,
      format: (i) => i,
      prefix: '{{',
      suffix: '}}',
      formatSeparator: ',',
      unescapePrefix: '-',
      nestingPrefix: '$t(',
      nestingSuffix: ')',
      nestingOptionsSeparator: ',',
      maxReplaces: 1e3,
      skipOnVariables: !0,
    },
  }),
  me = (i) => (
    typeof i.ns == 'string' && (i.ns = [i.ns]),
    typeof i.fallbackLng == 'string' && (i.fallbackLng = [i.fallbackLng]),
    typeof i.fallbackNS == 'string' && (i.fallbackNS = [i.fallbackNS]),
    i.supportedLngs &&
      i.supportedLngs.indexOf('cimode') < 0 &&
      (i.supportedLngs = i.supportedLngs.concat(['cimode'])),
    i
  ),
  z = () => {},
  vt = (i) => {
    Object.getOwnPropertyNames(Object.getPrototypeOf(i)).forEach((t) => {
      typeof i[t] == 'function' && (i[t] = i[t].bind(i));
    });
  };
class V extends q {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      t = arguments.length > 1 ? arguments[1] : void 0;
    if (
      (super(),
      (this.options = me(e)),
      (this.services = {}),
      (this.logger = N),
      (this.modules = { external: [] }),
      vt(this),
      t && !this.isInitialized && !e.isClone)
    ) {
      if (!this.options.initImmediate) return this.init(e, t), this;
      setTimeout(() => {
        this.init(e, t);
      }, 0);
    }
  }
  init() {
    var e = this;
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      s = arguments.length > 1 ? arguments[1] : void 0;
    (this.isInitializing = !0),
      typeof t == 'function' && ((s = t), (t = {})),
      !t.defaultNS &&
        t.defaultNS !== !1 &&
        t.ns &&
        (typeof t.ns == 'string'
          ? (t.defaultNS = t.ns)
          : t.ns.indexOf('translation') < 0 && (t.defaultNS = t.ns[0]));
    const n = pe();
    (this.options = { ...n, ...this.options, ...me(t) }),
      this.options.compatibilityAPI !== 'v1' &&
        (this.options.interpolation = {
          ...n.interpolation,
          ...this.options.interpolation,
        }),
      t.keySeparator !== void 0 &&
        (this.options.userDefinedKeySeparator = t.keySeparator),
      t.nsSeparator !== void 0 &&
        (this.options.userDefinedNsSeparator = t.nsSeparator);
    const r = (g) => (g ? (typeof g == 'function' ? new g() : g) : null);
    if (!this.options.isClone) {
      this.modules.logger
        ? N.init(r(this.modules.logger), this.options)
        : N.init(null, this.options);
      let g;
      this.modules.formatter
        ? (g = this.modules.formatter)
        : typeof Intl < 'u' && (g = xt);
      const f = new fe(this.options);
      this.store = new ce(this.options.resources, this.options);
      const u = this.services;
      (u.logger = N),
        (u.resourceStore = this.store),
        (u.languageUtils = f),
        (u.pluralResolver = new pt(f, {
          prepend: this.options.pluralSeparator,
          compatibilityJSON: this.options.compatibilityJSON,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix,
        })),
        g &&
          (!this.options.interpolation.format ||
            this.options.interpolation.format === n.interpolation.format) &&
          ((u.formatter = r(g)),
          u.formatter.init(u, this.options),
          (this.options.interpolation.format = u.formatter.format.bind(
            u.formatter,
          ))),
        (u.interpolator = new mt(this.options)),
        (u.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
        (u.backendConnector = new St(
          r(this.modules.backend),
          u.resourceStore,
          u,
          this.options,
        )),
        u.backendConnector.on('*', function (d) {
          for (
            var p = arguments.length, y = new Array(p > 1 ? p - 1 : 0), m = 1;
            m < p;
            m++
          )
            y[m - 1] = arguments[m];
          e.emit(d, ...y);
        }),
        this.modules.languageDetector &&
          ((u.languageDetector = r(this.modules.languageDetector)),
          u.languageDetector.init &&
            u.languageDetector.init(u, this.options.detection, this.options)),
        this.modules.i18nFormat &&
          ((u.i18nFormat = r(this.modules.i18nFormat)),
          u.i18nFormat.init && u.i18nFormat.init(this)),
        (this.translator = new W(this.services, this.options)),
        this.translator.on('*', function (d) {
          for (
            var p = arguments.length, y = new Array(p > 1 ? p - 1 : 0), m = 1;
            m < p;
            m++
          )
            y[m - 1] = arguments[m];
          e.emit(d, ...y);
        }),
        this.modules.external.forEach((d) => {
          d.init && d.init(this);
        });
    }
    if (
      ((this.format = this.options.interpolation.format),
      s || (s = z),
      this.options.fallbackLng &&
        !this.services.languageDetector &&
        !this.options.lng)
    ) {
      const g = this.services.languageUtils.getFallbackCodes(
        this.options.fallbackLng,
      );
      g.length > 0 && g[0] !== 'dev' && (this.options.lng = g[0]);
    }
    !this.services.languageDetector &&
      !this.options.lng &&
      this.logger.warn(
        'init: no languageDetector is used and no lng is defined',
      ),
      [
        'getResource',
        'hasResourceBundle',
        'getResourceBundle',
        'getDataByLanguage',
      ].forEach((g) => {
        this[g] = function () {
          return e.store[g](...arguments);
        };
      }),
      [
        'addResource',
        'addResources',
        'addResourceBundle',
        'removeResourceBundle',
      ].forEach((g) => {
        this[g] = function () {
          return e.store[g](...arguments), e;
        };
      });
    const l = U(),
      c = () => {
        const g = (f, u) => {
          (this.isInitializing = !1),
            this.isInitialized &&
              !this.initializedStoreOnce &&
              this.logger.warn(
                'init: i18next is already initialized. You should call init just once!',
              ),
            (this.isInitialized = !0),
            this.options.isClone ||
              this.logger.log('initialized', this.options),
            this.emit('initialized', this.options),
            l.resolve(u),
            s(f, u);
        };
        if (
          this.languages &&
          this.options.compatibilityAPI !== 'v1' &&
          !this.isInitialized
        )
          return g(null, this.t.bind(this));
        this.changeLanguage(this.options.lng, g);
      };
    return (
      this.options.resources || !this.options.initImmediate
        ? c()
        : setTimeout(c, 0),
      l
    );
  }
  loadResources(e) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : z;
    const n = typeof e == 'string' ? e : this.language;
    if (
      (typeof e == 'function' && (s = e),
      !this.options.resources || this.options.partialBundledLanguages)
    ) {
      if (
        n &&
        n.toLowerCase() === 'cimode' &&
        (!this.options.preload || this.options.preload.length === 0)
      )
        return s();
      const r = [],
        a = (o) => {
          if (!o || o === 'cimode') return;
          this.services.languageUtils.toResolveHierarchy(o).forEach((c) => {
            c !== 'cimode' && r.indexOf(c) < 0 && r.push(c);
          });
        };
      n
        ? a(n)
        : this.services.languageUtils
            .getFallbackCodes(this.options.fallbackLng)
            .forEach((l) => a(l)),
        this.options.preload && this.options.preload.forEach((o) => a(o)),
        this.services.backendConnector.load(r, this.options.ns, (o) => {
          !o &&
            !this.resolvedLanguage &&
            this.language &&
            this.setResolvedLanguage(this.language),
            s(o);
        });
    } else s(null);
  }
  reloadResources(e, t, s) {
    const n = U();
    return (
      typeof e == 'function' && ((s = e), (e = void 0)),
      typeof t == 'function' && ((s = t), (t = void 0)),
      e || (e = this.languages),
      t || (t = this.options.ns),
      s || (s = z),
      this.services.backendConnector.reload(e, t, (r) => {
        n.resolve(), s(r);
      }),
      n
    );
  }
  use(e) {
    if (!e)
      throw new Error(
        'You are passing an undefined module! Please check the object you are passing to i18next.use()',
      );
    if (!e.type)
      throw new Error(
        'You are passing a wrong module! Please check the object you are passing to i18next.use()',
      );
    return (
      e.type === 'backend' && (this.modules.backend = e),
      (e.type === 'logger' || (e.log && e.warn && e.error)) &&
        (this.modules.logger = e),
      e.type === 'languageDetector' && (this.modules.languageDetector = e),
      e.type === 'i18nFormat' && (this.modules.i18nFormat = e),
      e.type === 'postProcessor' && Se.addPostProcessor(e),
      e.type === 'formatter' && (this.modules.formatter = e),
      e.type === '3rdParty' && this.modules.external.push(e),
      this
    );
  }
  setResolvedLanguage(e) {
    if (!(!e || !this.languages) && !(['cimode', 'dev'].indexOf(e) > -1))
      for (let t = 0; t < this.languages.length; t++) {
        const s = this.languages[t];
        if (
          !(['cimode', 'dev'].indexOf(s) > -1) &&
          this.store.hasLanguageSomeTranslations(s)
        ) {
          this.resolvedLanguage = s;
          break;
        }
      }
  }
  changeLanguage(e, t) {
    var s = this;
    this.isLanguageChangingTo = e;
    const n = U();
    this.emit('languageChanging', e);
    const r = (l) => {
        (this.language = l),
          (this.languages = this.services.languageUtils.toResolveHierarchy(l)),
          (this.resolvedLanguage = void 0),
          this.setResolvedLanguage(l);
      },
      a = (l, c) => {
        c
          ? (r(c),
            this.translator.changeLanguage(c),
            (this.isLanguageChangingTo = void 0),
            this.emit('languageChanged', c),
            this.logger.log('languageChanged', c))
          : (this.isLanguageChangingTo = void 0),
          n.resolve(function () {
            return s.t(...arguments);
          }),
          t &&
            t(l, function () {
              return s.t(...arguments);
            });
      },
      o = (l) => {
        !e && !l && this.services.languageDetector && (l = []);
        const c =
          typeof l == 'string'
            ? l
            : this.services.languageUtils.getBestMatchFromCodes(l);
        c &&
          (this.language || r(c),
          this.translator.language || this.translator.changeLanguage(c),
          this.services.languageDetector &&
            this.services.languageDetector.cacheUserLanguage &&
            this.services.languageDetector.cacheUserLanguage(c)),
          this.loadResources(c, (g) => {
            a(g, c);
          });
      };
    return (
      !e &&
      this.services.languageDetector &&
      !this.services.languageDetector.async
        ? o(this.services.languageDetector.detect())
        : !e &&
            this.services.languageDetector &&
            this.services.languageDetector.async
          ? this.services.languageDetector.detect.length === 0
            ? this.services.languageDetector.detect().then(o)
            : this.services.languageDetector.detect(o)
          : o(e),
      n
    );
  }
  getFixedT(e, t, s) {
    var n = this;
    const r = function (a, o) {
      let l;
      if (typeof o != 'object') {
        for (
          var c = arguments.length, g = new Array(c > 2 ? c - 2 : 0), f = 2;
          f < c;
          f++
        )
          g[f - 2] = arguments[f];
        l = n.options.overloadTranslationOptionHandler([a, o].concat(g));
      } else l = { ...o };
      (l.lng = l.lng || r.lng),
        (l.lngs = l.lngs || r.lngs),
        (l.ns = l.ns || r.ns),
        l.keyPrefix !== '' && (l.keyPrefix = l.keyPrefix || s || r.keyPrefix);
      const u = n.options.keySeparator || '.';
      let d;
      return (
        l.keyPrefix && Array.isArray(a)
          ? (d = a.map((p) => `${l.keyPrefix}${u}${p}`))
          : (d = l.keyPrefix ? `${l.keyPrefix}${u}${a}` : a),
        n.t(d, l)
      );
    };
    return (
      typeof e == 'string' ? (r.lng = e) : (r.lngs = e),
      (r.ns = t),
      (r.keyPrefix = s),
      r
    );
  }
  t() {
    return this.translator && this.translator.translate(...arguments);
  }
  exists() {
    return this.translator && this.translator.exists(...arguments);
  }
  setDefaultNamespace(e) {
    this.options.defaultNS = e;
  }
  hasLoadedNamespace(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return (
        this.logger.warn(
          'hasLoadedNamespace: i18next was not initialized',
          this.languages,
        ),
        !1
      );
    if (!this.languages || !this.languages.length)
      return (
        this.logger.warn(
          'hasLoadedNamespace: i18n.languages were undefined or empty',
          this.languages,
        ),
        !1
      );
    const s = t.lng || this.resolvedLanguage || this.languages[0],
      n = this.options ? this.options.fallbackLng : !1,
      r = this.languages[this.languages.length - 1];
    if (s.toLowerCase() === 'cimode') return !0;
    const a = (o, l) => {
      const c = this.services.backendConnector.state[`${o}|${l}`];
      return c === -1 || c === 0 || c === 2;
    };
    if (t.precheck) {
      const o = t.precheck(this, a);
      if (o !== void 0) return o;
    }
    return !!(
      this.hasResourceBundle(s, e) ||
      !this.services.backendConnector.backend ||
      (this.options.resources && !this.options.partialBundledLanguages) ||
      (a(s, e) && (!n || a(r, e)))
    );
  }
  loadNamespaces(e, t) {
    const s = U();
    return this.options.ns
      ? (typeof e == 'string' && (e = [e]),
        e.forEach((n) => {
          this.options.ns.indexOf(n) < 0 && this.options.ns.push(n);
        }),
        this.loadResources((n) => {
          s.resolve(), t && t(n);
        }),
        s)
      : (t && t(), Promise.resolve());
  }
  loadLanguages(e, t) {
    const s = U();
    typeof e == 'string' && (e = [e]);
    const n = this.options.preload || [],
      r = e.filter(
        (a) =>
          n.indexOf(a) < 0 && this.services.languageUtils.isSupportedCode(a),
      );
    return r.length
      ? ((this.options.preload = n.concat(r)),
        this.loadResources((a) => {
          s.resolve(), t && t(a);
        }),
        s)
      : (t && t(), Promise.resolve());
  }
  dir(e) {
    if (
      (e ||
        (e =
          this.resolvedLanguage ||
          (this.languages && this.languages.length > 0
            ? this.languages[0]
            : this.language)),
      !e)
    )
      return 'rtl';
    const t = [
        'ar',
        'shu',
        'sqr',
        'ssh',
        'xaa',
        'yhd',
        'yud',
        'aao',
        'abh',
        'abv',
        'acm',
        'acq',
        'acw',
        'acx',
        'acy',
        'adf',
        'ads',
        'aeb',
        'aec',
        'afb',
        'ajp',
        'apc',
        'apd',
        'arb',
        'arq',
        'ars',
        'ary',
        'arz',
        'auz',
        'avl',
        'ayh',
        'ayl',
        'ayn',
        'ayp',
        'bbz',
        'pga',
        'he',
        'iw',
        'ps',
        'pbt',
        'pbu',
        'pst',
        'prp',
        'prd',
        'ug',
        'ur',
        'ydd',
        'yds',
        'yih',
        'ji',
        'yi',
        'hbo',
        'men',
        'xmn',
        'fa',
        'jpr',
        'peo',
        'pes',
        'prs',
        'dv',
        'sam',
        'ckb',
      ],
      s = (this.services && this.services.languageUtils) || new fe(pe());
    return t.indexOf(s.getLanguagePartFromCode(e)) > -1 ||
      e.toLowerCase().indexOf('-arab') > 1
      ? 'rtl'
      : 'ltr';
  }
  static createInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      t = arguments.length > 1 ? arguments[1] : void 0;
    return new V(e, t);
  }
  cloneInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : z;
    const s = e.forkResourceStore;
    s && delete e.forkResourceStore;
    const n = { ...this.options, ...e, isClone: !0 },
      r = new V(n);
    return (
      (e.debug !== void 0 || e.prefix !== void 0) &&
        (r.logger = r.logger.clone(e)),
      ['store', 'services', 'language'].forEach((o) => {
        r[o] = this[o];
      }),
      (r.services = { ...this.services }),
      (r.services.utils = { hasLoadedNamespace: r.hasLoadedNamespace.bind(r) }),
      s &&
        ((r.store = new ce(this.store.data, n)),
        (r.services.resourceStore = r.store)),
      (r.translator = new W(r.services, n)),
      r.translator.on('*', function (o) {
        for (
          var l = arguments.length, c = new Array(l > 1 ? l - 1 : 0), g = 1;
          g < l;
          g++
        )
          c[g - 1] = arguments[g];
        r.emit(o, ...c);
      }),
      r.init(n, t),
      (r.translator.options = n),
      (r.translator.backendConnector.services.utils = {
        hasLoadedNamespace: r.hasLoadedNamespace.bind(r),
      }),
      r
    );
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage,
    };
  }
}
const b = V.createInstance();
b.createInstance = V.createInstance;
b.createInstance;
b.dir;
b.init;
b.loadResources;
b.reloadResources;
b.use;
b.changeLanguage;
b.getFixedT;
b.t;
b.exists;
b.setDefaultNamespace;
b.hasLoadedNamespace;
b.loadNamespaces;
b.loadLanguages;
const Lt = {
    en: {
      translation: {
        Welcome: 'Welcome',
        WelcomeBack: 'Welcome Back',
        En: 'En',
        Ru: 'Ru',
        SignUp: 'Sign Up',
        SignIn: 'Sign In',
        MainPage: 'Main Page',
        ProjectDescription:
          'Here, you can seamlessly explore both REST and GraphQL APIs in one powerful and intuitive interface. Whether you are sending HTTP requests or crafting complex GraphQL queries, our platform gives you the tools to interact with APIs effortlessly. Dive into the world of endless possibilities, streamline your workflow, and unlock the full potential of your data. Happy exploring',
        OurUndefinedsTeam: 'Our Undefineds Team',
        AboutTeam: 'About team',
        AboutCourse: 'About Course',
        CourseDescription:
          'React course covers essential technologies and tools, ensuring you are well-equipped for real-world development challenges. You will deepen your expertise in React, Redux, Next.js, TypeScript, master Git and GitHub commands, enhance your ability to debug and optimize with Chrome DevTools. This course is the perfect next step for advancing your frontend development career.',
        TeamDescription:
          'Our team consists of skilled and enthusiastic professionals who are dedicated to crafting outstanding user interfaces. The team is committed to continuous learning, ensuring they stay current with the latest frontend technologies and industry trends. They actively explore new frameworks, libraries, and tools to enhance their work, delivering high-quality and modern digital experiences',
        RomanSokolov: 'Roman Sokolov',
        RomanText:
          'Passionate about crafting intuitive user interfaces and diving deep into backend architecture, I aspire to continually grow as a developer, bringing innovative solutions to every project I undertake.',
        NikitaRadevich: 'Nikita Radevich',
        NikitaText:
          'I have always wanted to try web development because I find its challenges appealing. I know I have much to learn, but with the right approach, I believe I can achieve my goal',
        YanaDyachok: 'Yana Dyachok',
        YanaText:
          'I love the latest technologies and constant development I want to succeed in my future profession, because it is much better to develop in the field that you like.',
        Registration: 'Registration',
        Login: 'Login',
        Email: ' Email',
        Nickname: 'Nickname',
        Password: 'Password',
        ConfirmPassword: 'Confirm password',
        Submit: 'Submit',
        NotFound: 'Ooops... Page not found',
        ErrorMessage: 'Ooops... You are getting an error',
        BackToMain: 'Back to main',
        RemoveSpecialCharacters: 'Remove special characters from nickname',
        NicknameRequired: 'Nickname is required',
        InvalidEmail: 'Invalid email format',
        EmailRequired: 'Email is required',
        PasswordRequired: 'Password is required',
        PasswordContainsNumber: 'Password should contain 1 number',
        PasswordContainsUppercase:
          'Password should contain 1 uppercase letter [A-Z]',
        PasswordContainsLowercase:
          'Password should contain 1 lowercase letter [a-z]',
        PasswordContainsSpecialCharacter:
          'Password should contain 1 special character [!,@,#,$,% ..etc]',
        PasswordMinLength: 'Password must be at least 6 characters long',
        PasswordMustMatch: 'Password must match',
        History: 'History',
        GraphiQLClient: 'GraphiQL Client',
        RESTClient: 'REST Client',
        Response: 'Response',
        NoResponse: 'Enter the URL and click Send to get a response',
        status: 'status',
        Send: 'Send',
        accessGranted: 'Access granted!',
        loading: 'Loading...',
        wrongCredentials: 'Invalid email or password combination!',
        emailAlreadyUse: 'Email you are using is already in use!',
        temporaryBlock:
          'Access to this account has been temporarily disabled due to many failed login attempts. Try again later.',
        unexpectedError: 'An unexpected error occurred!',
        AddHeader: 'Add Header',
        Key: 'Key',
        Value: 'Value',
        Body: ' Body',
        Headers: 'Headers',
        NoHistory:
          'You haven`t executed any requests.It`s empty here.Try these options:',
        HistoryRequests: 'History Requests',
      },
    },
    ru: {
      translation: {
        Welcome: 'Добро пожаловать',
        WelcomeBack: 'Добро пожаловать обратно',
        En: 'Анг',
        Ru: 'Рус',
        SignUp: 'Зарегистрироваться',
        SignIn: 'Войти',
        MainPage: 'Главная Страница',
        ProjectDescription:
          'Здесь вы можете легко изучить API REST и GraphQL в одном мощном и интуитивно понятном интерфейсе. Отправляете ли вы HTTP-запросы или создаете сложные запросы GraphQL, наша платформа предоставляет вам инструменты для легкого взаимодействия с API. Погрузитесь в мир бесконечной возможности, оптимизируйте свой рабочий процесс и раскройте весь потенциал ваших данных. Приятного изучения',
        OurUndefinedsTeam: 'Наша команда Неопределенные',
        AboutTeam: 'Про команду',
        AboutCourse: 'Про курс',
        CourseDescription:
          'Курс React охватывает основные технологии и инструменты, гарантируя, что вы хорошо подготовлены к решению реальных задач. Вы будете углублять ваш опыт работы с React, Redux, Next.js, TypeScript, владением Git и команд GitHub, расширите ваши возможности по отладке и оптимизации с помощью инструментов разработчика Chrome. Этот курс является идеальным следующим шагом для развития вашей карьеры фронтенд-разработчика.',
        TeamDescription:
          'Наша команда состоит из опытных и увлеченных профессионалов, которые посвящают себя созданию выдающихся пользовательских интерфейсов. Команда стремится к непрерывному обучению, гарантируя, что они будут в курсе последних  технологий разработки и тенденций отрасли. Они активно исследуют новые фреймворки, библиотеки и инструменты для улучшения их работы, обеспечивая высококачественный и современный цифровой опыт',
        RomanSokolov: 'Роман Соколов',
        RomanText:
          'Увлеченный созданием интуитивно понятных пользовательских интерфейсов и глубоким погружением в серверную архитектуру, я стремлюсь постоянно расти как разработчик, привнося инновационные решения в каждый проект, за который берусь.',
        NikitaRadevich: 'Никита Радевич',
        NikitaText:
          'Я всегда хотел попробовать себя в веб-разработке, потому что меня привлекали ее задачи. Я знаю, что мне нужно многому научиться, но при правильном подходе я верю, что смогу достичь своей цели.',
        YanaDyachok: 'Яна Дячок',
        YanaText:
          'Я люблю новейшие технологии и постоянное развитие. Хочу добиться успеха в своей будущей профессии, потому что гораздо лучше развиваться в той сфере, которая тебе нравится.',
        Registration: 'Регистрация',
        Login: 'Войти',
        Email: 'Электронная почта',
        Nickname: 'Псевдоним',
        Password: 'Пароль',
        ConfirmPassword: 'Подтвердите пароль',
        Submit: 'Отправить',
        NotFound: 'Упс... Страница не найдена',
        ErrorMessage: 'Упс... Вы получаете ошибку',
        BackToMain: 'Вернуться на главную',
        RemoveSpecialCharacters: 'Удалите специальные символы из псевдонима',
        NicknameRequired: 'Псевдоним обязателен',
        InvalidEmail: 'Неверный формат электронной почты',
        EmailRequired: 'Электронная почта обязательна',
        PasswordRequired: 'Пароль обязателен',
        PasswordContainsNumber: 'Пароль должен содержать 1 цифру',
        PasswordContainsUppercase:
          'Пароль должен содержать 1 заглавную букву [A-Z]',
        PasswordContainsLowercase:
          'Пароль должен содержать 1 строчную букву [a-z]',
        PasswordContainsSpecialCharacter:
          'Пароль должен содержать 1 специальный символ [!,@,#,$,% ..и др.]',
        PasswordMinLength: 'Пароль должен содержать не менее 6 символов',
        PasswordMustMatch: 'Пароль должен совпадать',
        History: 'История',
        GraphiQLClient: 'GraphiQL Клиент',
        RESTClient: 'REST Клиент',
        Response: 'Ответ',
        NoResponse: 'Введите URL и нажмите «Отправить», чтобы получить ответ.',
        status: 'состояние',
        Send: 'Отправить',
        accessGranted: 'Доступ получен!',
        loading: 'Загрузка...',
        wrongCredentials: 'Неверная электронная почта или пароль!',
        emailAlreadyUse:
          'Указанный вами адрес электронной почты уже используется!',
        temporaryBlock:
          'Доступ к этой учетной записи временно отключен из-за множества неудачных попыток входа. Попробуйте еще раз позже.',
        unexpectedError: 'Произошла непредвиденная ошибка!',
        AddHeader: 'Добавить заголовок',
        Key: 'Ключ',
        Value: 'Значение',
        Body: 'Тело',
        Headers: 'Заголовки',
        NoHistory:
          'Вы еще не выполнили ни одного запроса, Здесь пусто. Попробуйте эти варианты:',
        HistoryRequests: 'История запросов',
      },
    },
  },
  wt = { language: 'en' },
  ve = xe({
    name: 'language',
    initialState: wt,
    reducers: {
      setLanguage: (i, e) => {
        i.language = e.payload;
      },
    },
  }),
  { setLanguage: kt } = ve.actions,
  Rt = ve.reducer,
  Ot = { graphiQLLinks: [] },
  Le = xe({
    name: 'graphiql-links',
    initialState: Ot,
    reducers: {
      addGraphiQLLinks: (i, e) => {
        i.graphiQLLinks.push(...e.payload), Pe('graphiQL', i.graphiQLLinks);
      },
    },
  });
Le.actions;
const Nt = Le.reducer,
  we = () =>
    Ce({ reducer: { language: Rt, restLinks: je, graphiQLLinks: Nt } }),
  te = we(),
  Pt = te.getState().language.language || 'en';
b.use(qe).init({ resources: Lt, lng: Pt, interpolation: { escapeValue: !1 } });
te.subscribe(() => {
  const i = te.getState().language.language;
  i && b.language !== i && b.changeLanguage(i);
});
const Ct = '_toggleControl_1al1l_1',
  jt = '_language_1al1l_7',
  $t = '_toggle_1al1l_1',
  Et = '_indicator_1al1l_21',
  It = '_indicatorActive_1al1l_33',
  I = {
    toggleControl: Ct,
    language: jt,
    toggle: $t,
    indicator: Et,
    indicatorActive: It,
  };
function At() {
  const i = Ve(),
    { i18n: e, t } = se(),
    s = Me((o) => o.language.language),
    [n, r] = P.useState(s),
    a = () => {
      const o = n === 'ru' ? 'en' : 'ru';
      r(o), i(kt(o)), e.changeLanguage(o);
    };
  return h.jsxs('div', {
    className: I.toggleControl,
    children: [
      h.jsx('span', { className: I.language, children: t('En') }),
      h.jsx('button', {
        type: 'button',
        className: I.toggle,
        onClick: a,
        children: h.jsx('div', {
          className: `${I.indicator} ${n === 'ru' ? I.indicatorActive : ''}`,
        }),
      }),
      h.jsx('span', { className: I.language, children: t('Ru') }),
    ],
  });
}
const Tt = '_header_10klx_1',
  Ft = '_sticky_10klx_13',
  Dt = '_navHeader_10klx_22',
  Ut = '_logo_10klx_28',
  Ht = '_logoActive_10klx_42',
  Vt = '_iconSignIn_10klx_53',
  Mt = '_iconSignInActive_10klx_67',
  Kt = '_iconSignUp_10klx_78',
  Bt = '_iconSignUpActive_10klx_92',
  _t = '_iconLogOut_10klx_103',
  R = {
    header: Tt,
    sticky: Ft,
    navHeader: Dt,
    logo: Ut,
    logoActive: Ht,
    iconSignIn: Vt,
    iconSignInActive: Mt,
    iconSignUp: Kt,
    iconSignUpActive: Bt,
    iconLogOut: _t,
  };
function zt() {
  const [i, e] = P.useState(!1),
    t = P.useRef(null),
    [s] = Fe(Ue);
  return (
    P.useEffect(() => {
      const n = new IntersectionObserver(
          ([a]) => {
            e(!a.isIntersecting);
          },
          { threshold: [1] },
        ),
        r = t.current;
      return (
        r && n.observe(r),
        () => {
          r && n.unobserve(r);
        }
      );
    }, []),
    h.jsxs(h.Fragment, {
      children: [
        h.jsx('div', { ref: t }),
        h.jsxs('header', {
          className: `${R.header} ${i ? R.sticky : ''}`,
          children: [
            h.jsx(Y, {
              to: '/',
              className: ({ isActive: n, isPending: r }) =>
                r ? R.logo : n ? R.logoActive : R.logo,
            }),
            h.jsxs('nav', {
              className: R.navHeader,
              children: [
                h.jsx(At, {}),
                s
                  ? h.jsx('button', {
                      type: 'button',
                      className: R.iconLogOut,
                      'aria-label': 'Log out',
                      onClick: () => {
                        De();
                      },
                    })
                  : h.jsxs(h.Fragment, {
                      children: [
                        h.jsx(Y, {
                          to: '/registration',
                          className: ({ isActive: n, isPending: r }) =>
                            r
                              ? R.iconSignUp
                              : n
                                ? R.iconSignUpActive
                                : R.iconSignUp,
                        }),
                        h.jsx(Y, {
                          to: '/login',
                          className: ({ isActive: n, isPending: r }) =>
                            r
                              ? R.iconSignIn
                              : n
                                ? R.iconSignInActive
                                : R.iconSignIn,
                        }),
                      ],
                    }),
              ],
            }),
          ],
        }),
      ],
    })
  );
}
function Jt() {
  const e = Be().some((t) => {
    var s;
    return (s = t.handle) == null ? void 0 : s.hideHeader;
  });
  return h.jsxs(h.Fragment, { children: [!e && h.jsx(zt, {}), h.jsx(Oe, {})] });
}
const Gt = '_footer_1vusc_1',
  Qt = '_iconGitHub_1vusc_10',
  Wt = '_teamBlock_1vusc_18',
  qt = '_footerNav_1vusc_24',
  Yt = '_link_1vusc_32',
  Zt = '_logoRS_1vusc_57',
  C = {
    footer: Gt,
    iconGitHub: Qt,
    teamBlock: Wt,
    footerNav: qt,
    link: Yt,
    logoRS: Zt,
  };
function Xt() {
  const { t: i } = se();
  return h.jsxs('footer', {
    className: C.footer,
    children: [
      h.jsxs('div', {
        className: C.teamBlock,
        children: [
          h.jsx(Ge, { className: C.iconGitHub }),
          h.jsxs('nav', {
            className: C.footerNav,
            children: [
              ' ',
              h.jsx(_, {
                to: 'https://github.com/rs0048',
                className: C.link,
                children: i('RomanSokolov'),
              }),
              h.jsx(_, {
                to: 'https://github.com/Yana-Dyachok',
                className: C.link,
                children: i('YanaDyachok'),
              }),
              h.jsx(_, {
                to: 'https://github.com/lonelybush',
                className: C.link,
                children: i('NikitaRadevich'),
              }),
            ],
          }),
        ],
      }),
      h.jsx('p', { children: '2024' }),
      h.jsx(_, {
        to: 'https://rs.school/',
        className: C.linkBlock,
        children: h.jsx('div', { className: C.logoRS }),
      }),
    ],
  });
}
function es({ children: i }) {
  const e = P.useRef();
  return (
    e.current || (e.current = we()),
    h.jsx(Ke, { store: e.current, children: i })
  );
}
const ts = '_container_lhbtw_1',
  ss = { container: ts };
class ns extends Ne.Component {
  constructor(e) {
    super(e), (this.state = { hasError: !1 });
  }
  static getDerivedStateFromError() {
    return { hasError: !0 };
  }
  render() {
    const { hasError: e } = this.state,
      { t, children: s } = this.props;
    return e
      ? h.jsxs('div', {
          className: ss.container,
          children: [
            h.jsx('h2', { children: t('ErrorMessage') }),
            h.jsx(Te, {
              btnType: 'button',
              to: '/',
              children: t('BackToMain'),
            }),
          ],
        })
      : s;
  }
}
const is = Ye()(ns),
  rs = '_toastBody_ap29t_1',
  as = '_toastWrapper_ap29t_7',
  ye = { toastBody: rs, toastWrapper: as },
  os = {
    position: 'bottom-right',
    bodyClassName: ye.toastBody,
    toastClassName: ye.toastWrapper,
    hideProgressBar: !0,
    closeOnClick: !0,
    pauseOnHover: !0,
    draggable: !0,
    theme: 'light',
    transition: Qe,
  };
function ls() {
  return h.jsx(We, { ...os });
}
function xs() {
  return h.jsxs('html', {
    lang: 'en',
    children: [
      h.jsxs('head', {
        children: [
          h.jsx('link', {
            rel: 'icon',
            href: '/favicon-react.ico',
            type: 'image/x-icon',
          }),
          h.jsx(_e, {}),
          h.jsx(ze, {}),
        ],
      }),
      h.jsx('body', {
        children: h.jsx(is, {
          children: h.jsx(He, {
            children: h.jsxs(es, {
              children: [
                h.jsxs(Ze, {
                  i18n: b,
                  children: [h.jsx(Jt, {}), h.jsx(ls, {}), h.jsx(Xt, {})],
                }),
                h.jsx(Je, {}),
              ],
            }),
          }),
        }),
      }),
    ],
  });
}
export { xs as default };
