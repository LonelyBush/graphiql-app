import { d as x, r as S, j as e } from './index-wWMGXTih.js';
import {
  c as b,
  a as d,
  u as j,
  F as p,
  o as E,
  d as P,
} from './authError-C6dDEtMD.js';
import { B as _ } from './react-toastify.esm-D_hN4gkv.js';
import { u as L, B as C } from './button-CmpeQtVi.js';
import { b as F } from './auth-context-BVoH_ZDZ.js';
import { L as I } from './loading-DBB8G3ZU.js';
import { u as $ } from './useAuth-hook-DYEurJeX.js';
import './iconBase-QCAFBzlY.js';
const v = '_signInFormSection_7ml70_1',
  y = '_formWrapper_7ml70_15',
  W = '_errorMessage_7ml70_35',
  u = { signInFormSection: v, formWrapper: y, errorMessage: W },
  q = (r) =>
    b().shape({
      email: d().email(r('InvalidEmail')).required(r('EmailRequired')),
      password: d()
        .required(r('PasswordRequired'))
        .min(6, r('PasswordMinLength'))
        .matches(/.*\d.*/, r('PasswordContainsNumber'))
        .matches(/.*[A-Z].*/, r('PasswordContainsUppercase'))
        .matches(/.*[a-z].*/, r('PasswordContainsLowercase'))
        .matches(
          /.*[!@#$%^&*(),.?":{}|<>].*/,
          r('PasswordContainsSpecialCharacter'),
        ),
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
    { user: a, loading: n } = $(),
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
        render({ data: l }) {
          return `${l instanceof Error ? r(P(l)) : ''}`;
        },
      },
    });
  };
  return n
    ? e.jsx(I, {})
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
                placeholder: 'example@gmail.com',
                register: o,
                error:
                  (m = s.email) != null && m.message ? s.email.message : '',
              }),
              e.jsx(p, {
                type: 'password',
                label: r('Password'),
                name: 'password',
                placeholder: '',
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
