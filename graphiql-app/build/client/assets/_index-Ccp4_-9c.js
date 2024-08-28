import { j as k, r as Me } from './index-k4sjWK-j.js';
import { u as ei } from './useTranslation-pYUzJfcX.js';
import { B as Un } from './button-ikYNQhX4.js';
const Mo = '/assets/yana-BB-jdOhc.jpg',
  Uo = '/assets/roman-BhWAxZYb.jpg',
  xo = '/assets/nikita-DpnL6Sd8.jpg',
  jo = '_cardBlock_1y4gj_1',
  Fo = '_imgBlock_1y4gj_14',
  Bo = '_img_1y4gj_14',
  Vo = '_cardInfoBlock_1y4gj_30',
  Ho = '_cardName_1y4gj_37',
  $o = '_info_1y4gj_43',
  j = {
    cardBlock: jo,
    imgBlock: Fo,
    img: Bo,
    cardInfoBlock: Vo,
    cardName: Ho,
    info: $o,
  };
function zo() {
  const { t: i } = ei();
  return k.jsxs(k.Fragment, {
    children: [
      k.jsxs('article', {
        className: j.cardBlock,
        children: [
          k.jsx('div', {
            className: j.imgBlock,
            children: k.jsx('img', {
              src: Uo,
              alt: i('RomanSokolov'),
              className: j.img,
            }),
          }),
          k.jsxs('div', {
            className: j.cardInfoBlock,
            children: [
              k.jsx('h3', {
                className: j.cardName,
                children: i('RomanSokolov'),
              }),
              k.jsx('p', { className: j.info, children: i('RomanText') }),
            ],
          }),
        ],
      }),
      k.jsxs('article', {
        className: j.cardBlock,
        children: [
          k.jsx('div', {
            className: j.imgBlock,
            children: k.jsx('img', {
              src: Mo,
              alt: i('YanaDyachok'),
              className: j.img,
            }),
          }),
          k.jsxs('div', {
            className: j.cardInfoBlock,
            children: [
              k.jsx('h3', {
                className: j.cardName,
                children: i('YanaDyachok'),
              }),
              k.jsx('p', { className: j.info, children: i('YanaText') }),
            ],
          }),
        ],
      }),
      k.jsxs('article', {
        className: j.cardBlock,
        children: [
          k.jsx('div', {
            className: j.imgBlock,
            children: k.jsx('img', {
              src: xo,
              alt: i('NikitaRadevich'),
              className: j.img,
            }),
          }),
          k.jsxs('div', {
            className: j.cardInfoBlock,
            children: [
              k.jsx('h3', {
                className: j.cardName,
                children: i('NikitaRadevich'),
              }),
              k.jsx('p', { className: j.info, children: i('NikitaText') }),
            ],
          }),
        ],
      }),
    ],
  });
}
const Wo = '_contentInner_q30k9_1',
  Go = '_aboutUsBlock_q30k9_10',
  Ko = '_description_q30k9_17',
  zt = { contentInner: Wo, aboutUsBlock: Go, description: Ko };
function qo() {
  const { t: i } = ei();
  return k.jsxs('div', {
    className: zt.contentInner,
    children: [
      k.jsx('h2', { children: i('OurUndefinedsTeam') }),
      k.jsx('div', { className: zt.aboutUsBlock, children: k.jsx(zo, {}) }),
      k.jsx('h2', { children: i('AboutTeam') }),
      k.jsx('p', { className: zt.description, children: i('TeamDescription') }),
      k.jsx('h2', { children: i('AboutCourse') }),
      k.jsx('p', {
        className: zt.description,
        children: i('CourseDescription'),
      }),
    ],
  });
}
var vr = {},
  _r = {};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const es = function (i) {
    const e = [];
    let n = 0;
    for (let r = 0; r < i.length; r++) {
      let o = i.charCodeAt(r);
      o < 128
        ? (e[n++] = o)
        : o < 2048
          ? ((e[n++] = (o >> 6) | 192), (e[n++] = (o & 63) | 128))
          : (o & 64512) === 55296 &&
              r + 1 < i.length &&
              (i.charCodeAt(r + 1) & 64512) === 56320
            ? ((o = 65536 + ((o & 1023) << 10) + (i.charCodeAt(++r) & 1023)),
              (e[n++] = (o >> 18) | 240),
              (e[n++] = ((o >> 12) & 63) | 128),
              (e[n++] = ((o >> 6) & 63) | 128),
              (e[n++] = (o & 63) | 128))
            : ((e[n++] = (o >> 12) | 224),
              (e[n++] = ((o >> 6) & 63) | 128),
              (e[n++] = (o & 63) | 128));
    }
    return e;
  },
  Jo = function (i) {
    const e = [];
    let n = 0,
      r = 0;
    for (; n < i.length; ) {
      const o = i[n++];
      if (o < 128) e[r++] = String.fromCharCode(o);
      else if (o > 191 && o < 224) {
        const c = i[n++];
        e[r++] = String.fromCharCode(((o & 31) << 6) | (c & 63));
      } else if (o > 239 && o < 365) {
        const c = i[n++],
          h = i[n++],
          g = i[n++],
          I =
            (((o & 7) << 18) | ((c & 63) << 12) | ((h & 63) << 6) | (g & 63)) -
            65536;
        (e[r++] = String.fromCharCode(55296 + (I >> 10))),
          (e[r++] = String.fromCharCode(56320 + (I & 1023)));
      } else {
        const c = i[n++],
          h = i[n++];
        e[r++] = String.fromCharCode(
          ((o & 15) << 12) | ((c & 63) << 6) | (h & 63),
        );
      }
    }
    return e.join('');
  },
  ts = {
    byteToCharMap_: null,
    charToByteMap_: null,
    byteToCharMapWebSafe_: null,
    charToByteMapWebSafe_: null,
    ENCODED_VALS_BASE:
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
    get ENCODED_VALS() {
      return this.ENCODED_VALS_BASE + '+/=';
    },
    get ENCODED_VALS_WEBSAFE() {
      return this.ENCODED_VALS_BASE + '-_.';
    },
    HAS_NATIVE_SUPPORT: typeof atob == 'function',
    encodeByteArray(i, e) {
      if (!Array.isArray(i))
        throw Error('encodeByteArray takes an array as a parameter');
      this.init_();
      const n = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
        r = [];
      for (let o = 0; o < i.length; o += 3) {
        const c = i[o],
          h = o + 1 < i.length,
          g = h ? i[o + 1] : 0,
          I = o + 2 < i.length,
          E = I ? i[o + 2] : 0,
          A = c >> 2,
          S = ((c & 3) << 4) | (g >> 4);
        let P = ((g & 15) << 2) | (E >> 6),
          F = E & 63;
        I || ((F = 64), h || (P = 64)), r.push(n[A], n[S], n[P], n[F]);
      }
      return r.join('');
    },
    encodeString(i, e) {
      return this.HAS_NATIVE_SUPPORT && !e
        ? btoa(i)
        : this.encodeByteArray(es(i), e);
    },
    decodeString(i, e) {
      return this.HAS_NATIVE_SUPPORT && !e
        ? atob(i)
        : Jo(this.decodeStringToByteArray(i, e));
    },
    decodeStringToByteArray(i, e) {
      this.init_();
      const n = e ? this.charToByteMapWebSafe_ : this.charToByteMap_,
        r = [];
      for (let o = 0; o < i.length; ) {
        const c = n[i.charAt(o++)],
          g = o < i.length ? n[i.charAt(o)] : 0;
        ++o;
        const E = o < i.length ? n[i.charAt(o)] : 64;
        ++o;
        const S = o < i.length ? n[i.charAt(o)] : 64;
        if ((++o, c == null || g == null || E == null || S == null))
          throw new Xo();
        const P = (c << 2) | (g >> 4);
        if ((r.push(P), E !== 64)) {
          const F = ((g << 4) & 240) | (E >> 2);
          if ((r.push(F), S !== 64)) {
            const R = ((E << 6) & 192) | S;
            r.push(R);
          }
        }
      }
      return r;
    },
    init_() {
      if (!this.byteToCharMap_) {
        (this.byteToCharMap_ = {}),
          (this.charToByteMap_ = {}),
          (this.byteToCharMapWebSafe_ = {}),
          (this.charToByteMapWebSafe_ = {});
        for (let i = 0; i < this.ENCODED_VALS.length; i++)
          (this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i)),
            (this.charToByteMap_[this.byteToCharMap_[i]] = i),
            (this.byteToCharMapWebSafe_[i] =
              this.ENCODED_VALS_WEBSAFE.charAt(i)),
            (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i),
            i >= this.ENCODED_VALS_BASE.length &&
              ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i),
              (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i));
      }
    },
  };
class Xo extends Error {
  constructor() {
    super(...arguments), (this.name = 'DecodeBase64StringError');
  }
}
const Yo = function (i) {
    const e = es(i);
    return ts.encodeByteArray(e, !0);
  },
  Qt = function (i) {
    return Yo(i).replace(/\./g, '');
  },
  ns = function (i) {
    try {
      return ts.decodeString(i, !0);
    } catch (e) {
      console.error('base64Decode failed: ', e);
    }
    return null;
  };
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Qo() {
  if (typeof self < 'u') return self;
  if (typeof window < 'u') return window;
  if (typeof vr < 'u') return vr;
  throw new Error('Unable to locate global object.');
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Zo = () => Qo().__FIREBASE_DEFAULTS__,
  ea = () => {
    if (typeof process > 'u' || typeof _r > 'u') return;
    const i = _r.__FIREBASE_DEFAULTS__;
    if (i) return JSON.parse(i);
  },
  ta = () => {
    if (typeof document > 'u') return;
    let i;
    try {
      i = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
    } catch {
      return;
    }
    const e = i && ns(i[1]);
    return e && JSON.parse(e);
  },
  ti = () => {
    try {
      return Zo() || ea() || ta();
    } catch (i) {
      console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);
      return;
    }
  },
  is = (i) => {
    var e, n;
    return (n =
      (e = ti()) === null || e === void 0 ? void 0 : e.emulatorHosts) ===
      null || n === void 0
      ? void 0
      : n[i];
  },
  na = (i) => {
    const e = is(i);
    if (!e) return;
    const n = e.lastIndexOf(':');
    if (n <= 0 || n + 1 === e.length)
      throw new Error(`Invalid host ${e} with no separate hostname and port!`);
    const r = parseInt(e.substring(n + 1), 10);
    return e[0] === '[' ? [e.substring(1, n - 1), r] : [e.substring(0, n), r];
  },
  rs = () => {
    var i;
    return (i = ti()) === null || i === void 0 ? void 0 : i.config;
  },
  ss = (i) => {
    var e;
    return (e = ti()) === null || e === void 0 ? void 0 : e[`_${i}`];
  };
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ia {
  constructor() {
    (this.reject = () => {}),
      (this.resolve = () => {}),
      (this.promise = new Promise((e, n) => {
        (this.resolve = e), (this.reject = n);
      }));
  }
  wrapCallback(e) {
    return (n, r) => {
      n ? this.reject(n) : this.resolve(r),
        typeof e == 'function' &&
          (this.promise.catch(() => {}), e.length === 1 ? e(n) : e(n, r));
    };
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ra(i, e) {
  if (i.uid)
    throw new Error(
      'The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.',
    );
  const n = { alg: 'none', type: 'JWT' },
    r = e || 'demo-project',
    o = i.iat || 0,
    c = i.sub || i.user_id;
  if (!c)
    throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
  const h = Object.assign(
    {
      iss: `https://securetoken.google.com/${r}`,
      aud: r,
      iat: o,
      exp: o + 3600,
      auth_time: o,
      sub: c,
      user_id: c,
      firebase: { sign_in_provider: 'custom', identities: {} },
    },
    i,
  );
  return [Qt(JSON.stringify(n)), Qt(JSON.stringify(h)), ''].join('.');
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Y() {
  return typeof navigator < 'u' && typeof navigator.userAgent == 'string'
    ? navigator.userAgent
    : '';
}
function sa() {
  return (
    typeof window < 'u' &&
    !!(window.cordova || window.phonegap || window.PhoneGap) &&
    /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Y())
  );
}
function oa() {
  const i =
    typeof chrome == 'object'
      ? chrome.runtime
      : typeof browser == 'object'
        ? browser.runtime
        : void 0;
  return typeof i == 'object' && i.id !== void 0;
}
function aa() {
  return typeof navigator == 'object' && navigator.product === 'ReactNative';
}
function ca() {
  const i = Y();
  return i.indexOf('MSIE ') >= 0 || i.indexOf('Trident/') >= 0;
}
function la() {
  try {
    return typeof indexedDB == 'object';
  } catch {
    return !1;
  }
}
function ha() {
  return new Promise((i, e) => {
    try {
      let n = !0;
      const r = 'validate-browser-context-for-indexeddb-analytics-module',
        o = self.indexedDB.open(r);
      (o.onsuccess = () => {
        o.result.close(), n || self.indexedDB.deleteDatabase(r), i(!0);
      }),
        (o.onupgradeneeded = () => {
          n = !1;
        }),
        (o.onerror = () => {
          var c;
          e(
            ((c = o.error) === null || c === void 0 ? void 0 : c.message) || '',
          );
        });
    } catch (n) {
      e(n);
    }
  });
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ua = 'FirebaseError';
class me extends Error {
  constructor(e, n, r) {
    super(n),
      (this.code = e),
      (this.customData = r),
      (this.name = ua),
      Object.setPrototypeOf(this, me.prototype),
      Error.captureStackTrace &&
        Error.captureStackTrace(this, Et.prototype.create);
  }
}
class Et {
  constructor(e, n, r) {
    (this.service = e), (this.serviceName = n), (this.errors = r);
  }
  create(e, ...n) {
    const r = n[0] || {},
      o = `${this.service}/${e}`,
      c = this.errors[e],
      h = c ? da(c, r) : 'Error',
      g = `${this.serviceName}: ${h} (${o}).`;
    return new me(o, g, r);
  }
}
function da(i, e) {
  return i.replace(fa, (n, r) => {
    const o = e[r];
    return o != null ? String(o) : `<${r}?>`;
  });
}
const fa = /\{\$([^}]+)}/g;
function pa(i) {
  for (const e in i) if (Object.prototype.hasOwnProperty.call(i, e)) return !1;
  return !0;
}
function Zt(i, e) {
  if (i === e) return !0;
  const n = Object.keys(i),
    r = Object.keys(e);
  for (const o of n) {
    if (!r.includes(o)) return !1;
    const c = i[o],
      h = e[o];
    if (yr(c) && yr(h)) {
      if (!Zt(c, h)) return !1;
    } else if (c !== h) return !1;
  }
  for (const o of r) if (!n.includes(o)) return !1;
  return !0;
}
function yr(i) {
  return i !== null && typeof i == 'object';
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Tt(i) {
  const e = [];
  for (const [n, r] of Object.entries(i))
    Array.isArray(r)
      ? r.forEach((o) => {
          e.push(encodeURIComponent(n) + '=' + encodeURIComponent(o));
        })
      : e.push(encodeURIComponent(n) + '=' + encodeURIComponent(r));
  return e.length ? '&' + e.join('&') : '';
}
function ga(i, e) {
  const n = new ma(i, e);
  return n.subscribe.bind(n);
}
class ma {
  constructor(e, n) {
    (this.observers = []),
      (this.unsubscribes = []),
      (this.observerCount = 0),
      (this.task = Promise.resolve()),
      (this.finalized = !1),
      (this.onNoObservers = n),
      this.task
        .then(() => {
          e(this);
        })
        .catch((r) => {
          this.error(r);
        });
  }
  next(e) {
    this.forEachObserver((n) => {
      n.next(e);
    });
  }
  error(e) {
    this.forEachObserver((n) => {
      n.error(e);
    }),
      this.close(e);
  }
  complete() {
    this.forEachObserver((e) => {
      e.complete();
    }),
      this.close();
  }
  subscribe(e, n, r) {
    let o;
    if (e === void 0 && n === void 0 && r === void 0)
      throw new Error('Missing Observer.');
    va(e, ['next', 'error', 'complete'])
      ? (o = e)
      : (o = { next: e, error: n, complete: r }),
      o.next === void 0 && (o.next = xn),
      o.error === void 0 && (o.error = xn),
      o.complete === void 0 && (o.complete = xn);
    const c = this.unsubscribeOne.bind(this, this.observers.length);
    return (
      this.finalized &&
        this.task.then(() => {
          try {
            this.finalError ? o.error(this.finalError) : o.complete();
          } catch {}
        }),
      this.observers.push(o),
      c
    );
  }
  unsubscribeOne(e) {
    this.observers === void 0 ||
      this.observers[e] === void 0 ||
      (delete this.observers[e],
      (this.observerCount -= 1),
      this.observerCount === 0 &&
        this.onNoObservers !== void 0 &&
        this.onNoObservers(this));
  }
  forEachObserver(e) {
    if (!this.finalized)
      for (let n = 0; n < this.observers.length; n++) this.sendOne(n, e);
  }
  sendOne(e, n) {
    this.task.then(() => {
      if (this.observers !== void 0 && this.observers[e] !== void 0)
        try {
          n(this.observers[e]);
        } catch (r) {
          typeof console < 'u' && console.error && console.error(r);
        }
    });
  }
  close(e) {
    this.finalized ||
      ((this.finalized = !0),
      e !== void 0 && (this.finalError = e),
      this.task.then(() => {
        (this.observers = void 0), (this.onNoObservers = void 0);
      }));
  }
}
function va(i, e) {
  if (typeof i != 'object' || i === null) return !1;
  for (const n of e) if (n in i && typeof i[n] == 'function') return !0;
  return !1;
}
function xn() {}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Fe(i) {
  return i && i._delegate ? i._delegate : i;
}
class xe {
  constructor(e, n, r) {
    (this.name = e),
      (this.instanceFactory = n),
      (this.type = r),
      (this.multipleInstances = !1),
      (this.serviceProps = {}),
      (this.instantiationMode = 'LAZY'),
      (this.onInstanceCreated = null);
  }
  setInstantiationMode(e) {
    return (this.instantiationMode = e), this;
  }
  setMultipleInstances(e) {
    return (this.multipleInstances = e), this;
  }
  setServiceProps(e) {
    return (this.serviceProps = e), this;
  }
  setInstanceCreatedCallback(e) {
    return (this.onInstanceCreated = e), this;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Le = '[DEFAULT]';
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class _a {
  constructor(e, n) {
    (this.name = e),
      (this.container = n),
      (this.component = null),
      (this.instances = new Map()),
      (this.instancesDeferred = new Map()),
      (this.instancesOptions = new Map()),
      (this.onInitCallbacks = new Map());
  }
  get(e) {
    const n = this.normalizeInstanceIdentifier(e);
    if (!this.instancesDeferred.has(n)) {
      const r = new ia();
      if (
        (this.instancesDeferred.set(n, r),
        this.isInitialized(n) || this.shouldAutoInitialize())
      )
        try {
          const o = this.getOrInitializeService({ instanceIdentifier: n });
          o && r.resolve(o);
        } catch {}
    }
    return this.instancesDeferred.get(n).promise;
  }
  getImmediate(e) {
    var n;
    const r = this.normalizeInstanceIdentifier(
        e == null ? void 0 : e.identifier,
      ),
      o =
        (n = e == null ? void 0 : e.optional) !== null && n !== void 0 ? n : !1;
    if (this.isInitialized(r) || this.shouldAutoInitialize())
      try {
        return this.getOrInitializeService({ instanceIdentifier: r });
      } catch (c) {
        if (o) return null;
        throw c;
      }
    else {
      if (o) return null;
      throw Error(`Service ${this.name} is not available`);
    }
  }
  getComponent() {
    return this.component;
  }
  setComponent(e) {
    if (e.name !== this.name)
      throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);
    if (this.component)
      throw Error(`Component for ${this.name} has already been provided`);
    if (((this.component = e), !!this.shouldAutoInitialize())) {
      if (Ia(e))
        try {
          this.getOrInitializeService({ instanceIdentifier: Le });
        } catch {}
      for (const [n, r] of this.instancesDeferred.entries()) {
        const o = this.normalizeInstanceIdentifier(n);
        try {
          const c = this.getOrInitializeService({ instanceIdentifier: o });
          r.resolve(c);
        } catch {}
      }
    }
  }
  clearInstance(e = Le) {
    this.instancesDeferred.delete(e),
      this.instancesOptions.delete(e),
      this.instances.delete(e);
  }
  async delete() {
    const e = Array.from(this.instances.values());
    await Promise.all([
      ...e.filter((n) => 'INTERNAL' in n).map((n) => n.INTERNAL.delete()),
      ...e.filter((n) => '_delete' in n).map((n) => n._delete()),
    ]);
  }
  isComponentSet() {
    return this.component != null;
  }
  isInitialized(e = Le) {
    return this.instances.has(e);
  }
  getOptions(e = Le) {
    return this.instancesOptions.get(e) || {};
  }
  initialize(e = {}) {
    const { options: n = {} } = e,
      r = this.normalizeInstanceIdentifier(e.instanceIdentifier);
    if (this.isInitialized(r))
      throw Error(`${this.name}(${r}) has already been initialized`);
    if (!this.isComponentSet())
      throw Error(`Component ${this.name} has not been registered yet`);
    const o = this.getOrInitializeService({
      instanceIdentifier: r,
      options: n,
    });
    for (const [c, h] of this.instancesDeferred.entries()) {
      const g = this.normalizeInstanceIdentifier(c);
      r === g && h.resolve(o);
    }
    return o;
  }
  onInit(e, n) {
    var r;
    const o = this.normalizeInstanceIdentifier(n),
      c =
        (r = this.onInitCallbacks.get(o)) !== null && r !== void 0
          ? r
          : new Set();
    c.add(e), this.onInitCallbacks.set(o, c);
    const h = this.instances.get(o);
    return (
      h && e(h, o),
      () => {
        c.delete(e);
      }
    );
  }
  invokeOnInitCallbacks(e, n) {
    const r = this.onInitCallbacks.get(n);
    if (r)
      for (const o of r)
        try {
          o(e, n);
        } catch {}
  }
  getOrInitializeService({ instanceIdentifier: e, options: n = {} }) {
    let r = this.instances.get(e);
    if (
      !r &&
      this.component &&
      ((r = this.component.instanceFactory(this.container, {
        instanceIdentifier: ya(e),
        options: n,
      })),
      this.instances.set(e, r),
      this.instancesOptions.set(e, n),
      this.invokeOnInitCallbacks(r, e),
      this.component.onInstanceCreated)
    )
      try {
        this.component.onInstanceCreated(this.container, e, r);
      } catch {}
    return r || null;
  }
  normalizeInstanceIdentifier(e = Le) {
    return this.component ? (this.component.multipleInstances ? e : Le) : e;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== 'EXPLICIT';
  }
}
function ya(i) {
  return i === Le ? void 0 : i;
}
function Ia(i) {
  return i.instantiationMode === 'EAGER';
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class wa {
  constructor(e) {
    (this.name = e), (this.providers = new Map());
  }
  addComponent(e) {
    const n = this.getProvider(e.name);
    if (n.isComponentSet())
      throw new Error(
        `Component ${e.name} has already been registered with ${this.name}`,
      );
    n.setComponent(e);
  }
  addOrOverwriteComponent(e) {
    this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name),
      this.addComponent(e);
  }
  getProvider(e) {
    if (this.providers.has(e)) return this.providers.get(e);
    const n = new _a(e, this);
    return this.providers.set(e, n), n;
  }
  getProviders() {
    return Array.from(this.providers.values());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var N;
(function (i) {
  (i[(i.DEBUG = 0)] = 'DEBUG'),
    (i[(i.VERBOSE = 1)] = 'VERBOSE'),
    (i[(i.INFO = 2)] = 'INFO'),
    (i[(i.WARN = 3)] = 'WARN'),
    (i[(i.ERROR = 4)] = 'ERROR'),
    (i[(i.SILENT = 5)] = 'SILENT');
})(N || (N = {}));
const Ea = {
    debug: N.DEBUG,
    verbose: N.VERBOSE,
    info: N.INFO,
    warn: N.WARN,
    error: N.ERROR,
    silent: N.SILENT,
  },
  Ta = N.INFO,
  Aa = {
    [N.DEBUG]: 'log',
    [N.VERBOSE]: 'log',
    [N.INFO]: 'info',
    [N.WARN]: 'warn',
    [N.ERROR]: 'error',
  },
  ba = (i, e, ...n) => {
    if (e < i.logLevel) return;
    const r = new Date().toISOString(),
      o = Aa[e];
    if (o) console[o](`[${r}]  ${i.name}:`, ...n);
    else
      throw new Error(
        `Attempted to log a message with an invalid logType (value: ${e})`,
      );
  };
class ni {
  constructor(e) {
    (this.name = e),
      (this._logLevel = Ta),
      (this._logHandler = ba),
      (this._userLogHandler = null);
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(e) {
    if (!(e in N))
      throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
    this._logLevel = e;
  }
  setLogLevel(e) {
    this._logLevel = typeof e == 'string' ? Ea[e] : e;
  }
  get logHandler() {
    return this._logHandler;
  }
  set logHandler(e) {
    if (typeof e != 'function')
      throw new TypeError('Value assigned to `logHandler` must be a function');
    this._logHandler = e;
  }
  get userLogHandler() {
    return this._userLogHandler;
  }
  set userLogHandler(e) {
    this._userLogHandler = e;
  }
  debug(...e) {
    this._userLogHandler && this._userLogHandler(this, N.DEBUG, ...e),
      this._logHandler(this, N.DEBUG, ...e);
  }
  log(...e) {
    this._userLogHandler && this._userLogHandler(this, N.VERBOSE, ...e),
      this._logHandler(this, N.VERBOSE, ...e);
  }
  info(...e) {
    this._userLogHandler && this._userLogHandler(this, N.INFO, ...e),
      this._logHandler(this, N.INFO, ...e);
  }
  warn(...e) {
    this._userLogHandler && this._userLogHandler(this, N.WARN, ...e),
      this._logHandler(this, N.WARN, ...e);
  }
  error(...e) {
    this._userLogHandler && this._userLogHandler(this, N.ERROR, ...e),
      this._logHandler(this, N.ERROR, ...e);
  }
}
const Sa = (i, e) => e.some((n) => i instanceof n);
let Ir, wr;
function ka() {
  return (
    Ir ||
    (Ir = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
  );
}
function Ca() {
  return (
    wr ||
    (wr = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey,
    ])
  );
}
const os = new WeakMap(),
  Wn = new WeakMap(),
  as = new WeakMap(),
  jn = new WeakMap(),
  ii = new WeakMap();
function Ra(i) {
  const e = new Promise((n, r) => {
    const o = () => {
        i.removeEventListener('success', c), i.removeEventListener('error', h);
      },
      c = () => {
        n(ke(i.result)), o();
      },
      h = () => {
        r(i.error), o();
      };
    i.addEventListener('success', c), i.addEventListener('error', h);
  });
  return (
    e
      .then((n) => {
        n instanceof IDBCursor && os.set(n, i);
      })
      .catch(() => {}),
    ii.set(e, i),
    e
  );
}
function Pa(i) {
  if (Wn.has(i)) return;
  const e = new Promise((n, r) => {
    const o = () => {
        i.removeEventListener('complete', c),
          i.removeEventListener('error', h),
          i.removeEventListener('abort', h);
      },
      c = () => {
        n(), o();
      },
      h = () => {
        r(i.error || new DOMException('AbortError', 'AbortError')), o();
      };
    i.addEventListener('complete', c),
      i.addEventListener('error', h),
      i.addEventListener('abort', h);
  });
  Wn.set(i, e);
}
let Gn = {
  get(i, e, n) {
    if (i instanceof IDBTransaction) {
      if (e === 'done') return Wn.get(i);
      if (e === 'objectStoreNames') return i.objectStoreNames || as.get(i);
      if (e === 'store')
        return n.objectStoreNames[1]
          ? void 0
          : n.objectStore(n.objectStoreNames[0]);
    }
    return ke(i[e]);
  },
  set(i, e, n) {
    return (i[e] = n), !0;
  },
  has(i, e) {
    return i instanceof IDBTransaction && (e === 'done' || e === 'store')
      ? !0
      : e in i;
  },
};
function Oa(i) {
  Gn = i(Gn);
}
function Na(i) {
  return i === IDBDatabase.prototype.transaction &&
    !('objectStoreNames' in IDBTransaction.prototype)
    ? function (e, ...n) {
        const r = i.call(Fn(this), e, ...n);
        return as.set(r, e.sort ? e.sort() : [e]), ke(r);
      }
    : Ca().includes(i)
      ? function (...e) {
          return i.apply(Fn(this), e), ke(os.get(this));
        }
      : function (...e) {
          return ke(i.apply(Fn(this), e));
        };
}
function Da(i) {
  return typeof i == 'function'
    ? Na(i)
    : (i instanceof IDBTransaction && Pa(i),
      Sa(i, ka()) ? new Proxy(i, Gn) : i);
}
function ke(i) {
  if (i instanceof IDBRequest) return Ra(i);
  if (jn.has(i)) return jn.get(i);
  const e = Da(i);
  return e !== i && (jn.set(i, e), ii.set(e, i)), e;
}
const Fn = (i) => ii.get(i);
function La(i, e, { blocked: n, upgrade: r, blocking: o, terminated: c } = {}) {
  const h = indexedDB.open(i, e),
    g = ke(h);
  return (
    r &&
      h.addEventListener('upgradeneeded', (I) => {
        r(ke(h.result), I.oldVersion, I.newVersion, ke(h.transaction), I);
      }),
    n && h.addEventListener('blocked', (I) => n(I.oldVersion, I.newVersion, I)),
    g
      .then((I) => {
        c && I.addEventListener('close', () => c()),
          o &&
            I.addEventListener('versionchange', (E) =>
              o(E.oldVersion, E.newVersion, E),
            );
      })
      .catch(() => {}),
    g
  );
}
const Ma = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'],
  Ua = ['put', 'add', 'delete', 'clear'],
  Bn = new Map();
function Er(i, e) {
  if (!(i instanceof IDBDatabase && !(e in i) && typeof e == 'string')) return;
  if (Bn.get(e)) return Bn.get(e);
  const n = e.replace(/FromIndex$/, ''),
    r = e !== n,
    o = Ua.includes(n);
  if (
    !(n in (r ? IDBIndex : IDBObjectStore).prototype) ||
    !(o || Ma.includes(n))
  )
    return;
  const c = async function (h, ...g) {
    const I = this.transaction(h, o ? 'readwrite' : 'readonly');
    let E = I.store;
    return (
      r && (E = E.index(g.shift())),
      (await Promise.all([E[n](...g), o && I.done]))[0]
    );
  };
  return Bn.set(e, c), c;
}
Oa((i) => ({
  ...i,
  get: (e, n, r) => Er(e, n) || i.get(e, n, r),
  has: (e, n) => !!Er(e, n) || i.has(e, n),
}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class xa {
  constructor(e) {
    this.container = e;
  }
  getPlatformInfoString() {
    return this.container
      .getProviders()
      .map((n) => {
        if (ja(n)) {
          const r = n.getImmediate();
          return `${r.library}/${r.version}`;
        } else return null;
      })
      .filter((n) => n)
      .join(' ');
  }
}
function ja(i) {
  const e = i.getComponent();
  return (e == null ? void 0 : e.type) === 'VERSION';
}
const Kn = '@firebase/app',
  Tr = '0.10.9';
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const fe = new ni('@firebase/app'),
  Fa = '@firebase/app-compat',
  Ba = '@firebase/analytics-compat',
  Va = '@firebase/analytics',
  Ha = '@firebase/app-check-compat',
  $a = '@firebase/app-check',
  za = '@firebase/auth',
  Wa = '@firebase/auth-compat',
  Ga = '@firebase/database',
  Ka = '@firebase/database-compat',
  qa = '@firebase/functions',
  Ja = '@firebase/functions-compat',
  Xa = '@firebase/installations',
  Ya = '@firebase/installations-compat',
  Qa = '@firebase/messaging',
  Za = '@firebase/messaging-compat',
  ec = '@firebase/performance',
  tc = '@firebase/performance-compat',
  nc = '@firebase/remote-config',
  ic = '@firebase/remote-config-compat',
  rc = '@firebase/storage',
  sc = '@firebase/storage-compat',
  oc = '@firebase/firestore',
  ac = '@firebase/vertexai-preview',
  cc = '@firebase/firestore-compat',
  lc = 'firebase',
  hc = '10.13.0';
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const qn = '[DEFAULT]',
  uc = {
    [Kn]: 'fire-core',
    [Fa]: 'fire-core-compat',
    [Va]: 'fire-analytics',
    [Ba]: 'fire-analytics-compat',
    [$a]: 'fire-app-check',
    [Ha]: 'fire-app-check-compat',
    [za]: 'fire-auth',
    [Wa]: 'fire-auth-compat',
    [Ga]: 'fire-rtdb',
    [Ka]: 'fire-rtdb-compat',
    [qa]: 'fire-fn',
    [Ja]: 'fire-fn-compat',
    [Xa]: 'fire-iid',
    [Ya]: 'fire-iid-compat',
    [Qa]: 'fire-fcm',
    [Za]: 'fire-fcm-compat',
    [ec]: 'fire-perf',
    [tc]: 'fire-perf-compat',
    [nc]: 'fire-rc',
    [ic]: 'fire-rc-compat',
    [rc]: 'fire-gcs',
    [sc]: 'fire-gcs-compat',
    [oc]: 'fire-fst',
    [cc]: 'fire-fst-compat',
    [ac]: 'fire-vertex',
    'fire-js': 'fire-js',
    [lc]: 'fire-js-all',
  };
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const en = new Map(),
  dc = new Map(),
  Jn = new Map();
function Ar(i, e) {
  try {
    i.container.addComponent(e);
  } catch (n) {
    fe.debug(
      `Component ${e.name} failed to register with FirebaseApp ${i.name}`,
      n,
    );
  }
}
function Ye(i) {
  const e = i.name;
  if (Jn.has(e))
    return (
      fe.debug(`There were multiple attempts to register component ${e}.`), !1
    );
  Jn.set(e, i);
  for (const n of en.values()) Ar(n, i);
  for (const n of dc.values()) Ar(n, i);
  return !0;
}
function ri(i, e) {
  const n = i.container.getProvider('heartbeat').getImmediate({ optional: !0 });
  return n && n.triggerHeartbeat(), i.container.getProvider(e);
}
function Se(i) {
  return i.settings !== void 0;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const fc = {
    'no-app':
      "No Firebase App '{$appName}' has been created - call initializeApp() first",
    'bad-app-name': "Illegal App name: '{$appName}'",
    'duplicate-app':
      "Firebase App named '{$appName}' already exists with different options or config",
    'app-deleted': "Firebase App named '{$appName}' already deleted",
    'server-app-deleted': 'Firebase Server App has been deleted',
    'no-options':
      'Need to provide options, when not being deployed to hosting via source.',
    'invalid-app-argument':
      'firebase.{$appName}() takes either no argument or a Firebase App instance.',
    'invalid-log-argument':
      'First argument to `onLog` must be null or a function.',
    'idb-open':
      'Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.',
    'idb-get':
      'Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.',
    'idb-set':
      'Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.',
    'idb-delete':
      'Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.',
    'finalization-registry-not-supported':
      'FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.',
    'invalid-server-app-environment':
      'FirebaseServerApp is not for use in browser environments.',
  },
  Ce = new Et('app', 'Firebase', fc);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class pc {
  constructor(e, n, r) {
    (this._isDeleted = !1),
      (this._options = Object.assign({}, e)),
      (this._config = Object.assign({}, n)),
      (this._name = n.name),
      (this._automaticDataCollectionEnabled = n.automaticDataCollectionEnabled),
      (this._container = r),
      this.container.addComponent(new xe('app', () => this, 'PUBLIC'));
  }
  get automaticDataCollectionEnabled() {
    return this.checkDestroyed(), this._automaticDataCollectionEnabled;
  }
  set automaticDataCollectionEnabled(e) {
    this.checkDestroyed(), (this._automaticDataCollectionEnabled = e);
  }
  get name() {
    return this.checkDestroyed(), this._name;
  }
  get options() {
    return this.checkDestroyed(), this._options;
  }
  get config() {
    return this.checkDestroyed(), this._config;
  }
  get container() {
    return this._container;
  }
  get isDeleted() {
    return this._isDeleted;
  }
  set isDeleted(e) {
    this._isDeleted = e;
  }
  checkDestroyed() {
    if (this.isDeleted) throw Ce.create('app-deleted', { appName: this._name });
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const et = hc;
function cs(i, e = {}) {
  let n = i;
  typeof e != 'object' && (e = { name: e });
  const r = Object.assign({ name: qn, automaticDataCollectionEnabled: !1 }, e),
    o = r.name;
  if (typeof o != 'string' || !o)
    throw Ce.create('bad-app-name', { appName: String(o) });
  if ((n || (n = rs()), !n)) throw Ce.create('no-options');
  const c = en.get(o);
  if (c) {
    if (Zt(n, c.options) && Zt(r, c.config)) return c;
    throw Ce.create('duplicate-app', { appName: o });
  }
  const h = new wa(o);
  for (const I of Jn.values()) h.addComponent(I);
  const g = new pc(n, r, h);
  return en.set(o, g), g;
}
function ls(i = qn) {
  const e = en.get(i);
  if (!e && i === qn && rs()) return cs();
  if (!e) throw Ce.create('no-app', { appName: i });
  return e;
}
function Re(i, e, n) {
  var r;
  let o = (r = uc[i]) !== null && r !== void 0 ? r : i;
  n && (o += `-${n}`);
  const c = o.match(/\s|\//),
    h = e.match(/\s|\//);
  if (c || h) {
    const g = [`Unable to register library "${o}" with version "${e}":`];
    c &&
      g.push(
        `library name "${o}" contains illegal characters (whitespace or "/")`,
      ),
      c && h && g.push('and'),
      h &&
        g.push(
          `version name "${e}" contains illegal characters (whitespace or "/")`,
        ),
      fe.warn(g.join(' '));
    return;
  }
  Ye(new xe(`${o}-version`, () => ({ library: o, version: e }), 'VERSION'));
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const gc = 'firebase-heartbeat-database',
  mc = 1,
  It = 'firebase-heartbeat-store';
let Vn = null;
function hs() {
  return (
    Vn ||
      (Vn = La(gc, mc, {
        upgrade: (i, e) => {
          switch (e) {
            case 0:
              try {
                i.createObjectStore(It);
              } catch (n) {
                console.warn(n);
              }
          }
        },
      }).catch((i) => {
        throw Ce.create('idb-open', { originalErrorMessage: i.message });
      })),
    Vn
  );
}
async function vc(i) {
  try {
    const n = (await hs()).transaction(It),
      r = await n.objectStore(It).get(us(i));
    return await n.done, r;
  } catch (e) {
    if (e instanceof me) fe.warn(e.message);
    else {
      const n = Ce.create('idb-get', {
        originalErrorMessage: e == null ? void 0 : e.message,
      });
      fe.warn(n.message);
    }
  }
}
async function br(i, e) {
  try {
    const r = (await hs()).transaction(It, 'readwrite');
    await r.objectStore(It).put(e, us(i)), await r.done;
  } catch (n) {
    if (n instanceof me) fe.warn(n.message);
    else {
      const r = Ce.create('idb-set', {
        originalErrorMessage: n == null ? void 0 : n.message,
      });
      fe.warn(r.message);
    }
  }
}
function us(i) {
  return `${i.name}!${i.options.appId}`;
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const _c = 1024,
  yc = 30 * 24 * 60 * 60 * 1e3;
class Ic {
  constructor(e) {
    (this.container = e), (this._heartbeatsCache = null);
    const n = this.container.getProvider('app').getImmediate();
    (this._storage = new Ec(n)),
      (this._heartbeatsCachePromise = this._storage
        .read()
        .then((r) => ((this._heartbeatsCache = r), r)));
  }
  async triggerHeartbeat() {
    var e, n, r;
    try {
      const c = this.container
          .getProvider('platform-logger')
          .getImmediate()
          .getPlatformInfoString(),
        h = Sr();
      return (
        console.log(
          'heartbeats',
          (e = this._heartbeatsCache) === null || e === void 0
            ? void 0
            : e.heartbeats,
        ),
        (((n = this._heartbeatsCache) === null || n === void 0
          ? void 0
          : n.heartbeats) == null &&
          ((this._heartbeatsCache = await this._heartbeatsCachePromise),
          ((r = this._heartbeatsCache) === null || r === void 0
            ? void 0
            : r.heartbeats) == null)) ||
        this._heartbeatsCache.lastSentHeartbeatDate === h ||
        this._heartbeatsCache.heartbeats.some((g) => g.date === h)
          ? void 0
          : (this._heartbeatsCache.heartbeats.push({ date: h, agent: c }),
            (this._heartbeatsCache.heartbeats =
              this._heartbeatsCache.heartbeats.filter((g) => {
                const I = new Date(g.date).valueOf();
                return Date.now() - I <= yc;
              })),
            this._storage.overwrite(this._heartbeatsCache))
      );
    } catch (o) {
      fe.warn(o);
    }
  }
  async getHeartbeatsHeader() {
    var e;
    try {
      if (
        (this._heartbeatsCache === null && (await this._heartbeatsCachePromise),
        ((e = this._heartbeatsCache) === null || e === void 0
          ? void 0
          : e.heartbeats) == null ||
          this._heartbeatsCache.heartbeats.length === 0)
      )
        return '';
      const n = Sr(),
        { heartbeatsToSend: r, unsentEntries: o } = wc(
          this._heartbeatsCache.heartbeats,
        ),
        c = Qt(JSON.stringify({ version: 2, heartbeats: r }));
      return (
        (this._heartbeatsCache.lastSentHeartbeatDate = n),
        o.length > 0
          ? ((this._heartbeatsCache.heartbeats = o),
            await this._storage.overwrite(this._heartbeatsCache))
          : ((this._heartbeatsCache.heartbeats = []),
            this._storage.overwrite(this._heartbeatsCache)),
        c
      );
    } catch (n) {
      return fe.warn(n), '';
    }
  }
}
function Sr() {
  return new Date().toISOString().substring(0, 10);
}
function wc(i, e = _c) {
  const n = [];
  let r = i.slice();
  for (const o of i) {
    const c = n.find((h) => h.agent === o.agent);
    if (c) {
      if ((c.dates.push(o.date), kr(n) > e)) {
        c.dates.pop();
        break;
      }
    } else if ((n.push({ agent: o.agent, dates: [o.date] }), kr(n) > e)) {
      n.pop();
      break;
    }
    r = r.slice(1);
  }
  return { heartbeatsToSend: n, unsentEntries: r };
}
class Ec {
  constructor(e) {
    (this.app = e),
      (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck());
  }
  async runIndexedDBEnvironmentCheck() {
    return la()
      ? ha()
          .then(() => !0)
          .catch(() => !1)
      : !1;
  }
  async read() {
    if (await this._canUseIndexedDBPromise) {
      const n = await vc(this.app);
      return n != null && n.heartbeats ? n : { heartbeats: [] };
    } else return { heartbeats: [] };
  }
  async overwrite(e) {
    var n;
    if (await this._canUseIndexedDBPromise) {
      const o = await this.read();
      return br(this.app, {
        lastSentHeartbeatDate:
          (n = e.lastSentHeartbeatDate) !== null && n !== void 0
            ? n
            : o.lastSentHeartbeatDate,
        heartbeats: e.heartbeats,
      });
    } else return;
  }
  async add(e) {
    var n;
    if (await this._canUseIndexedDBPromise) {
      const o = await this.read();
      return br(this.app, {
        lastSentHeartbeatDate:
          (n = e.lastSentHeartbeatDate) !== null && n !== void 0
            ? n
            : o.lastSentHeartbeatDate,
        heartbeats: [...o.heartbeats, ...e.heartbeats],
      });
    } else return;
  }
}
function kr(i) {
  return Qt(JSON.stringify({ version: 2, heartbeats: i })).length;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Tc(i) {
  Ye(new xe('platform-logger', (e) => new xa(e), 'PRIVATE')),
    Ye(new xe('heartbeat', (e) => new Ic(e), 'PRIVATE')),
    Re(Kn, Tr, i),
    Re(Kn, Tr, 'esm2017'),
    Re('fire-js', '');
}
Tc('');
function si(i, e) {
  var n = {};
  for (var r in i)
    Object.prototype.hasOwnProperty.call(i, r) &&
      e.indexOf(r) < 0 &&
      (n[r] = i[r]);
  if (i != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var o = 0, r = Object.getOwnPropertySymbols(i); o < r.length; o++)
      e.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(i, r[o]) &&
        (n[r[o]] = i[r[o]]);
  return n;
}
function ds() {
  return {
    'dependent-sdk-initialized-before-auth':
      'Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.',
  };
}
const Ac = ds,
  fs = new Et('auth', 'Firebase', ds());
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const tn = new ni('@firebase/auth');
function bc(i, ...e) {
  tn.logLevel <= N.WARN && tn.warn(`Auth (${et}): ${i}`, ...e);
}
function qt(i, ...e) {
  tn.logLevel <= N.ERROR && tn.error(`Auth (${et}): ${i}`, ...e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function pe(i, ...e) {
  throw oi(i, ...e);
}
function re(i, ...e) {
  return oi(i, ...e);
}
function ps(i, e, n) {
  const r = Object.assign(Object.assign({}, Ac()), { [e]: n });
  return new Et('auth', 'Firebase', r).create(e, { appName: i.name });
}
function Ue(i) {
  return ps(
    i,
    'operation-not-supported-in-this-environment',
    'Operations that alter the current user are not supported in conjunction with FirebaseServerApp',
  );
}
function oi(i, ...e) {
  if (typeof i != 'string') {
    const n = e[0],
      r = [...e.slice(1)];
    return r[0] && (r[0].appName = i.name), i._errorFactory.create(n, ...r);
  }
  return fs.create(i, ...e);
}
function b(i, e, ...n) {
  if (!i) throw oi(e, ...n);
}
function he(i) {
  const e = 'INTERNAL ASSERTION FAILED: ' + i;
  throw (qt(e), new Error(e));
}
function ge(i, e) {
  i || he(e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Xn() {
  var i;
  return (
    (typeof self < 'u' &&
      ((i = self.location) === null || i === void 0 ? void 0 : i.href)) ||
    ''
  );
}
function Sc() {
  return Cr() === 'http:' || Cr() === 'https:';
}
function Cr() {
  var i;
  return (
    (typeof self < 'u' &&
      ((i = self.location) === null || i === void 0 ? void 0 : i.protocol)) ||
    null
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function kc() {
  return typeof navigator < 'u' &&
    navigator &&
    'onLine' in navigator &&
    typeof navigator.onLine == 'boolean' &&
    (Sc() || oa() || 'connection' in navigator)
    ? navigator.onLine
    : !0;
}
function Cc() {
  if (typeof navigator > 'u') return null;
  const i = navigator;
  return (i.languages && i.languages[0]) || i.language || null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class At {
  constructor(e, n) {
    (this.shortDelay = e),
      (this.longDelay = n),
      ge(n > e, 'Short delay should be less than long delay!'),
      (this.isMobile = sa() || aa());
  }
  get() {
    return kc()
      ? this.isMobile
        ? this.longDelay
        : this.shortDelay
      : Math.min(5e3, this.shortDelay);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ai(i, e) {
  ge(i.emulator, 'Emulator should always be set here');
  const { url: n } = i.emulator;
  return e ? `${n}${e.startsWith('/') ? e.slice(1) : e}` : n;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class gs {
  static initialize(e, n, r) {
    (this.fetchImpl = e),
      n && (this.headersImpl = n),
      r && (this.responseImpl = r);
  }
  static fetch() {
    if (this.fetchImpl) return this.fetchImpl;
    if (typeof self < 'u' && 'fetch' in self) return self.fetch;
    if (typeof globalThis < 'u' && globalThis.fetch) return globalThis.fetch;
    if (typeof fetch < 'u') return fetch;
    he(
      'Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill',
    );
  }
  static headers() {
    if (this.headersImpl) return this.headersImpl;
    if (typeof self < 'u' && 'Headers' in self) return self.Headers;
    if (typeof globalThis < 'u' && globalThis.Headers)
      return globalThis.Headers;
    if (typeof Headers < 'u') return Headers;
    he(
      'Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill',
    );
  }
  static response() {
    if (this.responseImpl) return this.responseImpl;
    if (typeof self < 'u' && 'Response' in self) return self.Response;
    if (typeof globalThis < 'u' && globalThis.Response)
      return globalThis.Response;
    if (typeof Response < 'u') return Response;
    he(
      'Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill',
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Rc = {
  CREDENTIAL_MISMATCH: 'custom-token-mismatch',
  MISSING_CUSTOM_TOKEN: 'internal-error',
  INVALID_IDENTIFIER: 'invalid-email',
  MISSING_CONTINUE_URI: 'internal-error',
  INVALID_PASSWORD: 'wrong-password',
  MISSING_PASSWORD: 'missing-password',
  INVALID_LOGIN_CREDENTIALS: 'invalid-credential',
  EMAIL_EXISTS: 'email-already-in-use',
  PASSWORD_LOGIN_DISABLED: 'operation-not-allowed',
  INVALID_IDP_RESPONSE: 'invalid-credential',
  INVALID_PENDING_TOKEN: 'invalid-credential',
  FEDERATED_USER_ID_ALREADY_LINKED: 'credential-already-in-use',
  MISSING_REQ_TYPE: 'internal-error',
  EMAIL_NOT_FOUND: 'user-not-found',
  RESET_PASSWORD_EXCEED_LIMIT: 'too-many-requests',
  EXPIRED_OOB_CODE: 'expired-action-code',
  INVALID_OOB_CODE: 'invalid-action-code',
  MISSING_OOB_CODE: 'internal-error',
  CREDENTIAL_TOO_OLD_LOGIN_AGAIN: 'requires-recent-login',
  INVALID_ID_TOKEN: 'invalid-user-token',
  TOKEN_EXPIRED: 'user-token-expired',
  USER_NOT_FOUND: 'user-token-expired',
  TOO_MANY_ATTEMPTS_TRY_LATER: 'too-many-requests',
  PASSWORD_DOES_NOT_MEET_REQUIREMENTS: 'password-does-not-meet-requirements',
  INVALID_CODE: 'invalid-verification-code',
  INVALID_SESSION_INFO: 'invalid-verification-id',
  INVALID_TEMPORARY_PROOF: 'invalid-credential',
  MISSING_SESSION_INFO: 'missing-verification-id',
  SESSION_EXPIRED: 'code-expired',
  MISSING_ANDROID_PACKAGE_NAME: 'missing-android-pkg-name',
  UNAUTHORIZED_DOMAIN: 'unauthorized-continue-uri',
  INVALID_OAUTH_CLIENT_ID: 'invalid-oauth-client-id',
  ADMIN_ONLY_OPERATION: 'admin-restricted-operation',
  INVALID_MFA_PENDING_CREDENTIAL: 'invalid-multi-factor-session',
  MFA_ENROLLMENT_NOT_FOUND: 'multi-factor-info-not-found',
  MISSING_MFA_ENROLLMENT_ID: 'missing-multi-factor-info',
  MISSING_MFA_PENDING_CREDENTIAL: 'missing-multi-factor-session',
  SECOND_FACTOR_EXISTS: 'second-factor-already-in-use',
  SECOND_FACTOR_LIMIT_EXCEEDED: 'maximum-second-factor-count-exceeded',
  BLOCKING_FUNCTION_ERROR_RESPONSE: 'internal-error',
  RECAPTCHA_NOT_ENABLED: 'recaptcha-not-enabled',
  MISSING_RECAPTCHA_TOKEN: 'missing-recaptcha-token',
  INVALID_RECAPTCHA_TOKEN: 'invalid-recaptcha-token',
  INVALID_RECAPTCHA_ACTION: 'invalid-recaptcha-action',
  MISSING_CLIENT_TYPE: 'missing-client-type',
  MISSING_RECAPTCHA_VERSION: 'missing-recaptcha-version',
  INVALID_RECAPTCHA_VERSION: 'invalid-recaptcha-version',
  INVALID_REQ_TYPE: 'invalid-req-type',
};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Pc = new At(3e4, 6e4);
function ci(i, e) {
  return i.tenantId && !e.tenantId
    ? Object.assign(Object.assign({}, e), { tenantId: i.tenantId })
    : e;
}
async function tt(i, e, n, r, o = {}) {
  return ms(i, o, async () => {
    let c = {},
      h = {};
    r && (e === 'GET' ? (h = r) : (c = { body: JSON.stringify(r) }));
    const g = Tt(Object.assign({ key: i.config.apiKey }, h)).slice(1),
      I = await i._getAdditionalHeaders();
    return (
      (I['Content-Type'] = 'application/json'),
      i.languageCode && (I['X-Firebase-Locale'] = i.languageCode),
      gs.fetch()(
        vs(i, i.config.apiHost, n, g),
        Object.assign(
          { method: e, headers: I, referrerPolicy: 'no-referrer' },
          c,
        ),
      )
    );
  });
}
async function ms(i, e, n) {
  i._canInitEmulator = !1;
  const r = Object.assign(Object.assign({}, Rc), e);
  try {
    const o = new Nc(i),
      c = await Promise.race([n(), o.promise]);
    o.clearNetworkTimeout();
    const h = await c.json();
    if ('needConfirmation' in h)
      throw Wt(i, 'account-exists-with-different-credential', h);
    if (c.ok && !('errorMessage' in h)) return h;
    {
      const g = c.ok ? h.errorMessage : h.error.message,
        [I, E] = g.split(' : ');
      if (I === 'FEDERATED_USER_ID_ALREADY_LINKED')
        throw Wt(i, 'credential-already-in-use', h);
      if (I === 'EMAIL_EXISTS') throw Wt(i, 'email-already-in-use', h);
      if (I === 'USER_DISABLED') throw Wt(i, 'user-disabled', h);
      const A = r[I] || I.toLowerCase().replace(/[_\s]+/g, '-');
      if (E) throw ps(i, A, E);
      pe(i, A);
    }
  } catch (o) {
    if (o instanceof me) throw o;
    pe(i, 'network-request-failed', { message: String(o) });
  }
}
async function Oc(i, e, n, r, o = {}) {
  const c = await tt(i, e, n, r, o);
  return (
    'mfaPendingCredential' in c &&
      pe(i, 'multi-factor-auth-required', { _serverResponse: c }),
    c
  );
}
function vs(i, e, n, r) {
  const o = `${e}${n}?${r}`;
  return i.config.emulator ? ai(i.config, o) : `${i.config.apiScheme}://${o}`;
}
class Nc {
  constructor(e) {
    (this.auth = e),
      (this.timer = null),
      (this.promise = new Promise((n, r) => {
        this.timer = setTimeout(
          () => r(re(this.auth, 'network-request-failed')),
          Pc.get(),
        );
      }));
  }
  clearNetworkTimeout() {
    clearTimeout(this.timer);
  }
}
function Wt(i, e, n) {
  const r = { appName: i.name };
  n.email && (r.email = n.email),
    n.phoneNumber && (r.phoneNumber = n.phoneNumber);
  const o = re(i, e, r);
  return (o.customData._tokenResponse = n), o;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Dc(i, e) {
  return tt(i, 'POST', '/v1/accounts:delete', e);
}
async function _s(i, e) {
  return tt(i, 'POST', '/v1/accounts:lookup', e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function yt(i) {
  if (i)
    try {
      const e = new Date(Number(i));
      if (!isNaN(e.getTime())) return e.toUTCString();
    } catch {}
}
async function Lc(i, e = !1) {
  const n = Fe(i),
    r = await n.getIdToken(e),
    o = li(r);
  b(o && o.exp && o.auth_time && o.iat, n.auth, 'internal-error');
  const c = typeof o.firebase == 'object' ? o.firebase : void 0,
    h = c == null ? void 0 : c.sign_in_provider;
  return {
    claims: o,
    token: r,
    authTime: yt(Hn(o.auth_time)),
    issuedAtTime: yt(Hn(o.iat)),
    expirationTime: yt(Hn(o.exp)),
    signInProvider: h || null,
    signInSecondFactor: (c == null ? void 0 : c.sign_in_second_factor) || null,
  };
}
function Hn(i) {
  return Number(i) * 1e3;
}
function li(i) {
  const [e, n, r] = i.split('.');
  if (e === void 0 || n === void 0 || r === void 0)
    return qt('JWT malformed, contained fewer than 3 sections'), null;
  try {
    const o = ns(n);
    return o
      ? JSON.parse(o)
      : (qt('Failed to decode base64 JWT payload'), null);
  } catch (o) {
    return (
      qt(
        'Caught error parsing JWT payload as JSON',
        o == null ? void 0 : o.toString(),
      ),
      null
    );
  }
}
function Rr(i) {
  const e = li(i);
  return (
    b(e, 'internal-error'),
    b(typeof e.exp < 'u', 'internal-error'),
    b(typeof e.iat < 'u', 'internal-error'),
    Number(e.exp) - Number(e.iat)
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function wt(i, e, n = !1) {
  if (n) return e;
  try {
    return await e;
  } catch (r) {
    throw (
      (r instanceof me &&
        Mc(r) &&
        i.auth.currentUser === i &&
        (await i.auth.signOut()),
      r)
    );
  }
}
function Mc({ code: i }) {
  return i === 'auth/user-disabled' || i === 'auth/user-token-expired';
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Uc {
  constructor(e) {
    (this.user = e),
      (this.isRunning = !1),
      (this.timerId = null),
      (this.errorBackoff = 3e4);
  }
  _start() {
    this.isRunning || ((this.isRunning = !0), this.schedule());
  }
  _stop() {
    this.isRunning &&
      ((this.isRunning = !1),
      this.timerId !== null && clearTimeout(this.timerId));
  }
  getInterval(e) {
    var n;
    if (e) {
      const r = this.errorBackoff;
      return (this.errorBackoff = Math.min(this.errorBackoff * 2, 96e4)), r;
    } else {
      this.errorBackoff = 3e4;
      const o =
        ((n = this.user.stsTokenManager.expirationTime) !== null && n !== void 0
          ? n
          : 0) -
        Date.now() -
        3e5;
      return Math.max(0, o);
    }
  }
  schedule(e = !1) {
    if (!this.isRunning) return;
    const n = this.getInterval(e);
    this.timerId = setTimeout(async () => {
      await this.iteration();
    }, n);
  }
  async iteration() {
    try {
      await this.user.getIdToken(!0);
    } catch (e) {
      (e == null ? void 0 : e.code) === 'auth/network-request-failed' &&
        this.schedule(!0);
      return;
    }
    this.schedule();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Yn {
  constructor(e, n) {
    (this.createdAt = e), (this.lastLoginAt = n), this._initializeTime();
  }
  _initializeTime() {
    (this.lastSignInTime = yt(this.lastLoginAt)),
      (this.creationTime = yt(this.createdAt));
  }
  _copy(e) {
    (this.createdAt = e.createdAt),
      (this.lastLoginAt = e.lastLoginAt),
      this._initializeTime();
  }
  toJSON() {
    return { createdAt: this.createdAt, lastLoginAt: this.lastLoginAt };
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function nn(i) {
  var e;
  const n = i.auth,
    r = await i.getIdToken(),
    o = await wt(i, _s(n, { idToken: r }));
  b(o == null ? void 0 : o.users.length, n, 'internal-error');
  const c = o.users[0];
  i._notifyReloadListener(c);
  const h =
      !((e = c.providerUserInfo) === null || e === void 0) && e.length
        ? ys(c.providerUserInfo)
        : [],
    g = jc(i.providerData, h),
    I = i.isAnonymous,
    E = !(i.email && c.passwordHash) && !(g != null && g.length),
    A = I ? E : !1,
    S = {
      uid: c.localId,
      displayName: c.displayName || null,
      photoURL: c.photoUrl || null,
      email: c.email || null,
      emailVerified: c.emailVerified || !1,
      phoneNumber: c.phoneNumber || null,
      tenantId: c.tenantId || null,
      providerData: g,
      metadata: new Yn(c.createdAt, c.lastLoginAt),
      isAnonymous: A,
    };
  Object.assign(i, S);
}
async function xc(i) {
  const e = Fe(i);
  await nn(e),
    await e.auth._persistUserIfCurrent(e),
    e.auth._notifyListenersIfCurrent(e);
}
function jc(i, e) {
  return [
    ...i.filter((r) => !e.some((o) => o.providerId === r.providerId)),
    ...e,
  ];
}
function ys(i) {
  return i.map((e) => {
    var { providerId: n } = e,
      r = si(e, ['providerId']);
    return {
      providerId: n,
      uid: r.rawId || '',
      displayName: r.displayName || null,
      email: r.email || null,
      phoneNumber: r.phoneNumber || null,
      photoURL: r.photoUrl || null,
    };
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Fc(i, e) {
  const n = await ms(i, {}, async () => {
    const r = Tt({ grant_type: 'refresh_token', refresh_token: e }).slice(1),
      { tokenApiHost: o, apiKey: c } = i.config,
      h = vs(i, o, '/v1/token', `key=${c}`),
      g = await i._getAdditionalHeaders();
    return (
      (g['Content-Type'] = 'application/x-www-form-urlencoded'),
      gs.fetch()(h, { method: 'POST', headers: g, body: r })
    );
  });
  return {
    accessToken: n.access_token,
    expiresIn: n.expires_in,
    refreshToken: n.refresh_token,
  };
}
async function Bc(i, e) {
  return tt(i, 'POST', '/v2/accounts:revokeToken', ci(i, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ke {
  constructor() {
    (this.refreshToken = null),
      (this.accessToken = null),
      (this.expirationTime = null);
  }
  get isExpired() {
    return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
  }
  updateFromServerResponse(e) {
    b(e.idToken, 'internal-error'),
      b(typeof e.idToken < 'u', 'internal-error'),
      b(typeof e.refreshToken < 'u', 'internal-error');
    const n =
      'expiresIn' in e && typeof e.expiresIn < 'u'
        ? Number(e.expiresIn)
        : Rr(e.idToken);
    this.updateTokensAndExpiration(e.idToken, e.refreshToken, n);
  }
  updateFromIdToken(e) {
    b(e.length !== 0, 'internal-error');
    const n = Rr(e);
    this.updateTokensAndExpiration(e, null, n);
  }
  async getToken(e, n = !1) {
    return !n && this.accessToken && !this.isExpired
      ? this.accessToken
      : (b(this.refreshToken, e, 'user-token-expired'),
        this.refreshToken
          ? (await this.refresh(e, this.refreshToken), this.accessToken)
          : null);
  }
  clearRefreshToken() {
    this.refreshToken = null;
  }
  async refresh(e, n) {
    const { accessToken: r, refreshToken: o, expiresIn: c } = await Fc(e, n);
    this.updateTokensAndExpiration(r, o, Number(c));
  }
  updateTokensAndExpiration(e, n, r) {
    (this.refreshToken = n || null),
      (this.accessToken = e || null),
      (this.expirationTime = Date.now() + r * 1e3);
  }
  static fromJSON(e, n) {
    const { refreshToken: r, accessToken: o, expirationTime: c } = n,
      h = new Ke();
    return (
      r &&
        (b(typeof r == 'string', 'internal-error', { appName: e }),
        (h.refreshToken = r)),
      o &&
        (b(typeof o == 'string', 'internal-error', { appName: e }),
        (h.accessToken = o)),
      c &&
        (b(typeof c == 'number', 'internal-error', { appName: e }),
        (h.expirationTime = c)),
      h
    );
  }
  toJSON() {
    return {
      refreshToken: this.refreshToken,
      accessToken: this.accessToken,
      expirationTime: this.expirationTime,
    };
  }
  _assign(e) {
    (this.accessToken = e.accessToken),
      (this.refreshToken = e.refreshToken),
      (this.expirationTime = e.expirationTime);
  }
  _clone() {
    return Object.assign(new Ke(), this.toJSON());
  }
  _performRefresh() {
    return he('not implemented');
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function we(i, e) {
  b(typeof i == 'string' || typeof i > 'u', 'internal-error', { appName: e });
}
class ue {
  constructor(e) {
    var { uid: n, auth: r, stsTokenManager: o } = e,
      c = si(e, ['uid', 'auth', 'stsTokenManager']);
    (this.providerId = 'firebase'),
      (this.proactiveRefresh = new Uc(this)),
      (this.reloadUserInfo = null),
      (this.reloadListener = null),
      (this.uid = n),
      (this.auth = r),
      (this.stsTokenManager = o),
      (this.accessToken = o.accessToken),
      (this.displayName = c.displayName || null),
      (this.email = c.email || null),
      (this.emailVerified = c.emailVerified || !1),
      (this.phoneNumber = c.phoneNumber || null),
      (this.photoURL = c.photoURL || null),
      (this.isAnonymous = c.isAnonymous || !1),
      (this.tenantId = c.tenantId || null),
      (this.providerData = c.providerData ? [...c.providerData] : []),
      (this.metadata = new Yn(c.createdAt || void 0, c.lastLoginAt || void 0));
  }
  async getIdToken(e) {
    const n = await wt(this, this.stsTokenManager.getToken(this.auth, e));
    return (
      b(n, this.auth, 'internal-error'),
      this.accessToken !== n &&
        ((this.accessToken = n),
        await this.auth._persistUserIfCurrent(this),
        this.auth._notifyListenersIfCurrent(this)),
      n
    );
  }
  getIdTokenResult(e) {
    return Lc(this, e);
  }
  reload() {
    return xc(this);
  }
  _assign(e) {
    this !== e &&
      (b(this.uid === e.uid, this.auth, 'internal-error'),
      (this.displayName = e.displayName),
      (this.photoURL = e.photoURL),
      (this.email = e.email),
      (this.emailVerified = e.emailVerified),
      (this.phoneNumber = e.phoneNumber),
      (this.isAnonymous = e.isAnonymous),
      (this.tenantId = e.tenantId),
      (this.providerData = e.providerData.map((n) => Object.assign({}, n))),
      this.metadata._copy(e.metadata),
      this.stsTokenManager._assign(e.stsTokenManager));
  }
  _clone(e) {
    const n = new ue(
      Object.assign(Object.assign({}, this), {
        auth: e,
        stsTokenManager: this.stsTokenManager._clone(),
      }),
    );
    return n.metadata._copy(this.metadata), n;
  }
  _onReload(e) {
    b(!this.reloadListener, this.auth, 'internal-error'),
      (this.reloadListener = e),
      this.reloadUserInfo &&
        (this._notifyReloadListener(this.reloadUserInfo),
        (this.reloadUserInfo = null));
  }
  _notifyReloadListener(e) {
    this.reloadListener ? this.reloadListener(e) : (this.reloadUserInfo = e);
  }
  _startProactiveRefresh() {
    this.proactiveRefresh._start();
  }
  _stopProactiveRefresh() {
    this.proactiveRefresh._stop();
  }
  async _updateTokensIfNecessary(e, n = !1) {
    let r = !1;
    e.idToken &&
      e.idToken !== this.stsTokenManager.accessToken &&
      (this.stsTokenManager.updateFromServerResponse(e), (r = !0)),
      n && (await nn(this)),
      await this.auth._persistUserIfCurrent(this),
      r && this.auth._notifyListenersIfCurrent(this);
  }
  async delete() {
    if (Se(this.auth.app)) return Promise.reject(Ue(this.auth));
    const e = await this.getIdToken();
    return (
      await wt(this, Dc(this.auth, { idToken: e })),
      this.stsTokenManager.clearRefreshToken(),
      this.auth.signOut()
    );
  }
  toJSON() {
    return Object.assign(
      Object.assign(
        {
          uid: this.uid,
          email: this.email || void 0,
          emailVerified: this.emailVerified,
          displayName: this.displayName || void 0,
          isAnonymous: this.isAnonymous,
          photoURL: this.photoURL || void 0,
          phoneNumber: this.phoneNumber || void 0,
          tenantId: this.tenantId || void 0,
          providerData: this.providerData.map((e) => Object.assign({}, e)),
          stsTokenManager: this.stsTokenManager.toJSON(),
          _redirectEventId: this._redirectEventId,
        },
        this.metadata.toJSON(),
      ),
      { apiKey: this.auth.config.apiKey, appName: this.auth.name },
    );
  }
  get refreshToken() {
    return this.stsTokenManager.refreshToken || '';
  }
  static _fromJSON(e, n) {
    var r, o, c, h, g, I, E, A;
    const S = (r = n.displayName) !== null && r !== void 0 ? r : void 0,
      P = (o = n.email) !== null && o !== void 0 ? o : void 0,
      F = (c = n.phoneNumber) !== null && c !== void 0 ? c : void 0,
      R = (h = n.photoURL) !== null && h !== void 0 ? h : void 0,
      x = (g = n.tenantId) !== null && g !== void 0 ? g : void 0,
      M = (I = n._redirectEventId) !== null && I !== void 0 ? I : void 0,
      oe = (E = n.createdAt) !== null && E !== void 0 ? E : void 0,
      Z = (A = n.lastLoginAt) !== null && A !== void 0 ? A : void 0,
      {
        uid: V,
        emailVerified: ne,
        isAnonymous: Pe,
        providerData: Q,
        stsTokenManager: v,
      } = n;
    b(V && v, e, 'internal-error');
    const u = Ke.fromJSON(this.name, v);
    b(typeof V == 'string', e, 'internal-error'),
      we(S, e.name),
      we(P, e.name),
      b(typeof ne == 'boolean', e, 'internal-error'),
      b(typeof Pe == 'boolean', e, 'internal-error'),
      we(F, e.name),
      we(R, e.name),
      we(x, e.name),
      we(M, e.name),
      we(oe, e.name),
      we(Z, e.name);
    const f = new ue({
      uid: V,
      auth: e,
      email: P,
      emailVerified: ne,
      displayName: S,
      isAnonymous: Pe,
      photoURL: R,
      phoneNumber: F,
      tenantId: x,
      stsTokenManager: u,
      createdAt: oe,
      lastLoginAt: Z,
    });
    return (
      Q &&
        Array.isArray(Q) &&
        (f.providerData = Q.map((p) => Object.assign({}, p))),
      M && (f._redirectEventId = M),
      f
    );
  }
  static async _fromIdTokenResponse(e, n, r = !1) {
    const o = new Ke();
    o.updateFromServerResponse(n);
    const c = new ue({
      uid: n.localId,
      auth: e,
      stsTokenManager: o,
      isAnonymous: r,
    });
    return await nn(c), c;
  }
  static async _fromGetAccountInfoResponse(e, n, r) {
    const o = n.users[0];
    b(o.localId !== void 0, 'internal-error');
    const c = o.providerUserInfo !== void 0 ? ys(o.providerUserInfo) : [],
      h = !(o.email && o.passwordHash) && !(c != null && c.length),
      g = new Ke();
    g.updateFromIdToken(r);
    const I = new ue({
        uid: o.localId,
        auth: e,
        stsTokenManager: g,
        isAnonymous: h,
      }),
      E = {
        uid: o.localId,
        displayName: o.displayName || null,
        photoURL: o.photoUrl || null,
        email: o.email || null,
        emailVerified: o.emailVerified || !1,
        phoneNumber: o.phoneNumber || null,
        tenantId: o.tenantId || null,
        providerData: c,
        metadata: new Yn(o.createdAt, o.lastLoginAt),
        isAnonymous: !(o.email && o.passwordHash) && !(c != null && c.length),
      };
    return Object.assign(I, E), I;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Pr = new Map();
function de(i) {
  ge(i instanceof Function, 'Expected a class definition');
  let e = Pr.get(i);
  return e
    ? (ge(e instanceof i, 'Instance stored in cache mismatched with class'), e)
    : ((e = new i()), Pr.set(i, e), e);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Is {
  constructor() {
    (this.type = 'NONE'), (this.storage = {});
  }
  async _isAvailable() {
    return !0;
  }
  async _set(e, n) {
    this.storage[e] = n;
  }
  async _get(e) {
    const n = this.storage[e];
    return n === void 0 ? null : n;
  }
  async _remove(e) {
    delete this.storage[e];
  }
  _addListener(e, n) {}
  _removeListener(e, n) {}
}
Is.type = 'NONE';
const Or = Is;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Jt(i, e, n) {
  return `firebase:${i}:${e}:${n}`;
}
class qe {
  constructor(e, n, r) {
    (this.persistence = e), (this.auth = n), (this.userKey = r);
    const { config: o, name: c } = this.auth;
    (this.fullUserKey = Jt(this.userKey, o.apiKey, c)),
      (this.fullPersistenceKey = Jt('persistence', o.apiKey, c)),
      (this.boundEventHandler = n._onStorageEvent.bind(n)),
      this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
  }
  setCurrentUser(e) {
    return this.persistence._set(this.fullUserKey, e.toJSON());
  }
  async getCurrentUser() {
    const e = await this.persistence._get(this.fullUserKey);
    return e ? ue._fromJSON(this.auth, e) : null;
  }
  removeCurrentUser() {
    return this.persistence._remove(this.fullUserKey);
  }
  savePersistenceForRedirect() {
    return this.persistence._set(
      this.fullPersistenceKey,
      this.persistence.type,
    );
  }
  async setPersistence(e) {
    if (this.persistence === e) return;
    const n = await this.getCurrentUser();
    if ((await this.removeCurrentUser(), (this.persistence = e), n))
      return this.setCurrentUser(n);
  }
  delete() {
    this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
  }
  static async create(e, n, r = 'authUser') {
    if (!n.length) return new qe(de(Or), e, r);
    const o = (
      await Promise.all(
        n.map(async (E) => {
          if (await E._isAvailable()) return E;
        }),
      )
    ).filter((E) => E);
    let c = o[0] || de(Or);
    const h = Jt(r, e.config.apiKey, e.name);
    let g = null;
    for (const E of n)
      try {
        const A = await E._get(h);
        if (A) {
          const S = ue._fromJSON(e, A);
          E !== c && (g = S), (c = E);
          break;
        }
      } catch {}
    const I = o.filter((E) => E._shouldAllowMigration);
    return !c._shouldAllowMigration || !I.length
      ? new qe(c, e, r)
      : ((c = I[0]),
        g && (await c._set(h, g.toJSON())),
        await Promise.all(
          n.map(async (E) => {
            if (E !== c)
              try {
                await E._remove(h);
              } catch {}
          }),
        ),
        new qe(c, e, r));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Nr(i) {
  const e = i.toLowerCase();
  if (e.includes('opera/') || e.includes('opr/') || e.includes('opios/'))
    return 'Opera';
  if (As(e)) return 'IEMobile';
  if (e.includes('msie') || e.includes('trident/')) return 'IE';
  if (e.includes('edge/')) return 'Edge';
  if (ws(e)) return 'Firefox';
  if (e.includes('silk/')) return 'Silk';
  if (Ss(e)) return 'Blackberry';
  if (ks(e)) return 'Webos';
  if (Es(e)) return 'Safari';
  if ((e.includes('chrome/') || Ts(e)) && !e.includes('edge/')) return 'Chrome';
  if (bs(e)) return 'Android';
  {
    const n = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
      r = i.match(n);
    if ((r == null ? void 0 : r.length) === 2) return r[1];
  }
  return 'Other';
}
function ws(i = Y()) {
  return /firefox\//i.test(i);
}
function Es(i = Y()) {
  const e = i.toLowerCase();
  return (
    e.includes('safari/') &&
    !e.includes('chrome/') &&
    !e.includes('crios/') &&
    !e.includes('android')
  );
}
function Ts(i = Y()) {
  return /crios\//i.test(i);
}
function As(i = Y()) {
  return /iemobile/i.test(i);
}
function bs(i = Y()) {
  return /android/i.test(i);
}
function Ss(i = Y()) {
  return /blackberry/i.test(i);
}
function ks(i = Y()) {
  return /webos/i.test(i);
}
function hi(i = Y()) {
  return (
    /iphone|ipad|ipod/i.test(i) || (/macintosh/i.test(i) && /mobile/i.test(i))
  );
}
function Vc(i = Y()) {
  var e;
  return (
    hi(i) &&
    !!(!((e = window.navigator) === null || e === void 0) && e.standalone)
  );
}
function Hc() {
  return ca() && document.documentMode === 10;
}
function Cs(i = Y()) {
  return hi(i) || bs(i) || ks(i) || Ss(i) || /windows phone/i.test(i) || As(i);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Rs(i, e = []) {
  let n;
  switch (i) {
    case 'Browser':
      n = Nr(Y());
      break;
    case 'Worker':
      n = `${Nr(Y())}-${i}`;
      break;
    default:
      n = i;
  }
  const r = e.length ? e.join(',') : 'FirebaseCore-web';
  return `${n}/JsCore/${et}/${r}`;
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class $c {
  constructor(e) {
    (this.auth = e), (this.queue = []);
  }
  pushCallback(e, n) {
    const r = (c) =>
      new Promise((h, g) => {
        try {
          const I = e(c);
          h(I);
        } catch (I) {
          g(I);
        }
      });
    (r.onAbort = n), this.queue.push(r);
    const o = this.queue.length - 1;
    return () => {
      this.queue[o] = () => Promise.resolve();
    };
  }
  async runMiddleware(e) {
    if (this.auth.currentUser === e) return;
    const n = [];
    try {
      for (const r of this.queue) await r(e), r.onAbort && n.push(r.onAbort);
    } catch (r) {
      n.reverse();
      for (const o of n)
        try {
          o();
        } catch {}
      throw this.auth._errorFactory.create('login-blocked', {
        originalMessage: r == null ? void 0 : r.message,
      });
    }
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function zc(i, e = {}) {
  return tt(i, 'GET', '/v2/passwordPolicy', ci(i, e));
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Wc = 6;
class Gc {
  constructor(e) {
    var n, r, o, c;
    const h = e.customStrengthOptions;
    (this.customStrengthOptions = {}),
      (this.customStrengthOptions.minPasswordLength =
        (n = h.minPasswordLength) !== null && n !== void 0 ? n : Wc),
      h.maxPasswordLength &&
        (this.customStrengthOptions.maxPasswordLength = h.maxPasswordLength),
      h.containsLowercaseCharacter !== void 0 &&
        (this.customStrengthOptions.containsLowercaseLetter =
          h.containsLowercaseCharacter),
      h.containsUppercaseCharacter !== void 0 &&
        (this.customStrengthOptions.containsUppercaseLetter =
          h.containsUppercaseCharacter),
      h.containsNumericCharacter !== void 0 &&
        (this.customStrengthOptions.containsNumericCharacter =
          h.containsNumericCharacter),
      h.containsNonAlphanumericCharacter !== void 0 &&
        (this.customStrengthOptions.containsNonAlphanumericCharacter =
          h.containsNonAlphanumericCharacter),
      (this.enforcementState = e.enforcementState),
      this.enforcementState === 'ENFORCEMENT_STATE_UNSPECIFIED' &&
        (this.enforcementState = 'OFF'),
      (this.allowedNonAlphanumericCharacters =
        (o =
          (r = e.allowedNonAlphanumericCharacters) === null || r === void 0
            ? void 0
            : r.join('')) !== null && o !== void 0
          ? o
          : ''),
      (this.forceUpgradeOnSignin =
        (c = e.forceUpgradeOnSignin) !== null && c !== void 0 ? c : !1),
      (this.schemaVersion = e.schemaVersion);
  }
  validatePassword(e) {
    var n, r, o, c, h, g;
    const I = { isValid: !0, passwordPolicy: this };
    return (
      this.validatePasswordLengthOptions(e, I),
      this.validatePasswordCharacterOptions(e, I),
      I.isValid &&
        (I.isValid =
          (n = I.meetsMinPasswordLength) !== null && n !== void 0 ? n : !0),
      I.isValid &&
        (I.isValid =
          (r = I.meetsMaxPasswordLength) !== null && r !== void 0 ? r : !0),
      I.isValid &&
        (I.isValid =
          (o = I.containsLowercaseLetter) !== null && o !== void 0 ? o : !0),
      I.isValid &&
        (I.isValid =
          (c = I.containsUppercaseLetter) !== null && c !== void 0 ? c : !0),
      I.isValid &&
        (I.isValid =
          (h = I.containsNumericCharacter) !== null && h !== void 0 ? h : !0),
      I.isValid &&
        (I.isValid =
          (g = I.containsNonAlphanumericCharacter) !== null && g !== void 0
            ? g
            : !0),
      I
    );
  }
  validatePasswordLengthOptions(e, n) {
    const r = this.customStrengthOptions.minPasswordLength,
      o = this.customStrengthOptions.maxPasswordLength;
    r && (n.meetsMinPasswordLength = e.length >= r),
      o && (n.meetsMaxPasswordLength = e.length <= o);
  }
  validatePasswordCharacterOptions(e, n) {
    this.updatePasswordCharacterOptionsStatuses(n, !1, !1, !1, !1);
    let r;
    for (let o = 0; o < e.length; o++)
      (r = e.charAt(o)),
        this.updatePasswordCharacterOptionsStatuses(
          n,
          r >= 'a' && r <= 'z',
          r >= 'A' && r <= 'Z',
          r >= '0' && r <= '9',
          this.allowedNonAlphanumericCharacters.includes(r),
        );
  }
  updatePasswordCharacterOptionsStatuses(e, n, r, o, c) {
    this.customStrengthOptions.containsLowercaseLetter &&
      (e.containsLowercaseLetter || (e.containsLowercaseLetter = n)),
      this.customStrengthOptions.containsUppercaseLetter &&
        (e.containsUppercaseLetter || (e.containsUppercaseLetter = r)),
      this.customStrengthOptions.containsNumericCharacter &&
        (e.containsNumericCharacter || (e.containsNumericCharacter = o)),
      this.customStrengthOptions.containsNonAlphanumericCharacter &&
        (e.containsNonAlphanumericCharacter ||
          (e.containsNonAlphanumericCharacter = c));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Kc {
  constructor(e, n, r, o) {
    (this.app = e),
      (this.heartbeatServiceProvider = n),
      (this.appCheckServiceProvider = r),
      (this.config = o),
      (this.currentUser = null),
      (this.emulatorConfig = null),
      (this.operations = Promise.resolve()),
      (this.authStateSubscription = new Dr(this)),
      (this.idTokenSubscription = new Dr(this)),
      (this.beforeStateQueue = new $c(this)),
      (this.redirectUser = null),
      (this.isProactiveRefreshEnabled = !1),
      (this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1),
      (this._canInitEmulator = !0),
      (this._isInitialized = !1),
      (this._deleted = !1),
      (this._initializationPromise = null),
      (this._popupRedirectResolver = null),
      (this._errorFactory = fs),
      (this._agentRecaptchaConfig = null),
      (this._tenantRecaptchaConfigs = {}),
      (this._projectPasswordPolicy = null),
      (this._tenantPasswordPolicies = {}),
      (this.lastNotifiedUid = void 0),
      (this.languageCode = null),
      (this.tenantId = null),
      (this.settings = { appVerificationDisabledForTesting: !1 }),
      (this.frameworks = []),
      (this.name = e.name),
      (this.clientVersion = o.sdkClientVersion);
  }
  _initializeWithPersistence(e, n) {
    return (
      n && (this._popupRedirectResolver = de(n)),
      (this._initializationPromise = this.queue(async () => {
        var r, o;
        if (
          !this._deleted &&
          ((this.persistenceManager = await qe.create(this, e)), !this._deleted)
        ) {
          if (
            !((r = this._popupRedirectResolver) === null || r === void 0) &&
            r._shouldInitProactively
          )
            try {
              await this._popupRedirectResolver._initialize(this);
            } catch {}
          await this.initializeCurrentUser(n),
            (this.lastNotifiedUid =
              ((o = this.currentUser) === null || o === void 0
                ? void 0
                : o.uid) || null),
            !this._deleted && (this._isInitialized = !0);
        }
      })),
      this._initializationPromise
    );
  }
  async _onStorageEvent() {
    if (this._deleted) return;
    const e = await this.assertedPersistence.getCurrentUser();
    if (!(!this.currentUser && !e)) {
      if (this.currentUser && e && this.currentUser.uid === e.uid) {
        this._currentUser._assign(e), await this.currentUser.getIdToken();
        return;
      }
      await this._updateCurrentUser(e, !0);
    }
  }
  async initializeCurrentUserFromIdToken(e) {
    try {
      const n = await _s(this, { idToken: e }),
        r = await ue._fromGetAccountInfoResponse(this, n, e);
      await this.directlySetCurrentUser(r);
    } catch (n) {
      console.warn(
        'FirebaseServerApp could not login user with provided authIdToken: ',
        n,
      ),
        await this.directlySetCurrentUser(null);
    }
  }
  async initializeCurrentUser(e) {
    var n;
    if (Se(this.app)) {
      const h = this.app.settings.authIdToken;
      return h
        ? new Promise((g) => {
            setTimeout(() =>
              this.initializeCurrentUserFromIdToken(h).then(g, g),
            );
          })
        : this.directlySetCurrentUser(null);
    }
    const r = await this.assertedPersistence.getCurrentUser();
    let o = r,
      c = !1;
    if (e && this.config.authDomain) {
      await this.getOrInitRedirectPersistenceManager();
      const h =
          (n = this.redirectUser) === null || n === void 0
            ? void 0
            : n._redirectEventId,
        g = o == null ? void 0 : o._redirectEventId,
        I = await this.tryRedirectSignIn(e);
      (!h || h === g) && I != null && I.user && ((o = I.user), (c = !0));
    }
    if (!o) return this.directlySetCurrentUser(null);
    if (!o._redirectEventId) {
      if (c)
        try {
          await this.beforeStateQueue.runMiddleware(o);
        } catch (h) {
          (o = r),
            this._popupRedirectResolver._overrideRedirectResult(this, () =>
              Promise.reject(h),
            );
        }
      return o
        ? this.reloadAndSetCurrentUserOrClear(o)
        : this.directlySetCurrentUser(null);
    }
    return (
      b(this._popupRedirectResolver, this, 'argument-error'),
      await this.getOrInitRedirectPersistenceManager(),
      this.redirectUser &&
      this.redirectUser._redirectEventId === o._redirectEventId
        ? this.directlySetCurrentUser(o)
        : this.reloadAndSetCurrentUserOrClear(o)
    );
  }
  async tryRedirectSignIn(e) {
    let n = null;
    try {
      n = await this._popupRedirectResolver._completeRedirectFn(this, e, !0);
    } catch {
      await this._setRedirectUser(null);
    }
    return n;
  }
  async reloadAndSetCurrentUserOrClear(e) {
    try {
      await nn(e);
    } catch (n) {
      if ((n == null ? void 0 : n.code) !== 'auth/network-request-failed')
        return this.directlySetCurrentUser(null);
    }
    return this.directlySetCurrentUser(e);
  }
  useDeviceLanguage() {
    this.languageCode = Cc();
  }
  async _delete() {
    this._deleted = !0;
  }
  async updateCurrentUser(e) {
    if (Se(this.app)) return Promise.reject(Ue(this));
    const n = e ? Fe(e) : null;
    return (
      n &&
        b(
          n.auth.config.apiKey === this.config.apiKey,
          this,
          'invalid-user-token',
        ),
      this._updateCurrentUser(n && n._clone(this))
    );
  }
  async _updateCurrentUser(e, n = !1) {
    if (!this._deleted)
      return (
        e && b(this.tenantId === e.tenantId, this, 'tenant-id-mismatch'),
        n || (await this.beforeStateQueue.runMiddleware(e)),
        this.queue(async () => {
          await this.directlySetCurrentUser(e), this.notifyAuthListeners();
        })
      );
  }
  async signOut() {
    return Se(this.app)
      ? Promise.reject(Ue(this))
      : (await this.beforeStateQueue.runMiddleware(null),
        (this.redirectPersistenceManager || this._popupRedirectResolver) &&
          (await this._setRedirectUser(null)),
        this._updateCurrentUser(null, !0));
  }
  setPersistence(e) {
    return Se(this.app)
      ? Promise.reject(Ue(this))
      : this.queue(async () => {
          await this.assertedPersistence.setPersistence(de(e));
        });
  }
  _getRecaptchaConfig() {
    return this.tenantId == null
      ? this._agentRecaptchaConfig
      : this._tenantRecaptchaConfigs[this.tenantId];
  }
  async validatePassword(e) {
    this._getPasswordPolicyInternal() || (await this._updatePasswordPolicy());
    const n = this._getPasswordPolicyInternal();
    return n.schemaVersion !== this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION
      ? Promise.reject(
          this._errorFactory.create(
            'unsupported-password-policy-schema-version',
            {},
          ),
        )
      : n.validatePassword(e);
  }
  _getPasswordPolicyInternal() {
    return this.tenantId === null
      ? this._projectPasswordPolicy
      : this._tenantPasswordPolicies[this.tenantId];
  }
  async _updatePasswordPolicy() {
    const e = await zc(this),
      n = new Gc(e);
    this.tenantId === null
      ? (this._projectPasswordPolicy = n)
      : (this._tenantPasswordPolicies[this.tenantId] = n);
  }
  _getPersistence() {
    return this.assertedPersistence.persistence.type;
  }
  _updateErrorMap(e) {
    this._errorFactory = new Et('auth', 'Firebase', e());
  }
  onAuthStateChanged(e, n, r) {
    return this.registerStateListener(this.authStateSubscription, e, n, r);
  }
  beforeAuthStateChanged(e, n) {
    return this.beforeStateQueue.pushCallback(e, n);
  }
  onIdTokenChanged(e, n, r) {
    return this.registerStateListener(this.idTokenSubscription, e, n, r);
  }
  authStateReady() {
    return new Promise((e, n) => {
      if (this.currentUser) e();
      else {
        const r = this.onAuthStateChanged(() => {
          r(), e();
        }, n);
      }
    });
  }
  async revokeAccessToken(e) {
    if (this.currentUser) {
      const n = await this.currentUser.getIdToken(),
        r = {
          providerId: 'apple.com',
          tokenType: 'ACCESS_TOKEN',
          token: e,
          idToken: n,
        };
      this.tenantId != null && (r.tenantId = this.tenantId), await Bc(this, r);
    }
  }
  toJSON() {
    var e;
    return {
      apiKey: this.config.apiKey,
      authDomain: this.config.authDomain,
      appName: this.name,
      currentUser:
        (e = this._currentUser) === null || e === void 0 ? void 0 : e.toJSON(),
    };
  }
  async _setRedirectUser(e, n) {
    const r = await this.getOrInitRedirectPersistenceManager(n);
    return e === null ? r.removeCurrentUser() : r.setCurrentUser(e);
  }
  async getOrInitRedirectPersistenceManager(e) {
    if (!this.redirectPersistenceManager) {
      const n = (e && de(e)) || this._popupRedirectResolver;
      b(n, this, 'argument-error'),
        (this.redirectPersistenceManager = await qe.create(
          this,
          [de(n._redirectPersistence)],
          'redirectUser',
        )),
        (this.redirectUser =
          await this.redirectPersistenceManager.getCurrentUser());
    }
    return this.redirectPersistenceManager;
  }
  async _redirectUserForId(e) {
    var n, r;
    return (
      this._isInitialized && (await this.queue(async () => {})),
      ((n = this._currentUser) === null || n === void 0
        ? void 0
        : n._redirectEventId) === e
        ? this._currentUser
        : ((r = this.redirectUser) === null || r === void 0
              ? void 0
              : r._redirectEventId) === e
          ? this.redirectUser
          : null
    );
  }
  async _persistUserIfCurrent(e) {
    if (e === this.currentUser)
      return this.queue(async () => this.directlySetCurrentUser(e));
  }
  _notifyListenersIfCurrent(e) {
    e === this.currentUser && this.notifyAuthListeners();
  }
  _key() {
    return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
  }
  _startProactiveRefresh() {
    (this.isProactiveRefreshEnabled = !0),
      this.currentUser && this._currentUser._startProactiveRefresh();
  }
  _stopProactiveRefresh() {
    (this.isProactiveRefreshEnabled = !1),
      this.currentUser && this._currentUser._stopProactiveRefresh();
  }
  get _currentUser() {
    return this.currentUser;
  }
  notifyAuthListeners() {
    var e, n;
    if (!this._isInitialized) return;
    this.idTokenSubscription.next(this.currentUser);
    const r =
      (n = (e = this.currentUser) === null || e === void 0 ? void 0 : e.uid) !==
        null && n !== void 0
        ? n
        : null;
    this.lastNotifiedUid !== r &&
      ((this.lastNotifiedUid = r),
      this.authStateSubscription.next(this.currentUser));
  }
  registerStateListener(e, n, r, o) {
    if (this._deleted) return () => {};
    const c = typeof n == 'function' ? n : n.next.bind(n);
    let h = !1;
    const g = this._isInitialized
      ? Promise.resolve()
      : this._initializationPromise;
    if (
      (b(g, this, 'internal-error'),
      g.then(() => {
        h || c(this.currentUser);
      }),
      typeof n == 'function')
    ) {
      const I = e.addObserver(n, r, o);
      return () => {
        (h = !0), I();
      };
    } else {
      const I = e.addObserver(n);
      return () => {
        (h = !0), I();
      };
    }
  }
  async directlySetCurrentUser(e) {
    this.currentUser &&
      this.currentUser !== e &&
      this._currentUser._stopProactiveRefresh(),
      e && this.isProactiveRefreshEnabled && e._startProactiveRefresh(),
      (this.currentUser = e),
      e
        ? await this.assertedPersistence.setCurrentUser(e)
        : await this.assertedPersistence.removeCurrentUser();
  }
  queue(e) {
    return (this.operations = this.operations.then(e, e)), this.operations;
  }
  get assertedPersistence() {
    return (
      b(this.persistenceManager, this, 'internal-error'),
      this.persistenceManager
    );
  }
  _logFramework(e) {
    !e ||
      this.frameworks.includes(e) ||
      (this.frameworks.push(e),
      this.frameworks.sort(),
      (this.clientVersion = Rs(
        this.config.clientPlatform,
        this._getFrameworks(),
      )));
  }
  _getFrameworks() {
    return this.frameworks;
  }
  async _getAdditionalHeaders() {
    var e;
    const n = { 'X-Client-Version': this.clientVersion };
    this.app.options.appId && (n['X-Firebase-gmpid'] = this.app.options.appId);
    const r = await ((e = this.heartbeatServiceProvider.getImmediate({
      optional: !0,
    })) === null || e === void 0
      ? void 0
      : e.getHeartbeatsHeader());
    r && (n['X-Firebase-Client'] = r);
    const o = await this._getAppCheckToken();
    return o && (n['X-Firebase-AppCheck'] = o), n;
  }
  async _getAppCheckToken() {
    var e;
    const n = await ((e = this.appCheckServiceProvider.getImmediate({
      optional: !0,
    })) === null || e === void 0
      ? void 0
      : e.getToken());
    return (
      n != null &&
        n.error &&
        bc(`Error while retrieving App Check token: ${n.error}`),
      n == null ? void 0 : n.token
    );
  }
}
function ui(i) {
  return Fe(i);
}
class Dr {
  constructor(e) {
    (this.auth = e),
      (this.observer = null),
      (this.addObserver = ga((n) => (this.observer = n)));
  }
  get next() {
    return (
      b(this.observer, this.auth, 'internal-error'),
      this.observer.next.bind(this.observer)
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let di = {
  async loadJS() {
    throw new Error('Unable to load external scripts');
  },
  recaptchaV2Script: '',
  recaptchaEnterpriseScript: '',
  gapiScript: '',
};
function qc(i) {
  di = i;
}
function Jc(i) {
  return di.loadJS(i);
}
function Xc() {
  return di.gapiScript;
}
function Yc(i) {
  return `__${i}${Math.floor(Math.random() * 1e6)}`;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Qc(i, e) {
  const n = ri(i, 'auth');
  if (n.isInitialized()) {
    const o = n.getImmediate(),
      c = n.getOptions();
    if (Zt(c, e ?? {})) return o;
    pe(o, 'already-initialized');
  }
  return n.initialize({ options: e });
}
function Zc(i, e) {
  const n = (e == null ? void 0 : e.persistence) || [],
    r = (Array.isArray(n) ? n : [n]).map(de);
  e != null && e.errorMap && i._updateErrorMap(e.errorMap),
    i._initializeWithPersistence(
      r,
      e == null ? void 0 : e.popupRedirectResolver,
    );
}
function el(i, e, n) {
  const r = ui(i);
  b(r._canInitEmulator, r, 'emulator-config-failed'),
    b(/^https?:\/\//.test(e), r, 'invalid-emulator-scheme');
  const o = !1,
    c = Ps(e),
    { host: h, port: g } = tl(e),
    I = g === null ? '' : `:${g}`;
  (r.config.emulator = { url: `${c}//${h}${I}/` }),
    (r.settings.appVerificationDisabledForTesting = !0),
    (r.emulatorConfig = Object.freeze({
      host: h,
      port: g,
      protocol: c.replace(':', ''),
      options: Object.freeze({ disableWarnings: o }),
    })),
    nl();
}
function Ps(i) {
  const e = i.indexOf(':');
  return e < 0 ? '' : i.substr(0, e + 1);
}
function tl(i) {
  const e = Ps(i),
    n = /(\/\/)?([^?#/]+)/.exec(i.substr(e.length));
  if (!n) return { host: '', port: null };
  const r = n[2].split('@').pop() || '',
    o = /^(\[[^\]]+\])(:|$)/.exec(r);
  if (o) {
    const c = o[1];
    return { host: c, port: Lr(r.substr(c.length + 1)) };
  } else {
    const [c, h] = r.split(':');
    return { host: c, port: Lr(h) };
  }
}
function Lr(i) {
  if (!i) return null;
  const e = Number(i);
  return isNaN(e) ? null : e;
}
function nl() {
  function i() {
    const e = document.createElement('p'),
      n = e.style;
    (e.innerText =
      'Running in emulator mode. Do not use with production credentials.'),
      (n.position = 'fixed'),
      (n.width = '100%'),
      (n.backgroundColor = '#ffffff'),
      (n.border = '.1em solid #000000'),
      (n.color = '#b50000'),
      (n.bottom = '0px'),
      (n.left = '0px'),
      (n.margin = '0px'),
      (n.zIndex = '10000'),
      (n.textAlign = 'center'),
      e.classList.add('firebase-emulator-warning'),
      document.body.appendChild(e);
  }
  typeof console < 'u' &&
    typeof console.info == 'function' &&
    console.info(
      'WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.',
    ),
    typeof window < 'u' &&
      typeof document < 'u' &&
      (document.readyState === 'loading'
        ? window.addEventListener('DOMContentLoaded', i)
        : i());
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Os {
  constructor(e, n) {
    (this.providerId = e), (this.signInMethod = n);
  }
  toJSON() {
    return he('not implemented');
  }
  _getIdTokenResponse(e) {
    return he('not implemented');
  }
  _linkToIdToken(e, n) {
    return he('not implemented');
  }
  _getReauthenticationResolver(e) {
    return he('not implemented');
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Je(i, e) {
  return Oc(i, 'POST', '/v1/accounts:signInWithIdp', ci(i, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const il = 'http://localhost';
class je extends Os {
  constructor() {
    super(...arguments), (this.pendingToken = null);
  }
  static _fromParams(e) {
    const n = new je(e.providerId, e.signInMethod);
    return (
      e.idToken || e.accessToken
        ? (e.idToken && (n.idToken = e.idToken),
          e.accessToken && (n.accessToken = e.accessToken),
          e.nonce && !e.pendingToken && (n.nonce = e.nonce),
          e.pendingToken && (n.pendingToken = e.pendingToken))
        : e.oauthToken && e.oauthTokenSecret
          ? ((n.accessToken = e.oauthToken), (n.secret = e.oauthTokenSecret))
          : pe('argument-error'),
      n
    );
  }
  toJSON() {
    return {
      idToken: this.idToken,
      accessToken: this.accessToken,
      secret: this.secret,
      nonce: this.nonce,
      pendingToken: this.pendingToken,
      providerId: this.providerId,
      signInMethod: this.signInMethod,
    };
  }
  static fromJSON(e) {
    const n = typeof e == 'string' ? JSON.parse(e) : e,
      { providerId: r, signInMethod: o } = n,
      c = si(n, ['providerId', 'signInMethod']);
    if (!r || !o) return null;
    const h = new je(r, o);
    return (
      (h.idToken = c.idToken || void 0),
      (h.accessToken = c.accessToken || void 0),
      (h.secret = c.secret),
      (h.nonce = c.nonce),
      (h.pendingToken = c.pendingToken || null),
      h
    );
  }
  _getIdTokenResponse(e) {
    const n = this.buildRequest();
    return Je(e, n);
  }
  _linkToIdToken(e, n) {
    const r = this.buildRequest();
    return (r.idToken = n), Je(e, r);
  }
  _getReauthenticationResolver(e) {
    const n = this.buildRequest();
    return (n.autoCreate = !1), Je(e, n);
  }
  buildRequest() {
    const e = { requestUri: il, returnSecureToken: !0 };
    if (this.pendingToken) e.pendingToken = this.pendingToken;
    else {
      const n = {};
      this.idToken && (n.id_token = this.idToken),
        this.accessToken && (n.access_token = this.accessToken),
        this.secret && (n.oauth_token_secret = this.secret),
        (n.providerId = this.providerId),
        this.nonce && !this.pendingToken && (n.nonce = this.nonce),
        (e.postBody = Tt(n));
    }
    return e;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ns {
  constructor(e) {
    (this.providerId = e),
      (this.defaultLanguageCode = null),
      (this.customParameters = {});
  }
  setDefaultLanguage(e) {
    this.defaultLanguageCode = e;
  }
  setCustomParameters(e) {
    return (this.customParameters = e), this;
  }
  getCustomParameters() {
    return this.customParameters;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class bt extends Ns {
  constructor() {
    super(...arguments), (this.scopes = []);
  }
  addScope(e) {
    return this.scopes.includes(e) || this.scopes.push(e), this;
  }
  getScopes() {
    return [...this.scopes];
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ee extends bt {
  constructor() {
    super('facebook.com');
  }
  static credential(e) {
    return je._fromParams({
      providerId: Ee.PROVIDER_ID,
      signInMethod: Ee.FACEBOOK_SIGN_IN_METHOD,
      accessToken: e,
    });
  }
  static credentialFromResult(e) {
    return Ee.credentialFromTaggedObject(e);
  }
  static credentialFromError(e) {
    return Ee.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e || !('oauthAccessToken' in e) || !e.oauthAccessToken) return null;
    try {
      return Ee.credential(e.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
Ee.FACEBOOK_SIGN_IN_METHOD = 'facebook.com';
Ee.PROVIDER_ID = 'facebook.com';
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Te extends bt {
  constructor() {
    super('google.com'), this.addScope('profile');
  }
  static credential(e, n) {
    return je._fromParams({
      providerId: Te.PROVIDER_ID,
      signInMethod: Te.GOOGLE_SIGN_IN_METHOD,
      idToken: e,
      accessToken: n,
    });
  }
  static credentialFromResult(e) {
    return Te.credentialFromTaggedObject(e);
  }
  static credentialFromError(e) {
    return Te.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e) return null;
    const { oauthIdToken: n, oauthAccessToken: r } = e;
    if (!n && !r) return null;
    try {
      return Te.credential(n, r);
    } catch {
      return null;
    }
  }
}
Te.GOOGLE_SIGN_IN_METHOD = 'google.com';
Te.PROVIDER_ID = 'google.com';
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ae extends bt {
  constructor() {
    super('github.com');
  }
  static credential(e) {
    return je._fromParams({
      providerId: Ae.PROVIDER_ID,
      signInMethod: Ae.GITHUB_SIGN_IN_METHOD,
      accessToken: e,
    });
  }
  static credentialFromResult(e) {
    return Ae.credentialFromTaggedObject(e);
  }
  static credentialFromError(e) {
    return Ae.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e || !('oauthAccessToken' in e) || !e.oauthAccessToken) return null;
    try {
      return Ae.credential(e.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
Ae.GITHUB_SIGN_IN_METHOD = 'github.com';
Ae.PROVIDER_ID = 'github.com';
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class be extends bt {
  constructor() {
    super('twitter.com');
  }
  static credential(e, n) {
    return je._fromParams({
      providerId: be.PROVIDER_ID,
      signInMethod: be.TWITTER_SIGN_IN_METHOD,
      oauthToken: e,
      oauthTokenSecret: n,
    });
  }
  static credentialFromResult(e) {
    return be.credentialFromTaggedObject(e);
  }
  static credentialFromError(e) {
    return be.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e) return null;
    const { oauthAccessToken: n, oauthTokenSecret: r } = e;
    if (!n || !r) return null;
    try {
      return be.credential(n, r);
    } catch {
      return null;
    }
  }
}
be.TWITTER_SIGN_IN_METHOD = 'twitter.com';
be.PROVIDER_ID = 'twitter.com';
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Qe {
  constructor(e) {
    (this.user = e.user),
      (this.providerId = e.providerId),
      (this._tokenResponse = e._tokenResponse),
      (this.operationType = e.operationType);
  }
  static async _fromIdTokenResponse(e, n, r, o = !1) {
    const c = await ue._fromIdTokenResponse(e, r, o),
      h = Mr(r);
    return new Qe({
      user: c,
      providerId: h,
      _tokenResponse: r,
      operationType: n,
    });
  }
  static async _forOperation(e, n, r) {
    await e._updateTokensIfNecessary(r, !0);
    const o = Mr(r);
    return new Qe({
      user: e,
      providerId: o,
      _tokenResponse: r,
      operationType: n,
    });
  }
}
function Mr(i) {
  return i.providerId ? i.providerId : 'phoneNumber' in i ? 'phone' : null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rn extends me {
  constructor(e, n, r, o) {
    var c;
    super(n.code, n.message),
      (this.operationType = r),
      (this.user = o),
      Object.setPrototypeOf(this, rn.prototype),
      (this.customData = {
        appName: e.name,
        tenantId: (c = e.tenantId) !== null && c !== void 0 ? c : void 0,
        _serverResponse: n.customData._serverResponse,
        operationType: r,
      });
  }
  static _fromErrorAndOperation(e, n, r, o) {
    return new rn(e, n, r, o);
  }
}
function Ds(i, e, n, r) {
  return (
    e === 'reauthenticate'
      ? n._getReauthenticationResolver(i)
      : n._getIdTokenResponse(i)
  ).catch((c) => {
    throw c.code === 'auth/multi-factor-auth-required'
      ? rn._fromErrorAndOperation(i, c, e, r)
      : c;
  });
}
async function rl(i, e, n = !1) {
  const r = await wt(i, e._linkToIdToken(i.auth, await i.getIdToken()), n);
  return Qe._forOperation(i, 'link', r);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function sl(i, e, n = !1) {
  const { auth: r } = i;
  if (Se(r.app)) return Promise.reject(Ue(r));
  const o = 'reauthenticate';
  try {
    const c = await wt(i, Ds(r, o, e, i), n);
    b(c.idToken, r, 'internal-error');
    const h = li(c.idToken);
    b(h, r, 'internal-error');
    const { sub: g } = h;
    return b(i.uid === g, r, 'user-mismatch'), Qe._forOperation(i, o, c);
  } catch (c) {
    throw (
      ((c == null ? void 0 : c.code) === 'auth/user-not-found' &&
        pe(r, 'user-mismatch'),
      c)
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function ol(i, e, n = !1) {
  if (Se(i.app)) return Promise.reject(Ue(i));
  const r = 'signIn',
    o = await Ds(i, r, e),
    c = await Qe._fromIdTokenResponse(i, r, o);
  return n || (await i._updateCurrentUser(c.user)), c;
}
function al(i, e, n, r) {
  return Fe(i).onIdTokenChanged(e, n, r);
}
function cl(i, e, n) {
  return Fe(i).beforeAuthStateChanged(e, n);
}
function ll(i, e, n, r) {
  return Fe(i).onAuthStateChanged(e, n, r);
}
const sn = '__sak';
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ls {
  constructor(e, n) {
    (this.storageRetriever = e), (this.type = n);
  }
  _isAvailable() {
    try {
      return this.storage
        ? (this.storage.setItem(sn, '1'),
          this.storage.removeItem(sn),
          Promise.resolve(!0))
        : Promise.resolve(!1);
    } catch {
      return Promise.resolve(!1);
    }
  }
  _set(e, n) {
    return this.storage.setItem(e, JSON.stringify(n)), Promise.resolve();
  }
  _get(e) {
    const n = this.storage.getItem(e);
    return Promise.resolve(n ? JSON.parse(n) : null);
  }
  _remove(e) {
    return this.storage.removeItem(e), Promise.resolve();
  }
  get storage() {
    return this.storageRetriever();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const hl = 1e3,
  ul = 10;
class Ms extends Ls {
  constructor() {
    super(() => window.localStorage, 'LOCAL'),
      (this.boundEventHandler = (e, n) => this.onStorageEvent(e, n)),
      (this.listeners = {}),
      (this.localCache = {}),
      (this.pollTimer = null),
      (this.fallbackToPolling = Cs()),
      (this._shouldAllowMigration = !0);
  }
  forAllChangedKeys(e) {
    for (const n of Object.keys(this.listeners)) {
      const r = this.storage.getItem(n),
        o = this.localCache[n];
      r !== o && e(n, o, r);
    }
  }
  onStorageEvent(e, n = !1) {
    if (!e.key) {
      this.forAllChangedKeys((h, g, I) => {
        this.notifyListeners(h, I);
      });
      return;
    }
    const r = e.key;
    n ? this.detachListener() : this.stopPolling();
    const o = () => {
        const h = this.storage.getItem(r);
        (!n && this.localCache[r] === h) || this.notifyListeners(r, h);
      },
      c = this.storage.getItem(r);
    Hc() && c !== e.newValue && e.newValue !== e.oldValue
      ? setTimeout(o, ul)
      : o();
  }
  notifyListeners(e, n) {
    this.localCache[e] = n;
    const r = this.listeners[e];
    if (r) for (const o of Array.from(r)) o(n && JSON.parse(n));
  }
  startPolling() {
    this.stopPolling(),
      (this.pollTimer = setInterval(() => {
        this.forAllChangedKeys((e, n, r) => {
          this.onStorageEvent(
            new StorageEvent('storage', { key: e, oldValue: n, newValue: r }),
            !0,
          );
        });
      }, hl));
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null));
  }
  attachListener() {
    window.addEventListener('storage', this.boundEventHandler);
  }
  detachListener() {
    window.removeEventListener('storage', this.boundEventHandler);
  }
  _addListener(e, n) {
    Object.keys(this.listeners).length === 0 &&
      (this.fallbackToPolling ? this.startPolling() : this.attachListener()),
      this.listeners[e] ||
        ((this.listeners[e] = new Set()),
        (this.localCache[e] = this.storage.getItem(e))),
      this.listeners[e].add(n);
  }
  _removeListener(e, n) {
    this.listeners[e] &&
      (this.listeners[e].delete(n),
      this.listeners[e].size === 0 && delete this.listeners[e]),
      Object.keys(this.listeners).length === 0 &&
        (this.detachListener(), this.stopPolling());
  }
  async _set(e, n) {
    await super._set(e, n), (this.localCache[e] = JSON.stringify(n));
  }
  async _get(e) {
    const n = await super._get(e);
    return (this.localCache[e] = JSON.stringify(n)), n;
  }
  async _remove(e) {
    await super._remove(e), delete this.localCache[e];
  }
}
Ms.type = 'LOCAL';
const dl = Ms;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Us extends Ls {
  constructor() {
    super(() => window.sessionStorage, 'SESSION');
  }
  _addListener(e, n) {}
  _removeListener(e, n) {}
}
Us.type = 'SESSION';
const xs = Us;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function fl(i) {
  return Promise.all(
    i.map(async (e) => {
      try {
        return { fulfilled: !0, value: await e };
      } catch (n) {
        return { fulfilled: !1, reason: n };
      }
    }),
  );
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class cn {
  constructor(e) {
    (this.eventTarget = e),
      (this.handlersMap = {}),
      (this.boundEventHandler = this.handleEvent.bind(this));
  }
  static _getInstance(e) {
    const n = this.receivers.find((o) => o.isListeningto(e));
    if (n) return n;
    const r = new cn(e);
    return this.receivers.push(r), r;
  }
  isListeningto(e) {
    return this.eventTarget === e;
  }
  async handleEvent(e) {
    const n = e,
      { eventId: r, eventType: o, data: c } = n.data,
      h = this.handlersMap[o];
    if (!(h != null && h.size)) return;
    n.ports[0].postMessage({ status: 'ack', eventId: r, eventType: o });
    const g = Array.from(h).map(async (E) => E(n.origin, c)),
      I = await fl(g);
    n.ports[0].postMessage({
      status: 'done',
      eventId: r,
      eventType: o,
      response: I,
    });
  }
  _subscribe(e, n) {
    Object.keys(this.handlersMap).length === 0 &&
      this.eventTarget.addEventListener('message', this.boundEventHandler),
      this.handlersMap[e] || (this.handlersMap[e] = new Set()),
      this.handlersMap[e].add(n);
  }
  _unsubscribe(e, n) {
    this.handlersMap[e] && n && this.handlersMap[e].delete(n),
      (!n || this.handlersMap[e].size === 0) && delete this.handlersMap[e],
      Object.keys(this.handlersMap).length === 0 &&
        this.eventTarget.removeEventListener('message', this.boundEventHandler);
  }
}
cn.receivers = [];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function fi(i = '', e = 10) {
  let n = '';
  for (let r = 0; r < e; r++) n += Math.floor(Math.random() * 10);
  return i + n;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class pl {
  constructor(e) {
    (this.target = e), (this.handlers = new Set());
  }
  removeMessageHandler(e) {
    e.messageChannel &&
      (e.messageChannel.port1.removeEventListener('message', e.onMessage),
      e.messageChannel.port1.close()),
      this.handlers.delete(e);
  }
  async _send(e, n, r = 50) {
    const o = typeof MessageChannel < 'u' ? new MessageChannel() : null;
    if (!o) throw new Error('connection_unavailable');
    let c, h;
    return new Promise((g, I) => {
      const E = fi('', 20);
      o.port1.start();
      const A = setTimeout(() => {
        I(new Error('unsupported_event'));
      }, r);
      (h = {
        messageChannel: o,
        onMessage(S) {
          const P = S;
          if (P.data.eventId === E)
            switch (P.data.status) {
              case 'ack':
                clearTimeout(A),
                  (c = setTimeout(() => {
                    I(new Error('timeout'));
                  }, 3e3));
                break;
              case 'done':
                clearTimeout(c), g(P.data.response);
                break;
              default:
                clearTimeout(A),
                  clearTimeout(c),
                  I(new Error('invalid_response'));
                break;
            }
        },
      }),
        this.handlers.add(h),
        o.port1.addEventListener('message', h.onMessage),
        this.target.postMessage({ eventType: e, eventId: E, data: n }, [
          o.port2,
        ]);
    }).finally(() => {
      h && this.removeMessageHandler(h);
    });
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function se() {
  return window;
}
function gl(i) {
  se().location.href = i;
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function js() {
  return (
    typeof se().WorkerGlobalScope < 'u' &&
    typeof se().importScripts == 'function'
  );
}
async function ml() {
  if (!(navigator != null && navigator.serviceWorker)) return null;
  try {
    return (await navigator.serviceWorker.ready).active;
  } catch {
    return null;
  }
}
function vl() {
  var i;
  return (
    ((i = navigator == null ? void 0 : navigator.serviceWorker) === null ||
    i === void 0
      ? void 0
      : i.controller) || null
  );
}
function _l() {
  return js() ? self : null;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Fs = 'firebaseLocalStorageDb',
  yl = 1,
  on = 'firebaseLocalStorage',
  Bs = 'fbase_key';
class St {
  constructor(e) {
    this.request = e;
  }
  toPromise() {
    return new Promise((e, n) => {
      this.request.addEventListener('success', () => {
        e(this.request.result);
      }),
        this.request.addEventListener('error', () => {
          n(this.request.error);
        });
    });
  }
}
function ln(i, e) {
  return i.transaction([on], e ? 'readwrite' : 'readonly').objectStore(on);
}
function Il() {
  const i = indexedDB.deleteDatabase(Fs);
  return new St(i).toPromise();
}
function Qn() {
  const i = indexedDB.open(Fs, yl);
  return new Promise((e, n) => {
    i.addEventListener('error', () => {
      n(i.error);
    }),
      i.addEventListener('upgradeneeded', () => {
        const r = i.result;
        try {
          r.createObjectStore(on, { keyPath: Bs });
        } catch (o) {
          n(o);
        }
      }),
      i.addEventListener('success', async () => {
        const r = i.result;
        r.objectStoreNames.contains(on)
          ? e(r)
          : (r.close(), await Il(), e(await Qn()));
      });
  });
}
async function Ur(i, e, n) {
  const r = ln(i, !0).put({ [Bs]: e, value: n });
  return new St(r).toPromise();
}
async function wl(i, e) {
  const n = ln(i, !1).get(e),
    r = await new St(n).toPromise();
  return r === void 0 ? null : r.value;
}
function xr(i, e) {
  const n = ln(i, !0).delete(e);
  return new St(n).toPromise();
}
const El = 800,
  Tl = 3;
class Vs {
  constructor() {
    (this.type = 'LOCAL'),
      (this._shouldAllowMigration = !0),
      (this.listeners = {}),
      (this.localCache = {}),
      (this.pollTimer = null),
      (this.pendingWrites = 0),
      (this.receiver = null),
      (this.sender = null),
      (this.serviceWorkerReceiverAvailable = !1),
      (this.activeServiceWorker = null),
      (this._workerInitializationPromise =
        this.initializeServiceWorkerMessaging().then(
          () => {},
          () => {},
        ));
  }
  async _openDb() {
    return this.db ? this.db : ((this.db = await Qn()), this.db);
  }
  async _withRetries(e) {
    let n = 0;
    for (;;)
      try {
        const r = await this._openDb();
        return await e(r);
      } catch (r) {
        if (n++ > Tl) throw r;
        this.db && (this.db.close(), (this.db = void 0));
      }
  }
  async initializeServiceWorkerMessaging() {
    return js() ? this.initializeReceiver() : this.initializeSender();
  }
  async initializeReceiver() {
    (this.receiver = cn._getInstance(_l())),
      this.receiver._subscribe('keyChanged', async (e, n) => ({
        keyProcessed: (await this._poll()).includes(n.key),
      })),
      this.receiver._subscribe('ping', async (e, n) => ['keyChanged']);
  }
  async initializeSender() {
    var e, n;
    if (((this.activeServiceWorker = await ml()), !this.activeServiceWorker))
      return;
    this.sender = new pl(this.activeServiceWorker);
    const r = await this.sender._send('ping', {}, 800);
    r &&
      !((e = r[0]) === null || e === void 0) &&
      e.fulfilled &&
      !((n = r[0]) === null || n === void 0) &&
      n.value.includes('keyChanged') &&
      (this.serviceWorkerReceiverAvailable = !0);
  }
  async notifyServiceWorker(e) {
    if (
      !(
        !this.sender ||
        !this.activeServiceWorker ||
        vl() !== this.activeServiceWorker
      )
    )
      try {
        await this.sender._send(
          'keyChanged',
          { key: e },
          this.serviceWorkerReceiverAvailable ? 800 : 50,
        );
      } catch {}
  }
  async _isAvailable() {
    try {
      if (!indexedDB) return !1;
      const e = await Qn();
      return await Ur(e, sn, '1'), await xr(e, sn), !0;
    } catch {}
    return !1;
  }
  async _withPendingWrite(e) {
    this.pendingWrites++;
    try {
      await e();
    } finally {
      this.pendingWrites--;
    }
  }
  async _set(e, n) {
    return this._withPendingWrite(
      async () => (
        await this._withRetries((r) => Ur(r, e, n)),
        (this.localCache[e] = n),
        this.notifyServiceWorker(e)
      ),
    );
  }
  async _get(e) {
    const n = await this._withRetries((r) => wl(r, e));
    return (this.localCache[e] = n), n;
  }
  async _remove(e) {
    return this._withPendingWrite(
      async () => (
        await this._withRetries((n) => xr(n, e)),
        delete this.localCache[e],
        this.notifyServiceWorker(e)
      ),
    );
  }
  async _poll() {
    const e = await this._withRetries((o) => {
      const c = ln(o, !1).getAll();
      return new St(c).toPromise();
    });
    if (!e) return [];
    if (this.pendingWrites !== 0) return [];
    const n = [],
      r = new Set();
    if (e.length !== 0)
      for (const { fbase_key: o, value: c } of e)
        r.add(o),
          JSON.stringify(this.localCache[o]) !== JSON.stringify(c) &&
            (this.notifyListeners(o, c), n.push(o));
    for (const o of Object.keys(this.localCache))
      this.localCache[o] &&
        !r.has(o) &&
        (this.notifyListeners(o, null), n.push(o));
    return n;
  }
  notifyListeners(e, n) {
    this.localCache[e] = n;
    const r = this.listeners[e];
    if (r) for (const o of Array.from(r)) o(n);
  }
  startPolling() {
    this.stopPolling(),
      (this.pollTimer = setInterval(async () => this._poll(), El));
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null));
  }
  _addListener(e, n) {
    Object.keys(this.listeners).length === 0 && this.startPolling(),
      this.listeners[e] || ((this.listeners[e] = new Set()), this._get(e)),
      this.listeners[e].add(n);
  }
  _removeListener(e, n) {
    this.listeners[e] &&
      (this.listeners[e].delete(n),
      this.listeners[e].size === 0 && delete this.listeners[e]),
      Object.keys(this.listeners).length === 0 && this.stopPolling();
  }
}
Vs.type = 'LOCAL';
const Al = Vs;
new At(3e4, 6e4);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function bl(i, e) {
  return e
    ? de(e)
    : (b(i._popupRedirectResolver, i, 'argument-error'),
      i._popupRedirectResolver);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class pi extends Os {
  constructor(e) {
    super('custom', 'custom'), (this.params = e);
  }
  _getIdTokenResponse(e) {
    return Je(e, this._buildIdpRequest());
  }
  _linkToIdToken(e, n) {
    return Je(e, this._buildIdpRequest(n));
  }
  _getReauthenticationResolver(e) {
    return Je(e, this._buildIdpRequest());
  }
  _buildIdpRequest(e) {
    const n = {
      requestUri: this.params.requestUri,
      sessionId: this.params.sessionId,
      postBody: this.params.postBody,
      tenantId: this.params.tenantId,
      pendingToken: this.params.pendingToken,
      returnSecureToken: !0,
      returnIdpCredential: !0,
    };
    return e && (n.idToken = e), n;
  }
}
function Sl(i) {
  return ol(i.auth, new pi(i), i.bypassAuthState);
}
function kl(i) {
  const { auth: e, user: n } = i;
  return b(n, e, 'internal-error'), sl(n, new pi(i), i.bypassAuthState);
}
async function Cl(i) {
  const { auth: e, user: n } = i;
  return b(n, e, 'internal-error'), rl(n, new pi(i), i.bypassAuthState);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Hs {
  constructor(e, n, r, o, c = !1) {
    (this.auth = e),
      (this.resolver = r),
      (this.user = o),
      (this.bypassAuthState = c),
      (this.pendingPromise = null),
      (this.eventManager = null),
      (this.filter = Array.isArray(n) ? n : [n]);
  }
  execute() {
    return new Promise(async (e, n) => {
      this.pendingPromise = { resolve: e, reject: n };
      try {
        (this.eventManager = await this.resolver._initialize(this.auth)),
          await this.onExecution(),
          this.eventManager.registerConsumer(this);
      } catch (r) {
        this.reject(r);
      }
    });
  }
  async onAuthEvent(e) {
    const {
      urlResponse: n,
      sessionId: r,
      postBody: o,
      tenantId: c,
      error: h,
      type: g,
    } = e;
    if (h) {
      this.reject(h);
      return;
    }
    const I = {
      auth: this.auth,
      requestUri: n,
      sessionId: r,
      tenantId: c || void 0,
      postBody: o || void 0,
      user: this.user,
      bypassAuthState: this.bypassAuthState,
    };
    try {
      this.resolve(await this.getIdpTask(g)(I));
    } catch (E) {
      this.reject(E);
    }
  }
  onError(e) {
    this.reject(e);
  }
  getIdpTask(e) {
    switch (e) {
      case 'signInViaPopup':
      case 'signInViaRedirect':
        return Sl;
      case 'linkViaPopup':
      case 'linkViaRedirect':
        return Cl;
      case 'reauthViaPopup':
      case 'reauthViaRedirect':
        return kl;
      default:
        pe(this.auth, 'internal-error');
    }
  }
  resolve(e) {
    ge(this.pendingPromise, 'Pending promise was never set'),
      this.pendingPromise.resolve(e),
      this.unregisterAndCleanUp();
  }
  reject(e) {
    ge(this.pendingPromise, 'Pending promise was never set'),
      this.pendingPromise.reject(e),
      this.unregisterAndCleanUp();
  }
  unregisterAndCleanUp() {
    this.eventManager && this.eventManager.unregisterConsumer(this),
      (this.pendingPromise = null),
      this.cleanUp();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Rl = new At(2e3, 1e4);
class We extends Hs {
  constructor(e, n, r, o, c) {
    super(e, n, o, c),
      (this.provider = r),
      (this.authWindow = null),
      (this.pollId = null),
      We.currentPopupAction && We.currentPopupAction.cancel(),
      (We.currentPopupAction = this);
  }
  async executeNotNull() {
    const e = await this.execute();
    return b(e, this.auth, 'internal-error'), e;
  }
  async onExecution() {
    ge(this.filter.length === 1, 'Popup operations only handle one event');
    const e = fi();
    (this.authWindow = await this.resolver._openPopup(
      this.auth,
      this.provider,
      this.filter[0],
      e,
    )),
      (this.authWindow.associatedEvent = e),
      this.resolver._originValidation(this.auth).catch((n) => {
        this.reject(n);
      }),
      this.resolver._isIframeWebStorageSupported(this.auth, (n) => {
        n || this.reject(re(this.auth, 'web-storage-unsupported'));
      }),
      this.pollUserCancellation();
  }
  get eventId() {
    var e;
    return (
      ((e = this.authWindow) === null || e === void 0
        ? void 0
        : e.associatedEvent) || null
    );
  }
  cancel() {
    this.reject(re(this.auth, 'cancelled-popup-request'));
  }
  cleanUp() {
    this.authWindow && this.authWindow.close(),
      this.pollId && window.clearTimeout(this.pollId),
      (this.authWindow = null),
      (this.pollId = null),
      (We.currentPopupAction = null);
  }
  pollUserCancellation() {
    const e = () => {
      var n, r;
      if (
        !(
          (r =
            (n = this.authWindow) === null || n === void 0
              ? void 0
              : n.window) === null || r === void 0
        ) &&
        r.closed
      ) {
        this.pollId = window.setTimeout(() => {
          (this.pollId = null),
            this.reject(re(this.auth, 'popup-closed-by-user'));
        }, 8e3);
        return;
      }
      this.pollId = window.setTimeout(e, Rl.get());
    };
    e();
  }
}
We.currentPopupAction = null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Pl = 'pendingRedirect',
  Xt = new Map();
class Ol extends Hs {
  constructor(e, n, r = !1) {
    super(
      e,
      ['signInViaRedirect', 'linkViaRedirect', 'reauthViaRedirect', 'unknown'],
      n,
      void 0,
      r,
    ),
      (this.eventId = null);
  }
  async execute() {
    let e = Xt.get(this.auth._key());
    if (!e) {
      try {
        const r = (await Nl(this.resolver, this.auth))
          ? await super.execute()
          : null;
        e = () => Promise.resolve(r);
      } catch (n) {
        e = () => Promise.reject(n);
      }
      Xt.set(this.auth._key(), e);
    }
    return (
      this.bypassAuthState ||
        Xt.set(this.auth._key(), () => Promise.resolve(null)),
      e()
    );
  }
  async onAuthEvent(e) {
    if (e.type === 'signInViaRedirect') return super.onAuthEvent(e);
    if (e.type === 'unknown') {
      this.resolve(null);
      return;
    }
    if (e.eventId) {
      const n = await this.auth._redirectUserForId(e.eventId);
      if (n) return (this.user = n), super.onAuthEvent(e);
      this.resolve(null);
    }
  }
  async onExecution() {}
  cleanUp() {}
}
async function Nl(i, e) {
  const n = Ml(e),
    r = Ll(i);
  if (!(await r._isAvailable())) return !1;
  const o = (await r._get(n)) === 'true';
  return await r._remove(n), o;
}
function Dl(i, e) {
  Xt.set(i._key(), e);
}
function Ll(i) {
  return de(i._redirectPersistence);
}
function Ml(i) {
  return Jt(Pl, i.config.apiKey, i.name);
}
async function Ul(i, e, n = !1) {
  if (Se(i.app)) return Promise.reject(Ue(i));
  const r = ui(i),
    o = bl(r, e),
    h = await new Ol(r, o, n).execute();
  return (
    h &&
      !n &&
      (delete h.user._redirectEventId,
      await r._persistUserIfCurrent(h.user),
      await r._setRedirectUser(null, e)),
    h
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const xl = 10 * 60 * 1e3;
class jl {
  constructor(e) {
    (this.auth = e),
      (this.cachedEventUids = new Set()),
      (this.consumers = new Set()),
      (this.queuedRedirectEvent = null),
      (this.hasHandledPotentialRedirect = !1),
      (this.lastProcessedEventTime = Date.now());
  }
  registerConsumer(e) {
    this.consumers.add(e),
      this.queuedRedirectEvent &&
        this.isEventForConsumer(this.queuedRedirectEvent, e) &&
        (this.sendToConsumer(this.queuedRedirectEvent, e),
        this.saveEventToCache(this.queuedRedirectEvent),
        (this.queuedRedirectEvent = null));
  }
  unregisterConsumer(e) {
    this.consumers.delete(e);
  }
  onEvent(e) {
    if (this.hasEventBeenHandled(e)) return !1;
    let n = !1;
    return (
      this.consumers.forEach((r) => {
        this.isEventForConsumer(e, r) &&
          ((n = !0), this.sendToConsumer(e, r), this.saveEventToCache(e));
      }),
      this.hasHandledPotentialRedirect ||
        !Fl(e) ||
        ((this.hasHandledPotentialRedirect = !0),
        n || ((this.queuedRedirectEvent = e), (n = !0))),
      n
    );
  }
  sendToConsumer(e, n) {
    var r;
    if (e.error && !$s(e)) {
      const o =
        ((r = e.error.code) === null || r === void 0
          ? void 0
          : r.split('auth/')[1]) || 'internal-error';
      n.onError(re(this.auth, o));
    } else n.onAuthEvent(e);
  }
  isEventForConsumer(e, n) {
    const r = n.eventId === null || (!!e.eventId && e.eventId === n.eventId);
    return n.filter.includes(e.type) && r;
  }
  hasEventBeenHandled(e) {
    return (
      Date.now() - this.lastProcessedEventTime >= xl &&
        this.cachedEventUids.clear(),
      this.cachedEventUids.has(jr(e))
    );
  }
  saveEventToCache(e) {
    this.cachedEventUids.add(jr(e)), (this.lastProcessedEventTime = Date.now());
  }
}
function jr(i) {
  return [i.type, i.eventId, i.sessionId, i.tenantId]
    .filter((e) => e)
    .join('-');
}
function $s({ type: i, error: e }) {
  return (
    i === 'unknown' && (e == null ? void 0 : e.code) === 'auth/no-auth-event'
  );
}
function Fl(i) {
  switch (i.type) {
    case 'signInViaRedirect':
    case 'linkViaRedirect':
    case 'reauthViaRedirect':
      return !0;
    case 'unknown':
      return $s(i);
    default:
      return !1;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Bl(i, e = {}) {
  return tt(i, 'GET', '/v1/projects', e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Vl = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
  Hl = /^https?/;
async function $l(i) {
  if (i.config.emulator) return;
  const { authorizedDomains: e } = await Bl(i);
  for (const n of e)
    try {
      if (zl(n)) return;
    } catch {}
  pe(i, 'unauthorized-domain');
}
function zl(i) {
  const e = Xn(),
    { protocol: n, hostname: r } = new URL(e);
  if (i.startsWith('chrome-extension://')) {
    const h = new URL(i);
    return h.hostname === '' && r === ''
      ? n === 'chrome-extension:' &&
          i.replace('chrome-extension://', '') ===
            e.replace('chrome-extension://', '')
      : n === 'chrome-extension:' && h.hostname === r;
  }
  if (!Hl.test(n)) return !1;
  if (Vl.test(i)) return r === i;
  const o = i.replace(/\./g, '\\.');
  return new RegExp('^(.+\\.' + o + '|' + o + ')$', 'i').test(r);
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Wl = new At(3e4, 6e4);
function Fr() {
  const i = se().___jsl;
  if (i != null && i.H) {
    for (const e of Object.keys(i.H))
      if (
        ((i.H[e].r = i.H[e].r || []),
        (i.H[e].L = i.H[e].L || []),
        (i.H[e].r = [...i.H[e].L]),
        i.CP)
      )
        for (let n = 0; n < i.CP.length; n++) i.CP[n] = null;
  }
}
function Gl(i) {
  return new Promise((e, n) => {
    var r, o, c;
    function h() {
      Fr(),
        gapi.load('gapi.iframes', {
          callback: () => {
            e(gapi.iframes.getContext());
          },
          ontimeout: () => {
            Fr(), n(re(i, 'network-request-failed'));
          },
          timeout: Wl.get(),
        });
    }
    if (
      !(
        (o = (r = se().gapi) === null || r === void 0 ? void 0 : r.iframes) ===
          null || o === void 0
      ) &&
      o.Iframe
    )
      e(gapi.iframes.getContext());
    else if (!((c = se().gapi) === null || c === void 0) && c.load) h();
    else {
      const g = Yc('iframefcb');
      return (
        (se()[g] = () => {
          gapi.load ? h() : n(re(i, 'network-request-failed'));
        }),
        Jc(`${Xc()}?onload=${g}`).catch((I) => n(I))
      );
    }
  }).catch((e) => {
    throw ((Yt = null), e);
  });
}
let Yt = null;
function Kl(i) {
  return (Yt = Yt || Gl(i)), Yt;
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ql = new At(5e3, 15e3),
  Jl = '__/auth/iframe',
  Xl = 'emulator/auth/iframe',
  Yl = {
    style: { position: 'absolute', top: '-100px', width: '1px', height: '1px' },
    'aria-hidden': 'true',
    tabindex: '-1',
  },
  Ql = new Map([
    ['identitytoolkit.googleapis.com', 'p'],
    ['staging-identitytoolkit.sandbox.googleapis.com', 's'],
    ['test-identitytoolkit.sandbox.googleapis.com', 't'],
  ]);
function Zl(i) {
  const e = i.config;
  b(e.authDomain, i, 'auth-domain-config-required');
  const n = e.emulator ? ai(e, Xl) : `https://${i.config.authDomain}/${Jl}`,
    r = { apiKey: e.apiKey, appName: i.name, v: et },
    o = Ql.get(i.config.apiHost);
  o && (r.eid = o);
  const c = i._getFrameworks();
  return c.length && (r.fw = c.join(',')), `${n}?${Tt(r).slice(1)}`;
}
async function eh(i) {
  const e = await Kl(i),
    n = se().gapi;
  return (
    b(n, i, 'internal-error'),
    e.open(
      {
        where: document.body,
        url: Zl(i),
        messageHandlersFilter: n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
        attributes: Yl,
        dontclear: !0,
      },
      (r) =>
        new Promise(async (o, c) => {
          await r.restyle({ setHideOnLeave: !1 });
          const h = re(i, 'network-request-failed'),
            g = se().setTimeout(() => {
              c(h);
            }, ql.get());
          function I() {
            se().clearTimeout(g), o(r);
          }
          r.ping(I).then(I, () => {
            c(h);
          });
        }),
    )
  );
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const th = {
    location: 'yes',
    resizable: 'yes',
    statusbar: 'yes',
    toolbar: 'no',
  },
  nh = 500,
  ih = 600,
  rh = '_blank',
  sh = 'http://localhost';
class Br {
  constructor(e) {
    (this.window = e), (this.associatedEvent = null);
  }
  close() {
    if (this.window)
      try {
        this.window.close();
      } catch {}
  }
}
function oh(i, e, n, r = nh, o = ih) {
  const c = Math.max((window.screen.availHeight - o) / 2, 0).toString(),
    h = Math.max((window.screen.availWidth - r) / 2, 0).toString();
  let g = '';
  const I = Object.assign(Object.assign({}, th), {
      width: r.toString(),
      height: o.toString(),
      top: c,
      left: h,
    }),
    E = Y().toLowerCase();
  n && (g = Ts(E) ? rh : n), ws(E) && ((e = e || sh), (I.scrollbars = 'yes'));
  const A = Object.entries(I).reduce((P, [F, R]) => `${P}${F}=${R},`, '');
  if (Vc(E) && g !== '_self') return ah(e || '', g), new Br(null);
  const S = window.open(e || '', g, A);
  b(S, i, 'popup-blocked');
  try {
    S.focus();
  } catch {}
  return new Br(S);
}
function ah(i, e) {
  const n = document.createElement('a');
  (n.href = i), (n.target = e);
  const r = document.createEvent('MouseEvent');
  r.initMouseEvent(
    'click',
    !0,
    !0,
    window,
    1,
    0,
    0,
    0,
    0,
    !1,
    !1,
    !1,
    !1,
    1,
    null,
  ),
    n.dispatchEvent(r);
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ch = '__/auth/handler',
  lh = 'emulator/auth/handler',
  hh = encodeURIComponent('fac');
async function Vr(i, e, n, r, o, c) {
  b(i.config.authDomain, i, 'auth-domain-config-required'),
    b(i.config.apiKey, i, 'invalid-api-key');
  const h = {
    apiKey: i.config.apiKey,
    appName: i.name,
    authType: n,
    redirectUrl: r,
    v: et,
    eventId: o,
  };
  if (e instanceof Ns) {
    e.setDefaultLanguage(i.languageCode),
      (h.providerId = e.providerId || ''),
      pa(e.getCustomParameters()) ||
        (h.customParameters = JSON.stringify(e.getCustomParameters()));
    for (const [A, S] of Object.entries({})) h[A] = S;
  }
  if (e instanceof bt) {
    const A = e.getScopes().filter((S) => S !== '');
    A.length > 0 && (h.scopes = A.join(','));
  }
  i.tenantId && (h.tid = i.tenantId);
  const g = h;
  for (const A of Object.keys(g)) g[A] === void 0 && delete g[A];
  const I = await i._getAppCheckToken(),
    E = I ? `#${hh}=${encodeURIComponent(I)}` : '';
  return `${uh(i)}?${Tt(g).slice(1)}${E}`;
}
function uh({ config: i }) {
  return i.emulator ? ai(i, lh) : `https://${i.authDomain}/${ch}`;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const $n = 'webStorageSupport';
class dh {
  constructor() {
    (this.eventManagers = {}),
      (this.iframes = {}),
      (this.originValidationPromises = {}),
      (this._redirectPersistence = xs),
      (this._completeRedirectFn = Ul),
      (this._overrideRedirectResult = Dl);
  }
  async _openPopup(e, n, r, o) {
    var c;
    ge(
      (c = this.eventManagers[e._key()]) === null || c === void 0
        ? void 0
        : c.manager,
      '_initialize() not called before _openPopup()',
    );
    const h = await Vr(e, n, r, Xn(), o);
    return oh(e, h, fi());
  }
  async _openRedirect(e, n, r, o) {
    await this._originValidation(e);
    const c = await Vr(e, n, r, Xn(), o);
    return gl(c), new Promise(() => {});
  }
  _initialize(e) {
    const n = e._key();
    if (this.eventManagers[n]) {
      const { manager: o, promise: c } = this.eventManagers[n];
      return o
        ? Promise.resolve(o)
        : (ge(c, 'If manager is not set, promise should be'), c);
    }
    const r = this.initAndGetManager(e);
    return (
      (this.eventManagers[n] = { promise: r }),
      r.catch(() => {
        delete this.eventManagers[n];
      }),
      r
    );
  }
  async initAndGetManager(e) {
    const n = await eh(e),
      r = new jl(e);
    return (
      n.register(
        'authEvent',
        (o) => (
          b(o == null ? void 0 : o.authEvent, e, 'invalid-auth-event'),
          { status: r.onEvent(o.authEvent) ? 'ACK' : 'ERROR' }
        ),
        gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
      ),
      (this.eventManagers[e._key()] = { manager: r }),
      (this.iframes[e._key()] = n),
      r
    );
  }
  _isIframeWebStorageSupported(e, n) {
    this.iframes[e._key()].send(
      $n,
      { type: $n },
      (o) => {
        var c;
        const h =
          (c = o == null ? void 0 : o[0]) === null || c === void 0
            ? void 0
            : c[$n];
        h !== void 0 && n(!!h), pe(e, 'internal-error');
      },
      gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
    );
  }
  _originValidation(e) {
    const n = e._key();
    return (
      this.originValidationPromises[n] ||
        (this.originValidationPromises[n] = $l(e)),
      this.originValidationPromises[n]
    );
  }
  get _shouldInitProactively() {
    return Cs() || Es() || hi();
  }
}
const fh = dh;
var Hr = '@firebase/auth',
  $r = '1.7.7';
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ph {
  constructor(e) {
    (this.auth = e), (this.internalListeners = new Map());
  }
  getUid() {
    var e;
    return (
      this.assertAuthConfigured(),
      ((e = this.auth.currentUser) === null || e === void 0 ? void 0 : e.uid) ||
        null
    );
  }
  async getToken(e) {
    return (
      this.assertAuthConfigured(),
      await this.auth._initializationPromise,
      this.auth.currentUser
        ? { accessToken: await this.auth.currentUser.getIdToken(e) }
        : null
    );
  }
  addAuthTokenListener(e) {
    if ((this.assertAuthConfigured(), this.internalListeners.has(e))) return;
    const n = this.auth.onIdTokenChanged((r) => {
      e((r == null ? void 0 : r.stsTokenManager.accessToken) || null);
    });
    this.internalListeners.set(e, n), this.updateProactiveRefresh();
  }
  removeAuthTokenListener(e) {
    this.assertAuthConfigured();
    const n = this.internalListeners.get(e);
    n && (this.internalListeners.delete(e), n(), this.updateProactiveRefresh());
  }
  assertAuthConfigured() {
    b(
      this.auth._initializationPromise,
      'dependent-sdk-initialized-before-auth',
    );
  }
  updateProactiveRefresh() {
    this.internalListeners.size > 0
      ? this.auth._startProactiveRefresh()
      : this.auth._stopProactiveRefresh();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function gh(i) {
  switch (i) {
    case 'Node':
      return 'node';
    case 'ReactNative':
      return 'rn';
    case 'Worker':
      return 'webworker';
    case 'Cordova':
      return 'cordova';
    case 'WebExtension':
      return 'web-extension';
    default:
      return;
  }
}
function mh(i) {
  Ye(
    new xe(
      'auth',
      (e, { options: n }) => {
        const r = e.getProvider('app').getImmediate(),
          o = e.getProvider('heartbeat'),
          c = e.getProvider('app-check-internal'),
          { apiKey: h, authDomain: g } = r.options;
        b(h && !h.includes(':'), 'invalid-api-key', { appName: r.name });
        const I = {
            apiKey: h,
            authDomain: g,
            clientPlatform: i,
            apiHost: 'identitytoolkit.googleapis.com',
            tokenApiHost: 'securetoken.googleapis.com',
            apiScheme: 'https',
            sdkClientVersion: Rs(i),
          },
          E = new Kc(r, o, c, I);
        return Zc(E, n), E;
      },
      'PUBLIC',
    )
      .setInstantiationMode('EXPLICIT')
      .setInstanceCreatedCallback((e, n, r) => {
        e.getProvider('auth-internal').initialize();
      }),
  ),
    Ye(
      new xe(
        'auth-internal',
        (e) => {
          const n = ui(e.getProvider('auth').getImmediate());
          return ((r) => new ph(r))(n);
        },
        'PRIVATE',
      ).setInstantiationMode('EXPLICIT'),
    ),
    Re(Hr, $r, gh(i)),
    Re(Hr, $r, 'esm2017');
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const vh = 5 * 60,
  _h = ss('authIdTokenMaxAge') || vh;
let zr = null;
const yh = (i) => async (e) => {
  const n = e && (await e.getIdTokenResult()),
    r = n && (new Date().getTime() - Date.parse(n.issuedAtTime)) / 1e3;
  if (r && r > _h) return;
  const o = n == null ? void 0 : n.token;
  zr !== o &&
    ((zr = o),
    await fetch(i, {
      method: o ? 'POST' : 'DELETE',
      headers: o ? { Authorization: `Bearer ${o}` } : {},
    }));
};
function Ih(i = ls()) {
  const e = ri(i, 'auth');
  if (e.isInitialized()) return e.getImmediate();
  const n = Qc(i, { popupRedirectResolver: fh, persistence: [Al, dl, xs] }),
    r = ss('authTokenSyncURL');
  if (r && typeof isSecureContext == 'boolean' && isSecureContext) {
    const c = new URL(r, location.origin);
    if (location.origin === c.origin) {
      const h = yh(c.toString());
      cl(n, h, () => h(n.currentUser)), al(n, (g) => h(g));
    }
  }
  const o = is('auth');
  return o && el(n, `http://${o}`), n;
}
function wh() {
  var i, e;
  return (e =
    (i = document.getElementsByTagName('head')) === null || i === void 0
      ? void 0
      : i[0]) !== null && e !== void 0
    ? e
    : document;
}
qc({
  loadJS(i) {
    return new Promise((e, n) => {
      const r = document.createElement('script');
      r.setAttribute('src', i),
        (r.onload = e),
        (r.onerror = (o) => {
          const c = re('internal-error');
          (c.customData = o), n(c);
        }),
        (r.type = 'text/javascript'),
        (r.charset = 'UTF-8'),
        wh().appendChild(r);
    });
  },
  gapiScript: 'https://apis.google.com/js/api.js',
  recaptchaV2Script: 'https://www.google.com/recaptcha/api.js',
  recaptchaEnterpriseScript:
    'https://www.google.com/recaptcha/enterprise.js?render=',
});
mh('Browser');
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ function Eh(
  i,
  e,
  n,
  r,
) {
  function o(c) {
    return c instanceof n
      ? c
      : new n(function (h) {
          h(c);
        });
  }
  return new (n || (n = Promise))(function (c, h) {
    function g(A) {
      try {
        E(r.next(A));
      } catch (S) {
        h(S);
      }
    }
    function I(A) {
      try {
        E(r.throw(A));
      } catch (S) {
        h(S);
      }
    }
    function E(A) {
      A.done ? c(A.value) : o(A.value).then(g, I);
    }
    E((r = r.apply(i, [])).next());
  });
}
function Th(i, e) {
  var n = {
      label: 0,
      sent: function () {
        if (c[0] & 1) throw c[1];
        return c[1];
      },
      trys: [],
      ops: [],
    },
    r,
    o,
    c,
    h;
  return (
    (h = { next: g(0), throw: g(1), return: g(2) }),
    typeof Symbol == 'function' &&
      (h[Symbol.iterator] = function () {
        return this;
      }),
    h
  );
  function g(E) {
    return function (A) {
      return I([E, A]);
    };
  }
  function I(E) {
    if (r) throw new TypeError('Generator is already executing.');
    for (; n; )
      try {
        if (
          ((r = 1),
          o &&
            (c =
              E[0] & 2
                ? o.return
                : E[0]
                  ? o.throw || ((c = o.return) && c.call(o), 0)
                  : o.next) &&
            !(c = c.call(o, E[1])).done)
        )
          return c;
        switch (((o = 0), c && (E = [E[0] & 2, c.value]), E[0])) {
          case 0:
          case 1:
            c = E;
            break;
          case 4:
            return n.label++, { value: E[1], done: !1 };
          case 5:
            n.label++, (o = E[1]), (E = [0]);
            continue;
          case 7:
            (E = n.ops.pop()), n.trys.pop();
            continue;
          default:
            if (
              ((c = n.trys),
              !(c = c.length > 0 && c[c.length - 1]) &&
                (E[0] === 6 || E[0] === 2))
            ) {
              n = 0;
              continue;
            }
            if (E[0] === 3 && (!c || (E[1] > c[0] && E[1] < c[3]))) {
              n.label = E[1];
              break;
            }
            if (E[0] === 6 && n.label < c[1]) {
              (n.label = c[1]), (c = E);
              break;
            }
            if (c && n.label < c[2]) {
              (n.label = c[2]), n.ops.push(E);
              break;
            }
            c[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        E = e.call(i, n);
      } catch (A) {
        (E = [6, A]), (o = 0);
      } finally {
        r = c = 0;
      }
    if (E[0] & 5) throw E[1];
    return { value: E[0] ? E[1] : void 0, done: !0 };
  }
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var Ge =
    function () {
      return (
        (Ge =
          Object.assign ||
          function (e) {
            for (var n, r = 1, o = arguments.length; r < o; r++) {
              n = arguments[r];
              for (var c in n)
                Object.prototype.hasOwnProperty.call(n, c) && (e[c] = n[c]);
            }
            return e;
          }),
        Ge.apply(this, arguments)
      );
    },
  zs = function (i) {
    return { loading: i == null, value: i };
  },
  Ah = function () {
    return function (i, e) {
      switch (e.type) {
        case 'error':
          return Ge(Ge({}, i), { error: e.error, loading: !1, value: void 0 });
        case 'reset':
          return zs(e.defaultValue);
        case 'value':
          return Ge(Ge({}, i), { error: void 0, loading: !1, value: e.value });
        default:
          return i;
      }
    };
  },
  bh = function (i) {
    var e = i ? i() : void 0,
      n = Me.useReducer(Ah(), zs(e)),
      r = n[0],
      o = n[1],
      c = Me.useCallback(
        function () {
          var I = i ? i() : void 0;
          o({ type: 'reset', defaultValue: I });
        },
        [i],
      ),
      h = Me.useCallback(function (I) {
        o({ type: 'error', error: I });
      }, []),
      g = Me.useCallback(function (I) {
        o({ type: 'value', value: I });
      }, []);
    return Me.useMemo(
      function () {
        return {
          error: r.error,
          loading: r.loading,
          reset: c,
          setError: h,
          setValue: g,
          value: r.value,
        };
      },
      [r.error, r.loading, c, h, g, r.value],
    );
  },
  Sh = function (i, e) {
    var n = bh(function () {
        return i.currentUser;
      }),
      r = n.error,
      o = n.loading,
      c = n.setError,
      h = n.setValue,
      g = n.value;
    return (
      Me.useEffect(
        function () {
          var I = ll(
            i,
            function (E) {
              return Eh(void 0, void 0, void 0, function () {
                var A;
                return Th(this, function (S) {
                  switch (S.label) {
                    case 0:
                      return [3, 4];
                    case 1:
                      return S.trys.push([1, 3, , 4]), [4, e.onUserChanged(E)];
                    case 2:
                      return S.sent(), [3, 4];
                    case 3:
                      return (A = S.sent()), c(A), [3, 4];
                    case 4:
                      return h(E), [2];
                  }
                });
              });
            },
            c,
          );
          return function () {
            I();
          };
        },
        [i],
      ),
      [g, o, r]
    );
  };
const kh = '_contentInner_8piex_1',
  Ch = '_description_8piex_9',
  Rh = '_buttonBlock_8piex_13',
  Ph = '_title_8piex_18',
  Gt = { contentInner: kh, description: Ch, buttonBlock: Rh, title: Ph };
var Oh = 'firebase',
  Nh = '10.13.0';
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ Re(Oh, Nh, 'app');
var Wr = {},
  Gr =
    typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u'
        ? window
        : typeof Wr < 'u'
          ? Wr
          : typeof self < 'u'
            ? self
            : {};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/ var Ws;
(function () {
  var i;
  /** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/ function e(v, u) {
    function f() {}
    (f.prototype = u.prototype),
      (v.D = u.prototype),
      (v.prototype = new f()),
      (v.prototype.constructor = v),
      (v.C = function (p, m, y) {
        for (
          var d = Array(arguments.length - 2), ae = 2;
          ae < arguments.length;
          ae++
        )
          d[ae - 2] = arguments[ae];
        return u.prototype[m].apply(p, d);
      });
  }
  function n() {
    this.blockSize = -1;
  }
  function r() {
    (this.blockSize = -1),
      (this.blockSize = 64),
      (this.g = Array(4)),
      (this.B = Array(this.blockSize)),
      (this.o = this.h = 0),
      this.s();
  }
  e(r, n),
    (r.prototype.s = function () {
      (this.g[0] = 1732584193),
        (this.g[1] = 4023233417),
        (this.g[2] = 2562383102),
        (this.g[3] = 271733878),
        (this.o = this.h = 0);
    });
  function o(v, u, f) {
    f || (f = 0);
    var p = Array(16);
    if (typeof u == 'string')
      for (var m = 0; 16 > m; ++m)
        p[m] =
          u.charCodeAt(f++) |
          (u.charCodeAt(f++) << 8) |
          (u.charCodeAt(f++) << 16) |
          (u.charCodeAt(f++) << 24);
    else
      for (m = 0; 16 > m; ++m)
        p[m] = u[f++] | (u[f++] << 8) | (u[f++] << 16) | (u[f++] << 24);
    (u = v.g[0]), (f = v.g[1]), (m = v.g[2]);
    var y = v.g[3],
      d = (u + (y ^ (f & (m ^ y))) + p[0] + 3614090360) & 4294967295;
    (u = f + (((d << 7) & 4294967295) | (d >>> 25))),
      (d = (y + (m ^ (u & (f ^ m))) + p[1] + 3905402710) & 4294967295),
      (y = u + (((d << 12) & 4294967295) | (d >>> 20))),
      (d = (m + (f ^ (y & (u ^ f))) + p[2] + 606105819) & 4294967295),
      (m = y + (((d << 17) & 4294967295) | (d >>> 15))),
      (d = (f + (u ^ (m & (y ^ u))) + p[3] + 3250441966) & 4294967295),
      (f = m + (((d << 22) & 4294967295) | (d >>> 10))),
      (d = (u + (y ^ (f & (m ^ y))) + p[4] + 4118548399) & 4294967295),
      (u = f + (((d << 7) & 4294967295) | (d >>> 25))),
      (d = (y + (m ^ (u & (f ^ m))) + p[5] + 1200080426) & 4294967295),
      (y = u + (((d << 12) & 4294967295) | (d >>> 20))),
      (d = (m + (f ^ (y & (u ^ f))) + p[6] + 2821735955) & 4294967295),
      (m = y + (((d << 17) & 4294967295) | (d >>> 15))),
      (d = (f + (u ^ (m & (y ^ u))) + p[7] + 4249261313) & 4294967295),
      (f = m + (((d << 22) & 4294967295) | (d >>> 10))),
      (d = (u + (y ^ (f & (m ^ y))) + p[8] + 1770035416) & 4294967295),
      (u = f + (((d << 7) & 4294967295) | (d >>> 25))),
      (d = (y + (m ^ (u & (f ^ m))) + p[9] + 2336552879) & 4294967295),
      (y = u + (((d << 12) & 4294967295) | (d >>> 20))),
      (d = (m + (f ^ (y & (u ^ f))) + p[10] + 4294925233) & 4294967295),
      (m = y + (((d << 17) & 4294967295) | (d >>> 15))),
      (d = (f + (u ^ (m & (y ^ u))) + p[11] + 2304563134) & 4294967295),
      (f = m + (((d << 22) & 4294967295) | (d >>> 10))),
      (d = (u + (y ^ (f & (m ^ y))) + p[12] + 1804603682) & 4294967295),
      (u = f + (((d << 7) & 4294967295) | (d >>> 25))),
      (d = (y + (m ^ (u & (f ^ m))) + p[13] + 4254626195) & 4294967295),
      (y = u + (((d << 12) & 4294967295) | (d >>> 20))),
      (d = (m + (f ^ (y & (u ^ f))) + p[14] + 2792965006) & 4294967295),
      (m = y + (((d << 17) & 4294967295) | (d >>> 15))),
      (d = (f + (u ^ (m & (y ^ u))) + p[15] + 1236535329) & 4294967295),
      (f = m + (((d << 22) & 4294967295) | (d >>> 10))),
      (d = (u + (m ^ (y & (f ^ m))) + p[1] + 4129170786) & 4294967295),
      (u = f + (((d << 5) & 4294967295) | (d >>> 27))),
      (d = (y + (f ^ (m & (u ^ f))) + p[6] + 3225465664) & 4294967295),
      (y = u + (((d << 9) & 4294967295) | (d >>> 23))),
      (d = (m + (u ^ (f & (y ^ u))) + p[11] + 643717713) & 4294967295),
      (m = y + (((d << 14) & 4294967295) | (d >>> 18))),
      (d = (f + (y ^ (u & (m ^ y))) + p[0] + 3921069994) & 4294967295),
      (f = m + (((d << 20) & 4294967295) | (d >>> 12))),
      (d = (u + (m ^ (y & (f ^ m))) + p[5] + 3593408605) & 4294967295),
      (u = f + (((d << 5) & 4294967295) | (d >>> 27))),
      (d = (y + (f ^ (m & (u ^ f))) + p[10] + 38016083) & 4294967295),
      (y = u + (((d << 9) & 4294967295) | (d >>> 23))),
      (d = (m + (u ^ (f & (y ^ u))) + p[15] + 3634488961) & 4294967295),
      (m = y + (((d << 14) & 4294967295) | (d >>> 18))),
      (d = (f + (y ^ (u & (m ^ y))) + p[4] + 3889429448) & 4294967295),
      (f = m + (((d << 20) & 4294967295) | (d >>> 12))),
      (d = (u + (m ^ (y & (f ^ m))) + p[9] + 568446438) & 4294967295),
      (u = f + (((d << 5) & 4294967295) | (d >>> 27))),
      (d = (y + (f ^ (m & (u ^ f))) + p[14] + 3275163606) & 4294967295),
      (y = u + (((d << 9) & 4294967295) | (d >>> 23))),
      (d = (m + (u ^ (f & (y ^ u))) + p[3] + 4107603335) & 4294967295),
      (m = y + (((d << 14) & 4294967295) | (d >>> 18))),
      (d = (f + (y ^ (u & (m ^ y))) + p[8] + 1163531501) & 4294967295),
      (f = m + (((d << 20) & 4294967295) | (d >>> 12))),
      (d = (u + (m ^ (y & (f ^ m))) + p[13] + 2850285829) & 4294967295),
      (u = f + (((d << 5) & 4294967295) | (d >>> 27))),
      (d = (y + (f ^ (m & (u ^ f))) + p[2] + 4243563512) & 4294967295),
      (y = u + (((d << 9) & 4294967295) | (d >>> 23))),
      (d = (m + (u ^ (f & (y ^ u))) + p[7] + 1735328473) & 4294967295),
      (m = y + (((d << 14) & 4294967295) | (d >>> 18))),
      (d = (f + (y ^ (u & (m ^ y))) + p[12] + 2368359562) & 4294967295),
      (f = m + (((d << 20) & 4294967295) | (d >>> 12))),
      (d = (u + (f ^ m ^ y) + p[5] + 4294588738) & 4294967295),
      (u = f + (((d << 4) & 4294967295) | (d >>> 28))),
      (d = (y + (u ^ f ^ m) + p[8] + 2272392833) & 4294967295),
      (y = u + (((d << 11) & 4294967295) | (d >>> 21))),
      (d = (m + (y ^ u ^ f) + p[11] + 1839030562) & 4294967295),
      (m = y + (((d << 16) & 4294967295) | (d >>> 16))),
      (d = (f + (m ^ y ^ u) + p[14] + 4259657740) & 4294967295),
      (f = m + (((d << 23) & 4294967295) | (d >>> 9))),
      (d = (u + (f ^ m ^ y) + p[1] + 2763975236) & 4294967295),
      (u = f + (((d << 4) & 4294967295) | (d >>> 28))),
      (d = (y + (u ^ f ^ m) + p[4] + 1272893353) & 4294967295),
      (y = u + (((d << 11) & 4294967295) | (d >>> 21))),
      (d = (m + (y ^ u ^ f) + p[7] + 4139469664) & 4294967295),
      (m = y + (((d << 16) & 4294967295) | (d >>> 16))),
      (d = (f + (m ^ y ^ u) + p[10] + 3200236656) & 4294967295),
      (f = m + (((d << 23) & 4294967295) | (d >>> 9))),
      (d = (u + (f ^ m ^ y) + p[13] + 681279174) & 4294967295),
      (u = f + (((d << 4) & 4294967295) | (d >>> 28))),
      (d = (y + (u ^ f ^ m) + p[0] + 3936430074) & 4294967295),
      (y = u + (((d << 11) & 4294967295) | (d >>> 21))),
      (d = (m + (y ^ u ^ f) + p[3] + 3572445317) & 4294967295),
      (m = y + (((d << 16) & 4294967295) | (d >>> 16))),
      (d = (f + (m ^ y ^ u) + p[6] + 76029189) & 4294967295),
      (f = m + (((d << 23) & 4294967295) | (d >>> 9))),
      (d = (u + (f ^ m ^ y) + p[9] + 3654602809) & 4294967295),
      (u = f + (((d << 4) & 4294967295) | (d >>> 28))),
      (d = (y + (u ^ f ^ m) + p[12] + 3873151461) & 4294967295),
      (y = u + (((d << 11) & 4294967295) | (d >>> 21))),
      (d = (m + (y ^ u ^ f) + p[15] + 530742520) & 4294967295),
      (m = y + (((d << 16) & 4294967295) | (d >>> 16))),
      (d = (f + (m ^ y ^ u) + p[2] + 3299628645) & 4294967295),
      (f = m + (((d << 23) & 4294967295) | (d >>> 9))),
      (d = (u + (m ^ (f | ~y)) + p[0] + 4096336452) & 4294967295),
      (u = f + (((d << 6) & 4294967295) | (d >>> 26))),
      (d = (y + (f ^ (u | ~m)) + p[7] + 1126891415) & 4294967295),
      (y = u + (((d << 10) & 4294967295) | (d >>> 22))),
      (d = (m + (u ^ (y | ~f)) + p[14] + 2878612391) & 4294967295),
      (m = y + (((d << 15) & 4294967295) | (d >>> 17))),
      (d = (f + (y ^ (m | ~u)) + p[5] + 4237533241) & 4294967295),
      (f = m + (((d << 21) & 4294967295) | (d >>> 11))),
      (d = (u + (m ^ (f | ~y)) + p[12] + 1700485571) & 4294967295),
      (u = f + (((d << 6) & 4294967295) | (d >>> 26))),
      (d = (y + (f ^ (u | ~m)) + p[3] + 2399980690) & 4294967295),
      (y = u + (((d << 10) & 4294967295) | (d >>> 22))),
      (d = (m + (u ^ (y | ~f)) + p[10] + 4293915773) & 4294967295),
      (m = y + (((d << 15) & 4294967295) | (d >>> 17))),
      (d = (f + (y ^ (m | ~u)) + p[1] + 2240044497) & 4294967295),
      (f = m + (((d << 21) & 4294967295) | (d >>> 11))),
      (d = (u + (m ^ (f | ~y)) + p[8] + 1873313359) & 4294967295),
      (u = f + (((d << 6) & 4294967295) | (d >>> 26))),
      (d = (y + (f ^ (u | ~m)) + p[15] + 4264355552) & 4294967295),
      (y = u + (((d << 10) & 4294967295) | (d >>> 22))),
      (d = (m + (u ^ (y | ~f)) + p[6] + 2734768916) & 4294967295),
      (m = y + (((d << 15) & 4294967295) | (d >>> 17))),
      (d = (f + (y ^ (m | ~u)) + p[13] + 1309151649) & 4294967295),
      (f = m + (((d << 21) & 4294967295) | (d >>> 11))),
      (d = (u + (m ^ (f | ~y)) + p[4] + 4149444226) & 4294967295),
      (u = f + (((d << 6) & 4294967295) | (d >>> 26))),
      (d = (y + (f ^ (u | ~m)) + p[11] + 3174756917) & 4294967295),
      (y = u + (((d << 10) & 4294967295) | (d >>> 22))),
      (d = (m + (u ^ (y | ~f)) + p[2] + 718787259) & 4294967295),
      (m = y + (((d << 15) & 4294967295) | (d >>> 17))),
      (d = (f + (y ^ (m | ~u)) + p[9] + 3951481745) & 4294967295),
      (v.g[0] = (v.g[0] + u) & 4294967295),
      (v.g[1] =
        (v.g[1] + (m + (((d << 21) & 4294967295) | (d >>> 11)))) & 4294967295),
      (v.g[2] = (v.g[2] + m) & 4294967295),
      (v.g[3] = (v.g[3] + y) & 4294967295);
  }
  (r.prototype.u = function (v, u) {
    u === void 0 && (u = v.length);
    for (var f = u - this.blockSize, p = this.B, m = this.h, y = 0; y < u; ) {
      if (m == 0) for (; y <= f; ) o(this, v, y), (y += this.blockSize);
      if (typeof v == 'string') {
        for (; y < u; )
          if (((p[m++] = v.charCodeAt(y++)), m == this.blockSize)) {
            o(this, p), (m = 0);
            break;
          }
      } else
        for (; y < u; )
          if (((p[m++] = v[y++]), m == this.blockSize)) {
            o(this, p), (m = 0);
            break;
          }
    }
    (this.h = m), (this.o += u);
  }),
    (r.prototype.v = function () {
      var v = Array(
        (56 > this.h ? this.blockSize : 2 * this.blockSize) - this.h,
      );
      v[0] = 128;
      for (var u = 1; u < v.length - 8; ++u) v[u] = 0;
      var f = 8 * this.o;
      for (u = v.length - 8; u < v.length; ++u) (v[u] = f & 255), (f /= 256);
      for (this.u(v), v = Array(16), u = f = 0; 4 > u; ++u)
        for (var p = 0; 32 > p; p += 8) v[f++] = (this.g[u] >>> p) & 255;
      return v;
    });
  function c(v, u) {
    var f = g;
    return Object.prototype.hasOwnProperty.call(f, v) ? f[v] : (f[v] = u(v));
  }
  function h(v, u) {
    this.h = u;
    for (var f = [], p = !0, m = v.length - 1; 0 <= m; m--) {
      var y = v[m] | 0;
      (p && y == u) || ((f[m] = y), (p = !1));
    }
    this.g = f;
  }
  var g = {};
  function I(v) {
    return -128 <= v && 128 > v
      ? c(v, function (u) {
          return new h([u | 0], 0 > u ? -1 : 0);
        })
      : new h([v | 0], 0 > v ? -1 : 0);
  }
  function E(v) {
    if (isNaN(v) || !isFinite(v)) return S;
    if (0 > v) return M(E(-v));
    for (var u = [], f = 1, p = 0; v >= f; p++)
      (u[p] = (v / f) | 0), (f *= 4294967296);
    return new h(u, 0);
  }
  function A(v, u) {
    if (v.length == 0) throw Error('number format error: empty string');
    if (((u = u || 10), 2 > u || 36 < u))
      throw Error('radix out of range: ' + u);
    if (v.charAt(0) == '-') return M(A(v.substring(1), u));
    if (0 <= v.indexOf('-'))
      throw Error('number format error: interior "-" character');
    for (var f = E(Math.pow(u, 8)), p = S, m = 0; m < v.length; m += 8) {
      var y = Math.min(8, v.length - m),
        d = parseInt(v.substring(m, m + y), u);
      8 > y
        ? ((y = E(Math.pow(u, y))), (p = p.j(y).add(E(d))))
        : ((p = p.j(f)), (p = p.add(E(d))));
    }
    return p;
  }
  var S = I(0),
    P = I(1),
    F = I(16777216);
  (i = h.prototype),
    (i.m = function () {
      if (x(this)) return -M(this).m();
      for (var v = 0, u = 1, f = 0; f < this.g.length; f++) {
        var p = this.i(f);
        (v += (0 <= p ? p : 4294967296 + p) * u), (u *= 4294967296);
      }
      return v;
    }),
    (i.toString = function (v) {
      if (((v = v || 10), 2 > v || 36 < v))
        throw Error('radix out of range: ' + v);
      if (R(this)) return '0';
      if (x(this)) return '-' + M(this).toString(v);
      for (var u = E(Math.pow(v, 6)), f = this, p = ''; ; ) {
        var m = ne(f, u).g;
        f = oe(f, m.j(u));
        var y = ((0 < f.g.length ? f.g[0] : f.h) >>> 0).toString(v);
        if (((f = m), R(f))) return y + p;
        for (; 6 > y.length; ) y = '0' + y;
        p = y + p;
      }
    }),
    (i.i = function (v) {
      return 0 > v ? 0 : v < this.g.length ? this.g[v] : this.h;
    });
  function R(v) {
    if (v.h != 0) return !1;
    for (var u = 0; u < v.g.length; u++) if (v.g[u] != 0) return !1;
    return !0;
  }
  function x(v) {
    return v.h == -1;
  }
  i.l = function (v) {
    return (v = oe(this, v)), x(v) ? -1 : R(v) ? 0 : 1;
  };
  function M(v) {
    for (var u = v.g.length, f = [], p = 0; p < u; p++) f[p] = ~v.g[p];
    return new h(f, ~v.h).add(P);
  }
  (i.abs = function () {
    return x(this) ? M(this) : this;
  }),
    (i.add = function (v) {
      for (
        var u = Math.max(this.g.length, v.g.length), f = [], p = 0, m = 0;
        m <= u;
        m++
      ) {
        var y = p + (this.i(m) & 65535) + (v.i(m) & 65535),
          d = (y >>> 16) + (this.i(m) >>> 16) + (v.i(m) >>> 16);
        (p = d >>> 16), (y &= 65535), (d &= 65535), (f[m] = (d << 16) | y);
      }
      return new h(f, f[f.length - 1] & -2147483648 ? -1 : 0);
    });
  function oe(v, u) {
    return v.add(M(u));
  }
  i.j = function (v) {
    if (R(this) || R(v)) return S;
    if (x(this)) return x(v) ? M(this).j(M(v)) : M(M(this).j(v));
    if (x(v)) return M(this.j(M(v)));
    if (0 > this.l(F) && 0 > v.l(F)) return E(this.m() * v.m());
    for (var u = this.g.length + v.g.length, f = [], p = 0; p < 2 * u; p++)
      f[p] = 0;
    for (p = 0; p < this.g.length; p++)
      for (var m = 0; m < v.g.length; m++) {
        var y = this.i(p) >>> 16,
          d = this.i(p) & 65535,
          ae = v.i(m) >>> 16,
          nt = v.i(m) & 65535;
        (f[2 * p + 2 * m] += d * nt),
          Z(f, 2 * p + 2 * m),
          (f[2 * p + 2 * m + 1] += y * nt),
          Z(f, 2 * p + 2 * m + 1),
          (f[2 * p + 2 * m + 1] += d * ae),
          Z(f, 2 * p + 2 * m + 1),
          (f[2 * p + 2 * m + 2] += y * ae),
          Z(f, 2 * p + 2 * m + 2);
      }
    for (p = 0; p < u; p++) f[p] = (f[2 * p + 1] << 16) | f[2 * p];
    for (p = u; p < 2 * u; p++) f[p] = 0;
    return new h(f, 0);
  };
  function Z(v, u) {
    for (; (v[u] & 65535) != v[u]; )
      (v[u + 1] += v[u] >>> 16), (v[u] &= 65535), u++;
  }
  function V(v, u) {
    (this.g = v), (this.h = u);
  }
  function ne(v, u) {
    if (R(u)) throw Error('division by zero');
    if (R(v)) return new V(S, S);
    if (x(v)) return (u = ne(M(v), u)), new V(M(u.g), M(u.h));
    if (x(u)) return (u = ne(v, M(u))), new V(M(u.g), u.h);
    if (30 < v.g.length) {
      if (x(v) || x(u))
        throw Error('slowDivide_ only works with positive integers.');
      for (var f = P, p = u; 0 >= p.l(v); ) (f = Pe(f)), (p = Pe(p));
      var m = Q(f, 1),
        y = Q(p, 1);
      for (p = Q(p, 2), f = Q(f, 2); !R(p); ) {
        var d = y.add(p);
        0 >= d.l(v) && ((m = m.add(f)), (y = d)), (p = Q(p, 1)), (f = Q(f, 1));
      }
      return (u = oe(v, m.j(u))), new V(m, u);
    }
    for (m = S; 0 <= v.l(u); ) {
      for (
        f = Math.max(1, Math.floor(v.m() / u.m())),
          p = Math.ceil(Math.log(f) / Math.LN2),
          p = 48 >= p ? 1 : Math.pow(2, p - 48),
          y = E(f),
          d = y.j(u);
        x(d) || 0 < d.l(v);

      )
        (f -= p), (y = E(f)), (d = y.j(u));
      R(y) && (y = P), (m = m.add(y)), (v = oe(v, d));
    }
    return new V(m, v);
  }
  (i.A = function (v) {
    return ne(this, v).h;
  }),
    (i.and = function (v) {
      for (
        var u = Math.max(this.g.length, v.g.length), f = [], p = 0;
        p < u;
        p++
      )
        f[p] = this.i(p) & v.i(p);
      return new h(f, this.h & v.h);
    }),
    (i.or = function (v) {
      for (
        var u = Math.max(this.g.length, v.g.length), f = [], p = 0;
        p < u;
        p++
      )
        f[p] = this.i(p) | v.i(p);
      return new h(f, this.h | v.h);
    }),
    (i.xor = function (v) {
      for (
        var u = Math.max(this.g.length, v.g.length), f = [], p = 0;
        p < u;
        p++
      )
        f[p] = this.i(p) ^ v.i(p);
      return new h(f, this.h ^ v.h);
    });
  function Pe(v) {
    for (var u = v.g.length + 1, f = [], p = 0; p < u; p++)
      f[p] = (v.i(p) << 1) | (v.i(p - 1) >>> 31);
    return new h(f, v.h);
  }
  function Q(v, u) {
    var f = u >> 5;
    u %= 32;
    for (var p = v.g.length - f, m = [], y = 0; y < p; y++)
      m[y] =
        0 < u ? (v.i(y + f) >>> u) | (v.i(y + f + 1) << (32 - u)) : v.i(y + f);
    return new h(m, v.h);
  }
  (r.prototype.digest = r.prototype.v),
    (r.prototype.reset = r.prototype.s),
    (r.prototype.update = r.prototype.u),
    (h.prototype.add = h.prototype.add),
    (h.prototype.multiply = h.prototype.j),
    (h.prototype.modulo = h.prototype.A),
    (h.prototype.compare = h.prototype.l),
    (h.prototype.toNumber = h.prototype.m),
    (h.prototype.toString = h.prototype.toString),
    (h.prototype.getBits = h.prototype.i),
    (h.fromNumber = E),
    (h.fromString = A),
    (Ws = h);
}).apply(
  typeof Gr < 'u'
    ? Gr
    : typeof self < 'u'
      ? self
      : typeof window < 'u'
        ? window
        : {},
);
var Kr = {},
  Kt =
    typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u'
        ? window
        : typeof Kr < 'u'
          ? Kr
          : typeof self < 'u'
            ? self
            : {};
(function () {
  var i,
    e =
      typeof Object.defineProperties == 'function'
        ? Object.defineProperty
        : function (t, s, a) {
            return (
              t == Array.prototype || t == Object.prototype || (t[s] = a.value),
              t
            );
          };
  function n(t) {
    t = [
      typeof globalThis == 'object' && globalThis,
      t,
      typeof window == 'object' && window,
      typeof self == 'object' && self,
      typeof Kt == 'object' && Kt,
    ];
    for (var s = 0; s < t.length; ++s) {
      var a = t[s];
      if (a && a.Math == Math) return a;
    }
    throw Error('Cannot find global object');
  }
  var r = n(this);
  function o(t, s) {
    if (s)
      e: {
        var a = r;
        t = t.split('.');
        for (var l = 0; l < t.length - 1; l++) {
          var _ = t[l];
          if (!(_ in a)) break e;
          a = a[_];
        }
        (t = t[t.length - 1]),
          (l = a[t]),
          (s = s(l)),
          s != l &&
            s != null &&
            e(a, t, { configurable: !0, writable: !0, value: s });
      }
  }
  function c(t, s) {
    t instanceof String && (t += '');
    var a = 0,
      l = !1,
      _ = {
        next: function () {
          if (!l && a < t.length) {
            var w = a++;
            return { value: s(w, t[w]), done: !1 };
          }
          return (l = !0), { done: !0, value: void 0 };
        },
      };
    return (
      (_[Symbol.iterator] = function () {
        return _;
      }),
      _
    );
  }
  o('Array.prototype.values', function (t) {
    return (
      t ||
      function () {
        return c(this, function (s, a) {
          return a;
        });
      }
    );
  });
  /** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/ var h = h || {},
    g = this || self;
  function I(t) {
    var s = typeof t;
    return (
      (s = s != 'object' ? s : t ? (Array.isArray(t) ? 'array' : s) : 'null'),
      s == 'array' || (s == 'object' && typeof t.length == 'number')
    );
  }
  function E(t) {
    var s = typeof t;
    return (s == 'object' && t != null) || s == 'function';
  }
  function A(t, s, a) {
    return t.call.apply(t.bind, arguments);
  }
  function S(t, s, a) {
    if (!t) throw Error();
    if (2 < arguments.length) {
      var l = Array.prototype.slice.call(arguments, 2);
      return function () {
        var _ = Array.prototype.slice.call(arguments);
        return Array.prototype.unshift.apply(_, l), t.apply(s, _);
      };
    }
    return function () {
      return t.apply(s, arguments);
    };
  }
  function P(t, s, a) {
    return (
      (P =
        Function.prototype.bind &&
        Function.prototype.bind.toString().indexOf('native code') != -1
          ? A
          : S),
      P.apply(null, arguments)
    );
  }
  function F(t, s) {
    var a = Array.prototype.slice.call(arguments, 1);
    return function () {
      var l = a.slice();
      return l.push.apply(l, arguments), t.apply(this, l);
    };
  }
  function R(t, s) {
    function a() {}
    (a.prototype = s.prototype),
      (t.aa = s.prototype),
      (t.prototype = new a()),
      (t.prototype.constructor = t),
      (t.Qb = function (l, _, w) {
        for (
          var T = Array(arguments.length - 2), D = 2;
          D < arguments.length;
          D++
        )
          T[D - 2] = arguments[D];
        return s.prototype[_].apply(l, T);
      });
  }
  function x(t) {
    const s = t.length;
    if (0 < s) {
      const a = Array(s);
      for (let l = 0; l < s; l++) a[l] = t[l];
      return a;
    }
    return [];
  }
  function M(t, s) {
    for (let a = 1; a < arguments.length; a++) {
      const l = arguments[a];
      if (I(l)) {
        const _ = t.length || 0,
          w = l.length || 0;
        t.length = _ + w;
        for (let T = 0; T < w; T++) t[_ + T] = l[T];
      } else t.push(l);
    }
  }
  class oe {
    constructor(s, a) {
      (this.i = s), (this.j = a), (this.h = 0), (this.g = null);
    }
    get() {
      let s;
      return (
        0 < this.h
          ? (this.h--, (s = this.g), (this.g = s.next), (s.next = null))
          : (s = this.i()),
        s
      );
    }
  }
  function Z(t) {
    return /^[\s\xa0]*$/.test(t);
  }
  function V() {
    var t = g.navigator;
    return t && (t = t.userAgent) ? t : '';
  }
  function ne(t) {
    return ne[' '](t), t;
  }
  ne[' '] = function () {};
  var Pe =
    V().indexOf('Gecko') != -1 &&
    !(V().toLowerCase().indexOf('webkit') != -1 && V().indexOf('Edge') == -1) &&
    !(V().indexOf('Trident') != -1 || V().indexOf('MSIE') != -1) &&
    V().indexOf('Edge') == -1;
  function Q(t, s, a) {
    for (const l in t) s.call(a, t[l], l, t);
  }
  function v(t, s) {
    for (const a in t) s.call(void 0, t[a], a, t);
  }
  function u(t) {
    const s = {};
    for (const a in t) s[a] = t[a];
    return s;
  }
  const f =
    'constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf'.split(
      ' ',
    );
  function p(t, s) {
    let a, l;
    for (let _ = 1; _ < arguments.length; _++) {
      l = arguments[_];
      for (a in l) t[a] = l[a];
      for (let w = 0; w < f.length; w++)
        (a = f[w]), Object.prototype.hasOwnProperty.call(l, a) && (t[a] = l[a]);
    }
  }
  function m(t) {
    var s = 1;
    t = t.split(':');
    const a = [];
    for (; 0 < s && t.length; ) a.push(t.shift()), s--;
    return t.length && a.push(t.join(':')), a;
  }
  function y(t) {
    g.setTimeout(() => {
      throw t;
    }, 0);
  }
  function d() {
    var t = hn;
    let s = null;
    return (
      t.g &&
        ((s = t.g), (t.g = t.g.next), t.g || (t.h = null), (s.next = null)),
      s
    );
  }
  class ae {
    constructor() {
      this.h = this.g = null;
    }
    add(s, a) {
      const l = nt.get();
      l.set(s, a), this.h ? (this.h.next = l) : (this.g = l), (this.h = l);
    }
  }
  var nt = new oe(
    () => new Ys(),
    (t) => t.reset(),
  );
  class Ys {
    constructor() {
      this.next = this.g = this.h = null;
    }
    set(s, a) {
      (this.h = s), (this.g = a), (this.next = null);
    }
    reset() {
      this.next = this.g = this.h = null;
    }
  }
  let it,
    rt = !1,
    hn = new ae(),
    yi = () => {
      const t = g.Promise.resolve(void 0);
      it = () => {
        t.then(Qs);
      };
    };
  var Qs = () => {
    for (var t; (t = d()); ) {
      try {
        t.h.call(t.g);
      } catch (a) {
        y(a);
      }
      var s = nt;
      s.j(t), 100 > s.h && (s.h++, (t.next = s.g), (s.g = t));
    }
    rt = !1;
  };
  function ve() {
    (this.s = this.s), (this.C = this.C);
  }
  (ve.prototype.s = !1),
    (ve.prototype.ma = function () {
      this.s || ((this.s = !0), this.N());
    }),
    (ve.prototype.N = function () {
      if (this.C) for (; this.C.length; ) this.C.shift()();
    });
  function H(t, s) {
    (this.type = t), (this.g = this.target = s), (this.defaultPrevented = !1);
  }
  H.prototype.h = function () {
    this.defaultPrevented = !0;
  };
  var Zs = (function () {
    if (!g.addEventListener || !Object.defineProperty) return !1;
    var t = !1,
      s = Object.defineProperty({}, 'passive', {
        get: function () {
          t = !0;
        },
      });
    try {
      const a = () => {};
      g.addEventListener('test', a, s), g.removeEventListener('test', a, s);
    } catch {}
    return t;
  })();
  function st(t, s) {
    if (
      (H.call(this, t ? t.type : ''),
      (this.relatedTarget = this.g = this.target = null),
      (this.button =
        this.screenY =
        this.screenX =
        this.clientY =
        this.clientX =
          0),
      (this.key = ''),
      (this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1),
      (this.state = null),
      (this.pointerId = 0),
      (this.pointerType = ''),
      (this.i = null),
      t)
    ) {
      var a = (this.type = t.type),
        l =
          t.changedTouches && t.changedTouches.length
            ? t.changedTouches[0]
            : null;
      if (
        ((this.target = t.target || t.srcElement),
        (this.g = s),
        (s = t.relatedTarget))
      ) {
        if (Pe) {
          e: {
            try {
              ne(s.nodeName);
              var _ = !0;
              break e;
            } catch {}
            _ = !1;
          }
          _ || (s = null);
        }
      } else
        a == 'mouseover'
          ? (s = t.fromElement)
          : a == 'mouseout' && (s = t.toElement);
      (this.relatedTarget = s),
        l
          ? ((this.clientX = l.clientX !== void 0 ? l.clientX : l.pageX),
            (this.clientY = l.clientY !== void 0 ? l.clientY : l.pageY),
            (this.screenX = l.screenX || 0),
            (this.screenY = l.screenY || 0))
          : ((this.clientX = t.clientX !== void 0 ? t.clientX : t.pageX),
            (this.clientY = t.clientY !== void 0 ? t.clientY : t.pageY),
            (this.screenX = t.screenX || 0),
            (this.screenY = t.screenY || 0)),
        (this.button = t.button),
        (this.key = t.key || ''),
        (this.ctrlKey = t.ctrlKey),
        (this.altKey = t.altKey),
        (this.shiftKey = t.shiftKey),
        (this.metaKey = t.metaKey),
        (this.pointerId = t.pointerId || 0),
        (this.pointerType =
          typeof t.pointerType == 'string'
            ? t.pointerType
            : eo[t.pointerType] || ''),
        (this.state = t.state),
        (this.i = t),
        t.defaultPrevented && st.aa.h.call(this);
    }
  }
  R(st, H);
  var eo = { 2: 'touch', 3: 'pen', 4: 'mouse' };
  st.prototype.h = function () {
    st.aa.h.call(this);
    var t = this.i;
    t.preventDefault ? t.preventDefault() : (t.returnValue = !1);
  };
  var Ct = 'closure_listenable_' + ((1e6 * Math.random()) | 0),
    to = 0;
  function no(t, s, a, l, _) {
    (this.listener = t),
      (this.proxy = null),
      (this.src = s),
      (this.type = a),
      (this.capture = !!l),
      (this.ha = _),
      (this.key = ++to),
      (this.da = this.fa = !1);
  }
  function Rt(t) {
    (t.da = !0),
      (t.listener = null),
      (t.proxy = null),
      (t.src = null),
      (t.ha = null);
  }
  function Pt(t) {
    (this.src = t), (this.g = {}), (this.h = 0);
  }
  Pt.prototype.add = function (t, s, a, l, _) {
    var w = t.toString();
    (t = this.g[w]), t || ((t = this.g[w] = []), this.h++);
    var T = dn(t, s, l, _);
    return (
      -1 < T
        ? ((s = t[T]), a || (s.fa = !1))
        : ((s = new no(s, this.src, w, !!l, _)), (s.fa = a), t.push(s)),
      s
    );
  };
  function un(t, s) {
    var a = s.type;
    if (a in t.g) {
      var l = t.g[a],
        _ = Array.prototype.indexOf.call(l, s, void 0),
        w;
      (w = 0 <= _) && Array.prototype.splice.call(l, _, 1),
        w && (Rt(s), t.g[a].length == 0 && (delete t.g[a], t.h--));
    }
  }
  function dn(t, s, a, l) {
    for (var _ = 0; _ < t.length; ++_) {
      var w = t[_];
      if (!w.da && w.listener == s && w.capture == !!a && w.ha == l) return _;
    }
    return -1;
  }
  var fn = 'closure_lm_' + ((1e6 * Math.random()) | 0),
    pn = {};
  function Ii(t, s, a, l, _) {
    if (Array.isArray(s)) {
      for (var w = 0; w < s.length; w++) Ii(t, s[w], a, l, _);
      return null;
    }
    return (
      (a = Ti(a)),
      t && t[Ct]
        ? t.K(s, a, E(l) ? !!l.capture : !!l, _)
        : io(t, s, a, !1, l, _)
    );
  }
  function io(t, s, a, l, _, w) {
    if (!s) throw Error('Invalid event type');
    var T = E(_) ? !!_.capture : !!_,
      D = mn(t);
    if ((D || (t[fn] = D = new Pt(t)), (a = D.add(s, a, l, T, w)), a.proxy))
      return a;
    if (
      ((l = ro()),
      (a.proxy = l),
      (l.src = t),
      (l.listener = a),
      t.addEventListener)
    )
      Zs || (_ = T),
        _ === void 0 && (_ = !1),
        t.addEventListener(s.toString(), l, _);
    else if (t.attachEvent) t.attachEvent(Ei(s.toString()), l);
    else if (t.addListener && t.removeListener) t.addListener(l);
    else throw Error('addEventListener and attachEvent are unavailable.');
    return a;
  }
  function ro() {
    function t(a) {
      return s.call(t.src, t.listener, a);
    }
    const s = so;
    return t;
  }
  function wi(t, s, a, l, _) {
    if (Array.isArray(s))
      for (var w = 0; w < s.length; w++) wi(t, s[w], a, l, _);
    else
      (l = E(l) ? !!l.capture : !!l),
        (a = Ti(a)),
        t && t[Ct]
          ? ((t = t.i),
            (s = String(s).toString()),
            s in t.g &&
              ((w = t.g[s]),
              (a = dn(w, a, l, _)),
              -1 < a &&
                (Rt(w[a]),
                Array.prototype.splice.call(w, a, 1),
                w.length == 0 && (delete t.g[s], t.h--))))
          : t &&
            (t = mn(t)) &&
            ((s = t.g[s.toString()]),
            (t = -1),
            s && (t = dn(s, a, l, _)),
            (a = -1 < t ? s[t] : null) && gn(a));
  }
  function gn(t) {
    if (typeof t != 'number' && t && !t.da) {
      var s = t.src;
      if (s && s[Ct]) un(s.i, t);
      else {
        var a = t.type,
          l = t.proxy;
        s.removeEventListener
          ? s.removeEventListener(a, l, t.capture)
          : s.detachEvent
            ? s.detachEvent(Ei(a), l)
            : s.addListener && s.removeListener && s.removeListener(l),
          (a = mn(s))
            ? (un(a, t), a.h == 0 && ((a.src = null), (s[fn] = null)))
            : Rt(t);
      }
    }
  }
  function Ei(t) {
    return t in pn ? pn[t] : (pn[t] = 'on' + t);
  }
  function so(t, s) {
    if (t.da) t = !0;
    else {
      s = new st(s, this);
      var a = t.listener,
        l = t.ha || t.src;
      t.fa && gn(t), (t = a.call(l, s));
    }
    return t;
  }
  function mn(t) {
    return (t = t[fn]), t instanceof Pt ? t : null;
  }
  var vn = '__closure_events_fn_' + ((1e9 * Math.random()) >>> 0);
  function Ti(t) {
    return typeof t == 'function'
      ? t
      : (t[vn] ||
          (t[vn] = function (s) {
            return t.handleEvent(s);
          }),
        t[vn]);
  }
  function $() {
    ve.call(this), (this.i = new Pt(this)), (this.M = this), (this.F = null);
  }
  R($, ve),
    ($.prototype[Ct] = !0),
    ($.prototype.removeEventListener = function (t, s, a, l) {
      wi(this, t, s, a, l);
    });
  function J(t, s) {
    var a,
      l = t.F;
    if (l) for (a = []; l; l = l.F) a.push(l);
    if (((t = t.M), (l = s.type || s), typeof s == 'string')) s = new H(s, t);
    else if (s instanceof H) s.target = s.target || t;
    else {
      var _ = s;
      (s = new H(l, t)), p(s, _);
    }
    if (((_ = !0), a))
      for (var w = a.length - 1; 0 <= w; w--) {
        var T = (s.g = a[w]);
        _ = Ot(T, l, !0, s) && _;
      }
    if (
      ((T = s.g = t), (_ = Ot(T, l, !0, s) && _), (_ = Ot(T, l, !1, s) && _), a)
    )
      for (w = 0; w < a.length; w++)
        (T = s.g = a[w]), (_ = Ot(T, l, !1, s) && _);
  }
  ($.prototype.N = function () {
    if (($.aa.N.call(this), this.i)) {
      var t = this.i,
        s;
      for (s in t.g) {
        for (var a = t.g[s], l = 0; l < a.length; l++) Rt(a[l]);
        delete t.g[s], t.h--;
      }
    }
    this.F = null;
  }),
    ($.prototype.K = function (t, s, a, l) {
      return this.i.add(String(t), s, !1, a, l);
    }),
    ($.prototype.L = function (t, s, a, l) {
      return this.i.add(String(t), s, !0, a, l);
    });
  function Ot(t, s, a, l) {
    if (((s = t.i.g[String(s)]), !s)) return !0;
    s = s.concat();
    for (var _ = !0, w = 0; w < s.length; ++w) {
      var T = s[w];
      if (T && !T.da && T.capture == a) {
        var D = T.listener,
          B = T.ha || T.src;
        T.fa && un(t.i, T), (_ = D.call(B, l) !== !1 && _);
      }
    }
    return _ && !l.defaultPrevented;
  }
  function Ai(t, s, a) {
    if (typeof t == 'function') a && (t = P(t, a));
    else if (t && typeof t.handleEvent == 'function') t = P(t.handleEvent, t);
    else throw Error('Invalid listener argument');
    return 2147483647 < Number(s) ? -1 : g.setTimeout(t, s || 0);
  }
  function bi(t) {
    t.g = Ai(() => {
      (t.g = null), t.i && ((t.i = !1), bi(t));
    }, t.l);
    const s = t.h;
    (t.h = null), t.m.apply(null, s);
  }
  class oo extends ve {
    constructor(s, a) {
      super(),
        (this.m = s),
        (this.l = a),
        (this.h = null),
        (this.i = !1),
        (this.g = null);
    }
    j(s) {
      (this.h = arguments), this.g ? (this.i = !0) : bi(this);
    }
    N() {
      super.N(),
        this.g &&
          (g.clearTimeout(this.g),
          (this.g = null),
          (this.i = !1),
          (this.h = null));
    }
  }
  function ot(t) {
    ve.call(this), (this.h = t), (this.g = {});
  }
  R(ot, ve);
  var Si = [];
  function ki(t) {
    Q(
      t.g,
      function (s, a) {
        this.g.hasOwnProperty(a) && gn(s);
      },
      t,
    ),
      (t.g = {});
  }
  (ot.prototype.N = function () {
    ot.aa.N.call(this), ki(this);
  }),
    (ot.prototype.handleEvent = function () {
      throw Error('EventHandler.handleEvent not implemented');
    });
  var _n = g.JSON.stringify,
    ao = g.JSON.parse,
    co = class {
      stringify(t) {
        return g.JSON.stringify(t, void 0);
      }
      parse(t) {
        return g.JSON.parse(t, void 0);
      }
    };
  function yn() {}
  yn.prototype.h = null;
  function Ci(t) {
    return t.h || (t.h = t.i());
  }
  function lo() {}
  var at = { OPEN: 'a', kb: 'b', Ja: 'c', wb: 'd' };
  function In() {
    H.call(this, 'd');
  }
  R(In, H);
  function wn() {
    H.call(this, 'c');
  }
  R(wn, H);
  var Be = {},
    Ri = null;
  function En() {
    return (Ri = Ri || new $());
  }
  Be.La = 'serverreachability';
  function Pi(t) {
    H.call(this, Be.La, t);
  }
  R(Pi, H);
  function ct(t) {
    const s = En();
    J(s, new Pi(s));
  }
  Be.STAT_EVENT = 'statevent';
  function Oi(t, s) {
    H.call(this, Be.STAT_EVENT, t), (this.stat = s);
  }
  R(Oi, H);
  function X(t) {
    const s = En();
    J(s, new Oi(s, t));
  }
  Be.Ma = 'timingevent';
  function Ni(t, s) {
    H.call(this, Be.Ma, t), (this.size = s);
  }
  R(Ni, H);
  function lt(t, s) {
    if (typeof t != 'function')
      throw Error('Fn must not be null and must be a function');
    return g.setTimeout(function () {
      t();
    }, s);
  }
  function ht() {
    this.g = !0;
  }
  ht.prototype.xa = function () {
    this.g = !1;
  };
  function ho(t, s, a, l, _, w) {
    t.info(function () {
      if (t.g)
        if (w)
          for (var T = '', D = w.split('&'), B = 0; B < D.length; B++) {
            var O = D[B].split('=');
            if (1 < O.length) {
              var z = O[0];
              O = O[1];
              var W = z.split('_');
              T =
                2 <= W.length && W[1] == 'type'
                  ? T + (z + '=' + O + '&')
                  : T + (z + '=redacted&');
            }
          }
        else T = null;
      else T = w;
      return (
        'XMLHTTP REQ (' +
        l +
        ') [attempt ' +
        _ +
        ']: ' +
        s +
        `
` +
        a +
        `
` +
        T
      );
    });
  }
  function uo(t, s, a, l, _, w, T) {
    t.info(function () {
      return (
        'XMLHTTP RESP (' +
        l +
        ') [ attempt ' +
        _ +
        ']: ' +
        s +
        `
` +
        a +
        `
` +
        w +
        ' ' +
        T
      );
    });
  }
  function Ve(t, s, a, l) {
    t.info(function () {
      return 'XMLHTTP TEXT (' + s + '): ' + po(t, a) + (l ? ' ' + l : '');
    });
  }
  function fo(t, s) {
    t.info(function () {
      return 'TIMEOUT: ' + s;
    });
  }
  ht.prototype.info = function () {};
  function po(t, s) {
    if (!t.g) return s;
    if (!s) return null;
    try {
      var a = JSON.parse(s);
      if (a) {
        for (t = 0; t < a.length; t++)
          if (Array.isArray(a[t])) {
            var l = a[t];
            if (!(2 > l.length)) {
              var _ = l[1];
              if (Array.isArray(_) && !(1 > _.length)) {
                var w = _[0];
                if (w != 'noop' && w != 'stop' && w != 'close')
                  for (var T = 1; T < _.length; T++) _[T] = '';
              }
            }
          }
      }
      return _n(a);
    } catch {
      return s;
    }
  }
  var Tn = {
      NO_ERROR: 0,
      gb: 1,
      tb: 2,
      sb: 3,
      nb: 4,
      rb: 5,
      ub: 6,
      Ia: 7,
      TIMEOUT: 8,
      xb: 9,
    },
    go = {
      lb: 'complete',
      Hb: 'success',
      Ja: 'error',
      Ia: 'abort',
      zb: 'ready',
      Ab: 'readystatechange',
      TIMEOUT: 'timeout',
      vb: 'incrementaldata',
      yb: 'progress',
      ob: 'downloadprogress',
      Pb: 'uploadprogress',
    },
    An;
  function Nt() {}
  R(Nt, yn),
    (Nt.prototype.g = function () {
      return new XMLHttpRequest();
    }),
    (Nt.prototype.i = function () {
      return {};
    }),
    (An = new Nt());
  function _e(t, s, a, l) {
    (this.j = t),
      (this.i = s),
      (this.l = a),
      (this.R = l || 1),
      (this.U = new ot(this)),
      (this.I = 45e3),
      (this.H = null),
      (this.o = !1),
      (this.m = this.A = this.v = this.L = this.F = this.S = this.B = null),
      (this.D = []),
      (this.g = null),
      (this.C = 0),
      (this.s = this.u = null),
      (this.X = -1),
      (this.J = !1),
      (this.O = 0),
      (this.M = null),
      (this.W = this.K = this.T = this.P = !1),
      (this.h = new Di());
  }
  function Di() {
    (this.i = null), (this.g = ''), (this.h = !1);
  }
  var Li = {},
    bn = {};
  function Sn(t, s, a) {
    (t.L = 1), (t.v = Ut(ce(s))), (t.m = a), (t.P = !0), Mi(t, null);
  }
  function Mi(t, s) {
    (t.F = Date.now()), Dt(t), (t.A = ce(t.v));
    var a = t.A,
      l = t.R;
    Array.isArray(l) || (l = [String(l)]),
      Ji(a.i, 't', l),
      (t.C = 0),
      (a = t.j.J),
      (t.h = new Di()),
      (t.g = fr(t.j, a ? s : null, !t.m)),
      0 < t.O && (t.M = new oo(P(t.Y, t, t.g), t.O)),
      (s = t.U),
      (a = t.g),
      (l = t.ca);
    var _ = 'readystatechange';
    Array.isArray(_) || (_ && (Si[0] = _.toString()), (_ = Si));
    for (var w = 0; w < _.length; w++) {
      var T = Ii(a, _[w], l || s.handleEvent, !1, s.h || s);
      if (!T) break;
      s.g[T.key] = T;
    }
    (s = t.H ? u(t.H) : {}),
      t.m
        ? (t.u || (t.u = 'POST'),
          (s['Content-Type'] = 'application/x-www-form-urlencoded'),
          t.g.ea(t.A, t.u, t.m, s))
        : ((t.u = 'GET'), t.g.ea(t.A, t.u, null, s)),
      ct(),
      ho(t.i, t.u, t.A, t.l, t.R, t.m);
  }
  (_e.prototype.ca = function (t) {
    t = t.target;
    const s = this.M;
    s && le(t) == 3 ? s.j() : this.Y(t);
  }),
    (_e.prototype.Y = function (t) {
      try {
        if (t == this.g)
          e: {
            const W = le(this.g);
            var s = this.g.Ba();
            const ze = this.g.Z();
            if (
              !(3 > W) &&
              (W != 3 || (this.g && (this.h.h || this.g.oa() || nr(this.g))))
            ) {
              this.J || W != 4 || s == 7 || (s == 8 || 0 >= ze ? ct(3) : ct(2)),
                kn(this);
              var a = this.g.Z();
              this.X = a;
              t: if (Ui(this)) {
                var l = nr(this.g);
                t = '';
                var _ = l.length,
                  w = le(this.g) == 4;
                if (!this.h.i) {
                  if (typeof TextDecoder > 'u') {
                    Oe(this), ut(this);
                    var T = '';
                    break t;
                  }
                  this.h.i = new g.TextDecoder();
                }
                for (s = 0; s < _; s++)
                  (this.h.h = !0),
                    (t += this.h.i.decode(l[s], {
                      stream: !(w && s == _ - 1),
                    }));
                (l.length = 0), (this.h.g += t), (this.C = 0), (T = this.h.g);
              } else T = this.g.oa();
              if (
                ((this.o = a == 200),
                uo(this.i, this.u, this.A, this.l, this.R, W, a),
                this.o)
              ) {
                if (this.T && !this.K) {
                  t: {
                    if (this.g) {
                      var D,
                        B = this.g;
                      if (
                        (D = B.g
                          ? B.g.getResponseHeader('X-HTTP-Initial-Response')
                          : null) &&
                        !Z(D)
                      ) {
                        var O = D;
                        break t;
                      }
                    }
                    O = null;
                  }
                  if ((a = O))
                    Ve(
                      this.i,
                      this.l,
                      a,
                      'Initial handshake response via X-HTTP-Initial-Response',
                    ),
                      (this.K = !0),
                      Cn(this, a);
                  else {
                    (this.o = !1), (this.s = 3), X(12), Oe(this), ut(this);
                    break e;
                  }
                }
                if (this.P) {
                  a = !0;
                  let ie;
                  for (; !this.J && this.C < T.length; )
                    if (((ie = mo(this, T)), ie == bn)) {
                      W == 4 && ((this.s = 4), X(14), (a = !1)),
                        Ve(this.i, this.l, null, '[Incomplete Response]');
                      break;
                    } else if (ie == Li) {
                      (this.s = 4),
                        X(15),
                        Ve(this.i, this.l, T, '[Invalid Chunk]'),
                        (a = !1);
                      break;
                    } else Ve(this.i, this.l, ie, null), Cn(this, ie);
                  if (
                    (Ui(this) &&
                      this.C != 0 &&
                      ((this.h.g = this.h.g.slice(this.C)), (this.C = 0)),
                    W != 4 ||
                      T.length != 0 ||
                      this.h.h ||
                      ((this.s = 1), X(16), (a = !1)),
                    (this.o = this.o && a),
                    !a)
                  )
                    Ve(this.i, this.l, T, '[Invalid Chunked Response]'),
                      Oe(this),
                      ut(this);
                  else if (0 < T.length && !this.W) {
                    this.W = !0;
                    var z = this.j;
                    z.g == this &&
                      z.ba &&
                      !z.M &&
                      (z.j.info(
                        'Great, no buffering proxy detected. Bytes received: ' +
                          T.length,
                      ),
                      Ln(z),
                      (z.M = !0),
                      X(11));
                  }
                } else Ve(this.i, this.l, T, null), Cn(this, T);
                W == 4 && Oe(this),
                  this.o &&
                    !this.J &&
                    (W == 4 ? lr(this.j, this) : ((this.o = !1), Dt(this)));
              } else
                Do(this.g),
                  a == 400 && 0 < T.indexOf('Unknown SID')
                    ? ((this.s = 3), X(12))
                    : ((this.s = 0), X(13)),
                  Oe(this),
                  ut(this);
            }
          }
      } catch {
      } finally {
      }
    });
  function Ui(t) {
    return t.g ? t.u == 'GET' && t.L != 2 && t.j.Ca : !1;
  }
  function mo(t, s) {
    var a = t.C,
      l = s.indexOf(
        `
`,
        a,
      );
    return l == -1
      ? bn
      : ((a = Number(s.substring(a, l))),
        isNaN(a)
          ? Li
          : ((l += 1),
            l + a > s.length
              ? bn
              : ((s = s.slice(l, l + a)), (t.C = l + a), s)));
  }
  _e.prototype.cancel = function () {
    (this.J = !0), Oe(this);
  };
  function Dt(t) {
    (t.S = Date.now() + t.I), xi(t, t.I);
  }
  function xi(t, s) {
    if (t.B != null) throw Error('WatchDog timer not null');
    t.B = lt(P(t.ba, t), s);
  }
  function kn(t) {
    t.B && (g.clearTimeout(t.B), (t.B = null));
  }
  _e.prototype.ba = function () {
    this.B = null;
    const t = Date.now();
    0 <= t - this.S
      ? (fo(this.i, this.A),
        this.L != 2 && (ct(), X(17)),
        Oe(this),
        (this.s = 2),
        ut(this))
      : xi(this, this.S - t);
  };
  function ut(t) {
    t.j.G == 0 || t.J || lr(t.j, t);
  }
  function Oe(t) {
    kn(t);
    var s = t.M;
    s && typeof s.ma == 'function' && s.ma(),
      (t.M = null),
      ki(t.U),
      t.g && ((s = t.g), (t.g = null), s.abort(), s.ma());
  }
  function Cn(t, s) {
    try {
      var a = t.j;
      if (a.G != 0 && (a.g == t || Rn(a.h, t))) {
        if (!t.K && Rn(a.h, t) && a.G == 3) {
          try {
            var l = a.Da.g.parse(s);
          } catch {
            l = null;
          }
          if (Array.isArray(l) && l.length == 3) {
            var _ = l;
            if (_[0] == 0) {
              e: if (!a.u) {
                if (a.g)
                  if (a.g.F + 3e3 < t.F) Ht(a), Bt(a);
                  else break e;
                Dn(a), X(18);
              }
            } else
              (a.za = _[1]),
                0 < a.za - a.T &&
                  37500 > _[2] &&
                  a.F &&
                  a.v == 0 &&
                  !a.C &&
                  (a.C = lt(P(a.Za, a), 6e3));
            if (1 >= Bi(a.h) && a.ca) {
              try {
                a.ca();
              } catch {}
              a.ca = void 0;
            }
          } else De(a, 11);
        } else if (((t.K || a.g == t) && Ht(a), !Z(s)))
          for (_ = a.Da.g.parse(s), s = 0; s < _.length; s++) {
            let O = _[s];
            if (((a.T = O[0]), (O = O[1]), a.G == 2))
              if (O[0] == 'c') {
                (a.K = O[1]), (a.ia = O[2]);
                const z = O[3];
                z != null && ((a.la = z), a.j.info('VER=' + a.la));
                const W = O[4];
                W != null && ((a.Aa = W), a.j.info('SVER=' + a.Aa));
                const ze = O[5];
                ze != null &&
                  typeof ze == 'number' &&
                  0 < ze &&
                  ((l = 1.5 * ze),
                  (a.L = l),
                  a.j.info('backChannelRequestTimeoutMs_=' + l)),
                  (l = a);
                const ie = t.g;
                if (ie) {
                  const $t = ie.g
                    ? ie.g.getResponseHeader('X-Client-Wire-Protocol')
                    : null;
                  if ($t) {
                    var w = l.h;
                    w.g ||
                      ($t.indexOf('spdy') == -1 &&
                        $t.indexOf('quic') == -1 &&
                        $t.indexOf('h2') == -1) ||
                      ((w.j = w.l),
                      (w.g = new Set()),
                      w.h && (Pn(w, w.h), (w.h = null)));
                  }
                  if (l.D) {
                    const Mn = ie.g
                      ? ie.g.getResponseHeader('X-HTTP-Session-Id')
                      : null;
                    Mn && ((l.ya = Mn), L(l.I, l.D, Mn));
                  }
                }
                (a.G = 3),
                  a.l && a.l.ua(),
                  a.ba &&
                    ((a.R = Date.now() - t.F),
                    a.j.info('Handshake RTT: ' + a.R + 'ms')),
                  (l = a);
                var T = t;
                if (((l.qa = dr(l, l.J ? l.ia : null, l.W)), T.K)) {
                  Vi(l.h, T);
                  var D = T,
                    B = l.L;
                  B && (D.I = B), D.B && (kn(D), Dt(D)), (l.g = T);
                } else ar(l);
                0 < a.i.length && Vt(a);
              } else (O[0] != 'stop' && O[0] != 'close') || De(a, 7);
            else
              a.G == 3 &&
                (O[0] == 'stop' || O[0] == 'close'
                  ? O[0] == 'stop'
                    ? De(a, 7)
                    : Nn(a)
                  : O[0] != 'noop' && a.l && a.l.ta(O),
                (a.v = 0));
          }
      }
      ct(4);
    } catch {}
  }
  var vo = class {
    constructor(t, s) {
      (this.g = t), (this.map = s);
    }
  };
  function ji(t) {
    (this.l = t || 10),
      g.PerformanceNavigationTiming
        ? ((t = g.performance.getEntriesByType('navigation')),
          (t =
            0 < t.length &&
            (t[0].nextHopProtocol == 'hq' || t[0].nextHopProtocol == 'h2')))
        : (t = !!(
            g.chrome &&
            g.chrome.loadTimes &&
            g.chrome.loadTimes() &&
            g.chrome.loadTimes().wasFetchedViaSpdy
          )),
      (this.j = t ? this.l : 1),
      (this.g = null),
      1 < this.j && (this.g = new Set()),
      (this.h = null),
      (this.i = []);
  }
  function Fi(t) {
    return t.h ? !0 : t.g ? t.g.size >= t.j : !1;
  }
  function Bi(t) {
    return t.h ? 1 : t.g ? t.g.size : 0;
  }
  function Rn(t, s) {
    return t.h ? t.h == s : t.g ? t.g.has(s) : !1;
  }
  function Pn(t, s) {
    t.g ? t.g.add(s) : (t.h = s);
  }
  function Vi(t, s) {
    t.h && t.h == s ? (t.h = null) : t.g && t.g.has(s) && t.g.delete(s);
  }
  ji.prototype.cancel = function () {
    if (((this.i = Hi(this)), this.h)) this.h.cancel(), (this.h = null);
    else if (this.g && this.g.size !== 0) {
      for (const t of this.g.values()) t.cancel();
      this.g.clear();
    }
  };
  function Hi(t) {
    if (t.h != null) return t.i.concat(t.h.D);
    if (t.g != null && t.g.size !== 0) {
      let s = t.i;
      for (const a of t.g.values()) s = s.concat(a.D);
      return s;
    }
    return x(t.i);
  }
  function _o(t) {
    if (t.V && typeof t.V == 'function') return t.V();
    if (
      (typeof Map < 'u' && t instanceof Map) ||
      (typeof Set < 'u' && t instanceof Set)
    )
      return Array.from(t.values());
    if (typeof t == 'string') return t.split('');
    if (I(t)) {
      for (var s = [], a = t.length, l = 0; l < a; l++) s.push(t[l]);
      return s;
    }
    (s = []), (a = 0);
    for (l in t) s[a++] = t[l];
    return s;
  }
  function yo(t) {
    if (t.na && typeof t.na == 'function') return t.na();
    if (!t.V || typeof t.V != 'function') {
      if (typeof Map < 'u' && t instanceof Map) return Array.from(t.keys());
      if (!(typeof Set < 'u' && t instanceof Set)) {
        if (I(t) || typeof t == 'string') {
          var s = [];
          t = t.length;
          for (var a = 0; a < t; a++) s.push(a);
          return s;
        }
        (s = []), (a = 0);
        for (const l in t) s[a++] = l;
        return s;
      }
    }
  }
  function $i(t, s) {
    if (t.forEach && typeof t.forEach == 'function') t.forEach(s, void 0);
    else if (I(t) || typeof t == 'string')
      Array.prototype.forEach.call(t, s, void 0);
    else
      for (var a = yo(t), l = _o(t), _ = l.length, w = 0; w < _; w++)
        s.call(void 0, l[w], a && a[w], t);
  }
  var zi = RegExp(
    '^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$',
  );
  function Io(t, s) {
    if (t) {
      t = t.split('&');
      for (var a = 0; a < t.length; a++) {
        var l = t[a].indexOf('='),
          _ = null;
        if (0 <= l) {
          var w = t[a].substring(0, l);
          _ = t[a].substring(l + 1);
        } else w = t[a];
        s(w, _ ? decodeURIComponent(_.replace(/\+/g, ' ')) : '');
      }
    }
  }
  function Ne(t) {
    if (
      ((this.g = this.o = this.j = ''),
      (this.s = null),
      (this.m = this.l = ''),
      (this.h = !1),
      t instanceof Ne)
    ) {
      (this.h = t.h),
        Lt(this, t.j),
        (this.o = t.o),
        (this.g = t.g),
        Mt(this, t.s),
        (this.l = t.l);
      var s = t.i,
        a = new pt();
      (a.i = s.i),
        s.g && ((a.g = new Map(s.g)), (a.h = s.h)),
        Wi(this, a),
        (this.m = t.m);
    } else
      t && (s = String(t).match(zi))
        ? ((this.h = !1),
          Lt(this, s[1] || '', !0),
          (this.o = dt(s[2] || '')),
          (this.g = dt(s[3] || '', !0)),
          Mt(this, s[4]),
          (this.l = dt(s[5] || '', !0)),
          Wi(this, s[6] || '', !0),
          (this.m = dt(s[7] || '')))
        : ((this.h = !1), (this.i = new pt(null, this.h)));
  }
  Ne.prototype.toString = function () {
    var t = [],
      s = this.j;
    s && t.push(ft(s, Gi, !0), ':');
    var a = this.g;
    return (
      (a || s == 'file') &&
        (t.push('//'),
        (s = this.o) && t.push(ft(s, Gi, !0), '@'),
        t.push(
          encodeURIComponent(String(a)).replace(/%25([0-9a-fA-F]{2})/g, '%$1'),
        ),
        (a = this.s),
        a != null && t.push(':', String(a))),
      (a = this.l) &&
        (this.g && a.charAt(0) != '/' && t.push('/'),
        t.push(ft(a, a.charAt(0) == '/' ? To : Eo, !0))),
      (a = this.i.toString()) && t.push('?', a),
      (a = this.m) && t.push('#', ft(a, bo)),
      t.join('')
    );
  };
  function ce(t) {
    return new Ne(t);
  }
  function Lt(t, s, a) {
    (t.j = a ? dt(s, !0) : s), t.j && (t.j = t.j.replace(/:$/, ''));
  }
  function Mt(t, s) {
    if (s) {
      if (((s = Number(s)), isNaN(s) || 0 > s))
        throw Error('Bad port number ' + s);
      t.s = s;
    } else t.s = null;
  }
  function Wi(t, s, a) {
    s instanceof pt
      ? ((t.i = s), So(t.i, t.h))
      : (a || (s = ft(s, Ao)), (t.i = new pt(s, t.h)));
  }
  function L(t, s, a) {
    t.i.set(s, a);
  }
  function Ut(t) {
    return (
      L(
        t,
        'zx',
        Math.floor(2147483648 * Math.random()).toString(36) +
          Math.abs(
            Math.floor(2147483648 * Math.random()) ^ Date.now(),
          ).toString(36),
      ),
      t
    );
  }
  function dt(t, s) {
    return t
      ? s
        ? decodeURI(t.replace(/%25/g, '%2525'))
        : decodeURIComponent(t)
      : '';
  }
  function ft(t, s, a) {
    return typeof t == 'string'
      ? ((t = encodeURI(t).replace(s, wo)),
        a && (t = t.replace(/%25([0-9a-fA-F]{2})/g, '%$1')),
        t)
      : null;
  }
  function wo(t) {
    return (
      (t = t.charCodeAt(0)),
      '%' + ((t >> 4) & 15).toString(16) + (t & 15).toString(16)
    );
  }
  var Gi = /[#\/\?@]/g,
    Eo = /[#\?:]/g,
    To = /[#\?]/g,
    Ao = /[#\?@]/g,
    bo = /#/g;
  function pt(t, s) {
    (this.h = this.g = null), (this.i = t || null), (this.j = !!s);
  }
  function ye(t) {
    t.g ||
      ((t.g = new Map()),
      (t.h = 0),
      t.i &&
        Io(t.i, function (s, a) {
          t.add(decodeURIComponent(s.replace(/\+/g, ' ')), a);
        }));
  }
  (i = pt.prototype),
    (i.add = function (t, s) {
      ye(this), (this.i = null), (t = He(this, t));
      var a = this.g.get(t);
      return a || this.g.set(t, (a = [])), a.push(s), (this.h += 1), this;
    });
  function Ki(t, s) {
    ye(t),
      (s = He(t, s)),
      t.g.has(s) && ((t.i = null), (t.h -= t.g.get(s).length), t.g.delete(s));
  }
  function qi(t, s) {
    return ye(t), (s = He(t, s)), t.g.has(s);
  }
  (i.forEach = function (t, s) {
    ye(this),
      this.g.forEach(function (a, l) {
        a.forEach(function (_) {
          t.call(s, _, l, this);
        }, this);
      }, this);
  }),
    (i.na = function () {
      ye(this);
      const t = Array.from(this.g.values()),
        s = Array.from(this.g.keys()),
        a = [];
      for (let l = 0; l < s.length; l++) {
        const _ = t[l];
        for (let w = 0; w < _.length; w++) a.push(s[l]);
      }
      return a;
    }),
    (i.V = function (t) {
      ye(this);
      let s = [];
      if (typeof t == 'string')
        qi(this, t) && (s = s.concat(this.g.get(He(this, t))));
      else {
        t = Array.from(this.g.values());
        for (let a = 0; a < t.length; a++) s = s.concat(t[a]);
      }
      return s;
    }),
    (i.set = function (t, s) {
      return (
        ye(this),
        (this.i = null),
        (t = He(this, t)),
        qi(this, t) && (this.h -= this.g.get(t).length),
        this.g.set(t, [s]),
        (this.h += 1),
        this
      );
    }),
    (i.get = function (t, s) {
      return t ? ((t = this.V(t)), 0 < t.length ? String(t[0]) : s) : s;
    });
  function Ji(t, s, a) {
    Ki(t, s),
      0 < a.length &&
        ((t.i = null), t.g.set(He(t, s), x(a)), (t.h += a.length));
  }
  i.toString = function () {
    if (this.i) return this.i;
    if (!this.g) return '';
    const t = [],
      s = Array.from(this.g.keys());
    for (var a = 0; a < s.length; a++) {
      var l = s[a];
      const w = encodeURIComponent(String(l)),
        T = this.V(l);
      for (l = 0; l < T.length; l++) {
        var _ = w;
        T[l] !== '' && (_ += '=' + encodeURIComponent(String(T[l]))), t.push(_);
      }
    }
    return (this.i = t.join('&'));
  };
  function He(t, s) {
    return (s = String(s)), t.j && (s = s.toLowerCase()), s;
  }
  function So(t, s) {
    s &&
      !t.j &&
      (ye(t),
      (t.i = null),
      t.g.forEach(function (a, l) {
        var _ = l.toLowerCase();
        l != _ && (Ki(this, l), Ji(this, _, a));
      }, t)),
      (t.j = s);
  }
  function ko(t, s) {
    const a = new ht();
    if (g.Image) {
      const l = new Image();
      (l.onload = F(Ie, a, 'TestLoadImage: loaded', !0, s, l)),
        (l.onerror = F(Ie, a, 'TestLoadImage: error', !1, s, l)),
        (l.onabort = F(Ie, a, 'TestLoadImage: abort', !1, s, l)),
        (l.ontimeout = F(Ie, a, 'TestLoadImage: timeout', !1, s, l)),
        g.setTimeout(function () {
          l.ontimeout && l.ontimeout();
        }, 1e4),
        (l.src = t);
    } else s(!1);
  }
  function Co(t, s) {
    const a = new ht(),
      l = new AbortController(),
      _ = setTimeout(() => {
        l.abort(), Ie(a, 'TestPingServer: timeout', !1, s);
      }, 1e4);
    fetch(t, { signal: l.signal })
      .then((w) => {
        clearTimeout(_),
          w.ok
            ? Ie(a, 'TestPingServer: ok', !0, s)
            : Ie(a, 'TestPingServer: server error', !1, s);
      })
      .catch(() => {
        clearTimeout(_), Ie(a, 'TestPingServer: error', !1, s);
      });
  }
  function Ie(t, s, a, l, _) {
    try {
      _ &&
        ((_.onload = null),
        (_.onerror = null),
        (_.onabort = null),
        (_.ontimeout = null)),
        l(a);
    } catch {}
  }
  function Ro() {
    this.g = new co();
  }
  function Po(t, s, a) {
    const l = a || '';
    try {
      $i(t, function (_, w) {
        let T = _;
        E(_) && (T = _n(_)), s.push(l + w + '=' + encodeURIComponent(T));
      });
    } catch (_) {
      throw (s.push(l + 'type=' + encodeURIComponent('_badmap')), _);
    }
  }
  function xt(t) {
    (this.l = t.Ub || null), (this.j = t.eb || !1);
  }
  R(xt, yn),
    (xt.prototype.g = function () {
      return new jt(this.l, this.j);
    }),
    (xt.prototype.i = (function (t) {
      return function () {
        return t;
      };
    })({}));
  function jt(t, s) {
    $.call(this),
      (this.D = t),
      (this.o = s),
      (this.m = void 0),
      (this.status = this.readyState = 0),
      (this.responseType =
        this.responseText =
        this.response =
        this.statusText =
          ''),
      (this.onreadystatechange = null),
      (this.u = new Headers()),
      (this.h = null),
      (this.B = 'GET'),
      (this.A = ''),
      (this.g = !1),
      (this.v = this.j = this.l = null);
  }
  R(jt, $),
    (i = jt.prototype),
    (i.open = function (t, s) {
      if (this.readyState != 0)
        throw (this.abort(), Error('Error reopening a connection'));
      (this.B = t), (this.A = s), (this.readyState = 1), mt(this);
    }),
    (i.send = function (t) {
      if (this.readyState != 1)
        throw (this.abort(), Error('need to call open() first. '));
      this.g = !0;
      const s = {
        headers: this.u,
        method: this.B,
        credentials: this.m,
        cache: void 0,
      };
      t && (s.body = t),
        (this.D || g)
          .fetch(new Request(this.A, s))
          .then(this.Sa.bind(this), this.ga.bind(this));
    }),
    (i.abort = function () {
      (this.response = this.responseText = ''),
        (this.u = new Headers()),
        (this.status = 0),
        this.j && this.j.cancel('Request was aborted.').catch(() => {}),
        1 <= this.readyState &&
          this.g &&
          this.readyState != 4 &&
          ((this.g = !1), gt(this)),
        (this.readyState = 0);
    }),
    (i.Sa = function (t) {
      if (
        this.g &&
        ((this.l = t),
        this.h ||
          ((this.status = this.l.status),
          (this.statusText = this.l.statusText),
          (this.h = t.headers),
          (this.readyState = 2),
          mt(this)),
        this.g && ((this.readyState = 3), mt(this), this.g))
      )
        if (this.responseType === 'arraybuffer')
          t.arrayBuffer().then(this.Qa.bind(this), this.ga.bind(this));
        else if (typeof g.ReadableStream < 'u' && 'body' in t) {
          if (((this.j = t.body.getReader()), this.o)) {
            if (this.responseType)
              throw Error(
                'responseType must be empty for "streamBinaryChunks" mode responses.',
              );
            this.response = [];
          } else
            (this.response = this.responseText = ''),
              (this.v = new TextDecoder());
          Xi(this);
        } else t.text().then(this.Ra.bind(this), this.ga.bind(this));
    });
  function Xi(t) {
    t.j.read().then(t.Pa.bind(t)).catch(t.ga.bind(t));
  }
  (i.Pa = function (t) {
    if (this.g) {
      if (this.o && t.value) this.response.push(t.value);
      else if (!this.o) {
        var s = t.value ? t.value : new Uint8Array(0);
        (s = this.v.decode(s, { stream: !t.done })) &&
          (this.response = this.responseText += s);
      }
      t.done ? gt(this) : mt(this), this.readyState == 3 && Xi(this);
    }
  }),
    (i.Ra = function (t) {
      this.g && ((this.response = this.responseText = t), gt(this));
    }),
    (i.Qa = function (t) {
      this.g && ((this.response = t), gt(this));
    }),
    (i.ga = function () {
      this.g && gt(this);
    });
  function gt(t) {
    (t.readyState = 4), (t.l = null), (t.j = null), (t.v = null), mt(t);
  }
  (i.setRequestHeader = function (t, s) {
    this.u.append(t, s);
  }),
    (i.getResponseHeader = function (t) {
      return (this.h && this.h.get(t.toLowerCase())) || '';
    }),
    (i.getAllResponseHeaders = function () {
      if (!this.h) return '';
      const t = [],
        s = this.h.entries();
      for (var a = s.next(); !a.done; )
        (a = a.value), t.push(a[0] + ': ' + a[1]), (a = s.next());
      return t.join(`\r
`);
    });
  function mt(t) {
    t.onreadystatechange && t.onreadystatechange.call(t);
  }
  Object.defineProperty(jt.prototype, 'withCredentials', {
    get: function () {
      return this.m === 'include';
    },
    set: function (t) {
      this.m = t ? 'include' : 'same-origin';
    },
  });
  function Yi(t) {
    let s = '';
    return (
      Q(t, function (a, l) {
        (s += l),
          (s += ':'),
          (s += a),
          (s += `\r
`);
      }),
      s
    );
  }
  function On(t, s, a) {
    e: {
      for (l in a) {
        var l = !1;
        break e;
      }
      l = !0;
    }
    l ||
      ((a = Yi(a)),
      typeof t == 'string'
        ? a != null && encodeURIComponent(String(a))
        : L(t, s, a));
  }
  function U(t) {
    $.call(this),
      (this.headers = new Map()),
      (this.o = t || null),
      (this.h = !1),
      (this.v = this.g = null),
      (this.D = ''),
      (this.m = 0),
      (this.l = ''),
      (this.j = this.B = this.u = this.A = !1),
      (this.I = null),
      (this.H = ''),
      (this.J = !1);
  }
  R(U, $);
  var Oo = /^https?$/i,
    No = ['POST', 'PUT'];
  (i = U.prototype),
    (i.Ha = function (t) {
      this.J = t;
    }),
    (i.ea = function (t, s, a, l) {
      if (this.g)
        throw Error(
          '[goog.net.XhrIo] Object is active with another request=' +
            this.D +
            '; newUri=' +
            t,
        );
      (s = s ? s.toUpperCase() : 'GET'),
        (this.D = t),
        (this.l = ''),
        (this.m = 0),
        (this.A = !1),
        (this.h = !0),
        (this.g = this.o ? this.o.g() : An.g()),
        (this.v = this.o ? Ci(this.o) : Ci(An)),
        (this.g.onreadystatechange = P(this.Ea, this));
      try {
        (this.B = !0), this.g.open(s, String(t), !0), (this.B = !1);
      } catch (w) {
        Qi(this, w);
        return;
      }
      if (((t = a || ''), (a = new Map(this.headers)), l))
        if (Object.getPrototypeOf(l) === Object.prototype)
          for (var _ in l) a.set(_, l[_]);
        else if (typeof l.keys == 'function' && typeof l.get == 'function')
          for (const w of l.keys()) a.set(w, l.get(w));
        else throw Error('Unknown input type for opt_headers: ' + String(l));
      (l = Array.from(a.keys()).find((w) => w.toLowerCase() == 'content-type')),
        (_ = g.FormData && t instanceof g.FormData),
        !(0 <= Array.prototype.indexOf.call(No, s, void 0)) ||
          l ||
          _ ||
          a.set(
            'Content-Type',
            'application/x-www-form-urlencoded;charset=utf-8',
          );
      for (const [w, T] of a) this.g.setRequestHeader(w, T);
      this.H && (this.g.responseType = this.H),
        'withCredentials' in this.g &&
          this.g.withCredentials !== this.J &&
          (this.g.withCredentials = this.J);
      try {
        tr(this), (this.u = !0), this.g.send(t), (this.u = !1);
      } catch (w) {
        Qi(this, w);
      }
    });
  function Qi(t, s) {
    (t.h = !1),
      t.g && ((t.j = !0), t.g.abort(), (t.j = !1)),
      (t.l = s),
      (t.m = 5),
      Zi(t),
      Ft(t);
  }
  function Zi(t) {
    t.A || ((t.A = !0), J(t, 'complete'), J(t, 'error'));
  }
  (i.abort = function (t) {
    this.g &&
      this.h &&
      ((this.h = !1),
      (this.j = !0),
      this.g.abort(),
      (this.j = !1),
      (this.m = t || 7),
      J(this, 'complete'),
      J(this, 'abort'),
      Ft(this));
  }),
    (i.N = function () {
      this.g &&
        (this.h &&
          ((this.h = !1), (this.j = !0), this.g.abort(), (this.j = !1)),
        Ft(this, !0)),
        U.aa.N.call(this);
    }),
    (i.Ea = function () {
      this.s || (this.B || this.u || this.j ? er(this) : this.bb());
    }),
    (i.bb = function () {
      er(this);
    });
  function er(t) {
    if (t.h && typeof h < 'u' && (!t.v[1] || le(t) != 4 || t.Z() != 2)) {
      if (t.u && le(t) == 4) Ai(t.Ea, 0, t);
      else if ((J(t, 'readystatechange'), le(t) == 4)) {
        t.h = !1;
        try {
          const T = t.Z();
          e: switch (T) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
              var s = !0;
              break e;
            default:
              s = !1;
          }
          var a;
          if (!(a = s)) {
            var l;
            if ((l = T === 0)) {
              var _ = String(t.D).match(zi)[1] || null;
              !_ &&
                g.self &&
                g.self.location &&
                (_ = g.self.location.protocol.slice(0, -1)),
                (l = !Oo.test(_ ? _.toLowerCase() : ''));
            }
            a = l;
          }
          if (a) J(t, 'complete'), J(t, 'success');
          else {
            t.m = 6;
            try {
              var w = 2 < le(t) ? t.g.statusText : '';
            } catch {
              w = '';
            }
            (t.l = w + ' [' + t.Z() + ']'), Zi(t);
          }
        } finally {
          Ft(t);
        }
      }
    }
  }
  function Ft(t, s) {
    if (t.g) {
      tr(t);
      const a = t.g,
        l = t.v[0] ? () => {} : null;
      (t.g = null), (t.v = null), s || J(t, 'ready');
      try {
        a.onreadystatechange = l;
      } catch {}
    }
  }
  function tr(t) {
    t.I && (g.clearTimeout(t.I), (t.I = null));
  }
  i.isActive = function () {
    return !!this.g;
  };
  function le(t) {
    return t.g ? t.g.readyState : 0;
  }
  (i.Z = function () {
    try {
      return 2 < le(this) ? this.g.status : -1;
    } catch {
      return -1;
    }
  }),
    (i.oa = function () {
      try {
        return this.g ? this.g.responseText : '';
      } catch {
        return '';
      }
    }),
    (i.Oa = function (t) {
      if (this.g) {
        var s = this.g.responseText;
        return t && s.indexOf(t) == 0 && (s = s.substring(t.length)), ao(s);
      }
    });
  function nr(t) {
    try {
      if (!t.g) return null;
      if ('response' in t.g) return t.g.response;
      switch (t.H) {
        case '':
        case 'text':
          return t.g.responseText;
        case 'arraybuffer':
          if ('mozResponseArrayBuffer' in t.g)
            return t.g.mozResponseArrayBuffer;
      }
      return null;
    } catch {
      return null;
    }
  }
  function Do(t) {
    const s = {};
    t = ((t.g && 2 <= le(t) && t.g.getAllResponseHeaders()) || '').split(`\r
`);
    for (let l = 0; l < t.length; l++) {
      if (Z(t[l])) continue;
      var a = m(t[l]);
      const _ = a[0];
      if (((a = a[1]), typeof a != 'string')) continue;
      a = a.trim();
      const w = s[_] || [];
      (s[_] = w), w.push(a);
    }
    v(s, function (l) {
      return l.join(', ');
    });
  }
  (i.Ba = function () {
    return this.m;
  }),
    (i.Ka = function () {
      return typeof this.l == 'string' ? this.l : String(this.l);
    });
  function vt(t, s, a) {
    return (a && a.internalChannelParams && a.internalChannelParams[t]) || s;
  }
  function ir(t) {
    (this.Aa = 0),
      (this.i = []),
      (this.j = new ht()),
      (this.ia =
        this.qa =
        this.I =
        this.W =
        this.g =
        this.ya =
        this.D =
        this.H =
        this.m =
        this.S =
        this.o =
          null),
      (this.Ya = this.U = 0),
      (this.Va = vt('failFast', !1, t)),
      (this.F = this.C = this.u = this.s = this.l = null),
      (this.X = !0),
      (this.za = this.T = -1),
      (this.Y = this.v = this.B = 0),
      (this.Ta = vt('baseRetryDelayMs', 5e3, t)),
      (this.cb = vt('retryDelaySeedMs', 1e4, t)),
      (this.Wa = vt('forwardChannelMaxRetries', 2, t)),
      (this.wa = vt('forwardChannelRequestTimeoutMs', 2e4, t)),
      (this.pa = (t && t.xmlHttpFactory) || void 0),
      (this.Xa = (t && t.Tb) || void 0),
      (this.Ca = (t && t.useFetchStreams) || !1),
      (this.L = void 0),
      (this.J = (t && t.supportsCrossDomainXhr) || !1),
      (this.K = ''),
      (this.h = new ji(t && t.concurrentRequestLimit)),
      (this.Da = new Ro()),
      (this.P = (t && t.fastHandshake) || !1),
      (this.O = (t && t.encodeInitMessageHeaders) || !1),
      this.P && this.O && (this.O = !1),
      (this.Ua = (t && t.Rb) || !1),
      t && t.xa && this.j.xa(),
      t && t.forceLongPolling && (this.X = !1),
      (this.ba = (!this.P && this.X && t && t.detectBufferingProxy) || !1),
      (this.ja = void 0),
      t &&
        t.longPollingTimeout &&
        0 < t.longPollingTimeout &&
        (this.ja = t.longPollingTimeout),
      (this.ca = void 0),
      (this.R = 0),
      (this.M = !1),
      (this.ka = this.A = null);
  }
  (i = ir.prototype),
    (i.la = 8),
    (i.G = 1),
    (i.connect = function (t, s, a, l) {
      X(0),
        (this.W = t),
        (this.H = s || {}),
        a && l !== void 0 && ((this.H.OSID = a), (this.H.OAID = l)),
        (this.F = this.X),
        (this.I = dr(this, null, this.W)),
        Vt(this);
    });
  function Nn(t) {
    if ((rr(t), t.G == 3)) {
      var s = t.U++,
        a = ce(t.I);
      if (
        (L(a, 'SID', t.K),
        L(a, 'RID', s),
        L(a, 'TYPE', 'terminate'),
        _t(t, a),
        (s = new _e(t, t.j, s)),
        (s.L = 2),
        (s.v = Ut(ce(a))),
        (a = !1),
        g.navigator && g.navigator.sendBeacon)
      )
        try {
          a = g.navigator.sendBeacon(s.v.toString(), '');
        } catch {}
      !a && g.Image && ((new Image().src = s.v), (a = !0)),
        a || ((s.g = fr(s.j, null)), s.g.ea(s.v)),
        (s.F = Date.now()),
        Dt(s);
    }
    ur(t);
  }
  function Bt(t) {
    t.g && (Ln(t), t.g.cancel(), (t.g = null));
  }
  function rr(t) {
    Bt(t),
      t.u && (g.clearTimeout(t.u), (t.u = null)),
      Ht(t),
      t.h.cancel(),
      t.s && (typeof t.s == 'number' && g.clearTimeout(t.s), (t.s = null));
  }
  function Vt(t) {
    if (!Fi(t.h) && !t.s) {
      t.s = !0;
      var s = t.Ga;
      it || yi(), rt || (it(), (rt = !0)), hn.add(s, t), (t.B = 0);
    }
  }
  function Lo(t, s) {
    return Bi(t.h) >= t.h.j - (t.s ? 1 : 0)
      ? !1
      : t.s
        ? ((t.i = s.D.concat(t.i)), !0)
        : t.G == 1 || t.G == 2 || t.B >= (t.Va ? 0 : t.Wa)
          ? !1
          : ((t.s = lt(P(t.Ga, t, s), hr(t, t.B))), t.B++, !0);
  }
  i.Ga = function (t) {
    if (this.s)
      if (((this.s = null), this.G == 1)) {
        if (!t) {
          (this.U = Math.floor(1e5 * Math.random())), (t = this.U++);
          const _ = new _e(this, this.j, t);
          let w = this.o;
          if (
            (this.S && (w ? ((w = u(w)), p(w, this.S)) : (w = this.S)),
            this.m !== null || this.O || ((_.H = w), (w = null)),
            this.P)
          )
            e: {
              for (var s = 0, a = 0; a < this.i.length; a++) {
                t: {
                  var l = this.i[a];
                  if (
                    '__data__' in l.map &&
                    ((l = l.map.__data__), typeof l == 'string')
                  ) {
                    l = l.length;
                    break t;
                  }
                  l = void 0;
                }
                if (l === void 0) break;
                if (((s += l), 4096 < s)) {
                  s = a;
                  break e;
                }
                if (s === 4096 || a === this.i.length - 1) {
                  s = a + 1;
                  break e;
                }
              }
              s = 1e3;
            }
          else s = 1e3;
          (s = or(this, _, s)),
            (a = ce(this.I)),
            L(a, 'RID', t),
            L(a, 'CVER', 22),
            this.D && L(a, 'X-HTTP-Session-Id', this.D),
            _t(this, a),
            w &&
              (this.O
                ? (s = 'headers=' + encodeURIComponent(String(Yi(w))) + '&' + s)
                : this.m && On(a, this.m, w)),
            Pn(this.h, _),
            this.Ua && L(a, 'TYPE', 'init'),
            this.P
              ? (L(a, '$req', s),
                L(a, 'SID', 'null'),
                (_.T = !0),
                Sn(_, a, null))
              : Sn(_, a, s),
            (this.G = 2);
        }
      } else
        this.G == 3 &&
          (t ? sr(this, t) : this.i.length == 0 || Fi(this.h) || sr(this));
  };
  function sr(t, s) {
    var a;
    s ? (a = s.l) : (a = t.U++);
    const l = ce(t.I);
    L(l, 'SID', t.K),
      L(l, 'RID', a),
      L(l, 'AID', t.T),
      _t(t, l),
      t.m && t.o && On(l, t.m, t.o),
      (a = new _e(t, t.j, a, t.B + 1)),
      t.m === null && (a.H = t.o),
      s && (t.i = s.D.concat(t.i)),
      (s = or(t, a, 1e3)),
      (a.I = Math.round(0.5 * t.wa) + Math.round(0.5 * t.wa * Math.random())),
      Pn(t.h, a),
      Sn(a, l, s);
  }
  function _t(t, s) {
    t.H &&
      Q(t.H, function (a, l) {
        L(s, l, a);
      }),
      t.l &&
        $i({}, function (a, l) {
          L(s, l, a);
        });
  }
  function or(t, s, a) {
    a = Math.min(t.i.length, a);
    var l = t.l ? P(t.l.Na, t.l, t) : null;
    e: {
      var _ = t.i;
      let w = -1;
      for (;;) {
        const T = ['count=' + a];
        w == -1
          ? 0 < a
            ? ((w = _[0].g), T.push('ofs=' + w))
            : (w = 0)
          : T.push('ofs=' + w);
        let D = !0;
        for (let B = 0; B < a; B++) {
          let O = _[B].g;
          const z = _[B].map;
          if (((O -= w), 0 > O)) (w = Math.max(0, _[B].g - 100)), (D = !1);
          else
            try {
              Po(z, T, 'req' + O + '_');
            } catch {
              l && l(z);
            }
        }
        if (D) {
          l = T.join('&');
          break e;
        }
      }
    }
    return (t = t.i.splice(0, a)), (s.D = t), l;
  }
  function ar(t) {
    if (!t.g && !t.u) {
      t.Y = 1;
      var s = t.Fa;
      it || yi(), rt || (it(), (rt = !0)), hn.add(s, t), (t.v = 0);
    }
  }
  function Dn(t) {
    return t.g || t.u || 3 <= t.v
      ? !1
      : (t.Y++, (t.u = lt(P(t.Fa, t), hr(t, t.v))), t.v++, !0);
  }
  (i.Fa = function () {
    if (
      ((this.u = null),
      cr(this),
      this.ba && !(this.M || this.g == null || 0 >= this.R))
    ) {
      var t = 2 * this.R;
      this.j.info('BP detection timer enabled: ' + t),
        (this.A = lt(P(this.ab, this), t));
    }
  }),
    (i.ab = function () {
      this.A &&
        ((this.A = null),
        this.j.info('BP detection timeout reached.'),
        this.j.info('Buffering proxy detected and switch to long-polling!'),
        (this.F = !1),
        (this.M = !0),
        X(10),
        Bt(this),
        cr(this));
    });
  function Ln(t) {
    t.A != null && (g.clearTimeout(t.A), (t.A = null));
  }
  function cr(t) {
    (t.g = new _e(t, t.j, 'rpc', t.Y)),
      t.m === null && (t.g.H = t.o),
      (t.g.O = 0);
    var s = ce(t.qa);
    L(s, 'RID', 'rpc'),
      L(s, 'SID', t.K),
      L(s, 'AID', t.T),
      L(s, 'CI', t.F ? '0' : '1'),
      !t.F && t.ja && L(s, 'TO', t.ja),
      L(s, 'TYPE', 'xmlhttp'),
      _t(t, s),
      t.m && t.o && On(s, t.m, t.o),
      t.L && (t.g.I = t.L);
    var a = t.g;
    (t = t.ia),
      (a.L = 1),
      (a.v = Ut(ce(s))),
      (a.m = null),
      (a.P = !0),
      Mi(a, t);
  }
  i.Za = function () {
    this.C != null && ((this.C = null), Bt(this), Dn(this), X(19));
  };
  function Ht(t) {
    t.C != null && (g.clearTimeout(t.C), (t.C = null));
  }
  function lr(t, s) {
    var a = null;
    if (t.g == s) {
      Ht(t), Ln(t), (t.g = null);
      var l = 2;
    } else if (Rn(t.h, s)) (a = s.D), Vi(t.h, s), (l = 1);
    else return;
    if (t.G != 0) {
      if (s.o)
        if (l == 1) {
          (a = s.m ? s.m.length : 0), (s = Date.now() - s.F);
          var _ = t.B;
          (l = En()), J(l, new Ni(l, a)), Vt(t);
        } else ar(t);
      else if (
        ((_ = s.s),
        _ == 3 ||
          (_ == 0 && 0 < s.X) ||
          !((l == 1 && Lo(t, s)) || (l == 2 && Dn(t))))
      )
        switch ((a && 0 < a.length && ((s = t.h), (s.i = s.i.concat(a))), _)) {
          case 1:
            De(t, 5);
            break;
          case 4:
            De(t, 10);
            break;
          case 3:
            De(t, 6);
            break;
          default:
            De(t, 2);
        }
    }
  }
  function hr(t, s) {
    let a = t.Ta + Math.floor(Math.random() * t.cb);
    return t.isActive() || (a *= 2), a * s;
  }
  function De(t, s) {
    if ((t.j.info('Error code ' + s), s == 2)) {
      var a = P(t.fb, t),
        l = t.Xa;
      const _ = !l;
      (l = new Ne(l || '//www.google.com/images/cleardot.gif')),
        (g.location && g.location.protocol == 'http') || Lt(l, 'https'),
        Ut(l),
        _ ? ko(l.toString(), a) : Co(l.toString(), a);
    } else X(2);
    (t.G = 0), t.l && t.l.sa(s), ur(t), rr(t);
  }
  i.fb = function (t) {
    t
      ? (this.j.info('Successfully pinged google.com'), X(2))
      : (this.j.info('Failed to ping google.com'), X(1));
  };
  function ur(t) {
    if (((t.G = 0), (t.ka = []), t.l)) {
      const s = Hi(t.h);
      (s.length != 0 || t.i.length != 0) &&
        (M(t.ka, s),
        M(t.ka, t.i),
        (t.h.i.length = 0),
        x(t.i),
        (t.i.length = 0)),
        t.l.ra();
    }
  }
  function dr(t, s, a) {
    var l = a instanceof Ne ? ce(a) : new Ne(a);
    if (l.g != '') s && (l.g = s + '.' + l.g), Mt(l, l.s);
    else {
      var _ = g.location;
      (l = _.protocol),
        (s = s ? s + '.' + _.hostname : _.hostname),
        (_ = +_.port);
      var w = new Ne(null);
      l && Lt(w, l), s && (w.g = s), _ && Mt(w, _), a && (w.l = a), (l = w);
    }
    return (
      (a = t.D),
      (s = t.ya),
      a && s && L(l, a, s),
      L(l, 'VER', t.la),
      _t(t, l),
      l
    );
  }
  function fr(t, s, a) {
    if (s && !t.J)
      throw Error("Can't create secondary domain capable XhrIo object.");
    return (
      (s = t.Ca && !t.pa ? new U(new xt({ eb: a })) : new U(t.pa)), s.Ha(t.J), s
    );
  }
  i.isActive = function () {
    return !!this.l && this.l.isActive(this);
  };
  function pr() {}
  (i = pr.prototype),
    (i.ua = function () {}),
    (i.ta = function () {}),
    (i.sa = function () {}),
    (i.ra = function () {}),
    (i.isActive = function () {
      return !0;
    }),
    (i.Na = function () {});
  function te(t, s) {
    $.call(this),
      (this.g = new ir(s)),
      (this.l = t),
      (this.h = (s && s.messageUrlParams) || null),
      (t = (s && s.messageHeaders) || null),
      s &&
        s.clientProtocolHeaderRequired &&
        (t
          ? (t['X-Client-Protocol'] = 'webchannel')
          : (t = { 'X-Client-Protocol': 'webchannel' })),
      (this.g.o = t),
      (t = (s && s.initMessageHeaders) || null),
      s &&
        s.messageContentType &&
        (t
          ? (t['X-WebChannel-Content-Type'] = s.messageContentType)
          : (t = { 'X-WebChannel-Content-Type': s.messageContentType })),
      s &&
        s.va &&
        (t
          ? (t['X-WebChannel-Client-Profile'] = s.va)
          : (t = { 'X-WebChannel-Client-Profile': s.va })),
      (this.g.S = t),
      (t = s && s.Sb) && !Z(t) && (this.g.m = t),
      (this.v = (s && s.supportsCrossDomainXhr) || !1),
      (this.u = (s && s.sendRawJson) || !1),
      (s = s && s.httpSessionIdParam) &&
        !Z(s) &&
        ((this.g.D = s),
        (t = this.h),
        t !== null && s in t && ((t = this.h), s in t && delete t[s])),
      (this.j = new $e(this));
  }
  R(te, $),
    (te.prototype.m = function () {
      (this.g.l = this.j),
        this.v && (this.g.J = !0),
        this.g.connect(this.l, this.h || void 0);
    }),
    (te.prototype.close = function () {
      Nn(this.g);
    }),
    (te.prototype.o = function (t) {
      var s = this.g;
      if (typeof t == 'string') {
        var a = {};
        (a.__data__ = t), (t = a);
      } else this.u && ((a = {}), (a.__data__ = _n(t)), (t = a));
      s.i.push(new vo(s.Ya++, t)), s.G == 3 && Vt(s);
    }),
    (te.prototype.N = function () {
      (this.g.l = null),
        delete this.j,
        Nn(this.g),
        delete this.g,
        te.aa.N.call(this);
    });
  function gr(t) {
    In.call(this),
      t.__headers__ &&
        ((this.headers = t.__headers__),
        (this.statusCode = t.__status__),
        delete t.__headers__,
        delete t.__status__);
    var s = t.__sm__;
    if (s) {
      e: {
        for (const a in s) {
          t = a;
          break e;
        }
        t = void 0;
      }
      (this.i = t) &&
        ((t = this.i), (s = s !== null && t in s ? s[t] : void 0)),
        (this.data = s);
    } else this.data = t;
  }
  R(gr, In);
  function mr() {
    wn.call(this), (this.status = 1);
  }
  R(mr, wn);
  function $e(t) {
    this.g = t;
  }
  R($e, pr),
    ($e.prototype.ua = function () {
      J(this.g, 'a');
    }),
    ($e.prototype.ta = function (t) {
      J(this.g, new gr(t));
    }),
    ($e.prototype.sa = function (t) {
      J(this.g, new mr());
    }),
    ($e.prototype.ra = function () {
      J(this.g, 'b');
    }),
    (te.prototype.send = te.prototype.o),
    (te.prototype.open = te.prototype.m),
    (te.prototype.close = te.prototype.close),
    (Tn.NO_ERROR = 0),
    (Tn.TIMEOUT = 8),
    (Tn.HTTP_ERROR = 6),
    (go.COMPLETE = 'complete'),
    (lo.EventType = at),
    (at.OPEN = 'a'),
    (at.CLOSE = 'b'),
    (at.ERROR = 'c'),
    (at.MESSAGE = 'd'),
    ($.prototype.listen = $.prototype.K),
    (U.prototype.listenOnce = U.prototype.L),
    (U.prototype.getLastError = U.prototype.Ka),
    (U.prototype.getLastErrorCode = U.prototype.Ba),
    (U.prototype.getStatus = U.prototype.Z),
    (U.prototype.getResponseJson = U.prototype.Oa),
    (U.prototype.getResponseText = U.prototype.oa),
    (U.prototype.send = U.prototype.ea),
    (U.prototype.setWithCredentials = U.prototype.Ha);
}).apply(
  typeof Kt < 'u'
    ? Kt
    : typeof self < 'u'
      ? self
      : typeof window < 'u'
        ? window
        : {},
);
const qr = '@firebase/firestore';
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class G {
  constructor(e) {
    this.uid = e;
  }
  isAuthenticated() {
    return this.uid != null;
  }
  toKey() {
    return this.isAuthenticated() ? 'uid:' + this.uid : 'anonymous-user';
  }
  isEqual(e) {
    return e.uid === this.uid;
  }
}
(G.UNAUTHENTICATED = new G(null)),
  (G.GOOGLE_CREDENTIALS = new G('google-credentials-uid')),
  (G.FIRST_PARTY = new G('first-party-uid')),
  (G.MOCK_USER = new G('mock-user'));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let kt = '10.13.0';
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Ze = new ni('@firebase/firestore');
function ee(i, ...e) {
  if (Ze.logLevel <= N.DEBUG) {
    const n = e.map(mi);
    Ze.debug(`Firestore (${kt}): ${i}`, ...n);
  }
}
function gi(i, ...e) {
  if (Ze.logLevel <= N.ERROR) {
    const n = e.map(mi);
    Ze.error(`Firestore (${kt}): ${i}`, ...n);
  }
}
function Dh(i, ...e) {
  if (Ze.logLevel <= N.WARN) {
    const n = e.map(mi);
    Ze.warn(`Firestore (${kt}): ${i}`, ...n);
  }
}
function mi(i) {
  if (typeof i == 'string') return i;
  try {
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ return (function (n) {
      return JSON.stringify(n);
    })(i);
  } catch {
    return i;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function vi(i = 'Unexpected state') {
  const e = `FIRESTORE (${kt}) INTERNAL ASSERTION FAILED: ` + i;
  throw (gi(e), new Error(e));
}
function Zn(i, e) {
  i || vi();
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const K = {
  OK: 'ok',
  CANCELLED: 'cancelled',
  UNKNOWN: 'unknown',
  INVALID_ARGUMENT: 'invalid-argument',
  DEADLINE_EXCEEDED: 'deadline-exceeded',
  NOT_FOUND: 'not-found',
  ALREADY_EXISTS: 'already-exists',
  PERMISSION_DENIED: 'permission-denied',
  UNAUTHENTICATED: 'unauthenticated',
  RESOURCE_EXHAUSTED: 'resource-exhausted',
  FAILED_PRECONDITION: 'failed-precondition',
  ABORTED: 'aborted',
  OUT_OF_RANGE: 'out-of-range',
  UNIMPLEMENTED: 'unimplemented',
  INTERNAL: 'internal',
  UNAVAILABLE: 'unavailable',
  DATA_LOSS: 'data-loss',
};
class q extends me {
  constructor(e, n) {
    super(e, n),
      (this.code = e),
      (this.message = n),
      (this.toString = () =>
        `${this.name}: [code=${this.code}]: ${this.message}`);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Xe {
  constructor() {
    this.promise = new Promise((e, n) => {
      (this.resolve = e), (this.reject = n);
    });
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Gs {
  constructor(e, n) {
    (this.user = n),
      (this.type = 'OAuth'),
      (this.headers = new Map()),
      this.headers.set('Authorization', `Bearer ${e}`);
  }
}
class Lh {
  getToken() {
    return Promise.resolve(null);
  }
  invalidateToken() {}
  start(e, n) {
    e.enqueueRetryable(() => n(G.UNAUTHENTICATED));
  }
  shutdown() {}
}
class Mh {
  constructor(e) {
    (this.token = e), (this.changeListener = null);
  }
  getToken() {
    return Promise.resolve(this.token);
  }
  invalidateToken() {}
  start(e, n) {
    (this.changeListener = n), e.enqueueRetryable(() => n(this.token.user));
  }
  shutdown() {
    this.changeListener = null;
  }
}
class Uh {
  constructor(e) {
    (this.t = e),
      (this.currentUser = G.UNAUTHENTICATED),
      (this.i = 0),
      (this.forceRefresh = !1),
      (this.auth = null);
  }
  start(e, n) {
    let r = this.i;
    const o = (I) => (this.i !== r ? ((r = this.i), n(I)) : Promise.resolve());
    let c = new Xe();
    this.o = () => {
      this.i++,
        (this.currentUser = this.u()),
        c.resolve(),
        (c = new Xe()),
        e.enqueueRetryable(() => o(this.currentUser));
    };
    const h = () => {
        const I = c;
        e.enqueueRetryable(async () => {
          await I.promise, await o(this.currentUser);
        });
      },
      g = (I) => {
        ee('FirebaseAuthCredentialsProvider', 'Auth detected'),
          (this.auth = I),
          this.auth.addAuthTokenListener(this.o),
          h();
      };
    this.t.onInit((I) => g(I)),
      setTimeout(() => {
        if (!this.auth) {
          const I = this.t.getImmediate({ optional: !0 });
          I
            ? g(I)
            : (ee('FirebaseAuthCredentialsProvider', 'Auth not yet detected'),
              c.resolve(),
              (c = new Xe()));
        }
      }, 0),
      h();
  }
  getToken() {
    const e = this.i,
      n = this.forceRefresh;
    return (
      (this.forceRefresh = !1),
      this.auth
        ? this.auth
            .getToken(n)
            .then((r) =>
              this.i !== e
                ? (ee(
                    'FirebaseAuthCredentialsProvider',
                    'getToken aborted due to token change.',
                  ),
                  this.getToken())
                : r
                  ? (Zn(typeof r.accessToken == 'string'),
                    new Gs(r.accessToken, this.currentUser))
                  : null,
            )
        : Promise.resolve(null)
    );
  }
  invalidateToken() {
    this.forceRefresh = !0;
  }
  shutdown() {
    this.auth && this.auth.removeAuthTokenListener(this.o);
  }
  u() {
    const e = this.auth && this.auth.getUid();
    return Zn(e === null || typeof e == 'string'), new G(e);
  }
}
class xh {
  constructor(e, n, r) {
    (this.l = e),
      (this.h = n),
      (this.P = r),
      (this.type = 'FirstParty'),
      (this.user = G.FIRST_PARTY),
      (this.I = new Map());
  }
  T() {
    return this.P ? this.P() : null;
  }
  get headers() {
    this.I.set('X-Goog-AuthUser', this.l);
    const e = this.T();
    return (
      e && this.I.set('Authorization', e),
      this.h && this.I.set('X-Goog-Iam-Authorization-Token', this.h),
      this.I
    );
  }
}
class jh {
  constructor(e, n, r) {
    (this.l = e), (this.h = n), (this.P = r);
  }
  getToken() {
    return Promise.resolve(new xh(this.l, this.h, this.P));
  }
  start(e, n) {
    e.enqueueRetryable(() => n(G.FIRST_PARTY));
  }
  shutdown() {}
  invalidateToken() {}
}
class Fh {
  constructor(e) {
    (this.value = e),
      (this.type = 'AppCheck'),
      (this.headers = new Map()),
      e && e.length > 0 && this.headers.set('x-firebase-appcheck', this.value);
  }
}
class Bh {
  constructor(e) {
    (this.A = e),
      (this.forceRefresh = !1),
      (this.appCheck = null),
      (this.R = null);
  }
  start(e, n) {
    const r = (c) => {
      c.error != null &&
        ee(
          'FirebaseAppCheckTokenProvider',
          `Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`,
        );
      const h = c.token !== this.R;
      return (
        (this.R = c.token),
        ee(
          'FirebaseAppCheckTokenProvider',
          `Received ${h ? 'new' : 'existing'} token.`,
        ),
        h ? n(c.token) : Promise.resolve()
      );
    };
    this.o = (c) => {
      e.enqueueRetryable(() => r(c));
    };
    const o = (c) => {
      ee('FirebaseAppCheckTokenProvider', 'AppCheck detected'),
        (this.appCheck = c),
        this.appCheck.addTokenListener(this.o);
    };
    this.A.onInit((c) => o(c)),
      setTimeout(() => {
        if (!this.appCheck) {
          const c = this.A.getImmediate({ optional: !0 });
          c
            ? o(c)
            : ee('FirebaseAppCheckTokenProvider', 'AppCheck not yet detected');
        }
      }, 0);
  }
  getToken() {
    const e = this.forceRefresh;
    return (
      (this.forceRefresh = !1),
      this.appCheck
        ? this.appCheck
            .getToken(e)
            .then((n) =>
              n
                ? (Zn(typeof n.token == 'string'),
                  (this.R = n.token),
                  new Fh(n.token))
                : null,
            )
        : Promise.resolve(null)
    );
  }
  invalidateToken() {
    this.forceRefresh = !0;
  }
  shutdown() {
    this.appCheck && this.appCheck.removeTokenListener(this.o);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Vh(i) {
  const e = typeof self < 'u' && (self.crypto || self.msCrypto),
    n = new Uint8Array(i);
  if (e && typeof e.getRandomValues == 'function') e.getRandomValues(n);
  else for (let r = 0; r < i; r++) n[r] = Math.floor(256 * Math.random());
  return n;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Hh {
  static newId() {
    const e = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
      n = Math.floor(256 / e.length) * e.length;
    let r = '';
    for (; r.length < 20; ) {
      const o = Vh(40);
      for (let c = 0; c < o.length; ++c)
        r.length < 20 && o[c] < n && (r += e.charAt(o[c] % e.length));
    }
    return r;
  }
}
function Ks(i) {
  return i.name === 'IndexedDbTransactionError';
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class $h {
  constructor(e, n, r, o, c, h, g, I, E) {
    (this.databaseId = e),
      (this.appId = n),
      (this.persistenceKey = r),
      (this.host = o),
      (this.ssl = c),
      (this.forceLongPolling = h),
      (this.autoDetectLongPolling = g),
      (this.longPollingOptions = I),
      (this.useFetchStreams = E);
  }
}
class an {
  constructor(e, n) {
    (this.projectId = e), (this.database = n || '(default)');
  }
  static empty() {
    return new an('', '');
  }
  get isDefaultDatabase() {
    return this.database === '(default)';
  }
  isEqual(e) {
    return (
      e instanceof an &&
      e.projectId === this.projectId &&
      e.database === this.database
    );
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Jr, C;
((C = Jr || (Jr = {}))[(C.OK = 0)] = 'OK'),
  (C[(C.CANCELLED = 1)] = 'CANCELLED'),
  (C[(C.UNKNOWN = 2)] = 'UNKNOWN'),
  (C[(C.INVALID_ARGUMENT = 3)] = 'INVALID_ARGUMENT'),
  (C[(C.DEADLINE_EXCEEDED = 4)] = 'DEADLINE_EXCEEDED'),
  (C[(C.NOT_FOUND = 5)] = 'NOT_FOUND'),
  (C[(C.ALREADY_EXISTS = 6)] = 'ALREADY_EXISTS'),
  (C[(C.PERMISSION_DENIED = 7)] = 'PERMISSION_DENIED'),
  (C[(C.UNAUTHENTICATED = 16)] = 'UNAUTHENTICATED'),
  (C[(C.RESOURCE_EXHAUSTED = 8)] = 'RESOURCE_EXHAUSTED'),
  (C[(C.FAILED_PRECONDITION = 9)] = 'FAILED_PRECONDITION'),
  (C[(C.ABORTED = 10)] = 'ABORTED'),
  (C[(C.OUT_OF_RANGE = 11)] = 'OUT_OF_RANGE'),
  (C[(C.UNIMPLEMENTED = 12)] = 'UNIMPLEMENTED'),
  (C[(C.INTERNAL = 13)] = 'INTERNAL'),
  (C[(C.UNAVAILABLE = 14)] = 'UNAVAILABLE'),
  (C[(C.DATA_LOSS = 15)] = 'DATA_LOSS');
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ new Ws([4294967295, 4294967295], 0);
function zn() {
  return typeof document < 'u' ? document : null;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class zh {
  constructor(e, n, r = 1e3, o = 1.5, c = 6e4) {
    (this.ui = e),
      (this.timerId = n),
      (this.ko = r),
      (this.qo = o),
      (this.Qo = c),
      (this.Ko = 0),
      (this.$o = null),
      (this.Uo = Date.now()),
      this.reset();
  }
  reset() {
    this.Ko = 0;
  }
  Wo() {
    this.Ko = this.Qo;
  }
  Go(e) {
    this.cancel();
    const n = Math.floor(this.Ko + this.zo()),
      r = Math.max(0, Date.now() - this.Uo),
      o = Math.max(0, n - r);
    o > 0 &&
      ee(
        'ExponentialBackoff',
        `Backing off for ${o} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`,
      ),
      (this.$o = this.ui.enqueueAfterDelay(
        this.timerId,
        o,
        () => ((this.Uo = Date.now()), e()),
      )),
      (this.Ko *= this.qo),
      this.Ko < this.ko && (this.Ko = this.ko),
      this.Ko > this.Qo && (this.Ko = this.Qo);
  }
  jo() {
    this.$o !== null && (this.$o.skipDelay(), (this.$o = null));
  }
  cancel() {
    this.$o !== null && (this.$o.cancel(), (this.$o = null));
  }
  zo() {
    return (Math.random() - 0.5) * this.Ko;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class _i {
  constructor(e, n, r, o, c) {
    (this.asyncQueue = e),
      (this.timerId = n),
      (this.targetTimeMs = r),
      (this.op = o),
      (this.removalCallback = c),
      (this.deferred = new Xe()),
      (this.then = this.deferred.promise.then.bind(this.deferred.promise)),
      this.deferred.promise.catch((h) => {});
  }
  get promise() {
    return this.deferred.promise;
  }
  static createAndSchedule(e, n, r, o, c) {
    const h = Date.now() + r,
      g = new _i(e, n, h, o, c);
    return g.start(r), g;
  }
  start(e) {
    this.timerHandle = setTimeout(() => this.handleDelayElapsed(), e);
  }
  skipDelay() {
    return this.handleDelayElapsed();
  }
  cancel(e) {
    this.timerHandle !== null &&
      (this.clearTimeout(),
      this.deferred.reject(
        new q(K.CANCELLED, 'Operation cancelled' + (e ? ': ' + e : '')),
      ));
  }
  handleDelayElapsed() {
    this.asyncQueue.enqueueAndForget(() =>
      this.timerHandle !== null
        ? (this.clearTimeout(), this.op().then((e) => this.deferred.resolve(e)))
        : Promise.resolve(),
    );
  }
  clearTimeout() {
    this.timerHandle !== null &&
      (this.removalCallback(this),
      clearTimeout(this.timerHandle),
      (this.timerHandle = null));
  }
}
function Wh(i, e) {
  if ((gi('AsyncQueue', `${e}: ${i}`), Ks(i)))
    return new q(K.UNAVAILABLE, `${e}: ${i}`);
  throw i;
}
var Xr, Yr;
((Yr = Xr || (Xr = {})).ea = 'default'), (Yr.Cache = 'cache');
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Gh {
  constructor(e, n, r, o) {
    (this.authCredentials = e),
      (this.appCheckCredentials = n),
      (this.asyncQueue = r),
      (this.databaseInfo = o),
      (this.user = G.UNAUTHENTICATED),
      (this.clientId = Hh.newId()),
      (this.authCredentialListener = () => Promise.resolve()),
      (this.appCheckCredentialListener = () => Promise.resolve()),
      this.authCredentials.start(r, async (c) => {
        ee('FirestoreClient', 'Received user=', c.uid),
          await this.authCredentialListener(c),
          (this.user = c);
      }),
      this.appCheckCredentials.start(
        r,
        (c) => (
          ee('FirestoreClient', 'Received new app check token=', c),
          this.appCheckCredentialListener(c, this.user)
        ),
      );
  }
  get configuration() {
    return {
      asyncQueue: this.asyncQueue,
      databaseInfo: this.databaseInfo,
      clientId: this.clientId,
      authCredentials: this.authCredentials,
      appCheckCredentials: this.appCheckCredentials,
      initialUser: this.user,
      maxConcurrentLimboResolutions: 100,
    };
  }
  setCredentialChangeListener(e) {
    this.authCredentialListener = e;
  }
  setAppCheckTokenChangeListener(e) {
    this.appCheckCredentialListener = e;
  }
  verifyNotTerminated() {
    if (this.asyncQueue.isShuttingDown)
      throw new q(
        K.FAILED_PRECONDITION,
        'The client has already been terminated.',
      );
  }
  terminate() {
    this.asyncQueue.enterRestrictedMode();
    const e = new Xe();
    return (
      this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async () => {
        try {
          this._onlineComponents && (await this._onlineComponents.terminate()),
            this._offlineComponents &&
              (await this._offlineComponents.terminate()),
            this.authCredentials.shutdown(),
            this.appCheckCredentials.shutdown(),
            e.resolve();
        } catch (n) {
          const r = Wh(n, 'Failed to shutdown persistence');
          e.reject(r);
        }
      }),
      e.promise
    );
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function qs(i) {
  const e = {};
  return (
    i.timeoutSeconds !== void 0 && (e.timeoutSeconds = i.timeoutSeconds), e
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Qr = new Map();
function Kh(i, e, n, r) {
  if (e === !0 && r === !0)
    throw new q(K.INVALID_ARGUMENT, `${i} and ${n} cannot be used together.`);
}
function qh(i) {
  if (i === void 0) return 'undefined';
  if (i === null) return 'null';
  if (typeof i == 'string')
    return i.length > 20 && (i = `${i.substring(0, 20)}...`), JSON.stringify(i);
  if (typeof i == 'number' || typeof i == 'boolean') return '' + i;
  if (typeof i == 'object') {
    if (i instanceof Array) return 'an array';
    {
      const e = (function (r) {
        return r.constructor ? r.constructor.name : null;
      })(i);
      return e ? `a custom ${e} object` : 'an object';
    }
  }
  return typeof i == 'function' ? 'a function' : vi();
}
function Jh(i, e) {
  if (('_delegate' in i && (i = i._delegate), !(i instanceof e))) {
    if (e.name === i.constructor.name)
      throw new q(
        K.INVALID_ARGUMENT,
        'Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?',
      );
    {
      const n = qh(i);
      throw new q(
        K.INVALID_ARGUMENT,
        `Expected type '${e.name}', but it was: ${n}`,
      );
    }
  }
  return i;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Zr {
  constructor(e) {
    var n, r;
    if (e.host === void 0) {
      if (e.ssl !== void 0)
        throw new q(
          K.INVALID_ARGUMENT,
          "Can't provide ssl option if host option is not set",
        );
      (this.host = 'firestore.googleapis.com'), (this.ssl = !0);
    } else
      (this.host = e.host),
        (this.ssl = (n = e.ssl) === null || n === void 0 || n);
    if (
      ((this.credentials = e.credentials),
      (this.ignoreUndefinedProperties = !!e.ignoreUndefinedProperties),
      (this.localCache = e.localCache),
      e.cacheSizeBytes === void 0)
    )
      this.cacheSizeBytes = 41943040;
    else {
      if (e.cacheSizeBytes !== -1 && e.cacheSizeBytes < 1048576)
        throw new q(
          K.INVALID_ARGUMENT,
          'cacheSizeBytes must be at least 1048576',
        );
      this.cacheSizeBytes = e.cacheSizeBytes;
    }
    Kh(
      'experimentalForceLongPolling',
      e.experimentalForceLongPolling,
      'experimentalAutoDetectLongPolling',
      e.experimentalAutoDetectLongPolling,
    ),
      (this.experimentalForceLongPolling = !!e.experimentalForceLongPolling),
      this.experimentalForceLongPolling
        ? (this.experimentalAutoDetectLongPolling = !1)
        : e.experimentalAutoDetectLongPolling === void 0
          ? (this.experimentalAutoDetectLongPolling = !0)
          : (this.experimentalAutoDetectLongPolling =
              !!e.experimentalAutoDetectLongPolling),
      (this.experimentalLongPollingOptions = qs(
        (r = e.experimentalLongPollingOptions) !== null && r !== void 0
          ? r
          : {},
      )),
      (function (c) {
        if (c.timeoutSeconds !== void 0) {
          if (isNaN(c.timeoutSeconds))
            throw new q(
              K.INVALID_ARGUMENT,
              `invalid long polling timeout: ${c.timeoutSeconds} (must not be NaN)`,
            );
          if (c.timeoutSeconds < 5)
            throw new q(
              K.INVALID_ARGUMENT,
              `invalid long polling timeout: ${c.timeoutSeconds} (minimum allowed value is 5)`,
            );
          if (c.timeoutSeconds > 30)
            throw new q(
              K.INVALID_ARGUMENT,
              `invalid long polling timeout: ${c.timeoutSeconds} (maximum allowed value is 30)`,
            );
        }
      })(this.experimentalLongPollingOptions),
      (this.useFetchStreams = !!e.useFetchStreams);
  }
  isEqual(e) {
    return (
      this.host === e.host &&
      this.ssl === e.ssl &&
      this.credentials === e.credentials &&
      this.cacheSizeBytes === e.cacheSizeBytes &&
      this.experimentalForceLongPolling === e.experimentalForceLongPolling &&
      this.experimentalAutoDetectLongPolling ===
        e.experimentalAutoDetectLongPolling &&
      (function (r, o) {
        return r.timeoutSeconds === o.timeoutSeconds;
      })(
        this.experimentalLongPollingOptions,
        e.experimentalLongPollingOptions,
      ) &&
      this.ignoreUndefinedProperties === e.ignoreUndefinedProperties &&
      this.useFetchStreams === e.useFetchStreams
    );
  }
}
class Js {
  constructor(e, n, r, o) {
    (this._authCredentials = e),
      (this._appCheckCredentials = n),
      (this._databaseId = r),
      (this._app = o),
      (this.type = 'firestore-lite'),
      (this._persistenceKey = '(lite)'),
      (this._settings = new Zr({})),
      (this._settingsFrozen = !1);
  }
  get app() {
    if (!this._app)
      throw new q(
        K.FAILED_PRECONDITION,
        "Firestore was not initialized using the Firebase SDK. 'app' is not available",
      );
    return this._app;
  }
  get _initialized() {
    return this._settingsFrozen;
  }
  get _terminated() {
    return this._terminateTask !== void 0;
  }
  _setSettings(e) {
    if (this._settingsFrozen)
      throw new q(
        K.FAILED_PRECONDITION,
        'Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.',
      );
    (this._settings = new Zr(e)),
      e.credentials !== void 0 &&
        (this._authCredentials = (function (r) {
          if (!r) return new Lh();
          switch (r.type) {
            case 'firstParty':
              return new jh(
                r.sessionIndex || '0',
                r.iamToken || null,
                r.authTokenFactory || null,
              );
            case 'provider':
              return r.client;
            default:
              throw new q(
                K.INVALID_ARGUMENT,
                'makeAuthCredentialsProvider failed due to invalid credential type',
              );
          }
        })(e.credentials));
  }
  _getSettings() {
    return this._settings;
  }
  _freezeSettings() {
    return (this._settingsFrozen = !0), this._settings;
  }
  _delete() {
    return (
      this._terminateTask || (this._terminateTask = this._terminate()),
      this._terminateTask
    );
  }
  toJSON() {
    return {
      app: this._app,
      databaseId: this._databaseId,
      settings: this._settings,
    };
  }
  _terminate() {
    return (
      (function (n) {
        const r = Qr.get(n);
        r &&
          (ee('ComponentProvider', 'Removing Datastore'),
          Qr.delete(n),
          r.terminate());
      })(this),
      Promise.resolve()
    );
  }
}
function Xh(i, e, n, r = {}) {
  var o;
  const c = (i = Jh(i, Js))._getSettings(),
    h = `${e}:${n}`;
  if (
    (c.host !== 'firestore.googleapis.com' &&
      c.host !== h &&
      Dh(
        'Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.',
      ),
    i._setSettings(Object.assign(Object.assign({}, c), { host: h, ssl: !1 })),
    r.mockUserToken)
  ) {
    let g, I;
    if (typeof r.mockUserToken == 'string')
      (g = r.mockUserToken), (I = G.MOCK_USER);
    else {
      g = ra(
        r.mockUserToken,
        (o = i._app) === null || o === void 0 ? void 0 : o.options.projectId,
      );
      const E = r.mockUserToken.sub || r.mockUserToken.user_id;
      if (!E)
        throw new q(
          K.INVALID_ARGUMENT,
          "mockUserToken must contain 'sub' or 'user_id' field!",
        );
      I = new G(E);
    }
    i._authCredentials = new Mh(new Gs(g, I));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Yh {
  constructor() {
    (this.au = Promise.resolve()),
      (this.uu = []),
      (this.cu = !1),
      (this.lu = []),
      (this.hu = null),
      (this.Pu = !1),
      (this.Iu = !1),
      (this.Tu = []),
      (this.t_ = new zh(this, 'async_queue_retry')),
      (this.Eu = () => {
        const n = zn();
        n &&
          ee('AsyncQueue', 'Visibility state changed to ' + n.visibilityState),
          this.t_.jo();
      });
    const e = zn();
    e &&
      typeof e.addEventListener == 'function' &&
      e.addEventListener('visibilitychange', this.Eu);
  }
  get isShuttingDown() {
    return this.cu;
  }
  enqueueAndForget(e) {
    this.enqueue(e);
  }
  enqueueAndForgetEvenWhileRestricted(e) {
    this.du(), this.Au(e);
  }
  enterRestrictedMode(e) {
    if (!this.cu) {
      (this.cu = !0), (this.Iu = e || !1);
      const n = zn();
      n &&
        typeof n.removeEventListener == 'function' &&
        n.removeEventListener('visibilitychange', this.Eu);
    }
  }
  enqueue(e) {
    if ((this.du(), this.cu)) return new Promise(() => {});
    const n = new Xe();
    return this.Au(() =>
      this.cu && this.Iu
        ? Promise.resolve()
        : (e().then(n.resolve, n.reject), n.promise),
    ).then(() => n.promise);
  }
  enqueueRetryable(e) {
    this.enqueueAndForget(() => (this.uu.push(e), this.Ru()));
  }
  async Ru() {
    if (this.uu.length !== 0) {
      try {
        await this.uu[0](), this.uu.shift(), this.t_.reset();
      } catch (e) {
        if (!Ks(e)) throw e;
        ee('AsyncQueue', 'Operation failed with retryable error: ' + e);
      }
      this.uu.length > 0 && this.t_.Go(() => this.Ru());
    }
  }
  Au(e) {
    const n = this.au.then(
      () => (
        (this.Pu = !0),
        e()
          .catch((r) => {
            (this.hu = r), (this.Pu = !1);
            const o = (function (h) {
              let g = h.message || '';
              return (
                h.stack &&
                  (g = h.stack.includes(h.message)
                    ? h.stack
                    : h.message +
                      `
` +
                      h.stack),
                g
              );
            })(r);
            throw (gi('INTERNAL UNHANDLED ERROR: ', o), r);
          })
          .then((r) => ((this.Pu = !1), r))
      ),
    );
    return (this.au = n), n;
  }
  enqueueAfterDelay(e, n, r) {
    this.du(), this.Tu.indexOf(e) > -1 && (n = 0);
    const o = _i.createAndSchedule(this, e, n, r, (c) => this.Vu(c));
    return this.lu.push(o), o;
  }
  du() {
    this.hu && vi();
  }
  verifyOperationInProgress() {}
  async mu() {
    let e;
    do (e = this.au), await e;
    while (e !== this.au);
  }
  fu(e) {
    for (const n of this.lu) if (n.timerId === e) return !0;
    return !1;
  }
  gu(e) {
    return this.mu().then(() => {
      this.lu.sort((n, r) => n.targetTimeMs - r.targetTimeMs);
      for (const n of this.lu)
        if ((n.skipDelay(), e !== 'all' && n.timerId === e)) break;
      return this.mu();
    });
  }
  pu(e) {
    this.Tu.push(e);
  }
  Vu(e) {
    const n = this.lu.indexOf(e);
    this.lu.splice(n, 1);
  }
}
class Qh extends Js {
  constructor(e, n, r, o) {
    super(e, n, r, o),
      (this.type = 'firestore'),
      (this._queue = (function () {
        return new Yh();
      })()),
      (this._persistenceKey = (o == null ? void 0 : o.name) || '[DEFAULT]');
  }
  _terminate() {
    return this._firestoreClient || eu(this), this._firestoreClient.terminate();
  }
}
function Zh(i, e) {
  const n = typeof i == 'object' ? i : ls(),
    r = typeof i == 'string' ? i : '(default)',
    o = ri(n, 'firestore').getImmediate({ identifier: r });
  if (!o._initialized) {
    const c = na('firestore');
    c && Xh(o, ...c);
  }
  return o;
}
function eu(i) {
  var e, n, r;
  const o = i._freezeSettings(),
    c = (function (g, I, E, A) {
      return new $h(
        g,
        I,
        E,
        A.host,
        A.ssl,
        A.experimentalForceLongPolling,
        A.experimentalAutoDetectLongPolling,
        qs(A.experimentalLongPollingOptions),
        A.useFetchStreams,
      );
    })(
      i._databaseId,
      ((e = i._app) === null || e === void 0 ? void 0 : e.options.appId) || '',
      i._persistenceKey,
      o,
    );
  (i._firestoreClient = new Gh(
    i._authCredentials,
    i._appCheckCredentials,
    i._queue,
    c,
  )),
    !((n = o.localCache) === null || n === void 0) &&
      n._offlineComponentProvider &&
      !((r = o.localCache) === null || r === void 0) &&
      r._onlineComponentProvider &&
      (i._firestoreClient._uninitializedComponentsProvider = {
        _offlineKind: o.localCache.kind,
        _offline: o.localCache._offlineComponentProvider,
        _online: o.localCache._onlineComponentProvider,
      });
}
(function (e, n = !0) {
  (function (o) {
    kt = o;
  })(et),
    Ye(
      new xe(
        'firestore',
        (r, { instanceIdentifier: o, options: c }) => {
          const h = r.getProvider('app').getImmediate(),
            g = new Qh(
              new Uh(r.getProvider('auth-internal')),
              new Bh(r.getProvider('app-check-internal')),
              (function (E, A) {
                if (
                  !Object.prototype.hasOwnProperty.apply(E.options, [
                    'projectId',
                  ])
                )
                  throw new q(
                    K.INVALID_ARGUMENT,
                    '"projectId" not provided in firebase.initializeApp.',
                  );
                return new an(E.options.projectId, A);
              })(h, o),
              h,
            );
          return (
            (c = Object.assign({ useFetchStreams: n }, c)), g._setSettings(c), g
          );
        },
        'PUBLIC',
      ).setMultipleInstances(!0),
    ),
    Re(qr, '4.7.0', e),
    Re(qr, '4.7.0', 'esm2017');
})();
const tu = {
    apiKey: 'AIzaSyBdpwHTjeLfXkVZgVKnuGFhfCMZUxZsAc8',
    authDomain: 'graphiql-app-1e06a.firebaseapp.com',
    projectId: 'graphiql-app-1e06a',
    storageBucket: 'graphiql-app-1e06a.appspot.com',
    messagingSenderId: '230111088490',
    appId: '1:230111088490:web:21585fc589d0459e689f13',
    measurementId: 'G-S38B5ZRXD9',
  },
  Xs = cs(tu),
  nu = Ih(Xs);
Zh(Xs);
function iu() {
  const { t: i } = ei(),
    e = '',
    [n] = Sh(nu);
  return (
    Me.useEffect(() => {
      console.log(n);
    }, [n]),
    k.jsxs('div', {
      className: Gt.contentInner,
      children: [
        k.jsx('h1', {
          className: Gt.title,
          children:
            e.length === 0 ? `${i('Welcome')}!` : `${i('WelcomeBack')}, ${e}!`,
        }),
        k.jsx('p', {
          className: Gt.description,
          children: i('ProjectDescription'),
        }),
        k.jsx('div', {
          className: Gt.buttonBlock,
          children:
            e.length > 0
              ? k.jsx(Un, {
                  btnType: 'button',
                  to: '/main',
                  children: i('MainPage'),
                })
              : k.jsxs(k.Fragment, {
                  children: [
                    ' ',
                    k.jsx(Un, {
                      btnType: 'button',
                      to: '/login',
                      children: i('SignIn'),
                    }),
                    k.jsx(Un, {
                      btnType: 'button',
                      to: '/registration',
                      children: i('SignUp'),
                    }),
                  ],
                }),
        }),
      ],
    })
  );
}
const ru = '_container_10gft_1',
  su = { container: ru };
function lu() {
  return k.jsxs('div', {
    className: su.container,
    children: [k.jsx(iu, {}), k.jsx(qo, {})],
  });
}
export { lu as default };
