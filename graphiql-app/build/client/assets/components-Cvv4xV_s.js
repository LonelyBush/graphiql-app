var Ue = Object.defineProperty;
var ze = (e, t, r) =>
  t in e
    ? Ue(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
    : (e[t] = r);
var C = (e, t, r) => ze(e, typeof t != 'symbol' ? t + '' : t, r);
import {
  p as Be,
  A as Xe,
  D as Ye,
  i as ye,
  f as We,
  g as pe,
  E as J,
  r as c,
  h as Ve,
  m as we,
  u as ve,
  k as Ge,
  l as Ke,
  n as Ze,
  o as Qe,
  q as ge,
  s as qe,
  t as et,
} from './index-wWMGXTih.js';
import { N as tt, L as rt, F as nt } from './index-Dpa_0JzH.js';
var at = -1,
  it = -2,
  ot = -3,
  lt = -4,
  st = -5,
  ut = -6,
  ct = -7,
  dt = 'B',
  ft = 'D',
  Ee = 'E',
  ht = 'M',
  mt = 'N',
  Se = 'P',
  yt = 'R',
  pt = 'S',
  wt = 'Y',
  vt = 'U',
  gt = 'Z',
  Re = class {
    constructor() {
      C(this, 'promise');
      C(this, 'resolve');
      C(this, 'reject');
      this.promise = new Promise((e, t) => {
        (this.resolve = e), (this.reject = t);
      });
    }
  };
function Et() {
  const e = new TextDecoder();
  let t = '';
  return new TransformStream({
    transform(r, n) {
      const a = e.decode(r, { stream: !0 }),
        i = (t + a).split(`
`);
      t = i.pop() || '';
      for (const s of i) n.enqueue(s);
    },
    flush(r) {
      t && r.enqueue(t);
    },
  });
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
var W =
  typeof window < 'u' ? window : typeof globalThis < 'u' ? globalThis : void 0;
function G(e) {
  const { hydrated: t, values: r } = this;
  if (typeof e == 'number') return se.call(this, e);
  if (!Array.isArray(e) || !e.length) throw new SyntaxError();
  const n = r.length;
  for (const a of e) r.push(a);
  return (t.length = r.length), se.call(this, n);
}
function se(e) {
  const { hydrated: t, values: r, deferred: n, plugins: a } = this;
  let i;
  const s = [
    [
      e,
      (o) => {
        i = o;
      },
    ],
  ];
  let l = [];
  for (; s.length > 0; ) {
    const [o, f] = s.pop();
    switch (o) {
      case ct:
        f(void 0);
        continue;
      case st:
        f(null);
        continue;
      case it:
        f(NaN);
        continue;
      case ut:
        f(1 / 0);
        continue;
      case ot:
        f(-1 / 0);
        continue;
      case lt:
        f(-0);
        continue;
    }
    if (t[o]) {
      f(t[o]);
      continue;
    }
    const m = r[o];
    if (!m || typeof m != 'object') {
      (t[o] = m), f(m);
      continue;
    }
    if (Array.isArray(m))
      if (typeof m[0] == 'string') {
        const [d, h, y] = m;
        switch (d) {
          case ft:
            f((t[o] = new Date(h)));
            continue;
          case vt:
            f((t[o] = new URL(h)));
            continue;
          case dt:
            f((t[o] = BigInt(h)));
            continue;
          case yt:
            f((t[o] = new RegExp(h, y)));
            continue;
          case wt:
            f((t[o] = Symbol.for(h)));
            continue;
          case pt:
            const u = new Set();
            t[o] = u;
            for (let w = 1; w < m.length; w++)
              s.push([
                m[w],
                (E) => {
                  u.add(E);
                },
              ]);
            f(u);
            continue;
          case ht:
            const g = new Map();
            t[o] = g;
            for (let w = 1; w < m.length; w += 2) {
              const E = [];
              s.push([
                m[w + 1],
                (p) => {
                  E[1] = p;
                },
              ]),
                s.push([
                  m[w],
                  (p) => {
                    E[0] = p;
                  },
                ]),
                l.push(() => {
                  g.set(E[0], E[1]);
                });
            }
            f(g);
            continue;
          case mt:
            const R = Object.create(null);
            t[o] = R;
            for (const w of Object.keys(h).reverse()) {
              const E = [];
              s.push([
                h[w],
                (p) => {
                  E[1] = p;
                },
              ]),
                s.push([
                  Number(w.slice(1)),
                  (p) => {
                    E[0] = p;
                  },
                ]),
                l.push(() => {
                  R[E[0]] = E[1];
                });
            }
            f(R);
            continue;
          case Se:
            if (t[h]) f((t[o] = t[h]));
            else {
              const w = new Re();
              (n[h] = w), f((t[o] = w.promise));
            }
            continue;
          case Ee:
            const [, v, b] = m;
            let x = b && W && W[b] ? new W[b](v) : new Error(v);
            (t[o] = x), f(x);
            continue;
          case gt:
            f((t[o] = t[h]));
            continue;
          default:
            if (Array.isArray(a)) {
              const w = [],
                E = m.slice(1);
              for (let p = 0; p < E.length; p++) {
                const S = E[p];
                s.push([
                  S,
                  (_) => {
                    w[p] = _;
                  },
                ]);
              }
              l.push(() => {
                for (const p of a) {
                  const S = p(m[0], ...w);
                  if (S) {
                    f((t[o] = S.value));
                    return;
                  }
                }
                throw new SyntaxError();
              });
              continue;
            }
            throw new SyntaxError();
        }
      } else {
        const d = [];
        t[o] = d;
        for (let h = 0; h < m.length; h++) {
          const y = m[h];
          y !== at &&
            s.push([
              y,
              (u) => {
                d[h] = u;
              },
            ]);
        }
        f(d);
        continue;
      }
    else {
      const d = {};
      t[o] = d;
      for (const h of Object.keys(m).reverse()) {
        const y = [];
        s.push([
          m[h],
          (u) => {
            y[1] = u;
          },
        ]),
          s.push([
            Number(h.slice(1)),
            (u) => {
              y[0] = u;
            },
          ]),
          l.push(() => {
            d[y[0]] = y[1];
          });
      }
      f(d);
      continue;
    }
  }
  for (; l.length > 0; ) l.pop()();
  return i;
}
async function St(e, t) {
  const { plugins: r } = t ?? {},
    n = new Re(),
    a = e.pipeThrough(Et()).getReader(),
    i = { values: [], hydrated: [], deferred: {}, plugins: r },
    s = await Rt.call(i, a);
  let l = n.promise;
  return (
    s.done
      ? n.resolve()
      : (l = xt
          .call(i, a)
          .then(n.resolve)
          .catch((o) => {
            for (const f of Object.values(i.deferred)) f.reject(o);
            n.reject(o);
          })),
    { done: l.then(() => a.closed), value: s.value }
  );
}
async function Rt(e) {
  const t = await e.read();
  if (!t.value) throw new SyntaxError();
  let r;
  try {
    r = JSON.parse(t.value);
  } catch {
    throw new SyntaxError();
  }
  return { done: t.done, value: G.call(this, r) };
}
async function xt(e) {
  let t = await e.read();
  for (; !t.done; ) {
    if (!t.value) continue;
    const r = t.value;
    switch (r[0]) {
      case Se: {
        const n = r.indexOf(':'),
          a = Number(r.slice(1, n)),
          i = this.deferred[a];
        if (!i) throw new Error(`Deferred ID ${a} not found in stream`);
        const s = r.slice(n + 1);
        let l;
        try {
          l = JSON.parse(s);
        } catch {
          throw new SyntaxError();
        }
        const o = G.call(this, l);
        i.resolve(o);
        break;
      }
      case Ee: {
        const n = r.indexOf(':'),
          a = Number(r.slice(1, n)),
          i = this.deferred[a];
        if (!i) throw new Error(`Deferred ID ${a} not found in stream`);
        const s = r.slice(n + 1);
        let l;
        try {
          l = JSON.parse(s);
        } catch {
          throw new SyntaxError();
        }
        const o = G.call(this, l);
        i.reject(o);
        break;
      }
      default:
        throw new SyntaxError();
    }
    t = await e.read();
  }
}
/**
 * @remix-run/server-runtime v2.12.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const xe = Symbol('SingleFetchRedirect');
/**
 * @remix-run/react v2.12.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function L() {
  return (
    (L = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    L.apply(this, arguments)
  );
}
/**
 * @remix-run/react v2.12.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function P(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
/**
 * @remix-run/react v2.12.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ async function be(e, t) {
  if (e.id in t) return t[e.id];
  try {
    let r = await import(e.module);
    return (t[e.id] = r), r;
  } catch (r) {
    return (
      console.error(
        `Error loading route module \`${e.module}\`, reloading page...`,
      ),
      console.error(r),
      window.__remixContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
/**
 * @remix-run/react v2.12.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function bt(e, t, r) {
  let n = e
      .map((i) => {
        var s;
        let l = t[i.route.id],
          o = r.routes[i.route.id];
        return [
          o.css ? o.css.map((f) => ({ rel: 'stylesheet', href: f })) : [],
          (l == null || (s = l.links) === null || s === void 0
            ? void 0
            : s.call(l)) || [],
        ];
      })
      .flat(2),
    a = Nt(e, r);
  return Le(n, a);
}
async function _e(e, t) {
  var r, n;
  if ((!e.css && !t.links) || !At()) return;
  let a = [
    ((r = e.css) === null || r === void 0
      ? void 0
      : r.map((l) => ({ rel: 'stylesheet', href: l }))) ?? [],
    ((n = t.links) === null || n === void 0 ? void 0 : n.call(t)) ?? [],
  ].flat(1);
  if (a.length === 0) return;
  let i = [];
  for (let l of a)
    !Q(l) &&
      l.rel === 'stylesheet' &&
      i.push({ ...l, rel: 'preload', as: 'style' });
  let s = i.filter(
    (l) =>
      (!l.media || window.matchMedia(l.media).matches) &&
      !document.querySelector(`link[rel="stylesheet"][href="${l.href}"]`),
  );
  await Promise.all(s.map(_t));
}
async function _t(e) {
  return new Promise((t) => {
    let r = document.createElement('link');
    Object.assign(r, e);
    function n() {
      document.head.contains(r) && document.head.removeChild(r);
    }
    (r.onload = () => {
      n(), t();
    }),
      (r.onerror = () => {
        n(), t();
      }),
      document.head.appendChild(r);
  });
}
function Q(e) {
  return e != null && typeof e.page == 'string';
}
function Lt(e) {
  return e == null
    ? !1
    : e.href == null
      ? e.rel === 'preload' &&
        typeof e.imageSrcSet == 'string' &&
        typeof e.imageSizes == 'string'
      : typeof e.rel == 'string' && typeof e.href == 'string';
}
async function Ot(e, t, r) {
  let n = await Promise.all(
    e.map(async (a) => {
      let i = await be(t.routes[a.route.id], r);
      return i.links ? i.links() : [];
    }),
  );
  return Le(
    n
      .flat(1)
      .filter(Lt)
      .filter((a) => a.rel === 'stylesheet' || a.rel === 'preload')
      .map((a) =>
        a.rel === 'stylesheet'
          ? { ...a, rel: 'prefetch', as: 'style' }
          : { ...a, rel: 'prefetch' },
      ),
  );
}
function ue(e, t, r, n, a, i) {
  let s = Oe(e),
    l = (m, d) => (r[d] ? m.route.id !== r[d].route.id : !0),
    o = (m, d) => {
      var h;
      return (
        r[d].pathname !== m.pathname ||
        (((h = r[d].route.path) === null || h === void 0
          ? void 0
          : h.endsWith('*')) &&
          r[d].params['*'] !== m.params['*'])
      );
    };
  return i === 'data' && a.search !== s.search
    ? t.filter((m, d) => {
        if (!n.routes[m.route.id].hasLoader) return !1;
        if (l(m, d) || o(m, d)) return !0;
        if (m.route.shouldRevalidate) {
          var y;
          let u = m.route.shouldRevalidate({
            currentUrl: new URL(a.pathname + a.search + a.hash, window.origin),
            currentParams:
              ((y = r[0]) === null || y === void 0 ? void 0 : y.params) || {},
            nextUrl: new URL(e, window.origin),
            nextParams: m.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof u == 'boolean') return u;
        }
        return !0;
      })
    : t.filter((m, d) => {
        let h = n.routes[m.route.id];
        return (i === 'assets' || h.hasLoader) && (l(m, d) || o(m, d));
      });
}
function kt(e, t, r) {
  let n = Oe(e);
  return q(
    t
      .filter(
        (a) =>
          r.routes[a.route.id].hasLoader &&
          !r.routes[a.route.id].hasClientLoader,
      )
      .map((a) => {
        let { pathname: i, search: s } = n,
          l = new URLSearchParams(s);
        return l.set('_data', a.route.id), `${i}?${l}`;
      }),
  );
}
function Pt(e, t) {
  return q(
    e
      .map((r) => {
        let n = t.routes[r.route.id],
          a = [n.module];
        return n.imports && (a = a.concat(n.imports)), a;
      })
      .flat(1),
  );
}
function Nt(e, t) {
  return q(
    e
      .map((r) => {
        let n = t.routes[r.route.id],
          a = [n.module];
        return n.imports && (a = a.concat(n.imports)), a;
      })
      .flat(1),
  );
}
function q(e) {
  return [...new Set(e)];
}
function Dt(e) {
  let t = {},
    r = Object.keys(e).sort();
  for (let n of r) t[n] = e[n];
  return t;
}
function Le(e, t) {
  let r = new Set(),
    n = new Set(t);
  return e.reduce((a, i) => {
    if (t && !Q(i) && i.as === 'script' && i.href && n.has(i.href)) return a;
    let l = JSON.stringify(Dt(i));
    return r.has(l) || (r.add(l), a.push({ key: l, link: i })), a;
  }, []);
}
function Oe(e) {
  let t = Be(e);
  return t.search === void 0 && (t.search = ''), t;
}
let $;
function At() {
  if ($ !== void 0) return $;
  let e = document.createElement('link');
  return ($ = e.relList.supports('preload')), (e = null), $;
}
/**
 * @remix-run/react v2.12.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const Tt = {
    '&': '\\u0026',
    '>': '\\u003e',
    '<': '\\u003c',
    '\u2028': '\\u2028',
    '\u2029': '\\u2029',
  },
  jt = /[&><\u2028\u2029]/g;
function F(e) {
  return e.replace(jt, (t) => Tt[t]);
}
function ce(e) {
  return { __html: e };
}
/**
 * @remix-run/react v2.12.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ct(e) {
  return e.headers.get('X-Remix-Catch') != null;
}
function $t(e) {
  return e.headers.get('X-Remix-Error') != null;
}
function Ft(e) {
  return (
    ee(e) &&
    e.status >= 400 &&
    e.headers.get('X-Remix-Error') == null &&
    e.headers.get('X-Remix-Catch') == null &&
    e.headers.get('X-Remix-Response') == null
  );
}
function It(e) {
  return e.headers.get('X-Remix-Redirect') != null;
}
function Ht(e) {
  var t;
  return !!(
    (t = e.headers.get('Content-Type')) !== null &&
    t !== void 0 &&
    t.match(/text\/remix-deferred/)
  );
}
function ee(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.headers == 'object' &&
    typeof e.body < 'u'
  );
}
function Mt(e) {
  let t = e;
  return (
    t &&
    typeof t == 'object' &&
    typeof t.data == 'object' &&
    typeof t.subscribe == 'function' &&
    typeof t.cancel == 'function' &&
    typeof t.resolveData == 'function'
  );
}
async function ke(e, t, r = 0) {
  let n = new URL(e.url);
  n.searchParams.set('_data', t),
    r > 0 && (await new Promise((l) => setTimeout(l, 5 ** r * 10)));
  let a = await z(e),
    i = window.__remixRevalidation,
    s = await fetch(n.href, a).catch((l) => {
      if (
        typeof i == 'number' &&
        i === window.__remixRevalidation &&
        (l == null ? void 0 : l.name) === 'TypeError' &&
        r < 3
      )
        return ke(e, t, r + 1);
      throw l;
    });
  if ($t(s)) {
    let l = await s.json(),
      o = new Error(l.message);
    return (o.stack = l.stack), o;
  }
  if (Ft(s)) {
    let l = await s.text(),
      o = new Error(l);
    return (o.stack = void 0), o;
  }
  return s;
}
async function z(e) {
  let t = { signal: e.signal };
  if (e.method !== 'GET') {
    t.method = e.method;
    let r = e.headers.get('Content-Type');
    r && /\bapplication\/json\b/.test(r)
      ? ((t.headers = { 'Content-Type': r }),
        (t.body = JSON.stringify(await e.json())))
      : r && /\btext\/plain\b/.test(r)
        ? ((t.headers = { 'Content-Type': r }), (t.body = await e.text()))
        : r && /\bapplication\/x-www-form-urlencoded\b/.test(r)
          ? (t.body = new URLSearchParams(await e.text()))
          : (t.body = await e.formData());
  }
  return t;
}
const Jt = '__deferred_promise:';
async function Ut(e) {
  if (!e)
    throw new Error('parseDeferredReadableStream requires stream argument');
  let t,
    r = {};
  try {
    let n = zt(e),
      i = (await n.next()).value;
    if (!i) throw new Error('no critical data');
    let s = JSON.parse(i);
    if (typeof s == 'object' && s !== null)
      for (let [l, o] of Object.entries(s))
        typeof o != 'string' ||
          !o.startsWith(Jt) ||
          ((t = t || {}),
          (t[l] = new Promise((f, m) => {
            r[l] = {
              resolve: (d) => {
                f(d), delete r[l];
              },
              reject: (d) => {
                m(d), delete r[l];
              },
            };
          })));
    return (
      (async () => {
        try {
          for await (let l of n) {
            let [o, ...f] = l.split(':'),
              m = f.join(':'),
              d = JSON.parse(m);
            if (o === 'data')
              for (let [h, y] of Object.entries(d)) r[h] && r[h].resolve(y);
            else if (o === 'error')
              for (let [h, y] of Object.entries(d)) {
                let u = new Error(y.message);
                (u.stack = y.stack), r[h] && r[h].reject(u);
              }
          }
          for (let [l, o] of Object.entries(r))
            o.reject(new Xe(`Deferred ${l} will never be resolved`));
        } catch (l) {
          for (let o of Object.values(r)) o.reject(l);
        }
      })(),
      new Ye({ ...s, ...t })
    );
  } catch (n) {
    for (let a of Object.values(r)) a.reject(n);
    throw n;
  }
}
async function* zt(e) {
  let t = e.getReader(),
    r = [],
    n = [],
    a = !1,
    i = new TextEncoder(),
    s = new TextDecoder(),
    l = async () => {
      if (n.length > 0) return n.shift();
      for (; !a && n.length === 0; ) {
        let f = await t.read();
        if (f.done) {
          a = !0;
          break;
        }
        r.push(f.value);
        try {
          let d = s.decode(de(...r)).split(`

`);
          if (
            (d.length >= 2 &&
              (n.push(...d.slice(0, -1)),
              (r = [
                i.encode(
                  d.slice(-1).join(`

`),
                ),
              ])),
            n.length > 0)
          )
            break;
        } catch {
          continue;
        }
      }
      return (
        n.length > 0 ||
          (r.length > 0 &&
            ((n = s
              .decode(de(...r))
              .split(
                `

`,
              )
              .filter((m) => m)),
            (r = []))),
        n.shift()
      );
    },
    o = await l();
  for (; o; ) yield o, (o = await l());
}
function de(...e) {
  let t = new Uint8Array(e.reduce((n, a) => n + a.length, 0)),
    r = 0;
  for (let n of e) t.set(n, r), (r += n.length);
  return t;
}
/**
 * @remix-run/react v2.12.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function gr(e, t, r) {
  return async ({ request: n, matches: a, fetcherKey: i }) =>
    n.method !== 'GET' ? Bt(n, a) : i ? Yt(n, a) : Xt(e, t, r(), n, a);
}
async function Bt(e, t) {
  let r = t.find((i) => i.shouldLoad);
  P(r, 'No action match found');
  let n,
    a = await r.resolve(
      async (i) =>
        await i(async () => {
          let l = B(e.url),
            o = await z(e),
            { data: f, status: m } = await te(l, o);
          return (n = m), K(f, r.route.id);
        }),
    );
  return ee(a.result) || ye(a.result)
    ? { [r.route.id]: a }
    : { [r.route.id]: { type: a.type, result: We(a.result, n) } };
}
async function Xt(e, t, r, n, a) {
  let i = new Set(),
    s = !1,
    l = a.map(() => fe()),
    o = Promise.all(l.map((u) => u.promise)),
    f = fe(),
    m = Ne(B(n.url)),
    d = await z(n),
    h = {},
    y = Promise.all(
      a.map(async (u, g) =>
        u.resolve(async (R) => {
          if ((l[g].resolve(), !u.shouldLoad)) {
            var v;
            if (!r.state.initialized) return;
            if (
              u.route.id in r.state.loaderData &&
              e.routes[u.route.id].hasLoader &&
              (v = t[u.route.id]) !== null &&
              v !== void 0 &&
              v.shouldRevalidate
            ) {
              s = !0;
              return;
            }
          }
          if (e.routes[u.route.id].hasClientLoader) {
            e.routes[u.route.id].hasLoader && (s = !0);
            try {
              let b = await Pe(R, m, d, u.route.id);
              h[u.route.id] = { type: 'data', result: b };
            } catch (b) {
              h[u.route.id] = { type: 'error', result: b };
            }
            return;
          }
          e.routes[u.route.id].hasLoader && i.add(u.route.id);
          try {
            let b = await R(async () => {
              let x = await f.promise;
              return De(x, u.route.id);
            });
            h[u.route.id] = { type: 'data', result: b };
          } catch (b) {
            h[u.route.id] = { type: 'error', result: b };
          }
        }),
      ),
    );
  if (
    (await o,
    (!r.state.initialized || i.size === 0) && !window.__remixHdrActive)
  )
    f.resolve({});
  else
    try {
      s &&
        i.size > 0 &&
        m.searchParams.set(
          '_routes',
          a
            .filter((g) => i.has(g.route.id))
            .map((g) => g.route.id)
            .join(','),
        );
      let u = await te(m, d);
      f.resolve(u.data);
    } catch (u) {
      f.reject(u);
    }
  return await y, h;
}
async function Yt(e, t) {
  let r = t.find((a) => a.shouldLoad);
  P(r, 'No fetcher match found');
  let n = await r.resolve(async (a) => {
    let i = Ne(B(e.url)),
      s = await z(e);
    return Pe(a, i, s, r.route.id);
  });
  return { [r.route.id]: n };
}
function Pe(e, t, r, n) {
  return e(async () => {
    let a = new URL(t);
    a.searchParams.set('_routes', n);
    let { data: i } = await te(a, r);
    return De(i, n);
  });
}
function Ne(e) {
  let t = e.searchParams.getAll('index');
  e.searchParams.delete('index');
  let r = [];
  for (let n of t) n && r.push(n);
  for (let n of r) e.searchParams.append('index', n);
  return e;
}
function B(e) {
  let t = typeof e == 'string' ? new URL(e, window.location.origin) : e;
  return (
    t.pathname === '/'
      ? (t.pathname = '_root.data')
      : (t.pathname = `${t.pathname.replace(/\/$/, '')}.data`),
    t
  );
}
async function te(e, t) {
  let r = await fetch(e, t);
  P(r.body, 'No response body to decode');
  try {
    let n = await Wt(r.body, window);
    return { status: r.status, data: n.value };
  } catch (n) {
    throw (
      (console.error(n),
      new Error(
        `Unable to decode turbo-stream response from URL: ${e.toString()}`,
      ))
    );
  }
}
function Wt(e, t) {
  return St(e, {
    plugins: [
      (r, ...n) => {
        if (r === 'SanitizedError') {
          let [a, i, s] = n,
            l = Error;
          a && a in t && typeof t[a] == 'function' && (l = t[a]);
          let o = new l(i);
          return (o.stack = s), { value: o };
        }
        if (r === 'ErrorResponse') {
          let [a, i, s] = n;
          return { value: new J(i, s, a) };
        }
        if (r === 'SingleFetchRedirect') return { value: { [xe]: n[0] } };
      },
      (r, n) => {
        if (r === 'SingleFetchFallback') return { value: void 0 };
        if (r === 'SingleFetchClassInstance') return { value: n };
      },
    ],
  });
}
function De(e, t) {
  let r = e[xe];
  return r ? K(r, t) : e[t] !== void 0 ? K(e[t], t) : null;
}
function K(e, t) {
  if ('error' in e) throw e.error;
  if ('redirect' in e) {
    let r = {};
    return (
      e.revalidate && (r['X-Remix-Revalidate'] = 'yes'),
      e.reload && (r['X-Remix-Reload-Document'] = 'yes'),
      e.replace && (r['X-Remix-Replace'] = 'yes'),
      pe(e.redirect, { status: e.status, headers: r })
    );
  } else {
    if ('data' in e) return e.data;
    throw new Error(`No response found for routeId "${t}"`);
  }
}
function fe() {
  let e,
    t,
    r = new Promise((n, a) => {
      (e = async (i) => {
        n(i);
        try {
          await r;
        } catch {}
      }),
        (t = async (i) => {
          a(i);
          try {
            await r;
          } catch {}
        });
    });
  return { promise: r, resolve: e, reject: t };
}
/**
 * @remix-run/react v2.12.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ class Er extends c.Component {
  constructor(t) {
    super(t), (this.state = { error: t.error || null, location: t.location });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, r) {
    return r.location !== t.location
      ? { error: t.error || null, location: t.location }
      : { error: t.error || r.error, location: r.location };
  }
  render() {
    return this.state.error
      ? c.createElement(Ae, { error: this.state.error, isOutsideRemixApp: !0 })
      : this.props.children;
  }
}
function Ae({ error: e, isOutsideRemixApp: t }) {
  console.error(e);
  let r = c.createElement('script', {
    dangerouslySetInnerHTML: {
      __html: `
        console.log(
          "💿 Hey developer 👋. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."
        );
      `,
    },
  });
  if (ye(e))
    return c.createElement(
      Z,
      { title: 'Unhandled Thrown Response!' },
      c.createElement(
        'h1',
        { style: { fontSize: '24px' } },
        e.status,
        ' ',
        e.statusText,
      ),
      r,
    );
  let n;
  if (e instanceof Error) n = e;
  else {
    let a =
      e == null
        ? 'Unknown Error'
        : typeof e == 'object' && 'toString' in e
          ? e.toString()
          : JSON.stringify(e);
    n = new Error(a);
  }
  return c.createElement(
    Z,
    { title: 'Application Error!', isOutsideRemixApp: t },
    c.createElement('h1', { style: { fontSize: '24px' } }, 'Application Error'),
    c.createElement(
      'pre',
      {
        style: {
          padding: '2rem',
          background: 'hsla(10, 50%, 50%, 0.1)',
          color: 'red',
          overflow: 'auto',
        },
      },
      n.stack,
    ),
    r,
  );
}
function Z({ title: e, renderScripts: t, isOutsideRemixApp: r, children: n }) {
  var a;
  let { routeModules: i } = A();
  return (a = i.root) !== null && a !== void 0 && a.Layout && !r
    ? n
    : c.createElement(
        'html',
        { lang: 'en' },
        c.createElement(
          'head',
          null,
          c.createElement('meta', { charSet: 'utf-8' }),
          c.createElement('meta', {
            name: 'viewport',
            content: 'width=device-width,initial-scale=1,viewport-fit=cover',
          }),
          c.createElement('title', null, e),
        ),
        c.createElement(
          'body',
          null,
          c.createElement(
            'main',
            { style: { fontFamily: 'system-ui, sans-serif', padding: '2rem' } },
            n,
            t ? c.createElement(hr, null) : null,
          ),
        ),
      );
}
/**
 * @remix-run/react v2.12.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Vt() {
  return c.createElement(
    Z,
    { title: 'Loading...', renderScripts: !0 },
    c.createElement('script', {
      dangerouslySetInnerHTML: {
        __html: `
              console.log(
                "💿 Hey developer 👋. You can provide a way better UX than this " +
                "when your app is loading JS modules and/or running \`clientLoader\` " +
                "functions. Check out https://remix.run/route/hydrate-fallback " +
                "for more information."
              );
            `,
      },
    }),
  );
}
/**
 * @remix-run/react v2.12.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Te(e) {
  let t = {};
  return (
    Object.values(e).forEach((r) => {
      let n = r.parentId || '';
      t[n] || (t[n] = []), t[n].push(r);
    }),
    t
  );
}
function Gt(e, t, r) {
  let n = je(t),
    a =
      t.HydrateFallback && (!r || e.id === 'root')
        ? t.HydrateFallback
        : e.id === 'root'
          ? Vt
          : void 0,
    i = t.ErrorBoundary
      ? t.ErrorBoundary
      : e.id === 'root'
        ? () => c.createElement(Ae, { error: Ve() })
        : void 0;
  return e.id === 'root' && t.Layout
    ? {
        ...(n
          ? {
              element: c.createElement(
                t.Layout,
                null,
                c.createElement(n, null),
              ),
            }
          : { Component: n }),
        ...(i
          ? {
              errorElement: c.createElement(
                t.Layout,
                null,
                c.createElement(i, null),
              ),
            }
          : { ErrorBoundary: i }),
        ...(a
          ? {
              hydrateFallbackElement: c.createElement(
                t.Layout,
                null,
                c.createElement(a, null),
              ),
            }
          : { HydrateFallback: a }),
      }
    : { Component: n, ErrorBoundary: i, HydrateFallback: a };
}
function Sr(e, t, r, n, a, i) {
  return re(t, r, n, a, i, '', Te(t), e);
}
function I(e, t, r) {
  if (r) {
    let s = `You cannot call ${e === 'action' ? 'serverAction()' : 'serverLoader()'} in SPA Mode (routeId: "${t.id}")`;
    throw (console.error(s), new J(400, 'Bad Request', new Error(s), !0));
  }
  let a = `You are trying to call ${e === 'action' ? 'serverAction()' : 'serverLoader()'} on a route that does not have a server ${e} (routeId: "${t.id}")`;
  if ((e === 'loader' && !t.hasLoader) || (e === 'action' && !t.hasAction))
    throw (console.error(a), new J(400, 'Bad Request', new Error(a), !0));
}
function V(e, t) {
  let r = e === 'clientAction' ? 'a' : 'an',
    n = `Route "${t}" does not have ${r} ${e}, but you are trying to submit to it. To fix this, please add ${r} \`${e}\` function to the route`;
  throw (console.error(n), new J(405, 'Method Not Allowed', new Error(n), !0));
}
function re(e, t, r, n, a, i = '', s = Te(e), l) {
  return (s[i] || []).map((o) => {
    let f = t[o.id];
    async function m(x, w, E) {
      if (typeof E == 'function') return await E();
      let p = await Zt(x, o);
      return w ? Qt(p) : p;
    }
    function d(x, w, E) {
      return o.hasLoader ? m(x, w, E) : Promise.resolve(null);
    }
    function h(x, w, E) {
      if (!o.hasAction) throw V('action', o.id);
      return m(x, w, E);
    }
    async function y(x) {
      let w = t[o.id],
        E = w ? _e(o, w) : Promise.resolve();
      try {
        return x();
      } finally {
        await E;
      }
    }
    let u = { id: o.id, index: o.index, path: o.path };
    if (f) {
      var g, R, v;
      Object.assign(u, {
        ...u,
        ...Gt(o, f, a),
        handle: f.handle,
        shouldRevalidate: l
          ? he(o.id, f.shouldRevalidate, l)
          : f.shouldRevalidate,
      });
      let x =
          r == null || (g = r.loaderData) === null || g === void 0
            ? void 0
            : g[o.id],
        w =
          r == null || (R = r.errors) === null || R === void 0
            ? void 0
            : R[o.id],
        E =
          l == null &&
          (((v = f.clientLoader) === null || v === void 0
            ? void 0
            : v.hydrate) === !0 ||
            !o.hasLoader);
      (u.loader = async ({ request: p, params: S }, _) => {
        try {
          return await y(
            async () => (
              P(f, 'No `routeModule` available for critical-route loader'),
              f.clientLoader
                ? f.clientLoader({
                    request: p,
                    params: S,
                    async serverLoader() {
                      if ((I('loader', o, a), E)) {
                        if (w !== void 0) throw w;
                        return x;
                      }
                      return d(p, !0, _);
                    },
                  })
                : a
                  ? null
                  : d(p, !1, _)
            ),
          );
        } finally {
          E = !1;
        }
      }),
        (u.loader.hydrate = er(o, f, a)),
        (u.action = ({ request: p, params: S }, _) =>
          y(async () => {
            if (
              (P(f, 'No `routeModule` available for critical-route action'),
              !f.clientAction)
            ) {
              if (a) throw V('clientAction', o.id);
              return h(p, !1, _);
            }
            return f.clientAction({
              request: p,
              params: S,
              async serverAction() {
                return I('action', o, a), h(p, !0, _);
              },
            });
          }));
    } else
      o.hasClientLoader ||
        (u.loader = ({ request: x }, w) =>
          y(() => (a ? Promise.resolve(null) : d(x, !1, w)))),
        o.hasClientAction ||
          (u.action = ({ request: x }, w) =>
            y(() => {
              if (a) throw V('clientAction', o.id);
              return h(x, !1, w);
            })),
        (u.lazy = async () => {
          let x = await Kt(o, t),
            w = { ...x };
          if (x.clientLoader) {
            let E = x.clientLoader;
            w.loader = (p, S) =>
              E({
                ...p,
                async serverLoader() {
                  return I('loader', o, a), d(p.request, !0, S);
                },
              });
          }
          if (x.clientAction) {
            let E = x.clientAction;
            w.action = (p, S) =>
              E({
                ...p,
                async serverAction() {
                  return I('action', o, a), h(p.request, !0, S);
                },
              });
          }
          return (
            l && (w.shouldRevalidate = he(o.id, x.shouldRevalidate, l)),
            {
              ...(w.loader ? { loader: w.loader } : {}),
              ...(w.action ? { action: w.action } : {}),
              hasErrorBoundary: w.hasErrorBoundary,
              shouldRevalidate: w.shouldRevalidate,
              handle: w.handle,
              Component: w.Component,
              ErrorBoundary: w.ErrorBoundary,
            }
          );
        });
    let b = re(e, t, r, n, a, o.id, s, l);
    return b.length > 0 && (u.children = b), u;
  });
}
function he(e, t, r) {
  let n = !1;
  return (a) =>
    n ? (t ? t(a) : a.defaultShouldRevalidate) : ((n = !0), r.has(e));
}
async function Kt(e, t) {
  let r = await be(e, t);
  return (
    await _e(e, r),
    {
      Component: je(r),
      ErrorBoundary: r.ErrorBoundary,
      clientAction: r.clientAction,
      clientLoader: r.clientLoader,
      handle: r.handle,
      links: r.links,
      meta: r.meta,
      shouldRevalidate: r.shouldRevalidate,
    }
  );
}
async function Zt(e, t) {
  let r = await ke(e, t.id);
  if (r instanceof Error) throw r;
  if (It(r)) throw qt(r);
  if (Ct(r)) throw r;
  return Ht(r) && r.body ? await Ut(r.body) : r;
}
function Qt(e) {
  if (Mt(e)) return e.data;
  if (ee(e)) {
    let t = e.headers.get('Content-Type');
    return t && /\bapplication\/json\b/.test(t) ? e.json() : e.text();
  }
  return e;
}
function qt(e) {
  let t = parseInt(e.headers.get('X-Remix-Status'), 10) || 302,
    r = e.headers.get('X-Remix-Redirect'),
    n = {},
    a = e.headers.get('X-Remix-Revalidate');
  a && (n['X-Remix-Revalidate'] = a);
  let i = e.headers.get('X-Remix-Reload-Document');
  i && (n['X-Remix-Reload-Document'] = i);
  let s = e.headers.get('X-Remix-Replace');
  return s && (n['X-Remix-Replace'] = s), pe(r, { status: t, headers: n });
}
function je(e) {
  if (e.default == null) return;
  if (!(typeof e.default == 'object' && Object.keys(e.default).length === 0))
    return e.default;
}
function er(e, t, r) {
  return (
    (r && e.id !== 'root') ||
    (t.clientLoader != null &&
      (t.clientLoader.hydrate === !0 || e.hasLoader !== !0))
  );
}
/**
 * @remix-run/react v2.12.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const H = new Set(),
  tr = 1e3,
  U = new Set(),
  rr = 7680;
function ne(e, t) {
  return e.unstable_lazyRouteDiscovery === !0 && !t;
}
function nr(e, t) {
  let r = new Set(t.state.matches.map((s) => s.route.id)),
    n = t.state.location.pathname.split('/').filter(Boolean),
    a = ['/'];
  for (n.pop(); n.length > 0; ) a.push(`/${n.join('/')}`), n.pop();
  a.forEach((s) => {
    let l = we(t.routes, s, t.basename);
    l && l.forEach((o) => r.add(o.route.id));
  });
  let i = [...r].reduce((s, l) => Object.assign(s, { [l]: e.routes[l] }), {});
  return { ...e, routes: i };
}
function Rr(e, t, r, n, a) {
  if (ne(r, n))
    return async ({ path: i, patch: s }) => {
      U.has(i) || (await Ce([i], e, t, r, n, a, s));
    };
}
function xr(e, t, r, n, a) {
  c.useEffect(() => {
    var i;
    if (
      !ne(n, a) ||
      ((i = navigator.connection) === null || i === void 0
        ? void 0
        : i.saveData) === !0
    )
      return;
    function s(d) {
      let h =
        d.tagName === 'FORM'
          ? d.getAttribute('action')
          : d.getAttribute('href');
      if (!h) return;
      let y = new URL(h, window.location.origin);
      U.has(y.pathname) || H.add(y.pathname);
    }
    async function l() {
      let d = Array.from(H.keys()).filter((h) =>
        U.has(h) ? (H.delete(h), !1) : !0,
      );
      if (d.length !== 0)
        try {
          await Ce(d, t, r, n, a, e.basename, e.patchRoutes);
        } catch (h) {
          console.error('Failed to fetch manifest patches', h);
        }
    }
    document.body
      .querySelectorAll('a[data-discover], form[data-discover]')
      .forEach((d) => s(d)),
      l();
    let o = ir(l, 100);
    function f(d) {
      return d.nodeType === Node.ELEMENT_NODE;
    }
    let m = new MutationObserver((d) => {
      let h = new Set();
      d.forEach((y) => {
        [y.target, ...y.addedNodes].forEach((u) => {
          f(u) &&
            (((u.tagName === 'A' && u.getAttribute('data-discover')) ||
              (u.tagName === 'FORM' && u.getAttribute('data-discover'))) &&
              h.add(u),
            u.tagName !== 'A' &&
              u
                .querySelectorAll('a[data-discover], form[data-discover]')
                .forEach((g) => h.add(g)));
        });
      }),
        h.forEach((y) => s(y)),
        o();
    });
    return (
      m.observe(document.documentElement, {
        subtree: !0,
        childList: !0,
        attributes: !0,
        attributeFilter: ['data-discover', 'href', 'action'],
      }),
      () => m.disconnect()
    );
  }, [n, a, t, r, e]);
}
async function Ce(e, t, r, n, a, i, s) {
  let l = `${i ?? '/'}/__manifest`.replace(/\/+/g, '/'),
    o = new URL(l, window.location.origin);
  if (
    (e.sort().forEach((u) => o.searchParams.append('p', u)),
    o.searchParams.set('version', t.version),
    o.toString().length > rr)
  ) {
    H.clear();
    return;
  }
  let f = await fetch(o);
  if (f.ok) {
    if (f.status >= 400) throw new Error(await f.text());
  } else throw new Error(`${f.status} ${f.statusText}`);
  let m = await f.json(),
    d = new Set(Object.keys(t.routes)),
    h = Object.values(m).reduce(
      (u, g) => (d.has(g.id) ? u : Object.assign(u, { [g.id]: g })),
      {},
    );
  Object.assign(t.routes, h), e.forEach((u) => ar(u, U));
  let y = new Set();
  Object.values(h).forEach((u) => {
    (!u.parentId || !h[u.parentId]) && y.add(u.parentId);
  }),
    y.forEach((u) => s(u || null, re(h, r, null, n, a, u)));
}
function ar(e, t) {
  if (t.size >= tr) {
    let r = t.values().next().value;
    t.delete(r);
  }
  t.add(e);
}
function ir(e, t) {
  let r;
  return (...n) => {
    window.clearTimeout(r), (r = window.setTimeout(() => e(...n), t));
  };
}
function $e() {
  let e = c.useContext(Ze);
  return (
    P(
      e,
      'You must render this element inside a <DataRouterContext.Provider> element',
    ),
    e
  );
}
function X() {
  let e = c.useContext(Qe);
  return (
    P(
      e,
      'You must render this element inside a <DataRouterStateContext.Provider> element',
    ),
    e
  );
}
const Fe = c.createContext(void 0);
Fe.displayName = 'Remix';
function A() {
  let e = c.useContext(Fe);
  return P(e, 'You must render this element inside a <Remix> element'), e;
}
function Ie(e, t) {
  let [r, n] = c.useState(!1),
    [a, i] = c.useState(!1),
    {
      onFocus: s,
      onBlur: l,
      onMouseEnter: o,
      onMouseLeave: f,
      onTouchStart: m,
    } = t,
    d = c.useRef(null);
  c.useEffect(() => {
    if ((e === 'render' && i(!0), e === 'viewport')) {
      let u = (R) => {
          R.forEach((v) => {
            i(v.isIntersecting);
          });
        },
        g = new IntersectionObserver(u, { threshold: 0.5 });
      return (
        d.current && g.observe(d.current),
        () => {
          g.disconnect();
        }
      );
    }
  }, [e]);
  let h = () => {
      e === 'intent' && n(!0);
    },
    y = () => {
      e === 'intent' && (n(!1), i(!1));
    };
  return (
    c.useEffect(() => {
      if (r) {
        let u = setTimeout(() => {
          i(!0);
        }, 100);
        return () => {
          clearTimeout(u);
        };
      }
    }, [r]),
    [
      a,
      d,
      {
        onFocus: j(s, h),
        onBlur: j(l, y),
        onMouseEnter: j(o, h),
        onMouseLeave: j(f, y),
        onTouchStart: j(m, h),
      },
    ]
  );
}
const ae = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function ie(e, t, r) {
  return e === 'render' && !t && !r ? 'true' : void 0;
}
let or = c.forwardRef(
  ({ to: e, prefetch: t = 'none', discover: r = 'render', ...n }, a) => {
    let i = typeof e == 'string' && ae.test(e),
      s = ge(e),
      [l, o, f] = Ie(t, n);
    return c.createElement(
      c.Fragment,
      null,
      c.createElement(
        tt,
        L({}, n, f, {
          ref: He(a, o),
          to: e,
          'data-discover': ie(r, i, n.reloadDocument),
        }),
      ),
      l && !i ? c.createElement(le, { page: s }) : null,
    );
  },
);
or.displayName = 'NavLink';
let lr = c.forwardRef(
  ({ to: e, prefetch: t = 'none', discover: r = 'render', ...n }, a) => {
    let i = typeof e == 'string' && ae.test(e),
      s = ge(e),
      [l, o, f] = Ie(t, n);
    return c.createElement(
      c.Fragment,
      null,
      c.createElement(
        rt,
        L({}, n, f, {
          ref: He(a, o),
          to: e,
          'data-discover': ie(r, i, n.reloadDocument),
        }),
      ),
      l && !i ? c.createElement(le, { page: s }) : null,
    );
  },
);
lr.displayName = 'Link';
let sr = c.forwardRef(({ discover: e = 'render', ...t }, r) => {
  let n = typeof t.action == 'string' && ae.test(t.action);
  return c.createElement(
    nt,
    L({}, t, { ref: r, 'data-discover': ie(e, n, t.reloadDocument) }),
  );
});
sr.displayName = 'Form';
function j(e, t) {
  return (r) => {
    e && e(r), r.defaultPrevented || t(r);
  };
}
function oe(e, t, r) {
  if (r && !M) return [e[0]];
  if (t) {
    let n = e.findIndex((a) => t[a.route.id] !== void 0);
    return e.slice(0, n + 1);
  }
  return e;
}
function br() {
  let { isSpaMode: e, manifest: t, routeModules: r, criticalCss: n } = A(),
    { errors: a, matches: i } = X(),
    s = oe(i, a, e),
    l = c.useMemo(() => bt(s, r, t), [s, r, t]);
  return c.createElement(
    c.Fragment,
    null,
    n
      ? c.createElement('style', { dangerouslySetInnerHTML: { __html: n } })
      : null,
    l.map(({ key: o, link: f }) =>
      Q(f)
        ? c.createElement(le, L({ key: o }, f))
        : c.createElement('link', L({ key: o }, f)),
    ),
  );
}
function le({ page: e, ...t }) {
  let { router: r } = $e(),
    n = c.useMemo(() => we(r.routes, e, r.basename), [r.routes, e, r.basename]);
  return n
    ? c.createElement(cr, L({ page: e, matches: n }, t))
    : (console.warn(`Tried to prefetch ${e} but no routes matched.`), null);
}
function ur(e) {
  let { manifest: t, routeModules: r } = A(),
    [n, a] = c.useState([]);
  return (
    c.useEffect(() => {
      let i = !1;
      return (
        Ot(e, t, r).then((s) => {
          i || a(s);
        }),
        () => {
          i = !0;
        }
      );
    }, [e, t, r]),
    n
  );
}
function cr({ page: e, matches: t, ...r }) {
  let n = ve(),
    { future: a, manifest: i, routeModules: s } = A(),
    { loaderData: l, matches: o } = X(),
    f = c.useMemo(() => ue(e, t, o, i, n, 'data'), [e, t, o, i, n]),
    m = c.useMemo(() => {
      if (!a.unstable_singleFetch) return kt(e, f, i);
      if (e === n.pathname + n.search + n.hash) return [];
      let u = new Set(),
        g = !1;
      if (
        (t.forEach((v) => {
          var b;
          i.routes[v.route.id].hasLoader &&
            ((!f.some((x) => x.route.id === v.route.id) &&
              v.route.id in l &&
              (b = s[v.route.id]) !== null &&
              b !== void 0 &&
              b.shouldRevalidate) ||
            i.routes[v.route.id].hasClientLoader
              ? (g = !0)
              : u.add(v.route.id));
        }),
        u.size === 0)
      )
        return [];
      let R = B(e);
      return (
        g &&
          u.size > 0 &&
          R.searchParams.set(
            '_routes',
            t
              .filter((v) => u.has(v.route.id))
              .map((v) => v.route.id)
              .join(','),
          ),
        [R.pathname + R.search]
      );
    }, [a.unstable_singleFetch, l, n, i, f, t, e, s]),
    d = c.useMemo(() => ue(e, t, o, i, n, 'assets'), [e, t, o, i, n]),
    h = c.useMemo(() => Pt(d, i), [d, i]),
    y = ur(d);
  return c.createElement(
    c.Fragment,
    null,
    m.map((u) =>
      c.createElement(
        'link',
        L({ key: u, rel: 'prefetch', as: 'fetch', href: u }, r),
      ),
    ),
    h.map((u) =>
      c.createElement('link', L({ key: u, rel: 'modulepreload', href: u }, r)),
    ),
    y.map(({ key: u, link: g }) => c.createElement('link', L({ key: u }, g))),
  );
}
function _r() {
  let { isSpaMode: e, routeModules: t } = A(),
    { errors: r, matches: n, loaderData: a } = X(),
    i = ve(),
    s = oe(n, r, e),
    l = null;
  r && (l = r[s[s.length - 1].route.id]);
  let o = [],
    f = null,
    m = [];
  for (let d = 0; d < s.length; d++) {
    let h = s[d],
      y = h.route.id,
      u = a[y],
      g = h.params,
      R = t[y],
      v = [],
      b = {
        id: y,
        data: u,
        meta: [],
        params: h.params,
        pathname: h.pathname,
        handle: h.route.handle,
        error: l,
      };
    if (
      ((m[d] = b),
      R != null && R.meta
        ? (v =
            typeof R.meta == 'function'
              ? R.meta({
                  data: u,
                  params: g,
                  location: i,
                  matches: m,
                  error: l,
                })
              : Array.isArray(R.meta)
                ? [...R.meta]
                : R.meta)
        : f && (v = [...f]),
      (v = v || []),
      !Array.isArray(v))
    )
      throw new Error(
        'The route at ' +
          h.route.path +
          ` returns an invalid value. All route meta functions must return an array of meta objects.

To reference the meta function API, see https://remix.run/route/meta`,
      );
    (b.meta = v), (m[d] = b), (o = [...v]), (f = o);
  }
  return c.createElement(
    c.Fragment,
    null,
    o.flat().map((d) => {
      if (!d) return null;
      if ('tagName' in d) {
        let { tagName: h, ...y } = d;
        if (!dr(h))
          return (
            console.warn(
              `A meta object uses an invalid tagName: ${h}. Expected either 'link' or 'meta'`,
            ),
            null
          );
        let u = h;
        return c.createElement(u, L({ key: JSON.stringify(y) }, y));
      }
      if ('title' in d)
        return c.createElement('title', { key: 'title' }, String(d.title));
      if (
        ('charset' in d &&
          (d.charSet ?? (d.charSet = d.charset), delete d.charset),
        'charSet' in d && d.charSet != null)
      )
        return typeof d.charSet == 'string'
          ? c.createElement('meta', { key: 'charSet', charSet: d.charSet })
          : null;
      if ('script:ld+json' in d)
        try {
          let h = JSON.stringify(d['script:ld+json']);
          return c.createElement('script', {
            key: `script:ld+json:${h}`,
            type: 'application/ld+json',
            dangerouslySetInnerHTML: { __html: h },
          });
        } catch {
          return null;
        }
      return c.createElement('meta', L({ key: JSON.stringify(d) }, d));
    }),
  );
}
function dr(e) {
  return typeof e == 'string' && /^(meta|link)$/.test(e);
}
function fr(e) {
  return c.createElement(qe, e);
}
let M = !1;
function hr(e) {
  let {
      manifest: t,
      serverHandoffString: r,
      abortDelay: n,
      serializeError: a,
      isSpaMode: i,
      future: s,
      renderMeta: l,
    } = A(),
    { router: o, static: f, staticContext: m } = $e(),
    { matches: d } = X(),
    h = ne(s, i);
  l && (l.didRenderScripts = !0);
  let y = oe(d, null, i);
  c.useEffect(() => {
    M = !0;
  }, []);
  let u = (p, S) => {
      let _;
      return (
        a && S instanceof Error ? (_ = a(S)) : (_ = S),
        `${JSON.stringify(p)}:__remixContext.p(!1, ${F(JSON.stringify(_))})`
      );
    },
    g = (p, S, _) => {
      let O;
      try {
        O = JSON.stringify(_);
      } catch (T) {
        return u(S, T);
      }
      return `${JSON.stringify(S)}:__remixContext.p(${F(O)})`;
    },
    R = (p, S, _) => {
      let O;
      return (
        a && _ instanceof Error ? (O = a(_)) : (O = _),
        `__remixContext.r(${JSON.stringify(p)}, ${JSON.stringify(S)}, !1, ${F(JSON.stringify(O))})`
      );
    },
    v = (p, S, _) => {
      let O;
      try {
        O = JSON.stringify(_);
      } catch (T) {
        return R(p, S, T);
      }
      return `__remixContext.r(${JSON.stringify(p)}, ${JSON.stringify(S)}, ${F(O)})`;
    },
    b = [],
    x = c.useMemo(() => {
      var p;
      let S = s.unstable_singleFetch
          ? 'window.__remixContext.stream = new ReadableStream({start(controller){window.__remixContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());'
          : '',
        _ = m ? `window.__remixContext = ${r};${S}` : ' ',
        O = s.unstable_singleFetch || m == null ? void 0 : m.activeDeferreds;
      _ += O
        ? [
            '__remixContext.p = function(v,e,p,x) {',
            "  if (typeof e !== 'undefined') {",
            `    x=new Error("Unexpected Server Error");
    x.stack=undefined;`,
            '    p=Promise.reject(x);',
            '  } else {',
            '    p=Promise.resolve(v);',
            '  }',
            '  return p;',
            '};',
            '__remixContext.n = function(i,k) {',
            '  __remixContext.t = __remixContext.t || {};',
            '  __remixContext.t[i] = __remixContext.t[i] || {};',
            '  let p = new Promise((r, e) => {__remixContext.t[i][k] = {r:(v)=>{r(v);},e:(v)=>{e(v);}};});',
            typeof n == 'number'
              ? `setTimeout(() => {if(typeof p._error !== "undefined" || typeof p._data !== "undefined"){return;} __remixContext.t[i][k].e(new Error("Server timeout."))}, ${n});`
              : '',
            '  return p;',
            '};',
            '__remixContext.r = function(i,k,v,e,p,x) {',
            '  p = __remixContext.t[i][k];',
            "  if (typeof e !== 'undefined') {",
            `    x=new Error("Unexpected Server Error");
    x.stack=undefined;`,
            '    p.e(x);',
            '  } else {',
            '    p.r(v);',
            '  }',
            '};',
          ].join(`
`) +
          Object.entries(O).map(([k, N]) => {
            let Me = new Set(N.pendingKeys),
              Je = N.deferredKeys.map((D) => {
                if (Me.has(D))
                  return (
                    b.push(
                      c.createElement(me, {
                        key: `${k} | ${D}`,
                        deferredData: N,
                        routeId: k,
                        dataKey: D,
                        scriptProps: e,
                        serializeData: v,
                        serializeError: R,
                      }),
                    ),
                    `${JSON.stringify(D)}:__remixContext.n(${JSON.stringify(k)}, ${JSON.stringify(D)})`
                  );
                {
                  let Y = N.data[D];
                  return typeof Y._error < 'u'
                    ? u(D, Y._error)
                    : g(k, D, Y._data);
                }
              }).join(`,
`);
            return `Object.assign(__remixContext.state.loaderData[${JSON.stringify(k)}], {${Je}});`;
          }).join(`
`) +
          (b.length > 0 ? `__remixContext.a=${b.length};` : '')
        : '';
      let T = f
        ? `${(p = t.hmr) !== null && p !== void 0 && p.runtime ? `import ${JSON.stringify(t.hmr.runtime)};` : ''}${h ? '' : `import ${JSON.stringify(t.url)}`};
${y.map(
  (k, N) =>
    `import * as route${N} from ${JSON.stringify(t.routes[k.route.id].module)};`,
).join(`
`)}
${h ? `window.__remixManifest = ${JSON.stringify(nr(t, o), null, 2)};` : ''}
window.__remixRouteModules = {${y.map((k, N) => `${JSON.stringify(k.route.id)}:route${N}`).join(',')}};

import(${JSON.stringify(t.entry.module)});`
        : ' ';
      return c.createElement(
        c.Fragment,
        null,
        c.createElement(
          'script',
          L({}, e, {
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: ce(_),
            type: void 0,
          }),
        ),
        c.createElement(
          'script',
          L({}, e, {
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: ce(T),
            type: 'module',
            async: !0,
          }),
        ),
      );
    }, []);
  if (!f && typeof __remixContext == 'object' && __remixContext.a)
    for (let p = 0; p < __remixContext.a; p++)
      b.push(
        c.createElement(me, {
          key: p,
          scriptProps: e,
          serializeData: v,
          serializeError: R,
        }),
      );
  let w = y
      .map((p) => {
        let S = t.routes[p.route.id];
        return (S.imports || []).concat([S.module]);
      })
      .flat(1),
    E = M ? [] : t.entry.imports.concat(w);
  return M
    ? null
    : c.createElement(
        c.Fragment,
        null,
        h
          ? null
          : c.createElement('link', {
              rel: 'modulepreload',
              href: t.url,
              crossOrigin: e.crossOrigin,
            }),
        c.createElement('link', {
          rel: 'modulepreload',
          href: t.entry.module,
          crossOrigin: e.crossOrigin,
        }),
        yr(E).map((p) =>
          c.createElement('link', {
            key: p,
            rel: 'modulepreload',
            href: p,
            crossOrigin: e.crossOrigin,
          }),
        ),
        x,
        b,
      );
}
function me({
  dataKey: e,
  deferredData: t,
  routeId: r,
  scriptProps: n,
  serializeData: a,
  serializeError: i,
}) {
  return (
    typeof document > 'u' &&
      t &&
      e &&
      r &&
      P(
        t.pendingKeys.includes(e),
        `Deferred data for route ${r} with key ${e} was not pending but tried to render a script for it.`,
      ),
    c.createElement(
      c.Suspense,
      {
        fallback:
          typeof document > 'u' && t && e && r
            ? null
            : c.createElement(
                'script',
                L({}, n, {
                  async: !0,
                  suppressHydrationWarning: !0,
                  dangerouslySetInnerHTML: { __html: ' ' },
                }),
              ),
      },
      typeof document > 'u' && t && e && r
        ? c.createElement(fr, {
            resolve: t.data[e],
            errorElement: c.createElement(mr, {
              dataKey: e,
              routeId: r,
              scriptProps: n,
              serializeError: i,
            }),
            children: (s) =>
              c.createElement(
                'script',
                L({}, n, {
                  async: !0,
                  suppressHydrationWarning: !0,
                  dangerouslySetInnerHTML: { __html: a(r, e, s) },
                }),
              ),
          })
        : c.createElement(
            'script',
            L({}, n, {
              async: !0,
              suppressHydrationWarning: !0,
              dangerouslySetInnerHTML: { __html: ' ' },
            }),
          ),
    )
  );
}
function mr({ dataKey: e, routeId: t, scriptProps: r, serializeError: n }) {
  let a = Ge();
  return c.createElement(
    'script',
    L({}, r, {
      suppressHydrationWarning: !0,
      dangerouslySetInnerHTML: { __html: n(t, e, a) },
    }),
  );
}
function yr(e) {
  return [...new Set(e)];
}
function Lr() {
  return Ke();
}
function Or() {
  return et();
}
function He(...e) {
  return (t) => {
    e.forEach((r) => {
      typeof r == 'function' ? r(t) : r != null && (r.current = t);
    });
  };
}
export {
  sr as F,
  lr as L,
  _r as M,
  or as N,
  Fe as R,
  hr as S,
  re as a,
  Rr as b,
  Sr as c,
  Wt as d,
  Er as e,
  Lr as f,
  gr as g,
  br as h,
  P as i,
  Or as j,
  er as s,
  xr as u,
};
