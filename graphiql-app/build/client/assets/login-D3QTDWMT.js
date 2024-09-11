import { d as x, r as S, j as e } from './index-DeHznlkS.js';
import {
  c as b,
  a as l,
  u as j,
  F as p,
  o as E,
  d as P,
} from './authError-B8rNQ2NH.js';
import { B as _ } from './react-toastify.esm-OaNhFX5r.js';
import { u as L, B as C } from './button-DYUIl9Ir.js';
import { b as F } from './auth-context-CQxQiTwU.js';
import { L as v } from './loading-DSuaqnr6.js';
import { u as I } from './useAuth-hook-6GkHdI7V.js';
import './iconBase-z_erZi_H.js';
const $ = '_signInFormSection_7ml70_1',
  y = '_formWrapper_7ml70_15',
  W = '_errorMessage_7ml70_35',
  u = { signInFormSection: $, formWrapper: y, errorMessage: W },
  q = (r) =>
    b().shape({
      email: l().email(r('InvalidEmail')).required(r('EmailRequired')),
      password: l()
        .required(r('PasswordRequired'))
        .matches(/.*\d.*/, r('PasswordContainsNumber'))
        .matches(/.*[A-Z].*/, r('PasswordContainsUppercase'))
        .matches(/.*[a-z].*/, r('PasswordContainsLowercase'))
        .matches(
          /.*[!@#$%^&*(),.?":{}|<>].*/,
          r('PasswordContainsSpecialCharacter'),
        )
        .min(6, r('PasswordMinLength')),
    });
function M() {
  var m, t;
  const { t: r } = L(),
    g = q(r),
    {
      register: o,
      handleSubmit: h,
      formState: { errors: s },
    } = j({ mode: 'onChange', resolver: E(g) }),
    { user: a, loading: n } = I(),
    i = x();
  S.useEffect(() => {
    a && i('/');
  }, [a, i, n]);
  const f = async (c) => {
    const w = F(c.email, c.password);
    _.promise(w, {
      pending: {
        render() {
          return `${r('loading')}`;
        },
      },
      success: {
        render() {
          return `${r('accessGranted')}`;
        },
      },
      error: {
        render({ data: d }) {
          return `${d instanceof Error ? r(P(d)) : ''}`;
        },
      },
    });
  };
  return n
    ? e.jsx(v, {})
    : e.jsxs('div', {
        className: u.signInFormSection,
        children: [
          e.jsx('h2', { children: r('Login') }),
          e.jsxs('form', {
            onSubmit: h(f),
            className: u.formWrapper,
            children: [
              e.jsx(p, {
                type: 'email',
                label: r('Email'),
                name: 'email',
                placeholder: 'example@gmai.com',
                register: o,
                error:
                  (m = s.email) != null && m.message ? s.email.message : '',
              }),
              e.jsx(p, {
                type: 'password',
                label: r('Password'),
                name: 'password',
                placeholder: void 0,
                register: o,
                error:
                  (t = s.password) != null && t.message
                    ? s.password.message
                    : '',
              }),
              e.jsx(C, { btnType: 'submit', children: r('Submit') }),
            ],
          }),
        ],
      });
}
function Z() {
  return e.jsx(M, {});
}
export { Z as default };
