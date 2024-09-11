import { r as L, f as C, R as T } from './index-DeHznlkS.js';
var R = { exports: {} },
  k = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var y = L;
function U(e, r) {
  return (e === r && (e !== 0 || 1 / e === 1 / r)) || (e !== e && r !== r);
}
var j = typeof Object.is == 'function' ? Object.is : U,
  W = y.useSyncExternalStore,
  H = y.useRef,
  P = y.useEffect,
  z = y.useMemo,
  O = y.useDebugValue;
k.useSyncExternalStoreWithSelector = function (e, r, t, n, u) {
  var o = H(null);
  if (o.current === null) {
    var s = { hasValue: !1, value: null };
    o.current = s;
  } else s = o.current;
  o = z(
    function () {
      function d(c) {
        if (!i) {
          if (((i = !0), (v = c), (c = n(c)), u !== void 0 && s.hasValue)) {
            var f = s.value;
            if (u(f, c)) return (S = f);
          }
          return (S = c);
        }
        if (((f = S), j(v, c))) return f;
        var x = n(c);
        return u !== void 0 && u(f, x) ? f : ((v = c), (S = x));
      }
      var i = !1,
        v,
        S,
        p = t === void 0 ? null : t;
      return [
        function () {
          return d(r());
        },
        p === null
          ? void 0
          : function () {
              return d(p());
            },
      ];
    },
    [r, t, n, u],
  );
  var l = W(e, o[0], o[1]);
  return (
    P(
      function () {
        (s.hasValue = !0), (s.value = l);
      },
      [l],
    ),
    O(l),
    l
  );
};
R.exports = k;
var _ = R.exports,
  a = 'default' in C ? T : C,
  m = Symbol.for('react-redux-context'),
  w = typeof globalThis < 'u' ? globalThis : {};
function q() {
  if (!a.createContext) return {};
  const e = w[m] ?? (w[m] = new Map());
  let r = e.get(a.createContext);
  return r || ((r = a.createContext(null)), e.set(a.createContext, r)), r;
}
var b = q(),
  I = () => {
    throw new Error('uSES not initialized!');
  };
function g(e = b) {
  return function () {
    return a.useContext(e);
  };
}
var N = g(),
  V = I,
  A = (e) => {
    V = e;
  },
  B = (e, r) => e === r;
function K(e = b) {
  const r = e === b ? N : g(e),
    t = (n, u = {}) => {
      const { equalityFn: o = B, devModeChecks: s = {} } =
          typeof u == 'function' ? { equalityFn: u } : u,
        {
          store: l,
          subscription: d,
          getServerState: i,
          stabilityCheck: v,
          identityFunctionCheck: S,
        } = r();
      a.useRef(!0);
      const p = a.useCallback(
          {
            [n.name](f) {
              return n(f);
            },
          }[n.name],
          [n, v, s.stabilityCheck],
        ),
        c = V(d.addNestedSub, l.getState, i || l.getState, p, o);
      return a.useDebugValue(c), c;
    };
  return Object.assign(t, { withTypes: () => t }), t;
}
var ne = K();
function $(e) {
  e();
}
function F() {
  let e = null,
    r = null;
  return {
    clear() {
      (e = null), (r = null);
    },
    notify() {
      $(() => {
        let t = e;
        for (; t; ) t.callback(), (t = t.next);
      });
    },
    get() {
      const t = [];
      let n = e;
      for (; n; ) t.push(n), (n = n.next);
      return t;
    },
    subscribe(t) {
      let n = !0;
      const u = (r = { callback: t, next: null, prev: r });
      return (
        u.prev ? (u.prev.next = u) : (e = u),
        function () {
          !n ||
            e === null ||
            ((n = !1),
            u.next ? (u.next.prev = u.prev) : (r = u.prev),
            u.prev ? (u.prev.next = u.next) : (e = u.next));
        }
      );
    },
  };
}
var E = { notify() {}, get: () => [] };
function G(e, r) {
  let t,
    n = E,
    u = 0,
    o = !1;
  function s(x) {
    v();
    const D = n.subscribe(x);
    let h = !1;
    return () => {
      h || ((h = !0), D(), S());
    };
  }
  function l() {
    n.notify();
  }
  function d() {
    f.onStateChange && f.onStateChange();
  }
  function i() {
    return o;
  }
  function v() {
    u++, t || ((t = e.subscribe(d)), (n = F()));
  }
  function S() {
    u--, t && u === 0 && (t(), (t = void 0), n.clear(), (n = E));
  }
  function p() {
    o || ((o = !0), v());
  }
  function c() {
    o && ((o = !1), S());
  }
  const f = {
    addNestedSub: s,
    notifyNestedSubs: l,
    handleChangeWrapper: d,
    isSubscribed: i,
    trySubscribe: p,
    tryUnsubscribe: c,
    getListeners: () => n,
  };
  return f;
}
var J =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  Q = typeof navigator < 'u' && navigator.product === 'ReactNative',
  X = J || Q ? a.useLayoutEffect : a.useEffect;
function Y({
  store: e,
  context: r,
  children: t,
  serverState: n,
  stabilityCheck: u = 'once',
  identityFunctionCheck: o = 'once',
}) {
  const s = a.useMemo(() => {
      const i = G(e);
      return {
        store: e,
        subscription: i,
        getServerState: n ? () => n : void 0,
        stabilityCheck: u,
        identityFunctionCheck: o,
      };
    }, [e, n, u, o]),
    l = a.useMemo(() => e.getState(), [e]);
  X(() => {
    const { subscription: i } = s;
    return (
      (i.onStateChange = i.notifyNestedSubs),
      i.trySubscribe(),
      l !== e.getState() && i.notifyNestedSubs(),
      () => {
        i.tryUnsubscribe(), (i.onStateChange = void 0);
      }
    );
  }, [s, l]);
  const d = r || b;
  return a.createElement(d.Provider, { value: s }, t);
}
var re = Y;
function M(e = b) {
  const r = e === b ? N : g(e),
    t = () => {
      const { store: n } = r();
      return n;
    };
  return Object.assign(t, { withTypes: () => t }), t;
}
var Z = M();
function ee(e = b) {
  const r = e === b ? Z : M(e),
    t = () => r().dispatch;
  return Object.assign(t, { withTypes: () => t }), t;
}
var ue = ee();
A(_.useSyncExternalStoreWithSelector);
export { re as P, ne as a, ue as u };
