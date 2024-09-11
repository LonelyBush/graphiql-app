import { d as S, r as b, j as r } from './index-DeHznlkS.js';
import {
  c as j,
  a as n,
  b as C,
  u as E,
  F as i,
  o as _,
  d as v,
} from './authError-B8rNQ2NH.js';
import { B as y } from './react-toastify.esm-OaNhFX5r.js';
import { u as R, B as k } from './button-DYUIl9Ir.js';
import { r as N } from './auth-context-CQxQiTwU.js';
import { L as $ } from './loading-DSuaqnr6.js';
import { u as q } from './useAuth-hook-6GkHdI7V.js';
import './iconBase-z_erZi_H.js';
const F = '_signInFormSection_7ml70_1',
  M = '_formWrapper_7ml70_15',
  I = '_errorMessage_7ml70_35',
  h = { signInFormSection: F, formWrapper: M, errorMessage: I },
  L = (e) =>
    j().shape({
      nickname: n()
        .matches(/^[a-zA-Z0-9]*$/, e('RemoveSpecialCharacters'))
        .required(e('NicknameRequired')),
      email: n().email(e('InvalidEmail')).required(e('EmailRequired')),
      password: n()
        .required(e('PasswordRequired'))
        .matches(/.*\d.*/, e('PasswordContainsNumber'))
        .matches(/.*[A-Z].*/, e('PasswordContainsUppercase'))
        .matches(/.*[a-z].*/, e('PasswordContainsLowercase'))
        .matches(
          /.*[!@#$%^&*(),.?":{}|<>].*/,
          e('PasswordContainsSpecialCharacter'),
        )
        .min(6, e('PasswordMinLength')),
      confirmPassword: n().oneOf([C('password')], e('PasswordMustMatch')),
    });
function W() {
  var d, l, p, u;
  const { t: e } = R(),
    f = L(e),
    {
      register: a,
      handleSubmit: w,
      formState: { errors: s },
    } = E({ mode: 'onChange', resolver: _(f) }),
    { user: o, loading: c } = q(),
    m = S();
  b.useEffect(() => {
    o != null && o.displayName && m('/');
  }, [o, c, m]);
  const x = async (t) => {
    const P = N(t.nickname, t.email, t.password);
    y.promise(P, {
      pending: {
        render() {
          return 'Loading...';
        },
      },
      success: {
        render() {
          return m('/'), `${e('accessGranted')}`;
        },
      },
      error: {
        render({ data: g }) {
          return `${g instanceof Error ? e(v(g)) : ''}`;
        },
      },
    });
  };
  return c
    ? r.jsx($, {})
    : r.jsxs('div', {
        className: h.signInFormSection,
        children: [
          r.jsx('h2', { children: e('Registration') }),
          r.jsxs('form', {
            onSubmit: w(x),
            className: h.formWrapper,
            children: [
              r.jsx(i, {
                type: 'text',
                label: e('Nickname'),
                name: 'nickname',
                placeholder: 'JohnDoe',
                register: a,
                error:
                  (d = s.nickname) != null && d.message
                    ? s.nickname.message
                    : '',
              }),
              r.jsx(i, {
                type: 'email',
                label: e('Email'),
                name: 'email',
                placeholder: 'example@gmai.com',
                register: a,
                error:
                  (l = s.email) != null && l.message ? s.email.message : '',
              }),
              r.jsx(i, {
                type: 'password',
                label: e('Password'),
                name: 'password',
                placeholder: void 0,
                register: a,
                error:
                  (p = s.password) != null && p.message
                    ? s.password.message
                    : '',
              }),
              r.jsx(i, {
                type: 'password',
                label: e('ConfirmPassword'),
                name: 'confirmPassword',
                placeholder: void 0,
                register: a,
                error:
                  (u = s.confirmPassword) != null && u.message
                    ? s.confirmPassword.message
                    : '',
              }),
              r.jsx(k, { btnType: 'submit', children: e('Submit') }),
            ],
          }),
        ],
      });
}
function O() {
  return r.jsx(W, {});
}
export { O as default };
