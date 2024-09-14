import {
  r as T,
  w as qa,
  n as $u,
  o as Ku,
  x as ba,
  y as ec,
  N as br,
  z as Jt,
  q as tc,
  B as el,
  u as tl,
  d as Yu,
  C as Gl,
  F as nc,
  G as rc,
  H as Wi,
  I as lc,
  J as Io,
  v as ic,
} from './index-wWMGXTih.js';
function oc(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const l in r)
        if (l !== 'default' && !(l in e)) {
          const i = Object.getOwnPropertyDescriptor(r, l);
          i &&
            Object.defineProperty(
              e,
              l,
              i.get ? i : { enumerable: !0, get: () => r[l] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  );
}
var Xu = { exports: {} },
  ye = {},
  Gu = { exports: {} },
  Zu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(x, L) {
    var z = x.length;
    x.push(L);
    e: for (; 0 < z; ) {
      var W = (z - 1) >>> 1,
        X = x[W];
      if (0 < l(X, L)) (x[W] = L), (x[z] = X), (z = W);
      else break e;
    }
  }
  function n(x) {
    return x.length === 0 ? null : x[0];
  }
  function r(x) {
    if (x.length === 0) return null;
    var L = x[0],
      z = x.pop();
    if (z !== L) {
      x[0] = z;
      e: for (var W = 0, X = x.length, qn = X >>> 1; W < qn; ) {
        var vt = 2 * (W + 1) - 1,
          kl = x[vt],
          gt = vt + 1,
          bn = x[gt];
        if (0 > l(kl, z))
          gt < X && 0 > l(bn, kl)
            ? ((x[W] = bn), (x[gt] = z), (W = gt))
            : ((x[W] = kl), (x[vt] = z), (W = vt));
        else if (gt < X && 0 > l(bn, z)) (x[W] = bn), (x[gt] = z), (W = gt);
        else break e;
      }
    }
    return L;
  }
  function l(x, L) {
    var z = x.sortIndex - L.sortIndex;
    return z !== 0 ? z : x.id - L.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      u = o.now();
    e.unstable_now = function () {
      return o.now() - u;
    };
  }
  var s = [],
    c = [],
    m = 1,
    h = null,
    p = 3,
    w = !1,
    y = !1,
    S = !1,
    R = typeof setTimeout == 'function' ? setTimeout : null,
    d = typeof clearTimeout == 'function' ? clearTimeout : null,
    a = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function f(x) {
    for (var L = n(c); L !== null; ) {
      if (L.callback === null) r(c);
      else if (L.startTime <= x)
        r(c), (L.sortIndex = L.expirationTime), t(s, L);
      else break;
      L = n(c);
    }
  }
  function v(x) {
    if (((S = !1), f(x), !y))
      if (n(s) !== null) (y = !0), wl(E);
      else {
        var L = n(c);
        L !== null && Sl(v, L.startTime - x);
      }
  }
  function E(x, L) {
    (y = !1), S && ((S = !1), d(k), (k = -1)), (w = !0);
    var z = p;
    try {
      for (
        f(L), h = n(s);
        h !== null && (!(h.expirationTime > L) || (x && !ee()));

      ) {
        var W = h.callback;
        if (typeof W == 'function') {
          (h.callback = null), (p = h.priorityLevel);
          var X = W(h.expirationTime <= L);
          (L = e.unstable_now()),
            typeof X == 'function' ? (h.callback = X) : h === n(s) && r(s),
            f(L);
        } else r(s);
        h = n(s);
      }
      if (h !== null) var qn = !0;
      else {
        var vt = n(c);
        vt !== null && Sl(v, vt.startTime - L), (qn = !1);
      }
      return qn;
    } finally {
      (h = null), (p = z), (w = !1);
    }
  }
  var _ = !1,
    P = null,
    k = -1,
    D = 5,
    N = -1;
  function ee() {
    return !(e.unstable_now() - N < D);
  }
  function pe() {
    if (P !== null) {
      var x = e.unstable_now();
      N = x;
      var L = !0;
      try {
        L = P(!0, x);
      } finally {
        L ? ht() : ((_ = !1), (P = null));
      }
    } else _ = !1;
  }
  var ht;
  if (typeof a == 'function')
    ht = function () {
      a(pe);
    };
  else if (typeof MessageChannel < 'u') {
    var De = new MessageChannel(),
      yl = De.port2;
    (De.port1.onmessage = pe),
      (ht = function () {
        yl.postMessage(null);
      });
  } else
    ht = function () {
      R(pe, 0);
    };
  function wl(x) {
    (P = x), _ || ((_ = !0), ht());
  }
  function Sl(x, L) {
    k = R(function () {
      x(e.unstable_now());
    }, L);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (x) {
      x.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || w || ((y = !0), wl(E));
    }),
    (e.unstable_forceFrameRate = function (x) {
      0 > x || 125 < x
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
          )
        : (D = 0 < x ? Math.floor(1e3 / x) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (x) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = p;
      }
      var z = p;
      p = L;
      try {
        return x();
      } finally {
        p = z;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (x, L) {
      switch (x) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          x = 3;
      }
      var z = p;
      p = x;
      try {
        return L();
      } finally {
        p = z;
      }
    }),
    (e.unstable_scheduleCallback = function (x, L, z) {
      var W = e.unstable_now();
      switch (
        (typeof z == 'object' && z !== null
          ? ((z = z.delay), (z = typeof z == 'number' && 0 < z ? W + z : W))
          : (z = W),
        x)
      ) {
        case 1:
          var X = -1;
          break;
        case 2:
          X = 250;
          break;
        case 5:
          X = 1073741823;
          break;
        case 4:
          X = 1e4;
          break;
        default:
          X = 5e3;
      }
      return (
        (X = z + X),
        (x = {
          id: m++,
          callback: L,
          priorityLevel: x,
          startTime: z,
          expirationTime: X,
          sortIndex: -1,
        }),
        z > W
          ? ((x.sortIndex = z),
            t(c, x),
            n(s) === null &&
              x === n(c) &&
              (S ? (d(k), (k = -1)) : (S = !0), Sl(v, z - W)))
          : ((x.sortIndex = X), t(s, x), y || w || ((y = !0), wl(E))),
        x
      );
    }),
    (e.unstable_shouldYield = ee),
    (e.unstable_wrapCallback = function (x) {
      var L = p;
      return function () {
        var z = p;
        p = L;
        try {
          return x.apply(this, arguments);
        } finally {
          p = z;
        }
      };
    });
})(Zu);
Gu.exports = Zu;
var uc = Gu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sc = T,
  ge = uc;
function g(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var Ju = new Set(),
  Rn = {};
function zt(e, t) {
  qt(e, t), qt(e + 'Capture', t);
}
function qt(e, t) {
  for (Rn[e] = t, e = 0; e < t.length; e++) Ju.add(t[e]);
}
var Qe = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Zl = Object.prototype.hasOwnProperty,
  ac =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Uo = {},
  jo = {};
function cc(e) {
  return Zl.call(jo, e)
    ? !0
    : Zl.call(Uo, e)
      ? !1
      : ac.test(e)
        ? (jo[e] = !0)
        : ((Uo[e] = !0), !1);
}
function fc(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function dc(e, t, n, r) {
  if (t === null || typeof t > 'u' || fc(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ue(e, t, n, r, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var b = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    b[e] = new ue(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  b[t] = new ue(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  b[e] = new ue(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  b[e] = new ue(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    b[e] = new ue(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  b[e] = new ue(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  b[e] = new ue(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  b[e] = new ue(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  b[e] = new ue(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Qi = /[\-:]([a-z])/g;
function $i(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Qi, $i);
    b[t] = new ue(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Qi, $i);
    b[t] = new ue(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Qi, $i);
  b[t] = new ue(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  b[e] = new ue(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
b.xlinkHref = new ue(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1,
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  b[e] = new ue(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ki(e, t, n, r) {
  var l = b.hasOwnProperty(t) ? b[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (dc(t, n, l, r) && (n = null),
    r || l === null
      ? cc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : l.mustUseProperty
        ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : '') : n)
        : ((t = l.attributeName),
          (r = l.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((l = l.type),
              (n = l === 3 || (l === 4 && n === !0) ? '' : '' + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Xe = sc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  er = Symbol.for('react.element'),
  Dt = Symbol.for('react.portal'),
  Ft = Symbol.for('react.fragment'),
  Yi = Symbol.for('react.strict_mode'),
  Jl = Symbol.for('react.profiler'),
  qu = Symbol.for('react.provider'),
  bu = Symbol.for('react.context'),
  Xi = Symbol.for('react.forward_ref'),
  ql = Symbol.for('react.suspense'),
  bl = Symbol.for('react.suspense_list'),
  Gi = Symbol.for('react.memo'),
  Ze = Symbol.for('react.lazy'),
  es = Symbol.for('react.offscreen'),
  Ao = Symbol.iterator;
function an(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Ao && e[Ao]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var B = Object.assign,
  El;
function yn(e) {
  if (El === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      El = (t && t[1]) || '';
    }
  return (
    `
` +
    El +
    e
  );
}
var Cl = !1;
function xl(e, t) {
  if (!e || Cl) return '';
  Cl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == 'string') {
      for (
        var l = c.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          u = i.length - 1;
        1 <= o && 0 <= u && l[o] !== i[u];

      )
        u--;
      for (; 1 <= o && 0 <= u; o--, u--)
        if (l[o] !== i[u]) {
          if (o !== 1 || u !== 1)
            do
              if ((o--, u--, 0 > u || l[o] !== i[u])) {
                var s =
                  `
` + l[o].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    s.includes('<anonymous>') &&
                    (s = s.replace('<anonymous>', e.displayName)),
                  s
                );
              }
            while (1 <= o && 0 <= u);
          break;
        }
    }
  } finally {
    (Cl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? yn(e) : '';
}
function pc(e) {
  switch (e.tag) {
    case 5:
      return yn(e.type);
    case 16:
      return yn('Lazy');
    case 13:
      return yn('Suspense');
    case 19:
      return yn('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = xl(e.type, !1)), e;
    case 11:
      return (e = xl(e.type.render, !1)), e;
    case 1:
      return (e = xl(e.type, !0)), e;
    default:
      return '';
  }
}
function ei(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case Ft:
      return 'Fragment';
    case Dt:
      return 'Portal';
    case Jl:
      return 'Profiler';
    case Yi:
      return 'StrictMode';
    case ql:
      return 'Suspense';
    case bl:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case bu:
        return (e.displayName || 'Context') + '.Consumer';
      case qu:
        return (e._context.displayName || 'Context') + '.Provider';
      case Xi:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case Gi:
        return (
          (t = e.displayName || null), t !== null ? t : ei(e.type) || 'Memo'
        );
      case Ze:
        (t = e._payload), (e = e._init);
        try {
          return ei(e(t));
        } catch {}
    }
  return null;
}
function mc(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return ei(t);
    case 8:
      return t === Yi ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function ct(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function ts(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function hc(e) {
  var t = ts(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = '' + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = '' + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function tr(e) {
  e._valueTracker || (e._valueTracker = hc(e));
}
function ns(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = ts(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Tr(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ti(e, t) {
  var n = t.checked;
  return B({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Vo(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = ct(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    });
}
function rs(e, t) {
  (t = t.checked), t != null && Ki(e, 'checked', t, !1);
}
function ni(e, t) {
  rs(e, t);
  var n = ct(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? ri(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && ri(e, t.type, ct(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Bo(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function ri(e, t, n) {
  (t !== 'number' || Tr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var wn = Array.isArray;
function $t(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + ct(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function li(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(g(91));
  return B({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function Ho(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(g(92));
      if (wn(n)) {
        if (1 < n.length) throw Error(g(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: ct(n) };
}
function ls(e, t) {
  var n = ct(t.value),
    r = ct(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function Wo(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function is(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function ii(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? is(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e;
}
var nr,
  os = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t;
    else {
      for (
        nr = nr || document.createElement('div'),
          nr.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = nr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Mn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var En = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  vc = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(En).forEach(function (e) {
  vc.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (En[t] = En[e]);
  });
});
function us(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (En.hasOwnProperty(e) && En[e])
      ? ('' + t).trim()
      : t + 'px';
}
function ss(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        l = us(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var gc = B(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function oi(e, t) {
  if (t) {
    if (gc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(g(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(g(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(g(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(g(62));
  }
}
function ui(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var si = null;
function Zi(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ai = null,
  Kt = null,
  Yt = null;
function Qo(e) {
  if ((e = Zn(e))) {
    if (typeof ai != 'function') throw Error(g(280));
    var t = e.stateNode;
    t && ((t = ol(t)), ai(e.stateNode, e.type, t));
  }
}
function as(e) {
  Kt ? (Yt ? Yt.push(e) : (Yt = [e])) : (Kt = e);
}
function cs() {
  if (Kt) {
    var e = Kt,
      t = Yt;
    if (((Yt = Kt = null), Qo(e), t)) for (e = 0; e < t.length; e++) Qo(t[e]);
  }
}
function fs(e, t) {
  return e(t);
}
function ds() {}
var _l = !1;
function ps(e, t, n) {
  if (_l) return e(t, n);
  _l = !0;
  try {
    return fs(e, t, n);
  } finally {
    (_l = !1), (Kt !== null || Yt !== null) && (ds(), cs());
  }
}
function Dn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ol(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(g(231, t, typeof n));
  return n;
}
var ci = !1;
if (Qe)
  try {
    var cn = {};
    Object.defineProperty(cn, 'passive', {
      get: function () {
        ci = !0;
      },
    }),
      window.addEventListener('test', cn, cn),
      window.removeEventListener('test', cn, cn);
  } catch {
    ci = !1;
  }
function yc(e, t, n, r, l, i, o, u, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (m) {
    this.onError(m);
  }
}
var Cn = !1,
  Lr = null,
  zr = !1,
  fi = null,
  wc = {
    onError: function (e) {
      (Cn = !0), (Lr = e);
    },
  };
function Sc(e, t, n, r, l, i, o, u, s) {
  (Cn = !1), (Lr = null), yc.apply(wc, arguments);
}
function kc(e, t, n, r, l, i, o, u, s) {
  if ((Sc.apply(this, arguments), Cn)) {
    if (Cn) {
      var c = Lr;
      (Cn = !1), (Lr = null);
    } else throw Error(g(198));
    zr || ((zr = !0), (fi = c));
  }
}
function Rt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function ms(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function $o(e) {
  if (Rt(e) !== e) throw Error(g(188));
}
function Ec(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Rt(e)), t === null)) throw Error(g(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return $o(l), e;
        if (i === r) return $o(l), t;
        i = i.sibling;
      }
      throw Error(g(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var o = !1, u = l.child; u; ) {
        if (u === n) {
          (o = !0), (n = l), (r = i);
          break;
        }
        if (u === r) {
          (o = !0), (r = l), (n = i);
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = i.child; u; ) {
          if (u === n) {
            (o = !0), (n = i), (r = l);
            break;
          }
          if (u === r) {
            (o = !0), (r = i), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!o) throw Error(g(189));
      }
    }
    if (n.alternate !== r) throw Error(g(190));
  }
  if (n.tag !== 3) throw Error(g(188));
  return n.stateNode.current === n ? e : t;
}
function hs(e) {
  return (e = Ec(e)), e !== null ? vs(e) : null;
}
function vs(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = vs(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var gs = ge.unstable_scheduleCallback,
  Ko = ge.unstable_cancelCallback,
  Cc = ge.unstable_shouldYield,
  xc = ge.unstable_requestPaint,
  Q = ge.unstable_now,
  _c = ge.unstable_getCurrentPriorityLevel,
  Ji = ge.unstable_ImmediatePriority,
  ys = ge.unstable_UserBlockingPriority,
  Rr = ge.unstable_NormalPriority,
  Pc = ge.unstable_LowPriority,
  ws = ge.unstable_IdlePriority,
  nl = null,
  Ue = null;
function Nc(e) {
  if (Ue && typeof Ue.onCommitFiberRoot == 'function')
    try {
      Ue.onCommitFiberRoot(nl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var ze = Math.clz32 ? Math.clz32 : zc,
  Tc = Math.log,
  Lc = Math.LN2;
function zc(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Tc(e) / Lc) | 0)) | 0;
}
var rr = 64,
  lr = 4194304;
function Sn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Mr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? (r = Sn(u)) : ((i &= o), i !== 0 && (r = Sn(i)));
  } else (o = n & ~l), o !== 0 ? (r = Sn(o)) : i !== 0 && (r = Sn(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - ze(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Rc(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Mc(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - ze(i),
      u = 1 << o,
      s = l[o];
    s === -1
      ? (!(u & n) || u & r) && (l[o] = Rc(u, t))
      : s <= t && (e.expiredLanes |= u),
      (i &= ~u);
  }
}
function di(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Ss() {
  var e = rr;
  return (rr <<= 1), !(rr & 4194240) && (rr = 64), e;
}
function Pl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Xn(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - ze(t)),
    (e[t] = n);
}
function Dc(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - ze(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function qi(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - ze(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var F = 0;
function ks(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Es,
  bi,
  Cs,
  xs,
  _s,
  pi = !1,
  ir = [],
  nt = null,
  rt = null,
  lt = null,
  Fn = new Map(),
  On = new Map(),
  qe = [],
  Fc =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' ',
    );
function Yo(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      nt = null;
      break;
    case 'dragenter':
    case 'dragleave':
      rt = null;
      break;
    case 'mouseover':
    case 'mouseout':
      lt = null;
      break;
    case 'pointerover':
    case 'pointerout':
      Fn.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      On.delete(t.pointerId);
  }
}
function fn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = Zn(t)), t !== null && bi(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Oc(e, t, n, r, l) {
  switch (t) {
    case 'focusin':
      return (nt = fn(nt, e, t, n, r, l)), !0;
    case 'dragenter':
      return (rt = fn(rt, e, t, n, r, l)), !0;
    case 'mouseover':
      return (lt = fn(lt, e, t, n, r, l)), !0;
    case 'pointerover':
      var i = l.pointerId;
      return Fn.set(i, fn(Fn.get(i) || null, e, t, n, r, l)), !0;
    case 'gotpointercapture':
      return (
        (i = l.pointerId), On.set(i, fn(On.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Ps(e) {
  var t = St(e.target);
  if (t !== null) {
    var n = Rt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = ms(n)), t !== null)) {
          (e.blockedOn = t),
            _s(e.priority, function () {
              Cs(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function gr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = mi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (si = r), n.target.dispatchEvent(r), (si = null);
    } else return (t = Zn(n)), t !== null && bi(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Xo(e, t, n) {
  gr(e) && n.delete(t);
}
function Ic() {
  (pi = !1),
    nt !== null && gr(nt) && (nt = null),
    rt !== null && gr(rt) && (rt = null),
    lt !== null && gr(lt) && (lt = null),
    Fn.forEach(Xo),
    On.forEach(Xo);
}
function dn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    pi ||
      ((pi = !0),
      ge.unstable_scheduleCallback(ge.unstable_NormalPriority, Ic)));
}
function In(e) {
  function t(l) {
    return dn(l, e);
  }
  if (0 < ir.length) {
    dn(ir[0], e);
    for (var n = 1; n < ir.length; n++) {
      var r = ir[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    nt !== null && dn(nt, e),
      rt !== null && dn(rt, e),
      lt !== null && dn(lt, e),
      Fn.forEach(t),
      On.forEach(t),
      n = 0;
    n < qe.length;
    n++
  )
    (r = qe[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < qe.length && ((n = qe[0]), n.blockedOn === null); )
    Ps(n), n.blockedOn === null && qe.shift();
}
var Xt = Xe.ReactCurrentBatchConfig,
  Dr = !0;
function Uc(e, t, n, r) {
  var l = F,
    i = Xt.transition;
  Xt.transition = null;
  try {
    (F = 1), eo(e, t, n, r);
  } finally {
    (F = l), (Xt.transition = i);
  }
}
function jc(e, t, n, r) {
  var l = F,
    i = Xt.transition;
  Xt.transition = null;
  try {
    (F = 4), eo(e, t, n, r);
  } finally {
    (F = l), (Xt.transition = i);
  }
}
function eo(e, t, n, r) {
  if (Dr) {
    var l = mi(e, t, n, r);
    if (l === null) Il(e, t, r, Fr, n), Yo(e, r);
    else if (Oc(l, e, t, n, r)) r.stopPropagation();
    else if ((Yo(e, r), t & 4 && -1 < Fc.indexOf(e))) {
      for (; l !== null; ) {
        var i = Zn(l);
        if (
          (i !== null && Es(i),
          (i = mi(e, t, n, r)),
          i === null && Il(e, t, r, Fr, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Il(e, t, r, null, n);
  }
}
var Fr = null;
function mi(e, t, n, r) {
  if (((Fr = null), (e = Zi(r)), (e = St(e)), e !== null))
    if (((t = Rt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = ms(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Fr = e), null;
}
function Ns(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (_c()) {
        case Ji:
          return 1;
        case ys:
          return 4;
        case Rr:
        case Pc:
          return 16;
        case ws:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var et = null,
  to = null,
  yr = null;
function Ts() {
  if (yr) return yr;
  var e,
    t = to,
    n = t.length,
    r,
    l = 'value' in et ? et.value : et.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (yr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function wr(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function or() {
  return !0;
}
function Go() {
  return !1;
}
function we(e) {
  function t(n, r, l, i, o) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? or
        : Go),
      (this.isPropagationStopped = Go),
      this
    );
  }
  return (
    B(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = or));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = or));
      },
      persist: function () {},
      isPersistent: or,
    }),
    t
  );
}
var un = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  no = we(un),
  Gn = B({}, un, { view: 0, detail: 0 }),
  Ac = we(Gn),
  Nl,
  Tl,
  pn,
  rl = B({}, Gn, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ro,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== pn &&
            (pn && e.type === 'mousemove'
              ? ((Nl = e.screenX - pn.screenX), (Tl = e.screenY - pn.screenY))
              : (Tl = Nl = 0),
            (pn = e)),
          Nl);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Tl;
    },
  }),
  Zo = we(rl),
  Vc = B({}, rl, { dataTransfer: 0 }),
  Bc = we(Vc),
  Hc = B({}, Gn, { relatedTarget: 0 }),
  Ll = we(Hc),
  Wc = B({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Qc = we(Wc),
  $c = B({}, un, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Kc = we($c),
  Yc = B({}, un, { data: 0 }),
  Jo = we(Yc),
  Xc = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  Gc = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  Zc = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function Jc(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Zc[e]) ? !!t[e] : !1;
}
function ro() {
  return Jc;
}
var qc = B({}, Gn, {
    key: function (e) {
      if (e.key) {
        var t = Xc[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = wr(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
          ? Gc[e.keyCode] || 'Unidentified'
          : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ro,
    charCode: function (e) {
      return e.type === 'keypress' ? wr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? wr(e)
        : e.type === 'keydown' || e.type === 'keyup'
          ? e.keyCode
          : 0;
    },
  }),
  bc = we(qc),
  ef = B({}, rl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  qo = we(ef),
  tf = B({}, Gn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ro,
  }),
  nf = we(tf),
  rf = B({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  lf = we(rf),
  of = B({}, rl, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
          ? -e.wheelDeltaY
          : 'wheelDelta' in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  uf = we(of),
  sf = [9, 13, 27, 32],
  lo = Qe && 'CompositionEvent' in window,
  xn = null;
Qe && 'documentMode' in document && (xn = document.documentMode);
var af = Qe && 'TextEvent' in window && !xn,
  Ls = Qe && (!lo || (xn && 8 < xn && 11 >= xn)),
  bo = ' ',
  eu = !1;
function zs(e, t) {
  switch (e) {
    case 'keyup':
      return sf.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function Rs(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var Ot = !1;
function cf(e, t) {
  switch (e) {
    case 'compositionend':
      return Rs(t);
    case 'keypress':
      return t.which !== 32 ? null : ((eu = !0), bo);
    case 'textInput':
      return (e = t.data), e === bo && eu ? null : e;
    default:
      return null;
  }
}
function ff(e, t) {
  if (Ot)
    return e === 'compositionend' || (!lo && zs(e, t))
      ? ((e = Ts()), (yr = to = et = null), (Ot = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return Ls && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var df = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function tu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!df[e.type] : t === 'textarea';
}
function Ms(e, t, n, r) {
  as(r),
    (t = Or(t, 'onChange')),
    0 < t.length &&
      ((n = new no('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var _n = null,
  Un = null;
function pf(e) {
  Ws(e, 0);
}
function ll(e) {
  var t = jt(e);
  if (ns(t)) return e;
}
function mf(e, t) {
  if (e === 'change') return t;
}
var Ds = !1;
if (Qe) {
  var zl;
  if (Qe) {
    var Rl = 'oninput' in document;
    if (!Rl) {
      var nu = document.createElement('div');
      nu.setAttribute('oninput', 'return;'),
        (Rl = typeof nu.oninput == 'function');
    }
    zl = Rl;
  } else zl = !1;
  Ds = zl && (!document.documentMode || 9 < document.documentMode);
}
function ru() {
  _n && (_n.detachEvent('onpropertychange', Fs), (Un = _n = null));
}
function Fs(e) {
  if (e.propertyName === 'value' && ll(Un)) {
    var t = [];
    Ms(t, Un, e, Zi(e)), ps(pf, t);
  }
}
function hf(e, t, n) {
  e === 'focusin'
    ? (ru(), (_n = t), (Un = n), _n.attachEvent('onpropertychange', Fs))
    : e === 'focusout' && ru();
}
function vf(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return ll(Un);
}
function gf(e, t) {
  if (e === 'click') return ll(t);
}
function yf(e, t) {
  if (e === 'input' || e === 'change') return ll(t);
}
function wf(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Me = typeof Object.is == 'function' ? Object.is : wf;
function jn(e, t) {
  if (Me(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Zl.call(t, l) || !Me(e[l], t[l])) return !1;
  }
  return !0;
}
function lu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function iu(e, t) {
  var n = lu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = lu(n);
  }
}
function Os(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Os(e, t.parentNode)
          : 'contains' in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Is() {
  for (var e = window, t = Tr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Tr(e.document);
  }
  return t;
}
function io(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function Sf(e) {
  var t = Is(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Os(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && io(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = iu(n, i));
        var o = iu(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var kf = Qe && 'documentMode' in document && 11 >= document.documentMode,
  It = null,
  hi = null,
  Pn = null,
  vi = !1;
function ou(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  vi ||
    It == null ||
    It !== Tr(r) ||
    ((r = It),
    'selectionStart' in r && io(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Pn && jn(Pn, r)) ||
      ((Pn = r),
      (r = Or(hi, 'onSelect')),
      0 < r.length &&
        ((t = new no('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = It))));
}
function ur(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var Ut = {
    animationend: ur('Animation', 'AnimationEnd'),
    animationiteration: ur('Animation', 'AnimationIteration'),
    animationstart: ur('Animation', 'AnimationStart'),
    transitionend: ur('Transition', 'TransitionEnd'),
  },
  Ml = {},
  Us = {};
Qe &&
  ((Us = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Ut.animationend.animation,
    delete Ut.animationiteration.animation,
    delete Ut.animationstart.animation),
  'TransitionEvent' in window || delete Ut.transitionend.transition);
function il(e) {
  if (Ml[e]) return Ml[e];
  if (!Ut[e]) return e;
  var t = Ut[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Us) return (Ml[e] = t[n]);
  return e;
}
var js = il('animationend'),
  As = il('animationiteration'),
  Vs = il('animationstart'),
  Bs = il('transitionend'),
  Hs = new Map(),
  uu =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' ',
    );
function dt(e, t) {
  Hs.set(e, t), zt(t, [e]);
}
for (var Dl = 0; Dl < uu.length; Dl++) {
  var Fl = uu[Dl],
    Ef = Fl.toLowerCase(),
    Cf = Fl[0].toUpperCase() + Fl.slice(1);
  dt(Ef, 'on' + Cf);
}
dt(js, 'onAnimationEnd');
dt(As, 'onAnimationIteration');
dt(Vs, 'onAnimationStart');
dt('dblclick', 'onDoubleClick');
dt('focusin', 'onFocus');
dt('focusout', 'onBlur');
dt(Bs, 'onTransitionEnd');
qt('onMouseEnter', ['mouseout', 'mouseover']);
qt('onMouseLeave', ['mouseout', 'mouseover']);
qt('onPointerEnter', ['pointerout', 'pointerover']);
qt('onPointerLeave', ['pointerout', 'pointerover']);
zt(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(
    ' ',
  ),
);
zt(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' ',
  ),
);
zt('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
zt(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' '),
);
zt(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
);
zt(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
);
var kn =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' ',
    ),
  xf = new Set('cancel close invalid load scroll toggle'.split(' ').concat(kn));
function su(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), kc(r, t, void 0, e), (e.currentTarget = null);
}
function Ws(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var u = r[o],
            s = u.instance,
            c = u.currentTarget;
          if (((u = u.listener), s !== i && l.isPropagationStopped())) break e;
          su(l, u, c), (i = s);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((u = r[o]),
            (s = u.instance),
            (c = u.currentTarget),
            (u = u.listener),
            s !== i && l.isPropagationStopped())
          )
            break e;
          su(l, u, c), (i = s);
        }
    }
  }
  if (zr) throw ((e = fi), (zr = !1), (fi = null), e);
}
function I(e, t) {
  var n = t[ki];
  n === void 0 && (n = t[ki] = new Set());
  var r = e + '__bubble';
  n.has(r) || (Qs(t, e, 2, !1), n.add(r));
}
function Ol(e, t, n) {
  var r = 0;
  t && (r |= 4), Qs(n, e, r, t);
}
var sr = '_reactListening' + Math.random().toString(36).slice(2);
function An(e) {
  if (!e[sr]) {
    (e[sr] = !0),
      Ju.forEach(function (n) {
        n !== 'selectionchange' && (xf.has(n) || Ol(n, !1, e), Ol(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[sr] || ((t[sr] = !0), Ol('selectionchange', !1, t));
  }
}
function Qs(e, t, n, r) {
  switch (Ns(t)) {
    case 1:
      var l = Uc;
      break;
    case 4:
      l = jc;
      break;
    default:
      l = eo;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !ci ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1);
}
function Il(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var s = o.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = o.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; u !== null; ) {
          if (((o = St(u)), o === null)) return;
          if (((s = o.tag), s === 5 || s === 6)) {
            r = i = o;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  ps(function () {
    var c = i,
      m = Zi(n),
      h = [];
    e: {
      var p = Hs.get(e);
      if (p !== void 0) {
        var w = no,
          y = e;
        switch (e) {
          case 'keypress':
            if (wr(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            w = bc;
            break;
          case 'focusin':
            (y = 'focus'), (w = Ll);
            break;
          case 'focusout':
            (y = 'blur'), (w = Ll);
            break;
          case 'beforeblur':
          case 'afterblur':
            w = Ll;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            w = Zo;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            w = Bc;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            w = nf;
            break;
          case js:
          case As:
          case Vs:
            w = Qc;
            break;
          case Bs:
            w = lf;
            break;
          case 'scroll':
            w = Ac;
            break;
          case 'wheel':
            w = uf;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            w = Kc;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            w = qo;
        }
        var S = (t & 4) !== 0,
          R = !S && e === 'scroll',
          d = S ? (p !== null ? p + 'Capture' : null) : p;
        S = [];
        for (var a = c, f; a !== null; ) {
          f = a;
          var v = f.stateNode;
          if (
            (f.tag === 5 &&
              v !== null &&
              ((f = v),
              d !== null && ((v = Dn(a, d)), v != null && S.push(Vn(a, v, f)))),
            R)
          )
            break;
          a = a.return;
        }
        0 < S.length &&
          ((p = new w(p, y, null, n, m)), h.push({ event: p, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === 'mouseover' || e === 'pointerover'),
          (w = e === 'mouseout' || e === 'pointerout'),
          p &&
            n !== si &&
            (y = n.relatedTarget || n.fromElement) &&
            (St(y) || y[$e]))
        )
          break e;
        if (
          (w || p) &&
          ((p =
            m.window === m
              ? m
              : (p = m.ownerDocument)
                ? p.defaultView || p.parentWindow
                : window),
          w
            ? ((y = n.relatedTarget || n.toElement),
              (w = c),
              (y = y ? St(y) : null),
              y !== null &&
                ((R = Rt(y)), y !== R || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((w = null), (y = c)),
          w !== y)
        ) {
          if (
            ((S = Zo),
            (v = 'onMouseLeave'),
            (d = 'onMouseEnter'),
            (a = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((S = qo),
              (v = 'onPointerLeave'),
              (d = 'onPointerEnter'),
              (a = 'pointer')),
            (R = w == null ? p : jt(w)),
            (f = y == null ? p : jt(y)),
            (p = new S(v, a + 'leave', w, n, m)),
            (p.target = R),
            (p.relatedTarget = f),
            (v = null),
            St(m) === c &&
              ((S = new S(d, a + 'enter', y, n, m)),
              (S.target = f),
              (S.relatedTarget = R),
              (v = S)),
            (R = v),
            w && y)
          )
            t: {
              for (S = w, d = y, a = 0, f = S; f; f = Mt(f)) a++;
              for (f = 0, v = d; v; v = Mt(v)) f++;
              for (; 0 < a - f; ) (S = Mt(S)), a--;
              for (; 0 < f - a; ) (d = Mt(d)), f--;
              for (; a--; ) {
                if (S === d || (d !== null && S === d.alternate)) break t;
                (S = Mt(S)), (d = Mt(d));
              }
              S = null;
            }
          else S = null;
          w !== null && au(h, p, w, S, !1),
            y !== null && R !== null && au(h, R, y, S, !0);
        }
      }
      e: {
        if (
          ((p = c ? jt(c) : window),
          (w = p.nodeName && p.nodeName.toLowerCase()),
          w === 'select' || (w === 'input' && p.type === 'file'))
        )
          var E = mf;
        else if (tu(p))
          if (Ds) E = yf;
          else {
            E = vf;
            var _ = hf;
          }
        else
          (w = p.nodeName) &&
            w.toLowerCase() === 'input' &&
            (p.type === 'checkbox' || p.type === 'radio') &&
            (E = gf);
        if (E && (E = E(e, c))) {
          Ms(h, E, n, m);
          break e;
        }
        _ && _(e, p, c),
          e === 'focusout' &&
            (_ = p._wrapperState) &&
            _.controlled &&
            p.type === 'number' &&
            ri(p, 'number', p.value);
      }
      switch (((_ = c ? jt(c) : window), e)) {
        case 'focusin':
          (tu(_) || _.contentEditable === 'true') &&
            ((It = _), (hi = c), (Pn = null));
          break;
        case 'focusout':
          Pn = hi = It = null;
          break;
        case 'mousedown':
          vi = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (vi = !1), ou(h, n, m);
          break;
        case 'selectionchange':
          if (kf) break;
        case 'keydown':
        case 'keyup':
          ou(h, n, m);
      }
      var P;
      if (lo)
        e: {
          switch (e) {
            case 'compositionstart':
              var k = 'onCompositionStart';
              break e;
            case 'compositionend':
              k = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              k = 'onCompositionUpdate';
              break e;
          }
          k = void 0;
        }
      else
        Ot
          ? zs(e, n) && (k = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (k = 'onCompositionStart');
      k &&
        (Ls &&
          n.locale !== 'ko' &&
          (Ot || k !== 'onCompositionStart'
            ? k === 'onCompositionEnd' && Ot && (P = Ts())
            : ((et = m),
              (to = 'value' in et ? et.value : et.textContent),
              (Ot = !0))),
        (_ = Or(c, k)),
        0 < _.length &&
          ((k = new Jo(k, e, null, n, m)),
          h.push({ event: k, listeners: _ }),
          P ? (k.data = P) : ((P = Rs(n)), P !== null && (k.data = P)))),
        (P = af ? cf(e, n) : ff(e, n)) &&
          ((c = Or(c, 'onBeforeInput')),
          0 < c.length &&
            ((m = new Jo('onBeforeInput', 'beforeinput', null, n, m)),
            h.push({ event: m, listeners: c }),
            (m.data = P)));
    }
    Ws(h, t);
  });
}
function Vn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Or(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = Dn(e, n)),
      i != null && r.unshift(Vn(e, i, l)),
      (i = Dn(e, t)),
      i != null && r.push(Vn(e, i, l))),
      (e = e.return);
  }
  return r;
}
function Mt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function au(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      c = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      c !== null &&
      ((u = c),
      l
        ? ((s = Dn(n, i)), s != null && o.unshift(Vn(n, s, u)))
        : l || ((s = Dn(n, i)), s != null && o.push(Vn(n, s, u)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var _f = /\r\n?/g,
  Pf = /\u0000|\uFFFD/g;
function cu(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      _f,
      `
`,
    )
    .replace(Pf, '');
}
function ar(e, t, n) {
  if (((t = cu(t)), cu(e) !== t && n)) throw Error(g(425));
}
function Ir() {}
var gi = null,
  yi = null;
function wi(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Si = typeof setTimeout == 'function' ? setTimeout : void 0,
  Nf = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  fu = typeof Promise == 'function' ? Promise : void 0,
  Tf =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof fu < 'u'
        ? function (e) {
            return fu.resolve(null).then(e).catch(Lf);
          }
        : Si;
function Lf(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ul(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(l), In(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = l;
  } while (n);
  In(t);
}
function it(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function du(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var sn = Math.random().toString(36).slice(2),
  Ie = '__reactFiber$' + sn,
  Bn = '__reactProps$' + sn,
  $e = '__reactContainer$' + sn,
  ki = '__reactEvents$' + sn,
  zf = '__reactListeners$' + sn,
  Rf = '__reactHandles$' + sn;
function St(e) {
  var t = e[Ie];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[$e] || n[Ie])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = du(e); e !== null; ) {
          if ((n = e[Ie])) return n;
          e = du(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Zn(e) {
  return (
    (e = e[Ie] || e[$e]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function jt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(g(33));
}
function ol(e) {
  return e[Bn] || null;
}
var Ei = [],
  At = -1;
function pt(e) {
  return { current: e };
}
function U(e) {
  0 > At || ((e.current = Ei[At]), (Ei[At] = null), At--);
}
function O(e, t) {
  At++, (Ei[At] = e.current), (e.current = t);
}
var ft = {},
  le = pt(ft),
  ce = pt(!1),
  _t = ft;
function bt(e, t) {
  var n = e.type.contextTypes;
  if (!n) return ft;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function fe(e) {
  return (e = e.childContextTypes), e != null;
}
function Ur() {
  U(ce), U(le);
}
function pu(e, t, n) {
  if (le.current !== ft) throw Error(g(168));
  O(le, t), O(ce, n);
}
function $s(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(g(108, mc(e) || 'Unknown', l));
  return B({}, n, r);
}
function jr(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || ft),
    (_t = le.current),
    O(le, e),
    O(ce, ce.current),
    !0
  );
}
function mu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(g(169));
  n
    ? ((e = $s(e, t, _t)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      U(ce),
      U(le),
      O(le, e))
    : U(ce),
    O(ce, n);
}
var Ve = null,
  ul = !1,
  jl = !1;
function Ks(e) {
  Ve === null ? (Ve = [e]) : Ve.push(e);
}
function Mf(e) {
  (ul = !0), Ks(e);
}
function mt() {
  if (!jl && Ve !== null) {
    jl = !0;
    var e = 0,
      t = F;
    try {
      var n = Ve;
      for (F = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ve = null), (ul = !1);
    } catch (l) {
      throw (Ve !== null && (Ve = Ve.slice(e + 1)), gs(Ji, mt), l);
    } finally {
      (F = t), (jl = !1);
    }
  }
  return null;
}
var Vt = [],
  Bt = 0,
  Ar = null,
  Vr = 0,
  Se = [],
  ke = 0,
  Pt = null,
  Be = 1,
  He = '';
function yt(e, t) {
  (Vt[Bt++] = Vr), (Vt[Bt++] = Ar), (Ar = e), (Vr = t);
}
function Ys(e, t, n) {
  (Se[ke++] = Be), (Se[ke++] = He), (Se[ke++] = Pt), (Pt = e);
  var r = Be;
  e = He;
  var l = 32 - ze(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - ze(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (Be = (1 << (32 - ze(t) + l)) | (n << l) | r),
      (He = i + e);
  } else (Be = (1 << i) | (n << l) | r), (He = e);
}
function oo(e) {
  e.return !== null && (yt(e, 1), Ys(e, 1, 0));
}
function uo(e) {
  for (; e === Ar; )
    (Ar = Vt[--Bt]), (Vt[Bt] = null), (Vr = Vt[--Bt]), (Vt[Bt] = null);
  for (; e === Pt; )
    (Pt = Se[--ke]),
      (Se[ke] = null),
      (He = Se[--ke]),
      (Se[ke] = null),
      (Be = Se[--ke]),
      (Se[ke] = null);
}
var ve = null,
  he = null,
  j = !1,
  Le = null;
function Xs(e, t) {
  var n = Ee(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function hu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ve = e), (he = it(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ve = e), (he = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Pt !== null ? { id: Be, overflow: He } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ee(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ve = e),
            (he = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ci(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function xi(e) {
  if (j) {
    var t = he;
    if (t) {
      var n = t;
      if (!hu(e, t)) {
        if (Ci(e)) throw Error(g(418));
        t = it(n.nextSibling);
        var r = ve;
        t && hu(e, t)
          ? Xs(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (j = !1), (ve = e));
      }
    } else {
      if (Ci(e)) throw Error(g(418));
      (e.flags = (e.flags & -4097) | 2), (j = !1), (ve = e);
    }
  }
}
function vu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ve = e;
}
function cr(e) {
  if (e !== ve) return !1;
  if (!j) return vu(e), (j = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !wi(e.type, e.memoizedProps))),
    t && (t = he))
  ) {
    if (Ci(e)) throw (Gs(), Error(g(418)));
    for (; t; ) Xs(e, t), (t = it(t.nextSibling));
  }
  if ((vu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(g(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              he = it(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      he = null;
    }
  } else he = ve ? it(e.stateNode.nextSibling) : null;
  return !0;
}
function Gs() {
  for (var e = he; e; ) e = it(e.nextSibling);
}
function en() {
  (he = ve = null), (j = !1);
}
function so(e) {
  Le === null ? (Le = [e]) : Le.push(e);
}
var Df = Xe.ReactCurrentBatchConfig;
function mn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(g(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(g(147, e));
      var l = r,
        i = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var u = l.refs;
            o === null ? delete u[i] : (u[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != 'string') throw Error(g(284));
    if (!n._owner) throw Error(g(290, e));
  }
  return e;
}
function fr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      g(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e,
      ),
    ))
  );
}
function gu(e) {
  var t = e._init;
  return t(e._payload);
}
function Zs(e) {
  function t(d, a) {
    if (e) {
      var f = d.deletions;
      f === null ? ((d.deletions = [a]), (d.flags |= 16)) : f.push(a);
    }
  }
  function n(d, a) {
    if (!e) return null;
    for (; a !== null; ) t(d, a), (a = a.sibling);
    return null;
  }
  function r(d, a) {
    for (d = new Map(); a !== null; )
      a.key !== null ? d.set(a.key, a) : d.set(a.index, a), (a = a.sibling);
    return d;
  }
  function l(d, a) {
    return (d = at(d, a)), (d.index = 0), (d.sibling = null), d;
  }
  function i(d, a, f) {
    return (
      (d.index = f),
      e
        ? ((f = d.alternate),
          f !== null
            ? ((f = f.index), f < a ? ((d.flags |= 2), a) : f)
            : ((d.flags |= 2), a))
        : ((d.flags |= 1048576), a)
    );
  }
  function o(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function u(d, a, f, v) {
    return a === null || a.tag !== 6
      ? ((a = $l(f, d.mode, v)), (a.return = d), a)
      : ((a = l(a, f)), (a.return = d), a);
  }
  function s(d, a, f, v) {
    var E = f.type;
    return E === Ft
      ? m(d, a, f.props.children, v, f.key)
      : a !== null &&
          (a.elementType === E ||
            (typeof E == 'object' &&
              E !== null &&
              E.$$typeof === Ze &&
              gu(E) === a.type))
        ? ((v = l(a, f.props)), (v.ref = mn(d, a, f)), (v.return = d), v)
        : ((v = Pr(f.type, f.key, f.props, null, d.mode, v)),
          (v.ref = mn(d, a, f)),
          (v.return = d),
          v);
  }
  function c(d, a, f, v) {
    return a === null ||
      a.tag !== 4 ||
      a.stateNode.containerInfo !== f.containerInfo ||
      a.stateNode.implementation !== f.implementation
      ? ((a = Kl(f, d.mode, v)), (a.return = d), a)
      : ((a = l(a, f.children || [])), (a.return = d), a);
  }
  function m(d, a, f, v, E) {
    return a === null || a.tag !== 7
      ? ((a = xt(f, d.mode, v, E)), (a.return = d), a)
      : ((a = l(a, f)), (a.return = d), a);
  }
  function h(d, a, f) {
    if ((typeof a == 'string' && a !== '') || typeof a == 'number')
      return (a = $l('' + a, d.mode, f)), (a.return = d), a;
    if (typeof a == 'object' && a !== null) {
      switch (a.$$typeof) {
        case er:
          return (
            (f = Pr(a.type, a.key, a.props, null, d.mode, f)),
            (f.ref = mn(d, null, a)),
            (f.return = d),
            f
          );
        case Dt:
          return (a = Kl(a, d.mode, f)), (a.return = d), a;
        case Ze:
          var v = a._init;
          return h(d, v(a._payload), f);
      }
      if (wn(a) || an(a))
        return (a = xt(a, d.mode, f, null)), (a.return = d), a;
      fr(d, a);
    }
    return null;
  }
  function p(d, a, f, v) {
    var E = a !== null ? a.key : null;
    if ((typeof f == 'string' && f !== '') || typeof f == 'number')
      return E !== null ? null : u(d, a, '' + f, v);
    if (typeof f == 'object' && f !== null) {
      switch (f.$$typeof) {
        case er:
          return f.key === E ? s(d, a, f, v) : null;
        case Dt:
          return f.key === E ? c(d, a, f, v) : null;
        case Ze:
          return (E = f._init), p(d, a, E(f._payload), v);
      }
      if (wn(f) || an(f)) return E !== null ? null : m(d, a, f, v, null);
      fr(d, f);
    }
    return null;
  }
  function w(d, a, f, v, E) {
    if ((typeof v == 'string' && v !== '') || typeof v == 'number')
      return (d = d.get(f) || null), u(a, d, '' + v, E);
    if (typeof v == 'object' && v !== null) {
      switch (v.$$typeof) {
        case er:
          return (d = d.get(v.key === null ? f : v.key) || null), s(a, d, v, E);
        case Dt:
          return (d = d.get(v.key === null ? f : v.key) || null), c(a, d, v, E);
        case Ze:
          var _ = v._init;
          return w(d, a, f, _(v._payload), E);
      }
      if (wn(v) || an(v)) return (d = d.get(f) || null), m(a, d, v, E, null);
      fr(a, v);
    }
    return null;
  }
  function y(d, a, f, v) {
    for (
      var E = null, _ = null, P = a, k = (a = 0), D = null;
      P !== null && k < f.length;
      k++
    ) {
      P.index > k ? ((D = P), (P = null)) : (D = P.sibling);
      var N = p(d, P, f[k], v);
      if (N === null) {
        P === null && (P = D);
        break;
      }
      e && P && N.alternate === null && t(d, P),
        (a = i(N, a, k)),
        _ === null ? (E = N) : (_.sibling = N),
        (_ = N),
        (P = D);
    }
    if (k === f.length) return n(d, P), j && yt(d, k), E;
    if (P === null) {
      for (; k < f.length; k++)
        (P = h(d, f[k], v)),
          P !== null &&
            ((a = i(P, a, k)), _ === null ? (E = P) : (_.sibling = P), (_ = P));
      return j && yt(d, k), E;
    }
    for (P = r(d, P); k < f.length; k++)
      (D = w(P, d, k, f[k], v)),
        D !== null &&
          (e && D.alternate !== null && P.delete(D.key === null ? k : D.key),
          (a = i(D, a, k)),
          _ === null ? (E = D) : (_.sibling = D),
          (_ = D));
    return (
      e &&
        P.forEach(function (ee) {
          return t(d, ee);
        }),
      j && yt(d, k),
      E
    );
  }
  function S(d, a, f, v) {
    var E = an(f);
    if (typeof E != 'function') throw Error(g(150));
    if (((f = E.call(f)), f == null)) throw Error(g(151));
    for (
      var _ = (E = null), P = a, k = (a = 0), D = null, N = f.next();
      P !== null && !N.done;
      k++, N = f.next()
    ) {
      P.index > k ? ((D = P), (P = null)) : (D = P.sibling);
      var ee = p(d, P, N.value, v);
      if (ee === null) {
        P === null && (P = D);
        break;
      }
      e && P && ee.alternate === null && t(d, P),
        (a = i(ee, a, k)),
        _ === null ? (E = ee) : (_.sibling = ee),
        (_ = ee),
        (P = D);
    }
    if (N.done) return n(d, P), j && yt(d, k), E;
    if (P === null) {
      for (; !N.done; k++, N = f.next())
        (N = h(d, N.value, v)),
          N !== null &&
            ((a = i(N, a, k)), _ === null ? (E = N) : (_.sibling = N), (_ = N));
      return j && yt(d, k), E;
    }
    for (P = r(d, P); !N.done; k++, N = f.next())
      (N = w(P, d, k, N.value, v)),
        N !== null &&
          (e && N.alternate !== null && P.delete(N.key === null ? k : N.key),
          (a = i(N, a, k)),
          _ === null ? (E = N) : (_.sibling = N),
          (_ = N));
    return (
      e &&
        P.forEach(function (pe) {
          return t(d, pe);
        }),
      j && yt(d, k),
      E
    );
  }
  function R(d, a, f, v) {
    if (
      (typeof f == 'object' &&
        f !== null &&
        f.type === Ft &&
        f.key === null &&
        (f = f.props.children),
      typeof f == 'object' && f !== null)
    ) {
      switch (f.$$typeof) {
        case er:
          e: {
            for (var E = f.key, _ = a; _ !== null; ) {
              if (_.key === E) {
                if (((E = f.type), E === Ft)) {
                  if (_.tag === 7) {
                    n(d, _.sibling),
                      (a = l(_, f.props.children)),
                      (a.return = d),
                      (d = a);
                    break e;
                  }
                } else if (
                  _.elementType === E ||
                  (typeof E == 'object' &&
                    E !== null &&
                    E.$$typeof === Ze &&
                    gu(E) === _.type)
                ) {
                  n(d, _.sibling),
                    (a = l(_, f.props)),
                    (a.ref = mn(d, _, f)),
                    (a.return = d),
                    (d = a);
                  break e;
                }
                n(d, _);
                break;
              } else t(d, _);
              _ = _.sibling;
            }
            f.type === Ft
              ? ((a = xt(f.props.children, d.mode, v, f.key)),
                (a.return = d),
                (d = a))
              : ((v = Pr(f.type, f.key, f.props, null, d.mode, v)),
                (v.ref = mn(d, a, f)),
                (v.return = d),
                (d = v));
          }
          return o(d);
        case Dt:
          e: {
            for (_ = f.key; a !== null; ) {
              if (a.key === _)
                if (
                  a.tag === 4 &&
                  a.stateNode.containerInfo === f.containerInfo &&
                  a.stateNode.implementation === f.implementation
                ) {
                  n(d, a.sibling),
                    (a = l(a, f.children || [])),
                    (a.return = d),
                    (d = a);
                  break e;
                } else {
                  n(d, a);
                  break;
                }
              else t(d, a);
              a = a.sibling;
            }
            (a = Kl(f, d.mode, v)), (a.return = d), (d = a);
          }
          return o(d);
        case Ze:
          return (_ = f._init), R(d, a, _(f._payload), v);
      }
      if (wn(f)) return y(d, a, f, v);
      if (an(f)) return S(d, a, f, v);
      fr(d, f);
    }
    return (typeof f == 'string' && f !== '') || typeof f == 'number'
      ? ((f = '' + f),
        a !== null && a.tag === 6
          ? (n(d, a.sibling), (a = l(a, f)), (a.return = d), (d = a))
          : (n(d, a), (a = $l(f, d.mode, v)), (a.return = d), (d = a)),
        o(d))
      : n(d, a);
  }
  return R;
}
var tn = Zs(!0),
  Js = Zs(!1),
  Br = pt(null),
  Hr = null,
  Ht = null,
  ao = null;
function co() {
  ao = Ht = Hr = null;
}
function fo(e) {
  var t = Br.current;
  U(Br), (e._currentValue = t);
}
function _i(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Gt(e, t) {
  (Hr = e),
    (ao = Ht = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ae = !0), (e.firstContext = null));
}
function xe(e) {
  var t = e._currentValue;
  if (ao !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Ht === null)) {
      if (Hr === null) throw Error(g(308));
      (Ht = e), (Hr.dependencies = { lanes: 0, firstContext: e });
    } else Ht = Ht.next = e;
  return t;
}
var kt = null;
function po(e) {
  kt === null ? (kt = [e]) : kt.push(e);
}
function qs(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), po(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Ke(e, r)
  );
}
function Ke(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Je = !1;
function mo(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function bs(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function We(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function ot(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), M & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Ke(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), po(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Ke(e, n)
  );
}
function Sr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), qi(e, n);
  }
}
function yu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Wr(e, t, n, r) {
  var l = e.updateQueue;
  Je = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      c = s.next;
    (s.next = null), o === null ? (i = c) : (o.next = c), (o = s);
    var m = e.alternate;
    m !== null &&
      ((m = m.updateQueue),
      (u = m.lastBaseUpdate),
      u !== o &&
        (u === null ? (m.firstBaseUpdate = c) : (u.next = c),
        (m.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var h = l.baseState;
    (o = 0), (m = c = s = null), (u = i);
    do {
      var p = u.lane,
        w = u.eventTime;
      if ((r & p) === p) {
        m !== null &&
          (m = m.next =
            {
              eventTime: w,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var y = e,
            S = u;
          switch (((p = t), (w = n), S.tag)) {
            case 1:
              if (((y = S.payload), typeof y == 'function')) {
                h = y.call(w, h, p);
                break e;
              }
              h = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = S.payload),
                (p = typeof y == 'function' ? y.call(w, h, p) : y),
                p == null)
              )
                break e;
              h = B({}, h, p);
              break e;
            case 2:
              Je = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (p = l.effects),
          p === null ? (l.effects = [u]) : p.push(u));
      } else
        (w = {
          eventTime: w,
          lane: p,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          m === null ? ((c = m = w), (s = h)) : (m = m.next = w),
          (o |= p);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (p = u),
          (u = p.next),
          (p.next = null),
          (l.lastBaseUpdate = p),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (m === null && (s = h),
      (l.baseState = s),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = m),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (Tt |= o), (e.lanes = o), (e.memoizedState = h);
  }
}
function wu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != 'function'))
          throw Error(g(191, l));
        l.call(r);
      }
    }
}
var Jn = {},
  je = pt(Jn),
  Hn = pt(Jn),
  Wn = pt(Jn);
function Et(e) {
  if (e === Jn) throw Error(g(174));
  return e;
}
function ho(e, t) {
  switch ((O(Wn, t), O(Hn, e), O(je, Jn), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ii(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ii(t, e));
  }
  U(je), O(je, t);
}
function nn() {
  U(je), U(Hn), U(Wn);
}
function ea(e) {
  Et(Wn.current);
  var t = Et(je.current),
    n = ii(t, e.type);
  t !== n && (O(Hn, e), O(je, n));
}
function vo(e) {
  Hn.current === e && (U(je), U(Hn));
}
var A = pt(0);
function Qr(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Al = [];
function go() {
  for (var e = 0; e < Al.length; e++)
    Al[e]._workInProgressVersionPrimary = null;
  Al.length = 0;
}
var kr = Xe.ReactCurrentDispatcher,
  Vl = Xe.ReactCurrentBatchConfig,
  Nt = 0,
  V = null,
  K = null,
  G = null,
  $r = !1,
  Nn = !1,
  Qn = 0,
  Ff = 0;
function te() {
  throw Error(g(321));
}
function yo(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Me(e[n], t[n])) return !1;
  return !0;
}
function wo(e, t, n, r, l, i) {
  if (
    ((Nt = i),
    (V = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (kr.current = e === null || e.memoizedState === null ? jf : Af),
    (e = n(r, l)),
    Nn)
  ) {
    i = 0;
    do {
      if (((Nn = !1), (Qn = 0), 25 <= i)) throw Error(g(301));
      (i += 1),
        (G = K = null),
        (t.updateQueue = null),
        (kr.current = Vf),
        (e = n(r, l));
    } while (Nn);
  }
  if (
    ((kr.current = Kr),
    (t = K !== null && K.next !== null),
    (Nt = 0),
    (G = K = V = null),
    ($r = !1),
    t)
  )
    throw Error(g(300));
  return e;
}
function So() {
  var e = Qn !== 0;
  return (Qn = 0), e;
}
function Oe() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return G === null ? (V.memoizedState = G = e) : (G = G.next = e), G;
}
function _e() {
  if (K === null) {
    var e = V.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = K.next;
  var t = G === null ? V.memoizedState : G.next;
  if (t !== null) (G = t), (K = e);
  else {
    if (e === null) throw Error(g(310));
    (K = e),
      (e = {
        memoizedState: K.memoizedState,
        baseState: K.baseState,
        baseQueue: K.baseQueue,
        queue: K.queue,
        next: null,
      }),
      G === null ? (V.memoizedState = G = e) : (G = G.next = e);
  }
  return G;
}
function $n(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function Bl(e) {
  var t = _e(),
    n = t.queue;
  if (n === null) throw Error(g(311));
  n.lastRenderedReducer = e;
  var r = K,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var u = (o = null),
      s = null,
      c = i;
    do {
      var m = c.lane;
      if ((Nt & m) === m)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var h = {
          lane: m,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        s === null ? ((u = s = h), (o = r)) : (s = s.next = h),
          (V.lanes |= m),
          (Tt |= m);
      }
      c = c.next;
    } while (c !== null && c !== i);
    s === null ? (o = r) : (s.next = u),
      Me(r, t.memoizedState) || (ae = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (V.lanes |= i), (Tt |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Hl(e) {
  var t = _e(),
    n = t.queue;
  if (n === null) throw Error(g(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    Me(i, t.memoizedState) || (ae = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function ta() {}
function na(e, t) {
  var n = V,
    r = _e(),
    l = t(),
    i = !Me(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (ae = !0)),
    (r = r.queue),
    ko(ia.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (G !== null && G.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Kn(9, la.bind(null, n, r, l, t), void 0, null),
      Z === null)
    )
      throw Error(g(349));
    Nt & 30 || ra(n, t, l);
  }
  return l;
}
function ra(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = V.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (V.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function la(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), oa(t) && ua(e);
}
function ia(e, t, n) {
  return n(function () {
    oa(t) && ua(e);
  });
}
function oa(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Me(e, n);
  } catch {
    return !0;
  }
}
function ua(e) {
  var t = Ke(e, 1);
  t !== null && Re(t, e, 1, -1);
}
function Su(e) {
  var t = Oe();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: $n,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Uf.bind(null, V, e)),
    [t.memoizedState, e]
  );
}
function Kn(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = V.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (V.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function sa() {
  return _e().memoizedState;
}
function Er(e, t, n, r) {
  var l = Oe();
  (V.flags |= e),
    (l.memoizedState = Kn(1 | t, n, void 0, r === void 0 ? null : r));
}
function sl(e, t, n, r) {
  var l = _e();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (K !== null) {
    var o = K.memoizedState;
    if (((i = o.destroy), r !== null && yo(r, o.deps))) {
      l.memoizedState = Kn(t, n, i, r);
      return;
    }
  }
  (V.flags |= e), (l.memoizedState = Kn(1 | t, n, i, r));
}
function ku(e, t) {
  return Er(8390656, 8, e, t);
}
function ko(e, t) {
  return sl(2048, 8, e, t);
}
function aa(e, t) {
  return sl(4, 2, e, t);
}
function ca(e, t) {
  return sl(4, 4, e, t);
}
function fa(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function da(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), sl(4, 4, fa.bind(null, t, e), n)
  );
}
function Eo() {}
function pa(e, t) {
  var n = _e();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && yo(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function ma(e, t) {
  var n = _e();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && yo(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function ha(e, t, n) {
  return Nt & 21
    ? (Me(n, t) || ((n = Ss()), (V.lanes |= n), (Tt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ae = !0)), (e.memoizedState = n));
}
function Of(e, t) {
  var n = F;
  (F = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Vl.transition;
  Vl.transition = {};
  try {
    e(!1), t();
  } finally {
    (F = n), (Vl.transition = r);
  }
}
function va() {
  return _e().memoizedState;
}
function If(e, t, n) {
  var r = st(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    ga(e))
  )
    ya(t, n);
  else if (((n = qs(e, t, n, r)), n !== null)) {
    var l = oe();
    Re(n, e, r, l), wa(n, t, r);
  }
}
function Uf(e, t, n) {
  var r = st(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (ga(e)) ya(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          u = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), Me(u, o))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), po(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = qs(e, t, l, r)),
      n !== null && ((l = oe()), Re(n, e, r, l), wa(n, t, r));
  }
}
function ga(e) {
  var t = e.alternate;
  return e === V || (t !== null && t === V);
}
function ya(e, t) {
  Nn = $r = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function wa(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), qi(e, n);
  }
}
var Kr = {
    readContext: xe,
    useCallback: te,
    useContext: te,
    useEffect: te,
    useImperativeHandle: te,
    useInsertionEffect: te,
    useLayoutEffect: te,
    useMemo: te,
    useReducer: te,
    useRef: te,
    useState: te,
    useDebugValue: te,
    useDeferredValue: te,
    useTransition: te,
    useMutableSource: te,
    useSyncExternalStore: te,
    useId: te,
    unstable_isNewReconciler: !1,
  },
  jf = {
    readContext: xe,
    useCallback: function (e, t) {
      return (Oe().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: xe,
    useEffect: ku,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Er(4194308, 4, fa.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Er(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Er(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Oe();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Oe();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = If.bind(null, V, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Oe();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Su,
    useDebugValue: Eo,
    useDeferredValue: function (e) {
      return (Oe().memoizedState = e);
    },
    useTransition: function () {
      var e = Su(!1),
        t = e[0];
      return (e = Of.bind(null, e[1])), (Oe().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = V,
        l = Oe();
      if (j) {
        if (n === void 0) throw Error(g(407));
        n = n();
      } else {
        if (((n = t()), Z === null)) throw Error(g(349));
        Nt & 30 || ra(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        ku(ia.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Kn(9, la.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Oe(),
        t = Z.identifierPrefix;
      if (j) {
        var n = He,
          r = Be;
        (n = (r & ~(1 << (32 - ze(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = Qn++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = Ff++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Af = {
    readContext: xe,
    useCallback: pa,
    useContext: xe,
    useEffect: ko,
    useImperativeHandle: da,
    useInsertionEffect: aa,
    useLayoutEffect: ca,
    useMemo: ma,
    useReducer: Bl,
    useRef: sa,
    useState: function () {
      return Bl($n);
    },
    useDebugValue: Eo,
    useDeferredValue: function (e) {
      var t = _e();
      return ha(t, K.memoizedState, e);
    },
    useTransition: function () {
      var e = Bl($n)[0],
        t = _e().memoizedState;
      return [e, t];
    },
    useMutableSource: ta,
    useSyncExternalStore: na,
    useId: va,
    unstable_isNewReconciler: !1,
  },
  Vf = {
    readContext: xe,
    useCallback: pa,
    useContext: xe,
    useEffect: ko,
    useImperativeHandle: da,
    useInsertionEffect: aa,
    useLayoutEffect: ca,
    useMemo: ma,
    useReducer: Hl,
    useRef: sa,
    useState: function () {
      return Hl($n);
    },
    useDebugValue: Eo,
    useDeferredValue: function (e) {
      var t = _e();
      return K === null ? (t.memoizedState = e) : ha(t, K.memoizedState, e);
    },
    useTransition: function () {
      var e = Hl($n)[0],
        t = _e().memoizedState;
      return [e, t];
    },
    useMutableSource: ta,
    useSyncExternalStore: na,
    useId: va,
    unstable_isNewReconciler: !1,
  };
function Ne(e, t) {
  if (e && e.defaultProps) {
    (t = B({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Pi(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : B({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var al = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Rt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = oe(),
      l = st(e),
      i = We(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = ot(e, i, l)),
      t !== null && (Re(t, e, l, r), Sr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = oe(),
      l = st(e),
      i = We(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = ot(e, i, l)),
      t !== null && (Re(t, e, l, r), Sr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = oe(),
      r = st(e),
      l = We(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = ot(e, l, r)),
      t !== null && (Re(t, e, r, n), Sr(t, e, r));
  },
};
function Eu(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
        ? !jn(n, r) || !jn(l, i)
        : !0
  );
}
function Sa(e, t, n) {
  var r = !1,
    l = ft,
    i = t.contextType;
  return (
    typeof i == 'object' && i !== null
      ? (i = xe(i))
      : ((l = fe(t) ? _t : le.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? bt(e, l) : ft)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = al),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Cu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && al.enqueueReplaceState(t, t.state, null);
}
function Ni(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), mo(e);
  var i = t.contextType;
  typeof i == 'object' && i !== null
    ? (l.context = xe(i))
    : ((i = fe(t) ? _t : le.current), (l.context = bt(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == 'function' && (Pi(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof l.getSnapshotBeforeUpdate == 'function' ||
      (typeof l.UNSAFE_componentWillMount != 'function' &&
        typeof l.componentWillMount != 'function') ||
      ((t = l.state),
      typeof l.componentWillMount == 'function' && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == 'function' &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && al.enqueueReplaceState(l, l.state, null),
      Wr(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == 'function' && (e.flags |= 4194308);
}
function rn(e, t) {
  try {
    var n = '',
      r = t;
    do (n += pc(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Wl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ti(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Bf = typeof WeakMap == 'function' ? WeakMap : Map;
function ka(e, t, n) {
  (n = We(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Xr || ((Xr = !0), (ji = r)), Ti(e, t);
    }),
    n
  );
}
function Ea(e, t, n) {
  (n = We(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Ti(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (n.callback = function () {
        Ti(e, t),
          typeof r != 'function' &&
            (ut === null ? (ut = new Set([this])) : ut.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : '',
        });
      }),
    n
  );
}
function xu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Bf();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = td.bind(null, e, t, n)), t.then(e, e));
}
function _u(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Pu(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = We(-1, 1)), (t.tag = 2), ot(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Hf = Xe.ReactCurrentOwner,
  ae = !1;
function ie(e, t, n, r) {
  t.child = e === null ? Js(t, null, n, r) : tn(t, e.child, n, r);
}
function Nu(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    Gt(t, l),
    (r = wo(e, t, n, r, i, l)),
    (n = So()),
    e !== null && !ae
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ye(e, t, l))
      : (j && n && oo(t), (t.flags |= 1), ie(e, t, r, l), t.child)
  );
}
function Tu(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == 'function' &&
      !zo(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Ca(e, t, i, r, l))
      : ((e = Pr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : jn), n(o, r) && e.ref === t.ref)
    )
      return Ye(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = at(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Ca(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (jn(i, r) && e.ref === t.ref)
      if (((ae = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (ae = !0);
      else return (t.lanes = e.lanes), Ye(e, t, l);
  }
  return Li(e, t, n, r, l);
}
function xa(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        O(Qt, me),
        (me |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          O(Qt, me),
          (me |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        O(Qt, me),
        (me |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      O(Qt, me),
      (me |= r);
  return ie(e, t, l, n), t.child;
}
function _a(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Li(e, t, n, r, l) {
  var i = fe(n) ? _t : le.current;
  return (
    (i = bt(t, i)),
    Gt(t, l),
    (n = wo(e, t, n, r, i, l)),
    (r = So()),
    e !== null && !ae
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ye(e, t, l))
      : (j && r && oo(t), (t.flags |= 1), ie(e, t, n, l), t.child)
  );
}
function Lu(e, t, n, r, l) {
  if (fe(n)) {
    var i = !0;
    jr(t);
  } else i = !1;
  if ((Gt(t, l), t.stateNode === null))
    Cr(e, t), Sa(t, n, r), Ni(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      u = t.memoizedProps;
    o.props = u;
    var s = o.context,
      c = n.contextType;
    typeof c == 'object' && c !== null
      ? (c = xe(c))
      : ((c = fe(n) ? _t : le.current), (c = bt(t, c)));
    var m = n.getDerivedStateFromProps,
      h =
        typeof m == 'function' ||
        typeof o.getSnapshotBeforeUpdate == 'function';
    h ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof o.componentWillReceiveProps != 'function') ||
      ((u !== r || s !== c) && Cu(t, o, r, c)),
      (Je = !1);
    var p = t.memoizedState;
    (o.state = p),
      Wr(t, r, o, l),
      (s = t.memoizedState),
      u !== r || p !== s || ce.current || Je
        ? (typeof m == 'function' && (Pi(t, n, m, r), (s = t.memoizedState)),
          (u = Je || Eu(t, n, u, r, p, s, c))
            ? (h ||
                (typeof o.UNSAFE_componentWillMount != 'function' &&
                  typeof o.componentWillMount != 'function') ||
                (typeof o.componentWillMount == 'function' &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == 'function' &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof o.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (o.props = r),
          (o.state = s),
          (o.context = c),
          (r = u))
        : (typeof o.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      bs(e, t),
      (u = t.memoizedProps),
      (c = t.type === t.elementType ? u : Ne(t.type, u)),
      (o.props = c),
      (h = t.pendingProps),
      (p = o.context),
      (s = n.contextType),
      typeof s == 'object' && s !== null
        ? (s = xe(s))
        : ((s = fe(n) ? _t : le.current), (s = bt(t, s)));
    var w = n.getDerivedStateFromProps;
    (m =
      typeof w == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function') ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof o.componentWillReceiveProps != 'function') ||
      ((u !== h || p !== s) && Cu(t, o, r, s)),
      (Je = !1),
      (p = t.memoizedState),
      (o.state = p),
      Wr(t, r, o, l);
    var y = t.memoizedState;
    u !== h || p !== y || ce.current || Je
      ? (typeof w == 'function' && (Pi(t, n, w, r), (y = t.memoizedState)),
        (c = Je || Eu(t, n, c, r, p, y, s) || !1)
          ? (m ||
              (typeof o.UNSAFE_componentWillUpdate != 'function' &&
                typeof o.componentWillUpdate != 'function') ||
              (typeof o.componentWillUpdate == 'function' &&
                o.componentWillUpdate(r, y, s),
              typeof o.UNSAFE_componentWillUpdate == 'function' &&
                o.UNSAFE_componentWillUpdate(r, y, s)),
            typeof o.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != 'function' ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != 'function' ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (o.props = r),
        (o.state = y),
        (o.context = s),
        (r = c))
      : (typeof o.componentDidUpdate != 'function' ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != 'function' ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return zi(e, t, n, r, i, l);
}
function zi(e, t, n, r, l, i) {
  _a(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && mu(t, n, !1), Ye(e, t, i);
  (r = t.stateNode), (Hf.current = t);
  var u =
    o && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = tn(t, e.child, null, i)), (t.child = tn(t, null, u, i)))
      : ie(e, t, u, i),
    (t.memoizedState = r.state),
    l && mu(t, n, !0),
    t.child
  );
}
function Pa(e) {
  var t = e.stateNode;
  t.pendingContext
    ? pu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && pu(e, t.context, !1),
    ho(e, t.containerInfo);
}
function zu(e, t, n, r, l) {
  return en(), so(l), (t.flags |= 256), ie(e, t, n, r), t.child;
}
var Ri = { dehydrated: null, treeContext: null, retryLane: 0 };
function Mi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Na(e, t, n) {
  var r = t.pendingProps,
    l = A.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    u;
  if (
    ((u = o) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    O(A, l & 1),
    e === null)
  )
    return (
      xi(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: 'hidden', children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = dl(o, r, 0, null)),
              (e = xt(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Mi(n)),
              (t.memoizedState = Ri),
              e)
            : Co(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return Wf(e, t, o, r, u, l, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: 'hidden', children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = at(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (i = at(u, i)) : ((i = xt(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Mi(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ri),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = at(i, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Co(e, t) {
  return (
    (t = dl({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function dr(e, t, n, r) {
  return (
    r !== null && so(r),
    tn(t, e.child, null, n),
    (e = Co(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Wf(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Wl(Error(g(422)))), dr(e, t, o, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (l = t.mode),
          (r = dl({ mode: 'visible', children: r.children }, l, 0, null)),
          (i = xt(i, l, o, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && tn(t, e.child, null, o),
          (t.child.memoizedState = Mi(o)),
          (t.memoizedState = Ri),
          i);
  if (!(t.mode & 1)) return dr(e, t, o, null);
  if (l.data === '$!') {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (i = Error(g(419))), (r = Wl(i, r, void 0)), dr(e, t, o, r);
  }
  if (((u = (o & e.childLanes) !== 0), ae || u)) {
    if (((r = Z), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), Ke(e, l), Re(r, e, l, -1));
    }
    return Lo(), (r = Wl(Error(g(421)))), dr(e, t, o, r);
  }
  return l.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = nd.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (he = it(l.nextSibling)),
      (ve = t),
      (j = !0),
      (Le = null),
      e !== null &&
        ((Se[ke++] = Be),
        (Se[ke++] = He),
        (Se[ke++] = Pt),
        (Be = e.id),
        (He = e.overflow),
        (Pt = t)),
      (t = Co(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Ru(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), _i(e.return, t, n);
}
function Ql(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function Ta(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((ie(e, t, r.children, n), (r = A.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ru(e, n, t);
        else if (e.tag === 19) Ru(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((O(A, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case 'forwards':
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Qr(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Ql(t, !1, l, n, i);
        break;
      case 'backwards':
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Qr(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Ql(t, !0, n, null, i);
        break;
      case 'together':
        Ql(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Cr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ye(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Tt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(g(153));
  if (t.child !== null) {
    for (
      e = t.child, n = at(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = at(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Qf(e, t, n) {
  switch (t.tag) {
    case 3:
      Pa(t), en();
      break;
    case 5:
      ea(t);
      break;
    case 1:
      fe(t.type) && jr(t);
      break;
    case 4:
      ho(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      O(Br, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (O(A, A.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Na(e, t, n)
            : (O(A, A.current & 1),
              (e = Ye(e, t, n)),
              e !== null ? e.sibling : null);
      O(A, A.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Ta(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        O(A, A.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), xa(e, t, n);
  }
  return Ye(e, t, n);
}
var La, Di, za, Ra;
La = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Di = function () {};
za = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Et(je.current);
    var i = null;
    switch (n) {
      case 'input':
        (l = ti(e, l)), (r = ti(e, r)), (i = []);
        break;
      case 'select':
        (l = B({}, l, { value: void 0 })),
          (r = B({}, r, { value: void 0 })),
          (i = []);
        break;
      case 'textarea':
        (l = li(e, l)), (r = li(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = Ir);
    }
    oi(n, r);
    var o;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === 'style') {
          var u = l[c];
          for (o in u) u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ''));
        } else
          c !== 'dangerouslySetInnerHTML' &&
            c !== 'children' &&
            c !== 'suppressContentEditableWarning' &&
            c !== 'suppressHydrationWarning' &&
            c !== 'autoFocus' &&
            (Rn.hasOwnProperty(c)
              ? i || (i = [])
              : (i = i || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (
        ((u = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && s !== u && (s != null || u != null))
      )
        if (c === 'style')
          if (u) {
            for (o in u)
              !u.hasOwnProperty(o) ||
                (s && s.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ''));
            for (o in s)
              s.hasOwnProperty(o) &&
                u[o] !== s[o] &&
                (n || (n = {}), (n[o] = s[o]));
          } else n || (i || (i = []), i.push(c, n)), (n = s);
        else
          c === 'dangerouslySetInnerHTML'
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (i = i || []).push(c, s))
            : c === 'children'
              ? (typeof s != 'string' && typeof s != 'number') ||
                (i = i || []).push(c, '' + s)
              : c !== 'suppressContentEditableWarning' &&
                c !== 'suppressHydrationWarning' &&
                (Rn.hasOwnProperty(c)
                  ? (s != null && c === 'onScroll' && I('scroll', e),
                    i || u === s || (i = []))
                  : (i = i || []).push(c, s));
    }
    n && (i = i || []).push('style', n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Ra = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function hn(e, t) {
  if (!j)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ne(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function $f(e, t, n) {
  var r = t.pendingProps;
  switch ((uo(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ne(t), null;
    case 1:
      return fe(t.type) && Ur(), ne(t), null;
    case 3:
      return (
        (r = t.stateNode),
        nn(),
        U(ce),
        U(le),
        go(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (cr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Le !== null && (Bi(Le), (Le = null)))),
        Di(e, t),
        ne(t),
        null
      );
    case 5:
      vo(t);
      var l = Et(Wn.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        za(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(g(166));
          return ne(t), null;
        }
        if (((e = Et(je.current)), cr(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Ie] = t), (r[Bn] = i), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              I('cancel', r), I('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              I('load', r);
              break;
            case 'video':
            case 'audio':
              for (l = 0; l < kn.length; l++) I(kn[l], r);
              break;
            case 'source':
              I('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              I('error', r), I('load', r);
              break;
            case 'details':
              I('toggle', r);
              break;
            case 'input':
              Vo(r, i), I('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                I('invalid', r);
              break;
            case 'textarea':
              Ho(r, i), I('invalid', r);
          }
          oi(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var u = i[o];
              o === 'children'
                ? typeof u == 'string'
                  ? r.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 &&
                      ar(r.textContent, u, e),
                    (l = ['children', u]))
                  : typeof u == 'number' &&
                    r.textContent !== '' + u &&
                    (i.suppressHydrationWarning !== !0 &&
                      ar(r.textContent, u, e),
                    (l = ['children', '' + u]))
                : Rn.hasOwnProperty(o) &&
                  u != null &&
                  o === 'onScroll' &&
                  I('scroll', r);
            }
          switch (n) {
            case 'input':
              tr(r), Bo(r, i, !0);
              break;
            case 'textarea':
              tr(r), Wo(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof i.onClick == 'function' && (r.onclick = Ir);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = is(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = o.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                  ? (e = o.createElement(n, { is: r.is }))
                  : ((e = o.createElement(n)),
                    n === 'select' &&
                      ((o = e),
                      r.multiple
                        ? (o.multiple = !0)
                        : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Ie] = t),
            (e[Bn] = r),
            La(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = ui(n, r)), n)) {
              case 'dialog':
                I('cancel', e), I('close', e), (l = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                I('load', e), (l = r);
                break;
              case 'video':
              case 'audio':
                for (l = 0; l < kn.length; l++) I(kn[l], e);
                l = r;
                break;
              case 'source':
                I('error', e), (l = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                I('error', e), I('load', e), (l = r);
                break;
              case 'details':
                I('toggle', e), (l = r);
                break;
              case 'input':
                Vo(e, r), (l = ti(e, r)), I('invalid', e);
                break;
              case 'option':
                l = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = B({}, r, { value: void 0 })),
                  I('invalid', e);
                break;
              case 'textarea':
                Ho(e, r), (l = li(e, r)), I('invalid', e);
                break;
              default:
                l = r;
            }
            oi(n, l), (u = l);
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var s = u[i];
                i === 'style'
                  ? ss(e, s)
                  : i === 'dangerouslySetInnerHTML'
                    ? ((s = s ? s.__html : void 0), s != null && os(e, s))
                    : i === 'children'
                      ? typeof s == 'string'
                        ? (n !== 'textarea' || s !== '') && Mn(e, s)
                        : typeof s == 'number' && Mn(e, '' + s)
                      : i !== 'suppressContentEditableWarning' &&
                        i !== 'suppressHydrationWarning' &&
                        i !== 'autoFocus' &&
                        (Rn.hasOwnProperty(i)
                          ? s != null && i === 'onScroll' && I('scroll', e)
                          : s != null && Ki(e, i, s, o));
              }
            switch (n) {
              case 'input':
                tr(e), Bo(e, r, !1);
                break;
              case 'textarea':
                tr(e), Wo(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + ct(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? $t(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      $t(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == 'function' && (e.onclick = Ir);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ne(t), null;
    case 6:
      if (e && t.stateNode != null) Ra(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(g(166));
        if (((n = Et(Wn.current)), Et(je.current), cr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ie] = t),
            (i = r.nodeValue !== n) && ((e = ve), e !== null))
          )
            switch (e.tag) {
              case 3:
                ar(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  ar(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ie] = t),
            (t.stateNode = r);
      }
      return ne(t), null;
    case 13:
      if (
        (U(A),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (j && he !== null && t.mode & 1 && !(t.flags & 128))
          Gs(), en(), (t.flags |= 98560), (i = !1);
        else if (((i = cr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(g(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(g(317));
            i[Ie] = t;
          } else
            en(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ne(t), (i = !1);
        } else Le !== null && (Bi(Le), (Le = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || A.current & 1 ? Y === 0 && (Y = 3) : Lo())),
          t.updateQueue !== null && (t.flags |= 4),
          ne(t),
          null);
    case 4:
      return (
        nn(), Di(e, t), e === null && An(t.stateNode.containerInfo), ne(t), null
      );
    case 10:
      return fo(t.type._context), ne(t), null;
    case 17:
      return fe(t.type) && Ur(), ne(t), null;
    case 19:
      if ((U(A), (i = t.memoizedState), i === null)) return ne(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) hn(i, !1);
        else {
          if (Y !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = Qr(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    hn(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return O(A, (A.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Q() > ln &&
            ((t.flags |= 128), (r = !0), hn(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Qr(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              hn(i, !0),
              i.tail === null && i.tailMode === 'hidden' && !o.alternate && !j)
            )
              return ne(t), null;
          } else
            2 * Q() - i.renderingStartTime > ln &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), hn(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Q()),
          (t.sibling = null),
          (n = A.current),
          O(A, r ? (n & 1) | 2 : n & 1),
          t)
        : (ne(t), null);
    case 22:
    case 23:
      return (
        To(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? me & 1073741824 && (ne(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ne(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(g(156, t.tag));
}
function Kf(e, t) {
  switch ((uo(t), t.tag)) {
    case 1:
      return (
        fe(t.type) && Ur(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        nn(),
        U(ce),
        U(le),
        go(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return vo(t), null;
    case 13:
      if ((U(A), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(g(340));
        en();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return U(A), null;
    case 4:
      return nn(), null;
    case 10:
      return fo(t.type._context), null;
    case 22:
    case 23:
      return To(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var pr = !1,
  re = !1,
  Yf = typeof WeakSet == 'function' ? WeakSet : Set,
  C = null;
function Wt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        H(e, t, r);
      }
    else n.current = null;
}
function Fi(e, t, n) {
  try {
    n();
  } catch (r) {
    H(e, t, r);
  }
}
var Mu = !1;
function Xf(e, t) {
  if (((gi = Dr), (e = Is()), io(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            u = -1,
            s = -1,
            c = 0,
            m = 0,
            h = e,
            p = null;
          t: for (;;) {
            for (
              var w;
              h !== n || (l !== 0 && h.nodeType !== 3) || (u = o + l),
                h !== i || (r !== 0 && h.nodeType !== 3) || (s = o + r),
                h.nodeType === 3 && (o += h.nodeValue.length),
                (w = h.firstChild) !== null;

            )
              (p = h), (h = w);
            for (;;) {
              if (h === e) break t;
              if (
                (p === n && ++c === l && (u = o),
                p === i && ++m === r && (s = o),
                (w = h.nextSibling) !== null)
              )
                break;
              (h = p), (p = h.parentNode);
            }
            h = w;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (yi = { focusedElem: e, selectionRange: n }, Dr = !1, C = t; C !== null; )
    if (((t = C), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (C = e);
    else
      for (; C !== null; ) {
        t = C;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var S = y.memoizedProps,
                    R = y.memoizedState,
                    d = t.stateNode,
                    a = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? S : Ne(t.type, S),
                      R,
                    );
                  d.__reactInternalSnapshotBeforeUpdate = a;
                }
                break;
              case 3:
                var f = t.stateNode.containerInfo;
                f.nodeType === 1
                  ? (f.textContent = '')
                  : f.nodeType === 9 &&
                    f.documentElement &&
                    f.removeChild(f.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(g(163));
            }
        } catch (v) {
          H(t, t.return, v);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (C = e);
          break;
        }
        C = t.return;
      }
  return (y = Mu), (Mu = !1), y;
}
function Tn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && Fi(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function cl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Oi(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function Ma(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Ma(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ie], delete t[Bn], delete t[ki], delete t[zf], delete t[Rf])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Da(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Du(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Da(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ii(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Ir));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ii(e, t, n), e = e.sibling; e !== null; ) Ii(e, t, n), (e = e.sibling);
}
function Ui(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ui(e, t, n), e = e.sibling; e !== null; ) Ui(e, t, n), (e = e.sibling);
}
var J = null,
  Te = !1;
function Ge(e, t, n) {
  for (n = n.child; n !== null; ) Fa(e, t, n), (n = n.sibling);
}
function Fa(e, t, n) {
  if (Ue && typeof Ue.onCommitFiberUnmount == 'function')
    try {
      Ue.onCommitFiberUnmount(nl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      re || Wt(n, t);
    case 6:
      var r = J,
        l = Te;
      (J = null),
        Ge(e, t, n),
        (J = r),
        (Te = l),
        J !== null &&
          (Te
            ? ((e = J),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : J.removeChild(n.stateNode));
      break;
    case 18:
      J !== null &&
        (Te
          ? ((e = J),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ul(e.parentNode, n)
              : e.nodeType === 1 && Ul(e, n),
            In(e))
          : Ul(J, n.stateNode));
      break;
    case 4:
      (r = J),
        (l = Te),
        (J = n.stateNode.containerInfo),
        (Te = !0),
        Ge(e, t, n),
        (J = r),
        (Te = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !re &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && Fi(n, t, o),
            (l = l.next);
        } while (l !== r);
      }
      Ge(e, t, n);
      break;
    case 1:
      if (
        !re &&
        (Wt(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          H(n, t, u);
        }
      Ge(e, t, n);
      break;
    case 21:
      Ge(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((re = (r = re) || n.memoizedState !== null), Ge(e, t, n), (re = r))
        : Ge(e, t, n);
      break;
    default:
      Ge(e, t, n);
  }
}
function Fu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Yf()),
      t.forEach(function (r) {
        var l = rd.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Pe(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          u = o;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (J = u.stateNode), (Te = !1);
              break e;
            case 3:
              (J = u.stateNode.containerInfo), (Te = !0);
              break e;
            case 4:
              (J = u.stateNode.containerInfo), (Te = !0);
              break e;
          }
          u = u.return;
        }
        if (J === null) throw Error(g(160));
        Fa(i, o, l), (J = null), (Te = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (c) {
        H(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Oa(t, e), (t = t.sibling);
}
function Oa(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Pe(t, e), Fe(e), r & 4)) {
        try {
          Tn(3, e, e.return), cl(3, e);
        } catch (S) {
          H(e, e.return, S);
        }
        try {
          Tn(5, e, e.return);
        } catch (S) {
          H(e, e.return, S);
        }
      }
      break;
    case 1:
      Pe(t, e), Fe(e), r & 512 && n !== null && Wt(n, n.return);
      break;
    case 5:
      if (
        (Pe(t, e),
        Fe(e),
        r & 512 && n !== null && Wt(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Mn(l, '');
        } catch (S) {
          H(e, e.return, S);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === 'input' && i.type === 'radio' && i.name != null && rs(l, i),
              ui(u, o);
            var c = ui(u, i);
            for (o = 0; o < s.length; o += 2) {
              var m = s[o],
                h = s[o + 1];
              m === 'style'
                ? ss(l, h)
                : m === 'dangerouslySetInnerHTML'
                  ? os(l, h)
                  : m === 'children'
                    ? Mn(l, h)
                    : Ki(l, m, h, c);
            }
            switch (u) {
              case 'input':
                ni(l, i);
                break;
              case 'textarea':
                ls(l, i);
                break;
              case 'select':
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var w = i.value;
                w != null
                  ? $t(l, !!i.multiple, w, !1)
                  : p !== !!i.multiple &&
                    (i.defaultValue != null
                      ? $t(l, !!i.multiple, i.defaultValue, !0)
                      : $t(l, !!i.multiple, i.multiple ? [] : '', !1));
            }
            l[Bn] = i;
          } catch (S) {
            H(e, e.return, S);
          }
      }
      break;
    case 6:
      if ((Pe(t, e), Fe(e), r & 4)) {
        if (e.stateNode === null) throw Error(g(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (S) {
          H(e, e.return, S);
        }
      }
      break;
    case 3:
      if (
        (Pe(t, e), Fe(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          In(t.containerInfo);
        } catch (S) {
          H(e, e.return, S);
        }
      break;
    case 4:
      Pe(t, e), Fe(e);
      break;
    case 13:
      Pe(t, e),
        Fe(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Po = Q())),
        r & 4 && Fu(e);
      break;
    case 22:
      if (
        ((m = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((re = (c = re) || m), Pe(t, e), (re = c)) : Pe(t, e),
        Fe(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !m && e.mode & 1)
        )
          for (C = e, m = e.child; m !== null; ) {
            for (h = C = m; C !== null; ) {
              switch (((p = C), (w = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Tn(4, p, p.return);
                  break;
                case 1:
                  Wt(p, p.return);
                  var y = p.stateNode;
                  if (typeof y.componentWillUnmount == 'function') {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (S) {
                      H(r, n, S);
                    }
                  }
                  break;
                case 5:
                  Wt(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Iu(h);
                    continue;
                  }
              }
              w !== null ? ((w.return = p), (C = w)) : Iu(h);
            }
            m = m.sibling;
          }
        e: for (m = null, h = e; ; ) {
          if (h.tag === 5) {
            if (m === null) {
              m = h;
              try {
                (l = h.stateNode),
                  c
                    ? ((i = l.style),
                      typeof i.setProperty == 'function'
                        ? i.setProperty('display', 'none', 'important')
                        : (i.display = 'none'))
                    : ((u = h.stateNode),
                      (s = h.memoizedProps.style),
                      (o =
                        s != null && s.hasOwnProperty('display')
                          ? s.display
                          : null),
                      (u.style.display = us('display', o)));
              } catch (S) {
                H(e, e.return, S);
              }
            }
          } else if (h.tag === 6) {
            if (m === null)
              try {
                h.stateNode.nodeValue = c ? '' : h.memoizedProps;
              } catch (S) {
                H(e, e.return, S);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            m === h && (m = null), (h = h.return);
          }
          m === h && (m = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      Pe(t, e), Fe(e), r & 4 && Fu(e);
      break;
    case 21:
      break;
    default:
      Pe(t, e), Fe(e);
  }
}
function Fe(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Da(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(g(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Mn(l, ''), (r.flags &= -33));
          var i = Du(e);
          Ui(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            u = Du(e);
          Ii(e, u, o);
          break;
        default:
          throw Error(g(161));
      }
    } catch (s) {
      H(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Gf(e, t, n) {
  (C = e), Ia(e);
}
function Ia(e, t, n) {
  for (var r = (e.mode & 1) !== 0; C !== null; ) {
    var l = C,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || pr;
      if (!o) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || re;
        u = pr;
        var c = re;
        if (((pr = o), (re = s) && !c))
          for (C = l; C !== null; )
            (o = C),
              (s = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Uu(l)
                : s !== null
                  ? ((s.return = o), (C = s))
                  : Uu(l);
        for (; i !== null; ) (C = i), Ia(i), (i = i.sibling);
        (C = l), (pr = u), (re = c);
      }
      Ou(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (C = i)) : Ou(e);
  }
}
function Ou(e) {
  for (; C !== null; ) {
    var t = C;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              re || cl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !re)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ne(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var i = t.updateQueue;
              i !== null && wu(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                wu(t, o, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    s.autoFocus && n.focus();
                    break;
                  case 'img':
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var m = c.memoizedState;
                  if (m !== null) {
                    var h = m.dehydrated;
                    h !== null && In(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(g(163));
          }
        re || (t.flags & 512 && Oi(t));
      } catch (p) {
        H(t, t.return, p);
      }
    }
    if (t === e) {
      C = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (C = n);
      break;
    }
    C = t.return;
  }
}
function Iu(e) {
  for (; C !== null; ) {
    var t = C;
    if (t === e) {
      C = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (C = n);
      break;
    }
    C = t.return;
  }
}
function Uu(e) {
  for (; C !== null; ) {
    var t = C;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            cl(4, t);
          } catch (s) {
            H(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              H(t, l, s);
            }
          }
          var i = t.return;
          try {
            Oi(t);
          } catch (s) {
            H(t, i, s);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Oi(t);
          } catch (s) {
            H(t, o, s);
          }
      }
    } catch (s) {
      H(t, t.return, s);
    }
    if (t === e) {
      C = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (C = u);
      break;
    }
    C = t.return;
  }
}
var Zf = Math.ceil,
  Yr = Xe.ReactCurrentDispatcher,
  xo = Xe.ReactCurrentOwner,
  Ce = Xe.ReactCurrentBatchConfig,
  M = 0,
  Z = null,
  $ = null,
  q = 0,
  me = 0,
  Qt = pt(0),
  Y = 0,
  Yn = null,
  Tt = 0,
  fl = 0,
  _o = 0,
  Ln = null,
  se = null,
  Po = 0,
  ln = 1 / 0,
  Ae = null,
  Xr = !1,
  ji = null,
  ut = null,
  mr = !1,
  tt = null,
  Gr = 0,
  zn = 0,
  Ai = null,
  xr = -1,
  _r = 0;
function oe() {
  return M & 6 ? Q() : xr !== -1 ? xr : (xr = Q());
}
function st(e) {
  return e.mode & 1
    ? M & 2 && q !== 0
      ? q & -q
      : Df.transition !== null
        ? (_r === 0 && (_r = Ss()), _r)
        : ((e = F),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ns(e.type))),
          e)
    : 1;
}
function Re(e, t, n, r) {
  if (50 < zn) throw ((zn = 0), (Ai = null), Error(g(185)));
  Xn(e, n, r),
    (!(M & 2) || e !== Z) &&
      (e === Z && (!(M & 2) && (fl |= n), Y === 4 && be(e, q)),
      de(e, r),
      n === 1 && M === 0 && !(t.mode & 1) && ((ln = Q() + 500), ul && mt()));
}
function de(e, t) {
  var n = e.callbackNode;
  Mc(e, t);
  var r = Mr(e, e === Z ? q : 0);
  if (r === 0)
    n !== null && Ko(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ko(n), t === 1))
      e.tag === 0 ? Mf(ju.bind(null, e)) : Ks(ju.bind(null, e)),
        Tf(function () {
          !(M & 6) && mt();
        }),
        (n = null);
    else {
      switch (ks(r)) {
        case 1:
          n = Ji;
          break;
        case 4:
          n = ys;
          break;
        case 16:
          n = Rr;
          break;
        case 536870912:
          n = ws;
          break;
        default:
          n = Rr;
      }
      n = Qa(n, Ua.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Ua(e, t) {
  if (((xr = -1), (_r = 0), M & 6)) throw Error(g(327));
  var n = e.callbackNode;
  if (Zt() && e.callbackNode !== n) return null;
  var r = Mr(e, e === Z ? q : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Zr(e, r);
  else {
    t = r;
    var l = M;
    M |= 2;
    var i = Aa();
    (Z !== e || q !== t) && ((Ae = null), (ln = Q() + 500), Ct(e, t));
    do
      try {
        bf();
        break;
      } catch (u) {
        ja(e, u);
      }
    while (!0);
    co(),
      (Yr.current = i),
      (M = l),
      $ !== null ? (t = 0) : ((Z = null), (q = 0), (t = Y));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = di(e)), l !== 0 && ((r = l), (t = Vi(e, l)))), t === 1)
    )
      throw ((n = Yn), Ct(e, 0), be(e, r), de(e, Q()), n);
    if (t === 6) be(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Jf(l) &&
          ((t = Zr(e, r)),
          t === 2 && ((i = di(e)), i !== 0 && ((r = i), (t = Vi(e, i)))),
          t === 1))
      )
        throw ((n = Yn), Ct(e, 0), be(e, r), de(e, Q()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(g(345));
        case 2:
          wt(e, se, Ae);
          break;
        case 3:
          if (
            (be(e, r), (r & 130023424) === r && ((t = Po + 500 - Q()), 10 < t))
          ) {
            if (Mr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              oe(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Si(wt.bind(null, e, se, Ae), t);
            break;
          }
          wt(e, se, Ae);
          break;
        case 4:
          if ((be(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - ze(r);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = Q() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * Zf(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Si(wt.bind(null, e, se, Ae), r);
            break;
          }
          wt(e, se, Ae);
          break;
        case 5:
          wt(e, se, Ae);
          break;
        default:
          throw Error(g(329));
      }
    }
  }
  return de(e, Q()), e.callbackNode === n ? Ua.bind(null, e) : null;
}
function Vi(e, t) {
  var n = Ln;
  return (
    e.current.memoizedState.isDehydrated && (Ct(e, t).flags |= 256),
    (e = Zr(e, t)),
    e !== 2 && ((t = se), (se = n), t !== null && Bi(t)),
    e
  );
}
function Bi(e) {
  se === null ? (se = e) : se.push.apply(se, e);
}
function Jf(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!Me(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function be(e, t) {
  for (
    t &= ~_o,
      t &= ~fl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - ze(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function ju(e) {
  if (M & 6) throw Error(g(327));
  Zt();
  var t = Mr(e, 0);
  if (!(t & 1)) return de(e, Q()), null;
  var n = Zr(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = di(e);
    r !== 0 && ((t = r), (n = Vi(e, r)));
  }
  if (n === 1) throw ((n = Yn), Ct(e, 0), be(e, t), de(e, Q()), n);
  if (n === 6) throw Error(g(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    wt(e, se, Ae),
    de(e, Q()),
    null
  );
}
function No(e, t) {
  var n = M;
  M |= 1;
  try {
    return e(t);
  } finally {
    (M = n), M === 0 && ((ln = Q() + 500), ul && mt());
  }
}
function Lt(e) {
  tt !== null && tt.tag === 0 && !(M & 6) && Zt();
  var t = M;
  M |= 1;
  var n = Ce.transition,
    r = F;
  try {
    if (((Ce.transition = null), (F = 1), e)) return e();
  } finally {
    (F = r), (Ce.transition = n), (M = t), !(M & 6) && mt();
  }
}
function To() {
  (me = Qt.current), U(Qt);
}
function Ct(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Nf(n)), $ !== null))
    for (n = $.return; n !== null; ) {
      var r = n;
      switch ((uo(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ur();
          break;
        case 3:
          nn(), U(ce), U(le), go();
          break;
        case 5:
          vo(r);
          break;
        case 4:
          nn();
          break;
        case 13:
          U(A);
          break;
        case 19:
          U(A);
          break;
        case 10:
          fo(r.type._context);
          break;
        case 22:
        case 23:
          To();
      }
      n = n.return;
    }
  if (
    ((Z = e),
    ($ = e = at(e.current, null)),
    (q = me = t),
    (Y = 0),
    (Yn = null),
    (_o = fl = Tt = 0),
    (se = Ln = null),
    kt !== null)
  ) {
    for (t = 0; t < kt.length; t++)
      if (((n = kt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        n.pending = r;
      }
    kt = null;
  }
  return e;
}
function ja(e, t) {
  do {
    var n = $;
    try {
      if ((co(), (kr.current = Kr), $r)) {
        for (var r = V.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        $r = !1;
      }
      if (
        ((Nt = 0),
        (G = K = V = null),
        (Nn = !1),
        (Qn = 0),
        (xo.current = null),
        n === null || n.return === null)
      ) {
        (Y = 1), (Yn = t), ($ = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          u = n,
          s = t;
        if (
          ((t = q),
          (u.flags |= 32768),
          s !== null && typeof s == 'object' && typeof s.then == 'function')
        ) {
          var c = s,
            m = u,
            h = m.tag;
          if (!(m.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var p = m.alternate;
            p
              ? ((m.updateQueue = p.updateQueue),
                (m.memoizedState = p.memoizedState),
                (m.lanes = p.lanes))
              : ((m.updateQueue = null), (m.memoizedState = null));
          }
          var w = _u(o);
          if (w !== null) {
            (w.flags &= -257),
              Pu(w, o, u, i, t),
              w.mode & 1 && xu(i, c, t),
              (t = w),
              (s = c);
            var y = t.updateQueue;
            if (y === null) {
              var S = new Set();
              S.add(s), (t.updateQueue = S);
            } else y.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              xu(i, c, t), Lo();
              break e;
            }
            s = Error(g(426));
          }
        } else if (j && u.mode & 1) {
          var R = _u(o);
          if (R !== null) {
            !(R.flags & 65536) && (R.flags |= 256),
              Pu(R, o, u, i, t),
              so(rn(s, u));
            break e;
          }
        }
        (i = s = rn(s, u)),
          Y !== 4 && (Y = 2),
          Ln === null ? (Ln = [i]) : Ln.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var d = ka(i, s, t);
              yu(i, d);
              break e;
            case 1:
              u = s;
              var a = i.type,
                f = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof a.getDerivedStateFromError == 'function' ||
                  (f !== null &&
                    typeof f.componentDidCatch == 'function' &&
                    (ut === null || !ut.has(f))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var v = Ea(i, u, t);
                yu(i, v);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Ba(n);
    } catch (E) {
      (t = E), $ === n && n !== null && ($ = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Aa() {
  var e = Yr.current;
  return (Yr.current = Kr), e === null ? Kr : e;
}
function Lo() {
  (Y === 0 || Y === 3 || Y === 2) && (Y = 4),
    Z === null || (!(Tt & 268435455) && !(fl & 268435455)) || be(Z, q);
}
function Zr(e, t) {
  var n = M;
  M |= 2;
  var r = Aa();
  (Z !== e || q !== t) && ((Ae = null), Ct(e, t));
  do
    try {
      qf();
      break;
    } catch (l) {
      ja(e, l);
    }
  while (!0);
  if ((co(), (M = n), (Yr.current = r), $ !== null)) throw Error(g(261));
  return (Z = null), (q = 0), Y;
}
function qf() {
  for (; $ !== null; ) Va($);
}
function bf() {
  for (; $ !== null && !Cc(); ) Va($);
}
function Va(e) {
  var t = Wa(e.alternate, e, me);
  (e.memoizedProps = e.pendingProps),
    t === null ? Ba(e) : ($ = t),
    (xo.current = null);
}
function Ba(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Kf(n, t)), n !== null)) {
        (n.flags &= 32767), ($ = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Y = 6), ($ = null);
        return;
      }
    } else if (((n = $f(n, t, me)), n !== null)) {
      $ = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      $ = t;
      return;
    }
    $ = t = e;
  } while (t !== null);
  Y === 0 && (Y = 5);
}
function wt(e, t, n) {
  var r = F,
    l = Ce.transition;
  try {
    (Ce.transition = null), (F = 1), ed(e, t, n, r);
  } finally {
    (Ce.transition = l), (F = r);
  }
  return null;
}
function ed(e, t, n, r) {
  do Zt();
  while (tt !== null);
  if (M & 6) throw Error(g(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(g(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Dc(e, i),
    e === Z && (($ = Z = null), (q = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      mr ||
      ((mr = !0),
      Qa(Rr, function () {
        return Zt(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Ce.transition), (Ce.transition = null);
    var o = F;
    F = 1;
    var u = M;
    (M |= 4),
      (xo.current = null),
      Xf(e, n),
      Oa(n, e),
      Sf(yi),
      (Dr = !!gi),
      (yi = gi = null),
      (e.current = n),
      Gf(n),
      xc(),
      (M = u),
      (F = o),
      (Ce.transition = i);
  } else e.current = n;
  if (
    (mr && ((mr = !1), (tt = e), (Gr = l)),
    (i = e.pendingLanes),
    i === 0 && (ut = null),
    Nc(n.stateNode),
    de(e, Q()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Xr) throw ((Xr = !1), (e = ji), (ji = null), e);
  return (
    Gr & 1 && e.tag !== 0 && Zt(),
    (i = e.pendingLanes),
    i & 1 ? (e === Ai ? zn++ : ((zn = 0), (Ai = e))) : (zn = 0),
    mt(),
    null
  );
}
function Zt() {
  if (tt !== null) {
    var e = ks(Gr),
      t = Ce.transition,
      n = F;
    try {
      if (((Ce.transition = null), (F = 16 > e ? 16 : e), tt === null))
        var r = !1;
      else {
        if (((e = tt), (tt = null), (Gr = 0), M & 6)) throw Error(g(331));
        var l = M;
        for (M |= 4, C = e.current; C !== null; ) {
          var i = C,
            o = i.child;
          if (C.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var c = u[s];
                for (C = c; C !== null; ) {
                  var m = C;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Tn(8, m, i);
                  }
                  var h = m.child;
                  if (h !== null) (h.return = m), (C = h);
                  else
                    for (; C !== null; ) {
                      m = C;
                      var p = m.sibling,
                        w = m.return;
                      if ((Ma(m), m === c)) {
                        C = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = w), (C = p);
                        break;
                      }
                      C = w;
                    }
                }
              }
              var y = i.alternate;
              if (y !== null) {
                var S = y.child;
                if (S !== null) {
                  y.child = null;
                  do {
                    var R = S.sibling;
                    (S.sibling = null), (S = R);
                  } while (S !== null);
                }
              }
              C = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (C = o);
          else
            e: for (; C !== null; ) {
              if (((i = C), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Tn(9, i, i.return);
                }
              var d = i.sibling;
              if (d !== null) {
                (d.return = i.return), (C = d);
                break e;
              }
              C = i.return;
            }
        }
        var a = e.current;
        for (C = a; C !== null; ) {
          o = C;
          var f = o.child;
          if (o.subtreeFlags & 2064 && f !== null) (f.return = o), (C = f);
          else
            e: for (o = a; C !== null; ) {
              if (((u = C), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      cl(9, u);
                  }
                } catch (E) {
                  H(u, u.return, E);
                }
              if (u === o) {
                C = null;
                break e;
              }
              var v = u.sibling;
              if (v !== null) {
                (v.return = u.return), (C = v);
                break e;
              }
              C = u.return;
            }
        }
        if (
          ((M = l), mt(), Ue && typeof Ue.onPostCommitFiberRoot == 'function')
        )
          try {
            Ue.onPostCommitFiberRoot(nl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (F = n), (Ce.transition = t);
    }
  }
  return !1;
}
function Au(e, t, n) {
  (t = rn(n, t)),
    (t = ka(e, t, 1)),
    (e = ot(e, t, 1)),
    (t = oe()),
    e !== null && (Xn(e, 1, t), de(e, t));
}
function H(e, t, n) {
  if (e.tag === 3) Au(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Au(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (ut === null || !ut.has(r)))
        ) {
          (e = rn(n, e)),
            (e = Ea(t, e, 1)),
            (t = ot(t, e, 1)),
            (e = oe()),
            t !== null && (Xn(t, 1, e), de(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function td(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = oe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Z === e &&
      (q & n) === n &&
      (Y === 4 || (Y === 3 && (q & 130023424) === q && 500 > Q() - Po)
        ? Ct(e, 0)
        : (_o |= n)),
    de(e, t);
}
function Ha(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = lr), (lr <<= 1), !(lr & 130023424) && (lr = 4194304))
      : (t = 1));
  var n = oe();
  (e = Ke(e, t)), e !== null && (Xn(e, t, n), de(e, n));
}
function nd(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Ha(e, n);
}
function rd(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(g(314));
  }
  r !== null && r.delete(t), Ha(e, n);
}
var Wa;
Wa = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ce.current) ae = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ae = !1), Qf(e, t, n);
      ae = !!(e.flags & 131072);
    }
  else (ae = !1), j && t.flags & 1048576 && Ys(t, Vr, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Cr(e, t), (e = t.pendingProps);
      var l = bt(t, le.current);
      Gt(t, n), (l = wo(null, t, r, e, l, n));
      var i = So();
      return (
        (t.flags |= 1),
        typeof l == 'object' &&
        l !== null &&
        typeof l.render == 'function' &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            fe(r) ? ((i = !0), jr(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            mo(t),
            (l.updater = al),
            (t.stateNode = l),
            (l._reactInternals = t),
            Ni(t, r, e, n),
            (t = zi(null, t, r, !0, i, n)))
          : ((t.tag = 0), j && i && oo(t), ie(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Cr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = id(r)),
          (e = Ne(r, e)),
          l)
        ) {
          case 0:
            t = Li(null, t, r, e, n);
            break e;
          case 1:
            t = Lu(null, t, r, e, n);
            break e;
          case 11:
            t = Nu(null, t, r, e, n);
            break e;
          case 14:
            t = Tu(null, t, r, Ne(r.type, e), n);
            break e;
        }
        throw Error(g(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ne(r, l)),
        Li(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ne(r, l)),
        Lu(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Pa(t), e === null)) throw Error(g(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          bs(e, t),
          Wr(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = rn(Error(g(423)), t)), (t = zu(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = rn(Error(g(424)), t)), (t = zu(e, t, r, n, l));
            break e;
          } else
            for (
              he = it(t.stateNode.containerInfo.firstChild),
                ve = t,
                j = !0,
                Le = null,
                n = Js(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((en(), r === l)) {
            t = Ye(e, t, n);
            break e;
          }
          ie(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        ea(t),
        e === null && xi(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        wi(r, l) ? (o = null) : i !== null && wi(r, i) && (t.flags |= 32),
        _a(e, t),
        ie(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && xi(t), null;
    case 13:
      return Na(e, t, n);
    case 4:
      return (
        ho(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = tn(t, null, r, n)) : ie(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ne(r, l)),
        Nu(e, t, r, l, n)
      );
    case 7:
      return ie(e, t, t.pendingProps, n), t.child;
    case 8:
      return ie(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ie(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          O(Br, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (Me(i.value, o)) {
            if (i.children === l.children && !ce.current) {
              t = Ye(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var u = i.dependencies;
              if (u !== null) {
                o = i.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = We(-1, n & -n)), (s.tag = 2);
                      var c = i.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var m = c.pending;
                        m === null
                          ? (s.next = s)
                          : ((s.next = m.next), (m.next = s)),
                          (c.pending = s);
                      }
                    }
                    (i.lanes |= n),
                      (s = i.alternate),
                      s !== null && (s.lanes |= n),
                      _i(i.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(g(341));
                (o.lanes |= n),
                  (u = o.alternate),
                  u !== null && (u.lanes |= n),
                  _i(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        ie(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Gt(t, n),
        (l = xe(l)),
        (r = r(l)),
        (t.flags |= 1),
        ie(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Ne(r, t.pendingProps)),
        (l = Ne(r.type, l)),
        Tu(e, t, r, l, n)
      );
    case 15:
      return Ca(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ne(r, l)),
        Cr(e, t),
        (t.tag = 1),
        fe(r) ? ((e = !0), jr(t)) : (e = !1),
        Gt(t, n),
        Sa(t, r, l),
        Ni(t, r, l, n),
        zi(null, t, r, !0, e, n)
      );
    case 19:
      return Ta(e, t, n);
    case 22:
      return xa(e, t, n);
  }
  throw Error(g(156, t.tag));
};
function Qa(e, t) {
  return gs(e, t);
}
function ld(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ee(e, t, n, r) {
  return new ld(e, t, n, r);
}
function zo(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function id(e) {
  if (typeof e == 'function') return zo(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Xi)) return 11;
    if (e === Gi) return 14;
  }
  return 2;
}
function at(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ee(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Pr(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == 'function')) zo(e) && (o = 1);
  else if (typeof e == 'string') o = 5;
  else
    e: switch (e) {
      case Ft:
        return xt(n.children, l, i, t);
      case Yi:
        (o = 8), (l |= 8);
        break;
      case Jl:
        return (
          (e = Ee(12, n, t, l | 2)), (e.elementType = Jl), (e.lanes = i), e
        );
      case ql:
        return (e = Ee(13, n, t, l)), (e.elementType = ql), (e.lanes = i), e;
      case bl:
        return (e = Ee(19, n, t, l)), (e.elementType = bl), (e.lanes = i), e;
      case es:
        return dl(n, l, i, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case qu:
              o = 10;
              break e;
            case bu:
              o = 9;
              break e;
            case Xi:
              o = 11;
              break e;
            case Gi:
              o = 14;
              break e;
            case Ze:
              (o = 16), (r = null);
              break e;
          }
        throw Error(g(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = Ee(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function xt(e, t, n, r) {
  return (e = Ee(7, e, r, t)), (e.lanes = n), e;
}
function dl(e, t, n, r) {
  return (
    (e = Ee(22, e, r, t)),
    (e.elementType = es),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function $l(e, t, n) {
  return (e = Ee(6, e, null, t)), (e.lanes = n), e;
}
function Kl(e, t, n) {
  return (
    (t = Ee(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function od(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Pl(0)),
    (this.expirationTimes = Pl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Pl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Ro(e, t, n, r, l, i, o, u, s) {
  return (
    (e = new od(e, t, n, u, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Ee(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    mo(i),
    e
  );
}
function ud(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Dt,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function $a(e) {
  if (!e) return ft;
  e = e._reactInternals;
  e: {
    if (Rt(e) !== e || e.tag !== 1) throw Error(g(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (fe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(g(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (fe(n)) return $s(e, n, t);
  }
  return t;
}
function Ka(e, t, n, r, l, i, o, u, s) {
  return (
    (e = Ro(n, r, !0, e, l, i, o, u, s)),
    (e.context = $a(null)),
    (n = e.current),
    (r = oe()),
    (l = st(n)),
    (i = We(r, l)),
    (i.callback = t ?? null),
    ot(n, i, l),
    (e.current.lanes = l),
    Xn(e, l, r),
    de(e, r),
    e
  );
}
function pl(e, t, n, r) {
  var l = t.current,
    i = oe(),
    o = st(l);
  return (
    (n = $a(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = We(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = ot(l, t, o)),
    e !== null && (Re(e, l, o, i), Sr(e, l, o)),
    o
  );
}
function Jr(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Vu(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Mo(e, t) {
  Vu(e, t), (e = e.alternate) && Vu(e, t);
}
function sd() {
  return null;
}
var Ya =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function Do(e) {
  this._internalRoot = e;
}
ml.prototype.render = Do.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(g(409));
  pl(e, t, null, null);
};
ml.prototype.unmount = Do.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Lt(function () {
      pl(null, e, null, null);
    }),
      (t[$e] = null);
  }
};
function ml(e) {
  this._internalRoot = e;
}
ml.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = xs();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < qe.length && t !== 0 && t < qe[n].priority; n++);
    qe.splice(n, 0, e), n === 0 && Ps(e);
  }
};
function Fo(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function hl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function Bu() {}
function ad(e, t, n, r, l) {
  if (l) {
    if (typeof r == 'function') {
      var i = r;
      r = function () {
        var c = Jr(o);
        i.call(c);
      };
    }
    var o = Ka(t, r, e, 0, null, !1, !1, '', Bu);
    return (
      (e._reactRootContainer = o),
      (e[$e] = o.current),
      An(e.nodeType === 8 ? e.parentNode : e),
      Lt(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == 'function') {
    var u = r;
    r = function () {
      var c = Jr(s);
      u.call(c);
    };
  }
  var s = Ro(e, 0, !1, null, null, !1, !1, '', Bu);
  return (
    (e._reactRootContainer = s),
    (e[$e] = s.current),
    An(e.nodeType === 8 ? e.parentNode : e),
    Lt(function () {
      pl(t, s, n, r);
    }),
    s
  );
}
function vl(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == 'function') {
      var u = l;
      l = function () {
        var s = Jr(o);
        u.call(s);
      };
    }
    pl(t, o, e, l);
  } else o = ad(n, t, e, l, r);
  return Jr(o);
}
Es = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Sn(t.pendingLanes);
        n !== 0 &&
          (qi(t, n | 1), de(t, Q()), !(M & 6) && ((ln = Q() + 500), mt()));
      }
      break;
    case 13:
      Lt(function () {
        var r = Ke(e, 1);
        if (r !== null) {
          var l = oe();
          Re(r, e, 1, l);
        }
      }),
        Mo(e, 1);
  }
};
bi = function (e) {
  if (e.tag === 13) {
    var t = Ke(e, 134217728);
    if (t !== null) {
      var n = oe();
      Re(t, e, 134217728, n);
    }
    Mo(e, 134217728);
  }
};
Cs = function (e) {
  if (e.tag === 13) {
    var t = st(e),
      n = Ke(e, t);
    if (n !== null) {
      var r = oe();
      Re(n, e, t, r);
    }
    Mo(e, t);
  }
};
xs = function () {
  return F;
};
_s = function (e, t) {
  var n = F;
  try {
    return (F = e), t();
  } finally {
    F = n;
  }
};
ai = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((ni(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = ol(r);
            if (!l) throw Error(g(90));
            ns(r), ni(r, l);
          }
        }
      }
      break;
    case 'textarea':
      ls(e, n);
      break;
    case 'select':
      (t = n.value), t != null && $t(e, !!n.multiple, t, !1);
  }
};
fs = No;
ds = Lt;
var cd = { usingClientEntryPoint: !1, Events: [Zn, jt, ol, as, cs, No] },
  vn = {
    findFiberByHostInstance: St,
    bundleType: 0,
    version: '18.3.1',
    rendererPackageName: 'react-dom',
  },
  fd = {
    bundleType: vn.bundleType,
    version: vn.version,
    rendererPackageName: vn.rendererPackageName,
    rendererConfig: vn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Xe.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = hs(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: vn.findFiberByHostInstance || sd,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var hr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!hr.isDisabled && hr.supportsFiber)
    try {
      (nl = hr.inject(fd)), (Ue = hr);
    } catch {}
}
ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = cd;
ye.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Fo(t)) throw Error(g(200));
  return ud(e, t, null, n);
};
ye.createRoot = function (e, t) {
  if (!Fo(e)) throw Error(g(299));
  var n = !1,
    r = '',
    l = Ya;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Ro(e, 1, !1, null, null, n, !1, r, l)),
    (e[$e] = t.current),
    An(e.nodeType === 8 ? e.parentNode : e),
    new Do(t)
  );
};
ye.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(g(188))
      : ((e = Object.keys(e).join(',')), Error(g(268, e)));
  return (e = hs(t)), (e = e === null ? null : e.stateNode), e;
};
ye.flushSync = function (e) {
  return Lt(e);
};
ye.hydrate = function (e, t, n) {
  if (!hl(t)) throw Error(g(200));
  return vl(null, e, t, !0, n);
};
ye.hydrateRoot = function (e, t, n) {
  if (!Fo(e)) throw Error(g(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = '',
    o = Ya;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = Ka(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[$e] = t.current),
    An(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new ml(t);
};
ye.render = function (e, t, n) {
  if (!hl(t)) throw Error(g(200));
  return vl(null, e, t, !1, n);
};
ye.unmountComponentAtNode = function (e) {
  if (!hl(e)) throw Error(g(40));
  return e._reactRootContainer
    ? (Lt(function () {
        vl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[$e] = null);
        });
      }),
      !0)
    : !1;
};
ye.unstable_batchedUpdates = No;
ye.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!hl(n)) throw Error(g(200));
  if (e == null || e._reactInternals === void 0) throw Error(g(38));
  return vl(e, t, n, !1, r);
};
ye.version = '18.3.1-next-f1338f8080-20240426';
function Xa() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xa);
    } catch (e) {
      console.error(e);
    }
}
Xa(), (Xu.exports = ye);
var Ga = Xu.exports;
const dd = qa(Ga),
  pd = oc({ __proto__: null, default: dd }, [Ga]);
/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function on() {
  return (
    (on = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    on.apply(this, arguments)
  );
}
function Oo(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    i;
  for (i = 0; i < r.length; i++)
    (l = r[i]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
const Nr = 'get',
  Yl = 'application/x-www-form-urlencoded';
function gl(e) {
  return e != null && typeof e.tagName == 'string';
}
function md(e) {
  return gl(e) && e.tagName.toLowerCase() === 'button';
}
function hd(e) {
  return gl(e) && e.tagName.toLowerCase() === 'form';
}
function vd(e) {
  return gl(e) && e.tagName.toLowerCase() === 'input';
}
function gd(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function yd(e, t) {
  return e.button === 0 && (!t || t === '_self') && !gd(e);
}
function Hi(e) {
  return (
    e === void 0 && (e = ''),
    new URLSearchParams(
      typeof e == 'string' || Array.isArray(e) || e instanceof URLSearchParams
        ? e
        : Object.keys(e).reduce((t, n) => {
            let r = e[n];
            return t.concat(Array.isArray(r) ? r.map((l) => [n, l]) : [[n, r]]);
          }, []),
    )
  );
}
function wd(e, t) {
  let n = Hi(e);
  return (
    t &&
      t.forEach((r, l) => {
        n.has(l) ||
          t.getAll(l).forEach((i) => {
            n.append(l, i);
          });
      }),
    n
  );
}
let vr = null;
function Sd() {
  if (vr === null)
    try {
      new FormData(document.createElement('form'), 0), (vr = !1);
    } catch {
      vr = !0;
    }
  return vr;
}
const kd = new Set([
  'application/x-www-form-urlencoded',
  'multipart/form-data',
  'text/plain',
]);
function Xl(e) {
  return e != null && !kd.has(e) ? null : e;
}
function Ed(e, t) {
  let n, r, l, i, o;
  if (hd(e)) {
    let u = e.getAttribute('action');
    (r = u ? Jt(u, t) : null),
      (n = e.getAttribute('method') || Nr),
      (l = Xl(e.getAttribute('enctype')) || Yl),
      (i = new FormData(e));
  } else if (md(e) || (vd(e) && (e.type === 'submit' || e.type === 'image'))) {
    let u = e.form;
    if (u == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>',
      );
    let s = e.getAttribute('formaction') || u.getAttribute('action');
    if (
      ((r = s ? Jt(s, t) : null),
      (n = e.getAttribute('formmethod') || u.getAttribute('method') || Nr),
      (l =
        Xl(e.getAttribute('formenctype')) ||
        Xl(u.getAttribute('enctype')) ||
        Yl),
      (i = new FormData(u, e)),
      !Sd())
    ) {
      let { name: c, type: m, value: h } = e;
      if (m === 'image') {
        let p = c ? c + '.' : '';
        i.append(p + 'x', '0'), i.append(p + 'y', '0');
      } else c && i.append(c, h);
    }
  } else {
    if (gl(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
      );
    (n = Nr), (r = null), (l = Yl), (o = e);
  }
  return (
    i && l === 'text/plain' && ((o = i), (i = void 0)),
    { action: r, method: n.toLowerCase(), encType: l, formData: i, body: o }
  );
}
const Cd = [
    'onClick',
    'relative',
    'reloadDocument',
    'replace',
    'state',
    'target',
    'to',
    'preventScrollReset',
    'unstable_viewTransition',
  ],
  xd = [
    'aria-current',
    'caseSensitive',
    'className',
    'end',
    'style',
    'to',
    'unstable_viewTransition',
    'children',
  ],
  _d = [
    'fetcherKey',
    'navigate',
    'reloadDocument',
    'replace',
    'state',
    'method',
    'action',
    'onSubmit',
    'relative',
    'preventScrollReset',
    'unstable_viewTransition',
  ],
  Pd = '6';
try {
  window.__reactRouterVersion = Pd;
} catch {}
const Za = T.createContext({ isTransitioning: !1 }),
  Nd = T.createContext(new Map()),
  Td = 'startTransition',
  Hu = ic[Td],
  Ld = 'flushSync',
  Wu = pd[Ld];
function zd(e) {
  Hu ? Hu(e) : e();
}
function gn(e) {
  Wu ? Wu(e) : e();
}
class Rd {
  constructor() {
    (this.status = 'pending'),
      (this.promise = new Promise((t, n) => {
        (this.resolve = (r) => {
          this.status === 'pending' && ((this.status = 'resolved'), t(r));
        }),
          (this.reject = (r) => {
            this.status === 'pending' && ((this.status = 'rejected'), n(r));
          });
      }));
  }
}
function $d(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [l, i] = T.useState(n.state),
    [o, u] = T.useState(),
    [s, c] = T.useState({ isTransitioning: !1 }),
    [m, h] = T.useState(),
    [p, w] = T.useState(),
    [y, S] = T.useState(),
    R = T.useRef(new Map()),
    { v7_startTransition: d } = r || {},
    a = T.useCallback(
      (k) => {
        d ? zd(k) : k();
      },
      [d],
    ),
    f = T.useCallback(
      (k, D) => {
        let {
          deletedFetchers: N,
          unstable_flushSync: ee,
          unstable_viewTransitionOpts: pe,
        } = D;
        N.forEach((De) => R.current.delete(De)),
          k.fetchers.forEach((De, yl) => {
            De.data !== void 0 && R.current.set(yl, De.data);
          });
        let ht =
          n.window == null ||
          n.window.document == null ||
          typeof n.window.document.startViewTransition != 'function';
        if (!pe || ht) {
          ee ? gn(() => i(k)) : a(() => i(k));
          return;
        }
        if (ee) {
          gn(() => {
            p && (m && m.resolve(), p.skipTransition()),
              c({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: pe.currentLocation,
                nextLocation: pe.nextLocation,
              });
          });
          let De = n.window.document.startViewTransition(() => {
            gn(() => i(k));
          });
          De.finished.finally(() => {
            gn(() => {
              h(void 0), w(void 0), u(void 0), c({ isTransitioning: !1 });
            });
          }),
            gn(() => w(De));
          return;
        }
        p
          ? (m && m.resolve(),
            p.skipTransition(),
            S({
              state: k,
              currentLocation: pe.currentLocation,
              nextLocation: pe.nextLocation,
            }))
          : (u(k),
            c({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: pe.currentLocation,
              nextLocation: pe.nextLocation,
            }));
      },
      [n.window, p, m, R, a],
    );
  T.useLayoutEffect(() => n.subscribe(f), [n, f]),
    T.useEffect(() => {
      s.isTransitioning && !s.flushSync && h(new Rd());
    }, [s]),
    T.useEffect(() => {
      if (m && o && n.window) {
        let k = o,
          D = m.promise,
          N = n.window.document.startViewTransition(async () => {
            a(() => i(k)), await D;
          });
        N.finished.finally(() => {
          h(void 0), w(void 0), u(void 0), c({ isTransitioning: !1 });
        }),
          w(N);
      }
    }, [a, o, m, n.window]),
    T.useEffect(() => {
      m && o && l.location.key === o.location.key && m.resolve();
    }, [m, p, l.location, o]),
    T.useEffect(() => {
      !s.isTransitioning &&
        y &&
        (u(y.state),
        c({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: y.currentLocation,
          nextLocation: y.nextLocation,
        }),
        S(void 0));
    }, [s.isTransitioning, y]),
    T.useEffect(() => {}, []);
  let v = T.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (k) => n.navigate(k),
        push: (k, D, N) =>
          n.navigate(k, {
            state: D,
            preventScrollReset: N == null ? void 0 : N.preventScrollReset,
          }),
        replace: (k, D, N) =>
          n.navigate(k, {
            replace: !0,
            state: D,
            preventScrollReset: N == null ? void 0 : N.preventScrollReset,
          }),
      }),
      [n],
    ),
    E = n.basename || '/',
    _ = T.useMemo(
      () => ({ router: n, navigator: v, static: !1, basename: E }),
      [n, v, E],
    ),
    P = T.useMemo(
      () => ({ v7_relativeSplatPath: n.future.v7_relativeSplatPath }),
      [n.future.v7_relativeSplatPath],
    );
  return T.createElement(
    T.Fragment,
    null,
    T.createElement(
      $u.Provider,
      { value: _ },
      T.createElement(
        Ku.Provider,
        { value: l },
        T.createElement(
          Nd.Provider,
          { value: R.current },
          T.createElement(
            Za.Provider,
            { value: s },
            T.createElement(
              ba,
              {
                basename: E,
                location: l.location,
                navigationType: l.historyAction,
                navigator: v,
                future: P,
              },
              l.initialized || n.future.v7_partialHydration
                ? T.createElement(Md, {
                    routes: n.routes,
                    future: n.future,
                    state: l,
                  })
                : t,
            ),
          ),
        ),
      ),
    ),
    null,
  );
}
const Md = T.memo(Dd);
function Dd(e) {
  let { routes: t, future: n, state: r } = e;
  return ec(t, void 0, r, n);
}
const Fd =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  Od = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Id = T.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: i,
        replace: o,
        state: u,
        target: s,
        to: c,
        preventScrollReset: m,
        unstable_viewTransition: h,
      } = t,
      p = Oo(t, Cd),
      { basename: w } = T.useContext(br),
      y,
      S = !1;
    if (typeof c == 'string' && Od.test(c) && ((y = c), Fd))
      try {
        let f = new URL(window.location.href),
          v = c.startsWith('//') ? new URL(f.protocol + c) : new URL(c),
          E = Jt(v.pathname, w);
        v.origin === f.origin && E != null
          ? (c = E + v.search + v.hash)
          : (S = !0);
      } catch {}
    let R = tc(c, { relative: l }),
      d = Ud(c, {
        replace: o,
        state: u,
        target: s,
        preventScrollReset: m,
        relative: l,
        unstable_viewTransition: h,
      });
    function a(f) {
      r && r(f), f.defaultPrevented || d(f);
    }
    return T.createElement(
      'a',
      on({}, p, { href: y || R, onClick: S || i ? r : a, ref: n, target: s }),
    );
  }),
  Kd = T.forwardRef(function (t, n) {
    let {
        'aria-current': r = 'page',
        caseSensitive: l = !1,
        className: i = '',
        end: o = !1,
        style: u,
        to: s,
        unstable_viewTransition: c,
        children: m,
      } = t,
      h = Oo(t, xd),
      p = el(s, { relative: h.relative }),
      w = tl(),
      y = T.useContext(Ku),
      { navigator: S, basename: R } = T.useContext(br),
      d = y != null && Wd(p) && c === !0,
      a = S.encodeLocation ? S.encodeLocation(p).pathname : p.pathname,
      f = w.pathname,
      v =
        y && y.navigation && y.navigation.location
          ? y.navigation.location.pathname
          : null;
    l ||
      ((f = f.toLowerCase()),
      (v = v ? v.toLowerCase() : null),
      (a = a.toLowerCase())),
      v && R && (v = Jt(v, R) || v);
    const E = a !== '/' && a.endsWith('/') ? a.length - 1 : a.length;
    let _ = f === a || (!o && f.startsWith(a) && f.charAt(E) === '/'),
      P =
        v != null &&
        (v === a || (!o && v.startsWith(a) && v.charAt(a.length) === '/')),
      k = { isActive: _, isPending: P, isTransitioning: d },
      D = _ ? r : void 0,
      N;
    typeof i == 'function'
      ? (N = i(k))
      : (N = [
          i,
          _ ? 'active' : null,
          P ? 'pending' : null,
          d ? 'transitioning' : null,
        ]
          .filter(Boolean)
          .join(' '));
    let ee = typeof u == 'function' ? u(k) : u;
    return T.createElement(
      Id,
      on({}, h, {
        'aria-current': D,
        className: N,
        ref: n,
        style: ee,
        to: s,
        unstable_viewTransition: c,
      }),
      typeof m == 'function' ? m(k) : m,
    );
  }),
  Yd = T.forwardRef((e, t) => {
    let {
        fetcherKey: n,
        navigate: r,
        reloadDocument: l,
        replace: i,
        state: o,
        method: u = Nr,
        action: s,
        onSubmit: c,
        relative: m,
        preventScrollReset: h,
        unstable_viewTransition: p,
      } = e,
      w = Oo(e, _d),
      y = Bd(),
      S = Hd(s, { relative: m }),
      R = u.toLowerCase() === 'get' ? 'get' : 'post',
      d = (a) => {
        if ((c && c(a), a.defaultPrevented)) return;
        a.preventDefault();
        let f = a.nativeEvent.submitter,
          v = (f == null ? void 0 : f.getAttribute('formmethod')) || u;
        y(f || a.currentTarget, {
          fetcherKey: n,
          method: v,
          navigate: r,
          replace: i,
          state: o,
          relative: m,
          preventScrollReset: h,
          unstable_viewTransition: p,
        });
      };
    return T.createElement(
      'form',
      on({ ref: t, method: R, action: S, onSubmit: l ? c : d }, w),
    );
  });
var qr;
(function (e) {
  (e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmit = 'useSubmit'),
    (e.UseSubmitFetcher = 'useSubmitFetcher'),
    (e.UseFetcher = 'useFetcher'),
    (e.useViewTransitionState = 'useViewTransitionState');
})(qr || (qr = {}));
var Qu;
(function (e) {
  (e.UseFetcher = 'useFetcher'),
    (e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration');
})(Qu || (Qu = {}));
function Ja(e) {
  let t = T.useContext($u);
  return t || Wi(!1), t;
}
function Ud(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: i,
      relative: o,
      unstable_viewTransition: u,
    } = t === void 0 ? {} : t,
    s = Yu(),
    c = tl(),
    m = el(e, { relative: o });
  return T.useCallback(
    (h) => {
      if (yd(h, n)) {
        h.preventDefault();
        let p = r !== void 0 ? r : Gl(c) === Gl(m);
        s(e, {
          replace: p,
          state: l,
          preventScrollReset: i,
          relative: o,
          unstable_viewTransition: u,
        });
      }
    },
    [c, s, m, r, l, n, e, i, o, u],
  );
}
function Xd(e) {
  let t = T.useRef(Hi(e)),
    n = T.useRef(!1),
    r = tl(),
    l = T.useMemo(() => wd(r.search, n.current ? null : t.current), [r.search]),
    i = Yu(),
    o = T.useCallback(
      (u, s) => {
        const c = Hi(typeof u == 'function' ? u(l) : u);
        (n.current = !0), i('?' + c, s);
      },
      [i, l],
    );
  return [l, o];
}
function jd() {
  if (typeof document > 'u')
    throw new Error(
      'You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.',
    );
}
let Ad = 0,
  Vd = () => '__' + String(++Ad) + '__';
function Bd() {
  let { router: e } = Ja(qr.UseSubmit),
    { basename: t } = T.useContext(br),
    n = nc();
  return T.useCallback(
    function (r, l) {
      l === void 0 && (l = {}), jd();
      let { action: i, method: o, encType: u, formData: s, body: c } = Ed(r, t);
      if (l.navigate === !1) {
        let m = l.fetcherKey || Vd();
        e.fetch(m, n, l.action || i, {
          preventScrollReset: l.preventScrollReset,
          formData: s,
          body: c,
          formMethod: l.method || o,
          formEncType: l.encType || u,
          unstable_flushSync: l.unstable_flushSync,
        });
      } else
        e.navigate(l.action || i, {
          preventScrollReset: l.preventScrollReset,
          formData: s,
          body: c,
          formMethod: l.method || o,
          formEncType: l.encType || u,
          replace: l.replace,
          state: l.state,
          fromRouteId: n,
          unstable_flushSync: l.unstable_flushSync,
          unstable_viewTransition: l.unstable_viewTransition,
        });
    },
    [e, t, n],
  );
}
function Hd(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { basename: r } = T.useContext(br),
    l = T.useContext(rc);
  l || Wi(!1);
  let [i] = l.matches.slice(-1),
    o = on({}, el(e || '.', { relative: n })),
    u = tl();
  if (e == null) {
    o.search = u.search;
    let s = new URLSearchParams(o.search);
    s.has('index') &&
      s.get('index') === '' &&
      (s.delete('index'), (o.search = s.toString() ? '?' + s.toString() : ''));
  }
  return (
    (!e || e === '.') &&
      i.route.index &&
      (o.search = o.search ? o.search.replace(/^\?/, '?index&') : '?index'),
    r !== '/' && (o.pathname = o.pathname === '/' ? r : lc([r, o.pathname])),
    Gl(o)
  );
}
function Wd(e, t) {
  t === void 0 && (t = {});
  let n = T.useContext(Za);
  n == null && Wi(!1);
  let { basename: r } = Ja(qr.useViewTransitionState),
    l = el(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let i = Jt(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    o = Jt(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return Io(l.pathname, o) != null || Io(l.pathname, i) != null;
}
export { Yd as F, Id as L, Kd as N, $d as R, Ga as r, Xd as u };
