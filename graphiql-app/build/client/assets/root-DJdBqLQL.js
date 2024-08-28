import { r as F, R as Ge, d as Bt, j as b, O as Wt } from './index-k4sjWK-j.js';
import {
  s as Jt,
  a as qt,
  I as Gt,
  u as St,
} from './useTranslation-pYUzJfcX.js';
import {
  N as ke,
  h as Yt,
  L as le,
  M as Qt,
  j as Xt,
  S as Zt,
} from './components-D99Bc5lC.js';
import { F as en } from './index-BCQ0Yyab.js';
const tn = {
  type: '3rdParty',
  init(t) {
    Jt(t.options.react), qt(t);
  },
};
function nn({ i18n: t, defaultNS: e, children: n }) {
  const r = F.useMemo(() => ({ i18n: t, defaultNS: e }), [t, e]);
  return F.createElement(Gt.Provider, { value: r }, n);
}
const rn = {
  type: 'logger',
  log(t) {
    this.output('log', t);
  },
  warn(t) {
    this.output('warn', t);
  },
  error(t) {
    this.output('error', t);
  },
  output(t, e) {
    console && console[t] && console[t].apply(console, e);
  },
};
class he {
  constructor(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(e, n);
  }
  init(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.prefix = n.prefix || 'i18next:'),
      (this.logger = e || rn),
      (this.options = n),
      (this.debug = n.debug);
  }
  log() {
    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
      n[r] = arguments[r];
    return this.forward(n, 'log', '', !0);
  }
  warn() {
    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
      n[r] = arguments[r];
    return this.forward(n, 'warn', '', !0);
  }
  error() {
    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
      n[r] = arguments[r];
    return this.forward(n, 'error', '');
  }
  deprecate() {
    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
      n[r] = arguments[r];
    return this.forward(n, 'warn', 'WARNING DEPRECATED: ', !0);
  }
  forward(e, n, r, s) {
    return s && !this.debug
      ? null
      : (typeof e[0] == 'string' && (e[0] = `${r}${this.prefix} ${e[0]}`),
        this.logger[n](e));
  }
  create(e) {
    return new he(this.logger, {
      prefix: `${this.prefix}:${e}:`,
      ...this.options,
    });
  }
  clone(e) {
    return (
      (e = e || this.options),
      (e.prefix = e.prefix || this.prefix),
      new he(this.logger, e)
    );
  }
}
var I = new he();
class we {
  constructor() {
    this.observers = {};
  }
  on(e, n) {
    return (
      e.split(' ').forEach((r) => {
        this.observers[r] || (this.observers[r] = new Map());
        const s = this.observers[r].get(n) || 0;
        this.observers[r].set(n, s + 1);
      }),
      this
    );
  }
  off(e, n) {
    if (this.observers[e]) {
      if (!n) {
        delete this.observers[e];
        return;
      }
      this.observers[e].delete(n);
    }
  }
  emit(e) {
    for (
      var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1;
      s < n;
      s++
    )
      r[s - 1] = arguments[s];
    this.observers[e] &&
      Array.from(this.observers[e].entries()).forEach((o) => {
        let [a, u] = o;
        for (let l = 0; l < u; l++) a(...r);
      }),
      this.observers['*'] &&
        Array.from(this.observers['*'].entries()).forEach((o) => {
          let [a, u] = o;
          for (let l = 0; l < u; l++) a.apply(a, [e, ...r]);
        });
  }
}
const Z = () => {
    let t, e;
    const n = new Promise((r, s) => {
      (t = r), (e = s);
    });
    return (n.resolve = t), (n.reject = e), n;
  },
  Ye = (t) => (t == null ? '' : '' + t),
  sn = (t, e, n) => {
    t.forEach((r) => {
      e[r] && (n[r] = e[r]);
    });
  },
  on = /###/g,
  Qe = (t) => (t && t.indexOf('###') > -1 ? t.replace(on, '.') : t),
  Xe = (t) => !t || typeof t == 'string',
  te = (t, e, n) => {
    const r = typeof e != 'string' ? e : e.split('.');
    let s = 0;
    for (; s < r.length - 1; ) {
      if (Xe(t)) return {};
      const i = Qe(r[s]);
      !t[i] && n && (t[i] = new n()),
        Object.prototype.hasOwnProperty.call(t, i) ? (t = t[i]) : (t = {}),
        ++s;
    }
    return Xe(t) ? {} : { obj: t, k: Qe(r[s]) };
  },
  Ze = (t, e, n) => {
    const { obj: r, k: s } = te(t, e, Object);
    if (r !== void 0 || e.length === 1) {
      r[s] = n;
      return;
    }
    let i = e[e.length - 1],
      o = e.slice(0, e.length - 1),
      a = te(t, o, Object);
    for (; a.obj === void 0 && o.length; )
      (i = `${o[o.length - 1]}.${i}`),
        (o = o.slice(0, o.length - 1)),
        (a = te(t, o, Object)),
        a && a.obj && typeof a.obj[`${a.k}.${i}`] < 'u' && (a.obj = void 0);
    a.obj[`${a.k}.${i}`] = n;
  },
  an = (t, e, n, r) => {
    const { obj: s, k: i } = te(t, e, Object);
    (s[i] = s[i] || []), s[i].push(n);
  },
  pe = (t, e) => {
    const { obj: n, k: r } = te(t, e);
    if (n) return n[r];
  },
  un = (t, e, n) => {
    const r = pe(t, n);
    return r !== void 0 ? r : pe(e, n);
  },
  vt = (t, e, n) => {
    for (const r in e)
      r !== '__proto__' &&
        r !== 'constructor' &&
        (r in t
          ? typeof t[r] == 'string' ||
            t[r] instanceof String ||
            typeof e[r] == 'string' ||
            e[r] instanceof String
            ? n && (t[r] = e[r])
            : vt(t[r], e[r], n)
          : (t[r] = e[r]));
    return t;
  },
  B = (t) => t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
var ln = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;',
};
const cn = (t) =>
  typeof t == 'string' ? t.replace(/[&<>"'\/]/g, (e) => ln[e]) : t;
class fn {
  constructor(e) {
    (this.capacity = e), (this.regExpMap = new Map()), (this.regExpQueue = []);
  }
  getRegExp(e) {
    const n = this.regExpMap.get(e);
    if (n !== void 0) return n;
    const r = new RegExp(e);
    return (
      this.regExpQueue.length === this.capacity &&
        this.regExpMap.delete(this.regExpQueue.shift()),
      this.regExpMap.set(e, r),
      this.regExpQueue.push(e),
      r
    );
  }
}
const dn = [' ', ',', '?', '!', ';'],
  hn = new fn(20),
  pn = (t, e, n) => {
    (e = e || ''), (n = n || '');
    const r = dn.filter((o) => e.indexOf(o) < 0 && n.indexOf(o) < 0);
    if (r.length === 0) return !0;
    const s = hn.getRegExp(
      `(${r.map((o) => (o === '?' ? '\\?' : o)).join('|')})`,
    );
    let i = !s.test(t);
    if (!i) {
      const o = t.indexOf(n);
      o > 0 && !s.test(t.substring(0, o)) && (i = !0);
    }
    return i;
  },
  Te = function (t, e) {
    let n =
      arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '.';
    if (!t) return;
    if (t[e]) return t[e];
    const r = e.split(n);
    let s = t;
    for (let i = 0; i < r.length; ) {
      if (!s || typeof s != 'object') return;
      let o,
        a = '';
      for (let u = i; u < r.length; ++u)
        if ((u !== i && (a += n), (a += r[u]), (o = s[a]), o !== void 0)) {
          if (
            ['string', 'number', 'boolean'].indexOf(typeof o) > -1 &&
            u < r.length - 1
          )
            continue;
          i += u - i + 1;
          break;
        }
      s = o;
    }
    return s;
  },
  ge = (t) => (t && t.indexOf('_') > 0 ? t.replace('_', '-') : t);
class et extends we {
  constructor(e) {
    let n =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { ns: ['translation'], defaultNS: 'translation' };
    super(),
      (this.data = e || {}),
      (this.options = n),
      this.options.keySeparator === void 0 && (this.options.keySeparator = '.'),
      this.options.ignoreJSONStructure === void 0 &&
        (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(e) {
    this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
  }
  removeNamespaces(e) {
    const n = this.options.ns.indexOf(e);
    n > -1 && this.options.ns.splice(n, 1);
  }
  getResource(e, n, r) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const i =
        s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator,
      o =
        s.ignoreJSONStructure !== void 0
          ? s.ignoreJSONStructure
          : this.options.ignoreJSONStructure;
    let a;
    e.indexOf('.') > -1
      ? (a = e.split('.'))
      : ((a = [e, n]),
        r &&
          (Array.isArray(r)
            ? a.push(...r)
            : typeof r == 'string' && i
              ? a.push(...r.split(i))
              : a.push(r)));
    const u = pe(this.data, a);
    return (
      !u &&
        !n &&
        !r &&
        e.indexOf('.') > -1 &&
        ((e = a[0]), (n = a[1]), (r = a.slice(2).join('.'))),
      u || !o || typeof r != 'string'
        ? u
        : Te(this.data && this.data[e] && this.data[e][n], r, i)
    );
  }
  addResource(e, n, r, s) {
    let i =
      arguments.length > 4 && arguments[4] !== void 0
        ? arguments[4]
        : { silent: !1 };
    const o =
      i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator;
    let a = [e, n];
    r && (a = a.concat(o ? r.split(o) : r)),
      e.indexOf('.') > -1 && ((a = e.split('.')), (s = n), (n = a[1])),
      this.addNamespaces(n),
      Ze(this.data, a, s),
      i.silent || this.emit('added', e, n, r, s);
  }
  addResources(e, n, r) {
    let s =
      arguments.length > 3 && arguments[3] !== void 0
        ? arguments[3]
        : { silent: !1 };
    for (const i in r)
      (typeof r[i] == 'string' || Array.isArray(r[i])) &&
        this.addResource(e, n, i, r[i], { silent: !0 });
    s.silent || this.emit('added', e, n, r);
  }
  addResourceBundle(e, n, r, s, i) {
    let o =
        arguments.length > 5 && arguments[5] !== void 0
          ? arguments[5]
          : { silent: !1, skipCopy: !1 },
      a = [e, n];
    e.indexOf('.') > -1 && ((a = e.split('.')), (s = r), (r = n), (n = a[1])),
      this.addNamespaces(n);
    let u = pe(this.data, a) || {};
    o.skipCopy || (r = JSON.parse(JSON.stringify(r))),
      s ? vt(u, r, i) : (u = { ...u, ...r }),
      Ze(this.data, a, u),
      o.silent || this.emit('added', e, n, r);
  }
  removeResourceBundle(e, n) {
    this.hasResourceBundle(e, n) && delete this.data[e][n],
      this.removeNamespaces(n),
      this.emit('removed', e, n);
  }
  hasResourceBundle(e, n) {
    return this.getResource(e, n) !== void 0;
  }
  getResourceBundle(e, n) {
    return (
      n || (n = this.options.defaultNS),
      this.options.compatibilityAPI === 'v1'
        ? { ...this.getResource(e, n) }
        : this.getResource(e, n)
    );
  }
  getDataByLanguage(e) {
    return this.data[e];
  }
  hasLanguageSomeTranslations(e) {
    const n = this.getDataByLanguage(e);
    return !!((n && Object.keys(n)) || []).find(
      (s) => n[s] && Object.keys(n[s]).length > 0,
    );
  }
  toJSON() {
    return this.data;
  }
}
var wt = {
  processors: {},
  addPostProcessor(t) {
    this.processors[t.name] = t;
  },
  handle(t, e, n, r, s) {
    return (
      t.forEach((i) => {
        this.processors[i] && (e = this.processors[i].process(e, n, r, s));
      }),
      e
    );
  },
};
const tt = {};
class me extends we {
  constructor(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(),
      sn(
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
      (this.options = n),
      this.options.keySeparator === void 0 && (this.options.keySeparator = '.'),
      (this.logger = I.create('translator'));
  }
  changeLanguage(e) {
    e && (this.language = e);
  }
  exists(e) {
    let n =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { interpolation: {} };
    if (e == null) return !1;
    const r = this.resolve(e, n);
    return r && r.res !== void 0;
  }
  extractFromKey(e, n) {
    let r = n.nsSeparator !== void 0 ? n.nsSeparator : this.options.nsSeparator;
    r === void 0 && (r = ':');
    const s =
      n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator;
    let i = n.ns || this.options.defaultNS || [];
    const o = r && e.indexOf(r) > -1,
      a =
        !this.options.userDefinedKeySeparator &&
        !n.keySeparator &&
        !this.options.userDefinedNsSeparator &&
        !n.nsSeparator &&
        !pn(e, r, s);
    if (o && !a) {
      const u = e.match(this.interpolator.nestingRegexp);
      if (u && u.length > 0) return { key: e, namespaces: i };
      const l = e.split(r);
      (r !== s || (r === s && this.options.ns.indexOf(l[0]) > -1)) &&
        (i = l.shift()),
        (e = l.join(s));
    }
    return typeof i == 'string' && (i = [i]), { key: e, namespaces: i };
  }
  translate(e, n, r) {
    if (
      (typeof n != 'object' &&
        this.options.overloadTranslationOptionHandler &&
        (n = this.options.overloadTranslationOptionHandler(arguments)),
      typeof n == 'object' && (n = { ...n }),
      n || (n = {}),
      e == null)
    )
      return '';
    Array.isArray(e) || (e = [String(e)]);
    const s =
        n.returnDetails !== void 0
          ? n.returnDetails
          : this.options.returnDetails,
      i =
        n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator,
      { key: o, namespaces: a } = this.extractFromKey(e[e.length - 1], n),
      u = a[a.length - 1],
      l = n.lng || this.language,
      c = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (l && l.toLowerCase() === 'cimode') {
      if (c) {
        const m = n.nsSeparator || this.options.nsSeparator;
        return s
          ? {
              res: `${u}${m}${o}`,
              usedKey: o,
              exactUsedKey: o,
              usedLng: l,
              usedNS: u,
              usedParams: this.getUsedParamsDetails(n),
            }
          : `${u}${m}${o}`;
      }
      return s
        ? {
            res: o,
            usedKey: o,
            exactUsedKey: o,
            usedLng: l,
            usedNS: u,
            usedParams: this.getUsedParamsDetails(n),
          }
        : o;
    }
    const d = this.resolve(e, n);
    let f = d && d.res;
    const h = (d && d.usedKey) || o,
      p = (d && d.exactUsedKey) || o,
      y = Object.prototype.toString.apply(f),
      g = ['[object Number]', '[object Function]', '[object RegExp]'],
      S = n.joinArrays !== void 0 ? n.joinArrays : this.options.joinArrays,
      w = !this.i18nFormat || this.i18nFormat.handleAsObject;
    if (
      w &&
      f &&
      typeof f != 'string' &&
      typeof f != 'boolean' &&
      typeof f != 'number' &&
      g.indexOf(y) < 0 &&
      !(typeof S == 'string' && Array.isArray(f))
    ) {
      if (!n.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler ||
          this.logger.warn(
            'accessing an object - but returnObjects options is not enabled!',
          );
        const m = this.options.returnedObjectHandler
          ? this.options.returnedObjectHandler(h, f, { ...n, ns: a })
          : `key '${o} (${this.language})' returned an object instead of string.`;
        return s
          ? ((d.res = m), (d.usedParams = this.getUsedParamsDetails(n)), d)
          : m;
      }
      if (i) {
        const m = Array.isArray(f),
          v = m ? [] : {},
          O = m ? p : h;
        for (const C in f)
          if (Object.prototype.hasOwnProperty.call(f, C)) {
            const R = `${O}${i}${C}`;
            (v[C] = this.translate(R, { ...n, joinArrays: !1, ns: a })),
              v[C] === R && (v[C] = f[C]);
          }
        f = v;
      }
    } else if (w && typeof S == 'string' && Array.isArray(f))
      (f = f.join(S)), f && (f = this.extendTranslation(f, e, n, r));
    else {
      let m = !1,
        v = !1;
      const O = n.count !== void 0 && typeof n.count != 'string',
        C = me.hasDefaultValue(n),
        R = O ? this.pluralResolver.getSuffix(l, n.count, n) : '',
        oe =
          n.ordinal && O
            ? this.pluralResolver.getSuffix(l, n.count, { ordinal: !1 })
            : '',
        ae =
          O &&
          !n.ordinal &&
          n.count === 0 &&
          this.pluralResolver.shouldUseIntlApi(),
        z =
          (ae && n[`defaultValue${this.options.pluralSeparator}zero`]) ||
          n[`defaultValue${R}`] ||
          n[`defaultValue${oe}`] ||
          n.defaultValue;
      !this.isValidLookup(f) && C && ((m = !0), (f = z)),
        this.isValidLookup(f) || ((v = !0), (f = o));
      const Ht =
          (n.missingKeyNoValueFallbackToKey ||
            this.options.missingKeyNoValueFallbackToKey) &&
          v
            ? void 0
            : f,
        Y = C && z !== f && this.options.updateMissing;
      if (v || m || Y) {
        if (
          (this.logger.log(Y ? 'updateKey' : 'missingKey', l, u, o, Y ? z : f),
          i)
        ) {
          const L = this.resolve(o, { ...n, keySeparator: !1 });
          L &&
            L.res &&
            this.logger.warn(
              'Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.',
            );
        }
        let Q = [];
        const ue = this.languageUtils.getFallbackCodes(
          this.options.fallbackLng,
          n.lng || this.language,
        );
        if (this.options.saveMissingTo === 'fallback' && ue && ue[0])
          for (let L = 0; L < ue.length; L++) Q.push(ue[L]);
        else
          this.options.saveMissingTo === 'all'
            ? (Q = this.languageUtils.toResolveHierarchy(
                n.lng || this.language,
              ))
            : Q.push(n.lng || this.language);
        const Je = (L, K, X) => {
          const qe = C && X !== f ? X : Ht;
          this.options.missingKeyHandler
            ? this.options.missingKeyHandler(L, u, K, qe, Y, n)
            : this.backendConnector &&
              this.backendConnector.saveMissing &&
              this.backendConnector.saveMissing(L, u, K, qe, Y, n),
            this.emit('missingKey', L, u, K, f);
        };
        this.options.saveMissing &&
          (this.options.saveMissingPlurals && O
            ? Q.forEach((L) => {
                const K = this.pluralResolver.getSuffixes(L, n);
                ae &&
                  n[`defaultValue${this.options.pluralSeparator}zero`] &&
                  K.indexOf(`${this.options.pluralSeparator}zero`) < 0 &&
                  K.push(`${this.options.pluralSeparator}zero`),
                  K.forEach((X) => {
                    Je([L], o + X, n[`defaultValue${X}`] || z);
                  });
              })
            : Je(Q, o, z));
      }
      (f = this.extendTranslation(f, e, n, d, r)),
        v &&
          f === o &&
          this.options.appendNamespaceToMissingKey &&
          (f = `${u}:${o}`),
        (v || m) &&
          this.options.parseMissingKeyHandler &&
          (this.options.compatibilityAPI !== 'v1'
            ? (f = this.options.parseMissingKeyHandler(
                this.options.appendNamespaceToMissingKey ? `${u}:${o}` : o,
                m ? f : void 0,
              ))
            : (f = this.options.parseMissingKeyHandler(f)));
    }
    return s
      ? ((d.res = f), (d.usedParams = this.getUsedParamsDetails(n)), d)
      : f;
  }
  extendTranslation(e, n, r, s, i) {
    var o = this;
    if (this.i18nFormat && this.i18nFormat.parse)
      e = this.i18nFormat.parse(
        e,
        { ...this.options.interpolation.defaultVariables, ...r },
        r.lng || this.language || s.usedLng,
        s.usedNS,
        s.usedKey,
        { resolved: s },
      );
    else if (!r.skipInterpolation) {
      r.interpolation &&
        this.interpolator.init({
          ...r,
          interpolation: { ...this.options.interpolation, ...r.interpolation },
        });
      const l =
        typeof e == 'string' &&
        (r && r.interpolation && r.interpolation.skipOnVariables !== void 0
          ? r.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables);
      let c;
      if (l) {
        const f = e.match(this.interpolator.nestingRegexp);
        c = f && f.length;
      }
      let d = r.replace && typeof r.replace != 'string' ? r.replace : r;
      if (
        (this.options.interpolation.defaultVariables &&
          (d = { ...this.options.interpolation.defaultVariables, ...d }),
        (e = this.interpolator.interpolate(
          e,
          d,
          r.lng || this.language || s.usedLng,
          r,
        )),
        l)
      ) {
        const f = e.match(this.interpolator.nestingRegexp),
          h = f && f.length;
        c < h && (r.nest = !1);
      }
      !r.lng &&
        this.options.compatibilityAPI !== 'v1' &&
        s &&
        s.res &&
        (r.lng = this.language || s.usedLng),
        r.nest !== !1 &&
          (e = this.interpolator.nest(
            e,
            function () {
              for (
                var f = arguments.length, h = new Array(f), p = 0;
                p < f;
                p++
              )
                h[p] = arguments[p];
              return i && i[0] === h[0] && !r.context
                ? (o.logger.warn(
                    `It seems you are nesting recursively key: ${h[0]} in key: ${n[0]}`,
                  ),
                  null)
                : o.translate(...h, n);
            },
            r,
          )),
        r.interpolation && this.interpolator.reset();
    }
    const a = r.postProcess || this.options.postProcess,
      u = typeof a == 'string' ? [a] : a;
    return (
      e != null &&
        u &&
        u.length &&
        r.applyPostProcessor !== !1 &&
        (e = wt.handle(
          u,
          e,
          n,
          this.options && this.options.postProcessPassResolved
            ? {
                i18nResolved: {
                  ...s,
                  usedParams: this.getUsedParamsDetails(r),
                },
                ...r,
              }
            : r,
          this,
        )),
      e
    );
  }
  resolve(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r,
      s,
      i,
      o,
      a;
    return (
      typeof e == 'string' && (e = [e]),
      e.forEach((u) => {
        if (this.isValidLookup(r)) return;
        const l = this.extractFromKey(u, n),
          c = l.key;
        s = c;
        let d = l.namespaces;
        this.options.fallbackNS && (d = d.concat(this.options.fallbackNS));
        const f = n.count !== void 0 && typeof n.count != 'string',
          h =
            f &&
            !n.ordinal &&
            n.count === 0 &&
            this.pluralResolver.shouldUseIntlApi(),
          p =
            n.context !== void 0 &&
            (typeof n.context == 'string' || typeof n.context == 'number') &&
            n.context !== '',
          y = n.lngs
            ? n.lngs
            : this.languageUtils.toResolveHierarchy(
                n.lng || this.language,
                n.fallbackLng,
              );
        d.forEach((g) => {
          this.isValidLookup(r) ||
            ((a = g),
            !tt[`${y[0]}-${g}`] &&
              this.utils &&
              this.utils.hasLoadedNamespace &&
              !this.utils.hasLoadedNamespace(a) &&
              ((tt[`${y[0]}-${g}`] = !0),
              this.logger.warn(
                `key "${s}" for languages "${y.join(', ')}" won't get resolved as namespace "${a}" was not yet loaded`,
                'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!',
              )),
            y.forEach((S) => {
              if (this.isValidLookup(r)) return;
              o = S;
              const w = [c];
              if (this.i18nFormat && this.i18nFormat.addLookupKeys)
                this.i18nFormat.addLookupKeys(w, c, S, g, n);
              else {
                let m;
                f && (m = this.pluralResolver.getSuffix(S, n.count, n));
                const v = `${this.options.pluralSeparator}zero`,
                  O = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                if (
                  (f &&
                    (w.push(c + m),
                    n.ordinal &&
                      m.indexOf(O) === 0 &&
                      w.push(c + m.replace(O, this.options.pluralSeparator)),
                    h && w.push(c + v)),
                  p)
                ) {
                  const C = `${c}${this.options.contextSeparator}${n.context}`;
                  w.push(C),
                    f &&
                      (w.push(C + m),
                      n.ordinal &&
                        m.indexOf(O) === 0 &&
                        w.push(C + m.replace(O, this.options.pluralSeparator)),
                      h && w.push(C + v));
                }
              }
              let x;
              for (; (x = w.pop()); )
                this.isValidLookup(r) ||
                  ((i = x), (r = this.getResource(S, g, x, n)));
            }));
        });
      }),
      { res: r, usedKey: s, exactUsedKey: i, usedLng: o, usedNS: a }
    );
  }
  isValidLookup(e) {
    return (
      e !== void 0 &&
      !(!this.options.returnNull && e === null) &&
      !(!this.options.returnEmptyString && e === '')
    );
  }
  getResource(e, n, r) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return this.i18nFormat && this.i18nFormat.getResource
      ? this.i18nFormat.getResource(e, n, r, s)
      : this.resourceStore.getResource(e, n, r, s);
  }
  getUsedParamsDetails() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const n = [
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
      r = e.replace && typeof e.replace != 'string';
    let s = r ? e.replace : e;
    if (
      (r && typeof e.count < 'u' && (s.count = e.count),
      this.options.interpolation.defaultVariables &&
        (s = { ...this.options.interpolation.defaultVariables, ...s }),
      !r)
    ) {
      s = { ...s };
      for (const i of n) delete s[i];
    }
    return s;
  }
  static hasDefaultValue(e) {
    const n = 'defaultValue';
    for (const r in e)
      if (
        Object.prototype.hasOwnProperty.call(e, r) &&
        n === r.substring(0, n.length) &&
        e[r] !== void 0
      )
        return !0;
    return !1;
  }
}
const Ne = (t) => t.charAt(0).toUpperCase() + t.slice(1);
class nt {
  constructor(e) {
    (this.options = e),
      (this.supportedLngs = this.options.supportedLngs || !1),
      (this.logger = I.create('languageUtils'));
  }
  getScriptPartFromCode(e) {
    if (((e = ge(e)), !e || e.indexOf('-') < 0)) return null;
    const n = e.split('-');
    return n.length === 2 || (n.pop(), n[n.length - 1].toLowerCase() === 'x')
      ? null
      : this.formatLanguageCode(n.join('-'));
  }
  getLanguagePartFromCode(e) {
    if (((e = ge(e)), !e || e.indexOf('-') < 0)) return e;
    const n = e.split('-');
    return this.formatLanguageCode(n[0]);
  }
  formatLanguageCode(e) {
    if (typeof e == 'string' && e.indexOf('-') > -1) {
      const n = ['hans', 'hant', 'latn', 'cyrl', 'cans', 'mong', 'arab'];
      let r = e.split('-');
      return (
        this.options.lowerCaseLng
          ? (r = r.map((s) => s.toLowerCase()))
          : r.length === 2
            ? ((r[0] = r[0].toLowerCase()),
              (r[1] = r[1].toUpperCase()),
              n.indexOf(r[1].toLowerCase()) > -1 &&
                (r[1] = Ne(r[1].toLowerCase())))
            : r.length === 3 &&
              ((r[0] = r[0].toLowerCase()),
              r[1].length === 2 && (r[1] = r[1].toUpperCase()),
              r[0] !== 'sgn' &&
                r[2].length === 2 &&
                (r[2] = r[2].toUpperCase()),
              n.indexOf(r[1].toLowerCase()) > -1 &&
                (r[1] = Ne(r[1].toLowerCase())),
              n.indexOf(r[2].toLowerCase()) > -1 &&
                (r[2] = Ne(r[2].toLowerCase()))),
        r.join('-')
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
    let n;
    return (
      e.forEach((r) => {
        if (n) return;
        const s = this.formatLanguageCode(r);
        (!this.options.supportedLngs || this.isSupportedCode(s)) && (n = s);
      }),
      !n &&
        this.options.supportedLngs &&
        e.forEach((r) => {
          if (n) return;
          const s = this.getLanguagePartFromCode(r);
          if (this.isSupportedCode(s)) return (n = s);
          n = this.options.supportedLngs.find((i) => {
            if (i === s) return i;
            if (
              !(i.indexOf('-') < 0 && s.indexOf('-') < 0) &&
              ((i.indexOf('-') > 0 &&
                s.indexOf('-') < 0 &&
                i.substring(0, i.indexOf('-')) === s) ||
                (i.indexOf(s) === 0 && s.length > 1))
            )
              return i;
          });
        }),
      n || (n = this.getFallbackCodes(this.options.fallbackLng)[0]),
      n
    );
  }
  getFallbackCodes(e, n) {
    if (!e) return [];
    if (
      (typeof e == 'function' && (e = e(n)),
      typeof e == 'string' && (e = [e]),
      Array.isArray(e))
    )
      return e;
    if (!n) return e.default || [];
    let r = e[n];
    return (
      r || (r = e[this.getScriptPartFromCode(n)]),
      r || (r = e[this.formatLanguageCode(n)]),
      r || (r = e[this.getLanguagePartFromCode(n)]),
      r || (r = e.default),
      r || []
    );
  }
  toResolveHierarchy(e, n) {
    const r = this.getFallbackCodes(n || this.options.fallbackLng || [], e),
      s = [],
      i = (o) => {
        o &&
          (this.isSupportedCode(o)
            ? s.push(o)
            : this.logger.warn(
                `rejecting language code not found in supportedLngs: ${o}`,
              ));
      };
    return (
      typeof e == 'string' && (e.indexOf('-') > -1 || e.indexOf('_') > -1)
        ? (this.options.load !== 'languageOnly' &&
            i(this.formatLanguageCode(e)),
          this.options.load !== 'languageOnly' &&
            this.options.load !== 'currentOnly' &&
            i(this.getScriptPartFromCode(e)),
          this.options.load !== 'currentOnly' &&
            i(this.getLanguagePartFromCode(e)))
        : typeof e == 'string' && i(this.formatLanguageCode(e)),
      r.forEach((o) => {
        s.indexOf(o) < 0 && i(this.formatLanguageCode(o));
      }),
      s
    );
  }
}
let gn = [
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
  mn = {
    1: (t) => +(t > 1),
    2: (t) => +(t != 1),
    3: (t) => 0,
    4: (t) =>
      t % 10 == 1 && t % 100 != 11
        ? 0
        : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20)
          ? 1
          : 2,
    5: (t) =>
      t == 0
        ? 0
        : t == 1
          ? 1
          : t == 2
            ? 2
            : t % 100 >= 3 && t % 100 <= 10
              ? 3
              : t % 100 >= 11
                ? 4
                : 5,
    6: (t) => (t == 1 ? 0 : t >= 2 && t <= 4 ? 1 : 2),
    7: (t) =>
      t == 1
        ? 0
        : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20)
          ? 1
          : 2,
    8: (t) => (t == 1 ? 0 : t == 2 ? 1 : t != 8 && t != 11 ? 2 : 3),
    9: (t) => +(t >= 2),
    10: (t) => (t == 1 ? 0 : t == 2 ? 1 : t < 7 ? 2 : t < 11 ? 3 : 4),
    11: (t) =>
      t == 1 || t == 11 ? 0 : t == 2 || t == 12 ? 1 : t > 2 && t < 20 ? 2 : 3,
    12: (t) => +(t % 10 != 1 || t % 100 == 11),
    13: (t) => +(t !== 0),
    14: (t) => (t == 1 ? 0 : t == 2 ? 1 : t == 3 ? 2 : 3),
    15: (t) =>
      t % 10 == 1 && t % 100 != 11
        ? 0
        : t % 10 >= 2 && (t % 100 < 10 || t % 100 >= 20)
          ? 1
          : 2,
    16: (t) => (t % 10 == 1 && t % 100 != 11 ? 0 : t !== 0 ? 1 : 2),
    17: (t) => (t == 1 || (t % 10 == 1 && t % 100 != 11) ? 0 : 1),
    18: (t) => (t == 0 ? 0 : t == 1 ? 1 : 2),
    19: (t) =>
      t == 1
        ? 0
        : t == 0 || (t % 100 > 1 && t % 100 < 11)
          ? 1
          : t % 100 > 10 && t % 100 < 20
            ? 2
            : 3,
    20: (t) => (t == 1 ? 0 : t == 0 || (t % 100 > 0 && t % 100 < 20) ? 1 : 2),
    21: (t) =>
      t % 100 == 1
        ? 1
        : t % 100 == 2
          ? 2
          : t % 100 == 3 || t % 100 == 4
            ? 3
            : 0,
    22: (t) =>
      t == 1 ? 0 : t == 2 ? 1 : (t < 0 || t > 10) && t % 10 == 0 ? 2 : 3,
  };
const yn = ['v1', 'v2', 'v3'],
  bn = ['v4'],
  rt = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 },
  xn = () => {
    const t = {};
    return (
      gn.forEach((e) => {
        e.lngs.forEach((n) => {
          t[n] = { numbers: e.nr, plurals: mn[e.fc] };
        });
      }),
      t
    );
  };
class Sn {
  constructor(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.languageUtils = e),
      (this.options = n),
      (this.logger = I.create('pluralResolver')),
      (!this.options.compatibilityJSON ||
        bn.includes(this.options.compatibilityJSON)) &&
        (typeof Intl > 'u' || !Intl.PluralRules) &&
        ((this.options.compatibilityJSON = 'v3'),
        this.logger.error(
          'Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.',
        )),
      (this.rules = xn()),
      (this.pluralRulesCache = {});
  }
  addRule(e, n) {
    this.rules[e] = n;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi())
      try {
        const r = ge(e === 'dev' ? 'en' : e),
          s = n.ordinal ? 'ordinal' : 'cardinal',
          i = JSON.stringify({ cleanedCode: r, type: s });
        if (i in this.pluralRulesCache) return this.pluralRulesCache[i];
        const o = new Intl.PluralRules(r, { type: s });
        return (this.pluralRulesCache[i] = o), o;
      } catch {
        return;
      }
    return (
      this.rules[e] || this.rules[this.languageUtils.getLanguagePartFromCode(e)]
    );
  }
  needsPlural(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = this.getRule(e, n);
    return this.shouldUseIntlApi()
      ? r && r.resolvedOptions().pluralCategories.length > 1
      : r && r.numbers.length > 1;
  }
  getPluralFormsOfKey(e, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(e, r).map((s) => `${n}${s}`);
  }
  getSuffixes(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = this.getRule(e, n);
    return r
      ? this.shouldUseIntlApi()
        ? r
            .resolvedOptions()
            .pluralCategories.sort((s, i) => rt[s] - rt[i])
            .map(
              (s) =>
                `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ''}${s}`,
            )
        : r.numbers.map((s) => this.getSuffix(e, s, n))
      : [];
  }
  getSuffix(e, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const s = this.getRule(e, r);
    return s
      ? this.shouldUseIntlApi()
        ? `${this.options.prepend}${r.ordinal ? `ordinal${this.options.prepend}` : ''}${s.select(n)}`
        : this.getSuffixRetroCompatible(s, n)
      : (this.logger.warn(`no plural rule found for: ${e}`), '');
  }
  getSuffixRetroCompatible(e, n) {
    const r = e.noAbs ? e.plurals(n) : e.plurals(Math.abs(n));
    let s = e.numbers[r];
    this.options.simplifyPluralSuffix &&
      e.numbers.length === 2 &&
      e.numbers[0] === 1 &&
      (s === 2 ? (s = 'plural') : s === 1 && (s = ''));
    const i = () =>
      this.options.prepend && s.toString()
        ? this.options.prepend + s.toString()
        : s.toString();
    return this.options.compatibilityJSON === 'v1'
      ? s === 1
        ? ''
        : typeof s == 'number'
          ? `_plural_${s.toString()}`
          : i()
      : this.options.compatibilityJSON === 'v2' ||
          (this.options.simplifyPluralSuffix &&
            e.numbers.length === 2 &&
            e.numbers[0] === 1)
        ? i()
        : this.options.prepend && r.toString()
          ? this.options.prepend + r.toString()
          : r.toString();
  }
  shouldUseIntlApi() {
    return !yn.includes(this.options.compatibilityJSON);
  }
}
const st = function (t, e, n) {
    let r =
        arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : '.',
      s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0,
      i = un(t, e, n);
    return (
      !i &&
        s &&
        typeof n == 'string' &&
        ((i = Te(t, n, r)), i === void 0 && (i = Te(e, n, r))),
      i
    );
  },
  Le = (t) => t.replace(/\$/g, '$$$$');
class vn {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    (this.logger = I.create('interpolator')),
      (this.options = e),
      (this.format = (e.interpolation && e.interpolation.format) || ((n) => n)),
      this.init(e);
  }
  init() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    e.interpolation || (e.interpolation = { escapeValue: !0 });
    const {
      escape: n,
      escapeValue: r,
      useRawValueToEscape: s,
      prefix: i,
      prefixEscaped: o,
      suffix: a,
      suffixEscaped: u,
      formatSeparator: l,
      unescapeSuffix: c,
      unescapePrefix: d,
      nestingPrefix: f,
      nestingPrefixEscaped: h,
      nestingSuffix: p,
      nestingSuffixEscaped: y,
      nestingOptionsSeparator: g,
      maxReplaces: S,
      alwaysFormat: w,
    } = e.interpolation;
    (this.escape = n !== void 0 ? n : cn),
      (this.escapeValue = r !== void 0 ? r : !0),
      (this.useRawValueToEscape = s !== void 0 ? s : !1),
      (this.prefix = i ? B(i) : o || '{{'),
      (this.suffix = a ? B(a) : u || '}}'),
      (this.formatSeparator = l || ','),
      (this.unescapePrefix = c ? '' : d || '-'),
      (this.unescapeSuffix = this.unescapePrefix ? '' : c || ''),
      (this.nestingPrefix = f ? B(f) : h || B('$t(')),
      (this.nestingSuffix = p ? B(p) : y || B(')')),
      (this.nestingOptionsSeparator = g || ','),
      (this.maxReplaces = S || 1e3),
      (this.alwaysFormat = w !== void 0 ? w : !1),
      this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const e = (n, r) =>
      n && n.source === r ? ((n.lastIndex = 0), n) : new RegExp(r, 'g');
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
  interpolate(e, n, r, s) {
    let i, o, a;
    const u =
        (this.options &&
          this.options.interpolation &&
          this.options.interpolation.defaultVariables) ||
        {},
      l = (h) => {
        if (h.indexOf(this.formatSeparator) < 0) {
          const S = st(
            n,
            u,
            h,
            this.options.keySeparator,
            this.options.ignoreJSONStructure,
          );
          return this.alwaysFormat
            ? this.format(S, void 0, r, { ...s, ...n, interpolationkey: h })
            : S;
        }
        const p = h.split(this.formatSeparator),
          y = p.shift().trim(),
          g = p.join(this.formatSeparator).trim();
        return this.format(
          st(
            n,
            u,
            y,
            this.options.keySeparator,
            this.options.ignoreJSONStructure,
          ),
          g,
          r,
          { ...s, ...n, interpolationkey: y },
        );
      };
    this.resetRegExp();
    const c =
        (s && s.missingInterpolationHandler) ||
        this.options.missingInterpolationHandler,
      d =
        s && s.interpolation && s.interpolation.skipOnVariables !== void 0
          ? s.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables;
    return (
      [
        { regex: this.regexpUnescape, safeValue: (h) => Le(h) },
        {
          regex: this.regexp,
          safeValue: (h) => (this.escapeValue ? Le(this.escape(h)) : Le(h)),
        },
      ].forEach((h) => {
        for (a = 0; (i = h.regex.exec(e)); ) {
          const p = i[1].trim();
          if (((o = l(p)), o === void 0))
            if (typeof c == 'function') {
              const g = c(e, i, s);
              o = typeof g == 'string' ? g : '';
            } else if (s && Object.prototype.hasOwnProperty.call(s, p)) o = '';
            else if (d) {
              o = i[0];
              continue;
            } else
              this.logger.warn(
                `missed to pass in variable ${p} for interpolating ${e}`,
              ),
                (o = '');
          else typeof o != 'string' && !this.useRawValueToEscape && (o = Ye(o));
          const y = h.safeValue(o);
          if (
            ((e = e.replace(i[0], y)),
            d
              ? ((h.regex.lastIndex += o.length),
                (h.regex.lastIndex -= i[0].length))
              : (h.regex.lastIndex = 0),
            a++,
            a >= this.maxReplaces)
          )
            break;
        }
      }),
      e
    );
  }
  nest(e, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      s,
      i,
      o;
    const a = (u, l) => {
      const c = this.nestingOptionsSeparator;
      if (u.indexOf(c) < 0) return u;
      const d = u.split(new RegExp(`${c}[ ]*{`));
      let f = `{${d[1]}`;
      (u = d[0]), (f = this.interpolate(f, o));
      const h = f.match(/'/g),
        p = f.match(/"/g);
      ((h && h.length % 2 === 0 && !p) || p.length % 2 !== 0) &&
        (f = f.replace(/'/g, '"'));
      try {
        (o = JSON.parse(f)), l && (o = { ...l, ...o });
      } catch (y) {
        return (
          this.logger.warn(
            `failed parsing options string in nesting for key ${u}`,
            y,
          ),
          `${u}${c}${f}`
        );
      }
      return (
        o.defaultValue &&
          o.defaultValue.indexOf(this.prefix) > -1 &&
          delete o.defaultValue,
        u
      );
    };
    for (; (s = this.nestingRegexp.exec(e)); ) {
      let u = [];
      (o = { ...r }),
        (o = o.replace && typeof o.replace != 'string' ? o.replace : o),
        (o.applyPostProcessor = !1),
        delete o.defaultValue;
      let l = !1;
      if (s[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(s[1])) {
        const c = s[1].split(this.formatSeparator).map((d) => d.trim());
        (s[1] = c.shift()), (u = c), (l = !0);
      }
      if (
        ((i = n(a.call(this, s[1].trim(), o), o)),
        i && s[0] === e && typeof i != 'string')
      )
        return i;
      typeof i != 'string' && (i = Ye(i)),
        i ||
          (this.logger.warn(`missed to resolve ${s[1]} for nesting ${e}`),
          (i = '')),
        l &&
          (i = u.reduce(
            (c, d) =>
              this.format(c, d, r.lng, { ...r, interpolationkey: s[1].trim() }),
            i.trim(),
          )),
        (e = e.replace(s[0], i)),
        (this.regexp.lastIndex = 0);
    }
    return e;
  }
}
const wn = (t) => {
    let e = t.toLowerCase().trim();
    const n = {};
    if (t.indexOf('(') > -1) {
      const r = t.split('(');
      e = r[0].toLowerCase().trim();
      const s = r[1].substring(0, r[1].length - 1);
      e === 'currency' && s.indexOf(':') < 0
        ? n.currency || (n.currency = s.trim())
        : e === 'relativetime' && s.indexOf(':') < 0
          ? n.range || (n.range = s.trim())
          : s.split(';').forEach((o) => {
              if (o) {
                const [a, ...u] = o.split(':'),
                  l = u
                    .join(':')
                    .trim()
                    .replace(/^'+|'+$/g, ''),
                  c = a.trim();
                n[c] || (n[c] = l),
                  l === 'false' && (n[c] = !1),
                  l === 'true' && (n[c] = !0),
                  isNaN(l) || (n[c] = parseInt(l, 10));
              }
            });
    }
    return { formatName: e, formatOptions: n };
  },
  W = (t) => {
    const e = {};
    return (n, r, s) => {
      let i = s;
      s &&
        s.interpolationkey &&
        s.formatParams &&
        s.formatParams[s.interpolationkey] &&
        s[s.interpolationkey] &&
        (i = { ...i, [s.interpolationkey]: void 0 });
      const o = r + JSON.stringify(i);
      let a = e[o];
      return a || ((a = t(ge(r), s)), (e[o] = a)), a(n);
    };
  };
class Cn {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    (this.logger = I.create('formatter')),
      (this.options = e),
      (this.formats = {
        number: W((n, r) => {
          const s = new Intl.NumberFormat(n, { ...r });
          return (i) => s.format(i);
        }),
        currency: W((n, r) => {
          const s = new Intl.NumberFormat(n, { ...r, style: 'currency' });
          return (i) => s.format(i);
        }),
        datetime: W((n, r) => {
          const s = new Intl.DateTimeFormat(n, { ...r });
          return (i) => s.format(i);
        }),
        relativetime: W((n, r) => {
          const s = new Intl.RelativeTimeFormat(n, { ...r });
          return (i) => s.format(i, r.range || 'day');
        }),
        list: W((n, r) => {
          const s = new Intl.ListFormat(n, { ...r });
          return (i) => s.format(i);
        }),
      }),
      this.init(e);
  }
  init(e) {
    const r = (
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { interpolation: {} }
    ).interpolation;
    this.formatSeparator = r.formatSeparator
      ? r.formatSeparator
      : r.formatSeparator || ',';
  }
  add(e, n) {
    this.formats[e.toLowerCase().trim()] = n;
  }
  addCached(e, n) {
    this.formats[e.toLowerCase().trim()] = W(n);
  }
  format(e, n, r) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const i = n.split(this.formatSeparator);
    if (
      i.length > 1 &&
      i[0].indexOf('(') > 1 &&
      i[0].indexOf(')') < 0 &&
      i.find((a) => a.indexOf(')') > -1)
    ) {
      const a = i.findIndex((u) => u.indexOf(')') > -1);
      i[0] = [i[0], ...i.splice(1, a)].join(this.formatSeparator);
    }
    return i.reduce((a, u) => {
      const { formatName: l, formatOptions: c } = wn(u);
      if (this.formats[l]) {
        let d = a;
        try {
          const f =
              (s && s.formatParams && s.formatParams[s.interpolationkey]) || {},
            h = f.locale || f.lng || s.locale || s.lng || r;
          d = this.formats[l](a, h, { ...c, ...s, ...f });
        } catch (f) {
          this.logger.warn(f);
        }
        return d;
      } else this.logger.warn(`there was no format function for ${l}`);
      return a;
    }, e);
  }
}
const On = (t, e) => {
  t.pending[e] !== void 0 && (delete t.pending[e], t.pendingCount--);
};
class Rn extends we {
  constructor(e, n, r) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(),
      (this.backend = e),
      (this.store = n),
      (this.services = r),
      (this.languageUtils = r.languageUtils),
      (this.options = s),
      (this.logger = I.create('backendConnector')),
      (this.waitingReads = []),
      (this.maxParallelReads = s.maxParallelReads || 10),
      (this.readingCalls = 0),
      (this.maxRetries = s.maxRetries >= 0 ? s.maxRetries : 5),
      (this.retryTimeout = s.retryTimeout >= 1 ? s.retryTimeout : 350),
      (this.state = {}),
      (this.queue = []),
      this.backend && this.backend.init && this.backend.init(r, s.backend, s);
  }
  queueLoad(e, n, r, s) {
    const i = {},
      o = {},
      a = {},
      u = {};
    return (
      e.forEach((l) => {
        let c = !0;
        n.forEach((d) => {
          const f = `${l}|${d}`;
          !r.reload && this.store.hasResourceBundle(l, d)
            ? (this.state[f] = 2)
            : this.state[f] < 0 ||
              (this.state[f] === 1
                ? o[f] === void 0 && (o[f] = !0)
                : ((this.state[f] = 1),
                  (c = !1),
                  o[f] === void 0 && (o[f] = !0),
                  i[f] === void 0 && (i[f] = !0),
                  u[d] === void 0 && (u[d] = !0)));
        }),
          c || (a[l] = !0);
      }),
      (Object.keys(i).length || Object.keys(o).length) &&
        this.queue.push({
          pending: o,
          pendingCount: Object.keys(o).length,
          loaded: {},
          errors: [],
          callback: s,
        }),
      {
        toLoad: Object.keys(i),
        pending: Object.keys(o),
        toLoadLanguages: Object.keys(a),
        toLoadNamespaces: Object.keys(u),
      }
    );
  }
  loaded(e, n, r) {
    const s = e.split('|'),
      i = s[0],
      o = s[1];
    n && this.emit('failedLoading', i, o, n),
      !n &&
        r &&
        this.store.addResourceBundle(i, o, r, void 0, void 0, { skipCopy: !0 }),
      (this.state[e] = n ? -1 : 2),
      n && r && (this.state[e] = 0);
    const a = {};
    this.queue.forEach((u) => {
      an(u.loaded, [i], o),
        On(u, e),
        n && u.errors.push(n),
        u.pendingCount === 0 &&
          !u.done &&
          (Object.keys(u.loaded).forEach((l) => {
            a[l] || (a[l] = {});
            const c = u.loaded[l];
            c.length &&
              c.forEach((d) => {
                a[l][d] === void 0 && (a[l][d] = !0);
              });
          }),
          (u.done = !0),
          u.errors.length ? u.callback(u.errors) : u.callback());
    }),
      this.emit('loaded', a),
      (this.queue = this.queue.filter((u) => !u.done));
  }
  read(e, n, r) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
      i =
        arguments.length > 4 && arguments[4] !== void 0
          ? arguments[4]
          : this.retryTimeout,
      o = arguments.length > 5 ? arguments[5] : void 0;
    if (!e.length) return o(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: e,
        ns: n,
        fcName: r,
        tried: s,
        wait: i,
        callback: o,
      });
      return;
    }
    this.readingCalls++;
    const a = (l, c) => {
        if ((this.readingCalls--, this.waitingReads.length > 0)) {
          const d = this.waitingReads.shift();
          this.read(d.lng, d.ns, d.fcName, d.tried, d.wait, d.callback);
        }
        if (l && c && s < this.maxRetries) {
          setTimeout(() => {
            this.read.call(this, e, n, r, s + 1, i * 2, o);
          }, i);
          return;
        }
        o(l, c);
      },
      u = this.backend[r].bind(this.backend);
    if (u.length === 2) {
      try {
        const l = u(e, n);
        l && typeof l.then == 'function'
          ? l.then((c) => a(null, c)).catch(a)
          : a(null, l);
      } catch (l) {
        a(l);
      }
      return;
    }
    return u(e, n, a);
  }
  prepareLoading(e, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      s = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return (
        this.logger.warn(
          'No backend was added via i18next.use. Will not load resources.',
        ),
        s && s()
      );
    typeof e == 'string' && (e = this.languageUtils.toResolveHierarchy(e)),
      typeof n == 'string' && (n = [n]);
    const i = this.queueLoad(e, n, r, s);
    if (!i.toLoad.length) return i.pending.length || s(), null;
    i.toLoad.forEach((o) => {
      this.loadOne(o);
    });
  }
  load(e, n, r) {
    this.prepareLoading(e, n, {}, r);
  }
  reload(e, n, r) {
    this.prepareLoading(e, n, { reload: !0 }, r);
  }
  loadOne(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '';
    const r = e.split('|'),
      s = r[0],
      i = r[1];
    this.read(s, i, 'read', void 0, void 0, (o, a) => {
      o &&
        this.logger.warn(
          `${n}loading namespace ${i} for language ${s} failed`,
          o,
        ),
        !o &&
          a &&
          this.logger.log(`${n}loaded namespace ${i} for language ${s}`, a),
        this.loaded(e, o, a);
    });
  }
  saveMissing(e, n, r, s, i) {
    let o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {},
      a =
        arguments.length > 6 && arguments[6] !== void 0
          ? arguments[6]
          : () => {};
    if (
      this.services.utils &&
      this.services.utils.hasLoadedNamespace &&
      !this.services.utils.hasLoadedNamespace(n)
    ) {
      this.logger.warn(
        `did not save key "${r}" as the namespace "${n}" was not yet loaded`,
        'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!',
      );
      return;
    }
    if (!(r == null || r === '')) {
      if (this.backend && this.backend.create) {
        const u = { ...o, isUpdate: i },
          l = this.backend.create.bind(this.backend);
        if (l.length < 6)
          try {
            let c;
            l.length === 5 ? (c = l(e, n, r, s, u)) : (c = l(e, n, r, s)),
              c && typeof c.then == 'function'
                ? c.then((d) => a(null, d)).catch(a)
                : a(null, c);
          } catch (c) {
            a(c);
          }
        else l(e, n, r, s, a, u);
      }
      !e || !e[0] || this.store.addResource(e[0], n, r, s);
    }
  }
}
const it = () => ({
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
    overloadTranslationOptionHandler: (t) => {
      let e = {};
      if (
        (typeof t[1] == 'object' && (e = t[1]),
        typeof t[1] == 'string' && (e.defaultValue = t[1]),
        typeof t[2] == 'string' && (e.tDescription = t[2]),
        typeof t[2] == 'object' || typeof t[3] == 'object')
      ) {
        const n = t[3] || t[2];
        Object.keys(n).forEach((r) => {
          e[r] = n[r];
        });
      }
      return e;
    },
    interpolation: {
      escapeValue: !0,
      format: (t) => t,
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
  ot = (t) => (
    typeof t.ns == 'string' && (t.ns = [t.ns]),
    typeof t.fallbackLng == 'string' && (t.fallbackLng = [t.fallbackLng]),
    typeof t.fallbackNS == 'string' && (t.fallbackNS = [t.fallbackNS]),
    t.supportedLngs &&
      t.supportedLngs.indexOf('cimode') < 0 &&
      (t.supportedLngs = t.supportedLngs.concat(['cimode'])),
    t
  ),
  ce = () => {},
  Pn = (t) => {
    Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach((n) => {
      typeof t[n] == 'function' && (t[n] = t[n].bind(t));
    });
  };
class ne extends we {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 ? arguments[1] : void 0;
    if (
      (super(),
      (this.options = ot(e)),
      (this.services = {}),
      (this.logger = I),
      (this.modules = { external: [] }),
      Pn(this),
      n && !this.isInitialized && !e.isClone)
    ) {
      if (!this.options.initImmediate) return this.init(e, n), this;
      setTimeout(() => {
        this.init(e, n);
      }, 0);
    }
  }
  init() {
    var e = this;
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = arguments.length > 1 ? arguments[1] : void 0;
    (this.isInitializing = !0),
      typeof n == 'function' && ((r = n), (n = {})),
      !n.defaultNS &&
        n.defaultNS !== !1 &&
        n.ns &&
        (typeof n.ns == 'string'
          ? (n.defaultNS = n.ns)
          : n.ns.indexOf('translation') < 0 && (n.defaultNS = n.ns[0]));
    const s = it();
    (this.options = { ...s, ...this.options, ...ot(n) }),
      this.options.compatibilityAPI !== 'v1' &&
        (this.options.interpolation = {
          ...s.interpolation,
          ...this.options.interpolation,
        }),
      n.keySeparator !== void 0 &&
        (this.options.userDefinedKeySeparator = n.keySeparator),
      n.nsSeparator !== void 0 &&
        (this.options.userDefinedNsSeparator = n.nsSeparator);
    const i = (c) => (c ? (typeof c == 'function' ? new c() : c) : null);
    if (!this.options.isClone) {
      this.modules.logger
        ? I.init(i(this.modules.logger), this.options)
        : I.init(null, this.options);
      let c;
      this.modules.formatter
        ? (c = this.modules.formatter)
        : typeof Intl < 'u' && (c = Cn);
      const d = new nt(this.options);
      this.store = new et(this.options.resources, this.options);
      const f = this.services;
      (f.logger = I),
        (f.resourceStore = this.store),
        (f.languageUtils = d),
        (f.pluralResolver = new Sn(d, {
          prepend: this.options.pluralSeparator,
          compatibilityJSON: this.options.compatibilityJSON,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix,
        })),
        c &&
          (!this.options.interpolation.format ||
            this.options.interpolation.format === s.interpolation.format) &&
          ((f.formatter = i(c)),
          f.formatter.init(f, this.options),
          (this.options.interpolation.format = f.formatter.format.bind(
            f.formatter,
          ))),
        (f.interpolator = new vn(this.options)),
        (f.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
        (f.backendConnector = new Rn(
          i(this.modules.backend),
          f.resourceStore,
          f,
          this.options,
        )),
        f.backendConnector.on('*', function (h) {
          for (
            var p = arguments.length, y = new Array(p > 1 ? p - 1 : 0), g = 1;
            g < p;
            g++
          )
            y[g - 1] = arguments[g];
          e.emit(h, ...y);
        }),
        this.modules.languageDetector &&
          ((f.languageDetector = i(this.modules.languageDetector)),
          f.languageDetector.init &&
            f.languageDetector.init(f, this.options.detection, this.options)),
        this.modules.i18nFormat &&
          ((f.i18nFormat = i(this.modules.i18nFormat)),
          f.i18nFormat.init && f.i18nFormat.init(this)),
        (this.translator = new me(this.services, this.options)),
        this.translator.on('*', function (h) {
          for (
            var p = arguments.length, y = new Array(p > 1 ? p - 1 : 0), g = 1;
            g < p;
            g++
          )
            y[g - 1] = arguments[g];
          e.emit(h, ...y);
        }),
        this.modules.external.forEach((h) => {
          h.init && h.init(this);
        });
    }
    if (
      ((this.format = this.options.interpolation.format),
      r || (r = ce),
      this.options.fallbackLng &&
        !this.services.languageDetector &&
        !this.options.lng)
    ) {
      const c = this.services.languageUtils.getFallbackCodes(
        this.options.fallbackLng,
      );
      c.length > 0 && c[0] !== 'dev' && (this.options.lng = c[0]);
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
      ].forEach((c) => {
        this[c] = function () {
          return e.store[c](...arguments);
        };
      }),
      [
        'addResource',
        'addResources',
        'addResourceBundle',
        'removeResourceBundle',
      ].forEach((c) => {
        this[c] = function () {
          return e.store[c](...arguments), e;
        };
      });
    const u = Z(),
      l = () => {
        const c = (d, f) => {
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
            u.resolve(f),
            r(d, f);
        };
        if (
          this.languages &&
          this.options.compatibilityAPI !== 'v1' &&
          !this.isInitialized
        )
          return c(null, this.t.bind(this));
        this.changeLanguage(this.options.lng, c);
      };
    return (
      this.options.resources || !this.options.initImmediate
        ? l()
        : setTimeout(l, 0),
      u
    );
  }
  loadResources(e) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ce;
    const s = typeof e == 'string' ? e : this.language;
    if (
      (typeof e == 'function' && (r = e),
      !this.options.resources || this.options.partialBundledLanguages)
    ) {
      if (
        s &&
        s.toLowerCase() === 'cimode' &&
        (!this.options.preload || this.options.preload.length === 0)
      )
        return r();
      const i = [],
        o = (a) => {
          if (!a || a === 'cimode') return;
          this.services.languageUtils.toResolveHierarchy(a).forEach((l) => {
            l !== 'cimode' && i.indexOf(l) < 0 && i.push(l);
          });
        };
      s
        ? o(s)
        : this.services.languageUtils
            .getFallbackCodes(this.options.fallbackLng)
            .forEach((u) => o(u)),
        this.options.preload && this.options.preload.forEach((a) => o(a)),
        this.services.backendConnector.load(i, this.options.ns, (a) => {
          !a &&
            !this.resolvedLanguage &&
            this.language &&
            this.setResolvedLanguage(this.language),
            r(a);
        });
    } else r(null);
  }
  reloadResources(e, n, r) {
    const s = Z();
    return (
      typeof e == 'function' && ((r = e), (e = void 0)),
      typeof n == 'function' && ((r = n), (n = void 0)),
      e || (e = this.languages),
      n || (n = this.options.ns),
      r || (r = ce),
      this.services.backendConnector.reload(e, n, (i) => {
        s.resolve(), r(i);
      }),
      s
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
      e.type === 'postProcessor' && wt.addPostProcessor(e),
      e.type === 'formatter' && (this.modules.formatter = e),
      e.type === '3rdParty' && this.modules.external.push(e),
      this
    );
  }
  setResolvedLanguage(e) {
    if (!(!e || !this.languages) && !(['cimode', 'dev'].indexOf(e) > -1))
      for (let n = 0; n < this.languages.length; n++) {
        const r = this.languages[n];
        if (
          !(['cimode', 'dev'].indexOf(r) > -1) &&
          this.store.hasLanguageSomeTranslations(r)
        ) {
          this.resolvedLanguage = r;
          break;
        }
      }
  }
  changeLanguage(e, n) {
    var r = this;
    this.isLanguageChangingTo = e;
    const s = Z();
    this.emit('languageChanging', e);
    const i = (u) => {
        (this.language = u),
          (this.languages = this.services.languageUtils.toResolveHierarchy(u)),
          (this.resolvedLanguage = void 0),
          this.setResolvedLanguage(u);
      },
      o = (u, l) => {
        l
          ? (i(l),
            this.translator.changeLanguage(l),
            (this.isLanguageChangingTo = void 0),
            this.emit('languageChanged', l),
            this.logger.log('languageChanged', l))
          : (this.isLanguageChangingTo = void 0),
          s.resolve(function () {
            return r.t(...arguments);
          }),
          n &&
            n(u, function () {
              return r.t(...arguments);
            });
      },
      a = (u) => {
        !e && !u && this.services.languageDetector && (u = []);
        const l =
          typeof u == 'string'
            ? u
            : this.services.languageUtils.getBestMatchFromCodes(u);
        l &&
          (this.language || i(l),
          this.translator.language || this.translator.changeLanguage(l),
          this.services.languageDetector &&
            this.services.languageDetector.cacheUserLanguage &&
            this.services.languageDetector.cacheUserLanguage(l)),
          this.loadResources(l, (c) => {
            o(c, l);
          });
      };
    return (
      !e &&
      this.services.languageDetector &&
      !this.services.languageDetector.async
        ? a(this.services.languageDetector.detect())
        : !e &&
            this.services.languageDetector &&
            this.services.languageDetector.async
          ? this.services.languageDetector.detect.length === 0
            ? this.services.languageDetector.detect().then(a)
            : this.services.languageDetector.detect(a)
          : a(e),
      s
    );
  }
  getFixedT(e, n, r) {
    var s = this;
    const i = function (o, a) {
      let u;
      if (typeof a != 'object') {
        for (
          var l = arguments.length, c = new Array(l > 2 ? l - 2 : 0), d = 2;
          d < l;
          d++
        )
          c[d - 2] = arguments[d];
        u = s.options.overloadTranslationOptionHandler([o, a].concat(c));
      } else u = { ...a };
      (u.lng = u.lng || i.lng),
        (u.lngs = u.lngs || i.lngs),
        (u.ns = u.ns || i.ns),
        u.keyPrefix !== '' && (u.keyPrefix = u.keyPrefix || r || i.keyPrefix);
      const f = s.options.keySeparator || '.';
      let h;
      return (
        u.keyPrefix && Array.isArray(o)
          ? (h = o.map((p) => `${u.keyPrefix}${f}${p}`))
          : (h = u.keyPrefix ? `${u.keyPrefix}${f}${o}` : o),
        s.t(h, u)
      );
    };
    return (
      typeof e == 'string' ? (i.lng = e) : (i.lngs = e),
      (i.ns = n),
      (i.keyPrefix = r),
      i
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
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
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
    const r = n.lng || this.resolvedLanguage || this.languages[0],
      s = this.options ? this.options.fallbackLng : !1,
      i = this.languages[this.languages.length - 1];
    if (r.toLowerCase() === 'cimode') return !0;
    const o = (a, u) => {
      const l = this.services.backendConnector.state[`${a}|${u}`];
      return l === -1 || l === 0 || l === 2;
    };
    if (n.precheck) {
      const a = n.precheck(this, o);
      if (a !== void 0) return a;
    }
    return !!(
      this.hasResourceBundle(r, e) ||
      !this.services.backendConnector.backend ||
      (this.options.resources && !this.options.partialBundledLanguages) ||
      (o(r, e) && (!s || o(i, e)))
    );
  }
  loadNamespaces(e, n) {
    const r = Z();
    return this.options.ns
      ? (typeof e == 'string' && (e = [e]),
        e.forEach((s) => {
          this.options.ns.indexOf(s) < 0 && this.options.ns.push(s);
        }),
        this.loadResources((s) => {
          r.resolve(), n && n(s);
        }),
        r)
      : (n && n(), Promise.resolve());
  }
  loadLanguages(e, n) {
    const r = Z();
    typeof e == 'string' && (e = [e]);
    const s = this.options.preload || [],
      i = e.filter(
        (o) =>
          s.indexOf(o) < 0 && this.services.languageUtils.isSupportedCode(o),
      );
    return i.length
      ? ((this.options.preload = s.concat(i)),
        this.loadResources((o) => {
          r.resolve(), n && n(o);
        }),
        r)
      : (n && n(), Promise.resolve());
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
    const n = [
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
      r = (this.services && this.services.languageUtils) || new nt(it());
    return n.indexOf(r.getLanguagePartFromCode(e)) > -1 ||
      e.toLowerCase().indexOf('-arab') > 1
      ? 'rtl'
      : 'ltr';
  }
  static createInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 ? arguments[1] : void 0;
    return new ne(e, n);
  }
  cloneInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ce;
    const r = e.forkResourceStore;
    r && delete e.forkResourceStore;
    const s = { ...this.options, ...e, isClone: !0 },
      i = new ne(s);
    return (
      (e.debug !== void 0 || e.prefix !== void 0) &&
        (i.logger = i.logger.clone(e)),
      ['store', 'services', 'language'].forEach((a) => {
        i[a] = this[a];
      }),
      (i.services = { ...this.services }),
      (i.services.utils = { hasLoadedNamespace: i.hasLoadedNamespace.bind(i) }),
      r &&
        ((i.store = new et(this.store.data, s)),
        (i.services.resourceStore = i.store)),
      (i.translator = new me(i.services, s)),
      i.translator.on('*', function (a) {
        for (
          var u = arguments.length, l = new Array(u > 1 ? u - 1 : 0), c = 1;
          c < u;
          c++
        )
          l[c - 1] = arguments[c];
        i.emit(a, ...l);
      }),
      i.init(s, n),
      (i.translator.options = s),
      (i.translator.backendConnector.services.utils = {
        hasLoadedNamespace: i.hasLoadedNamespace.bind(i),
      }),
      i
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
const P = ne.createInstance();
P.createInstance = ne.createInstance;
P.createInstance;
P.dir;
P.init;
P.loadResources;
P.reloadResources;
P.use;
P.changeLanguage;
P.getFixedT;
P.t;
P.exists;
P.setDefaultNamespace;
P.hasLoadedNamespace;
P.loadNamespaces;
P.loadLanguages;
const kn = {
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
    },
  },
  ru: {
    translation: {
      Welcome: 'Добро пожаловать',
      WelcomeBack: 'Добро пожаловать обратно',
      En: 'Анг',
      Ru: 'Рус',
      SignUp: 'Авторизоваться',
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
    },
  },
};
function k(t) {
  return `Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `;
}
var Nn = (typeof Symbol == 'function' && Symbol.observable) || '@@observable',
  at = Nn,
  Ee = () => Math.random().toString(36).substring(7).split('').join('.'),
  Ln = {
    INIT: `@@redux/INIT${Ee()}`,
    REPLACE: `@@redux/REPLACE${Ee()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Ee()}`,
  },
  ye = Ln;
function ze(t) {
  if (typeof t != 'object' || t === null) return !1;
  let e = t;
  for (; Object.getPrototypeOf(e) !== null; ) e = Object.getPrototypeOf(e);
  return Object.getPrototypeOf(t) === e || Object.getPrototypeOf(t) === null;
}
function Ct(t, e, n) {
  if (typeof t != 'function') throw new Error(k(2));
  if (
    (typeof e == 'function' && typeof n == 'function') ||
    (typeof n == 'function' && typeof arguments[3] == 'function')
  )
    throw new Error(k(0));
  if (
    (typeof e == 'function' && typeof n > 'u' && ((n = e), (e = void 0)),
    typeof n < 'u')
  ) {
    if (typeof n != 'function') throw new Error(k(1));
    return n(Ct)(t, e);
  }
  let r = t,
    s = e,
    i = new Map(),
    o = i,
    a = 0,
    u = !1;
  function l() {
    o === i &&
      ((o = new Map()),
      i.forEach((g, S) => {
        o.set(S, g);
      }));
  }
  function c() {
    if (u) throw new Error(k(3));
    return s;
  }
  function d(g) {
    if (typeof g != 'function') throw new Error(k(4));
    if (u) throw new Error(k(5));
    let S = !0;
    l();
    const w = a++;
    return (
      o.set(w, g),
      function () {
        if (S) {
          if (u) throw new Error(k(6));
          (S = !1), l(), o.delete(w), (i = null);
        }
      }
    );
  }
  function f(g) {
    if (!ze(g)) throw new Error(k(7));
    if (typeof g.type > 'u') throw new Error(k(8));
    if (typeof g.type != 'string') throw new Error(k(17));
    if (u) throw new Error(k(9));
    try {
      (u = !0), (s = r(s, g));
    } finally {
      u = !1;
    }
    return (
      (i = o).forEach((w) => {
        w();
      }),
      g
    );
  }
  function h(g) {
    if (typeof g != 'function') throw new Error(k(10));
    (r = g), f({ type: ye.REPLACE });
  }
  function p() {
    const g = d;
    return {
      subscribe(S) {
        if (typeof S != 'object' || S === null) throw new Error(k(11));
        function w() {
          const m = S;
          m.next && m.next(c());
        }
        return w(), { unsubscribe: g(w) };
      },
      [at]() {
        return this;
      },
    };
  }
  return (
    f({ type: ye.INIT }),
    { dispatch: f, subscribe: d, getState: c, replaceReducer: h, [at]: p }
  );
}
function En(t) {
  Object.keys(t).forEach((e) => {
    const n = t[e];
    if (typeof n(void 0, { type: ye.INIT }) > 'u') throw new Error(k(12));
    if (typeof n(void 0, { type: ye.PROBE_UNKNOWN_ACTION() }) > 'u')
      throw new Error(k(13));
  });
}
function _n(t) {
  const e = Object.keys(t),
    n = {};
  for (let i = 0; i < e.length; i++) {
    const o = e[i];
    typeof t[o] == 'function' && (n[o] = t[o]);
  }
  const r = Object.keys(n);
  let s;
  try {
    En(n);
  } catch (i) {
    s = i;
  }
  return function (o = {}, a) {
    if (s) throw s;
    let u = !1;
    const l = {};
    for (let c = 0; c < r.length; c++) {
      const d = r[c],
        f = n[d],
        h = o[d],
        p = f(h, a);
      if (typeof p > 'u') throw (a && a.type, new Error(k(14)));
      (l[d] = p), (u = u || p !== h);
    }
    return (u = u || r.length !== Object.keys(o).length), u ? l : o;
  };
}
function be(...t) {
  return t.length === 0
    ? (e) => e
    : t.length === 1
      ? t[0]
      : t.reduce(
          (e, n) =>
            (...r) =>
              e(n(...r)),
        );
}
function jn(...t) {
  return (e) => (n, r) => {
    const s = e(n, r);
    let i = () => {
      throw new Error(k(15));
    };
    const o = { getState: s.getState, dispatch: (u, ...l) => i(u, ...l) },
      a = t.map((u) => u(o));
    return (i = be(...a)(s.dispatch)), { ...s, dispatch: i };
  };
}
function Tn(t) {
  return ze(t) && 'type' in t && typeof t.type == 'string';
}
var Ot = Symbol.for('immer-nothing'),
  ut = Symbol.for('immer-draftable'),
  _ = Symbol.for('immer-state');
function A(t, ...e) {
  throw new Error(
    `[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`,
  );
}
var q = Object.getPrototypeOf;
function M(t) {
  return !!t && !!t[_];
}
function D(t) {
  var e;
  return t
    ? Rt(t) ||
        Array.isArray(t) ||
        !!t[ut] ||
        !!((e = t.constructor) != null && e[ut]) ||
        Oe(t) ||
        Re(t)
    : !1;
}
var An = Object.prototype.constructor.toString();
function Rt(t) {
  if (!t || typeof t != 'object') return !1;
  const e = q(t);
  if (e === null) return !0;
  const n = Object.hasOwnProperty.call(e, 'constructor') && e.constructor;
  return n === Object
    ? !0
    : typeof n == 'function' && Function.toString.call(n) === An;
}
function xe(t, e) {
  Ce(t) === 0
    ? Reflect.ownKeys(t).forEach((n) => {
        e(n, t[n], t);
      })
    : t.forEach((n, r) => e(r, n, t));
}
function Ce(t) {
  const e = t[_];
  return e ? e.type_ : Array.isArray(t) ? 1 : Oe(t) ? 2 : Re(t) ? 3 : 0;
}
function Ae(t, e) {
  return Ce(t) === 2 ? t.has(e) : Object.prototype.hasOwnProperty.call(t, e);
}
function Pt(t, e, n) {
  const r = Ce(t);
  r === 2 ? t.set(e, n) : r === 3 ? t.add(n) : (t[e] = n);
}
function In(t, e) {
  return t === e ? t !== 0 || 1 / t === 1 / e : t !== t && e !== e;
}
function Oe(t) {
  return t instanceof Map;
}
function Re(t) {
  return t instanceof Set;
}
function V(t) {
  return t.copy_ || t.base_;
}
function Ie(t, e) {
  if (Oe(t)) return new Map(t);
  if (Re(t)) return new Set(t);
  if (Array.isArray(t)) return Array.prototype.slice.call(t);
  const n = Rt(t);
  if (e === !0 || (e === 'class_only' && !n)) {
    const r = Object.getOwnPropertyDescriptors(t);
    delete r[_];
    let s = Reflect.ownKeys(r);
    for (let i = 0; i < s.length; i++) {
      const o = s[i],
        a = r[o];
      a.writable === !1 && ((a.writable = !0), (a.configurable = !0)),
        (a.get || a.set) &&
          (r[o] = {
            configurable: !0,
            writable: !0,
            enumerable: a.enumerable,
            value: t[o],
          });
    }
    return Object.create(q(t), r);
  } else {
    const r = q(t);
    if (r !== null && n) return { ...t };
    const s = Object.create(r);
    return Object.assign(s, t);
  }
}
function Ke(t, e = !1) {
  return (
    Pe(t) ||
      M(t) ||
      !D(t) ||
      (Ce(t) > 1 && (t.set = t.add = t.clear = t.delete = $n),
      Object.freeze(t),
      e && Object.entries(t).forEach(([n, r]) => Ke(r, !0))),
    t
  );
}
function $n() {
  A(2);
}
function Pe(t) {
  return Object.isFrozen(t);
}
var Dn = {};
function H(t) {
  const e = Dn[t];
  return e || A(0, t), e;
}
var re;
function kt() {
  return re;
}
function Fn(t, e) {
  return {
    drafts_: [],
    parent_: t,
    immer_: e,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
  };
}
function lt(t, e) {
  e &&
    (H('Patches'),
    (t.patches_ = []),
    (t.inversePatches_ = []),
    (t.patchListener_ = e));
}
function $e(t) {
  De(t), t.drafts_.forEach(Mn), (t.drafts_ = null);
}
function De(t) {
  t === re && (re = t.parent_);
}
function ct(t) {
  return (re = Fn(re, t));
}
function Mn(t) {
  const e = t[_];
  e.type_ === 0 || e.type_ === 1 ? e.revoke_() : (e.revoked_ = !0);
}
function ft(t, e) {
  e.unfinalizedDrafts_ = e.drafts_.length;
  const n = e.drafts_[0];
  return (
    t !== void 0 && t !== n
      ? (n[_].modified_ && ($e(e), A(4)),
        D(t) && ((t = Se(e, t)), e.parent_ || ve(e, t)),
        e.patches_ &&
          H('Patches').generateReplacementPatches_(
            n[_].base_,
            t,
            e.patches_,
            e.inversePatches_,
          ))
      : (t = Se(e, n, [])),
    $e(e),
    e.patches_ && e.patchListener_(e.patches_, e.inversePatches_),
    t !== Ot ? t : void 0
  );
}
function Se(t, e, n) {
  if (Pe(e)) return e;
  const r = e[_];
  if (!r) return xe(e, (s, i) => dt(t, r, e, s, i, n)), e;
  if (r.scope_ !== t) return e;
  if (!r.modified_) return ve(t, r.base_, !0), r.base_;
  if (!r.finalized_) {
    (r.finalized_ = !0), r.scope_.unfinalizedDrafts_--;
    const s = r.copy_;
    let i = s,
      o = !1;
    r.type_ === 3 && ((i = new Set(s)), s.clear(), (o = !0)),
      xe(i, (a, u) => dt(t, r, s, a, u, n, o)),
      ve(t, s, !1),
      n &&
        t.patches_ &&
        H('Patches').generatePatches_(r, n, t.patches_, t.inversePatches_);
  }
  return r.copy_;
}
function dt(t, e, n, r, s, i, o) {
  if (M(s)) {
    const a =
        i && e && e.type_ !== 3 && !Ae(e.assigned_, r) ? i.concat(r) : void 0,
      u = Se(t, s, a);
    if ((Pt(n, r, u), M(u))) t.canAutoFreeze_ = !1;
    else return;
  } else o && n.add(s);
  if (D(s) && !Pe(s)) {
    if (!t.immer_.autoFreeze_ && t.unfinalizedDrafts_ < 1) return;
    Se(t, s),
      (!e || !e.scope_.parent_) &&
        typeof r != 'symbol' &&
        Object.prototype.propertyIsEnumerable.call(n, r) &&
        ve(t, s);
  }
}
function ve(t, e, n = !1) {
  !t.parent_ && t.immer_.autoFreeze_ && t.canAutoFreeze_ && Ke(e, n);
}
function Un(t, e) {
  const n = Array.isArray(t),
    r = {
      type_: n ? 1 : 0,
      scope_: e ? e.scope_ : kt(),
      modified_: !1,
      finalized_: !1,
      assigned_: {},
      parent_: e,
      base_: t,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
    };
  let s = r,
    i = Ve;
  n && ((s = [r]), (i = se));
  const { revoke: o, proxy: a } = Proxy.revocable(s, i);
  return (r.draft_ = a), (r.revoke_ = o), a;
}
var Ve = {
    get(t, e) {
      if (e === _) return t;
      const n = V(t);
      if (!Ae(n, e)) return zn(t, n, e);
      const r = n[e];
      return t.finalized_ || !D(r)
        ? r
        : r === _e(t.base_, e)
          ? (je(t), (t.copy_[e] = Me(r, t)))
          : r;
    },
    has(t, e) {
      return e in V(t);
    },
    ownKeys(t) {
      return Reflect.ownKeys(V(t));
    },
    set(t, e, n) {
      const r = Nt(V(t), e);
      if (r != null && r.set) return r.set.call(t.draft_, n), !0;
      if (!t.modified_) {
        const s = _e(V(t), e),
          i = s == null ? void 0 : s[_];
        if (i && i.base_ === n)
          return (t.copy_[e] = n), (t.assigned_[e] = !1), !0;
        if (In(n, s) && (n !== void 0 || Ae(t.base_, e))) return !0;
        je(t), Fe(t);
      }
      return (
        (t.copy_[e] === n && (n !== void 0 || e in t.copy_)) ||
          (Number.isNaN(n) && Number.isNaN(t.copy_[e])) ||
          ((t.copy_[e] = n), (t.assigned_[e] = !0)),
        !0
      );
    },
    deleteProperty(t, e) {
      return (
        _e(t.base_, e) !== void 0 || e in t.base_
          ? ((t.assigned_[e] = !1), je(t), Fe(t))
          : delete t.assigned_[e],
        t.copy_ && delete t.copy_[e],
        !0
      );
    },
    getOwnPropertyDescriptor(t, e) {
      const n = V(t),
        r = Reflect.getOwnPropertyDescriptor(n, e);
      return (
        r && {
          writable: !0,
          configurable: t.type_ !== 1 || e !== 'length',
          enumerable: r.enumerable,
          value: n[e],
        }
      );
    },
    defineProperty() {
      A(11);
    },
    getPrototypeOf(t) {
      return q(t.base_);
    },
    setPrototypeOf() {
      A(12);
    },
  },
  se = {};
xe(Ve, (t, e) => {
  se[t] = function () {
    return (arguments[0] = arguments[0][0]), e.apply(this, arguments);
  };
});
se.deleteProperty = function (t, e) {
  return se.set.call(this, t, e, void 0);
};
se.set = function (t, e, n) {
  return Ve.set.call(this, t[0], e, n, t[0]);
};
function _e(t, e) {
  const n = t[_];
  return (n ? V(n) : t)[e];
}
function zn(t, e, n) {
  var s;
  const r = Nt(e, n);
  return r
    ? 'value' in r
      ? r.value
      : (s = r.get) == null
        ? void 0
        : s.call(t.draft_)
    : void 0;
}
function Nt(t, e) {
  if (!(e in t)) return;
  let n = q(t);
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, e);
    if (r) return r;
    n = q(n);
  }
}
function Fe(t) {
  t.modified_ || ((t.modified_ = !0), t.parent_ && Fe(t.parent_));
}
function je(t) {
  t.copy_ || (t.copy_ = Ie(t.base_, t.scope_.immer_.useStrictShallowCopy_));
}
var Kn = class {
  constructor(t) {
    (this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.produce = (e, n, r) => {
        if (typeof e == 'function' && typeof n != 'function') {
          const i = n;
          n = e;
          const o = this;
          return function (u = i, ...l) {
            return o.produce(u, (c) => n.call(this, c, ...l));
          };
        }
        typeof n != 'function' && A(6),
          r !== void 0 && typeof r != 'function' && A(7);
        let s;
        if (D(e)) {
          const i = ct(this),
            o = Me(e, void 0);
          let a = !0;
          try {
            (s = n(o)), (a = !1);
          } finally {
            a ? $e(i) : De(i);
          }
          return lt(i, r), ft(s, i);
        } else if (!e || typeof e != 'object') {
          if (
            ((s = n(e)),
            s === void 0 && (s = e),
            s === Ot && (s = void 0),
            this.autoFreeze_ && Ke(s, !0),
            r)
          ) {
            const i = [],
              o = [];
            H('Patches').generateReplacementPatches_(e, s, i, o), r(i, o);
          }
          return s;
        } else A(1, e);
      }),
      (this.produceWithPatches = (e, n) => {
        if (typeof e == 'function')
          return (o, ...a) => this.produceWithPatches(o, (u) => e(u, ...a));
        let r, s;
        return [
          this.produce(e, n, (o, a) => {
            (r = o), (s = a);
          }),
          r,
          s,
        ];
      }),
      typeof (t == null ? void 0 : t.autoFreeze) == 'boolean' &&
        this.setAutoFreeze(t.autoFreeze),
      typeof (t == null ? void 0 : t.useStrictShallowCopy) == 'boolean' &&
        this.setUseStrictShallowCopy(t.useStrictShallowCopy);
  }
  createDraft(t) {
    D(t) || A(8), M(t) && (t = Lt(t));
    const e = ct(this),
      n = Me(t, void 0);
    return (n[_].isManual_ = !0), De(e), n;
  }
  finishDraft(t, e) {
    const n = t && t[_];
    (!n || !n.isManual_) && A(9);
    const { scope_: r } = n;
    return lt(r, e), ft(void 0, r);
  }
  setAutoFreeze(t) {
    this.autoFreeze_ = t;
  }
  setUseStrictShallowCopy(t) {
    this.useStrictShallowCopy_ = t;
  }
  applyPatches(t, e) {
    let n;
    for (n = e.length - 1; n >= 0; n--) {
      const s = e[n];
      if (s.path.length === 0 && s.op === 'replace') {
        t = s.value;
        break;
      }
    }
    n > -1 && (e = e.slice(n + 1));
    const r = H('Patches').applyPatches_;
    return M(t) ? r(t, e) : this.produce(t, (s) => r(s, e));
  }
};
function Me(t, e) {
  const n = Oe(t)
    ? H('MapSet').proxyMap_(t, e)
    : Re(t)
      ? H('MapSet').proxySet_(t, e)
      : Un(t, e);
  return (e ? e.scope_ : kt()).drafts_.push(n), n;
}
function Lt(t) {
  return M(t) || A(10, t), Et(t);
}
function Et(t) {
  if (!D(t) || Pe(t)) return t;
  const e = t[_];
  let n;
  if (e) {
    if (!e.modified_) return e.base_;
    (e.finalized_ = !0), (n = Ie(t, e.scope_.immer_.useStrictShallowCopy_));
  } else n = Ie(t, !0);
  return (
    xe(n, (r, s) => {
      Pt(n, r, Et(s));
    }),
    e && (e.finalized_ = !1),
    n
  );
}
var j = new Kn(),
  _t = j.produce;
j.produceWithPatches.bind(j);
j.setAutoFreeze.bind(j);
j.setUseStrictShallowCopy.bind(j);
j.applyPatches.bind(j);
j.createDraft.bind(j);
j.finishDraft.bind(j);
function Vn(t, e = `expected a function, instead received ${typeof t}`) {
  if (typeof t != 'function') throw new TypeError(e);
}
function Hn(t, e = `expected an object, instead received ${typeof t}`) {
  if (typeof t != 'object') throw new TypeError(e);
}
function Bn(
  t,
  e = 'expected all items to be functions, instead received the following types: ',
) {
  if (!t.every((n) => typeof n == 'function')) {
    const n = t
      .map((r) =>
        typeof r == 'function' ? `function ${r.name || 'unnamed'}()` : typeof r,
      )
      .join(', ');
    throw new TypeError(`${e}[${n}]`);
  }
}
var ht = (t) => (Array.isArray(t) ? t : [t]);
function Wn(t) {
  const e = Array.isArray(t[0]) ? t[0] : t;
  return (
    Bn(
      e,
      'createSelector expects all input-selectors to be functions, but received the following types: ',
    ),
    e
  );
}
function Jn(t, e) {
  const n = [],
    { length: r } = t;
  for (let s = 0; s < r; s++) n.push(t[s].apply(null, e));
  return n;
}
var qn = class {
    constructor(t) {
      this.value = t;
    }
    deref() {
      return this.value;
    }
  },
  Gn = typeof WeakRef < 'u' ? WeakRef : qn,
  Yn = 0,
  pt = 1;
function fe() {
  return { s: Yn, v: void 0, o: null, p: null };
}
function He(t, e = {}) {
  let n = fe();
  const { resultEqualityCheck: r } = e;
  let s,
    i = 0;
  function o() {
    var d;
    let a = n;
    const { length: u } = arguments;
    for (let f = 0, h = u; f < h; f++) {
      const p = arguments[f];
      if (typeof p == 'function' || (typeof p == 'object' && p !== null)) {
        let y = a.o;
        y === null && (a.o = y = new WeakMap());
        const g = y.get(p);
        g === void 0 ? ((a = fe()), y.set(p, a)) : (a = g);
      } else {
        let y = a.p;
        y === null && (a.p = y = new Map());
        const g = y.get(p);
        g === void 0 ? ((a = fe()), y.set(p, a)) : (a = g);
      }
    }
    const l = a;
    let c;
    if (a.s === pt) c = a.v;
    else if (((c = t.apply(null, arguments)), i++, r)) {
      const f =
        ((d = s == null ? void 0 : s.deref) == null ? void 0 : d.call(s)) ?? s;
      f != null && r(f, c) && ((c = f), i !== 0 && i--),
        (s =
          (typeof c == 'object' && c !== null) || typeof c == 'function'
            ? new Gn(c)
            : c);
    }
    return (l.s = pt), (l.v = c), c;
  }
  return (
    (o.clearCache = () => {
      (n = fe()), o.resetResultsCount();
    }),
    (o.resultsCount = () => i),
    (o.resetResultsCount = () => {
      i = 0;
    }),
    o
  );
}
function jt(t, ...e) {
  const n = typeof t == 'function' ? { memoize: t, memoizeOptions: e } : t,
    r = (...s) => {
      let i = 0,
        o = 0,
        a,
        u = {},
        l = s.pop();
      typeof l == 'object' && ((u = l), (l = s.pop())),
        Vn(
          l,
          `createSelector expects an output function after the inputs, but received: [${typeof l}]`,
        );
      const c = { ...n, ...u },
        {
          memoize: d,
          memoizeOptions: f = [],
          argsMemoize: h = He,
          argsMemoizeOptions: p = [],
          devModeChecks: y = {},
        } = c,
        g = ht(f),
        S = ht(p),
        w = Wn(s),
        x = d(
          function () {
            return i++, l.apply(null, arguments);
          },
          ...g,
        ),
        m = h(
          function () {
            o++;
            const O = Jn(w, arguments);
            return (a = x.apply(null, O)), a;
          },
          ...S,
        );
      return Object.assign(m, {
        resultFunc: l,
        memoizedResultFunc: x,
        dependencies: w,
        dependencyRecomputations: () => o,
        resetDependencyRecomputations: () => {
          o = 0;
        },
        lastResult: () => a,
        recomputations: () => i,
        resetRecomputations: () => {
          i = 0;
        },
        memoize: d,
        argsMemoize: h,
      });
    };
  return Object.assign(r, { withTypes: () => r }), r;
}
var Qn = jt(He),
  Xn = Object.assign(
    (t, e = Qn) => {
      Hn(
        t,
        `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof t}`,
      );
      const n = Object.keys(t),
        r = n.map((i) => t[i]);
      return e(r, (...i) => i.reduce((o, a, u) => ((o[n[u]] = a), o), {}));
    },
    { withTypes: () => Xn },
  );
function Tt(t) {
  return ({ dispatch: n, getState: r }) =>
    (s) =>
    (i) =>
      typeof i == 'function' ? i(n, r, t) : s(i);
}
var Zn = Tt(),
  er = Tt,
  tr = (...t) => {
    const e = jt(...t),
      n = Object.assign(
        (...r) => {
          const s = e(...r),
            i = (o, ...a) => s(M(o) ? Lt(o) : o, ...a);
          return Object.assign(i, s), i;
        },
        { withTypes: () => n },
      );
    return n;
  };
tr(He);
var nr =
  typeof window < 'u' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : function () {
        if (arguments.length !== 0)
          return typeof arguments[0] == 'object'
            ? be
            : be.apply(null, arguments);
      };
function G(t, e) {
  function n(...r) {
    if (e) {
      let s = e(...r);
      if (!s) throw new Error(N(0));
      return {
        type: t,
        payload: s.payload,
        ...('meta' in s && { meta: s.meta }),
        ...('error' in s && { error: s.error }),
      };
    }
    return { type: t, payload: r[0] };
  }
  return (
    (n.toString = () => `${t}`),
    (n.type = t),
    (n.match = (r) => Tn(r) && r.type === t),
    n
  );
}
var At = class ee extends Array {
  constructor(...e) {
    super(...e), Object.setPrototypeOf(this, ee.prototype);
  }
  static get [Symbol.species]() {
    return ee;
  }
  concat(...e) {
    return super.concat.apply(this, e);
  }
  prepend(...e) {
    return e.length === 1 && Array.isArray(e[0])
      ? new ee(...e[0].concat(this))
      : new ee(...e.concat(this));
  }
};
function gt(t) {
  return D(t) ? _t(t, () => {}) : t;
}
function mt(t, e, n) {
  if (t.has(e)) {
    let s = t.get(e);
    return n.update && ((s = n.update(s, e, t)), t.set(e, s)), s;
  }
  if (!n.insert) throw new Error(N(10));
  const r = n.insert(e, t);
  return t.set(e, r), r;
}
function rr(t) {
  return typeof t == 'boolean';
}
var sr = () =>
    function (e) {
      const {
        thunk: n = !0,
        immutableCheck: r = !0,
        serializableCheck: s = !0,
        actionCreatorCheck: i = !0,
      } = e ?? {};
      let o = new At();
      return n && (rr(n) ? o.push(Zn) : o.push(er(n.extraArgument))), o;
    },
  ir = 'RTK_autoBatch',
  It = (t) => (e) => {
    setTimeout(e, t);
  },
  or =
    typeof window < 'u' && window.requestAnimationFrame
      ? window.requestAnimationFrame
      : It(10),
  ar =
    (t = { type: 'raf' }) =>
    (e) =>
    (...n) => {
      const r = e(...n);
      let s = !0,
        i = !1,
        o = !1;
      const a = new Set(),
        u =
          t.type === 'tick'
            ? queueMicrotask
            : t.type === 'raf'
              ? or
              : t.type === 'callback'
                ? t.queueNotification
                : It(t.timeout),
        l = () => {
          (o = !1), i && ((i = !1), a.forEach((c) => c()));
        };
      return Object.assign({}, r, {
        subscribe(c) {
          const d = () => s && c(),
            f = r.subscribe(d);
          return (
            a.add(c),
            () => {
              f(), a.delete(c);
            }
          );
        },
        dispatch(c) {
          var d;
          try {
            return (
              (s = !((d = c == null ? void 0 : c.meta) != null && d[ir])),
              (i = !s),
              i && (o || ((o = !0), u(l))),
              r.dispatch(c)
            );
          } finally {
            s = !0;
          }
        },
      });
    },
  ur = (t) =>
    function (n) {
      const { autoBatch: r = !0 } = n ?? {};
      let s = new At(t);
      return r && s.push(ar(typeof r == 'object' ? r : void 0)), s;
    },
  lr = !0;
function cr(t) {
  const e = sr(),
    {
      reducer: n = void 0,
      middleware: r,
      devTools: s = !0,
      preloadedState: i = void 0,
      enhancers: o = void 0,
    } = t || {};
  let a;
  if (typeof n == 'function') a = n;
  else if (ze(n)) a = _n(n);
  else throw new Error(N(1));
  let u;
  typeof r == 'function' ? (u = r(e)) : (u = e());
  let l = be;
  s && (l = nr({ trace: !lr, ...(typeof s == 'object' && s) }));
  const c = jn(...u),
    d = ur(c);
  let f = typeof o == 'function' ? o(d) : d();
  const h = l(...f);
  return Ct(a, i, h);
}
function $t(t) {
  const e = {},
    n = [];
  let r;
  const s = {
    addCase(i, o) {
      const a = typeof i == 'string' ? i : i.type;
      if (!a) throw new Error(N(28));
      if (a in e) throw new Error(N(29));
      return (e[a] = o), s;
    },
    addMatcher(i, o) {
      return n.push({ matcher: i, reducer: o }), s;
    },
    addDefaultCase(i) {
      return (r = i), s;
    },
  };
  return t(s), [e, n, r];
}
function fr(t) {
  return typeof t == 'function';
}
function dr(t, e) {
  let [n, r, s] = $t(e),
    i;
  if (fr(t)) i = () => gt(t());
  else {
    const a = gt(t);
    i = () => a;
  }
  function o(a = i(), u) {
    let l = [
      n[u.type],
      ...r.filter(({ matcher: c }) => c(u)).map(({ reducer: c }) => c),
    ];
    return (
      l.filter((c) => !!c).length === 0 && (l = [s]),
      l.reduce((c, d) => {
        if (d)
          if (M(c)) {
            const h = d(c, u);
            return h === void 0 ? c : h;
          } else {
            if (D(c)) return _t(c, (f) => d(f, u));
            {
              const f = d(c, u);
              if (f === void 0) {
                if (c === null) return c;
                throw new Error(N(9));
              }
              return f;
            }
          }
        return c;
      }, a)
    );
  }
  return (o.getInitialState = i), o;
}
var hr = 'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW',
  pr = (t = 21) => {
    let e = '',
      n = t;
    for (; n--; ) e += hr[(Math.random() * 64) | 0];
    return e;
  },
  gr = Symbol.for('rtk-slice-createasyncthunk');
function mr(t, e) {
  return `${t}/${e}`;
}
function yr({ creators: t } = {}) {
  var n;
  const e = (n = t == null ? void 0 : t.asyncThunk) == null ? void 0 : n[gr];
  return function (s) {
    const { name: i, reducerPath: o = i } = s;
    if (!i) throw new Error(N(11));
    typeof process < 'u';
    const a =
        (typeof s.reducers == 'function' ? s.reducers(Sr()) : s.reducers) || {},
      u = Object.keys(a),
      l = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: [],
      },
      c = {
        addCase(x, m) {
          const v = typeof x == 'string' ? x : x.type;
          if (!v) throw new Error(N(12));
          if (v in l.sliceCaseReducersByType) throw new Error(N(13));
          return (l.sliceCaseReducersByType[v] = m), c;
        },
        addMatcher(x, m) {
          return l.sliceMatchers.push({ matcher: x, reducer: m }), c;
        },
        exposeAction(x, m) {
          return (l.actionCreators[x] = m), c;
        },
        exposeCaseReducer(x, m) {
          return (l.sliceCaseReducersByName[x] = m), c;
        },
      };
    u.forEach((x) => {
      const m = a[x],
        v = {
          reducerName: x,
          type: mr(i, x),
          createNotation: typeof s.reducers == 'function',
        };
      wr(m) ? Or(v, m, c, e) : vr(v, m, c);
    });
    function d() {
      const [x = {}, m = [], v = void 0] =
          typeof s.extraReducers == 'function'
            ? $t(s.extraReducers)
            : [s.extraReducers],
        O = { ...x, ...l.sliceCaseReducersByType };
      return dr(s.initialState, (C) => {
        for (let R in O) C.addCase(R, O[R]);
        for (let R of l.sliceMatchers) C.addMatcher(R.matcher, R.reducer);
        for (let R of m) C.addMatcher(R.matcher, R.reducer);
        v && C.addDefaultCase(v);
      });
    }
    const f = (x) => x,
      h = new Map();
    let p;
    function y(x, m) {
      return p || (p = d()), p(x, m);
    }
    function g() {
      return p || (p = d()), p.getInitialState();
    }
    function S(x, m = !1) {
      function v(C) {
        let R = C[x];
        return typeof R > 'u' && m && (R = g()), R;
      }
      function O(C = f) {
        const R = mt(h, m, { insert: () => new WeakMap() });
        return mt(R, C, {
          insert: () => {
            const oe = {};
            for (const [ae, z] of Object.entries(s.selectors ?? {}))
              oe[ae] = br(z, C, g, m);
            return oe;
          },
        });
      }
      return {
        reducerPath: x,
        getSelectors: O,
        get selectors() {
          return O(v);
        },
        selectSlice: v,
      };
    }
    const w = {
      name: i,
      reducer: y,
      actions: l.actionCreators,
      caseReducers: l.sliceCaseReducersByName,
      getInitialState: g,
      ...S(o),
      injectInto(x, { reducerPath: m, ...v } = {}) {
        const O = m ?? o;
        return (
          x.inject({ reducerPath: O, reducer: y }, v), { ...w, ...S(O, !0) }
        );
      },
    };
    return w;
  };
}
function br(t, e, n, r) {
  function s(i, ...o) {
    let a = e(i);
    return typeof a > 'u' && r && (a = n()), t(a, ...o);
  }
  return (s.unwrapped = t), s;
}
var xr = yr();
function Sr() {
  function t(e, n) {
    return { _reducerDefinitionType: 'asyncThunk', payloadCreator: e, ...n };
  }
  return (
    (t.withTypes = () => t),
    {
      reducer(e) {
        return Object.assign(
          {
            [e.name](...n) {
              return e(...n);
            },
          }[e.name],
          { _reducerDefinitionType: 'reducer' },
        );
      },
      preparedReducer(e, n) {
        return {
          _reducerDefinitionType: 'reducerWithPrepare',
          prepare: e,
          reducer: n,
        };
      },
      asyncThunk: t,
    }
  );
}
function vr({ type: t, reducerName: e, createNotation: n }, r, s) {
  let i, o;
  if ('reducer' in r) {
    if (n && !Cr(r)) throw new Error(N(17));
    (i = r.reducer), (o = r.prepare);
  } else i = r;
  s.addCase(t, i)
    .exposeCaseReducer(e, i)
    .exposeAction(e, o ? G(t, o) : G(t));
}
function wr(t) {
  return t._reducerDefinitionType === 'asyncThunk';
}
function Cr(t) {
  return t._reducerDefinitionType === 'reducerWithPrepare';
}
function Or({ type: t, reducerName: e }, n, r, s) {
  if (!s) throw new Error(N(18));
  const {
      payloadCreator: i,
      fulfilled: o,
      pending: a,
      rejected: u,
      settled: l,
      options: c,
    } = n,
    d = s(t, i, c);
  r.exposeAction(e, d),
    o && r.addCase(d.fulfilled, o),
    a && r.addCase(d.pending, a),
    u && r.addCase(d.rejected, u),
    l && r.addMatcher(d.settled, l),
    r.exposeCaseReducer(e, {
      fulfilled: o || de,
      pending: a || de,
      rejected: u || de,
      settled: l || de,
    });
}
function de() {}
var Rr = (t, e) => {
    if (typeof t != 'function') throw new Error(N(32));
  },
  Be = 'listenerMiddleware',
  Pr = (t) => {
    let { type: e, actionCreator: n, matcher: r, predicate: s, effect: i } = t;
    if (e) s = G(e).match;
    else if (n) (e = n.type), (s = n.match);
    else if (r) s = r;
    else if (!s) throw new Error(N(21));
    return Rr(i), { predicate: s, type: e, effect: i };
  },
  kr = Object.assign(
    (t) => {
      const { type: e, predicate: n, effect: r } = Pr(t);
      return {
        id: pr(),
        effect: r,
        type: e,
        predicate: n,
        pending: new Set(),
        unsubscribe: () => {
          throw new Error(N(22));
        },
      };
    },
    { withTypes: () => kr },
  ),
  Nr = Object.assign(G(`${Be}/add`), { withTypes: () => Nr });
G(`${Be}/removeAll`);
var Lr = Object.assign(G(`${Be}/remove`), { withTypes: () => Lr });
function N(t) {
  return `Minified Redux Toolkit error #${t}; visit https://redux-toolkit.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `;
}
const Er = { language: 'en' },
  Dt = xr({
    name: 'language',
    initialState: Er,
    reducers: {
      setLanguage: (t, e) => {
        t.language = e.payload;
      },
    },
  }),
  { setLanguage: _r } = Dt.actions,
  jr = Dt.reducer,
  Ft = () => cr({ reducer: { language: jr } }),
  Ue = Ft(),
  Tr = Ue.getState().language.language || 'en';
P.use(tn).init({ resources: kn, lng: Tr, interpolation: { escapeValue: !1 } });
Ue.subscribe(() => {
  const t = Ue.getState().language.language;
  t && P.language !== t && P.changeLanguage(t);
});
var Mt = { exports: {} },
  Ut = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ie = F;
function Ar(t, e) {
  return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
}
var Ir = typeof Object.is == 'function' ? Object.is : Ar,
  $r = ie.useSyncExternalStore,
  Dr = ie.useRef,
  Fr = ie.useEffect,
  Mr = ie.useMemo,
  Ur = ie.useDebugValue;
Ut.useSyncExternalStoreWithSelector = function (t, e, n, r, s) {
  var i = Dr(null);
  if (i.current === null) {
    var o = { hasValue: !1, value: null };
    i.current = o;
  } else o = i.current;
  i = Mr(
    function () {
      function u(h) {
        if (!l) {
          if (((l = !0), (c = h), (h = r(h)), s !== void 0 && o.hasValue)) {
            var p = o.value;
            if (s(p, h)) return (d = p);
          }
          return (d = h);
        }
        if (((p = d), Ir(c, h))) return p;
        var y = r(h);
        return s !== void 0 && s(p, y) ? p : ((c = h), (d = y));
      }
      var l = !1,
        c,
        d,
        f = n === void 0 ? null : n;
      return [
        function () {
          return u(e());
        },
        f === null
          ? void 0
          : function () {
              return u(f());
            },
      ];
    },
    [e, n, r, s],
  );
  var a = $r(t, i[0], i[1]);
  return (
    Fr(
      function () {
        (o.hasValue = !0), (o.value = a);
      },
      [a],
    ),
    Ur(a),
    a
  );
};
Mt.exports = Ut;
var zr = Mt.exports,
  E = 'default' in Ge ? Bt : Ge,
  yt = Symbol.for('react-redux-context'),
  bt = typeof globalThis < 'u' ? globalThis : {};
function Kr() {
  if (!E.createContext) return {};
  const t = bt[yt] ?? (bt[yt] = new Map());
  let e = t.get(E.createContext);
  return e || ((e = E.createContext(null)), t.set(E.createContext, e)), e;
}
var U = Kr(),
  Vr = () => {
    throw new Error('uSES not initialized!');
  };
function We(t = U) {
  return function () {
    return E.useContext(t);
  };
}
var zt = We(),
  Kt = Vr,
  Hr = (t) => {
    Kt = t;
  },
  Br = (t, e) => t === e;
function Wr(t = U) {
  const e = t === U ? zt : We(t),
    n = (r, s = {}) => {
      const { equalityFn: i = Br, devModeChecks: o = {} } =
          typeof s == 'function' ? { equalityFn: s } : s,
        {
          store: a,
          subscription: u,
          getServerState: l,
          stabilityCheck: c,
          identityFunctionCheck: d,
        } = e();
      E.useRef(!0);
      const f = E.useCallback(
          {
            [r.name](p) {
              return r(p);
            },
          }[r.name],
          [r, c, o.stabilityCheck],
        ),
        h = Kt(u.addNestedSub, a.getState, l || a.getState, f, i);
      return E.useDebugValue(h), h;
    };
  return Object.assign(n, { withTypes: () => n }), n;
}
var Jr = Wr();
function qr(t) {
  t();
}
function Gr() {
  let t = null,
    e = null;
  return {
    clear() {
      (t = null), (e = null);
    },
    notify() {
      qr(() => {
        let n = t;
        for (; n; ) n.callback(), (n = n.next);
      });
    },
    get() {
      const n = [];
      let r = t;
      for (; r; ) n.push(r), (r = r.next);
      return n;
    },
    subscribe(n) {
      let r = !0;
      const s = (e = { callback: n, next: null, prev: e });
      return (
        s.prev ? (s.prev.next = s) : (t = s),
        function () {
          !r ||
            t === null ||
            ((r = !1),
            s.next ? (s.next.prev = s.prev) : (e = s.prev),
            s.prev ? (s.prev.next = s.next) : (t = s.next));
        }
      );
    },
  };
}
var xt = { notify() {}, get: () => [] };
function Yr(t, e) {
  let n,
    r = xt,
    s = 0,
    i = !1;
  function o(y) {
    c();
    const g = r.subscribe(y);
    let S = !1;
    return () => {
      S || ((S = !0), g(), d());
    };
  }
  function a() {
    r.notify();
  }
  function u() {
    p.onStateChange && p.onStateChange();
  }
  function l() {
    return i;
  }
  function c() {
    s++, n || ((n = t.subscribe(u)), (r = Gr()));
  }
  function d() {
    s--, n && s === 0 && (n(), (n = void 0), r.clear(), (r = xt));
  }
  function f() {
    i || ((i = !0), c());
  }
  function h() {
    i && ((i = !1), d());
  }
  const p = {
    addNestedSub: o,
    notifyNestedSubs: a,
    handleChangeWrapper: u,
    isSubscribed: l,
    trySubscribe: f,
    tryUnsubscribe: h,
    getListeners: () => r,
  };
  return p;
}
var Qr =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  Xr = typeof navigator < 'u' && navigator.product === 'ReactNative',
  Zr = Qr || Xr ? E.useLayoutEffect : E.useEffect;
function es({
  store: t,
  context: e,
  children: n,
  serverState: r,
  stabilityCheck: s = 'once',
  identityFunctionCheck: i = 'once',
}) {
  const o = E.useMemo(() => {
      const l = Yr(t);
      return {
        store: t,
        subscription: l,
        getServerState: r ? () => r : void 0,
        stabilityCheck: s,
        identityFunctionCheck: i,
      };
    }, [t, r, s, i]),
    a = E.useMemo(() => t.getState(), [t]);
  Zr(() => {
    const { subscription: l } = o;
    return (
      (l.onStateChange = l.notifyNestedSubs),
      l.trySubscribe(),
      a !== t.getState() && l.notifyNestedSubs(),
      () => {
        l.tryUnsubscribe(), (l.onStateChange = void 0);
      }
    );
  }, [o, a]);
  const u = e || U;
  return E.createElement(u.Provider, { value: o }, n);
}
var ts = es;
function Vt(t = U) {
  const e = t === U ? zt : We(t),
    n = () => {
      const { store: r } = e();
      return r;
    };
  return Object.assign(n, { withTypes: () => n }), n;
}
var ns = Vt();
function rs(t = U) {
  const e = t === U ? ns : Vt(t),
    n = () => e().dispatch;
  return Object.assign(n, { withTypes: () => n }), n;
}
var ss = rs();
Hr(zr.useSyncExternalStoreWithSelector);
const is = '_toggleControl_1al1l_1',
  os = '_language_1al1l_7',
  as = '_toggle_1al1l_1',
  us = '_indicator_1al1l_21',
  ls = '_indicatorActive_1al1l_33',
  J = {
    toggleControl: is,
    language: os,
    toggle: as,
    indicator: us,
    indicatorActive: ls,
  };
function cs() {
  const t = ss(),
    { i18n: e, t: n } = St(),
    r = Jr((a) => a.language.language),
    [s, i] = F.useState(r),
    o = () => {
      const a = s === 'ru' ? 'en' : 'ru';
      i(a), t(_r(a)), e.changeLanguage(a);
    };
  return b.jsxs('div', {
    className: J.toggleControl,
    children: [
      b.jsx('span', { className: J.language, children: n('En') }),
      b.jsx('button', {
        type: 'button',
        className: J.toggle,
        onClick: o,
        children: b.jsx('div', {
          className: `${J.indicator} ${s === 'ru' ? J.indicatorActive : ''}`,
        }),
      }),
      b.jsx('span', { className: J.language, children: n('Ru') }),
    ],
  });
}
const fs = '_header_3odap_1',
  ds = '_sticky_3odap_13',
  hs = '_navHeader_3odap_22',
  ps = '_logo_3odap_28',
  gs = '_logoActive_3odap_42',
  ms = '_iconSignIn_3odap_53',
  ys = '_iconSignInActive_3odap_67',
  bs = '_iconSignUp_3odap_78',
  xs = '_iconSignUpActive_3odap_92',
  Ss = '_iconLogOut_3odap_103',
  T = {
    header: fs,
    sticky: ds,
    navHeader: hs,
    logo: ps,
    logoActive: gs,
    iconSignIn: ms,
    iconSignInActive: ys,
    iconSignUp: bs,
    iconSignUpActive: xs,
    iconLogOut: Ss,
  };
function vs() {
  const [t, e] = F.useState(!1),
    n = F.useRef(null);
  return (
    F.useEffect(() => {
      const r = new IntersectionObserver(
          ([i]) => {
            e(!i.isIntersecting);
          },
          { threshold: [1] },
        ),
        s = n.current;
      return (
        s && r.observe(s),
        () => {
          s && r.unobserve(s);
        }
      );
    }, []),
    b.jsxs(b.Fragment, {
      children: [
        b.jsx('div', { ref: n }),
        b.jsxs('header', {
          className: `${T.header} ${t ? T.sticky : ''}`,
          children: [
            b.jsx(ke, {
              to: '/',
              className: ({ isActive: r, isPending: s }) =>
                s ? T.logo : r ? T.logoActive : T.logo,
            }),
            b.jsxs('nav', {
              className: T.navHeader,
              children: [
                b.jsx(cs, {}),
                b.jsxs(b.Fragment, {
                  children: [
                    b.jsx(ke, {
                      to: '/registration',
                      className: ({ isActive: r, isPending: s }) =>
                        s
                          ? T.iconSignUp
                          : r
                            ? T.iconSignUpActive
                            : T.iconSignUp,
                    }),
                    b.jsx(ke, {
                      to: '/login',
                      className: ({ isActive: r, isPending: s }) =>
                        s
                          ? T.iconSignIn
                          : r
                            ? T.iconSignInActive
                            : T.iconSignIn,
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
function ws() {
  const e = Yt().some((n) => {
    var r;
    return (r = n.handle) == null ? void 0 : r.hideHeader;
  });
  return b.jsxs(b.Fragment, { children: [!e && b.jsx(vs, {}), b.jsx(Wt, {})] });
}
const Cs = '_footer_16fxo_1',
  Os = '_iconGitHub_16fxo_10',
  Rs = '_teamBlock_16fxo_18',
  Ps = '_footerNav_16fxo_24',
  ks = '_link_16fxo_32',
  Ns = '_logoRS_16fxo_57',
  $ = {
    footer: Cs,
    iconGitHub: Os,
    teamBlock: Rs,
    footerNav: Ps,
    link: ks,
    logoRS: Ns,
  };
function Ls() {
  const { t } = St();
  return b.jsxs('footer', {
    className: $.footer,
    children: [
      b.jsxs('div', {
        className: $.teamBlock,
        children: [
          b.jsx(en, { className: $.iconGitHub }),
          b.jsxs('nav', {
            className: $.footerNav,
            children: [
              ' ',
              b.jsx(le, {
                to: 'https://github.com/rs0048',
                className: $.link,
                children: t('RomanSokolov'),
              }),
              b.jsx(le, {
                to: 'https://github.com/Yana-Dyachok',
                className: $.link,
                children: t('YanaDyachok'),
              }),
              b.jsx(le, {
                to: 'https://github.com/lonelybush',
                className: $.link,
                children: t('NikitaRadevich'),
              }),
            ],
          }),
        ],
      }),
      b.jsx('p', { children: '2024' }),
      b.jsx(le, {
        to: 'https://rs.school/',
        className: $.linkBlock,
        children: b.jsx('div', { className: $.logoRS }),
      }),
    ],
  });
}
function Es({ children: t }) {
  const e = F.useRef();
  return (
    e.current || (e.current = Ft()),
    b.jsx(ts, { store: e.current, children: t })
  );
}
function $s() {
  return b.jsxs('html', {
    lang: 'en',
    children: [
      b.jsxs('head', {
        children: [
          b.jsx('link', {
            rel: 'icon',
            href: '/favicon-react.ico',
            type: 'image/x-icon',
          }),
          b.jsx(Qt, {}),
          b.jsx(Xt, {}),
        ],
      }),
      b.jsx('body', {
        children: b.jsxs(Es, {
          children: [
            b.jsxs(nn, { i18n: P, children: [b.jsx(ws, {}), b.jsx(Ls, {})] }),
            b.jsx(Zt, {}),
          ],
        }),
      }),
    ],
  });
}
export { $s as default };
