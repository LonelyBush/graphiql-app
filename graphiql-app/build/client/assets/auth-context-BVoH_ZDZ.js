import { r as E, d as xn, j as Fn } from './index-wWMGXTih.js';
var dt = {};
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
 */ const Vt = function (n) {
    const e = [];
    let t = 0;
    for (let r = 0; r < n.length; r++) {
      let i = n.charCodeAt(r);
      i < 128
        ? (e[t++] = i)
        : i < 2048
          ? ((e[t++] = (i >> 6) | 192), (e[t++] = (i & 63) | 128))
          : (i & 64512) === 55296 &&
              r + 1 < n.length &&
              (n.charCodeAt(r + 1) & 64512) === 56320
            ? ((i = 65536 + ((i & 1023) << 10) + (n.charCodeAt(++r) & 1023)),
              (e[t++] = (i >> 18) | 240),
              (e[t++] = ((i >> 12) & 63) | 128),
              (e[t++] = ((i >> 6) & 63) | 128),
              (e[t++] = (i & 63) | 128))
            : ((e[t++] = (i >> 12) | 224),
              (e[t++] = ((i >> 6) & 63) | 128),
              (e[t++] = (i & 63) | 128));
    }
    return e;
  },
  Bn = function (n) {
    const e = [];
    let t = 0,
      r = 0;
    for (; t < n.length; ) {
      const i = n[t++];
      if (i < 128) e[r++] = String.fromCharCode(i);
      else if (i > 191 && i < 224) {
        const s = n[t++];
        e[r++] = String.fromCharCode(((i & 31) << 6) | (s & 63));
      } else if (i > 239 && i < 365) {
        const s = n[t++],
          o = n[t++],
          c = n[t++],
          a =
            (((i & 7) << 18) | ((s & 63) << 12) | ((o & 63) << 6) | (c & 63)) -
            65536;
        (e[r++] = String.fromCharCode(55296 + (a >> 10))),
          (e[r++] = String.fromCharCode(56320 + (a & 1023)));
      } else {
        const s = n[t++],
          o = n[t++];
        e[r++] = String.fromCharCode(
          ((i & 15) << 12) | ((s & 63) << 6) | (o & 63),
        );
      }
    }
    return e.join('');
  },
  Ht = {
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
    encodeByteArray(n, e) {
      if (!Array.isArray(n))
        throw Error('encodeByteArray takes an array as a parameter');
      this.init_();
      const t = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
        r = [];
      for (let i = 0; i < n.length; i += 3) {
        const s = n[i],
          o = i + 1 < n.length,
          c = o ? n[i + 1] : 0,
          a = i + 2 < n.length,
          l = a ? n[i + 2] : 0,
          d = s >> 2,
          h = ((s & 3) << 4) | (c >> 4);
        let g = ((c & 15) << 2) | (l >> 6),
          w = l & 63;
        a || ((w = 64), o || (g = 64)), r.push(t[d], t[h], t[g], t[w]);
      }
      return r.join('');
    },
    encodeString(n, e) {
      return this.HAS_NATIVE_SUPPORT && !e
        ? btoa(n)
        : this.encodeByteArray(Vt(n), e);
    },
    decodeString(n, e) {
      return this.HAS_NATIVE_SUPPORT && !e
        ? atob(n)
        : Bn(this.decodeStringToByteArray(n, e));
    },
    decodeStringToByteArray(n, e) {
      this.init_();
      const t = e ? this.charToByteMapWebSafe_ : this.charToByteMap_,
        r = [];
      for (let i = 0; i < n.length; ) {
        const s = t[n.charAt(i++)],
          c = i < n.length ? t[n.charAt(i)] : 0;
        ++i;
        const l = i < n.length ? t[n.charAt(i)] : 64;
        ++i;
        const h = i < n.length ? t[n.charAt(i)] : 64;
        if ((++i, s == null || c == null || l == null || h == null))
          throw new Vn();
        const g = (s << 2) | (c >> 4);
        if ((r.push(g), l !== 64)) {
          const w = ((c << 4) & 240) | (l >> 2);
          if ((r.push(w), h !== 64)) {
            const j = ((l << 6) & 192) | h;
            r.push(j);
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
        for (let n = 0; n < this.ENCODED_VALS.length; n++)
          (this.byteToCharMap_[n] = this.ENCODED_VALS.charAt(n)),
            (this.charToByteMap_[this.byteToCharMap_[n]] = n),
            (this.byteToCharMapWebSafe_[n] =
              this.ENCODED_VALS_WEBSAFE.charAt(n)),
            (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]] = n),
            n >= this.ENCODED_VALS_BASE.length &&
              ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)] = n),
              (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)] = n));
      }
    },
  };
class Vn extends Error {
  constructor() {
    super(...arguments), (this.name = 'DecodeBase64StringError');
  }
}
const Hn = function (n) {
    const e = Vt(n);
    return Ht.encodeByteArray(e, !0);
  },
  $t = function (n) {
    return Hn(n).replace(/\./g, '');
  },
  jt = function (n) {
    try {
      return Ht.decodeString(n, !0);
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
 */ function $n() {
  if (typeof self < 'u') return self;
  if (typeof window < 'u') return window;
  if (typeof global < 'u') return global;
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
 */ const jn = () => $n().__FIREBASE_DEFAULTS__,
  Wn = () => {
    if (typeof process > 'u' || typeof dt > 'u') return;
    const n = dt.__FIREBASE_DEFAULTS__;
    if (n) return JSON.parse(n);
  },
  zn = () => {
    if (typeof document > 'u') return;
    let n;
    try {
      n = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
    } catch {
      return;
    }
    const e = n && jt(n[1]);
    return e && JSON.parse(e);
  },
  qe = () => {
    try {
      return jn() || Wn() || zn();
    } catch (n) {
      console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);
      return;
    }
  },
  Gn = (n) => {
    var e, t;
    return (t =
      (e = qe()) === null || e === void 0 ? void 0 : e.emulatorHosts) ===
      null || t === void 0
      ? void 0
      : t[n];
  },
  Wt = () => {
    var n;
    return (n = qe()) === null || n === void 0 ? void 0 : n.config;
  },
  zt = (n) => {
    var e;
    return (e = qe()) === null || e === void 0 ? void 0 : e[`_${n}`];
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
 */ class Kn {
  constructor() {
    (this.reject = () => {}),
      (this.resolve = () => {}),
      (this.promise = new Promise((e, t) => {
        (this.resolve = e), (this.reject = t);
      }));
  }
  wrapCallback(e) {
    return (t, r) => {
      t ? this.reject(t) : this.resolve(r),
        typeof e == 'function' &&
          (this.promise.catch(() => {}), e.length === 1 ? e(t) : e(t, r));
    };
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
 */ function p() {
  return typeof navigator < 'u' && typeof navigator.userAgent == 'string'
    ? navigator.userAgent
    : '';
}
function qn() {
  return (
    typeof window < 'u' &&
    !!(window.cordova || window.phonegap || window.PhoneGap) &&
    /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(p())
  );
}
function Jn() {
  const n =
    typeof chrome == 'object'
      ? chrome.runtime
      : typeof browser == 'object'
        ? browser.runtime
        : void 0;
  return typeof n == 'object' && n.id !== void 0;
}
function Yn() {
  return typeof navigator == 'object' && navigator.product === 'ReactNative';
}
function Xn() {
  const n = p();
  return n.indexOf('MSIE ') >= 0 || n.indexOf('Trident/') >= 0;
}
function Qn() {
  try {
    return typeof indexedDB == 'object';
  } catch {
    return !1;
  }
}
function Zn() {
  return new Promise((n, e) => {
    try {
      let t = !0;
      const r = 'validate-browser-context-for-indexeddb-analytics-module',
        i = self.indexedDB.open(r);
      (i.onsuccess = () => {
        i.result.close(), t || self.indexedDB.deleteDatabase(r), n(!0);
      }),
        (i.onupgradeneeded = () => {
          t = !1;
        }),
        (i.onerror = () => {
          var s;
          e(
            ((s = i.error) === null || s === void 0 ? void 0 : s.message) || '',
          );
        });
    } catch (t) {
      e(t);
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
 */ const er = 'FirebaseError';
class x extends Error {
  constructor(e, t, r) {
    super(t),
      (this.code = e),
      (this.customData = r),
      (this.name = er),
      Object.setPrototypeOf(this, x.prototype),
      Error.captureStackTrace &&
        Error.captureStackTrace(this, oe.prototype.create);
  }
}
class oe {
  constructor(e, t, r) {
    (this.service = e), (this.serviceName = t), (this.errors = r);
  }
  create(e, ...t) {
    const r = t[0] || {},
      i = `${this.service}/${e}`,
      s = this.errors[e],
      o = s ? tr(s, r) : 'Error',
      c = `${this.serviceName}: ${o} (${i}).`;
    return new x(i, c, r);
  }
}
function tr(n, e) {
  return n.replace(nr, (t, r) => {
    const i = e[r];
    return i != null ? String(i) : `<${r}?>`;
  });
}
const nr = /\{\$([^}]+)}/g;
function rr(n) {
  for (const e in n) if (Object.prototype.hasOwnProperty.call(n, e)) return !1;
  return !0;
}
function ve(n, e) {
  if (n === e) return !0;
  const t = Object.keys(n),
    r = Object.keys(e);
  for (const i of t) {
    if (!r.includes(i)) return !1;
    const s = n[i],
      o = e[i];
    if (ht(s) && ht(o)) {
      if (!ve(s, o)) return !1;
    } else if (s !== o) return !1;
  }
  for (const i of r) if (!t.includes(i)) return !1;
  return !0;
}
function ht(n) {
  return n !== null && typeof n == 'object';
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
 */ function ae(n) {
  const e = [];
  for (const [t, r] of Object.entries(n))
    Array.isArray(r)
      ? r.forEach((i) => {
          e.push(encodeURIComponent(t) + '=' + encodeURIComponent(i));
        })
      : e.push(encodeURIComponent(t) + '=' + encodeURIComponent(r));
  return e.length ? '&' + e.join('&') : '';
}
function ee(n) {
  const e = {};
  return (
    n
      .replace(/^\?/, '')
      .split('&')
      .forEach((r) => {
        if (r) {
          const [i, s] = r.split('=');
          e[decodeURIComponent(i)] = decodeURIComponent(s);
        }
      }),
    e
  );
}
function te(n) {
  const e = n.indexOf('?');
  if (!e) return '';
  const t = n.indexOf('#', e);
  return n.substring(e, t > 0 ? t : void 0);
}
function ir(n, e) {
  const t = new sr(n, e);
  return t.subscribe.bind(t);
}
class sr {
  constructor(e, t) {
    (this.observers = []),
      (this.unsubscribes = []),
      (this.observerCount = 0),
      (this.task = Promise.resolve()),
      (this.finalized = !1),
      (this.onNoObservers = t),
      this.task
        .then(() => {
          e(this);
        })
        .catch((r) => {
          this.error(r);
        });
  }
  next(e) {
    this.forEachObserver((t) => {
      t.next(e);
    });
  }
  error(e) {
    this.forEachObserver((t) => {
      t.error(e);
    }),
      this.close(e);
  }
  complete() {
    this.forEachObserver((e) => {
      e.complete();
    }),
      this.close();
  }
  subscribe(e, t, r) {
    let i;
    if (e === void 0 && t === void 0 && r === void 0)
      throw new Error('Missing Observer.');
    or(e, ['next', 'error', 'complete'])
      ? (i = e)
      : (i = { next: e, error: t, complete: r }),
      i.next === void 0 && (i.next = Ne),
      i.error === void 0 && (i.error = Ne),
      i.complete === void 0 && (i.complete = Ne);
    const s = this.unsubscribeOne.bind(this, this.observers.length);
    return (
      this.finalized &&
        this.task.then(() => {
          try {
            this.finalError ? i.error(this.finalError) : i.complete();
          } catch {}
        }),
      this.observers.push(i),
      s
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
      for (let t = 0; t < this.observers.length; t++) this.sendOne(t, e);
  }
  sendOne(e, t) {
    this.task.then(() => {
      if (this.observers !== void 0 && this.observers[e] !== void 0)
        try {
          t(this.observers[e]);
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
function or(n, e) {
  if (typeof n != 'object' || n === null) return !1;
  for (const t of e) if (t in n && typeof n[t] == 'function') return !0;
  return !1;
}
function Ne() {}
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
 */ function y(n) {
  return n && n._delegate ? n._delegate : n;
}
class X {
  constructor(e, t, r) {
    (this.name = e),
      (this.instanceFactory = t),
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
 */ const B = '[DEFAULT]';
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
 */ class ar {
  constructor(e, t) {
    (this.name = e),
      (this.container = t),
      (this.component = null),
      (this.instances = new Map()),
      (this.instancesDeferred = new Map()),
      (this.instancesOptions = new Map()),
      (this.onInitCallbacks = new Map());
  }
  get(e) {
    const t = this.normalizeInstanceIdentifier(e);
    if (!this.instancesDeferred.has(t)) {
      const r = new Kn();
      if (
        (this.instancesDeferred.set(t, r),
        this.isInitialized(t) || this.shouldAutoInitialize())
      )
        try {
          const i = this.getOrInitializeService({ instanceIdentifier: t });
          i && r.resolve(i);
        } catch {}
    }
    return this.instancesDeferred.get(t).promise;
  }
  getImmediate(e) {
    var t;
    const r = this.normalizeInstanceIdentifier(
        e == null ? void 0 : e.identifier,
      ),
      i =
        (t = e == null ? void 0 : e.optional) !== null && t !== void 0 ? t : !1;
    if (this.isInitialized(r) || this.shouldAutoInitialize())
      try {
        return this.getOrInitializeService({ instanceIdentifier: r });
      } catch (s) {
        if (i) return null;
        throw s;
      }
    else {
      if (i) return null;
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
      if (lr(e))
        try {
          this.getOrInitializeService({ instanceIdentifier: B });
        } catch {}
      for (const [t, r] of this.instancesDeferred.entries()) {
        const i = this.normalizeInstanceIdentifier(t);
        try {
          const s = this.getOrInitializeService({ instanceIdentifier: i });
          r.resolve(s);
        } catch {}
      }
    }
  }
  clearInstance(e = B) {
    this.instancesDeferred.delete(e),
      this.instancesOptions.delete(e),
      this.instances.delete(e);
  }
  async delete() {
    const e = Array.from(this.instances.values());
    await Promise.all([
      ...e.filter((t) => 'INTERNAL' in t).map((t) => t.INTERNAL.delete()),
      ...e.filter((t) => '_delete' in t).map((t) => t._delete()),
    ]);
  }
  isComponentSet() {
    return this.component != null;
  }
  isInitialized(e = B) {
    return this.instances.has(e);
  }
  getOptions(e = B) {
    return this.instancesOptions.get(e) || {};
  }
  initialize(e = {}) {
    const { options: t = {} } = e,
      r = this.normalizeInstanceIdentifier(e.instanceIdentifier);
    if (this.isInitialized(r))
      throw Error(`${this.name}(${r}) has already been initialized`);
    if (!this.isComponentSet())
      throw Error(`Component ${this.name} has not been registered yet`);
    const i = this.getOrInitializeService({
      instanceIdentifier: r,
      options: t,
    });
    for (const [s, o] of this.instancesDeferred.entries()) {
      const c = this.normalizeInstanceIdentifier(s);
      r === c && o.resolve(i);
    }
    return i;
  }
  onInit(e, t) {
    var r;
    const i = this.normalizeInstanceIdentifier(t),
      s =
        (r = this.onInitCallbacks.get(i)) !== null && r !== void 0
          ? r
          : new Set();
    s.add(e), this.onInitCallbacks.set(i, s);
    const o = this.instances.get(i);
    return (
      o && e(o, i),
      () => {
        s.delete(e);
      }
    );
  }
  invokeOnInitCallbacks(e, t) {
    const r = this.onInitCallbacks.get(t);
    if (r)
      for (const i of r)
        try {
          i(e, t);
        } catch {}
  }
  getOrInitializeService({ instanceIdentifier: e, options: t = {} }) {
    let r = this.instances.get(e);
    if (
      !r &&
      this.component &&
      ((r = this.component.instanceFactory(this.container, {
        instanceIdentifier: cr(e),
        options: t,
      })),
      this.instances.set(e, r),
      this.instancesOptions.set(e, t),
      this.invokeOnInitCallbacks(r, e),
      this.component.onInstanceCreated)
    )
      try {
        this.component.onInstanceCreated(this.container, e, r);
      } catch {}
    return r || null;
  }
  normalizeInstanceIdentifier(e = B) {
    return this.component ? (this.component.multipleInstances ? e : B) : e;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== 'EXPLICIT';
  }
}
function cr(n) {
  return n === B ? void 0 : n;
}
function lr(n) {
  return n.instantiationMode === 'EAGER';
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
 */ class ur {
  constructor(e) {
    (this.name = e), (this.providers = new Map());
  }
  addComponent(e) {
    const t = this.getProvider(e.name);
    if (t.isComponentSet())
      throw new Error(
        `Component ${e.name} has already been registered with ${this.name}`,
      );
    t.setComponent(e);
  }
  addOrOverwriteComponent(e) {
    this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name),
      this.addComponent(e);
  }
  getProvider(e) {
    if (this.providers.has(e)) return this.providers.get(e);
    const t = new ar(e, this);
    return this.providers.set(e, t), t;
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
 */ var f;
(function (n) {
  (n[(n.DEBUG = 0)] = 'DEBUG'),
    (n[(n.VERBOSE = 1)] = 'VERBOSE'),
    (n[(n.INFO = 2)] = 'INFO'),
    (n[(n.WARN = 3)] = 'WARN'),
    (n[(n.ERROR = 4)] = 'ERROR'),
    (n[(n.SILENT = 5)] = 'SILENT');
})(f || (f = {}));
const dr = {
    debug: f.DEBUG,
    verbose: f.VERBOSE,
    info: f.INFO,
    warn: f.WARN,
    error: f.ERROR,
    silent: f.SILENT,
  },
  hr = f.INFO,
  fr = {
    [f.DEBUG]: 'log',
    [f.VERBOSE]: 'log',
    [f.INFO]: 'info',
    [f.WARN]: 'warn',
    [f.ERROR]: 'error',
  },
  pr = (n, e, ...t) => {
    if (e < n.logLevel) return;
    const r = new Date().toISOString(),
      i = fr[e];
    if (i) console[i](`[${r}]  ${n.name}:`, ...t);
    else
      throw new Error(
        `Attempted to log a message with an invalid logType (value: ${e})`,
      );
  };
class Gt {
  constructor(e) {
    (this.name = e),
      (this._logLevel = hr),
      (this._logHandler = pr),
      (this._userLogHandler = null);
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(e) {
    if (!(e in f))
      throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
    this._logLevel = e;
  }
  setLogLevel(e) {
    this._logLevel = typeof e == 'string' ? dr[e] : e;
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
    this._userLogHandler && this._userLogHandler(this, f.DEBUG, ...e),
      this._logHandler(this, f.DEBUG, ...e);
  }
  log(...e) {
    this._userLogHandler && this._userLogHandler(this, f.VERBOSE, ...e),
      this._logHandler(this, f.VERBOSE, ...e);
  }
  info(...e) {
    this._userLogHandler && this._userLogHandler(this, f.INFO, ...e),
      this._logHandler(this, f.INFO, ...e);
  }
  warn(...e) {
    this._userLogHandler && this._userLogHandler(this, f.WARN, ...e),
      this._logHandler(this, f.WARN, ...e);
  }
  error(...e) {
    this._userLogHandler && this._userLogHandler(this, f.ERROR, ...e),
      this._logHandler(this, f.ERROR, ...e);
  }
}
const gr = (n, e) => e.some((t) => n instanceof t);
let ft, pt;
function mr() {
  return (
    ft ||
    (ft = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
  );
}
function _r() {
  return (
    pt ||
    (pt = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey,
    ])
  );
}
const Kt = new WeakMap(),
  Be = new WeakMap(),
  qt = new WeakMap(),
  De = new WeakMap(),
  Je = new WeakMap();
function vr(n) {
  const e = new Promise((t, r) => {
    const i = () => {
        n.removeEventListener('success', s), n.removeEventListener('error', o);
      },
      s = () => {
        t(M(n.result)), i();
      },
      o = () => {
        r(n.error), i();
      };
    n.addEventListener('success', s), n.addEventListener('error', o);
  });
  return (
    e
      .then((t) => {
        t instanceof IDBCursor && Kt.set(t, n);
      })
      .catch(() => {}),
    Je.set(e, n),
    e
  );
}
function Ir(n) {
  if (Be.has(n)) return;
  const e = new Promise((t, r) => {
    const i = () => {
        n.removeEventListener('complete', s),
          n.removeEventListener('error', o),
          n.removeEventListener('abort', o);
      },
      s = () => {
        t(), i();
      },
      o = () => {
        r(n.error || new DOMException('AbortError', 'AbortError')), i();
      };
    n.addEventListener('complete', s),
      n.addEventListener('error', o),
      n.addEventListener('abort', o);
  });
  Be.set(n, e);
}
let Ve = {
  get(n, e, t) {
    if (n instanceof IDBTransaction) {
      if (e === 'done') return Be.get(n);
      if (e === 'objectStoreNames') return n.objectStoreNames || qt.get(n);
      if (e === 'store')
        return t.objectStoreNames[1]
          ? void 0
          : t.objectStore(t.objectStoreNames[0]);
    }
    return M(n[e]);
  },
  set(n, e, t) {
    return (n[e] = t), !0;
  },
  has(n, e) {
    return n instanceof IDBTransaction && (e === 'done' || e === 'store')
      ? !0
      : e in n;
  },
};
function yr(n) {
  Ve = n(Ve);
}
function wr(n) {
  return n === IDBDatabase.prototype.transaction &&
    !('objectStoreNames' in IDBTransaction.prototype)
    ? function (e, ...t) {
        const r = n.call(Le(this), e, ...t);
        return qt.set(r, e.sort ? e.sort() : [e]), M(r);
      }
    : _r().includes(n)
      ? function (...e) {
          return n.apply(Le(this), e), M(Kt.get(this));
        }
      : function (...e) {
          return M(n.apply(Le(this), e));
        };
}
function Er(n) {
  return typeof n == 'function'
    ? wr(n)
    : (n instanceof IDBTransaction && Ir(n),
      gr(n, mr()) ? new Proxy(n, Ve) : n);
}
function M(n) {
  if (n instanceof IDBRequest) return vr(n);
  if (De.has(n)) return De.get(n);
  const e = Er(n);
  return e !== n && (De.set(n, e), Je.set(e, n)), e;
}
const Le = (n) => Je.get(n);
function br(n, e, { blocked: t, upgrade: r, blocking: i, terminated: s } = {}) {
  const o = indexedDB.open(n, e),
    c = M(o);
  return (
    r &&
      o.addEventListener('upgradeneeded', (a) => {
        r(M(o.result), a.oldVersion, a.newVersion, M(o.transaction), a);
      }),
    t && o.addEventListener('blocked', (a) => t(a.oldVersion, a.newVersion, a)),
    c
      .then((a) => {
        s && a.addEventListener('close', () => s()),
          i &&
            a.addEventListener('versionchange', (l) =>
              i(l.oldVersion, l.newVersion, l),
            );
      })
      .catch(() => {}),
    c
  );
}
const Tr = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'],
  Sr = ['put', 'add', 'delete', 'clear'],
  Me = new Map();
function gt(n, e) {
  if (!(n instanceof IDBDatabase && !(e in n) && typeof e == 'string')) return;
  if (Me.get(e)) return Me.get(e);
  const t = e.replace(/FromIndex$/, ''),
    r = e !== t,
    i = Sr.includes(t);
  if (
    !(t in (r ? IDBIndex : IDBObjectStore).prototype) ||
    !(i || Tr.includes(t))
  )
    return;
  const s = async function (o, ...c) {
    const a = this.transaction(o, i ? 'readwrite' : 'readonly');
    let l = a.store;
    return (
      r && (l = l.index(c.shift())),
      (await Promise.all([l[t](...c), i && a.done]))[0]
    );
  };
  return Me.set(e, s), s;
}
yr((n) => ({
  ...n,
  get: (e, t, r) => gt(e, t) || n.get(e, t, r),
  has: (e, t) => !!gt(e, t) || n.has(e, t),
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
 */ class Ar {
  constructor(e) {
    this.container = e;
  }
  getPlatformInfoString() {
    return this.container
      .getProviders()
      .map((t) => {
        if (Cr(t)) {
          const r = t.getImmediate();
          return `${r.library}/${r.version}`;
        } else return null;
      })
      .filter((t) => t)
      .join(' ');
  }
}
function Cr(n) {
  const e = n.getComponent();
  return (e == null ? void 0 : e.type) === 'VERSION';
}
const He = '@firebase/app',
  mt = '0.10.10';
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
 */ const C = new Gt('@firebase/app'),
  Rr = '@firebase/app-compat',
  kr = '@firebase/analytics-compat',
  Pr = '@firebase/analytics',
  Or = '@firebase/app-check-compat',
  Nr = '@firebase/app-check',
  Dr = '@firebase/auth',
  Lr = '@firebase/auth-compat',
  Mr = '@firebase/database',
  Ur = '@firebase/database-compat',
  xr = '@firebase/functions',
  Fr = '@firebase/functions-compat',
  Br = '@firebase/installations',
  Vr = '@firebase/installations-compat',
  Hr = '@firebase/messaging',
  $r = '@firebase/messaging-compat',
  jr = '@firebase/performance',
  Wr = '@firebase/performance-compat',
  zr = '@firebase/remote-config',
  Gr = '@firebase/remote-config-compat',
  Kr = '@firebase/storage',
  qr = '@firebase/storage-compat',
  Jr = '@firebase/firestore',
  Yr = '@firebase/vertexai-preview',
  Xr = '@firebase/firestore-compat',
  Qr = 'firebase',
  Zr = '10.13.1';
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
 */ const $e = '[DEFAULT]',
  ei = {
    [He]: 'fire-core',
    [Rr]: 'fire-core-compat',
    [Pr]: 'fire-analytics',
    [kr]: 'fire-analytics-compat',
    [Nr]: 'fire-app-check',
    [Or]: 'fire-app-check-compat',
    [Dr]: 'fire-auth',
    [Lr]: 'fire-auth-compat',
    [Mr]: 'fire-rtdb',
    [Ur]: 'fire-rtdb-compat',
    [xr]: 'fire-fn',
    [Fr]: 'fire-fn-compat',
    [Br]: 'fire-iid',
    [Vr]: 'fire-iid-compat',
    [Hr]: 'fire-fcm',
    [$r]: 'fire-fcm-compat',
    [jr]: 'fire-perf',
    [Wr]: 'fire-perf-compat',
    [zr]: 'fire-rc',
    [Gr]: 'fire-rc-compat',
    [Kr]: 'fire-gcs',
    [qr]: 'fire-gcs-compat',
    [Jr]: 'fire-fst',
    [Xr]: 'fire-fst-compat',
    [Yr]: 'fire-vertex',
    'fire-js': 'fire-js',
    [Qr]: 'fire-js-all',
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
 */ const Ie = new Map(),
  ti = new Map(),
  je = new Map();
function _t(n, e) {
  try {
    n.container.addComponent(e);
  } catch (t) {
    C.debug(
      `Component ${e.name} failed to register with FirebaseApp ${n.name}`,
      t,
    );
  }
}
function re(n) {
  const e = n.name;
  if (je.has(e))
    return (
      C.debug(`There were multiple attempts to register component ${e}.`), !1
    );
  je.set(e, n);
  for (const t of Ie.values()) _t(t, n);
  for (const t of ti.values()) _t(t, n);
  return !0;
}
function Jt(n, e) {
  const t = n.container.getProvider('heartbeat').getImmediate({ optional: !0 });
  return t && t.triggerHeartbeat(), n.container.getProvider(e);
}
function _(n) {
  return n.settings !== void 0;
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
 */ const ni = {
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
  U = new oe('app', 'Firebase', ni);
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
 */ class ri {
  constructor(e, t, r) {
    (this._isDeleted = !1),
      (this._options = Object.assign({}, e)),
      (this._config = Object.assign({}, t)),
      (this._name = t.name),
      (this._automaticDataCollectionEnabled = t.automaticDataCollectionEnabled),
      (this._container = r),
      this.container.addComponent(new X('app', () => this, 'PUBLIC'));
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
    if (this.isDeleted) throw U.create('app-deleted', { appName: this._name });
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
 */ const ce = Zr;
function Yt(n, e = {}) {
  let t = n;
  typeof e != 'object' && (e = { name: e });
  const r = Object.assign({ name: $e, automaticDataCollectionEnabled: !1 }, e),
    i = r.name;
  if (typeof i != 'string' || !i)
    throw U.create('bad-app-name', { appName: String(i) });
  if ((t || (t = Wt()), !t)) throw U.create('no-options');
  const s = Ie.get(i);
  if (s) {
    if (ve(t, s.options) && ve(r, s.config)) return s;
    throw U.create('duplicate-app', { appName: i });
  }
  const o = new ur(i);
  for (const a of je.values()) o.addComponent(a);
  const c = new ri(t, r, o);
  return Ie.set(i, c), c;
}
function ii(n = $e) {
  const e = Ie.get(n);
  if (!e && n === $e && Wt()) return Yt();
  if (!e) throw U.create('no-app', { appName: n });
  return e;
}
function G(n, e, t) {
  var r;
  let i = (r = ei[n]) !== null && r !== void 0 ? r : n;
  t && (i += `-${t}`);
  const s = i.match(/\s|\//),
    o = e.match(/\s|\//);
  if (s || o) {
    const c = [`Unable to register library "${i}" with version "${e}":`];
    s &&
      c.push(
        `library name "${i}" contains illegal characters (whitespace or "/")`,
      ),
      s && o && c.push('and'),
      o &&
        c.push(
          `version name "${e}" contains illegal characters (whitespace or "/")`,
        ),
      C.warn(c.join(' '));
    return;
  }
  re(new X(`${i}-version`, () => ({ library: i, version: e }), 'VERSION'));
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
 */ const si = 'firebase-heartbeat-database',
  oi = 1,
  ie = 'firebase-heartbeat-store';
let Ue = null;
function Xt() {
  return (
    Ue ||
      (Ue = br(si, oi, {
        upgrade: (n, e) => {
          switch (e) {
            case 0:
              try {
                n.createObjectStore(ie);
              } catch (t) {
                console.warn(t);
              }
          }
        },
      }).catch((n) => {
        throw U.create('idb-open', { originalErrorMessage: n.message });
      })),
    Ue
  );
}
async function ai(n) {
  try {
    const t = (await Xt()).transaction(ie),
      r = await t.objectStore(ie).get(Qt(n));
    return await t.done, r;
  } catch (e) {
    if (e instanceof x) C.warn(e.message);
    else {
      const t = U.create('idb-get', {
        originalErrorMessage: e == null ? void 0 : e.message,
      });
      C.warn(t.message);
    }
  }
}
async function vt(n, e) {
  try {
    const r = (await Xt()).transaction(ie, 'readwrite');
    await r.objectStore(ie).put(e, Qt(n)), await r.done;
  } catch (t) {
    if (t instanceof x) C.warn(t.message);
    else {
      const r = U.create('idb-set', {
        originalErrorMessage: t == null ? void 0 : t.message,
      });
      C.warn(r.message);
    }
  }
}
function Qt(n) {
  return `${n.name}!${n.options.appId}`;
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
 */ const ci = 1024,
  li = 30 * 24 * 60 * 60 * 1e3;
class ui {
  constructor(e) {
    (this.container = e), (this._heartbeatsCache = null);
    const t = this.container.getProvider('app').getImmediate();
    (this._storage = new hi(t)),
      (this._heartbeatsCachePromise = this._storage
        .read()
        .then((r) => ((this._heartbeatsCache = r), r)));
  }
  async triggerHeartbeat() {
    var e, t;
    try {
      const i = this.container
          .getProvider('platform-logger')
          .getImmediate()
          .getPlatformInfoString(),
        s = It();
      return (((e = this._heartbeatsCache) === null || e === void 0
        ? void 0
        : e.heartbeats) == null &&
        ((this._heartbeatsCache = await this._heartbeatsCachePromise),
        ((t = this._heartbeatsCache) === null || t === void 0
          ? void 0
          : t.heartbeats) == null)) ||
        this._heartbeatsCache.lastSentHeartbeatDate === s ||
        this._heartbeatsCache.heartbeats.some((o) => o.date === s)
        ? void 0
        : (this._heartbeatsCache.heartbeats.push({ date: s, agent: i }),
          (this._heartbeatsCache.heartbeats =
            this._heartbeatsCache.heartbeats.filter((o) => {
              const c = new Date(o.date).valueOf();
              return Date.now() - c <= li;
            })),
          this._storage.overwrite(this._heartbeatsCache));
    } catch (r) {
      C.warn(r);
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
      const t = It(),
        { heartbeatsToSend: r, unsentEntries: i } = di(
          this._heartbeatsCache.heartbeats,
        ),
        s = $t(JSON.stringify({ version: 2, heartbeats: r }));
      return (
        (this._heartbeatsCache.lastSentHeartbeatDate = t),
        i.length > 0
          ? ((this._heartbeatsCache.heartbeats = i),
            await this._storage.overwrite(this._heartbeatsCache))
          : ((this._heartbeatsCache.heartbeats = []),
            this._storage.overwrite(this._heartbeatsCache)),
        s
      );
    } catch (t) {
      return C.warn(t), '';
    }
  }
}
function It() {
  return new Date().toISOString().substring(0, 10);
}
function di(n, e = ci) {
  const t = [];
  let r = n.slice();
  for (const i of n) {
    const s = t.find((o) => o.agent === i.agent);
    if (s) {
      if ((s.dates.push(i.date), yt(t) > e)) {
        s.dates.pop();
        break;
      }
    } else if ((t.push({ agent: i.agent, dates: [i.date] }), yt(t) > e)) {
      t.pop();
      break;
    }
    r = r.slice(1);
  }
  return { heartbeatsToSend: t, unsentEntries: r };
}
class hi {
  constructor(e) {
    (this.app = e),
      (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck());
  }
  async runIndexedDBEnvironmentCheck() {
    return Qn()
      ? Zn()
          .then(() => !0)
          .catch(() => !1)
      : !1;
  }
  async read() {
    if (await this._canUseIndexedDBPromise) {
      const t = await ai(this.app);
      return t != null && t.heartbeats ? t : { heartbeats: [] };
    } else return { heartbeats: [] };
  }
  async overwrite(e) {
    var t;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return vt(this.app, {
        lastSentHeartbeatDate:
          (t = e.lastSentHeartbeatDate) !== null && t !== void 0
            ? t
            : i.lastSentHeartbeatDate,
        heartbeats: e.heartbeats,
      });
    } else return;
  }
  async add(e) {
    var t;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return vt(this.app, {
        lastSentHeartbeatDate:
          (t = e.lastSentHeartbeatDate) !== null && t !== void 0
            ? t
            : i.lastSentHeartbeatDate,
        heartbeats: [...i.heartbeats, ...e.heartbeats],
      });
    } else return;
  }
}
function yt(n) {
  return $t(JSON.stringify({ version: 2, heartbeats: n })).length;
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
 */ function fi(n) {
  re(new X('platform-logger', (e) => new Ar(e), 'PRIVATE')),
    re(new X('heartbeat', (e) => new ui(e), 'PRIVATE')),
    G(He, mt, n),
    G(He, mt, 'esm2017'),
    G('fire-js', '');
}
fi('');
function Ye(n, e) {
  var t = {};
  for (var r in n)
    Object.prototype.hasOwnProperty.call(n, r) &&
      e.indexOf(r) < 0 &&
      (t[r] = n[r]);
  if (n != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var i = 0, r = Object.getOwnPropertySymbols(n); i < r.length; i++)
      e.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(n, r[i]) &&
        (t[r[i]] = n[r[i]]);
  return t;
}
function Zt() {
  return {
    'dependent-sdk-initialized-before-auth':
      'Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.',
  };
}
const pi = Zt,
  en = new oe('auth', 'Firebase', Zt());
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
 */ const ye = new Gt('@firebase/auth');
function gi(n, ...e) {
  ye.logLevel <= f.WARN && ye.warn(`Auth (${ce}): ${n}`, ...e);
}
function pe(n, ...e) {
  ye.logLevel <= f.ERROR && ye.error(`Auth (${ce}): ${n}`, ...e);
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
 */ function m(n, ...e) {
  throw Xe(n, ...e);
}
function v(n, ...e) {
  return Xe(n, ...e);
}
function tn(n, e, t) {
  const r = Object.assign(Object.assign({}, pi()), { [e]: t });
  return new oe('auth', 'Firebase', r).create(e, { appName: n.name });
}
function A(n) {
  return tn(
    n,
    'operation-not-supported-in-this-environment',
    'Operations that alter the current user are not supported in conjunction with FirebaseServerApp',
  );
}
function Xe(n, ...e) {
  if (typeof n != 'string') {
    const t = e[0],
      r = [...e.slice(1)];
    return r[0] && (r[0].appName = n.name), n._errorFactory.create(t, ...r);
  }
  return en.create(n, ...e);
}
function u(n, e, ...t) {
  if (!n) throw Xe(e, ...t);
}
function b(n) {
  const e = 'INTERNAL ASSERTION FAILED: ' + n;
  throw (pe(e), new Error(e));
}
function R(n, e) {
  n || b(e);
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
 */ function We() {
  var n;
  return (
    (typeof self < 'u' &&
      ((n = self.location) === null || n === void 0 ? void 0 : n.href)) ||
    ''
  );
}
function mi() {
  return wt() === 'http:' || wt() === 'https:';
}
function wt() {
  var n;
  return (
    (typeof self < 'u' &&
      ((n = self.location) === null || n === void 0 ? void 0 : n.protocol)) ||
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
 */ function _i() {
  return typeof navigator < 'u' &&
    navigator &&
    'onLine' in navigator &&
    typeof navigator.onLine == 'boolean' &&
    (mi() || Jn() || 'connection' in navigator)
    ? navigator.onLine
    : !0;
}
function vi() {
  if (typeof navigator > 'u') return null;
  const n = navigator;
  return (n.languages && n.languages[0]) || n.language || null;
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
 */ class le {
  constructor(e, t) {
    (this.shortDelay = e),
      (this.longDelay = t),
      R(t > e, 'Short delay should be less than long delay!'),
      (this.isMobile = qn() || Yn());
  }
  get() {
    return _i()
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
 */ function Qe(n, e) {
  R(n.emulator, 'Emulator should always be set here');
  const { url: t } = n.emulator;
  return e ? `${t}${e.startsWith('/') ? e.slice(1) : e}` : t;
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
 */ class nn {
  static initialize(e, t, r) {
    (this.fetchImpl = e),
      t && (this.headersImpl = t),
      r && (this.responseImpl = r);
  }
  static fetch() {
    if (this.fetchImpl) return this.fetchImpl;
    if (typeof self < 'u' && 'fetch' in self) return self.fetch;
    if (typeof globalThis < 'u' && globalThis.fetch) return globalThis.fetch;
    if (typeof fetch < 'u') return fetch;
    b(
      'Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill',
    );
  }
  static headers() {
    if (this.headersImpl) return this.headersImpl;
    if (typeof self < 'u' && 'Headers' in self) return self.Headers;
    if (typeof globalThis < 'u' && globalThis.Headers)
      return globalThis.Headers;
    if (typeof Headers < 'u') return Headers;
    b(
      'Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill',
    );
  }
  static response() {
    if (this.responseImpl) return this.responseImpl;
    if (typeof self < 'u' && 'Response' in self) return self.Response;
    if (typeof globalThis < 'u' && globalThis.Response)
      return globalThis.Response;
    if (typeof Response < 'u') return Response;
    b(
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
 */ const Ii = {
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
 */ const yi = new le(3e4, 6e4);
function F(n, e) {
  return n.tenantId && !e.tenantId
    ? Object.assign(Object.assign({}, e), { tenantId: n.tenantId })
    : e;
}
async function k(n, e, t, r, i = {}) {
  return rn(n, i, async () => {
    let s = {},
      o = {};
    r && (e === 'GET' ? (o = r) : (s = { body: JSON.stringify(r) }));
    const c = ae(Object.assign({ key: n.config.apiKey }, o)).slice(1),
      a = await n._getAdditionalHeaders();
    return (
      (a['Content-Type'] = 'application/json'),
      n.languageCode && (a['X-Firebase-Locale'] = n.languageCode),
      nn.fetch()(
        sn(n, n.config.apiHost, t, c),
        Object.assign(
          { method: e, headers: a, referrerPolicy: 'no-referrer' },
          s,
        ),
      )
    );
  });
}
async function rn(n, e, t) {
  n._canInitEmulator = !1;
  const r = Object.assign(Object.assign({}, Ii), e);
  try {
    const i = new Ei(n),
      s = await Promise.race([t(), i.promise]);
    i.clearNetworkTimeout();
    const o = await s.json();
    if ('needConfirmation' in o)
      throw fe(n, 'account-exists-with-different-credential', o);
    if (s.ok && !('errorMessage' in o)) return o;
    {
      const c = s.ok ? o.errorMessage : o.error.message,
        [a, l] = c.split(' : ');
      if (a === 'FEDERATED_USER_ID_ALREADY_LINKED')
        throw fe(n, 'credential-already-in-use', o);
      if (a === 'EMAIL_EXISTS') throw fe(n, 'email-already-in-use', o);
      if (a === 'USER_DISABLED') throw fe(n, 'user-disabled', o);
      const d = r[a] || a.toLowerCase().replace(/[_\s]+/g, '-');
      if (l) throw tn(n, d, l);
      m(n, d);
    }
  } catch (i) {
    if (i instanceof x) throw i;
    m(n, 'network-request-failed', { message: String(i) });
  }
}
async function ue(n, e, t, r, i = {}) {
  const s = await k(n, e, t, r, i);
  return (
    'mfaPendingCredential' in s &&
      m(n, 'multi-factor-auth-required', { _serverResponse: s }),
    s
  );
}
function sn(n, e, t, r) {
  const i = `${e}${t}?${r}`;
  return n.config.emulator ? Qe(n.config, i) : `${n.config.apiScheme}://${i}`;
}
function wi(n) {
  switch (n) {
    case 'ENFORCE':
      return 'ENFORCE';
    case 'AUDIT':
      return 'AUDIT';
    case 'OFF':
      return 'OFF';
    default:
      return 'ENFORCEMENT_STATE_UNSPECIFIED';
  }
}
class Ei {
  constructor(e) {
    (this.auth = e),
      (this.timer = null),
      (this.promise = new Promise((t, r) => {
        this.timer = setTimeout(
          () => r(v(this.auth, 'network-request-failed')),
          yi.get(),
        );
      }));
  }
  clearNetworkTimeout() {
    clearTimeout(this.timer);
  }
}
function fe(n, e, t) {
  const r = { appName: n.name };
  t.email && (r.email = t.email),
    t.phoneNumber && (r.phoneNumber = t.phoneNumber);
  const i = v(n, e, r);
  return (i.customData._tokenResponse = t), i;
}
function Et(n) {
  return n !== void 0 && n.enterprise !== void 0;
}
class bi {
  constructor(e) {
    if (
      ((this.siteKey = ''),
      (this.recaptchaEnforcementState = []),
      e.recaptchaKey === void 0)
    )
      throw new Error('recaptchaKey undefined');
    (this.siteKey = e.recaptchaKey.split('/')[3]),
      (this.recaptchaEnforcementState = e.recaptchaEnforcementState);
  }
  getProviderEnforcementState(e) {
    if (
      !this.recaptchaEnforcementState ||
      this.recaptchaEnforcementState.length === 0
    )
      return null;
    for (const t of this.recaptchaEnforcementState)
      if (t.provider && t.provider === e) return wi(t.enforcementState);
    return null;
  }
  isProviderEnabled(e) {
    return (
      this.getProviderEnforcementState(e) === 'ENFORCE' ||
      this.getProviderEnforcementState(e) === 'AUDIT'
    );
  }
}
async function Ti(n, e) {
  return k(n, 'GET', '/v2/recaptchaConfig', F(n, e));
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
 */ async function Si(n, e) {
  return k(n, 'POST', '/v1/accounts:delete', e);
}
async function on(n, e) {
  return k(n, 'POST', '/v1/accounts:lookup', e);
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
 */ function ne(n) {
  if (n)
    try {
      const e = new Date(Number(n));
      if (!isNaN(e.getTime())) return e.toUTCString();
    } catch {}
}
async function Ai(n, e = !1) {
  const t = y(n),
    r = await t.getIdToken(e),
    i = Ze(r);
  u(i && i.exp && i.auth_time && i.iat, t.auth, 'internal-error');
  const s = typeof i.firebase == 'object' ? i.firebase : void 0,
    o = s == null ? void 0 : s.sign_in_provider;
  return {
    claims: i,
    token: r,
    authTime: ne(xe(i.auth_time)),
    issuedAtTime: ne(xe(i.iat)),
    expirationTime: ne(xe(i.exp)),
    signInProvider: o || null,
    signInSecondFactor: (s == null ? void 0 : s.sign_in_second_factor) || null,
  };
}
function xe(n) {
  return Number(n) * 1e3;
}
function Ze(n) {
  const [e, t, r] = n.split('.');
  if (e === void 0 || t === void 0 || r === void 0)
    return pe('JWT malformed, contained fewer than 3 sections'), null;
  try {
    const i = jt(t);
    return i
      ? JSON.parse(i)
      : (pe('Failed to decode base64 JWT payload'), null);
  } catch (i) {
    return (
      pe(
        'Caught error parsing JWT payload as JSON',
        i == null ? void 0 : i.toString(),
      ),
      null
    );
  }
}
function bt(n) {
  const e = Ze(n);
  return (
    u(e, 'internal-error'),
    u(typeof e.exp < 'u', 'internal-error'),
    u(typeof e.iat < 'u', 'internal-error'),
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
 */ async function Q(n, e, t = !1) {
  if (t) return e;
  try {
    return await e;
  } catch (r) {
    throw (
      (r instanceof x &&
        Ci(r) &&
        n.auth.currentUser === n &&
        (await n.auth.signOut()),
      r)
    );
  }
}
function Ci({ code: n }) {
  return n === 'auth/user-disabled' || n === 'auth/user-token-expired';
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
 */ class Ri {
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
    var t;
    if (e) {
      const r = this.errorBackoff;
      return (this.errorBackoff = Math.min(this.errorBackoff * 2, 96e4)), r;
    } else {
      this.errorBackoff = 3e4;
      const i =
        ((t = this.user.stsTokenManager.expirationTime) !== null && t !== void 0
          ? t
          : 0) -
        Date.now() -
        3e5;
      return Math.max(0, i);
    }
  }
  schedule(e = !1) {
    if (!this.isRunning) return;
    const t = this.getInterval(e);
    this.timerId = setTimeout(async () => {
      await this.iteration();
    }, t);
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
 */ class ze {
  constructor(e, t) {
    (this.createdAt = e), (this.lastLoginAt = t), this._initializeTime();
  }
  _initializeTime() {
    (this.lastSignInTime = ne(this.lastLoginAt)),
      (this.creationTime = ne(this.createdAt));
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
 */ async function we(n) {
  var e;
  const t = n.auth,
    r = await n.getIdToken(),
    i = await Q(n, on(t, { idToken: r }));
  u(i == null ? void 0 : i.users.length, t, 'internal-error');
  const s = i.users[0];
  n._notifyReloadListener(s);
  const o =
      !((e = s.providerUserInfo) === null || e === void 0) && e.length
        ? an(s.providerUserInfo)
        : [],
    c = Pi(n.providerData, o),
    a = n.isAnonymous,
    l = !(n.email && s.passwordHash) && !(c != null && c.length),
    d = a ? l : !1,
    h = {
      uid: s.localId,
      displayName: s.displayName || null,
      photoURL: s.photoUrl || null,
      email: s.email || null,
      emailVerified: s.emailVerified || !1,
      phoneNumber: s.phoneNumber || null,
      tenantId: s.tenantId || null,
      providerData: c,
      metadata: new ze(s.createdAt, s.lastLoginAt),
      isAnonymous: d,
    };
  Object.assign(n, h);
}
async function ki(n) {
  const e = y(n);
  await we(e),
    await e.auth._persistUserIfCurrent(e),
    e.auth._notifyListenersIfCurrent(e);
}
function Pi(n, e) {
  return [
    ...n.filter((r) => !e.some((i) => i.providerId === r.providerId)),
    ...e,
  ];
}
function an(n) {
  return n.map((e) => {
    var { providerId: t } = e,
      r = Ye(e, ['providerId']);
    return {
      providerId: t,
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
 */ async function Oi(n, e) {
  const t = await rn(n, {}, async () => {
    const r = ae({ grant_type: 'refresh_token', refresh_token: e }).slice(1),
      { tokenApiHost: i, apiKey: s } = n.config,
      o = sn(n, i, '/v1/token', `key=${s}`),
      c = await n._getAdditionalHeaders();
    return (
      (c['Content-Type'] = 'application/x-www-form-urlencoded'),
      nn.fetch()(o, { method: 'POST', headers: c, body: r })
    );
  });
  return {
    accessToken: t.access_token,
    expiresIn: t.expires_in,
    refreshToken: t.refresh_token,
  };
}
async function Ni(n, e) {
  return k(n, 'POST', '/v2/accounts:revokeToken', F(n, e));
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
 */ class K {
  constructor() {
    (this.refreshToken = null),
      (this.accessToken = null),
      (this.expirationTime = null);
  }
  get isExpired() {
    return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
  }
  updateFromServerResponse(e) {
    u(e.idToken, 'internal-error'),
      u(typeof e.idToken < 'u', 'internal-error'),
      u(typeof e.refreshToken < 'u', 'internal-error');
    const t =
      'expiresIn' in e && typeof e.expiresIn < 'u'
        ? Number(e.expiresIn)
        : bt(e.idToken);
    this.updateTokensAndExpiration(e.idToken, e.refreshToken, t);
  }
  updateFromIdToken(e) {
    u(e.length !== 0, 'internal-error');
    const t = bt(e);
    this.updateTokensAndExpiration(e, null, t);
  }
  async getToken(e, t = !1) {
    return !t && this.accessToken && !this.isExpired
      ? this.accessToken
      : (u(this.refreshToken, e, 'user-token-expired'),
        this.refreshToken
          ? (await this.refresh(e, this.refreshToken), this.accessToken)
          : null);
  }
  clearRefreshToken() {
    this.refreshToken = null;
  }
  async refresh(e, t) {
    const { accessToken: r, refreshToken: i, expiresIn: s } = await Oi(e, t);
    this.updateTokensAndExpiration(r, i, Number(s));
  }
  updateTokensAndExpiration(e, t, r) {
    (this.refreshToken = t || null),
      (this.accessToken = e || null),
      (this.expirationTime = Date.now() + r * 1e3);
  }
  static fromJSON(e, t) {
    const { refreshToken: r, accessToken: i, expirationTime: s } = t,
      o = new K();
    return (
      r &&
        (u(typeof r == 'string', 'internal-error', { appName: e }),
        (o.refreshToken = r)),
      i &&
        (u(typeof i == 'string', 'internal-error', { appName: e }),
        (o.accessToken = i)),
      s &&
        (u(typeof s == 'number', 'internal-error', { appName: e }),
        (o.expirationTime = s)),
      o
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
    return Object.assign(new K(), this.toJSON());
  }
  _performRefresh() {
    return b('not implemented');
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
 */ function P(n, e) {
  u(typeof n == 'string' || typeof n > 'u', 'internal-error', { appName: e });
}
class T {
  constructor(e) {
    var { uid: t, auth: r, stsTokenManager: i } = e,
      s = Ye(e, ['uid', 'auth', 'stsTokenManager']);
    (this.providerId = 'firebase'),
      (this.proactiveRefresh = new Ri(this)),
      (this.reloadUserInfo = null),
      (this.reloadListener = null),
      (this.uid = t),
      (this.auth = r),
      (this.stsTokenManager = i),
      (this.accessToken = i.accessToken),
      (this.displayName = s.displayName || null),
      (this.email = s.email || null),
      (this.emailVerified = s.emailVerified || !1),
      (this.phoneNumber = s.phoneNumber || null),
      (this.photoURL = s.photoURL || null),
      (this.isAnonymous = s.isAnonymous || !1),
      (this.tenantId = s.tenantId || null),
      (this.providerData = s.providerData ? [...s.providerData] : []),
      (this.metadata = new ze(s.createdAt || void 0, s.lastLoginAt || void 0));
  }
  async getIdToken(e) {
    const t = await Q(this, this.stsTokenManager.getToken(this.auth, e));
    return (
      u(t, this.auth, 'internal-error'),
      this.accessToken !== t &&
        ((this.accessToken = t),
        await this.auth._persistUserIfCurrent(this),
        this.auth._notifyListenersIfCurrent(this)),
      t
    );
  }
  getIdTokenResult(e) {
    return Ai(this, e);
  }
  reload() {
    return ki(this);
  }
  _assign(e) {
    this !== e &&
      (u(this.uid === e.uid, this.auth, 'internal-error'),
      (this.displayName = e.displayName),
      (this.photoURL = e.photoURL),
      (this.email = e.email),
      (this.emailVerified = e.emailVerified),
      (this.phoneNumber = e.phoneNumber),
      (this.isAnonymous = e.isAnonymous),
      (this.tenantId = e.tenantId),
      (this.providerData = e.providerData.map((t) => Object.assign({}, t))),
      this.metadata._copy(e.metadata),
      this.stsTokenManager._assign(e.stsTokenManager));
  }
  _clone(e) {
    const t = new T(
      Object.assign(Object.assign({}, this), {
        auth: e,
        stsTokenManager: this.stsTokenManager._clone(),
      }),
    );
    return t.metadata._copy(this.metadata), t;
  }
  _onReload(e) {
    u(!this.reloadListener, this.auth, 'internal-error'),
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
  async _updateTokensIfNecessary(e, t = !1) {
    let r = !1;
    e.idToken &&
      e.idToken !== this.stsTokenManager.accessToken &&
      (this.stsTokenManager.updateFromServerResponse(e), (r = !0)),
      t && (await we(this)),
      await this.auth._persistUserIfCurrent(this),
      r && this.auth._notifyListenersIfCurrent(this);
  }
  async delete() {
    if (_(this.auth.app)) return Promise.reject(A(this.auth));
    const e = await this.getIdToken();
    return (
      await Q(this, Si(this.auth, { idToken: e })),
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
  static _fromJSON(e, t) {
    var r, i, s, o, c, a, l, d;
    const h = (r = t.displayName) !== null && r !== void 0 ? r : void 0,
      g = (i = t.email) !== null && i !== void 0 ? i : void 0,
      w = (s = t.phoneNumber) !== null && s !== void 0 ? s : void 0,
      j = (o = t.photoURL) !== null && o !== void 0 ? o : void 0,
      st = (c = t.tenantId) !== null && c !== void 0 ? c : void 0,
      Re = (a = t._redirectEventId) !== null && a !== void 0 ? a : void 0,
      ot = (l = t.createdAt) !== null && l !== void 0 ? l : void 0,
      at = (d = t.lastLoginAt) !== null && d !== void 0 ? d : void 0,
      {
        uid: ke,
        emailVerified: ct,
        isAnonymous: lt,
        providerData: Pe,
        stsTokenManager: ut,
      } = t;
    u(ke && ut, e, 'internal-error');
    const Mn = K.fromJSON(this.name, ut);
    u(typeof ke == 'string', e, 'internal-error'),
      P(h, e.name),
      P(g, e.name),
      u(typeof ct == 'boolean', e, 'internal-error'),
      u(typeof lt == 'boolean', e, 'internal-error'),
      P(w, e.name),
      P(j, e.name),
      P(st, e.name),
      P(Re, e.name),
      P(ot, e.name),
      P(at, e.name);
    const Oe = new T({
      uid: ke,
      auth: e,
      email: g,
      emailVerified: ct,
      displayName: h,
      isAnonymous: lt,
      photoURL: j,
      phoneNumber: w,
      tenantId: st,
      stsTokenManager: Mn,
      createdAt: ot,
      lastLoginAt: at,
    });
    return (
      Pe &&
        Array.isArray(Pe) &&
        (Oe.providerData = Pe.map((Un) => Object.assign({}, Un))),
      Re && (Oe._redirectEventId = Re),
      Oe
    );
  }
  static async _fromIdTokenResponse(e, t, r = !1) {
    const i = new K();
    i.updateFromServerResponse(t);
    const s = new T({
      uid: t.localId,
      auth: e,
      stsTokenManager: i,
      isAnonymous: r,
    });
    return await we(s), s;
  }
  static async _fromGetAccountInfoResponse(e, t, r) {
    const i = t.users[0];
    u(i.localId !== void 0, 'internal-error');
    const s = i.providerUserInfo !== void 0 ? an(i.providerUserInfo) : [],
      o = !(i.email && i.passwordHash) && !(s != null && s.length),
      c = new K();
    c.updateFromIdToken(r);
    const a = new T({
        uid: i.localId,
        auth: e,
        stsTokenManager: c,
        isAnonymous: o,
      }),
      l = {
        uid: i.localId,
        displayName: i.displayName || null,
        photoURL: i.photoUrl || null,
        email: i.email || null,
        emailVerified: i.emailVerified || !1,
        phoneNumber: i.phoneNumber || null,
        tenantId: i.tenantId || null,
        providerData: s,
        metadata: new ze(i.createdAt, i.lastLoginAt),
        isAnonymous: !(i.email && i.passwordHash) && !(s != null && s.length),
      };
    return Object.assign(a, l), a;
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
 */ const Tt = new Map();
function S(n) {
  R(n instanceof Function, 'Expected a class definition');
  let e = Tt.get(n);
  return e
    ? (R(e instanceof n, 'Instance stored in cache mismatched with class'), e)
    : ((e = new n()), Tt.set(n, e), e);
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
  constructor() {
    (this.type = 'NONE'), (this.storage = {});
  }
  async _isAvailable() {
    return !0;
  }
  async _set(e, t) {
    this.storage[e] = t;
  }
  async _get(e) {
    const t = this.storage[e];
    return t === void 0 ? null : t;
  }
  async _remove(e) {
    delete this.storage[e];
  }
  _addListener(e, t) {}
  _removeListener(e, t) {}
}
cn.type = 'NONE';
const St = cn;
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
 */ function ge(n, e, t) {
  return `firebase:${n}:${e}:${t}`;
}
class q {
  constructor(e, t, r) {
    (this.persistence = e), (this.auth = t), (this.userKey = r);
    const { config: i, name: s } = this.auth;
    (this.fullUserKey = ge(this.userKey, i.apiKey, s)),
      (this.fullPersistenceKey = ge('persistence', i.apiKey, s)),
      (this.boundEventHandler = t._onStorageEvent.bind(t)),
      this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
  }
  setCurrentUser(e) {
    return this.persistence._set(this.fullUserKey, e.toJSON());
  }
  async getCurrentUser() {
    const e = await this.persistence._get(this.fullUserKey);
    return e ? T._fromJSON(this.auth, e) : null;
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
    const t = await this.getCurrentUser();
    if ((await this.removeCurrentUser(), (this.persistence = e), t))
      return this.setCurrentUser(t);
  }
  delete() {
    this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
  }
  static async create(e, t, r = 'authUser') {
    if (!t.length) return new q(S(St), e, r);
    const i = (
      await Promise.all(
        t.map(async (l) => {
          if (await l._isAvailable()) return l;
        }),
      )
    ).filter((l) => l);
    let s = i[0] || S(St);
    const o = ge(r, e.config.apiKey, e.name);
    let c = null;
    for (const l of t)
      try {
        const d = await l._get(o);
        if (d) {
          const h = T._fromJSON(e, d);
          l !== s && (c = h), (s = l);
          break;
        }
      } catch {}
    const a = i.filter((l) => l._shouldAllowMigration);
    return !s._shouldAllowMigration || !a.length
      ? new q(s, e, r)
      : ((s = a[0]),
        c && (await s._set(o, c.toJSON())),
        await Promise.all(
          t.map(async (l) => {
            if (l !== s)
              try {
                await l._remove(o);
              } catch {}
          }),
        ),
        new q(s, e, r));
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
 */ function At(n) {
  const e = n.toLowerCase();
  if (e.includes('opera/') || e.includes('opr/') || e.includes('opios/'))
    return 'Opera';
  if (hn(e)) return 'IEMobile';
  if (e.includes('msie') || e.includes('trident/')) return 'IE';
  if (e.includes('edge/')) return 'Edge';
  if (ln(e)) return 'Firefox';
  if (e.includes('silk/')) return 'Silk';
  if (pn(e)) return 'Blackberry';
  if (gn(e)) return 'Webos';
  if (un(e)) return 'Safari';
  if ((e.includes('chrome/') || dn(e)) && !e.includes('edge/')) return 'Chrome';
  if (fn(e)) return 'Android';
  {
    const t = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
      r = n.match(t);
    if ((r == null ? void 0 : r.length) === 2) return r[1];
  }
  return 'Other';
}
function ln(n = p()) {
  return /firefox\//i.test(n);
}
function un(n = p()) {
  const e = n.toLowerCase();
  return (
    e.includes('safari/') &&
    !e.includes('chrome/') &&
    !e.includes('crios/') &&
    !e.includes('android')
  );
}
function dn(n = p()) {
  return /crios\//i.test(n);
}
function hn(n = p()) {
  return /iemobile/i.test(n);
}
function fn(n = p()) {
  return /android/i.test(n);
}
function pn(n = p()) {
  return /blackberry/i.test(n);
}
function gn(n = p()) {
  return /webos/i.test(n);
}
function et(n = p()) {
  return (
    /iphone|ipad|ipod/i.test(n) || (/macintosh/i.test(n) && /mobile/i.test(n))
  );
}
function Di(n = p()) {
  var e;
  return (
    et(n) &&
    !!(!((e = window.navigator) === null || e === void 0) && e.standalone)
  );
}
function Li() {
  return Xn() && document.documentMode === 10;
}
function mn(n = p()) {
  return et(n) || fn(n) || gn(n) || pn(n) || /windows phone/i.test(n) || hn(n);
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
 */ function _n(n, e = []) {
  let t;
  switch (n) {
    case 'Browser':
      t = At(p());
      break;
    case 'Worker':
      t = `${At(p())}-${n}`;
      break;
    default:
      t = n;
  }
  const r = e.length ? e.join(',') : 'FirebaseCore-web';
  return `${t}/JsCore/${ce}/${r}`;
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
 */ class Mi {
  constructor(e) {
    (this.auth = e), (this.queue = []);
  }
  pushCallback(e, t) {
    const r = (s) =>
      new Promise((o, c) => {
        try {
          const a = e(s);
          o(a);
        } catch (a) {
          c(a);
        }
      });
    (r.onAbort = t), this.queue.push(r);
    const i = this.queue.length - 1;
    return () => {
      this.queue[i] = () => Promise.resolve();
    };
  }
  async runMiddleware(e) {
    if (this.auth.currentUser === e) return;
    const t = [];
    try {
      for (const r of this.queue) await r(e), r.onAbort && t.push(r.onAbort);
    } catch (r) {
      t.reverse();
      for (const i of t)
        try {
          i();
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
 */ async function Ui(n, e = {}) {
  return k(n, 'GET', '/v2/passwordPolicy', F(n, e));
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
 */ const xi = 6;
class Fi {
  constructor(e) {
    var t, r, i, s;
    const o = e.customStrengthOptions;
    (this.customStrengthOptions = {}),
      (this.customStrengthOptions.minPasswordLength =
        (t = o.minPasswordLength) !== null && t !== void 0 ? t : xi),
      o.maxPasswordLength &&
        (this.customStrengthOptions.maxPasswordLength = o.maxPasswordLength),
      o.containsLowercaseCharacter !== void 0 &&
        (this.customStrengthOptions.containsLowercaseLetter =
          o.containsLowercaseCharacter),
      o.containsUppercaseCharacter !== void 0 &&
        (this.customStrengthOptions.containsUppercaseLetter =
          o.containsUppercaseCharacter),
      o.containsNumericCharacter !== void 0 &&
        (this.customStrengthOptions.containsNumericCharacter =
          o.containsNumericCharacter),
      o.containsNonAlphanumericCharacter !== void 0 &&
        (this.customStrengthOptions.containsNonAlphanumericCharacter =
          o.containsNonAlphanumericCharacter),
      (this.enforcementState = e.enforcementState),
      this.enforcementState === 'ENFORCEMENT_STATE_UNSPECIFIED' &&
        (this.enforcementState = 'OFF'),
      (this.allowedNonAlphanumericCharacters =
        (i =
          (r = e.allowedNonAlphanumericCharacters) === null || r === void 0
            ? void 0
            : r.join('')) !== null && i !== void 0
          ? i
          : ''),
      (this.forceUpgradeOnSignin =
        (s = e.forceUpgradeOnSignin) !== null && s !== void 0 ? s : !1),
      (this.schemaVersion = e.schemaVersion);
  }
  validatePassword(e) {
    var t, r, i, s, o, c;
    const a = { isValid: !0, passwordPolicy: this };
    return (
      this.validatePasswordLengthOptions(e, a),
      this.validatePasswordCharacterOptions(e, a),
      a.isValid &&
        (a.isValid =
          (t = a.meetsMinPasswordLength) !== null && t !== void 0 ? t : !0),
      a.isValid &&
        (a.isValid =
          (r = a.meetsMaxPasswordLength) !== null && r !== void 0 ? r : !0),
      a.isValid &&
        (a.isValid =
          (i = a.containsLowercaseLetter) !== null && i !== void 0 ? i : !0),
      a.isValid &&
        (a.isValid =
          (s = a.containsUppercaseLetter) !== null && s !== void 0 ? s : !0),
      a.isValid &&
        (a.isValid =
          (o = a.containsNumericCharacter) !== null && o !== void 0 ? o : !0),
      a.isValid &&
        (a.isValid =
          (c = a.containsNonAlphanumericCharacter) !== null && c !== void 0
            ? c
            : !0),
      a
    );
  }
  validatePasswordLengthOptions(e, t) {
    const r = this.customStrengthOptions.minPasswordLength,
      i = this.customStrengthOptions.maxPasswordLength;
    r && (t.meetsMinPasswordLength = e.length >= r),
      i && (t.meetsMaxPasswordLength = e.length <= i);
  }
  validatePasswordCharacterOptions(e, t) {
    this.updatePasswordCharacterOptionsStatuses(t, !1, !1, !1, !1);
    let r;
    for (let i = 0; i < e.length; i++)
      (r = e.charAt(i)),
        this.updatePasswordCharacterOptionsStatuses(
          t,
          r >= 'a' && r <= 'z',
          r >= 'A' && r <= 'Z',
          r >= '0' && r <= '9',
          this.allowedNonAlphanumericCharacters.includes(r),
        );
  }
  updatePasswordCharacterOptionsStatuses(e, t, r, i, s) {
    this.customStrengthOptions.containsLowercaseLetter &&
      (e.containsLowercaseLetter || (e.containsLowercaseLetter = t)),
      this.customStrengthOptions.containsUppercaseLetter &&
        (e.containsUppercaseLetter || (e.containsUppercaseLetter = r)),
      this.customStrengthOptions.containsNumericCharacter &&
        (e.containsNumericCharacter || (e.containsNumericCharacter = i)),
      this.customStrengthOptions.containsNonAlphanumericCharacter &&
        (e.containsNonAlphanumericCharacter ||
          (e.containsNonAlphanumericCharacter = s));
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
 */ class Bi {
  constructor(e, t, r, i) {
    (this.app = e),
      (this.heartbeatServiceProvider = t),
      (this.appCheckServiceProvider = r),
      (this.config = i),
      (this.currentUser = null),
      (this.emulatorConfig = null),
      (this.operations = Promise.resolve()),
      (this.authStateSubscription = new Ct(this)),
      (this.idTokenSubscription = new Ct(this)),
      (this.beforeStateQueue = new Mi(this)),
      (this.redirectUser = null),
      (this.isProactiveRefreshEnabled = !1),
      (this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1),
      (this._canInitEmulator = !0),
      (this._isInitialized = !1),
      (this._deleted = !1),
      (this._initializationPromise = null),
      (this._popupRedirectResolver = null),
      (this._errorFactory = en),
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
      (this.clientVersion = i.sdkClientVersion);
  }
  _initializeWithPersistence(e, t) {
    return (
      t && (this._popupRedirectResolver = S(t)),
      (this._initializationPromise = this.queue(async () => {
        var r, i;
        if (
          !this._deleted &&
          ((this.persistenceManager = await q.create(this, e)), !this._deleted)
        ) {
          if (
            !((r = this._popupRedirectResolver) === null || r === void 0) &&
            r._shouldInitProactively
          )
            try {
              await this._popupRedirectResolver._initialize(this);
            } catch {}
          await this.initializeCurrentUser(t),
            (this.lastNotifiedUid =
              ((i = this.currentUser) === null || i === void 0
                ? void 0
                : i.uid) || null),
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
      const t = await on(this, { idToken: e }),
        r = await T._fromGetAccountInfoResponse(this, t, e);
      await this.directlySetCurrentUser(r);
    } catch (t) {
      console.warn(
        'FirebaseServerApp could not login user with provided authIdToken: ',
        t,
      ),
        await this.directlySetCurrentUser(null);
    }
  }
  async initializeCurrentUser(e) {
    var t;
    if (_(this.app)) {
      const o = this.app.settings.authIdToken;
      return o
        ? new Promise((c) => {
            setTimeout(() =>
              this.initializeCurrentUserFromIdToken(o).then(c, c),
            );
          })
        : this.directlySetCurrentUser(null);
    }
    const r = await this.assertedPersistence.getCurrentUser();
    let i = r,
      s = !1;
    if (e && this.config.authDomain) {
      await this.getOrInitRedirectPersistenceManager();
      const o =
          (t = this.redirectUser) === null || t === void 0
            ? void 0
            : t._redirectEventId,
        c = i == null ? void 0 : i._redirectEventId,
        a = await this.tryRedirectSignIn(e);
      (!o || o === c) && a != null && a.user && ((i = a.user), (s = !0));
    }
    if (!i) return this.directlySetCurrentUser(null);
    if (!i._redirectEventId) {
      if (s)
        try {
          await this.beforeStateQueue.runMiddleware(i);
        } catch (o) {
          (i = r),
            this._popupRedirectResolver._overrideRedirectResult(this, () =>
              Promise.reject(o),
            );
        }
      return i
        ? this.reloadAndSetCurrentUserOrClear(i)
        : this.directlySetCurrentUser(null);
    }
    return (
      u(this._popupRedirectResolver, this, 'argument-error'),
      await this.getOrInitRedirectPersistenceManager(),
      this.redirectUser &&
      this.redirectUser._redirectEventId === i._redirectEventId
        ? this.directlySetCurrentUser(i)
        : this.reloadAndSetCurrentUserOrClear(i)
    );
  }
  async tryRedirectSignIn(e) {
    let t = null;
    try {
      t = await this._popupRedirectResolver._completeRedirectFn(this, e, !0);
    } catch {
      await this._setRedirectUser(null);
    }
    return t;
  }
  async reloadAndSetCurrentUserOrClear(e) {
    try {
      await we(e);
    } catch (t) {
      if ((t == null ? void 0 : t.code) !== 'auth/network-request-failed')
        return this.directlySetCurrentUser(null);
    }
    return this.directlySetCurrentUser(e);
  }
  useDeviceLanguage() {
    this.languageCode = vi();
  }
  async _delete() {
    this._deleted = !0;
  }
  async updateCurrentUser(e) {
    if (_(this.app)) return Promise.reject(A(this));
    const t = e ? y(e) : null;
    return (
      t &&
        u(
          t.auth.config.apiKey === this.config.apiKey,
          this,
          'invalid-user-token',
        ),
      this._updateCurrentUser(t && t._clone(this))
    );
  }
  async _updateCurrentUser(e, t = !1) {
    if (!this._deleted)
      return (
        e && u(this.tenantId === e.tenantId, this, 'tenant-id-mismatch'),
        t || (await this.beforeStateQueue.runMiddleware(e)),
        this.queue(async () => {
          await this.directlySetCurrentUser(e), this.notifyAuthListeners();
        })
      );
  }
  async signOut() {
    return _(this.app)
      ? Promise.reject(A(this))
      : (await this.beforeStateQueue.runMiddleware(null),
        (this.redirectPersistenceManager || this._popupRedirectResolver) &&
          (await this._setRedirectUser(null)),
        this._updateCurrentUser(null, !0));
  }
  setPersistence(e) {
    return _(this.app)
      ? Promise.reject(A(this))
      : this.queue(async () => {
          await this.assertedPersistence.setPersistence(S(e));
        });
  }
  _getRecaptchaConfig() {
    return this.tenantId == null
      ? this._agentRecaptchaConfig
      : this._tenantRecaptchaConfigs[this.tenantId];
  }
  async validatePassword(e) {
    this._getPasswordPolicyInternal() || (await this._updatePasswordPolicy());
    const t = this._getPasswordPolicyInternal();
    return t.schemaVersion !== this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION
      ? Promise.reject(
          this._errorFactory.create(
            'unsupported-password-policy-schema-version',
            {},
          ),
        )
      : t.validatePassword(e);
  }
  _getPasswordPolicyInternal() {
    return this.tenantId === null
      ? this._projectPasswordPolicy
      : this._tenantPasswordPolicies[this.tenantId];
  }
  async _updatePasswordPolicy() {
    const e = await Ui(this),
      t = new Fi(e);
    this.tenantId === null
      ? (this._projectPasswordPolicy = t)
      : (this._tenantPasswordPolicies[this.tenantId] = t);
  }
  _getPersistence() {
    return this.assertedPersistence.persistence.type;
  }
  _updateErrorMap(e) {
    this._errorFactory = new oe('auth', 'Firebase', e());
  }
  onAuthStateChanged(e, t, r) {
    return this.registerStateListener(this.authStateSubscription, e, t, r);
  }
  beforeAuthStateChanged(e, t) {
    return this.beforeStateQueue.pushCallback(e, t);
  }
  onIdTokenChanged(e, t, r) {
    return this.registerStateListener(this.idTokenSubscription, e, t, r);
  }
  authStateReady() {
    return new Promise((e, t) => {
      if (this.currentUser) e();
      else {
        const r = this.onAuthStateChanged(() => {
          r(), e();
        }, t);
      }
    });
  }
  async revokeAccessToken(e) {
    if (this.currentUser) {
      const t = await this.currentUser.getIdToken(),
        r = {
          providerId: 'apple.com',
          tokenType: 'ACCESS_TOKEN',
          token: e,
          idToken: t,
        };
      this.tenantId != null && (r.tenantId = this.tenantId), await Ni(this, r);
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
  async _setRedirectUser(e, t) {
    const r = await this.getOrInitRedirectPersistenceManager(t);
    return e === null ? r.removeCurrentUser() : r.setCurrentUser(e);
  }
  async getOrInitRedirectPersistenceManager(e) {
    if (!this.redirectPersistenceManager) {
      const t = (e && S(e)) || this._popupRedirectResolver;
      u(t, this, 'argument-error'),
        (this.redirectPersistenceManager = await q.create(
          this,
          [S(t._redirectPersistence)],
          'redirectUser',
        )),
        (this.redirectUser =
          await this.redirectPersistenceManager.getCurrentUser());
    }
    return this.redirectPersistenceManager;
  }
  async _redirectUserForId(e) {
    var t, r;
    return (
      this._isInitialized && (await this.queue(async () => {})),
      ((t = this._currentUser) === null || t === void 0
        ? void 0
        : t._redirectEventId) === e
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
    var e, t;
    if (!this._isInitialized) return;
    this.idTokenSubscription.next(this.currentUser);
    const r =
      (t = (e = this.currentUser) === null || e === void 0 ? void 0 : e.uid) !==
        null && t !== void 0
        ? t
        : null;
    this.lastNotifiedUid !== r &&
      ((this.lastNotifiedUid = r),
      this.authStateSubscription.next(this.currentUser));
  }
  registerStateListener(e, t, r, i) {
    if (this._deleted) return () => {};
    const s = typeof t == 'function' ? t : t.next.bind(t);
    let o = !1;
    const c = this._isInitialized
      ? Promise.resolve()
      : this._initializationPromise;
    if (
      (u(c, this, 'internal-error'),
      c.then(() => {
        o || s(this.currentUser);
      }),
      typeof t == 'function')
    ) {
      const a = e.addObserver(t, r, i);
      return () => {
        (o = !0), a();
      };
    } else {
      const a = e.addObserver(t);
      return () => {
        (o = !0), a();
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
      u(this.persistenceManager, this, 'internal-error'),
      this.persistenceManager
    );
  }
  _logFramework(e) {
    !e ||
      this.frameworks.includes(e) ||
      (this.frameworks.push(e),
      this.frameworks.sort(),
      (this.clientVersion = _n(
        this.config.clientPlatform,
        this._getFrameworks(),
      )));
  }
  _getFrameworks() {
    return this.frameworks;
  }
  async _getAdditionalHeaders() {
    var e;
    const t = { 'X-Client-Version': this.clientVersion };
    this.app.options.appId && (t['X-Firebase-gmpid'] = this.app.options.appId);
    const r = await ((e = this.heartbeatServiceProvider.getImmediate({
      optional: !0,
    })) === null || e === void 0
      ? void 0
      : e.getHeartbeatsHeader());
    r && (t['X-Firebase-Client'] = r);
    const i = await this._getAppCheckToken();
    return i && (t['X-Firebase-AppCheck'] = i), t;
  }
  async _getAppCheckToken() {
    var e;
    const t = await ((e = this.appCheckServiceProvider.getImmediate({
      optional: !0,
    })) === null || e === void 0
      ? void 0
      : e.getToken());
    return (
      t != null &&
        t.error &&
        gi(`Error while retrieving App Check token: ${t.error}`),
      t == null ? void 0 : t.token
    );
  }
}
function $(n) {
  return y(n);
}
class Ct {
  constructor(e) {
    (this.auth = e),
      (this.observer = null),
      (this.addObserver = ir((t) => (this.observer = t)));
  }
  get next() {
    return (
      u(this.observer, this.auth, 'internal-error'),
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
 */ let Se = {
  async loadJS() {
    throw new Error('Unable to load external scripts');
  },
  recaptchaV2Script: '',
  recaptchaEnterpriseScript: '',
  gapiScript: '',
};
function Vi(n) {
  Se = n;
}
function vn(n) {
  return Se.loadJS(n);
}
function Hi() {
  return Se.recaptchaEnterpriseScript;
}
function $i() {
  return Se.gapiScript;
}
function ji(n) {
  return `__${n}${Math.floor(Math.random() * 1e6)}`;
}
const Wi = 'recaptcha-enterprise',
  zi = 'NO_RECAPTCHA';
class Gi {
  constructor(e) {
    (this.type = Wi), (this.auth = $(e));
  }
  async verify(e = 'verify', t = !1) {
    async function r(s) {
      if (!t) {
        if (s.tenantId == null && s._agentRecaptchaConfig != null)
          return s._agentRecaptchaConfig.siteKey;
        if (
          s.tenantId != null &&
          s._tenantRecaptchaConfigs[s.tenantId] !== void 0
        )
          return s._tenantRecaptchaConfigs[s.tenantId].siteKey;
      }
      return new Promise(async (o, c) => {
        Ti(s, {
          clientType: 'CLIENT_TYPE_WEB',
          version: 'RECAPTCHA_ENTERPRISE',
        })
          .then((a) => {
            if (a.recaptchaKey === void 0)
              c(new Error('recaptcha Enterprise site key undefined'));
            else {
              const l = new bi(a);
              return (
                s.tenantId == null
                  ? (s._agentRecaptchaConfig = l)
                  : (s._tenantRecaptchaConfigs[s.tenantId] = l),
                o(l.siteKey)
              );
            }
          })
          .catch((a) => {
            c(a);
          });
      });
    }
    function i(s, o, c) {
      const a = window.grecaptcha;
      Et(a)
        ? a.enterprise.ready(() => {
            a.enterprise
              .execute(s, { action: e })
              .then((l) => {
                o(l);
              })
              .catch(() => {
                o(zi);
              });
          })
        : c(Error('No reCAPTCHA enterprise script loaded.'));
    }
    return new Promise((s, o) => {
      r(this.auth)
        .then((c) => {
          if (!t && Et(window.grecaptcha)) i(c, s, o);
          else {
            if (typeof window > 'u') {
              o(new Error('RecaptchaVerifier is only supported in browser'));
              return;
            }
            let a = Hi();
            a.length !== 0 && (a += c),
              vn(a)
                .then(() => {
                  i(c, s, o);
                })
                .catch((l) => {
                  o(l);
                });
          }
        })
        .catch((c) => {
          o(c);
        });
    });
  }
}
async function Rt(n, e, t, r = !1) {
  const i = new Gi(n);
  let s;
  try {
    s = await i.verify(t);
  } catch {
    s = await i.verify(t, !0);
  }
  const o = Object.assign({}, e);
  return (
    r
      ? Object.assign(o, { captchaResp: s })
      : Object.assign(o, { captchaResponse: s }),
    Object.assign(o, { clientType: 'CLIENT_TYPE_WEB' }),
    Object.assign(o, { recaptchaVersion: 'RECAPTCHA_ENTERPRISE' }),
    o
  );
}
async function Ge(n, e, t, r) {
  var i;
  if (
    !((i = n._getRecaptchaConfig()) === null || i === void 0) &&
    i.isProviderEnabled('EMAIL_PASSWORD_PROVIDER')
  ) {
    const s = await Rt(n, e, t, t === 'getOobCode');
    return r(n, s);
  } else
    return r(n, e).catch(async (s) => {
      if (s.code === 'auth/missing-recaptcha-token') {
        console.log(
          `${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`,
        );
        const o = await Rt(n, e, t, t === 'getOobCode');
        return r(n, o);
      } else return Promise.reject(s);
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
 */ function Ki(n, e) {
  const t = Jt(n, 'auth');
  if (t.isInitialized()) {
    const i = t.getImmediate(),
      s = t.getOptions();
    if (ve(s, e ?? {})) return i;
    m(i, 'already-initialized');
  }
  return t.initialize({ options: e });
}
function qi(n, e) {
  const t = (e == null ? void 0 : e.persistence) || [],
    r = (Array.isArray(t) ? t : [t]).map(S);
  e != null && e.errorMap && n._updateErrorMap(e.errorMap),
    n._initializeWithPersistence(
      r,
      e == null ? void 0 : e.popupRedirectResolver,
    );
}
function Ji(n, e, t) {
  const r = $(n);
  u(r._canInitEmulator, r, 'emulator-config-failed'),
    u(/^https?:\/\//.test(e), r, 'invalid-emulator-scheme');
  const i = !1,
    s = In(e),
    { host: o, port: c } = Yi(e),
    a = c === null ? '' : `:${c}`;
  (r.config.emulator = { url: `${s}//${o}${a}/` }),
    (r.settings.appVerificationDisabledForTesting = !0),
    (r.emulatorConfig = Object.freeze({
      host: o,
      port: c,
      protocol: s.replace(':', ''),
      options: Object.freeze({ disableWarnings: i }),
    })),
    Xi();
}
function In(n) {
  const e = n.indexOf(':');
  return e < 0 ? '' : n.substr(0, e + 1);
}
function Yi(n) {
  const e = In(n),
    t = /(\/\/)?([^?#/]+)/.exec(n.substr(e.length));
  if (!t) return { host: '', port: null };
  const r = t[2].split('@').pop() || '',
    i = /^(\[[^\]]+\])(:|$)/.exec(r);
  if (i) {
    const s = i[1];
    return { host: s, port: kt(r.substr(s.length + 1)) };
  } else {
    const [s, o] = r.split(':');
    return { host: s, port: kt(o) };
  }
}
function kt(n) {
  if (!n) return null;
  const e = Number(n);
  return isNaN(e) ? null : e;
}
function Xi() {
  function n() {
    const e = document.createElement('p'),
      t = e.style;
    (e.innerText =
      'Running in emulator mode. Do not use with production credentials.'),
      (t.position = 'fixed'),
      (t.width = '100%'),
      (t.backgroundColor = '#ffffff'),
      (t.border = '.1em solid #000000'),
      (t.color = '#b50000'),
      (t.bottom = '0px'),
      (t.left = '0px'),
      (t.margin = '0px'),
      (t.zIndex = '10000'),
      (t.textAlign = 'center'),
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
        ? window.addEventListener('DOMContentLoaded', n)
        : n());
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
 */ class tt {
  constructor(e, t) {
    (this.providerId = e), (this.signInMethod = t);
  }
  toJSON() {
    return b('not implemented');
  }
  _getIdTokenResponse(e) {
    return b('not implemented');
  }
  _linkToIdToken(e, t) {
    return b('not implemented');
  }
  _getReauthenticationResolver(e) {
    return b('not implemented');
  }
}
async function Qi(n, e) {
  return k(n, 'POST', '/v1/accounts:signUp', e);
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
 */ async function Zi(n, e) {
  return ue(n, 'POST', '/v1/accounts:signInWithPassword', F(n, e));
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
 */ async function es(n, e) {
  return ue(n, 'POST', '/v1/accounts:signInWithEmailLink', F(n, e));
}
async function ts(n, e) {
  return ue(n, 'POST', '/v1/accounts:signInWithEmailLink', F(n, e));
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
 */ class se extends tt {
  constructor(e, t, r, i = null) {
    super('password', r),
      (this._email = e),
      (this._password = t),
      (this._tenantId = i);
  }
  static _fromEmailAndPassword(e, t) {
    return new se(e, t, 'password');
  }
  static _fromEmailAndCode(e, t, r = null) {
    return new se(e, t, 'emailLink', r);
  }
  toJSON() {
    return {
      email: this._email,
      password: this._password,
      signInMethod: this.signInMethod,
      tenantId: this._tenantId,
    };
  }
  static fromJSON(e) {
    const t = typeof e == 'string' ? JSON.parse(e) : e;
    if (t != null && t.email && t != null && t.password) {
      if (t.signInMethod === 'password')
        return this._fromEmailAndPassword(t.email, t.password);
      if (t.signInMethod === 'emailLink')
        return this._fromEmailAndCode(t.email, t.password, t.tenantId);
    }
    return null;
  }
  async _getIdTokenResponse(e) {
    switch (this.signInMethod) {
      case 'password':
        const t = {
          returnSecureToken: !0,
          email: this._email,
          password: this._password,
          clientType: 'CLIENT_TYPE_WEB',
        };
        return Ge(e, t, 'signInWithPassword', Zi);
      case 'emailLink':
        return es(e, { email: this._email, oobCode: this._password });
      default:
        m(e, 'internal-error');
    }
  }
  async _linkToIdToken(e, t) {
    switch (this.signInMethod) {
      case 'password':
        const r = {
          idToken: t,
          returnSecureToken: !0,
          email: this._email,
          password: this._password,
          clientType: 'CLIENT_TYPE_WEB',
        };
        return Ge(e, r, 'signUpPassword', Qi);
      case 'emailLink':
        return ts(e, {
          idToken: t,
          email: this._email,
          oobCode: this._password,
        });
      default:
        m(e, 'internal-error');
    }
  }
  _getReauthenticationResolver(e) {
    return this._getIdTokenResponse(e);
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
 */ async function J(n, e) {
  return ue(n, 'POST', '/v1/accounts:signInWithIdp', F(n, e));
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
 */ const ns = 'http://localhost';
class V extends tt {
  constructor() {
    super(...arguments), (this.pendingToken = null);
  }
  static _fromParams(e) {
    const t = new V(e.providerId, e.signInMethod);
    return (
      e.idToken || e.accessToken
        ? (e.idToken && (t.idToken = e.idToken),
          e.accessToken && (t.accessToken = e.accessToken),
          e.nonce && !e.pendingToken && (t.nonce = e.nonce),
          e.pendingToken && (t.pendingToken = e.pendingToken))
        : e.oauthToken && e.oauthTokenSecret
          ? ((t.accessToken = e.oauthToken), (t.secret = e.oauthTokenSecret))
          : m('argument-error'),
      t
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
    const t = typeof e == 'string' ? JSON.parse(e) : e,
      { providerId: r, signInMethod: i } = t,
      s = Ye(t, ['providerId', 'signInMethod']);
    if (!r || !i) return null;
    const o = new V(r, i);
    return (
      (o.idToken = s.idToken || void 0),
      (o.accessToken = s.accessToken || void 0),
      (o.secret = s.secret),
      (o.nonce = s.nonce),
      (o.pendingToken = s.pendingToken || null),
      o
    );
  }
  _getIdTokenResponse(e) {
    const t = this.buildRequest();
    return J(e, t);
  }
  _linkToIdToken(e, t) {
    const r = this.buildRequest();
    return (r.idToken = t), J(e, r);
  }
  _getReauthenticationResolver(e) {
    const t = this.buildRequest();
    return (t.autoCreate = !1), J(e, t);
  }
  buildRequest() {
    const e = { requestUri: ns, returnSecureToken: !0 };
    if (this.pendingToken) e.pendingToken = this.pendingToken;
    else {
      const t = {};
      this.idToken && (t.id_token = this.idToken),
        this.accessToken && (t.access_token = this.accessToken),
        this.secret && (t.oauth_token_secret = this.secret),
        (t.providerId = this.providerId),
        this.nonce && !this.pendingToken && (t.nonce = this.nonce),
        (e.postBody = ae(t));
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
 */ function rs(n) {
  switch (n) {
    case 'recoverEmail':
      return 'RECOVER_EMAIL';
    case 'resetPassword':
      return 'PASSWORD_RESET';
    case 'signIn':
      return 'EMAIL_SIGNIN';
    case 'verifyEmail':
      return 'VERIFY_EMAIL';
    case 'verifyAndChangeEmail':
      return 'VERIFY_AND_CHANGE_EMAIL';
    case 'revertSecondFactorAddition':
      return 'REVERT_SECOND_FACTOR_ADDITION';
    default:
      return null;
  }
}
function is(n) {
  const e = ee(te(n)).link,
    t = e ? ee(te(e)).deep_link_id : null,
    r = ee(te(n)).deep_link_id;
  return (r ? ee(te(r)).link : null) || r || t || e || n;
}
class nt {
  constructor(e) {
    var t, r, i, s, o, c;
    const a = ee(te(e)),
      l = (t = a.apiKey) !== null && t !== void 0 ? t : null,
      d = (r = a.oobCode) !== null && r !== void 0 ? r : null,
      h = rs((i = a.mode) !== null && i !== void 0 ? i : null);
    u(l && d && h, 'argument-error'),
      (this.apiKey = l),
      (this.operation = h),
      (this.code = d),
      (this.continueUrl =
        (s = a.continueUrl) !== null && s !== void 0 ? s : null),
      (this.languageCode =
        (o = a.languageCode) !== null && o !== void 0 ? o : null),
      (this.tenantId = (c = a.tenantId) !== null && c !== void 0 ? c : null);
  }
  static parseLink(e) {
    const t = is(e);
    try {
      return new nt(t);
    } catch {
      return null;
    }
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
 */ class Z {
  constructor() {
    this.providerId = Z.PROVIDER_ID;
  }
  static credential(e, t) {
    return se._fromEmailAndPassword(e, t);
  }
  static credentialWithLink(e, t) {
    const r = nt.parseLink(t);
    return u(r, 'argument-error'), se._fromEmailAndCode(e, r.code, r.tenantId);
  }
}
Z.PROVIDER_ID = 'password';
Z.EMAIL_PASSWORD_SIGN_IN_METHOD = 'password';
Z.EMAIL_LINK_SIGN_IN_METHOD = 'emailLink';
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
 */ class yn {
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
 */ class de extends yn {
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
 */ class O extends de {
  constructor() {
    super('facebook.com');
  }
  static credential(e) {
    return V._fromParams({
      providerId: O.PROVIDER_ID,
      signInMethod: O.FACEBOOK_SIGN_IN_METHOD,
      accessToken: e,
    });
  }
  static credentialFromResult(e) {
    return O.credentialFromTaggedObject(e);
  }
  static credentialFromError(e) {
    return O.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e || !('oauthAccessToken' in e) || !e.oauthAccessToken) return null;
    try {
      return O.credential(e.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
O.FACEBOOK_SIGN_IN_METHOD = 'facebook.com';
O.PROVIDER_ID = 'facebook.com';
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
 */ class N extends de {
  constructor() {
    super('google.com'), this.addScope('profile');
  }
  static credential(e, t) {
    return V._fromParams({
      providerId: N.PROVIDER_ID,
      signInMethod: N.GOOGLE_SIGN_IN_METHOD,
      idToken: e,
      accessToken: t,
    });
  }
  static credentialFromResult(e) {
    return N.credentialFromTaggedObject(e);
  }
  static credentialFromError(e) {
    return N.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e) return null;
    const { oauthIdToken: t, oauthAccessToken: r } = e;
    if (!t && !r) return null;
    try {
      return N.credential(t, r);
    } catch {
      return null;
    }
  }
}
N.GOOGLE_SIGN_IN_METHOD = 'google.com';
N.PROVIDER_ID = 'google.com';
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
 */ class D extends de {
  constructor() {
    super('github.com');
  }
  static credential(e) {
    return V._fromParams({
      providerId: D.PROVIDER_ID,
      signInMethod: D.GITHUB_SIGN_IN_METHOD,
      accessToken: e,
    });
  }
  static credentialFromResult(e) {
    return D.credentialFromTaggedObject(e);
  }
  static credentialFromError(e) {
    return D.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e || !('oauthAccessToken' in e) || !e.oauthAccessToken) return null;
    try {
      return D.credential(e.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
D.GITHUB_SIGN_IN_METHOD = 'github.com';
D.PROVIDER_ID = 'github.com';
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
 */ class L extends de {
  constructor() {
    super('twitter.com');
  }
  static credential(e, t) {
    return V._fromParams({
      providerId: L.PROVIDER_ID,
      signInMethod: L.TWITTER_SIGN_IN_METHOD,
      oauthToken: e,
      oauthTokenSecret: t,
    });
  }
  static credentialFromResult(e) {
    return L.credentialFromTaggedObject(e);
  }
  static credentialFromError(e) {
    return L.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e) return null;
    const { oauthAccessToken: t, oauthTokenSecret: r } = e;
    if (!t || !r) return null;
    try {
      return L.credential(t, r);
    } catch {
      return null;
    }
  }
}
L.TWITTER_SIGN_IN_METHOD = 'twitter.com';
L.PROVIDER_ID = 'twitter.com';
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
 */ async function ss(n, e) {
  return ue(n, 'POST', '/v1/accounts:signUp', F(n, e));
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
 */ class H {
  constructor(e) {
    (this.user = e.user),
      (this.providerId = e.providerId),
      (this._tokenResponse = e._tokenResponse),
      (this.operationType = e.operationType);
  }
  static async _fromIdTokenResponse(e, t, r, i = !1) {
    const s = await T._fromIdTokenResponse(e, r, i),
      o = Pt(r);
    return new H({
      user: s,
      providerId: o,
      _tokenResponse: r,
      operationType: t,
    });
  }
  static async _forOperation(e, t, r) {
    await e._updateTokensIfNecessary(r, !0);
    const i = Pt(r);
    return new H({
      user: e,
      providerId: i,
      _tokenResponse: r,
      operationType: t,
    });
  }
}
function Pt(n) {
  return n.providerId ? n.providerId : 'phoneNumber' in n ? 'phone' : null;
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
 */ class Ee extends x {
  constructor(e, t, r, i) {
    var s;
    super(t.code, t.message),
      (this.operationType = r),
      (this.user = i),
      Object.setPrototypeOf(this, Ee.prototype),
      (this.customData = {
        appName: e.name,
        tenantId: (s = e.tenantId) !== null && s !== void 0 ? s : void 0,
        _serverResponse: t.customData._serverResponse,
        operationType: r,
      });
  }
  static _fromErrorAndOperation(e, t, r, i) {
    return new Ee(e, t, r, i);
  }
}
function wn(n, e, t, r) {
  return (
    e === 'reauthenticate'
      ? t._getReauthenticationResolver(n)
      : t._getIdTokenResponse(n)
  ).catch((s) => {
    throw s.code === 'auth/multi-factor-auth-required'
      ? Ee._fromErrorAndOperation(n, s, e, r)
      : s;
  });
}
async function os(n, e, t = !1) {
  const r = await Q(n, e._linkToIdToken(n.auth, await n.getIdToken()), t);
  return H._forOperation(n, 'link', r);
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
 */ async function as(n, e, t = !1) {
  const { auth: r } = n;
  if (_(r.app)) return Promise.reject(A(r));
  const i = 'reauthenticate';
  try {
    const s = await Q(n, wn(r, i, e, n), t);
    u(s.idToken, r, 'internal-error');
    const o = Ze(s.idToken);
    u(o, r, 'internal-error');
    const { sub: c } = o;
    return u(n.uid === c, r, 'user-mismatch'), H._forOperation(n, i, s);
  } catch (s) {
    throw (
      ((s == null ? void 0 : s.code) === 'auth/user-not-found' &&
        m(r, 'user-mismatch'),
      s)
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
 */ async function En(n, e, t = !1) {
  if (_(n.app)) return Promise.reject(A(n));
  const r = 'signIn',
    i = await wn(n, r, e),
    s = await H._fromIdTokenResponse(n, r, i);
  return t || (await n._updateCurrentUser(s.user)), s;
}
async function cs(n, e) {
  return En($(n), e);
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
 */ async function bn(n) {
  const e = $(n);
  e._getPasswordPolicyInternal() && (await e._updatePasswordPolicy());
}
async function ls(n, e, t) {
  if (_(n.app)) return Promise.reject(A(n));
  const r = $(n),
    o = await Ge(
      r,
      {
        returnSecureToken: !0,
        email: e,
        password: t,
        clientType: 'CLIENT_TYPE_WEB',
      },
      'signUpPassword',
      ss,
    ).catch((a) => {
      throw (a.code === 'auth/password-does-not-meet-requirements' && bn(n), a);
    }),
    c = await H._fromIdTokenResponse(r, 'signIn', o);
  return await r._updateCurrentUser(c.user), c;
}
function us(n, e, t) {
  return _(n.app)
    ? Promise.reject(A(n))
    : cs(y(n), Z.credential(e, t)).catch(async (r) => {
        throw (
          (r.code === 'auth/password-does-not-meet-requirements' && bn(n), r)
        );
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
 */ async function ds(n, e) {
  return k(n, 'POST', '/v1/accounts:update', e);
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
 */ async function hs(n, { displayName: e, photoURL: t }) {
  if (e === void 0 && t === void 0) return;
  const r = y(n),
    s = {
      idToken: await r.getIdToken(),
      displayName: e,
      photoUrl: t,
      returnSecureToken: !0,
    },
    o = await Q(r, ds(r.auth, s));
  (r.displayName = o.displayName || null), (r.photoURL = o.photoUrl || null);
  const c = r.providerData.find(({ providerId: a }) => a === 'password');
  c && ((c.displayName = r.displayName), (c.photoURL = r.photoURL)),
    await r._updateTokensIfNecessary(o);
}
function fs(n, e, t, r) {
  return y(n).onIdTokenChanged(e, t, r);
}
function ps(n, e, t) {
  return y(n).beforeAuthStateChanged(e, t);
}
function gs(n, e, t, r) {
  return y(n).onAuthStateChanged(e, t, r);
}
function ms(n) {
  return y(n).signOut();
}
const be = '__sak';
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
 */ class Tn {
  constructor(e, t) {
    (this.storageRetriever = e), (this.type = t);
  }
  _isAvailable() {
    try {
      return this.storage
        ? (this.storage.setItem(be, '1'),
          this.storage.removeItem(be),
          Promise.resolve(!0))
        : Promise.resolve(!1);
    } catch {
      return Promise.resolve(!1);
    }
  }
  _set(e, t) {
    return this.storage.setItem(e, JSON.stringify(t)), Promise.resolve();
  }
  _get(e) {
    const t = this.storage.getItem(e);
    return Promise.resolve(t ? JSON.parse(t) : null);
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
 */ const _s = 1e3,
  vs = 10;
class Sn extends Tn {
  constructor() {
    super(() => window.localStorage, 'LOCAL'),
      (this.boundEventHandler = (e, t) => this.onStorageEvent(e, t)),
      (this.listeners = {}),
      (this.localCache = {}),
      (this.pollTimer = null),
      (this.fallbackToPolling = mn()),
      (this._shouldAllowMigration = !0);
  }
  forAllChangedKeys(e) {
    for (const t of Object.keys(this.listeners)) {
      const r = this.storage.getItem(t),
        i = this.localCache[t];
      r !== i && e(t, i, r);
    }
  }
  onStorageEvent(e, t = !1) {
    if (!e.key) {
      this.forAllChangedKeys((o, c, a) => {
        this.notifyListeners(o, a);
      });
      return;
    }
    const r = e.key;
    t ? this.detachListener() : this.stopPolling();
    const i = () => {
        const o = this.storage.getItem(r);
        (!t && this.localCache[r] === o) || this.notifyListeners(r, o);
      },
      s = this.storage.getItem(r);
    Li() && s !== e.newValue && e.newValue !== e.oldValue
      ? setTimeout(i, vs)
      : i();
  }
  notifyListeners(e, t) {
    this.localCache[e] = t;
    const r = this.listeners[e];
    if (r) for (const i of Array.from(r)) i(t && JSON.parse(t));
  }
  startPolling() {
    this.stopPolling(),
      (this.pollTimer = setInterval(() => {
        this.forAllChangedKeys((e, t, r) => {
          this.onStorageEvent(
            new StorageEvent('storage', { key: e, oldValue: t, newValue: r }),
            !0,
          );
        });
      }, _s));
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
  _addListener(e, t) {
    Object.keys(this.listeners).length === 0 &&
      (this.fallbackToPolling ? this.startPolling() : this.attachListener()),
      this.listeners[e] ||
        ((this.listeners[e] = new Set()),
        (this.localCache[e] = this.storage.getItem(e))),
      this.listeners[e].add(t);
  }
  _removeListener(e, t) {
    this.listeners[e] &&
      (this.listeners[e].delete(t),
      this.listeners[e].size === 0 && delete this.listeners[e]),
      Object.keys(this.listeners).length === 0 &&
        (this.detachListener(), this.stopPolling());
  }
  async _set(e, t) {
    await super._set(e, t), (this.localCache[e] = JSON.stringify(t));
  }
  async _get(e) {
    const t = await super._get(e);
    return (this.localCache[e] = JSON.stringify(t)), t;
  }
  async _remove(e) {
    await super._remove(e), delete this.localCache[e];
  }
}
Sn.type = 'LOCAL';
const Is = Sn;
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
 */ class An extends Tn {
  constructor() {
    super(() => window.sessionStorage, 'SESSION');
  }
  _addListener(e, t) {}
  _removeListener(e, t) {}
}
An.type = 'SESSION';
const Cn = An;
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
 */ function ys(n) {
  return Promise.all(
    n.map(async (e) => {
      try {
        return { fulfilled: !0, value: await e };
      } catch (t) {
        return { fulfilled: !1, reason: t };
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
 */ class Ae {
  constructor(e) {
    (this.eventTarget = e),
      (this.handlersMap = {}),
      (this.boundEventHandler = this.handleEvent.bind(this));
  }
  static _getInstance(e) {
    const t = this.receivers.find((i) => i.isListeningto(e));
    if (t) return t;
    const r = new Ae(e);
    return this.receivers.push(r), r;
  }
  isListeningto(e) {
    return this.eventTarget === e;
  }
  async handleEvent(e) {
    const t = e,
      { eventId: r, eventType: i, data: s } = t.data,
      o = this.handlersMap[i];
    if (!(o != null && o.size)) return;
    t.ports[0].postMessage({ status: 'ack', eventId: r, eventType: i });
    const c = Array.from(o).map(async (l) => l(t.origin, s)),
      a = await ys(c);
    t.ports[0].postMessage({
      status: 'done',
      eventId: r,
      eventType: i,
      response: a,
    });
  }
  _subscribe(e, t) {
    Object.keys(this.handlersMap).length === 0 &&
      this.eventTarget.addEventListener('message', this.boundEventHandler),
      this.handlersMap[e] || (this.handlersMap[e] = new Set()),
      this.handlersMap[e].add(t);
  }
  _unsubscribe(e, t) {
    this.handlersMap[e] && t && this.handlersMap[e].delete(t),
      (!t || this.handlersMap[e].size === 0) && delete this.handlersMap[e],
      Object.keys(this.handlersMap).length === 0 &&
        this.eventTarget.removeEventListener('message', this.boundEventHandler);
  }
}
Ae.receivers = [];
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
 */ function rt(n = '', e = 10) {
  let t = '';
  for (let r = 0; r < e; r++) t += Math.floor(Math.random() * 10);
  return n + t;
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
 */ class ws {
  constructor(e) {
    (this.target = e), (this.handlers = new Set());
  }
  removeMessageHandler(e) {
    e.messageChannel &&
      (e.messageChannel.port1.removeEventListener('message', e.onMessage),
      e.messageChannel.port1.close()),
      this.handlers.delete(e);
  }
  async _send(e, t, r = 50) {
    const i = typeof MessageChannel < 'u' ? new MessageChannel() : null;
    if (!i) throw new Error('connection_unavailable');
    let s, o;
    return new Promise((c, a) => {
      const l = rt('', 20);
      i.port1.start();
      const d = setTimeout(() => {
        a(new Error('unsupported_event'));
      }, r);
      (o = {
        messageChannel: i,
        onMessage(h) {
          const g = h;
          if (g.data.eventId === l)
            switch (g.data.status) {
              case 'ack':
                clearTimeout(d),
                  (s = setTimeout(() => {
                    a(new Error('timeout'));
                  }, 3e3));
                break;
              case 'done':
                clearTimeout(s), c(g.data.response);
                break;
              default:
                clearTimeout(d),
                  clearTimeout(s),
                  a(new Error('invalid_response'));
                break;
            }
        },
      }),
        this.handlers.add(o),
        i.port1.addEventListener('message', o.onMessage),
        this.target.postMessage({ eventType: e, eventId: l, data: t }, [
          i.port2,
        ]);
    }).finally(() => {
      o && this.removeMessageHandler(o);
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
 */ function I() {
  return window;
}
function Es(n) {
  I().location.href = n;
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
 */ function Rn() {
  return (
    typeof I().WorkerGlobalScope < 'u' && typeof I().importScripts == 'function'
  );
}
async function bs() {
  if (!(navigator != null && navigator.serviceWorker)) return null;
  try {
    return (await navigator.serviceWorker.ready).active;
  } catch {
    return null;
  }
}
function Ts() {
  var n;
  return (
    ((n = navigator == null ? void 0 : navigator.serviceWorker) === null ||
    n === void 0
      ? void 0
      : n.controller) || null
  );
}
function Ss() {
  return Rn() ? self : null;
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
 */ const kn = 'firebaseLocalStorageDb',
  As = 1,
  Te = 'firebaseLocalStorage',
  Pn = 'fbase_key';
class he {
  constructor(e) {
    this.request = e;
  }
  toPromise() {
    return new Promise((e, t) => {
      this.request.addEventListener('success', () => {
        e(this.request.result);
      }),
        this.request.addEventListener('error', () => {
          t(this.request.error);
        });
    });
  }
}
function Ce(n, e) {
  return n.transaction([Te], e ? 'readwrite' : 'readonly').objectStore(Te);
}
function Cs() {
  const n = indexedDB.deleteDatabase(kn);
  return new he(n).toPromise();
}
function Ke() {
  const n = indexedDB.open(kn, As);
  return new Promise((e, t) => {
    n.addEventListener('error', () => {
      t(n.error);
    }),
      n.addEventListener('upgradeneeded', () => {
        const r = n.result;
        try {
          r.createObjectStore(Te, { keyPath: Pn });
        } catch (i) {
          t(i);
        }
      }),
      n.addEventListener('success', async () => {
        const r = n.result;
        r.objectStoreNames.contains(Te)
          ? e(r)
          : (r.close(), await Cs(), e(await Ke()));
      });
  });
}
async function Ot(n, e, t) {
  const r = Ce(n, !0).put({ [Pn]: e, value: t });
  return new he(r).toPromise();
}
async function Rs(n, e) {
  const t = Ce(n, !1).get(e),
    r = await new he(t).toPromise();
  return r === void 0 ? null : r.value;
}
function Nt(n, e) {
  const t = Ce(n, !0).delete(e);
  return new he(t).toPromise();
}
const ks = 800,
  Ps = 3;
class On {
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
    return this.db ? this.db : ((this.db = await Ke()), this.db);
  }
  async _withRetries(e) {
    let t = 0;
    for (;;)
      try {
        const r = await this._openDb();
        return await e(r);
      } catch (r) {
        if (t++ > Ps) throw r;
        this.db && (this.db.close(), (this.db = void 0));
      }
  }
  async initializeServiceWorkerMessaging() {
    return Rn() ? this.initializeReceiver() : this.initializeSender();
  }
  async initializeReceiver() {
    (this.receiver = Ae._getInstance(Ss())),
      this.receiver._subscribe('keyChanged', async (e, t) => ({
        keyProcessed: (await this._poll()).includes(t.key),
      })),
      this.receiver._subscribe('ping', async (e, t) => ['keyChanged']);
  }
  async initializeSender() {
    var e, t;
    if (((this.activeServiceWorker = await bs()), !this.activeServiceWorker))
      return;
    this.sender = new ws(this.activeServiceWorker);
    const r = await this.sender._send('ping', {}, 800);
    r &&
      !((e = r[0]) === null || e === void 0) &&
      e.fulfilled &&
      !((t = r[0]) === null || t === void 0) &&
      t.value.includes('keyChanged') &&
      (this.serviceWorkerReceiverAvailable = !0);
  }
  async notifyServiceWorker(e) {
    if (
      !(
        !this.sender ||
        !this.activeServiceWorker ||
        Ts() !== this.activeServiceWorker
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
      const e = await Ke();
      return await Ot(e, be, '1'), await Nt(e, be), !0;
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
  async _set(e, t) {
    return this._withPendingWrite(
      async () => (
        await this._withRetries((r) => Ot(r, e, t)),
        (this.localCache[e] = t),
        this.notifyServiceWorker(e)
      ),
    );
  }
  async _get(e) {
    const t = await this._withRetries((r) => Rs(r, e));
    return (this.localCache[e] = t), t;
  }
  async _remove(e) {
    return this._withPendingWrite(
      async () => (
        await this._withRetries((t) => Nt(t, e)),
        delete this.localCache[e],
        this.notifyServiceWorker(e)
      ),
    );
  }
  async _poll() {
    const e = await this._withRetries((i) => {
      const s = Ce(i, !1).getAll();
      return new he(s).toPromise();
    });
    if (!e) return [];
    if (this.pendingWrites !== 0) return [];
    const t = [],
      r = new Set();
    if (e.length !== 0)
      for (const { fbase_key: i, value: s } of e)
        r.add(i),
          JSON.stringify(this.localCache[i]) !== JSON.stringify(s) &&
            (this.notifyListeners(i, s), t.push(i));
    for (const i of Object.keys(this.localCache))
      this.localCache[i] &&
        !r.has(i) &&
        (this.notifyListeners(i, null), t.push(i));
    return t;
  }
  notifyListeners(e, t) {
    this.localCache[e] = t;
    const r = this.listeners[e];
    if (r) for (const i of Array.from(r)) i(t);
  }
  startPolling() {
    this.stopPolling(),
      (this.pollTimer = setInterval(async () => this._poll(), ks));
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null));
  }
  _addListener(e, t) {
    Object.keys(this.listeners).length === 0 && this.startPolling(),
      this.listeners[e] || ((this.listeners[e] = new Set()), this._get(e)),
      this.listeners[e].add(t);
  }
  _removeListener(e, t) {
    this.listeners[e] &&
      (this.listeners[e].delete(t),
      this.listeners[e].size === 0 && delete this.listeners[e]),
      Object.keys(this.listeners).length === 0 && this.stopPolling();
  }
}
On.type = 'LOCAL';
const Os = On;
new le(3e4, 6e4);
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
 */ function Ns(n, e) {
  return e
    ? S(e)
    : (u(n._popupRedirectResolver, n, 'argument-error'),
      n._popupRedirectResolver);
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
 */ class it extends tt {
  constructor(e) {
    super('custom', 'custom'), (this.params = e);
  }
  _getIdTokenResponse(e) {
    return J(e, this._buildIdpRequest());
  }
  _linkToIdToken(e, t) {
    return J(e, this._buildIdpRequest(t));
  }
  _getReauthenticationResolver(e) {
    return J(e, this._buildIdpRequest());
  }
  _buildIdpRequest(e) {
    const t = {
      requestUri: this.params.requestUri,
      sessionId: this.params.sessionId,
      postBody: this.params.postBody,
      tenantId: this.params.tenantId,
      pendingToken: this.params.pendingToken,
      returnSecureToken: !0,
      returnIdpCredential: !0,
    };
    return e && (t.idToken = e), t;
  }
}
function Ds(n) {
  return En(n.auth, new it(n), n.bypassAuthState);
}
function Ls(n) {
  const { auth: e, user: t } = n;
  return u(t, e, 'internal-error'), as(t, new it(n), n.bypassAuthState);
}
async function Ms(n) {
  const { auth: e, user: t } = n;
  return u(t, e, 'internal-error'), os(t, new it(n), n.bypassAuthState);
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
 */ class Nn {
  constructor(e, t, r, i, s = !1) {
    (this.auth = e),
      (this.resolver = r),
      (this.user = i),
      (this.bypassAuthState = s),
      (this.pendingPromise = null),
      (this.eventManager = null),
      (this.filter = Array.isArray(t) ? t : [t]);
  }
  execute() {
    return new Promise(async (e, t) => {
      this.pendingPromise = { resolve: e, reject: t };
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
      urlResponse: t,
      sessionId: r,
      postBody: i,
      tenantId: s,
      error: o,
      type: c,
    } = e;
    if (o) {
      this.reject(o);
      return;
    }
    const a = {
      auth: this.auth,
      requestUri: t,
      sessionId: r,
      tenantId: s || void 0,
      postBody: i || void 0,
      user: this.user,
      bypassAuthState: this.bypassAuthState,
    };
    try {
      this.resolve(await this.getIdpTask(c)(a));
    } catch (l) {
      this.reject(l);
    }
  }
  onError(e) {
    this.reject(e);
  }
  getIdpTask(e) {
    switch (e) {
      case 'signInViaPopup':
      case 'signInViaRedirect':
        return Ds;
      case 'linkViaPopup':
      case 'linkViaRedirect':
        return Ms;
      case 'reauthViaPopup':
      case 'reauthViaRedirect':
        return Ls;
      default:
        m(this.auth, 'internal-error');
    }
  }
  resolve(e) {
    R(this.pendingPromise, 'Pending promise was never set'),
      this.pendingPromise.resolve(e),
      this.unregisterAndCleanUp();
  }
  reject(e) {
    R(this.pendingPromise, 'Pending promise was never set'),
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
 */ const Us = new le(2e3, 1e4);
class W extends Nn {
  constructor(e, t, r, i, s) {
    super(e, t, i, s),
      (this.provider = r),
      (this.authWindow = null),
      (this.pollId = null),
      W.currentPopupAction && W.currentPopupAction.cancel(),
      (W.currentPopupAction = this);
  }
  async executeNotNull() {
    const e = await this.execute();
    return u(e, this.auth, 'internal-error'), e;
  }
  async onExecution() {
    R(this.filter.length === 1, 'Popup operations only handle one event');
    const e = rt();
    (this.authWindow = await this.resolver._openPopup(
      this.auth,
      this.provider,
      this.filter[0],
      e,
    )),
      (this.authWindow.associatedEvent = e),
      this.resolver._originValidation(this.auth).catch((t) => {
        this.reject(t);
      }),
      this.resolver._isIframeWebStorageSupported(this.auth, (t) => {
        t || this.reject(v(this.auth, 'web-storage-unsupported'));
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
    this.reject(v(this.auth, 'cancelled-popup-request'));
  }
  cleanUp() {
    this.authWindow && this.authWindow.close(),
      this.pollId && window.clearTimeout(this.pollId),
      (this.authWindow = null),
      (this.pollId = null),
      (W.currentPopupAction = null);
  }
  pollUserCancellation() {
    const e = () => {
      var t, r;
      if (
        !(
          (r =
            (t = this.authWindow) === null || t === void 0
              ? void 0
              : t.window) === null || r === void 0
        ) &&
        r.closed
      ) {
        this.pollId = window.setTimeout(() => {
          (this.pollId = null),
            this.reject(v(this.auth, 'popup-closed-by-user'));
        }, 8e3);
        return;
      }
      this.pollId = window.setTimeout(e, Us.get());
    };
    e();
  }
}
W.currentPopupAction = null;
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
 */ const xs = 'pendingRedirect',
  me = new Map();
class Fs extends Nn {
  constructor(e, t, r = !1) {
    super(
      e,
      ['signInViaRedirect', 'linkViaRedirect', 'reauthViaRedirect', 'unknown'],
      t,
      void 0,
      r,
    ),
      (this.eventId = null);
  }
  async execute() {
    let e = me.get(this.auth._key());
    if (!e) {
      try {
        const r = (await Bs(this.resolver, this.auth))
          ? await super.execute()
          : null;
        e = () => Promise.resolve(r);
      } catch (t) {
        e = () => Promise.reject(t);
      }
      me.set(this.auth._key(), e);
    }
    return (
      this.bypassAuthState ||
        me.set(this.auth._key(), () => Promise.resolve(null)),
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
      const t = await this.auth._redirectUserForId(e.eventId);
      if (t) return (this.user = t), super.onAuthEvent(e);
      this.resolve(null);
    }
  }
  async onExecution() {}
  cleanUp() {}
}
async function Bs(n, e) {
  const t = $s(e),
    r = Hs(n);
  if (!(await r._isAvailable())) return !1;
  const i = (await r._get(t)) === 'true';
  return await r._remove(t), i;
}
function Vs(n, e) {
  me.set(n._key(), e);
}
function Hs(n) {
  return S(n._redirectPersistence);
}
function $s(n) {
  return ge(xs, n.config.apiKey, n.name);
}
async function js(n, e, t = !1) {
  if (_(n.app)) return Promise.reject(A(n));
  const r = $(n),
    i = Ns(r, e),
    o = await new Fs(r, i, t).execute();
  return (
    o &&
      !t &&
      (delete o.user._redirectEventId,
      await r._persistUserIfCurrent(o.user),
      await r._setRedirectUser(null, e)),
    o
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
 */ const Ws = 10 * 60 * 1e3;
class zs {
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
    let t = !1;
    return (
      this.consumers.forEach((r) => {
        this.isEventForConsumer(e, r) &&
          ((t = !0), this.sendToConsumer(e, r), this.saveEventToCache(e));
      }),
      this.hasHandledPotentialRedirect ||
        !Gs(e) ||
        ((this.hasHandledPotentialRedirect = !0),
        t || ((this.queuedRedirectEvent = e), (t = !0))),
      t
    );
  }
  sendToConsumer(e, t) {
    var r;
    if (e.error && !Dn(e)) {
      const i =
        ((r = e.error.code) === null || r === void 0
          ? void 0
          : r.split('auth/')[1]) || 'internal-error';
      t.onError(v(this.auth, i));
    } else t.onAuthEvent(e);
  }
  isEventForConsumer(e, t) {
    const r = t.eventId === null || (!!e.eventId && e.eventId === t.eventId);
    return t.filter.includes(e.type) && r;
  }
  hasEventBeenHandled(e) {
    return (
      Date.now() - this.lastProcessedEventTime >= Ws &&
        this.cachedEventUids.clear(),
      this.cachedEventUids.has(Dt(e))
    );
  }
  saveEventToCache(e) {
    this.cachedEventUids.add(Dt(e)), (this.lastProcessedEventTime = Date.now());
  }
}
function Dt(n) {
  return [n.type, n.eventId, n.sessionId, n.tenantId]
    .filter((e) => e)
    .join('-');
}
function Dn({ type: n, error: e }) {
  return (
    n === 'unknown' && (e == null ? void 0 : e.code) === 'auth/no-auth-event'
  );
}
function Gs(n) {
  switch (n.type) {
    case 'signInViaRedirect':
    case 'linkViaRedirect':
    case 'reauthViaRedirect':
      return !0;
    case 'unknown':
      return Dn(n);
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
 */ async function Ks(n, e = {}) {
  return k(n, 'GET', '/v1/projects', e);
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
 */ const qs = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
  Js = /^https?/;
async function Ys(n) {
  if (n.config.emulator) return;
  const { authorizedDomains: e } = await Ks(n);
  for (const t of e)
    try {
      if (Xs(t)) return;
    } catch {}
  m(n, 'unauthorized-domain');
}
function Xs(n) {
  const e = We(),
    { protocol: t, hostname: r } = new URL(e);
  if (n.startsWith('chrome-extension://')) {
    const o = new URL(n);
    return o.hostname === '' && r === ''
      ? t === 'chrome-extension:' &&
          n.replace('chrome-extension://', '') ===
            e.replace('chrome-extension://', '')
      : t === 'chrome-extension:' && o.hostname === r;
  }
  if (!Js.test(t)) return !1;
  if (qs.test(n)) return r === n;
  const i = n.replace(/\./g, '\\.');
  return new RegExp('^(.+\\.' + i + '|' + i + ')$', 'i').test(r);
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
 */ const Qs = new le(3e4, 6e4);
function Lt() {
  const n = I().___jsl;
  if (n != null && n.H) {
    for (const e of Object.keys(n.H))
      if (
        ((n.H[e].r = n.H[e].r || []),
        (n.H[e].L = n.H[e].L || []),
        (n.H[e].r = [...n.H[e].L]),
        n.CP)
      )
        for (let t = 0; t < n.CP.length; t++) n.CP[t] = null;
  }
}
function Zs(n) {
  return new Promise((e, t) => {
    var r, i, s;
    function o() {
      Lt(),
        gapi.load('gapi.iframes', {
          callback: () => {
            e(gapi.iframes.getContext());
          },
          ontimeout: () => {
            Lt(), t(v(n, 'network-request-failed'));
          },
          timeout: Qs.get(),
        });
    }
    if (
      !(
        (i = (r = I().gapi) === null || r === void 0 ? void 0 : r.iframes) ===
          null || i === void 0
      ) &&
      i.Iframe
    )
      e(gapi.iframes.getContext());
    else if (!((s = I().gapi) === null || s === void 0) && s.load) o();
    else {
      const c = ji('iframefcb');
      return (
        (I()[c] = () => {
          gapi.load ? o() : t(v(n, 'network-request-failed'));
        }),
        vn(`${$i()}?onload=${c}`).catch((a) => t(a))
      );
    }
  }).catch((e) => {
    throw ((_e = null), e);
  });
}
let _e = null;
function eo(n) {
  return (_e = _e || Zs(n)), _e;
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
 */ const to = new le(5e3, 15e3),
  no = '__/auth/iframe',
  ro = 'emulator/auth/iframe',
  io = {
    style: { position: 'absolute', top: '-100px', width: '1px', height: '1px' },
    'aria-hidden': 'true',
    tabindex: '-1',
  },
  so = new Map([
    ['identitytoolkit.googleapis.com', 'p'],
    ['staging-identitytoolkit.sandbox.googleapis.com', 's'],
    ['test-identitytoolkit.sandbox.googleapis.com', 't'],
  ]);
function oo(n) {
  const e = n.config;
  u(e.authDomain, n, 'auth-domain-config-required');
  const t = e.emulator ? Qe(e, ro) : `https://${n.config.authDomain}/${no}`,
    r = { apiKey: e.apiKey, appName: n.name, v: ce },
    i = so.get(n.config.apiHost);
  i && (r.eid = i);
  const s = n._getFrameworks();
  return s.length && (r.fw = s.join(',')), `${t}?${ae(r).slice(1)}`;
}
async function ao(n) {
  const e = await eo(n),
    t = I().gapi;
  return (
    u(t, n, 'internal-error'),
    e.open(
      {
        where: document.body,
        url: oo(n),
        messageHandlersFilter: t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
        attributes: io,
        dontclear: !0,
      },
      (r) =>
        new Promise(async (i, s) => {
          await r.restyle({ setHideOnLeave: !1 });
          const o = v(n, 'network-request-failed'),
            c = I().setTimeout(() => {
              s(o);
            }, to.get());
          function a() {
            I().clearTimeout(c), i(r);
          }
          r.ping(a).then(a, () => {
            s(o);
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
 */ const co = {
    location: 'yes',
    resizable: 'yes',
    statusbar: 'yes',
    toolbar: 'no',
  },
  lo = 500,
  uo = 600,
  ho = '_blank',
  fo = 'http://localhost';
class Mt {
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
function po(n, e, t, r = lo, i = uo) {
  const s = Math.max((window.screen.availHeight - i) / 2, 0).toString(),
    o = Math.max((window.screen.availWidth - r) / 2, 0).toString();
  let c = '';
  const a = Object.assign(Object.assign({}, co), {
      width: r.toString(),
      height: i.toString(),
      top: s,
      left: o,
    }),
    l = p().toLowerCase();
  t && (c = dn(l) ? ho : t), ln(l) && ((e = e || fo), (a.scrollbars = 'yes'));
  const d = Object.entries(a).reduce((g, [w, j]) => `${g}${w}=${j},`, '');
  if (Di(l) && c !== '_self') return go(e || '', c), new Mt(null);
  const h = window.open(e || '', c, d);
  u(h, n, 'popup-blocked');
  try {
    h.focus();
  } catch {}
  return new Mt(h);
}
function go(n, e) {
  const t = document.createElement('a');
  (t.href = n), (t.target = e);
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
    t.dispatchEvent(r);
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
 */ const mo = '__/auth/handler',
  _o = 'emulator/auth/handler',
  vo = encodeURIComponent('fac');
async function Ut(n, e, t, r, i, s) {
  u(n.config.authDomain, n, 'auth-domain-config-required'),
    u(n.config.apiKey, n, 'invalid-api-key');
  const o = {
    apiKey: n.config.apiKey,
    appName: n.name,
    authType: t,
    redirectUrl: r,
    v: ce,
    eventId: i,
  };
  if (e instanceof yn) {
    e.setDefaultLanguage(n.languageCode),
      (o.providerId = e.providerId || ''),
      rr(e.getCustomParameters()) ||
        (o.customParameters = JSON.stringify(e.getCustomParameters()));
    for (const [d, h] of Object.entries({})) o[d] = h;
  }
  if (e instanceof de) {
    const d = e.getScopes().filter((h) => h !== '');
    d.length > 0 && (o.scopes = d.join(','));
  }
  n.tenantId && (o.tid = n.tenantId);
  const c = o;
  for (const d of Object.keys(c)) c[d] === void 0 && delete c[d];
  const a = await n._getAppCheckToken(),
    l = a ? `#${vo}=${encodeURIComponent(a)}` : '';
  return `${Io(n)}?${ae(c).slice(1)}${l}`;
}
function Io({ config: n }) {
  return n.emulator ? Qe(n, _o) : `https://${n.authDomain}/${mo}`;
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
 */ const Fe = 'webStorageSupport';
class yo {
  constructor() {
    (this.eventManagers = {}),
      (this.iframes = {}),
      (this.originValidationPromises = {}),
      (this._redirectPersistence = Cn),
      (this._completeRedirectFn = js),
      (this._overrideRedirectResult = Vs);
  }
  async _openPopup(e, t, r, i) {
    var s;
    R(
      (s = this.eventManagers[e._key()]) === null || s === void 0
        ? void 0
        : s.manager,
      '_initialize() not called before _openPopup()',
    );
    const o = await Ut(e, t, r, We(), i);
    return po(e, o, rt());
  }
  async _openRedirect(e, t, r, i) {
    await this._originValidation(e);
    const s = await Ut(e, t, r, We(), i);
    return Es(s), new Promise(() => {});
  }
  _initialize(e) {
    const t = e._key();
    if (this.eventManagers[t]) {
      const { manager: i, promise: s } = this.eventManagers[t];
      return i
        ? Promise.resolve(i)
        : (R(s, 'If manager is not set, promise should be'), s);
    }
    const r = this.initAndGetManager(e);
    return (
      (this.eventManagers[t] = { promise: r }),
      r.catch(() => {
        delete this.eventManagers[t];
      }),
      r
    );
  }
  async initAndGetManager(e) {
    const t = await ao(e),
      r = new zs(e);
    return (
      t.register(
        'authEvent',
        (i) => (
          u(i == null ? void 0 : i.authEvent, e, 'invalid-auth-event'),
          { status: r.onEvent(i.authEvent) ? 'ACK' : 'ERROR' }
        ),
        gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
      ),
      (this.eventManagers[e._key()] = { manager: r }),
      (this.iframes[e._key()] = t),
      r
    );
  }
  _isIframeWebStorageSupported(e, t) {
    this.iframes[e._key()].send(
      Fe,
      { type: Fe },
      (i) => {
        var s;
        const o =
          (s = i == null ? void 0 : i[0]) === null || s === void 0
            ? void 0
            : s[Fe];
        o !== void 0 && t(!!o), m(e, 'internal-error');
      },
      gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
    );
  }
  _originValidation(e) {
    const t = e._key();
    return (
      this.originValidationPromises[t] ||
        (this.originValidationPromises[t] = Ys(e)),
      this.originValidationPromises[t]
    );
  }
  get _shouldInitProactively() {
    return mn() || un() || et();
  }
}
const wo = yo;
var xt = '@firebase/auth',
  Ft = '1.7.8';
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
 */ class Eo {
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
    const t = this.auth.onIdTokenChanged((r) => {
      e((r == null ? void 0 : r.stsTokenManager.accessToken) || null);
    });
    this.internalListeners.set(e, t), this.updateProactiveRefresh();
  }
  removeAuthTokenListener(e) {
    this.assertAuthConfigured();
    const t = this.internalListeners.get(e);
    t && (this.internalListeners.delete(e), t(), this.updateProactiveRefresh());
  }
  assertAuthConfigured() {
    u(
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
 */ function bo(n) {
  switch (n) {
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
function To(n) {
  re(
    new X(
      'auth',
      (e, { options: t }) => {
        const r = e.getProvider('app').getImmediate(),
          i = e.getProvider('heartbeat'),
          s = e.getProvider('app-check-internal'),
          { apiKey: o, authDomain: c } = r.options;
        u(o && !o.includes(':'), 'invalid-api-key', { appName: r.name });
        const a = {
            apiKey: o,
            authDomain: c,
            clientPlatform: n,
            apiHost: 'identitytoolkit.googleapis.com',
            tokenApiHost: 'securetoken.googleapis.com',
            apiScheme: 'https',
            sdkClientVersion: _n(n),
          },
          l = new Bi(r, i, s, a);
        return qi(l, t), l;
      },
      'PUBLIC',
    )
      .setInstantiationMode('EXPLICIT')
      .setInstanceCreatedCallback((e, t, r) => {
        e.getProvider('auth-internal').initialize();
      }),
  ),
    re(
      new X(
        'auth-internal',
        (e) => {
          const t = $(e.getProvider('auth').getImmediate());
          return ((r) => new Eo(r))(t);
        },
        'PRIVATE',
      ).setInstantiationMode('EXPLICIT'),
    ),
    G(xt, Ft, bo(n)),
    G(xt, Ft, 'esm2017');
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
 */ const So = 5 * 60,
  Ao = zt('authIdTokenMaxAge') || So;
let Bt = null;
const Co = (n) => async (e) => {
  const t = e && (await e.getIdTokenResult()),
    r = t && (new Date().getTime() - Date.parse(t.issuedAtTime)) / 1e3;
  if (r && r > Ao) return;
  const i = t == null ? void 0 : t.token;
  Bt !== i &&
    ((Bt = i),
    await fetch(n, {
      method: i ? 'POST' : 'DELETE',
      headers: i ? { Authorization: `Bearer ${i}` } : {},
    }));
};
function Ro(n = ii()) {
  const e = Jt(n, 'auth');
  if (e.isInitialized()) return e.getImmediate();
  const t = Ki(n, { popupRedirectResolver: wo, persistence: [Os, Is, Cn] }),
    r = zt('authTokenSyncURL');
  if (r && typeof isSecureContext == 'boolean' && isSecureContext) {
    const s = new URL(r, location.origin);
    if (location.origin === s.origin) {
      const o = Co(s.toString());
      ps(t, o, () => o(t.currentUser)), fs(t, (c) => o(c));
    }
  }
  const i = Gn('auth');
  return i && Ji(t, `http://${i}`), t;
}
function ko() {
  var n, e;
  return (e =
    (n = document.getElementsByTagName('head')) === null || n === void 0
      ? void 0
      : n[0]) !== null && e !== void 0
    ? e
    : document;
}
Vi({
  loadJS(n) {
    return new Promise((e, t) => {
      const r = document.createElement('script');
      r.setAttribute('src', n),
        (r.onload = e),
        (r.onerror = (i) => {
          const s = v('internal-error');
          (s.customData = i), t(s);
        }),
        (r.type = 'text/javascript'),
        (r.charset = 'UTF-8'),
        ko().appendChild(r);
    });
  },
  gapiScript: 'https://apis.google.com/js/api.js',
  recaptchaV2Script: 'https://www.google.com/recaptcha/api.js',
  recaptchaEnterpriseScript:
    'https://www.google.com/recaptcha/enterprise.js?render=',
});
To('Browser');
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
***************************************************************************** */ function Po(
  n,
  e,
  t,
  r,
) {
  function i(s) {
    return s instanceof t
      ? s
      : new t(function (o) {
          o(s);
        });
  }
  return new (t || (t = Promise))(function (s, o) {
    function c(d) {
      try {
        l(r.next(d));
      } catch (h) {
        o(h);
      }
    }
    function a(d) {
      try {
        l(r.throw(d));
      } catch (h) {
        o(h);
      }
    }
    function l(d) {
      d.done ? s(d.value) : i(d.value).then(c, a);
    }
    l((r = r.apply(n, [])).next());
  });
}
function Oo(n, e) {
  var t = {
      label: 0,
      sent: function () {
        if (s[0] & 1) throw s[1];
        return s[1];
      },
      trys: [],
      ops: [],
    },
    r,
    i,
    s,
    o;
  return (
    (o = { next: c(0), throw: c(1), return: c(2) }),
    typeof Symbol == 'function' &&
      (o[Symbol.iterator] = function () {
        return this;
      }),
    o
  );
  function c(l) {
    return function (d) {
      return a([l, d]);
    };
  }
  function a(l) {
    if (r) throw new TypeError('Generator is already executing.');
    for (; t; )
      try {
        if (
          ((r = 1),
          i &&
            (s =
              l[0] & 2
                ? i.return
                : l[0]
                  ? i.throw || ((s = i.return) && s.call(i), 0)
                  : i.next) &&
            !(s = s.call(i, l[1])).done)
        )
          return s;
        switch (((i = 0), s && (l = [l[0] & 2, s.value]), l[0])) {
          case 0:
          case 1:
            s = l;
            break;
          case 4:
            return t.label++, { value: l[1], done: !1 };
          case 5:
            t.label++, (i = l[1]), (l = [0]);
            continue;
          case 7:
            (l = t.ops.pop()), t.trys.pop();
            continue;
          default:
            if (
              ((s = t.trys),
              !(s = s.length > 0 && s[s.length - 1]) &&
                (l[0] === 6 || l[0] === 2))
            ) {
              t = 0;
              continue;
            }
            if (l[0] === 3 && (!s || (l[1] > s[0] && l[1] < s[3]))) {
              t.label = l[1];
              break;
            }
            if (l[0] === 6 && t.label < s[1]) {
              (t.label = s[1]), (s = l);
              break;
            }
            if (s && t.label < s[2]) {
              (t.label = s[2]), t.ops.push(l);
              break;
            }
            s[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        l = e.call(n, t);
      } catch (d) {
        (l = [6, d]), (i = 0);
      } finally {
        r = s = 0;
      }
    if (l[0] & 5) throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
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
***************************************************************************** */ var z =
    function () {
      return (
        (z =
          Object.assign ||
          function (e) {
            for (var t, r = 1, i = arguments.length; r < i; r++) {
              t = arguments[r];
              for (var s in t)
                Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
            }
            return e;
          }),
        z.apply(this, arguments)
      );
    },
  Ln = function (n) {
    return { loading: n == null, value: n };
  },
  No = function () {
    return function (n, e) {
      switch (e.type) {
        case 'error':
          return z(z({}, n), { error: e.error, loading: !1, value: void 0 });
        case 'reset':
          return Ln(e.defaultValue);
        case 'value':
          return z(z({}, n), { error: void 0, loading: !1, value: e.value });
        default:
          return n;
      }
    };
  },
  Do = function (n) {
    var e = n ? n() : void 0,
      t = E.useReducer(No(), Ln(e)),
      r = t[0],
      i = t[1],
      s = E.useCallback(
        function () {
          var a = n ? n() : void 0;
          i({ type: 'reset', defaultValue: a });
        },
        [n],
      ),
      o = E.useCallback(function (a) {
        i({ type: 'error', error: a });
      }, []),
      c = E.useCallback(function (a) {
        i({ type: 'value', value: a });
      }, []);
    return E.useMemo(
      function () {
        return {
          error: r.error,
          loading: r.loading,
          reset: s,
          setError: o,
          setValue: c,
          value: r.value,
        };
      },
      [r.error, r.loading, s, o, c, r.value],
    );
  },
  Lo = function (n, e) {
    var t = Do(function () {
        return n.currentUser;
      }),
      r = t.error,
      i = t.loading,
      s = t.setError,
      o = t.setValue,
      c = t.value;
    return (
      E.useEffect(
        function () {
          var a = gs(
            n,
            function (l) {
              return Po(void 0, void 0, void 0, function () {
                var d;
                return Oo(this, function (h) {
                  switch (h.label) {
                    case 0:
                      return [3, 4];
                    case 1:
                      return h.trys.push([1, 3, , 4]), [4, e.onUserChanged(l)];
                    case 2:
                      return h.sent(), [3, 4];
                    case 3:
                      return (d = h.sent()), s(d), [3, 4];
                    case 4:
                      return o(l), [2];
                  }
                });
              });
            },
            s,
          );
          return function () {
            a();
          };
        },
        [n],
      ),
      [c, i, r]
    );
  },
  Mo = 'firebase',
  Uo = '10.13.1';
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
 */ G(Mo, Uo, 'app');
const xo = {
    apiKey: 'AIzaSyBdpwHTjeLfXkVZgVKnuGFhfCMZUxZsAc8',
    authDomain: 'graphiql-app-1e06a.firebaseapp.com',
    projectId: 'graphiql-app-1e06a',
    storageBucket: 'graphiql-app-1e06a.appspot.com',
    messagingSenderId: '230111088490',
    appId: '1:230111088490:web:21585fc589d0459e689f13',
    measurementId: 'G-S38B5ZRXD9',
  },
  Fo = Yt(xo),
  Y = Ro(Fo),
  Ho = async (n, e) =>
    new Promise((t, r) => {
      us(Y, n, e)
        .then((i) => {
          const { user: s } = i;
          s ? t(s) : r(new Error('Auth is failed'));
        })
        .catch((i) => r(i));
    }),
  $o = async (n, e, t) =>
    new Promise((r, i) => {
      ls(Y, e, t)
        .then(async (s) => {
          const { user: o } = s;
          if (o && Y.currentUser) {
            await hs(o, { displayName: n }), await o.reload();
            const c = Y.currentUser;
            r(c);
          }
        })
        .catch((s) => i(s));
    }),
  jo = () => {
    ms(Y);
  },
  Bo = E.createContext(void 0);
function Wo({ children: n }) {
  const [e, t, r] = Lo(Y),
    i = xn();
  E.useEffect(() => {
    !e && !t && i('/');
  }, [e, t, i]);
  const s = E.useMemo(() => ({ user: e, loading: t, error: r }), [e, t, r]);
  return Fn.jsx(Bo.Provider, { value: s, children: n });
}
export { Wo as A, Y as a, Ho as b, Bo as c, jo as l, $o as r, Lo as u };
