function yn(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r];
    if (typeof n != 'string' && !Array.isArray(n)) {
      for (const a in n)
        if (a !== 'default' && !(a in e)) {
          const l = Object.getOwnPropertyDescriptor(n, a);
          l &&
            Object.defineProperty(
              e,
              a,
              l.get ? l : { enumerable: !0, get: () => n[a] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  );
}
function gn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var Dr = { exports: {} },
  wt = {},
  _r = { exports: {} },
  j = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ze = Symbol.for('react.element'),
  bn = Symbol.for('react.portal'),
  wn = Symbol.for('react.fragment'),
  En = Symbol.for('react.strict_mode'),
  Rn = Symbol.for('react.profiler'),
  xn = Symbol.for('react.provider'),
  Sn = Symbol.for('react.context'),
  Pn = Symbol.for('react.forward_ref'),
  Dn = Symbol.for('react.suspense'),
  _n = Symbol.for('react.memo'),
  Cn = Symbol.for('react.lazy'),
  or = Symbol.iterator;
function Mn(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (or && e[or]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var Cr = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Mr = Object.assign,
  Lr = {};
function Be(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = Lr),
    (this.updater = r || Cr);
}
Be.prototype.isReactComponent = {};
Be.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
Be.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function jr() {}
jr.prototype = Be.prototype;
function Ut(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = Lr),
    (this.updater = r || Cr);
}
var Tt = (Ut.prototype = new jr());
Tt.constructor = Ut;
Mr(Tt, Be.prototype);
Tt.isPureReactComponent = !0;
var ir = Array.isArray,
  Or = Object.prototype.hasOwnProperty,
  It = { current: null },
  Fr = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ur(e, t, r) {
  var n,
    a = {},
    l = null,
    i = null;
  if (t != null)
    for (n in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (l = '' + t.key),
    t))
      Or.call(t, n) && !Fr.hasOwnProperty(n) && (a[n] = t[n]);
  var c = arguments.length - 2;
  if (c === 1) a.children = r;
  else if (1 < c) {
    for (var u = Array(c), v = 0; v < c; v++) u[v] = arguments[v + 2];
    a.children = u;
  }
  if (e && e.defaultProps)
    for (n in ((c = e.defaultProps), c)) a[n] === void 0 && (a[n] = c[n]);
  return {
    $$typeof: Ze,
    type: e,
    key: l,
    ref: i,
    props: a,
    _owner: It.current,
  };
}
function Ln(e, t) {
  return {
    $$typeof: Ze,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function At(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Ze;
}
function jn(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (r) {
      return t[r];
    })
  );
}
var lr = /\/+/g;
function Dt(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? jn('' + e.key)
    : t.toString(36);
}
function vt(e, t, r, n, a) {
  var l = typeof e;
  (l === 'undefined' || l === 'boolean') && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (l) {
      case 'string':
      case 'number':
        i = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case Ze:
          case bn:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (a = a(i)),
      (e = n === '' ? '.' + Dt(i, 0) : n),
      ir(a)
        ? ((r = ''),
          e != null && (r = e.replace(lr, '$&/') + '/'),
          vt(a, t, r, '', function (v) {
            return v;
          }))
        : a != null &&
          (At(a) &&
            (a = Ln(
              a,
              r +
                (!a.key || (i && i.key === a.key)
                  ? ''
                  : ('' + a.key).replace(lr, '$&/') + '/') +
                e,
            )),
          t.push(a)),
      1
    );
  if (((i = 0), (n = n === '' ? '.' : n + ':'), ir(e)))
    for (var c = 0; c < e.length; c++) {
      l = e[c];
      var u = n + Dt(l, c);
      i += vt(l, t, r, u, a);
    }
  else if (((u = Mn(e)), typeof u == 'function'))
    for (e = u.call(e), c = 0; !(l = e.next()).done; )
      (l = l.value), (u = n + Dt(l, c++)), (i += vt(l, t, r, u, a));
  else if (l === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.',
      ))
    );
  return i;
}
function pt(e, t, r) {
  if (e == null) return e;
  var n = [],
    a = 0;
  return (
    vt(e, n, '', '', function (l) {
      return t.call(r, l, a++);
    }),
    n
  );
}
function On(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (r) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = r));
        },
        function (r) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = r));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ee = { current: null },
  mt = { transition: null },
  Fn = {
    ReactCurrentDispatcher: ee,
    ReactCurrentBatchConfig: mt,
    ReactCurrentOwner: It,
  };
function Tr() {
  throw Error('act(...) is not supported in production builds of React.');
}
j.Children = {
  map: pt,
  forEach: function (e, t, r) {
    pt(
      e,
      function () {
        t.apply(this, arguments);
      },
      r,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      pt(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      pt(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!At(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.',
      );
    return e;
  },
};
j.Component = Be;
j.Fragment = wn;
j.Profiler = Rn;
j.PureComponent = Ut;
j.StrictMode = En;
j.Suspense = Dn;
j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Fn;
j.act = Tr;
j.cloneElement = function (e, t, r) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.',
    );
  var n = Mr({}, e.props),
    a = e.key,
    l = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (i = It.current)),
      t.key !== void 0 && (a = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var c = e.type.defaultProps;
    for (u in t)
      Or.call(t, u) &&
        !Fr.hasOwnProperty(u) &&
        (n[u] = t[u] === void 0 && c !== void 0 ? c[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) n.children = r;
  else if (1 < u) {
    c = Array(u);
    for (var v = 0; v < u; v++) c[v] = arguments[v + 2];
    n.children = c;
  }
  return { $$typeof: Ze, type: e.type, key: a, ref: l, props: n, _owner: i };
};
j.createContext = function (e) {
  return (
    (e = {
      $$typeof: Sn,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: xn, _context: e }),
    (e.Consumer = e)
  );
};
j.createElement = Ur;
j.createFactory = function (e) {
  var t = Ur.bind(null, e);
  return (t.type = e), t;
};
j.createRef = function () {
  return { current: null };
};
j.forwardRef = function (e) {
  return { $$typeof: Pn, render: e };
};
j.isValidElement = At;
j.lazy = function (e) {
  return { $$typeof: Cn, _payload: { _status: -1, _result: e }, _init: On };
};
j.memo = function (e, t) {
  return { $$typeof: _n, type: e, compare: t === void 0 ? null : t };
};
j.startTransition = function (e) {
  var t = mt.transition;
  mt.transition = {};
  try {
    e();
  } finally {
    mt.transition = t;
  }
};
j.unstable_act = Tr;
j.useCallback = function (e, t) {
  return ee.current.useCallback(e, t);
};
j.useContext = function (e) {
  return ee.current.useContext(e);
};
j.useDebugValue = function () {};
j.useDeferredValue = function (e) {
  return ee.current.useDeferredValue(e);
};
j.useEffect = function (e, t) {
  return ee.current.useEffect(e, t);
};
j.useId = function () {
  return ee.current.useId();
};
j.useImperativeHandle = function (e, t, r) {
  return ee.current.useImperativeHandle(e, t, r);
};
j.useInsertionEffect = function (e, t) {
  return ee.current.useInsertionEffect(e, t);
};
j.useLayoutEffect = function (e, t) {
  return ee.current.useLayoutEffect(e, t);
};
j.useMemo = function (e, t) {
  return ee.current.useMemo(e, t);
};
j.useReducer = function (e, t, r) {
  return ee.current.useReducer(e, t, r);
};
j.useRef = function (e) {
  return ee.current.useRef(e);
};
j.useState = function (e) {
  return ee.current.useState(e);
};
j.useSyncExternalStore = function (e, t, r) {
  return ee.current.useSyncExternalStore(e, t, r);
};
j.useTransition = function () {
  return ee.current.useTransition();
};
j.version = '18.3.1';
_r.exports = j;
var w = _r.exports;
const Un = gn(w),
  to = yn({ __proto__: null, default: Un }, [w]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Tn = w,
  In = Symbol.for('react.element'),
  An = Symbol.for('react.fragment'),
  Nn = Object.prototype.hasOwnProperty,
  kn = Tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Bn = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ir(e, t, r) {
  var n,
    a = {},
    l = null,
    i = null;
  r !== void 0 && (l = '' + r),
    t.key !== void 0 && (l = '' + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (n in t) Nn.call(t, n) && !Bn.hasOwnProperty(n) && (a[n] = t[n]);
  if (e && e.defaultProps)
    for (n in ((t = e.defaultProps), t)) a[n] === void 0 && (a[n] = t[n]);
  return {
    $$typeof: In,
    type: e,
    key: l,
    ref: i,
    props: a,
    _owner: kn.current,
  };
}
wt.Fragment = An;
wt.jsx = Ir;
wt.jsxs = Ir;
Dr.exports = wt;
var ro = Dr.exports;
/**
 * @remix-run/router v1.19.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function H() {
  return (
    (H = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    H.apply(this, arguments)
  );
}
var Y;
(function (e) {
  (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(Y || (Y = {}));
const sr = 'popstate';
function no(e) {
  e === void 0 && (e = {});
  function t(n, a) {
    let { pathname: l, search: i, hash: c } = n.location;
    return Qe(
      '',
      { pathname: l, search: i, hash: c },
      (a.state && a.state.usr) || null,
      (a.state && a.state.key) || 'default',
    );
  }
  function r(n, a) {
    return typeof a == 'string' ? a : et(a);
  }
  return $n(t, r, null, e);
}
function L(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function Ne(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function zn() {
  return Math.random().toString(36).substr(2, 8);
}
function ur(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Qe(e, t, r, n) {
  return (
    r === void 0 && (r = null),
    H(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? we(t) : t,
      { state: r, key: (t && t.key) || n || zn() },
    )
  );
}
function et(e) {
  let { pathname: t = '/', search: r = '', hash: n = '' } = e;
  return (
    r && r !== '?' && (t += r.charAt(0) === '?' ? r : '?' + r),
    n && n !== '#' && (t += n.charAt(0) === '#' ? n : '#' + n),
    t
  );
}
function we(e) {
  let t = {};
  if (e) {
    let r = e.indexOf('#');
    r >= 0 && ((t.hash = e.substr(r)), (e = e.substr(0, r)));
    let n = e.indexOf('?');
    n >= 0 && ((t.search = e.substr(n)), (e = e.substr(0, n))),
      e && (t.pathname = e);
  }
  return t;
}
function $n(e, t, r, n) {
  n === void 0 && (n = {});
  let { window: a = document.defaultView, v5Compat: l = !1 } = n,
    i = a.history,
    c = Y.Pop,
    u = null,
    v = m();
  v == null && ((v = 0), i.replaceState(H({}, i.state, { idx: v }), ''));
  function m() {
    return (i.state || { idx: null }).idx;
  }
  function f() {
    c = Y.Pop;
    let P = m(),
      k = P == null ? null : P - v;
    (v = P), u && u({ action: c, location: E.location, delta: k });
  }
  function y(P, k) {
    c = Y.Push;
    let B = Qe(E.location, P, k);
    v = m() + 1;
    let Q = ur(B, v),
      K = E.createHref(B);
    try {
      i.pushState(Q, '', K);
    } catch (oe) {
      if (oe instanceof DOMException && oe.name === 'DataCloneError') throw oe;
      a.location.assign(K);
    }
    l && u && u({ action: c, location: E.location, delta: 1 });
  }
  function O(P, k) {
    c = Y.Replace;
    let B = Qe(E.location, P, k);
    v = m();
    let Q = ur(B, v),
      K = E.createHref(B);
    i.replaceState(Q, '', K),
      l && u && u({ action: c, location: E.location, delta: 0 });
  }
  function D(P) {
    let k = a.location.origin !== 'null' ? a.location.origin : a.location.href,
      B = typeof P == 'string' ? P : et(P);
    return (
      (B = B.replace(/ $/, '%20')),
      L(
        k,
        'No window.location.(origin|href) available to create URL for href: ' +
          B,
      ),
      new URL(B, k)
    );
  }
  let E = {
    get action() {
      return c;
    },
    get location() {
      return e(a, i);
    },
    listen(P) {
      if (u) throw new Error('A history only accepts one active listener');
      return (
        a.addEventListener(sr, f),
        (u = P),
        () => {
          a.removeEventListener(sr, f), (u = null);
        }
      );
    },
    createHref(P) {
      return t(a, P);
    },
    createURL: D,
    encodeLocation(P) {
      let k = D(P);
      return { pathname: k.pathname, search: k.search, hash: k.hash };
    },
    push: y,
    replace: O,
    go(P) {
      return i.go(P);
    },
  };
  return E;
}
var I;
(function (e) {
  (e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error');
})(I || (I = {}));
const Hn = new Set([
  'lazy',
  'caseSensitive',
  'path',
  'id',
  'index',
  'children',
]);
function Wn(e) {
  return e.index === !0;
}
function qe(e, t, r, n) {
  return (
    r === void 0 && (r = []),
    n === void 0 && (n = {}),
    e.map((a, l) => {
      let i = [...r, String(l)],
        c = typeof a.id == 'string' ? a.id : i.join('-');
      if (
        (L(
          a.index !== !0 || !a.children,
          'Cannot specify children on an index route',
        ),
        L(
          !n[c],
          'Found a route id collision on id "' +
            c +
            `".  Route id's must be globally unique within Data Router usages`,
        ),
        Wn(a))
      ) {
        let u = H({}, a, t(a), { id: c });
        return (n[c] = u), u;
      } else {
        let u = H({}, a, t(a), { id: c, children: void 0 });
        return (
          (n[c] = u), a.children && (u.children = qe(a.children, t, i, n)), u
        );
      }
    })
  );
}
function De(e, t, r) {
  return r === void 0 && (r = '/'), yt(e, t, r, !1);
}
function yt(e, t, r, n) {
  let a = typeof t == 'string' ? we(t) : t,
    l = tt(a.pathname || '/', r);
  if (l == null) return null;
  let i = Nr(e);
  Kn(i);
  let c = null;
  for (let u = 0; c == null && u < i.length; ++u) {
    let v = ra(l);
    c = ea(i[u], v, n);
  }
  return c;
}
function Ar(e, t) {
  let { route: r, pathname: n, params: a } = e;
  return { id: r.id, pathname: n, params: a, data: t[r.id], handle: r.handle };
}
function Nr(e, t, r, n) {
  t === void 0 && (t = []), r === void 0 && (r = []), n === void 0 && (n = '');
  let a = (l, i, c) => {
    let u = {
      relativePath: c === void 0 ? l.path || '' : c,
      caseSensitive: l.caseSensitive === !0,
      childrenIndex: i,
      route: l,
    };
    u.relativePath.startsWith('/') &&
      (L(
        u.relativePath.startsWith(n),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + n + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.',
      ),
      (u.relativePath = u.relativePath.slice(n.length)));
    let v = ve([n, u.relativePath]),
      m = r.concat(u);
    l.children &&
      l.children.length > 0 &&
      (L(
        l.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + v + '".'),
      ),
      Nr(l.children, t, m, v)),
      !(l.path == null && !l.index) &&
        t.push({ path: v, score: qn(v, l.index), routesMeta: m });
  };
  return (
    e.forEach((l, i) => {
      var c;
      if (l.path === '' || !((c = l.path) != null && c.includes('?'))) a(l, i);
      else for (let u of kr(l.path)) a(l, i, u);
    }),
    t
  );
}
function kr(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [r, ...n] = t,
    a = r.endsWith('?'),
    l = r.replace(/\?$/, '');
  if (n.length === 0) return a ? [l, ''] : [l];
  let i = kr(n.join('/')),
    c = [];
  return (
    c.push(...i.map((u) => (u === '' ? l : [l, u].join('/')))),
    a && c.push(...i),
    c.map((u) => (e.startsWith('/') && u === '' ? '/' : u))
  );
}
function Kn(e) {
  e.sort((t, r) =>
    t.score !== r.score
      ? r.score - t.score
      : Zn(
          t.routesMeta.map((n) => n.childrenIndex),
          r.routesMeta.map((n) => n.childrenIndex),
        ),
  );
}
const Vn = /^:[\w-]+$/,
  Jn = 3,
  Yn = 2,
  Gn = 1,
  Xn = 10,
  Qn = -2,
  cr = (e) => e === '*';
function qn(e, t) {
  let r = e.split('/'),
    n = r.length;
  return (
    r.some(cr) && (n += Qn),
    t && (n += Yn),
    r
      .filter((a) => !cr(a))
      .reduce((a, l) => a + (Vn.test(l) ? Jn : l === '' ? Gn : Xn), n)
  );
}
function Zn(e, t) {
  return e.length === t.length && e.slice(0, -1).every((n, a) => n === t[a])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function ea(e, t, r) {
  r === void 0 && (r = !1);
  let { routesMeta: n } = e,
    a = {},
    l = '/',
    i = [];
  for (let c = 0; c < n.length; ++c) {
    let u = n[c],
      v = c === n.length - 1,
      m = l === '/' ? t : t.slice(l.length) || '/',
      f = dr(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: v },
        m,
      ),
      y = u.route;
    if (
      (!f &&
        v &&
        r &&
        !n[n.length - 1].route.index &&
        (f = dr(
          { path: u.relativePath, caseSensitive: u.caseSensitive, end: !1 },
          m,
        )),
      !f)
    )
      return null;
    Object.assign(a, f.params),
      i.push({
        params: a,
        pathname: ve([l, f.pathname]),
        pathnameBase: oa(ve([l, f.pathnameBase])),
        route: y,
      }),
      f.pathnameBase !== '/' && (l = ve([l, f.pathnameBase]));
  }
  return i;
}
function dr(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [r, n] = ta(e.path, e.caseSensitive, e.end),
    a = t.match(r);
  if (!a) return null;
  let l = a[0],
    i = l.replace(/(.)\/+$/, '$1'),
    c = a.slice(1);
  return {
    params: n.reduce((v, m, f) => {
      let { paramName: y, isOptional: O } = m;
      if (y === '*') {
        let E = c[f] || '';
        i = l.slice(0, l.length - E.length).replace(/(.)\/+$/, '$1');
      }
      const D = c[f];
      return (
        O && !D ? (v[y] = void 0) : (v[y] = (D || '').replace(/%2F/g, '/')), v
      );
    }, {}),
    pathname: l,
    pathnameBase: i,
    pattern: e,
  };
}
function ta(e, t, r) {
  t === void 0 && (t = !1),
    r === void 0 && (r = !0),
    Ne(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".'),
    );
  let n = [],
    a =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (i, c, u) => (
            n.push({ paramName: c, isOptional: u != null }),
            u ? '/?([^\\/]+)?' : '/([^\\/]+)'
          ),
        );
  return (
    e.endsWith('*')
      ? (n.push({ paramName: '*' }),
        (a += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : r
        ? (a += '\\/*$')
        : e !== '' && e !== '/' && (a += '(?:(?=\\/|$))'),
    [new RegExp(a, t ? void 0 : 'i'), n]
  );
}
function ra(e) {
  try {
    return e
      .split('/')
      .map((t) => decodeURIComponent(t).replace(/\//g, '%2F'))
      .join('/');
  } catch (t) {
    return (
      Ne(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').'),
      ),
      e
    );
  }
}
function tt(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let r = t.endsWith('/') ? t.length - 1 : t.length,
    n = e.charAt(r);
  return n && n !== '/' ? null : e.slice(r) || '/';
}
function na(e, t) {
  t === void 0 && (t = '/');
  let {
    pathname: r,
    search: n = '',
    hash: a = '',
  } = typeof e == 'string' ? we(e) : e;
  return {
    pathname: r ? (r.startsWith('/') ? r : aa(r, t)) : t,
    search: ia(n),
    hash: la(a),
  };
}
function aa(e, t) {
  let r = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((a) => {
      a === '..' ? r.length > 1 && r.pop() : a !== '.' && r.push(a);
    }),
    r.length > 1 ? r.join('/') : '/'
  );
}
function _t(e, t, r, n) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' +
      t +
      '` field [' +
      JSON.stringify(n) +
      '].  Please separate it out to the ') +
    ('`to.' + r + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Br(e) {
  return e.filter(
    (t, r) => r === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function Nt(e, t) {
  let r = Br(e);
  return t
    ? r.map((n, a) => (a === r.length - 1 ? n.pathname : n.pathnameBase))
    : r.map((n) => n.pathnameBase);
}
function kt(e, t, r, n) {
  n === void 0 && (n = !1);
  let a;
  typeof e == 'string'
    ? (a = we(e))
    : ((a = H({}, e)),
      L(
        !a.pathname || !a.pathname.includes('?'),
        _t('?', 'pathname', 'search', a),
      ),
      L(
        !a.pathname || !a.pathname.includes('#'),
        _t('#', 'pathname', 'hash', a),
      ),
      L(!a.search || !a.search.includes('#'), _t('#', 'search', 'hash', a)));
  let l = e === '' || a.pathname === '',
    i = l ? '/' : a.pathname,
    c;
  if (i == null) c = r;
  else {
    let f = t.length - 1;
    if (!n && i.startsWith('..')) {
      let y = i.split('/');
      for (; y[0] === '..'; ) y.shift(), (f -= 1);
      a.pathname = y.join('/');
    }
    c = f >= 0 ? t[f] : '/';
  }
  let u = na(a, c),
    v = i && i !== '/' && i.endsWith('/'),
    m = (l || i === '.') && r.endsWith('/');
  return !u.pathname.endsWith('/') && (v || m) && (u.pathname += '/'), u;
}
const ve = (e) => e.join('/').replace(/\/\/+/g, '/'),
  oa = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  ia = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  la = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
class sa {
  constructor(t, r) {
    (this.type = 'DataWithResponseInit'),
      (this.data = t),
      (this.init = r || null);
  }
}
function ao(e, t) {
  return new sa(e, typeof t == 'number' ? { status: t } : t);
}
class Lt extends Error {}
class oo {
  constructor(t, r) {
    (this.pendingKeysSet = new Set()),
      (this.subscribers = new Set()),
      (this.deferredKeys = []),
      L(
        t && typeof t == 'object' && !Array.isArray(t),
        'defer() only accepts plain objects',
      );
    let n;
    (this.abortPromise = new Promise((l, i) => (n = i))),
      (this.controller = new AbortController());
    let a = () => n(new Lt('Deferred data aborted'));
    (this.unlistenAbortSignal = () =>
      this.controller.signal.removeEventListener('abort', a)),
      this.controller.signal.addEventListener('abort', a),
      (this.data = Object.entries(t).reduce((l, i) => {
        let [c, u] = i;
        return Object.assign(l, { [c]: this.trackPromise(c, u) });
      }, {})),
      this.done && this.unlistenAbortSignal(),
      (this.init = r);
  }
  trackPromise(t, r) {
    if (!(r instanceof Promise)) return r;
    this.deferredKeys.push(t), this.pendingKeysSet.add(t);
    let n = Promise.race([r, this.abortPromise]).then(
      (a) => this.onSettle(n, t, void 0, a),
      (a) => this.onSettle(n, t, a),
    );
    return (
      n.catch(() => {}),
      Object.defineProperty(n, '_tracked', { get: () => !0 }),
      n
    );
  }
  onSettle(t, r, n, a) {
    if (this.controller.signal.aborted && n instanceof Lt)
      return (
        this.unlistenAbortSignal(),
        Object.defineProperty(t, '_error', { get: () => n }),
        Promise.reject(n)
      );
    if (
      (this.pendingKeysSet.delete(r),
      this.done && this.unlistenAbortSignal(),
      n === void 0 && a === void 0)
    ) {
      let l = new Error(
        'Deferred data for key "' +
          r +
          '" resolved/rejected with `undefined`, you must resolve/reject with a value or `null`.',
      );
      return (
        Object.defineProperty(t, '_error', { get: () => l }),
        this.emit(!1, r),
        Promise.reject(l)
      );
    }
    return a === void 0
      ? (Object.defineProperty(t, '_error', { get: () => n }),
        this.emit(!1, r),
        Promise.reject(n))
      : (Object.defineProperty(t, '_data', { get: () => a }),
        this.emit(!1, r),
        a);
  }
  emit(t, r) {
    this.subscribers.forEach((n) => n(t, r));
  }
  subscribe(t) {
    return this.subscribers.add(t), () => this.subscribers.delete(t);
  }
  cancel() {
    this.controller.abort(),
      this.pendingKeysSet.forEach((t, r) => this.pendingKeysSet.delete(r)),
      this.emit(!0);
  }
  async resolveData(t) {
    let r = !1;
    if (!this.done) {
      let n = () => this.cancel();
      t.addEventListener('abort', n),
        (r = await new Promise((a) => {
          this.subscribe((l) => {
            t.removeEventListener('abort', n), (l || this.done) && a(l);
          });
        }));
    }
    return r;
  }
  get done() {
    return this.pendingKeysSet.size === 0;
  }
  get unwrappedData() {
    return (
      L(
        this.data !== null && this.done,
        'Can only unwrap data on initialized and settled deferreds',
      ),
      Object.entries(this.data).reduce((t, r) => {
        let [n, a] = r;
        return Object.assign(t, { [n]: ca(a) });
      }, {})
    );
  }
  get pendingKeys() {
    return Array.from(this.pendingKeysSet);
  }
}
function ua(e) {
  return e instanceof Promise && e._tracked === !0;
}
function ca(e) {
  if (!ua(e)) return e;
  if (e._error) throw e._error;
  return e._data;
}
const io = function (t, r) {
  r === void 0 && (r = 302);
  let n = r;
  typeof n == 'number'
    ? (n = { status: n })
    : typeof n.status > 'u' && (n.status = 302);
  let a = new Headers(n.headers);
  return a.set('Location', t), new Response(null, H({}, n, { headers: a }));
};
class jt {
  constructor(t, r, n, a) {
    a === void 0 && (a = !1),
      (this.status = t),
      (this.statusText = r || ''),
      (this.internal = a),
      n instanceof Error
        ? ((this.data = n.toString()), (this.error = n))
        : (this.data = n);
  }
}
function Et(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  );
}
const zr = ['post', 'put', 'patch', 'delete'],
  da = new Set(zr),
  fa = ['get', ...zr],
  ha = new Set(fa),
  pa = new Set([301, 302, 303, 307, 308]),
  va = new Set([307, 308]),
  Ct = {
    state: 'idle',
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  ma = {
    state: 'idle',
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Ye = { state: 'unblocked', proceed: void 0, reset: void 0, location: void 0 },
  Bt = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ya = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  $r = 'remix-router-transitions';
function lo(e) {
  const t = e.window ? e.window : typeof window < 'u' ? window : void 0,
    r =
      typeof t < 'u' &&
      typeof t.document < 'u' &&
      typeof t.document.createElement < 'u',
    n = !r;
  L(
    e.routes.length > 0,
    'You must provide a non-empty routes array to createRouter',
  );
  let a;
  if (e.mapRouteProperties) a = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let o = e.detectErrorBoundary;
    a = (s) => ({ hasErrorBoundary: o(s) });
  } else a = ya;
  let l = {},
    i = qe(e.routes, a, void 0, l),
    c,
    u = e.basename || '/',
    v = e.unstable_dataStrategy || Ra,
    m = e.unstable_patchRoutesOnNavigation,
    f = H(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
        v7_skipActionErrorRevalidation: !1,
      },
      e.future,
    ),
    y = null,
    O = new Set(),
    D = 1e3,
    E = new Set(),
    P = null,
    k = null,
    B = null,
    Q = e.hydrationData != null,
    K = De(i, e.history.location, u),
    oe = null;
  if (K == null && !m) {
    let o = Z(404, { pathname: e.history.location.pathname }),
      { matches: s, route: d } = Er(i);
    (K = s), (oe = { [d.id]: o });
  }
  K &&
    !e.hydrationData &&
    ut(K, i, e.history.location.pathname).active &&
    (K = null);
  let se;
  if (K)
    if (K.some((o) => o.route.lazy)) se = !1;
    else if (!K.some((o) => o.route.loader)) se = !0;
    else if (f.v7_partialHydration) {
      let o = e.hydrationData ? e.hydrationData.loaderData : null,
        s = e.hydrationData ? e.hydrationData.errors : null,
        d = (p) =>
          p.route.loader
            ? typeof p.route.loader == 'function' &&
              p.route.loader.hydrate === !0
              ? !1
              : (o && o[p.route.id] !== void 0) ||
                (s && s[p.route.id] !== void 0)
            : !0;
      if (s) {
        let p = K.findIndex((b) => s[b.route.id] !== void 0);
        se = K.slice(0, p + 1).every(d);
      } else se = K.every(d);
    } else se = e.hydrationData != null;
  else if (((se = !1), (K = []), f.v7_partialHydration)) {
    let o = ut(null, i, e.history.location.pathname);
    o.active && o.matches && (K = o.matches);
  }
  let $e,
    h = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: K,
      initialized: se,
      navigation: Ct,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: 'idle',
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || oe,
      fetchers: new Map(),
      blockers: new Map(),
    },
    z = Y.Pop,
    G = !1,
    A,
    ue = !1,
    ne = new Map(),
    ie = null,
    Me = !1,
    Re = !1,
    nt = [],
    at = new Set(),
    V = new Map(),
    ot = 0,
    He = -1,
    Le = new Map(),
    de = new Set(),
    je = new Map(),
    We = new Map(),
    fe = new Set(),
    xe = new Map(),
    Se = new Map(),
    qr = new Map(),
    Rt = !1;
  function Zr() {
    if (
      ((y = e.history.listen((o) => {
        let { action: s, location: d, delta: p } = o;
        if (Rt) {
          Rt = !1;
          return;
        }
        Ne(
          Se.size === 0 || p != null,
          'You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.',
        );
        let b = er({
          currentLocation: h.location,
          nextLocation: d,
          historyAction: s,
        });
        if (b && p != null) {
          (Rt = !0),
            e.history.go(p * -1),
            lt(b, {
              state: 'blocked',
              location: d,
              proceed() {
                lt(b, {
                  state: 'proceeding',
                  proceed: void 0,
                  reset: void 0,
                  location: d,
                }),
                  e.history.go(p);
              },
              reset() {
                let R = new Map(h.blockers);
                R.set(b, Ye), q({ blockers: R });
              },
            });
          return;
        }
        return Pe(s, d);
      })),
      r)
    ) {
      Ta(t, ne);
      let o = () => Ia(t, ne);
      t.addEventListener('pagehide', o),
        (ie = () => t.removeEventListener('pagehide', o));
    }
    return h.initialized || Pe(Y.Pop, h.location, { initialHydration: !0 }), $e;
  }
  function en() {
    y && y(),
      ie && ie(),
      O.clear(),
      A && A.abort(),
      h.fetchers.forEach((o, s) => it(s)),
      h.blockers.forEach((o, s) => Zt(s));
  }
  function tn(o) {
    return O.add(o), () => O.delete(o);
  }
  function q(o, s) {
    s === void 0 && (s = {}), (h = H({}, h, o));
    let d = [],
      p = [];
    f.v7_fetcherPersist &&
      h.fetchers.forEach((b, R) => {
        b.state === 'idle' && (fe.has(R) ? p.push(R) : d.push(R));
      }),
      [...O].forEach((b) =>
        b(h, {
          deletedFetchers: p,
          unstable_viewTransitionOpts: s.viewTransitionOpts,
          unstable_flushSync: s.flushSync === !0,
        }),
      ),
      f.v7_fetcherPersist &&
        (d.forEach((b) => h.fetchers.delete(b)), p.forEach((b) => it(b)));
  }
  function Oe(o, s, d) {
    var p, b;
    let { flushSync: R } = d === void 0 ? {} : d,
      S =
        h.actionData != null &&
        h.navigation.formMethod != null &&
        le(h.navigation.formMethod) &&
        h.navigation.state === 'loading' &&
        ((p = o.state) == null ? void 0 : p._isRedirect) !== !0,
      g;
    s.actionData
      ? Object.keys(s.actionData).length > 0
        ? (g = s.actionData)
        : (g = null)
      : S
        ? (g = h.actionData)
        : (g = null);
    let _ = s.loaderData
        ? br(h.loaderData, s.loaderData, s.matches || [], s.errors)
        : h.loaderData,
      x = h.blockers;
    x.size > 0 && ((x = new Map(x)), x.forEach((U, N) => x.set(N, Ye)));
    let C =
      G === !0 ||
      (h.navigation.formMethod != null &&
        le(h.navigation.formMethod) &&
        ((b = o.state) == null ? void 0 : b._isRedirect) !== !0);
    c && ((i = c), (c = void 0)),
      Me ||
        z === Y.Pop ||
        (z === Y.Push
          ? e.history.push(o, o.state)
          : z === Y.Replace && e.history.replace(o, o.state));
    let T;
    if (z === Y.Pop) {
      let U = ne.get(h.location.pathname);
      U && U.has(o.pathname)
        ? (T = { currentLocation: h.location, nextLocation: o })
        : ne.has(o.pathname) &&
          (T = { currentLocation: o, nextLocation: h.location });
    } else if (ue) {
      let U = ne.get(h.location.pathname);
      U
        ? U.add(o.pathname)
        : ((U = new Set([o.pathname])), ne.set(h.location.pathname, U)),
        (T = { currentLocation: h.location, nextLocation: o });
    }
    q(
      H({}, s, {
        actionData: g,
        loaderData: _,
        historyAction: z,
        location: o,
        initialized: !0,
        navigation: Ct,
        revalidation: 'idle',
        restoreScrollPosition: rr(o, s.matches || h.matches),
        preventScrollReset: C,
        blockers: x,
      }),
      { viewTransitionOpts: T, flushSync: R === !0 },
    ),
      (z = Y.Pop),
      (G = !1),
      (ue = !1),
      (Me = !1),
      (Re = !1),
      (nt = []);
  }
  async function Vt(o, s) {
    if (typeof o == 'number') {
      e.history.go(o);
      return;
    }
    let d = Ot(
        h.location,
        h.matches,
        u,
        f.v7_prependBasename,
        o,
        f.v7_relativeSplatPath,
        s == null ? void 0 : s.fromRouteId,
        s == null ? void 0 : s.relative,
      ),
      {
        path: p,
        submission: b,
        error: R,
      } = fr(f.v7_normalizeFormMethod, !1, d, s),
      S = h.location,
      g = Qe(h.location, p, s && s.state);
    g = H({}, g, e.history.encodeLocation(g));
    let _ = s && s.replace != null ? s.replace : void 0,
      x = Y.Push;
    _ === !0
      ? (x = Y.Replace)
      : _ === !1 ||
        (b != null &&
          le(b.formMethod) &&
          b.formAction === h.location.pathname + h.location.search &&
          (x = Y.Replace));
    let C =
        s && 'preventScrollReset' in s ? s.preventScrollReset === !0 : void 0,
      T = (s && s.unstable_flushSync) === !0,
      U = er({ currentLocation: S, nextLocation: g, historyAction: x });
    if (U) {
      lt(U, {
        state: 'blocked',
        location: g,
        proceed() {
          lt(U, {
            state: 'proceeding',
            proceed: void 0,
            reset: void 0,
            location: g,
          }),
            Vt(o, s);
        },
        reset() {
          let N = new Map(h.blockers);
          N.set(U, Ye), q({ blockers: N });
        },
      });
      return;
    }
    return await Pe(x, g, {
      submission: b,
      pendingError: R,
      preventScrollReset: C,
      replace: s && s.replace,
      enableViewTransition: s && s.unstable_viewTransition,
      flushSync: T,
    });
  }
  function rn() {
    if (
      (xt(),
      q({ revalidation: 'loading' }),
      h.navigation.state !== 'submitting')
    ) {
      if (h.navigation.state === 'idle') {
        Pe(h.historyAction, h.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      Pe(z || h.historyAction, h.navigation.location, {
        overrideNavigation: h.navigation,
      });
    }
  }
  async function Pe(o, s, d) {
    A && A.abort(),
      (A = null),
      (z = o),
      (Me = (d && d.startUninterruptedRevalidation) === !0),
      hn(h.location, h.matches),
      (G = (d && d.preventScrollReset) === !0),
      (ue = (d && d.enableViewTransition) === !0);
    let p = c || i,
      b = d && d.overrideNavigation,
      R = De(p, s, u),
      S = (d && d.flushSync) === !0,
      g = ut(R, p, s.pathname);
    if ((g.active && g.matches && (R = g.matches), !R)) {
      let { error: F, notFoundMatches: X, route: J } = St(s.pathname);
      Oe(
        s,
        { matches: X, loaderData: {}, errors: { [J.id]: F } },
        { flushSync: S },
      );
      return;
    }
    if (
      h.initialized &&
      !Re &&
      Ca(h.location, s) &&
      !(d && d.submission && le(d.submission.formMethod))
    ) {
      Oe(s, { matches: R }, { flushSync: S });
      return;
    }
    A = new AbortController();
    let _ = Ie(e.history, s, A.signal, d && d.submission),
      x;
    if (d && d.pendingError)
      x = [Ae(R).route.id, { type: I.error, error: d.pendingError }];
    else if (d && d.submission && le(d.submission.formMethod)) {
      let F = await nn(_, s, d.submission, R, g.active, {
        replace: d.replace,
        flushSync: S,
      });
      if (F.shortCircuited) return;
      if (F.pendingActionResult) {
        let [X, J] = F.pendingActionResult;
        if (re(J) && Et(J.error) && J.error.status === 404) {
          (A = null),
            Oe(s, {
              matches: F.matches,
              loaderData: {},
              errors: { [X]: J.error },
            });
          return;
        }
      }
      (R = F.matches || R),
        (x = F.pendingActionResult),
        (b = Mt(s, d.submission)),
        (S = !1),
        (g.active = !1),
        (_ = Ie(e.history, _.url, _.signal));
    }
    let {
      shortCircuited: C,
      matches: T,
      loaderData: U,
      errors: N,
    } = await an(
      _,
      s,
      R,
      g.active,
      b,
      d && d.submission,
      d && d.fetcherSubmission,
      d && d.replace,
      d && d.initialHydration === !0,
      S,
      x,
    );
    C ||
      ((A = null),
      Oe(s, H({ matches: T || R }, wr(x), { loaderData: U, errors: N })));
  }
  async function nn(o, s, d, p, b, R) {
    R === void 0 && (R = {}), xt();
    let S = Fa(s, d);
    if ((q({ navigation: S }, { flushSync: R.flushSync === !0 }), b)) {
      let x = await ct(p, s.pathname, o.signal);
      if (x.type === 'aborted') return { shortCircuited: !0 };
      if (x.type === 'error') {
        let { boundaryId: C, error: T } = st(s.pathname, x);
        return {
          matches: x.partialMatches,
          pendingActionResult: [C, { type: I.error, error: T }],
        };
      } else if (x.matches) p = x.matches;
      else {
        let { notFoundMatches: C, error: T, route: U } = St(s.pathname);
        return {
          matches: C,
          pendingActionResult: [U.id, { type: I.error, error: T }],
        };
      }
    }
    let g,
      _ = Xe(p, s);
    if (!_.route.action && !_.route.lazy)
      g = {
        type: I.error,
        error: Z(405, {
          method: o.method,
          pathname: s.pathname,
          routeId: _.route.id,
        }),
      };
    else if (((g = (await Ve('action', o, [_], p))[0]), o.signal.aborted))
      return { shortCircuited: !0 };
    if (Ce(g)) {
      let x;
      return (
        R && R.replace != null
          ? (x = R.replace)
          : (x =
              mr(g.response.headers.get('Location'), new URL(o.url), u) ===
              h.location.pathname + h.location.search),
        await Ke(o, g, { submission: d, replace: x }),
        { shortCircuited: !0 }
      );
    }
    if (_e(g)) throw Z(400, { type: 'defer-action' });
    if (re(g)) {
      let x = Ae(p, _.route.id);
      return (
        (R && R.replace) !== !0 && (z = Y.Push),
        { matches: p, pendingActionResult: [x.route.id, g] }
      );
    }
    return { matches: p, pendingActionResult: [_.route.id, g] };
  }
  async function an(o, s, d, p, b, R, S, g, _, x, C) {
    let T = b || Mt(s, R),
      U = R || S || Pr(T),
      N = !Me && (!f.v7_partialHydration || !_);
    if (p) {
      if (N) {
        let W = Jt(C);
        q(H({ navigation: T }, W !== void 0 ? { actionData: W } : {}), {
          flushSync: x,
        });
      }
      let M = await ct(d, s.pathname, o.signal);
      if (M.type === 'aborted') return { shortCircuited: !0 };
      if (M.type === 'error') {
        let { boundaryId: W, error: te } = st(s.pathname, M);
        return {
          matches: M.partialMatches,
          loaderData: {},
          errors: { [W]: te },
        };
      } else if (M.matches) d = M.matches;
      else {
        let { error: W, notFoundMatches: te, route: $ } = St(s.pathname);
        return { matches: te, loaderData: {}, errors: { [$.id]: W } };
      }
    }
    let F = c || i,
      [X, J] = hr(
        e.history,
        h,
        d,
        U,
        s,
        f.v7_partialHydration && _ === !0,
        f.v7_skipActionErrorRevalidation,
        Re,
        nt,
        at,
        fe,
        je,
        de,
        F,
        u,
        C,
      );
    if (
      (Pt(
        (M) =>
          !(d && d.some((W) => W.route.id === M)) ||
          (X && X.some((W) => W.route.id === M)),
      ),
      (He = ++ot),
      X.length === 0 && J.length === 0)
    ) {
      let M = Qt();
      return (
        Oe(
          s,
          H(
            {
              matches: d,
              loaderData: {},
              errors: C && re(C[1]) ? { [C[0]]: C[1].error } : null,
            },
            wr(C),
            M ? { fetchers: new Map(h.fetchers) } : {},
          ),
          { flushSync: x },
        ),
        { shortCircuited: !0 }
      );
    }
    if (N) {
      let M = {};
      if (!p) {
        M.navigation = T;
        let W = Jt(C);
        W !== void 0 && (M.actionData = W);
      }
      J.length > 0 && (M.fetchers = on(J)), q(M, { flushSync: x });
    }
    J.forEach((M) => {
      V.has(M.key) && ye(M.key), M.controller && V.set(M.key, M.controller);
    });
    let Je = () => J.forEach((M) => ye(M.key));
    A && A.signal.addEventListener('abort', Je);
    let { loaderResults: ge, fetcherResults: Fe } = await Yt(
      h.matches,
      d,
      X,
      J,
      o,
    );
    if (o.signal.aborted) return { shortCircuited: !0 };
    A && A.signal.removeEventListener('abort', Je),
      J.forEach((M) => V.delete(M.key));
    let Ue = Rr([...ge, ...Fe]);
    if (Ue) {
      if (Ue.idx >= X.length) {
        let M = J[Ue.idx - X.length].key;
        de.add(M);
      }
      return await Ke(o, Ue.result, { replace: g }), { shortCircuited: !0 };
    }
    let { loaderData: Te, errors: ce } = gr(h, d, X, ge, C, J, Fe, xe);
    xe.forEach((M, W) => {
      M.subscribe((te) => {
        (te || M.done) && xe.delete(W);
      });
    }),
      f.v7_partialHydration &&
        _ &&
        h.errors &&
        Object.entries(h.errors)
          .filter((M) => {
            let [W] = M;
            return !X.some((te) => te.route.id === W);
          })
          .forEach((M) => {
            let [W, te] = M;
            ce = Object.assign(ce || {}, { [W]: te });
          });
    let dt = Qt(),
      ft = qt(He),
      ht = dt || ft || J.length > 0;
    return H(
      { matches: d, loaderData: Te, errors: ce },
      ht ? { fetchers: new Map(h.fetchers) } : {},
    );
  }
  function Jt(o) {
    if (o && !re(o[1])) return { [o[0]]: o[1].data };
    if (h.actionData)
      return Object.keys(h.actionData).length === 0 ? null : h.actionData;
  }
  function on(o) {
    return (
      o.forEach((s) => {
        let d = h.fetchers.get(s.key),
          p = Ge(void 0, d ? d.data : void 0);
        h.fetchers.set(s.key, p);
      }),
      new Map(h.fetchers)
    );
  }
  function ln(o, s, d, p) {
    if (n)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.",
      );
    V.has(o) && ye(o);
    let b = (p && p.unstable_flushSync) === !0,
      R = c || i,
      S = Ot(
        h.location,
        h.matches,
        u,
        f.v7_prependBasename,
        d,
        f.v7_relativeSplatPath,
        s,
        p == null ? void 0 : p.relative,
      ),
      g = De(R, S, u),
      _ = ut(g, R, S);
    if ((_.active && _.matches && (g = _.matches), !g)) {
      he(o, s, Z(404, { pathname: S }), { flushSync: b });
      return;
    }
    let {
      path: x,
      submission: C,
      error: T,
    } = fr(f.v7_normalizeFormMethod, !0, S, p);
    if (T) {
      he(o, s, T, { flushSync: b });
      return;
    }
    let U = Xe(g, x);
    if (((G = (p && p.preventScrollReset) === !0), C && le(C.formMethod))) {
      sn(o, s, x, U, g, _.active, b, C);
      return;
    }
    je.set(o, { routeId: s, path: x }), un(o, s, x, U, g, _.active, b, C);
  }
  async function sn(o, s, d, p, b, R, S, g) {
    xt(), je.delete(o);
    function _($) {
      if (!$.route.action && !$.route.lazy) {
        let pe = Z(405, { method: g.formMethod, pathname: d, routeId: s });
        return he(o, s, pe, { flushSync: S }), !0;
      }
      return !1;
    }
    if (!R && _(p)) return;
    let x = h.fetchers.get(o);
    me(o, Ua(g, x), { flushSync: S });
    let C = new AbortController(),
      T = Ie(e.history, d, C.signal, g);
    if (R) {
      let $ = await ct(b, d, T.signal);
      if ($.type === 'aborted') return;
      if ($.type === 'error') {
        let { error: pe } = st(d, $);
        he(o, s, pe, { flushSync: S });
        return;
      } else if ($.matches) {
        if (((b = $.matches), (p = Xe(b, d)), _(p))) return;
      } else {
        he(o, s, Z(404, { pathname: d }), { flushSync: S });
        return;
      }
    }
    V.set(o, C);
    let U = ot,
      F = (await Ve('action', T, [p], b))[0];
    if (T.signal.aborted) {
      V.get(o) === C && V.delete(o);
      return;
    }
    if (f.v7_fetcherPersist && fe.has(o)) {
      if (Ce(F) || re(F)) {
        me(o, be(void 0));
        return;
      }
    } else {
      if (Ce(F))
        if ((V.delete(o), He > U)) {
          me(o, be(void 0));
          return;
        } else
          return de.add(o), me(o, Ge(g)), Ke(T, F, { fetcherSubmission: g });
      if (re(F)) {
        he(o, s, F.error);
        return;
      }
    }
    if (_e(F)) throw Z(400, { type: 'defer-action' });
    let X = h.navigation.location || h.location,
      J = Ie(e.history, X, C.signal),
      Je = c || i,
      ge =
        h.navigation.state !== 'idle'
          ? De(Je, h.navigation.location, u)
          : h.matches;
    L(ge, "Didn't find any matches after fetcher action");
    let Fe = ++ot;
    Le.set(o, Fe);
    let Ue = Ge(g, F.data);
    h.fetchers.set(o, Ue);
    let [Te, ce] = hr(
      e.history,
      h,
      ge,
      g,
      X,
      !1,
      f.v7_skipActionErrorRevalidation,
      Re,
      nt,
      at,
      fe,
      je,
      de,
      Je,
      u,
      [p.route.id, F],
    );
    ce
      .filter(($) => $.key !== o)
      .forEach(($) => {
        let pe = $.key,
          ar = h.fetchers.get(pe),
          mn = Ge(void 0, ar ? ar.data : void 0);
        h.fetchers.set(pe, mn),
          V.has(pe) && ye(pe),
          $.controller && V.set(pe, $.controller);
      }),
      q({ fetchers: new Map(h.fetchers) });
    let dt = () => ce.forEach(($) => ye($.key));
    C.signal.addEventListener('abort', dt);
    let { loaderResults: ft, fetcherResults: ht } = await Yt(
      h.matches,
      ge,
      Te,
      ce,
      J,
    );
    if (C.signal.aborted) return;
    C.signal.removeEventListener('abort', dt),
      Le.delete(o),
      V.delete(o),
      ce.forEach(($) => V.delete($.key));
    let M = Rr([...ft, ...ht]);
    if (M) {
      if (M.idx >= Te.length) {
        let $ = ce[M.idx - Te.length].key;
        de.add($);
      }
      return Ke(J, M.result);
    }
    let { loaderData: W, errors: te } = gr(
      h,
      h.matches,
      Te,
      ft,
      void 0,
      ce,
      ht,
      xe,
    );
    if (h.fetchers.has(o)) {
      let $ = be(F.data);
      h.fetchers.set(o, $);
    }
    qt(Fe),
      h.navigation.state === 'loading' && Fe > He
        ? (L(z, 'Expected pending action'),
          A && A.abort(),
          Oe(h.navigation.location, {
            matches: ge,
            loaderData: W,
            errors: te,
            fetchers: new Map(h.fetchers),
          }))
        : (q({
            errors: te,
            loaderData: br(h.loaderData, W, ge, te),
            fetchers: new Map(h.fetchers),
          }),
          (Re = !1));
  }
  async function un(o, s, d, p, b, R, S, g) {
    let _ = h.fetchers.get(o);
    me(o, Ge(g, _ ? _.data : void 0), { flushSync: S });
    let x = new AbortController(),
      C = Ie(e.history, d, x.signal);
    if (R) {
      let F = await ct(b, d, C.signal);
      if (F.type === 'aborted') return;
      if (F.type === 'error') {
        let { error: X } = st(d, F);
        he(o, s, X, { flushSync: S });
        return;
      } else if (F.matches) (b = F.matches), (p = Xe(b, d));
      else {
        he(o, s, Z(404, { pathname: d }), { flushSync: S });
        return;
      }
    }
    V.set(o, x);
    let T = ot,
      N = (await Ve('loader', C, [p], b))[0];
    if (
      (_e(N) && (N = (await Jr(N, C.signal, !0)) || N),
      V.get(o) === x && V.delete(o),
      !C.signal.aborted)
    ) {
      if (fe.has(o)) {
        me(o, be(void 0));
        return;
      }
      if (Ce(N))
        if (He > T) {
          me(o, be(void 0));
          return;
        } else {
          de.add(o), await Ke(C, N);
          return;
        }
      if (re(N)) {
        he(o, s, N.error);
        return;
      }
      L(!_e(N), 'Unhandled fetcher deferred data'), me(o, be(N.data));
    }
  }
  async function Ke(o, s, d) {
    let {
      submission: p,
      fetcherSubmission: b,
      replace: R,
    } = d === void 0 ? {} : d;
    s.response.headers.has('X-Remix-Revalidate') && (Re = !0);
    let S = s.response.headers.get('Location');
    L(S, 'Expected a Location header on the redirect Response'),
      (S = mr(S, new URL(o.url), u));
    let g = Qe(h.location, S, { _isRedirect: !0 });
    if (r) {
      let N = !1;
      if (s.response.headers.has('X-Remix-Reload-Document')) N = !0;
      else if (Bt.test(S)) {
        const F = e.history.createURL(S);
        N = F.origin !== t.location.origin || tt(F.pathname, u) == null;
      }
      if (N) {
        R ? t.location.replace(S) : t.location.assign(S);
        return;
      }
    }
    A = null;
    let _ =
        R === !0 || s.response.headers.has('X-Remix-Replace')
          ? Y.Replace
          : Y.Push,
      { formMethod: x, formAction: C, formEncType: T } = h.navigation;
    !p && !b && x && C && T && (p = Pr(h.navigation));
    let U = p || b;
    if (va.has(s.response.status) && U && le(U.formMethod))
      await Pe(_, g, {
        submission: H({}, U, { formAction: S }),
        preventScrollReset: G,
      });
    else {
      let N = Mt(g, p);
      await Pe(_, g, {
        overrideNavigation: N,
        fetcherSubmission: b,
        preventScrollReset: G,
      });
    }
  }
  async function Ve(o, s, d, p) {
    try {
      let b = await xa(v, o, s, d, p, l, a);
      return await Promise.all(
        b.map((R, S) => {
          if (La(R)) {
            let g = R.result;
            return {
              type: I.redirect,
              response: Da(g, s, d[S].route.id, p, u, f.v7_relativeSplatPath),
            };
          }
          return Pa(R);
        }),
      );
    } catch (b) {
      return d.map(() => ({ type: I.error, error: b }));
    }
  }
  async function Yt(o, s, d, p, b) {
    let [R, ...S] = await Promise.all([
      d.length ? Ve('loader', b, d, s) : [],
      ...p.map((g) => {
        if (g.matches && g.match && g.controller) {
          let _ = Ie(e.history, g.path, g.controller.signal);
          return Ve('loader', _, [g.match], g.matches).then((x) => x[0]);
        } else
          return Promise.resolve({
            type: I.error,
            error: Z(404, { pathname: g.path }),
          });
      }),
    ]);
    return (
      await Promise.all([
        Sr(
          o,
          d,
          R,
          R.map(() => b.signal),
          !1,
          h.loaderData,
        ),
        Sr(
          o,
          p.map((g) => g.match),
          S,
          p.map((g) => (g.controller ? g.controller.signal : null)),
          !0,
        ),
      ]),
      { loaderResults: R, fetcherResults: S }
    );
  }
  function xt() {
    (Re = !0),
      nt.push(...Pt()),
      je.forEach((o, s) => {
        V.has(s) && (at.add(s), ye(s));
      });
  }
  function me(o, s, d) {
    d === void 0 && (d = {}),
      h.fetchers.set(o, s),
      q(
        { fetchers: new Map(h.fetchers) },
        { flushSync: (d && d.flushSync) === !0 },
      );
  }
  function he(o, s, d, p) {
    p === void 0 && (p = {});
    let b = Ae(h.matches, s);
    it(o),
      q(
        { errors: { [b.route.id]: d }, fetchers: new Map(h.fetchers) },
        { flushSync: (p && p.flushSync) === !0 },
      );
  }
  function Gt(o) {
    return (
      f.v7_fetcherPersist &&
        (We.set(o, (We.get(o) || 0) + 1), fe.has(o) && fe.delete(o)),
      h.fetchers.get(o) || ma
    );
  }
  function it(o) {
    let s = h.fetchers.get(o);
    V.has(o) && !(s && s.state === 'loading' && Le.has(o)) && ye(o),
      je.delete(o),
      Le.delete(o),
      de.delete(o),
      fe.delete(o),
      at.delete(o),
      h.fetchers.delete(o);
  }
  function cn(o) {
    if (f.v7_fetcherPersist) {
      let s = (We.get(o) || 0) - 1;
      s <= 0 ? (We.delete(o), fe.add(o)) : We.set(o, s);
    } else it(o);
    q({ fetchers: new Map(h.fetchers) });
  }
  function ye(o) {
    let s = V.get(o);
    L(s, 'Expected fetch controller: ' + o), s.abort(), V.delete(o);
  }
  function Xt(o) {
    for (let s of o) {
      let d = Gt(s),
        p = be(d.data);
      h.fetchers.set(s, p);
    }
  }
  function Qt() {
    let o = [],
      s = !1;
    for (let d of de) {
      let p = h.fetchers.get(d);
      L(p, 'Expected fetcher: ' + d),
        p.state === 'loading' && (de.delete(d), o.push(d), (s = !0));
    }
    return Xt(o), s;
  }
  function qt(o) {
    let s = [];
    for (let [d, p] of Le)
      if (p < o) {
        let b = h.fetchers.get(d);
        L(b, 'Expected fetcher: ' + d),
          b.state === 'loading' && (ye(d), Le.delete(d), s.push(d));
      }
    return Xt(s), s.length > 0;
  }
  function dn(o, s) {
    let d = h.blockers.get(o) || Ye;
    return Se.get(o) !== s && Se.set(o, s), d;
  }
  function Zt(o) {
    h.blockers.delete(o), Se.delete(o);
  }
  function lt(o, s) {
    let d = h.blockers.get(o) || Ye;
    L(
      (d.state === 'unblocked' && s.state === 'blocked') ||
        (d.state === 'blocked' && s.state === 'blocked') ||
        (d.state === 'blocked' && s.state === 'proceeding') ||
        (d.state === 'blocked' && s.state === 'unblocked') ||
        (d.state === 'proceeding' && s.state === 'unblocked'),
      'Invalid blocker state transition: ' + d.state + ' -> ' + s.state,
    );
    let p = new Map(h.blockers);
    p.set(o, s), q({ blockers: p });
  }
  function er(o) {
    let { currentLocation: s, nextLocation: d, historyAction: p } = o;
    if (Se.size === 0) return;
    Se.size > 1 && Ne(!1, 'A router only supports one blocker at a time');
    let b = Array.from(Se.entries()),
      [R, S] = b[b.length - 1],
      g = h.blockers.get(R);
    if (
      !(g && g.state === 'proceeding') &&
      S({ currentLocation: s, nextLocation: d, historyAction: p })
    )
      return R;
  }
  function St(o) {
    let s = Z(404, { pathname: o }),
      d = c || i,
      { matches: p, route: b } = Er(d);
    return Pt(), { notFoundMatches: p, route: b, error: s };
  }
  function st(o, s) {
    return {
      boundaryId: Ae(s.partialMatches).route.id,
      error: Z(400, {
        type: 'route-discovery',
        pathname: o,
        message:
          s.error != null && 'message' in s.error ? s.error : String(s.error),
      }),
    };
  }
  function Pt(o) {
    let s = [];
    return (
      xe.forEach((d, p) => {
        (!o || o(p)) && (d.cancel(), s.push(p), xe.delete(p));
      }),
      s
    );
  }
  function fn(o, s, d) {
    if (((P = o), (B = s), (k = d || null), !Q && h.navigation === Ct)) {
      Q = !0;
      let p = rr(h.location, h.matches);
      p != null && q({ restoreScrollPosition: p });
    }
    return () => {
      (P = null), (B = null), (k = null);
    };
  }
  function tr(o, s) {
    return (
      (k &&
        k(
          o,
          s.map((p) => Ar(p, h.loaderData)),
        )) ||
      o.key
    );
  }
  function hn(o, s) {
    if (P && B) {
      let d = tr(o, s);
      P[d] = B();
    }
  }
  function rr(o, s) {
    if (P) {
      let d = tr(o, s),
        p = P[d];
      if (typeof p == 'number') return p;
    }
    return null;
  }
  function ut(o, s, d) {
    if (m) {
      if (E.has(d)) return { active: !1, matches: o };
      if (o) {
        if (Object.keys(o[0].params).length > 0)
          return { active: !0, matches: yt(s, d, u, !0) };
      } else return { active: !0, matches: yt(s, d, u, !0) || [] };
    }
    return { active: !1, matches: null };
  }
  async function ct(o, s, d) {
    let p = o;
    for (;;) {
      let b = c == null,
        R = c || i;
      try {
        await Ea(m, s, p, R, l, a, qr, d);
      } catch (_) {
        return { type: 'error', error: _, partialMatches: p };
      } finally {
        b && (i = [...i]);
      }
      if (d.aborted) return { type: 'aborted' };
      let S = De(R, s, u);
      if (S) return nr(s, E), { type: 'success', matches: S };
      let g = yt(R, s, u, !0);
      if (
        !g ||
        (p.length === g.length &&
          p.every((_, x) => _.route.id === g[x].route.id))
      )
        return nr(s, E), { type: 'success', matches: null };
      p = g;
    }
  }
  function nr(o, s) {
    if (s.size >= D) {
      let d = s.values().next().value;
      s.delete(d);
    }
    s.add(o);
  }
  function pn(o) {
    (l = {}), (c = qe(o, a, void 0, l));
  }
  function vn(o, s) {
    let d = c == null;
    Wr(o, s, c || i, l, a), d && ((i = [...i]), q({}));
  }
  return (
    ($e = {
      get basename() {
        return u;
      },
      get future() {
        return f;
      },
      get state() {
        return h;
      },
      get routes() {
        return i;
      },
      get window() {
        return t;
      },
      initialize: Zr,
      subscribe: tn,
      enableScrollRestoration: fn,
      navigate: Vt,
      fetch: ln,
      revalidate: rn,
      createHref: (o) => e.history.createHref(o),
      encodeLocation: (o) => e.history.encodeLocation(o),
      getFetcher: Gt,
      deleteFetcher: cn,
      dispose: en,
      getBlocker: dn,
      deleteBlocker: Zt,
      patchRoutes: vn,
      _internalFetchControllers: V,
      _internalActiveDeferreds: xe,
      _internalSetRoutes: pn,
    }),
    $e
  );
}
function ga(e) {
  return (
    e != null &&
    (('formData' in e && e.formData != null) ||
      ('body' in e && e.body !== void 0))
  );
}
function Ot(e, t, r, n, a, l, i, c) {
  let u, v;
  if (i) {
    u = [];
    for (let f of t)
      if ((u.push(f), f.route.id === i)) {
        v = f;
        break;
      }
  } else (u = t), (v = t[t.length - 1]);
  let m = kt(a || '.', Nt(u, l), tt(e.pathname, r) || e.pathname, c === 'path');
  return (
    a == null && ((m.search = e.search), (m.hash = e.hash)),
    (a == null || a === '' || a === '.') &&
      v &&
      v.route.index &&
      !zt(m.search) &&
      (m.search = m.search ? m.search.replace(/^\?/, '?index&') : '?index'),
    n &&
      r !== '/' &&
      (m.pathname = m.pathname === '/' ? r : ve([r, m.pathname])),
    et(m)
  );
}
function fr(e, t, r, n) {
  if (!n || !ga(n)) return { path: r };
  if (n.formMethod && !Oa(n.formMethod))
    return { path: r, error: Z(405, { method: n.formMethod }) };
  let a = () => ({ path: r, error: Z(400, { type: 'invalid-body' }) }),
    l = n.formMethod || 'get',
    i = e ? l.toUpperCase() : l.toLowerCase(),
    c = Kr(r);
  if (n.body !== void 0) {
    if (n.formEncType === 'text/plain') {
      if (!le(i)) return a();
      let y =
        typeof n.body == 'string'
          ? n.body
          : n.body instanceof FormData || n.body instanceof URLSearchParams
            ? Array.from(n.body.entries()).reduce((O, D) => {
                let [E, P] = D;
                return (
                  '' +
                  O +
                  E +
                  '=' +
                  P +
                  `
`
                );
              }, '')
            : String(n.body);
      return {
        path: r,
        submission: {
          formMethod: i,
          formAction: c,
          formEncType: n.formEncType,
          formData: void 0,
          json: void 0,
          text: y,
        },
      };
    } else if (n.formEncType === 'application/json') {
      if (!le(i)) return a();
      try {
        let y = typeof n.body == 'string' ? JSON.parse(n.body) : n.body;
        return {
          path: r,
          submission: {
            formMethod: i,
            formAction: c,
            formEncType: n.formEncType,
            formData: void 0,
            json: y,
            text: void 0,
          },
        };
      } catch {
        return a();
      }
    }
  }
  L(
    typeof FormData == 'function',
    'FormData is not available in this environment',
  );
  let u, v;
  if (n.formData) (u = Ft(n.formData)), (v = n.formData);
  else if (n.body instanceof FormData) (u = Ft(n.body)), (v = n.body);
  else if (n.body instanceof URLSearchParams) (u = n.body), (v = yr(u));
  else if (n.body == null) (u = new URLSearchParams()), (v = new FormData());
  else
    try {
      (u = new URLSearchParams(n.body)), (v = yr(u));
    } catch {
      return a();
    }
  let m = {
    formMethod: i,
    formAction: c,
    formEncType: (n && n.formEncType) || 'application/x-www-form-urlencoded',
    formData: v,
    json: void 0,
    text: void 0,
  };
  if (le(m.formMethod)) return { path: r, submission: m };
  let f = we(r);
  return (
    t && f.search && zt(f.search) && u.append('index', ''),
    (f.search = '?' + u),
    { path: et(f), submission: m }
  );
}
function ba(e, t) {
  let r = e;
  if (t) {
    let n = e.findIndex((a) => a.route.id === t);
    n >= 0 && (r = e.slice(0, n));
  }
  return r;
}
function hr(e, t, r, n, a, l, i, c, u, v, m, f, y, O, D, E) {
  let P = E ? (re(E[1]) ? E[1].error : E[1].data) : void 0,
    k = e.createURL(t.location),
    B = e.createURL(a),
    Q = E && re(E[1]) ? E[0] : void 0,
    K = Q ? ba(r, Q) : r,
    oe = E ? E[1].statusCode : void 0,
    se = i && oe && oe >= 400,
    $e = K.filter((z, G) => {
      let { route: A } = z;
      if (A.lazy) return !0;
      if (A.loader == null) return !1;
      if (l)
        return typeof A.loader != 'function' || A.loader.hydrate
          ? !0
          : t.loaderData[A.id] === void 0 &&
              (!t.errors || t.errors[A.id] === void 0);
      if (
        wa(t.loaderData, t.matches[G], z) ||
        u.some((ie) => ie === z.route.id)
      )
        return !0;
      let ue = t.matches[G],
        ne = z;
      return pr(
        z,
        H(
          {
            currentUrl: k,
            currentParams: ue.params,
            nextUrl: B,
            nextParams: ne.params,
          },
          n,
          {
            actionResult: P,
            actionStatus: oe,
            defaultShouldRevalidate: se
              ? !1
              : c ||
                k.pathname + k.search === B.pathname + B.search ||
                k.search !== B.search ||
                Hr(ue, ne),
          },
        ),
      );
    }),
    h = [];
  return (
    f.forEach((z, G) => {
      if (l || !r.some((Me) => Me.route.id === z.routeId) || m.has(G)) return;
      let A = De(O, z.path, D);
      if (!A) {
        h.push({
          key: G,
          routeId: z.routeId,
          path: z.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let ue = t.fetchers.get(G),
        ne = Xe(A, z.path),
        ie = !1;
      y.has(G)
        ? (ie = !1)
        : v.has(G)
          ? (v.delete(G), (ie = !0))
          : ue && ue.state !== 'idle' && ue.data === void 0
            ? (ie = c)
            : (ie = pr(
                ne,
                H(
                  {
                    currentUrl: k,
                    currentParams: t.matches[t.matches.length - 1].params,
                    nextUrl: B,
                    nextParams: r[r.length - 1].params,
                  },
                  n,
                  {
                    actionResult: P,
                    actionStatus: oe,
                    defaultShouldRevalidate: se ? !1 : c,
                  },
                ),
              )),
        ie &&
          h.push({
            key: G,
            routeId: z.routeId,
            path: z.path,
            matches: A,
            match: ne,
            controller: new AbortController(),
          });
    }),
    [$e, h]
  );
}
function wa(e, t, r) {
  let n = !t || r.route.id !== t.route.id,
    a = e[r.route.id] === void 0;
  return n || a;
}
function Hr(e, t) {
  let r = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (r != null && r.endsWith('*') && e.params['*'] !== t.params['*'])
  );
}
function pr(e, t) {
  if (e.route.shouldRevalidate) {
    let r = e.route.shouldRevalidate(t);
    if (typeof r == 'boolean') return r;
  }
  return t.defaultShouldRevalidate;
}
async function Ea(e, t, r, n, a, l, i, c) {
  let u = [t, ...r.map((v) => v.route.id)].join('-');
  try {
    let v = i.get(u);
    v ||
      ((v = e({
        path: t,
        matches: r,
        patch: (m, f) => {
          c.aborted || Wr(m, f, n, a, l);
        },
      })),
      i.set(u, v)),
      v && Ma(v) && (await v);
  } finally {
    i.delete(u);
  }
}
function Wr(e, t, r, n, a) {
  if (e) {
    var l;
    let i = n[e];
    L(i, 'No route found to patch children into: routeId = ' + e);
    let c = qe(
      t,
      a,
      [
        e,
        'patch',
        String(((l = i.children) == null ? void 0 : l.length) || '0'),
      ],
      n,
    );
    i.children ? i.children.push(...c) : (i.children = c);
  } else {
    let i = qe(t, a, ['patch', String(r.length || '0')], n);
    r.push(...i);
  }
}
async function vr(e, t, r) {
  if (!e.lazy) return;
  let n = await e.lazy();
  if (!e.lazy) return;
  let a = r[e.id];
  L(a, 'No route found in manifest');
  let l = {};
  for (let i in n) {
    let u = a[i] !== void 0 && i !== 'hasErrorBoundary';
    Ne(
      !u,
      'Route "' +
        a.id +
        '" has a static property "' +
        i +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + i + '" will be ignored.'),
    ),
      !u && !Hn.has(i) && (l[i] = n[i]);
  }
  Object.assign(a, l), Object.assign(a, H({}, t(a), { lazy: void 0 }));
}
function Ra(e) {
  return Promise.all(e.matches.map((t) => t.resolve()));
}
async function xa(e, t, r, n, a, l, i, c) {
  let u = n.reduce((f, y) => f.add(y.route.id), new Set()),
    v = new Set(),
    m = await e({
      matches: a.map((f) => {
        let y = u.has(f.route.id);
        return H({}, f, {
          shouldLoad: y,
          resolve: (D) => (
            v.add(f.route.id),
            y
              ? Sa(t, r, f, l, i, D, c)
              : Promise.resolve({ type: I.data, result: void 0 })
          ),
        });
      }),
      request: r,
      params: a[0].params,
      context: c,
    });
  return (
    a.forEach((f) =>
      L(
        v.has(f.route.id),
        '`match.resolve()` was not called for route id "' +
          f.route.id +
          '". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.',
      ),
    ),
    m.filter((f, y) => u.has(a[y].route.id))
  );
}
async function Sa(e, t, r, n, a, l, i) {
  let c,
    u,
    v = (m) => {
      let f,
        y = new Promise((E, P) => (f = P));
      (u = () => f()), t.signal.addEventListener('abort', u);
      let O = (E) =>
          typeof m != 'function'
            ? Promise.reject(
                new Error(
                  'You cannot call the handler for a route which defines a boolean ' +
                    ('"' + e + '" [routeId: ' + r.route.id + ']'),
                ),
              )
            : m(
                { request: t, params: r.params, context: i },
                ...(E !== void 0 ? [E] : []),
              ),
        D;
      return (
        l
          ? (D = l((E) => O(E)))
          : (D = (async () => {
              try {
                return { type: 'data', result: await O() };
              } catch (E) {
                return { type: 'error', result: E };
              }
            })()),
        Promise.race([D, y])
      );
    };
  try {
    let m = r.route[e];
    if (r.route.lazy)
      if (m) {
        let f,
          [y] = await Promise.all([
            v(m).catch((O) => {
              f = O;
            }),
            vr(r.route, a, n),
          ]);
        if (f !== void 0) throw f;
        c = y;
      } else if ((await vr(r.route, a, n), (m = r.route[e]), m)) c = await v(m);
      else if (e === 'action') {
        let f = new URL(t.url),
          y = f.pathname + f.search;
        throw Z(405, { method: t.method, pathname: y, routeId: r.route.id });
      } else return { type: I.data, result: void 0 };
    else if (m) c = await v(m);
    else {
      let f = new URL(t.url),
        y = f.pathname + f.search;
      throw Z(404, { pathname: y });
    }
    L(
      c.result !== void 0,
      'You defined ' +
        (e === 'action' ? 'an action' : 'a loader') +
        ' for route ' +
        ('"' +
          r.route.id +
          '" but didn\'t return anything from your `' +
          e +
          '` ') +
        'function. Please return a value or `null`.',
    );
  } catch (m) {
    return { type: I.error, result: m };
  } finally {
    u && t.signal.removeEventListener('abort', u);
  }
  return c;
}
async function Pa(e) {
  let { result: t, type: r } = e;
  if (Vr(t)) {
    let v;
    try {
      let m = t.headers.get('Content-Type');
      m && /\bapplication\/json\b/.test(m)
        ? t.body == null
          ? (v = null)
          : (v = await t.json())
        : (v = await t.text());
    } catch (m) {
      return { type: I.error, error: m };
    }
    return r === I.error
      ? {
          type: I.error,
          error: new jt(t.status, t.statusText, v),
          statusCode: t.status,
          headers: t.headers,
        }
      : { type: I.data, data: v, statusCode: t.status, headers: t.headers };
  }
  if (r === I.error) {
    if (xr(t)) {
      var n;
      if (t.data instanceof Error) {
        var a;
        return {
          type: I.error,
          error: t.data,
          statusCode: (a = t.init) == null ? void 0 : a.status,
        };
      }
      t = new jt(
        ((n = t.init) == null ? void 0 : n.status) || 500,
        void 0,
        t.data,
      );
    }
    return { type: I.error, error: t, statusCode: Et(t) ? t.status : void 0 };
  }
  if (ja(t)) {
    var l, i;
    return {
      type: I.deferred,
      deferredData: t,
      statusCode: (l = t.init) == null ? void 0 : l.status,
      headers:
        ((i = t.init) == null ? void 0 : i.headers) &&
        new Headers(t.init.headers),
    };
  }
  if (xr(t)) {
    var c, u;
    return {
      type: I.data,
      data: t.data,
      statusCode: (c = t.init) == null ? void 0 : c.status,
      headers:
        (u = t.init) != null && u.headers
          ? new Headers(t.init.headers)
          : void 0,
    };
  }
  return { type: I.data, data: t };
}
function Da(e, t, r, n, a, l) {
  let i = e.headers.get('Location');
  if (
    (L(
      i,
      'Redirects returned/thrown from loaders/actions must have a Location header',
    ),
    !Bt.test(i))
  ) {
    let c = n.slice(0, n.findIndex((u) => u.route.id === r) + 1);
    (i = Ot(new URL(t.url), c, a, !0, i, l)), e.headers.set('Location', i);
  }
  return e;
}
function mr(e, t, r) {
  if (Bt.test(e)) {
    let n = e,
      a = n.startsWith('//') ? new URL(t.protocol + n) : new URL(n),
      l = tt(a.pathname, r) != null;
    if (a.origin === t.origin && l) return a.pathname + a.search + a.hash;
  }
  return e;
}
function Ie(e, t, r, n) {
  let a = e.createURL(Kr(t)).toString(),
    l = { signal: r };
  if (n && le(n.formMethod)) {
    let { formMethod: i, formEncType: c } = n;
    (l.method = i.toUpperCase()),
      c === 'application/json'
        ? ((l.headers = new Headers({ 'Content-Type': c })),
          (l.body = JSON.stringify(n.json)))
        : c === 'text/plain'
          ? (l.body = n.text)
          : c === 'application/x-www-form-urlencoded' && n.formData
            ? (l.body = Ft(n.formData))
            : (l.body = n.formData);
  }
  return new Request(a, l);
}
function Ft(e) {
  let t = new URLSearchParams();
  for (let [r, n] of e.entries())
    t.append(r, typeof n == 'string' ? n : n.name);
  return t;
}
function yr(e) {
  let t = new FormData();
  for (let [r, n] of e.entries()) t.append(r, n);
  return t;
}
function _a(e, t, r, n, a, l) {
  let i = {},
    c = null,
    u,
    v = !1,
    m = {},
    f = n && re(n[1]) ? n[1].error : void 0;
  return (
    r.forEach((y, O) => {
      let D = t[O].route.id;
      if (
        (L(!Ce(y), 'Cannot handle redirect results in processLoaderData'),
        re(y))
      ) {
        let E = y.error;
        f !== void 0 && ((E = f), (f = void 0)), (c = c || {});
        {
          let P = Ae(e, D);
          c[P.route.id] == null && (c[P.route.id] = E);
        }
        (i[D] = void 0),
          v || ((v = !0), (u = Et(y.error) ? y.error.status : 500)),
          y.headers && (m[D] = y.headers);
      } else
        _e(y)
          ? (a.set(D, y.deferredData),
            (i[D] = y.deferredData.data),
            y.statusCode != null &&
              y.statusCode !== 200 &&
              !v &&
              (u = y.statusCode),
            y.headers && (m[D] = y.headers))
          : ((i[D] = y.data),
            y.statusCode && y.statusCode !== 200 && !v && (u = y.statusCode),
            y.headers && (m[D] = y.headers));
    }),
    f !== void 0 && n && ((c = { [n[0]]: f }), (i[n[0]] = void 0)),
    { loaderData: i, errors: c, statusCode: u || 200, loaderHeaders: m }
  );
}
function gr(e, t, r, n, a, l, i, c) {
  let { loaderData: u, errors: v } = _a(t, r, n, a, c);
  for (let m = 0; m < l.length; m++) {
    let { key: f, match: y, controller: O } = l[m];
    L(
      i !== void 0 && i[m] !== void 0,
      'Did not find corresponding fetcher result',
    );
    let D = i[m];
    if (!(O && O.signal.aborted))
      if (re(D)) {
        let E = Ae(e.matches, y == null ? void 0 : y.route.id);
        (v && v[E.route.id]) || (v = H({}, v, { [E.route.id]: D.error })),
          e.fetchers.delete(f);
      } else if (Ce(D)) L(!1, 'Unhandled fetcher revalidation redirect');
      else if (_e(D)) L(!1, 'Unhandled fetcher deferred data');
      else {
        let E = be(D.data);
        e.fetchers.set(f, E);
      }
  }
  return { loaderData: u, errors: v };
}
function br(e, t, r, n) {
  let a = H({}, t);
  for (let l of r) {
    let i = l.route.id;
    if (
      (t.hasOwnProperty(i)
        ? t[i] !== void 0 && (a[i] = t[i])
        : e[i] !== void 0 && l.route.loader && (a[i] = e[i]),
      n && n.hasOwnProperty(i))
    )
      break;
  }
  return a;
}
function wr(e) {
  return e
    ? re(e[1])
      ? { actionData: {} }
      : { actionData: { [e[0]]: e[1].data } }
    : {};
}
function Ae(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((n) => n.route.id === t) + 1) : [...e])
      .reverse()
      .find((n) => n.route.hasErrorBoundary === !0) || e[0]
  );
}
function Er(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((r) => r.index || !r.path || r.path === '/') || {
          id: '__shim-error-route__',
        };
  return {
    matches: [{ params: {}, pathname: '', pathnameBase: '', route: t }],
    route: t,
  };
}
function Z(e, t) {
  let {
      pathname: r,
      routeId: n,
      method: a,
      type: l,
      message: i,
    } = t === void 0 ? {} : t,
    c = 'Unknown Server Error',
    u = 'Unknown @remix-run/router error';
  return (
    e === 400
      ? ((c = 'Bad Request'),
        l === 'route-discovery'
          ? (u =
              'Unable to match URL "' +
              r +
              '" - the `unstable_patchRoutesOnNavigation()` ' +
              (`function threw the following error:
` +
                i))
          : a && r && n
            ? (u =
                'You made a ' +
                a +
                ' request to "' +
                r +
                '" but ' +
                ('did not provide a `loader` for route "' + n + '", ') +
                'so there is no way to handle the request.')
            : l === 'defer-action'
              ? (u = 'defer() is not supported in actions')
              : l === 'invalid-body' &&
                (u = 'Unable to encode submission body'))
      : e === 403
        ? ((c = 'Forbidden'),
          (u = 'Route "' + n + '" does not match URL "' + r + '"'))
        : e === 404
          ? ((c = 'Not Found'), (u = 'No route matches URL "' + r + '"'))
          : e === 405 &&
            ((c = 'Method Not Allowed'),
            a && r && n
              ? (u =
                  'You made a ' +
                  a.toUpperCase() +
                  ' request to "' +
                  r +
                  '" but ' +
                  ('did not provide an `action` for route "' + n + '", ') +
                  'so there is no way to handle the request.')
              : a && (u = 'Invalid request method "' + a.toUpperCase() + '"')),
    new jt(e || 500, c, new Error(u), !0)
  );
}
function Rr(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let r = e[t];
    if (Ce(r)) return { result: r, idx: t };
  }
}
function Kr(e) {
  let t = typeof e == 'string' ? we(e) : e;
  return et(H({}, t, { hash: '' }));
}
function Ca(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ''
      ? t.hash !== ''
      : e.hash === t.hash
        ? !0
        : t.hash !== '';
}
function Ma(e) {
  return typeof e == 'object' && e != null && 'then' in e;
}
function La(e) {
  return Vr(e.result) && pa.has(e.result.status);
}
function _e(e) {
  return e.type === I.deferred;
}
function re(e) {
  return e.type === I.error;
}
function Ce(e) {
  return (e && e.type) === I.redirect;
}
function xr(e) {
  return (
    typeof e == 'object' &&
    e != null &&
    'type' in e &&
    'data' in e &&
    'init' in e &&
    e.type === 'DataWithResponseInit'
  );
}
function ja(e) {
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
function Vr(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.headers == 'object' &&
    typeof e.body < 'u'
  );
}
function Oa(e) {
  return ha.has(e.toLowerCase());
}
function le(e) {
  return da.has(e.toLowerCase());
}
async function Sr(e, t, r, n, a, l) {
  for (let i = 0; i < r.length; i++) {
    let c = r[i],
      u = t[i];
    if (!u) continue;
    let v = e.find((f) => f.route.id === u.route.id),
      m = v != null && !Hr(v, u) && (l && l[u.route.id]) !== void 0;
    if (_e(c) && (a || m)) {
      let f = n[i];
      L(f, 'Expected an AbortSignal for revalidating fetcher deferred result'),
        await Jr(c, f, a).then((y) => {
          y && (r[i] = y || r[i]);
        });
    }
  }
}
async function Jr(e, t, r) {
  if ((r === void 0 && (r = !1), !(await e.deferredData.resolveData(t)))) {
    if (r)
      try {
        return { type: I.data, data: e.deferredData.unwrappedData };
      } catch (a) {
        return { type: I.error, error: a };
      }
    return { type: I.data, data: e.deferredData.data };
  }
}
function zt(e) {
  return new URLSearchParams(e).getAll('index').some((t) => t === '');
}
function Xe(e, t) {
  let r = typeof t == 'string' ? we(t).search : t.search;
  if (e[e.length - 1].route.index && zt(r || '')) return e[e.length - 1];
  let n = Br(e);
  return n[n.length - 1];
}
function Pr(e) {
  let {
    formMethod: t,
    formAction: r,
    formEncType: n,
    text: a,
    formData: l,
    json: i,
  } = e;
  if (!(!t || !r || !n)) {
    if (a != null)
      return {
        formMethod: t,
        formAction: r,
        formEncType: n,
        formData: void 0,
        json: void 0,
        text: a,
      };
    if (l != null)
      return {
        formMethod: t,
        formAction: r,
        formEncType: n,
        formData: l,
        json: void 0,
        text: void 0,
      };
    if (i !== void 0)
      return {
        formMethod: t,
        formAction: r,
        formEncType: n,
        formData: void 0,
        json: i,
        text: void 0,
      };
  }
}
function Mt(e, t) {
  return t
    ? {
        state: 'loading',
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: 'loading',
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function Fa(e, t) {
  return {
    state: 'submitting',
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function Ge(e, t) {
  return e
    ? {
        state: 'loading',
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: 'loading',
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function Ua(e, t) {
  return {
    state: 'submitting',
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function be(e) {
  return {
    state: 'idle',
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function Ta(e, t) {
  try {
    let r = e.sessionStorage.getItem($r);
    if (r) {
      let n = JSON.parse(r);
      for (let [a, l] of Object.entries(n || {}))
        l && Array.isArray(l) && t.set(a, new Set(l || []));
    }
  } catch {}
}
function Ia(e, t) {
  if (t.size > 0) {
    let r = {};
    for (let [n, a] of t) r[n] = [...a];
    try {
      e.sessionStorage.setItem($r, JSON.stringify(r));
    } catch (n) {
      Ne(
        !1,
        'Failed to save applied view transitions in sessionStorage (' +
          n +
          ').',
      );
    }
  }
}
/**
 * React Router v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function gt() {
  return (
    (gt = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    gt.apply(this, arguments)
  );
}
const $t = w.createContext(null),
  Aa = w.createContext(null),
  bt = w.createContext(null),
  ze = w.createContext(null),
  Ht = w.createContext(null),
  Ee = w.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Yr = w.createContext(null);
function so(e, t) {
  let { relative: r } = t === void 0 ? {} : t;
  rt() || L(!1);
  let { basename: n, navigator: a } = w.useContext(ze),
    { hash: l, pathname: i, search: c } = za(e, { relative: r }),
    u = i;
  return (
    n !== '/' && (u = i === '/' ? n : ve([n, i])),
    a.createHref({ pathname: u, search: c, hash: l })
  );
}
function rt() {
  return w.useContext(Ht) != null;
}
function Wt() {
  return rt() || L(!1), w.useContext(Ht).location;
}
function Gr(e) {
  w.useContext(ze).static || w.useLayoutEffect(e);
}
function uo() {
  let { isDataRoute: e } = w.useContext(Ee);
  return e ? Qa() : Na();
}
function Na() {
  rt() || L(!1);
  let e = w.useContext($t),
    { basename: t, future: r, navigator: n } = w.useContext(ze),
    { matches: a } = w.useContext(Ee),
    { pathname: l } = Wt(),
    i = JSON.stringify(Nt(a, r.v7_relativeSplatPath)),
    c = w.useRef(!1);
  return (
    Gr(() => {
      c.current = !0;
    }),
    w.useCallback(
      function (v, m) {
        if ((m === void 0 && (m = {}), !c.current)) return;
        if (typeof v == 'number') {
          n.go(v);
          return;
        }
        let f = kt(v, JSON.parse(i), l, m.relative === 'path');
        e == null &&
          t !== '/' &&
          (f.pathname = f.pathname === '/' ? t : ve([t, f.pathname])),
          (m.replace ? n.replace : n.push)(f, m.state, m);
      },
      [t, n, i, l, e],
    )
  );
}
const ka = w.createContext(null);
function Ba(e) {
  let t = w.useContext(Ee).outlet;
  return t && w.createElement(ka.Provider, { value: e }, t);
}
function za(e, t) {
  let { relative: r } = t === void 0 ? {} : t,
    { future: n } = w.useContext(ze),
    { matches: a } = w.useContext(Ee),
    { pathname: l } = Wt(),
    i = JSON.stringify(Nt(a, n.v7_relativeSplatPath));
  return w.useMemo(() => kt(e, JSON.parse(i), l, r === 'path'), [e, i, l, r]);
}
function co(e, t, r, n) {
  rt() || L(!1);
  let { navigator: a } = w.useContext(ze),
    { matches: l } = w.useContext(Ee),
    i = l[l.length - 1],
    c = i ? i.params : {};
  i && i.pathname;
  let u = i ? i.pathnameBase : '/';
  i && i.route;
  let v = Wt(),
    m;
  m = v;
  let f = m.pathname || '/',
    y = f;
  if (u !== '/') {
    let E = u.replace(/^\//, '').split('/');
    y = '/' + f.replace(/^\//, '').split('/').slice(E.length).join('/');
  }
  let O = De(e, { pathname: y });
  return Va(
    O &&
      O.map((E) =>
        Object.assign({}, E, {
          params: Object.assign({}, c, E.params),
          pathname: ve([
            u,
            a.encodeLocation
              ? a.encodeLocation(E.pathname).pathname
              : E.pathname,
          ]),
          pathnameBase:
            E.pathnameBase === '/'
              ? u
              : ve([
                  u,
                  a.encodeLocation
                    ? a.encodeLocation(E.pathnameBase).pathname
                    : E.pathnameBase,
                ]),
        }),
      ),
    l,
    r,
    n,
  );
}
function $a() {
  let e = Ga(),
    t = Et(e)
      ? e.status + ' ' + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    r = e instanceof Error ? e.stack : null,
    a = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' };
  return w.createElement(
    w.Fragment,
    null,
    w.createElement('h2', null, 'Unexpected Application Error!'),
    w.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    r ? w.createElement('pre', { style: a }, r) : null,
    null,
  );
}
const Ha = w.createElement($a, null);
class Wa extends w.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, r) {
    return r.location !== t.location ||
      (r.revalidation !== 'idle' && t.revalidation === 'idle')
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : r.error,
          location: r.location,
          revalidation: t.revalidation || r.revalidation,
        };
  }
  componentDidCatch(t, r) {
    console.error(
      'React Router caught the following error during render',
      t,
      r,
    );
  }
  render() {
    return this.state.error !== void 0
      ? w.createElement(
          Ee.Provider,
          { value: this.props.routeContext },
          w.createElement(Yr.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function Ka(e) {
  let { routeContext: t, match: r, children: n } = e,
    a = w.useContext($t);
  return (
    a &&
      a.static &&
      a.staticContext &&
      (r.route.errorElement || r.route.ErrorBoundary) &&
      (a.staticContext._deepestRenderedBoundaryId = r.route.id),
    w.createElement(Ee.Provider, { value: t }, n)
  );
}
function Va(e, t, r, n) {
  var a;
  if (
    (t === void 0 && (t = []),
    r === void 0 && (r = null),
    n === void 0 && (n = null),
    e == null)
  ) {
    var l;
    if (!r) return null;
    if (r.errors) e = r.matches;
    else if (
      (l = n) != null &&
      l.v7_partialHydration &&
      t.length === 0 &&
      !r.initialized &&
      r.matches.length > 0
    )
      e = r.matches;
    else return null;
  }
  let i = e,
    c = (a = r) == null ? void 0 : a.errors;
  if (c != null) {
    let m = i.findIndex(
      (f) => f.route.id && (c == null ? void 0 : c[f.route.id]) !== void 0,
    );
    m >= 0 || L(!1), (i = i.slice(0, Math.min(i.length, m + 1)));
  }
  let u = !1,
    v = -1;
  if (r && n && n.v7_partialHydration)
    for (let m = 0; m < i.length; m++) {
      let f = i[m];
      if (
        ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (v = m),
        f.route.id)
      ) {
        let { loaderData: y, errors: O } = r,
          D =
            f.route.loader &&
            y[f.route.id] === void 0 &&
            (!O || O[f.route.id] === void 0);
        if (f.route.lazy || D) {
          (u = !0), v >= 0 ? (i = i.slice(0, v + 1)) : (i = [i[0]]);
          break;
        }
      }
    }
  return i.reduceRight((m, f, y) => {
    let O,
      D = !1,
      E = null,
      P = null;
    r &&
      ((O = c && f.route.id ? c[f.route.id] : void 0),
      (E = f.route.errorElement || Ha),
      u &&
        (v < 0 && y === 0
          ? ((D = !0), (P = null))
          : v === y &&
            ((D = !0), (P = f.route.hydrateFallbackElement || null))));
    let k = t.concat(i.slice(0, y + 1)),
      B = () => {
        let Q;
        return (
          O
            ? (Q = E)
            : D
              ? (Q = P)
              : f.route.Component
                ? (Q = w.createElement(f.route.Component, null))
                : f.route.element
                  ? (Q = f.route.element)
                  : (Q = m),
          w.createElement(Ka, {
            match: f,
            routeContext: { outlet: m, matches: k, isDataRoute: r != null },
            children: Q,
          })
        );
      };
    return r && (f.route.ErrorBoundary || f.route.errorElement || y === 0)
      ? w.createElement(Wa, {
          location: r.location,
          revalidation: r.revalidation,
          component: E,
          error: O,
          children: B(),
          routeContext: { outlet: null, matches: k, isDataRoute: !0 },
        })
      : B();
  }, null);
}
var Xr = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      e
    );
  })(Xr || {}),
  ke = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseLoaderData = 'useLoaderData'),
      (e.UseActionData = 'useActionData'),
      (e.UseRouteError = 'useRouteError'),
      (e.UseNavigation = 'useNavigation'),
      (e.UseRouteLoaderData = 'useRouteLoaderData'),
      (e.UseMatches = 'useMatches'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      (e.UseRouteId = 'useRouteId'),
      e
    );
  })(ke || {});
function Ja(e) {
  let t = w.useContext($t);
  return t || L(!1), t;
}
function Qr(e) {
  let t = w.useContext(Aa);
  return t || L(!1), t;
}
function Ya(e) {
  let t = w.useContext(Ee);
  return t || L(!1), t;
}
function Kt(e) {
  let t = Ya(),
    r = t.matches[t.matches.length - 1];
  return r.route.id || L(!1), r.route.id;
}
function fo() {
  return Kt(ke.UseRouteId);
}
function ho() {
  let { matches: e, loaderData: t } = Qr(ke.UseMatches);
  return w.useMemo(() => e.map((r) => Ar(r, t)), [e, t]);
}
function Ga() {
  var e;
  let t = w.useContext(Yr),
    r = Qr(ke.UseRouteError),
    n = Kt(ke.UseRouteError);
  return t !== void 0 ? t : (e = r.errors) == null ? void 0 : e[n];
}
function Xa() {
  let e = w.useContext(bt);
  return e == null ? void 0 : e._data;
}
function po() {
  let e = w.useContext(bt);
  return e == null ? void 0 : e._error;
}
function Qa() {
  let { router: e } = Ja(Xr.UseNavigateStable),
    t = Kt(ke.UseNavigateStable),
    r = w.useRef(!1);
  return (
    Gr(() => {
      r.current = !0;
    }),
    w.useCallback(
      function (a, l) {
        l === void 0 && (l = {}),
          r.current &&
            (typeof a == 'number'
              ? e.navigate(a)
              : e.navigate(a, gt({ fromRouteId: t }, l)));
      },
      [e, t],
    )
  );
}
function vo(e) {
  return Ba(e.context);
}
function mo(e) {
  let {
    basename: t = '/',
    children: r = null,
    location: n,
    navigationType: a = Y.Pop,
    navigator: l,
    static: i = !1,
    future: c,
  } = e;
  rt() && L(!1);
  let u = t.replace(/^\/*/, '/'),
    v = w.useMemo(
      () => ({
        basename: u,
        navigator: l,
        static: i,
        future: gt({ v7_relativeSplatPath: !1 }, c),
      }),
      [u, c, l, i],
    );
  typeof n == 'string' && (n = we(n));
  let {
      pathname: m = '/',
      search: f = '',
      hash: y = '',
      state: O = null,
      key: D = 'default',
    } = n,
    E = w.useMemo(() => {
      let P = tt(m, u);
      return P == null
        ? null
        : {
            location: { pathname: P, search: f, hash: y, state: O, key: D },
            navigationType: a,
          };
    }, [u, m, f, y, O, D, a]);
  return E == null
    ? null
    : w.createElement(
        ze.Provider,
        { value: v },
        w.createElement(Ht.Provider, { children: r, value: E }),
      );
}
function yo(e) {
  let { children: t, errorElement: r, resolve: n } = e;
  return w.createElement(
    Za,
    { resolve: n, errorElement: r },
    w.createElement(eo, null, t),
  );
}
var ae = (function (e) {
  return (
    (e[(e.pending = 0)] = 'pending'),
    (e[(e.success = 1)] = 'success'),
    (e[(e.error = 2)] = 'error'),
    e
  );
})(ae || {});
const qa = new Promise(() => {});
class Za extends w.Component {
  constructor(t) {
    super(t), (this.state = { error: null });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  componentDidCatch(t, r) {
    console.error('<Await> caught the following error during render', t, r);
  }
  render() {
    let { children: t, errorElement: r, resolve: n } = this.props,
      a = null,
      l = ae.pending;
    if (!(n instanceof Promise))
      (l = ae.success),
        (a = Promise.resolve()),
        Object.defineProperty(a, '_tracked', { get: () => !0 }),
        Object.defineProperty(a, '_data', { get: () => n });
    else if (this.state.error) {
      l = ae.error;
      let i = this.state.error;
      (a = Promise.reject().catch(() => {})),
        Object.defineProperty(a, '_tracked', { get: () => !0 }),
        Object.defineProperty(a, '_error', { get: () => i });
    } else
      n._tracked
        ? ((a = n),
          (l =
            '_error' in a ? ae.error : '_data' in a ? ae.success : ae.pending))
        : ((l = ae.pending),
          Object.defineProperty(n, '_tracked', { get: () => !0 }),
          (a = n.then(
            (i) => Object.defineProperty(n, '_data', { get: () => i }),
            (i) => Object.defineProperty(n, '_error', { get: () => i }),
          )));
    if (l === ae.error && a._error instanceof Lt) throw qa;
    if (l === ae.error && !r) throw a._error;
    if (l === ae.error)
      return w.createElement(bt.Provider, { value: a, children: r });
    if (l === ae.success)
      return w.createElement(bt.Provider, { value: a, children: t });
    throw a;
  }
}
function eo(e) {
  let { children: t } = e,
    r = Xa(),
    n = typeof t == 'function' ? t(r) : t;
  return w.createElement(w.Fragment, null, n);
}
function go(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: w.createElement(e.Component),
        Component: void 0,
      }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: w.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: w.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
export {
  Lt as A,
  io as B,
  Ga as C,
  $t as D,
  jt as E,
  po as F,
  ho as G,
  yo as H,
  ze as N,
  vo as O,
  to as R,
  no as a,
  go as b,
  lo as c,
  Un as d,
  Aa as e,
  mo as f,
  gn as g,
  so as h,
  za as i,
  ro as j,
  Wt as k,
  uo as l,
  De as m,
  et as n,
  fo as o,
  Ee as p,
  L as q,
  w as r,
  tt as s,
  ve as t,
  co as u,
  dr as v,
  we as w,
  oo as x,
  Et as y,
  ao as z,
};
