import {
  r as c,
  R as D,
  j as i,
  u as de,
  d as ye,
  e as Le,
} from './index-DeHznlkS.js';
import { u as $e } from './react-redux-ulQB2trU.js';
import { u as Q, B as je } from './button-DYUIl9Ir.js';
import { G as Se } from './iconBase-z_erZi_H.js';
import { k as ke, l as Ie, F as Ae } from './components-D8uQ7O_9.js';
import { b as Ve } from './rest-history-slice-ClFBwpBo.js';
const Oe = (e) => btoa(e),
  oe = (e) => atob(e),
  Be = '_container_w5b5q_1',
  He = '_RestBlock_w5b5q_12',
  We = '_methodSection_w5b5q_20',
  qe = '_formAction_w5b5q_26',
  ze = '_methodBlock_w5b5q_32',
  De = '_customSelect_w5b5q_43',
  Ue = '_inputUrl_w5b5q_81',
  A = {
    container: Be,
    RestBlock: He,
    methodSection: We,
    formAction: qe,
    methodBlock: ze,
    customSelect: De,
    inputUrl: Ue,
  };
function Fe(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function fe(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function pe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? fe(Object(r), !0).forEach(function (n) {
          Fe(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : fe(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Ge(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    a;
  for (a = 0; a < n.length; a++)
    (o = n[a]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function Je(e, t) {
  if (e == null) return {};
  var r = Ge(e, t),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      (n = a[o]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function Ze(e, t) {
  return Ke(e) || Ye(e, t) || Qe(e, t) || Xe();
}
function Ke(e) {
  if (Array.isArray(e)) return e;
}
function Ye(e, t) {
  if (!(typeof Symbol > 'u' || !(Symbol.iterator in Object(e)))) {
    var r = [],
      n = !0,
      o = !1,
      a = void 0;
    try {
      for (
        var s = e[Symbol.iterator](), d;
        !(n = (d = s.next()).done) && (r.push(d.value), !(t && r.length === t));
        n = !0
      );
    } catch (h) {
      (o = !0), (a = h);
    } finally {
      try {
        !n && s.return != null && s.return();
      } finally {
        if (o) throw a;
      }
    }
    return r;
  }
}
function Qe(e, t) {
  if (e) {
    if (typeof e == 'string') return he(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === 'Object' && e.constructor && (r = e.constructor.name),
      r === 'Map' || r === 'Set')
    )
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return he(e, t);
  }
}
function he(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Xe() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function et(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function ge(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function me(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ge(Object(r), !0).forEach(function (n) {
          et(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ge(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function tt() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return function (n) {
    return t.reduceRight(function (o, a) {
      return a(o);
    }, n);
  };
}
function Z(e) {
  return function t() {
    for (
      var r = this, n = arguments.length, o = new Array(n), a = 0;
      a < n;
      a++
    )
      o[a] = arguments[a];
    return o.length >= e.length
      ? e.apply(this, o)
      : function () {
          for (var s = arguments.length, d = new Array(s), h = 0; h < s; h++)
            d[h] = arguments[h];
          return t.apply(r, [].concat(o, d));
        };
  };
}
function ae(e) {
  return {}.toString.call(e).includes('Object');
}
function rt(e) {
  return !Object.keys(e).length;
}
function Y(e) {
  return typeof e == 'function';
}
function nt(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function ot(e, t) {
  return (
    ae(t) || k('changeType'),
    Object.keys(t).some(function (r) {
      return !nt(e, r);
    }) && k('changeField'),
    t
  );
}
function at(e) {
  Y(e) || k('selectorType');
}
function it(e) {
  Y(e) || ae(e) || k('handlerType'),
    ae(e) &&
      Object.values(e).some(function (t) {
        return !Y(t);
      }) &&
      k('handlersType');
}
function ct(e) {
  e || k('initialIsRequired'),
    ae(e) || k('initialType'),
    rt(e) && k('initialContent');
}
function st(e, t) {
  throw new Error(e[t] || e.default);
}
var ut = {
    initialIsRequired: 'initial state is required',
    initialType: 'initial state should be an object',
    initialContent: "initial state shouldn't be an empty object",
    handlerType: 'handler should be an object or a function',
    handlersType: 'all handlers should be a functions',
    selectorType: 'selector should be a function',
    changeType: 'provided value of changes should be an object',
    changeField:
      'it seams you want to change a field in the state which is not specified in the "initial" state',
    default: 'an unknown error accured in `state-local` package',
  },
  k = Z(st)(ut),
  re = { changes: ot, selector: at, handler: it, initial: ct };
function lt(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  re.initial(e), re.handler(t);
  var r = { current: e },
    n = Z(pt)(r, t),
    o = Z(ft)(r),
    a = Z(re.changes)(e),
    s = Z(dt)(r);
  function d() {
    var y =
      arguments.length > 0 && arguments[0] !== void 0
        ? arguments[0]
        : function (E) {
            return E;
          };
    return re.selector(y), y(r.current);
  }
  function h(y) {
    tt(n, o, a, s)(y);
  }
  return [d, h];
}
function dt(e, t) {
  return Y(t) ? t(e.current) : t;
}
function ft(e, t) {
  return (e.current = me(me({}, e.current), t)), t;
}
function pt(e, t, r) {
  return (
    Y(t)
      ? t(e.current)
      : Object.keys(r).forEach(function (n) {
          var o;
          return (o = t[n]) === null || o === void 0
            ? void 0
            : o.call(t, e.current[n]);
        }),
    r
  );
}
var ht = { create: lt },
  gt = {
    paths: { vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs' },
  };
function mt(e) {
  return function t() {
    for (
      var r = this, n = arguments.length, o = new Array(n), a = 0;
      a < n;
      a++
    )
      o[a] = arguments[a];
    return o.length >= e.length
      ? e.apply(this, o)
      : function () {
          for (var s = arguments.length, d = new Array(s), h = 0; h < s; h++)
            d[h] = arguments[h];
          return t.apply(r, [].concat(o, d));
        };
  };
}
function vt(e) {
  return {}.toString.call(e).includes('Object');
}
function bt(e) {
  return (
    e || ve('configIsRequired'),
    vt(e) || ve('configType'),
    e.urls ? (yt(), { paths: { vs: e.urls.monacoBase } }) : e
  );
}
function yt() {
  console.warn(we.deprecation);
}
function jt(e, t) {
  throw new Error(e[t] || e.default);
}
var we = {
    configIsRequired: 'the configuration object is required',
    configType: 'the configuration object should be an object',
    default: 'an unknown error accured in `@monaco-editor/loader` package',
    deprecation: `Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `,
  },
  ve = mt(jt)(we),
  St = { config: bt },
  Ot = function () {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return function (o) {
      return r.reduceRight(function (a, s) {
        return s(a);
      }, o);
    };
  };
function _e(e, t) {
  return (
    Object.keys(t).forEach(function (r) {
      t[r] instanceof Object && e[r] && Object.assign(t[r], _e(e[r], t[r]));
    }),
    pe(pe({}, e), t)
  );
}
var wt = { type: 'cancelation', msg: 'operation is manually canceled' };
function ce(e) {
  var t = !1,
    r = new Promise(function (n, o) {
      e.then(function (a) {
        return t ? o(wt) : n(a);
      }),
        e.catch(o);
    });
  return (
    (r.cancel = function () {
      return (t = !0);
    }),
    r
  );
}
var _t = ht.create({
    config: gt,
    isInitialized: !1,
    resolve: null,
    reject: null,
    monaco: null,
  }),
  xe = Ze(_t, 2),
  X = xe[0],
  ie = xe[1];
function xt(e) {
  var t = St.config(e),
    r = t.monaco,
    n = Je(t, ['monaco']);
  ie(function (o) {
    return { config: _e(o.config, n), monaco: r };
  });
}
function Et() {
  var e = X(function (t) {
    var r = t.monaco,
      n = t.isInitialized,
      o = t.resolve;
    return { monaco: r, isInitialized: n, resolve: o };
  });
  if (!e.isInitialized) {
    if ((ie({ isInitialized: !0 }), e.monaco))
      return e.resolve(e.monaco), ce(se);
    if (window.monaco && window.monaco.editor)
      return Ee(window.monaco), e.resolve(window.monaco), ce(se);
    Ot(Mt, Ct)(Nt);
  }
  return ce(se);
}
function Mt(e) {
  return document.body.appendChild(e);
}
function Pt(e) {
  var t = document.createElement('script');
  return e && (t.src = e), t;
}
function Ct(e) {
  var t = X(function (n) {
      var o = n.config,
        a = n.reject;
      return { config: o, reject: a };
    }),
    r = Pt(''.concat(t.config.paths.vs, '/loader.js'));
  return (
    (r.onload = function () {
      return e();
    }),
    (r.onerror = t.reject),
    r
  );
}
function Nt() {
  var e = X(function (r) {
      var n = r.config,
        o = r.resolve,
        a = r.reject;
      return { config: n, resolve: o, reject: a };
    }),
    t = window.require;
  t.config(e.config),
    t(
      ['vs/editor/editor.main'],
      function (r) {
        Ee(r), e.resolve(r);
      },
      function (r) {
        e.reject(r);
      },
    );
}
function Ee(e) {
  X().monaco || ie({ monaco: e });
}
function Rt() {
  return X(function (e) {
    var t = e.monaco;
    return t;
  });
}
var se = new Promise(function (e, t) {
    return ie({ resolve: e, reject: t });
  }),
  Me = { config: xt, init: Et, __getMonacoInstance: Rt },
  Tt = {
    wrapper: { display: 'flex', position: 'relative', textAlign: 'initial' },
    fullWidth: { width: '100%' },
    hide: { display: 'none' },
  },
  ue = Tt,
  Lt = {
    container: {
      display: 'flex',
      height: '100%',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  $t = Lt;
function kt({ children: e }) {
  return D.createElement('div', { style: $t.container }, e);
}
var It = kt,
  At = It;
function Vt({
  width: e,
  height: t,
  isEditorReady: r,
  loading: n,
  _ref: o,
  className: a,
  wrapperProps: s,
}) {
  return D.createElement(
    'section',
    { style: { ...ue.wrapper, width: e, height: t }, ...s },
    !r && D.createElement(At, null, n),
    D.createElement('div', {
      ref: o,
      style: { ...ue.fullWidth, ...(!r && ue.hide) },
      className: a,
    }),
  );
}
var Bt = Vt,
  Pe = c.memo(Bt);
function Ht(e) {
  c.useEffect(e, []);
}
var Ce = Ht;
function Wt(e, t, r = !0) {
  let n = c.useRef(!0);
  c.useEffect(
    n.current || !r
      ? () => {
          n.current = !1;
        }
      : e,
    t,
  );
}
var N = Wt;
function K() {}
function z(e, t, r, n) {
  return qt(e, n) || zt(e, t, r, n);
}
function qt(e, t) {
  return e.editor.getModel(Ne(e, t));
}
function zt(e, t, r, n) {
  return e.editor.createModel(t, r, n ? Ne(e, n) : void 0);
}
function Ne(e, t) {
  return e.Uri.parse(t);
}
function Dt({
  original: e,
  modified: t,
  language: r,
  originalLanguage: n,
  modifiedLanguage: o,
  originalModelPath: a,
  modifiedModelPath: s,
  keepCurrentOriginalModel: d = !1,
  keepCurrentModifiedModel: h = !1,
  theme: y = 'light',
  loading: E = 'Loading...',
  options: l = {},
  height: m = '100%',
  width: b = '100%',
  className: M,
  wrapperProps: R = {},
  beforeMount: T = K,
  onMount: I = K,
}) {
  let [O, _] = c.useState(!1),
    [P, j] = c.useState(!0),
    w = c.useRef(null),
    S = c.useRef(null),
    U = c.useRef(null),
    x = c.useRef(I),
    p = c.useRef(T),
    B = c.useRef(!1);
  Ce(() => {
    let u = Me.init();
    return (
      u
        .then((g) => (S.current = g) && j(!1))
        .catch(
          (g) =>
            (g == null ? void 0 : g.type) !== 'cancelation' &&
            console.error('Monaco initialization: error:', g),
        ),
      () => (w.current ? F() : u.cancel())
    );
  }),
    N(
      () => {
        if (w.current && S.current) {
          let u = w.current.getOriginalEditor(),
            g = z(S.current, e || '', n || r || 'text', a || '');
          g !== u.getModel() && u.setModel(g);
        }
      },
      [a],
      O,
    ),
    N(
      () => {
        if (w.current && S.current) {
          let u = w.current.getModifiedEditor(),
            g = z(S.current, t || '', o || r || 'text', s || '');
          g !== u.getModel() && u.setModel(g);
        }
      },
      [s],
      O,
    ),
    N(
      () => {
        let u = w.current.getModifiedEditor();
        u.getOption(S.current.editor.EditorOption.readOnly)
          ? u.setValue(t || '')
          : t !== u.getValue() &&
            (u.executeEdits('', [
              {
                range: u.getModel().getFullModelRange(),
                text: t || '',
                forceMoveMarkers: !0,
              },
            ]),
            u.pushUndoStop());
      },
      [t],
      O,
    ),
    N(
      () => {
        var u, g;
        (g = (u = w.current) == null ? void 0 : u.getModel()) == null ||
          g.original.setValue(e || '');
      },
      [e],
      O,
    ),
    N(
      () => {
        let { original: u, modified: g } = w.current.getModel();
        S.current.editor.setModelLanguage(u, n || r || 'text'),
          S.current.editor.setModelLanguage(g, o || r || 'text');
      },
      [r, n, o],
      O,
    ),
    N(
      () => {
        var u;
        (u = S.current) == null || u.editor.setTheme(y);
      },
      [y],
      O,
    ),
    N(
      () => {
        var u;
        (u = w.current) == null || u.updateOptions(l);
      },
      [l],
      O,
    );
  let ee = c.useCallback(() => {
      var L;
      if (!S.current) return;
      p.current(S.current);
      let u = z(S.current, e || '', n || r || 'text', a || ''),
        g = z(S.current, t || '', o || r || 'text', s || '');
      (L = w.current) == null || L.setModel({ original: u, modified: g });
    }, [r, t, o, e, n, a, s]),
    te = c.useCallback(() => {
      var u;
      !B.current &&
        U.current &&
        ((w.current = S.current.editor.createDiffEditor(U.current, {
          automaticLayout: !0,
          ...l,
        })),
        ee(),
        (u = S.current) == null || u.editor.setTheme(y),
        _(!0),
        (B.current = !0));
    }, [l, y, ee]);
  c.useEffect(() => {
    O && x.current(w.current, S.current);
  }, [O]),
    c.useEffect(() => {
      !P && !O && te();
    }, [P, O, te]);
  function F() {
    var g, L, H, G;
    let u = (g = w.current) == null ? void 0 : g.getModel();
    d || (L = u == null ? void 0 : u.original) == null || L.dispose(),
      h || (H = u == null ? void 0 : u.modified) == null || H.dispose(),
      (G = w.current) == null || G.dispose();
  }
  return D.createElement(Pe, {
    width: b,
    height: m,
    isEditorReady: O,
    loading: E,
    _ref: U,
    className: M,
    wrapperProps: R,
  });
}
var Ut = Dt;
c.memo(Ut);
function Ft(e) {
  let t = c.useRef();
  return (
    c.useEffect(() => {
      t.current = e;
    }, [e]),
    t.current
  );
}
var Gt = Ft,
  ne = new Map();
function Jt({
  defaultValue: e,
  defaultLanguage: t,
  defaultPath: r,
  value: n,
  language: o,
  path: a,
  theme: s = 'light',
  line: d,
  loading: h = 'Loading...',
  options: y = {},
  overrideServices: E = {},
  saveViewState: l = !0,
  keepCurrentModel: m = !1,
  width: b = '100%',
  height: M = '100%',
  className: R,
  wrapperProps: T = {},
  beforeMount: I = K,
  onMount: O = K,
  onChange: _,
  onValidate: P = K,
}) {
  let [j, w] = c.useState(!1),
    [S, U] = c.useState(!0),
    x = c.useRef(null),
    p = c.useRef(null),
    B = c.useRef(null),
    ee = c.useRef(O),
    te = c.useRef(I),
    F = c.useRef(),
    u = c.useRef(n),
    g = Gt(a),
    L = c.useRef(!1),
    H = c.useRef(!1);
  Ce(() => {
    let f = Me.init();
    return (
      f
        .then((v) => (x.current = v) && U(!1))
        .catch(
          (v) =>
            (v == null ? void 0 : v.type) !== 'cancelation' &&
            console.error('Monaco initialization: error:', v),
        ),
      () => (p.current ? Te() : f.cancel())
    );
  }),
    N(
      () => {
        var v, C, J, W;
        let f = z(x.current, e || n || '', t || o || '', a || r || '');
        f !== ((v = p.current) == null ? void 0 : v.getModel()) &&
          (l && ne.set(g, (C = p.current) == null ? void 0 : C.saveViewState()),
          (J = p.current) == null || J.setModel(f),
          l && ((W = p.current) == null || W.restoreViewState(ne.get(a))));
      },
      [a],
      j,
    ),
    N(
      () => {
        var f;
        (f = p.current) == null || f.updateOptions(y);
      },
      [y],
      j,
    ),
    N(
      () => {
        !p.current ||
          n === void 0 ||
          (p.current.getOption(x.current.editor.EditorOption.readOnly)
            ? p.current.setValue(n)
            : n !== p.current.getValue() &&
              ((H.current = !0),
              p.current.executeEdits('', [
                {
                  range: p.current.getModel().getFullModelRange(),
                  text: n,
                  forceMoveMarkers: !0,
                },
              ]),
              p.current.pushUndoStop(),
              (H.current = !1)));
      },
      [n],
      j,
    ),
    N(
      () => {
        var v, C;
        let f = (v = p.current) == null ? void 0 : v.getModel();
        f && o && ((C = x.current) == null || C.editor.setModelLanguage(f, o));
      },
      [o],
      j,
    ),
    N(
      () => {
        var f;
        d !== void 0 && ((f = p.current) == null || f.revealLine(d));
      },
      [d],
      j,
    ),
    N(
      () => {
        var f;
        (f = x.current) == null || f.editor.setTheme(s);
      },
      [s],
      j,
    );
  let G = c.useCallback(() => {
    var f;
    if (!(!B.current || !x.current) && !L.current) {
      te.current(x.current);
      let v = a || r,
        C = z(x.current, n || e || '', t || o || '', v || '');
      (p.current =
        (f = x.current) == null
          ? void 0
          : f.editor.create(
              B.current,
              { model: C, automaticLayout: !0, ...y },
              E,
            )),
        l && p.current.restoreViewState(ne.get(v)),
        x.current.editor.setTheme(s),
        d !== void 0 && p.current.revealLine(d),
        w(!0),
        (L.current = !0);
    }
  }, [e, t, r, n, o, a, y, E, l, s, d]);
  c.useEffect(() => {
    j && ee.current(p.current, x.current);
  }, [j]),
    c.useEffect(() => {
      !S && !j && G();
    }, [S, j, G]),
    (u.current = n),
    c.useEffect(() => {
      var f, v;
      j &&
        _ &&
        ((f = F.current) == null || f.dispose(),
        (F.current =
          (v = p.current) == null
            ? void 0
            : v.onDidChangeModelContent((C) => {
                H.current || _(p.current.getValue(), C);
              })));
    }, [j, _]),
    c.useEffect(() => {
      if (j) {
        let f = x.current.editor.onDidChangeMarkers((v) => {
          var J;
          let C = (J = p.current.getModel()) == null ? void 0 : J.uri;
          if (C && v.find((W) => W.path === C.path)) {
            let W = x.current.editor.getModelMarkers({ resource: C });
            P == null || P(W);
          }
        });
        return () => {
          f == null || f.dispose();
        };
      }
      return () => {};
    }, [j, P]);
  function Te() {
    var f, v;
    (f = F.current) == null || f.dispose(),
      m
        ? l && ne.set(a, p.current.saveViewState())
        : (v = p.current.getModel()) == null || v.dispose(),
      p.current.dispose();
  }
  return D.createElement(Pe, {
    width: b,
    height: M,
    isEditorReady: j,
    loading: h,
    _ref: B,
    className: R,
    wrapperProps: T,
  });
}
var Zt = Jt,
  le = c.memo(Zt);
const Kt = '_tabsWrapper_1g7tz_1',
  Yt = '_tabsNavigationSection_1g7tz_9',
  Qt = '_tabNav_1g7tz_15',
  Xt = '_active_1g7tz_30',
  er = '_tabContentWrapper_1g7tz_35',
  tr = '_tabContent_1g7tz_35',
  $ = {
    tabsWrapper: Kt,
    tabsNavigationSection: Yt,
    tabNav: Qt,
    active: Xt,
    tabContentWrapper: er,
    tabContent: tr,
  };
function be(e) {
  return i.jsx('div', { ...e });
}
function rr({ defaultSelect: e = 0, children: t }) {
  const { t: r } = Q(),
    [n, o] = c.useState(e),
    a = (s) => o(s);
  return i.jsxs('div', {
    className: $.tabsWrapper,
    children: [
      i.jsx('div', {
        className: $.tabsNavigationSection,
        children: c.Children.map(t, ({ props: { index: s, label: d } }) =>
          i.jsx('button', {
            type: 'button',
            onClick: () => a(s),
            className: n === s ? `${$.tabNav} ${$.active}` : $.tabNav,
            children: r(d),
          }),
        ),
      }),
      i.jsx('div', {
        className: $.tabContentWrapper,
        children: c.Children.map(t, ({ props: { index: s, ...d } }) =>
          i.jsx('div', {
            ...d,
            className: `${$.tabContent} ${n === s ? $.active : ''}`,
          }),
        ),
      }),
    ],
  });
}
function nr(e) {
  return Se({
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
  })(e);
}
const or = '_goTrashIcon_1mid8_1',
  ar = '_inputSection_1mid8_6',
  ir = '_inputStyle_1mid8_11',
  cr = '_headersList_1mid8_25',
  sr = '_headersWrapper_1mid8_31',
  ur = '_tableHeaders_1mid8_42',
  V = {
    goTrashIcon: or,
    inputSection: ar,
    inputStyle: ir,
    headersList: cr,
    headersWrapper: sr,
    tableHeaders: ur,
  };
function lr(e) {
  return Object.entries(Object.fromEntries(new URLSearchParams(e))).map((t) =>
    t.reduce(
      (r, n, o) => (
        o === 0 && (r['header-key'] = n), o === 1 && (r['header-value'] = n), r
      ),
      {},
    ),
  );
}
function dr({ outerSetHeader: e }) {
  const t = de(),
    r = () => lr(t.search),
    { t: n } = Q(),
    [, o] = ke(),
    [a, s] = c.useState(r),
    d = () => {
      s([...a, { 'header-key': '', 'header-value': '' }]);
    },
    h = (l) =>
      l.reduce((b, M) => {
        if (M['header-key']) {
          const R = M['header-key'];
          b[R] = M['header-value'];
        }
        return b;
      }, {}),
    y = (l, m) => {
      const { name: b, value: M } = m.currentTarget,
        R = a.map((T, I) => (I === l ? { ...T, [b]: M } : T));
      s(R);
    },
    E = (l) => {
      s(a.filter((m, b) => b !== l));
    };
  return (
    c.useEffect(() => {
      e(JSON.stringify(h(a))), o(JSON.parse(JSON.stringify(h(a))));
    }, [a, e, o, t.search]),
    i.jsxs('div', {
      className: V.headersWrapper,
      children: [
        i.jsx(je, { btnType: 'button', onClick: d, children: n('AddHeader') }),
        a.length > 0 &&
          i.jsxs('div', {
            className: V.tableHeaders,
            children: [
              i.jsx('p', { children: n('Key') }),
              i.jsx('p', { children: n('Value') }),
            ],
          }),
        i.jsx('div', {
          className: V.headersList,
          children: a.map((l, m) =>
            i.jsxs(
              'div',
              {
                className: V.inputSection,
                children: [
                  i.jsx('input', {
                    className: V.inputStyle,
                    type: 'text',
                    name: 'header-key',
                    value: l['header-key'],
                    onChange: (b) => {
                      y(m, b);
                    },
                  }),
                  i.jsx('input', {
                    className: V.inputStyle,
                    type: 'text',
                    name: 'header-value',
                    value: l['header-value'],
                    onChange: (b) => {
                      y(m, b);
                    },
                  }),
                  i.jsx('button', {
                    type: 'button',
                    className: V.goTrashIcon,
                    onClick: () => {
                      E(m);
                    },
                    children: i.jsx(nr, { color: '#e9c2c5' }),
                  }),
                ],
              },
              `index-id-${m}`,
            ),
          ),
        }),
      ],
    })
  );
}
function Re(e) {
  return e
    ? e
        .split('/')
        .reduce((t, r, n) => ({ ...t, [n === 0 ? 'url' : 'body']: r }), {})
    : {};
}
const fr = '_editorWrapper_1sqom_1',
  pr = { editorWrapper: fr };
function hr({ setBody: e, setHeaders: t, params: r }) {
  const n = ye(),
    o = de(),
    a = c.useRef(null),
    s = (l) => {
      l && e(l);
    },
    d = () => (a.current ? a.current.getValue() : ''),
    h = (l) => {
      a.current && a.current.setValue(l);
    },
    y = (l) => {
      var m, b;
      (a.current = l),
        l.setValue(
          ((m = r['*']) == null ? void 0 : m.split('/')[1]) !== void 0
            ? oe((b = r['*']) == null ? void 0 : b.split('/')[1])
            : '',
        );
    };
  c.useEffect(() => {
    var l, m, b, M;
    if (r['*']) {
      r['*'].split('/').length > 2 && n('/errorPage');
      try {
        e(
          ((l = r['*']) == null ? void 0 : l.split('/')[1]) !== void 0
            ? oe((m = r['*']) == null ? void 0 : m.split('/')[1])
            : '',
        ),
          h(
            ((b = r['*']) == null ? void 0 : b.split('/')[1]) !== void 0
              ? oe((M = r['*']) == null ? void 0 : M.split('/')[1])
              : '',
          );
      } catch (R) {
        R instanceof Error && n('/error');
      }
    }
  }, [r, n, e]);
  const { t: E } = Q();
  return i.jsxs(rr, {
    defaultSelect: 0,
    children: [
      i.jsx(be, {
        label: E('Body'),
        index: 0,
        children: i.jsx('div', {
          className: pr.editorWrapper,
          onBlur: () => {
            const l = Re(r['*']);
            l.body = Oe(d());
            const m = Object.keys(l).includes('url')
              ? Object.values(l).join('/')
              : Object.values(Object.assign({ url: '' }, l)).join('/');
            n(`/REST/${r.method}/${m}${o.search}`);
          },
          children: i.jsx(le, {
            theme: 'vs-dark',
            loading: 'Loading...',
            height: '30vh',
            defaultLanguage: 'json',
            onChange: s,
            onMount: y,
          }),
        }),
      }),
      i.jsx(be, {
        label: E('Headers'),
        index: 1,
        children: i.jsx(dr, { outerSetHeader: t }),
      }),
    ],
  });
}
function gr(e) {
  return Se({
    tag: 'svg',
    attr: { viewBox: '0 0 1024 1024' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M917.7 148.8l-42.4-42.4c-1.6-1.6-3.6-2.3-5.7-2.3s-4.1.8-5.7 2.3l-76.1 76.1a199.27 199.27 0 0 0-112.1-34.3c-51.2 0-102.4 19.5-141.5 58.6L432.3 308.7a8.03 8.03 0 0 0 0 11.3L704 591.7c1.6 1.6 3.6 2.3 5.7 2.3 2 0 4.1-.8 5.7-2.3l101.9-101.9c68.9-69 77-175.7 24.3-253.5l76.1-76.1c3.1-3.2 3.1-8.3 0-11.4zM769.1 441.7l-59.4 59.4-186.8-186.8 59.4-59.4c24.9-24.9 58.1-38.7 93.4-38.7 35.3 0 68.4 13.7 93.4 38.7 24.9 24.9 38.7 58.1 38.7 93.4 0 35.3-13.8 68.4-38.7 93.4zm-190.2 105a8.03 8.03 0 0 0-11.3 0L501 613.3 410.7 523l66.7-66.7c3.1-3.1 3.1-8.2 0-11.3L441 408.6a8.03 8.03 0 0 0-11.3 0L363 475.3l-43-43a7.85 7.85 0 0 0-5.7-2.3c-2 0-4.1.8-5.7 2.3L206.8 534.2c-68.9 69-77 175.7-24.3 253.5l-76.1 76.1a8.03 8.03 0 0 0 0 11.3l42.4 42.4c1.6 1.6 3.6 2.3 5.7 2.3s4.1-.8 5.7-2.3l76.1-76.1c33.7 22.9 72.9 34.3 112.1 34.3 51.2 0 102.4-19.5 141.5-58.6l101.9-101.9c3.1-3.1 3.1-8.2 0-11.3l-43-43 66.7-66.7c3.1-3.1 3.1-8.2 0-11.3l-36.6-36.2zM441.7 769.1a131.32 131.32 0 0 1-93.4 38.7c-35.3 0-68.4-13.7-93.4-38.7a131.32 131.32 0 0 1-38.7-93.4c0-35.3 13.7-68.4 38.7-93.4l59.4-59.4 186.8 186.8-59.4 59.4z',
        },
        child: [],
      },
    ],
  })(e);
}
const mr = '_response_1rbvd_1',
  vr = '_responseCode_1rbvd_18',
  br = '_responseBlock_1rbvd_24',
  yr = '_responseSummary_1rbvd_30',
  jr = '_noResponse_1rbvd_58',
  Sr = '_responseStatusOk_1rbvd_64',
  Or = '_responseStatusError_1rbvd_68',
  q = {
    response: mr,
    responseCode: vr,
    responseBlock: br,
    responseSummary: yr,
    noResponse: jr,
    responseStatusOk: Sr,
    responseStatusError: Or,
  };
function wr({ responseStatus: e, response: t, error: r }) {
  const { t: n } = Q();
  return i.jsxs('details', {
    className: q.responseBlock,
    children: [
      i.jsxs('summary', {
        className: q.responseSummary,
        children: [
          i.jsxs('span', { children: [n('Response'), ' '] }),
          e !== null &&
            i.jsxs('span', {
              className: `${e < 300 ? q.responseStatusOk : q.responseStatusError}`,
              children: [n('status'), ': ', e],
            }),
        ],
      }),
      i.jsxs('div', {
        className: q.response,
        children: [
          e === null &&
            !r &&
            i.jsxs(i.Fragment, {
              children: [
                i.jsx(gr, { color: '#e9c2c5', size: '8rem' }),
                i.jsx('h2', {
                  className: q.noResponse,
                  children: n('NoResponse'),
                }),
              ],
            }),
          e !== null &&
            i.jsxs('div', {
              children: [
                t &&
                  i.jsxs('div', {
                    children: [
                      ' ',
                      i.jsx(le, {
                        theme: 'vs-dark',
                        loading: 'Loading...',
                        height: '50vh',
                        defaultLanguage: 'json',
                        defaultValue: t,
                        options: { readOnly: !0 },
                      }),
                    ],
                  }),
                r &&
                  i.jsxs('div', {
                    children: [
                      i.jsx('h3', { children: 'Error:' }),
                      i.jsx(le, {
                        theme: 'vs-dark',
                        loading: 'Loading...',
                        height: '50vh',
                        defaultLanguage: 'json',
                        defaultValue: r,
                        options: { readOnly: !0 },
                      }),
                    ],
                  }),
              ],
            }),
        ],
      }),
    ],
  });
}
function Nr() {
  var O;
  const e = ye(),
    t = Le(),
    r = Ie(),
    n = de(),
    [o, a] = c.useState(t.method || 'GET'),
    [s, d] = c.useState(
      ((O = t['*']) == null ? void 0 : O.split('/')[0]) || '',
    ),
    [h, y] = c.useState(''),
    [E, l] = c.useState(''),
    { t: m } = Q(),
    b = $e(),
    M = (r == null ? void 0 : r.data) || '',
    R = (r == null ? void 0 : r.status) || null,
    T = (r == null ? void 0 : r.error) || null,
    I = async () => {
      const _ = new Date().toISOString(),
        P = h ? JSON.parse(h) : {},
        j = { url: s, method: o, headers: P, body: o !== 'GET' ? E : void 0 },
        S = { urlPage: n.pathname + n.search, requestData: j, data: _ };
      b(Ve([S]));
    };
  return (
    c.useEffect(() => {
      var _;
      if ((a(t.method), t['*'])) {
        t['*'].split('/').length > 2 && e('/errorPage');
        try {
          d(oe((_ = t['*']) == null ? void 0 : _.split('/')[0]));
        } catch (P) {
          P instanceof Error && e('/errorPage');
        }
      }
    }, [t.method, t, e]),
    i.jsxs('div', {
      className: A.container,
      children: [
        i.jsxs('div', {
          className: A.RestBlock,
          children: [
            i.jsx('h2', { children: m('RESTClient') }),
            i.jsx('div', {
              className: A.methodSection,
              children: i.jsxs(Ae, {
                className: A.formAction,
                method: 'post',
                action: `/REST/${o}/${t['*']}${n.search}`,
                children: [
                  i.jsxs('div', {
                    className: A.methodBlock,
                    children: [
                      i.jsxs('select', {
                        name: 'method',
                        className: A.customSelect,
                        value: o,
                        onChange: (_) => {
                          e(`/REST/${_.target.value}/${t['*']}${n.search}`),
                            a(_.target.value);
                        },
                        children: [
                          i.jsx('option', { value: 'GET', children: 'GET' }),
                          i.jsx('option', { value: 'POST', children: 'POST' }),
                          i.jsx('option', { value: 'PUT', children: 'PUT' }),
                          i.jsx('option', {
                            value: 'DELETE',
                            children: 'DELETE',
                          }),
                        ],
                      }),
                      i.jsx('input', {
                        className: A.inputUrl,
                        type: 'text',
                        name: 'url',
                        value: s,
                        onChange: (_) => {
                          const P = Re(t['*']);
                          P.url = Oe(_.target.value);
                          const j = Object.values(P).join('/');
                          e(`/REST/${t.method}/${j}${n.search}`),
                            d(_.target.value);
                        },
                      }),
                    ],
                  }),
                  i.jsx('input', { type: 'hidden', name: 'headers', value: h }),
                  i.jsx('input', { type: 'hidden', name: 'body', value: E }),
                  i.jsx(je, {
                    btnType: 'submit',
                    onClick: I,
                    children: m('Send'),
                  }),
                ],
              }),
            }),
            i.jsx(hr, { params: t || {}, setHeaders: y, setBody: l }),
          ],
        }),
        i.jsx(wr, { responseStatus: R, response: M, error: T }),
      ],
    })
  );
}
export { Nr as default };
