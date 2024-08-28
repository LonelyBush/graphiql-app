import { j as s } from './index-k4sjWK-j.js';
import {
  c as h,
  a as o,
  b as w,
  u as f,
  F as n,
  o as x,
} from './form-control-Cv0RCtaP.js';
import { B as P } from './button-ikYNQhX4.js';
import { u as S } from './useTranslation-pYUzJfcX.js';
import './index-BCQ0Yyab.js';
const b = '_signInFormSection_tdlug_1',
  j = '_formWrapper_tdlug_15',
  l = { signInFormSection: b, formWrapper: j },
  C = (e) =>
    h().shape({
      nickname: o()
        .matches(/^[a-zA-Z0-9]*$/, e('RemoveSpecialCharacters'))
        .required(e('NicknameRequired')),
      email: o().email(e('InvalidEmail')).required(e('EmailRequired')),
      password: o()
        .required(e('PasswordRequired'))
        .matches(/.*\d.*/, e('PasswordContainsNumber'))
        .matches(/.*[A-Z].*/, e('PasswordContainsUppercase'))
        .matches(/.*[a-z].*/, e('PasswordContainsLowercase'))
        .matches(
          /.*[!@#$%^&*(),.?":{}|<>].*/,
          e('PasswordContainsSpecialCharacter'),
        )
        .min(6, e('PasswordMinLength')),
      confirmPassword: o().oneOf([w('password')], e('PasswordMustMatch')),
    });
function F() {
  var m, i, t, c;
  const { t: e } = S(),
    d = C(e),
    {
      register: a,
      handleSubmit: p,
      formState: { errors: r },
    } = f({ mode: 'onChange', resolver: x(d) }),
    u = async (g) => {
      console.log(g);
    };
  return s.jsxs('div', {
    className: l.signInFormSection,
    children: [
      s.jsx('h2', { children: e('Registration') }),
      s.jsxs('form', {
        onSubmit: p(u),
        className: l.formWrapper,
        children: [
          s.jsx(n, {
            type: 'text',
            label: e('Nickname'),
            name: 'nickname',
            placeholder: 'John_Doe',
            register: a,
            error:
              (m = r.nickname) != null && m.message ? r.nickname.message : '',
          }),
          s.jsx(n, {
            type: 'email',
            label: e('Email'),
            name: 'email',
            placeholder: 'example@gmai.com',
            register: a,
            error: (i = r.email) != null && i.message ? r.email.message : '',
          }),
          s.jsx(n, {
            type: 'password',
            label: e('Password'),
            name: 'password',
            placeholder: void 0,
            register: a,
            error:
              (t = r.password) != null && t.message ? r.password.message : '',
          }),
          s.jsx(n, {
            type: 'password',
            label: e('ConfirmPassword'),
            name: 'confirmPassword',
            placeholder: void 0,
            register: a,
            error:
              (c = r.confirmPassword) != null && c.message
                ? r.confirmPassword.message
                : '',
          }),
          s.jsx(P, { btnType: 'submit', children: e('Submit') }),
        ],
      }),
    ],
  });
}
function v() {
  return s.jsx(F, {});
}
export { v as default };
