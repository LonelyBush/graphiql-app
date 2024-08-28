import { j as s } from './index-k4sjWK-j.js';
import {
  c as u,
  a as m,
  u as g,
  F as i,
  o as h,
} from './form-control-Cv0RCtaP.js';
import { B as f } from './button-ikYNQhX4.js';
import { u as w } from './useTranslation-pYUzJfcX.js';
import './index-BCQ0Yyab.js';
const x = '_signInFormSection_tdlug_1',
  S = '_formWrapper_tdlug_15',
  t = { signInFormSection: x, formWrapper: S },
  b = (e) =>
    u().shape({
      email: m().email(e('InvalidEmail')).required(e('EmailRequired')),
      password: m()
        .required(e('PasswordRequired'))
        .matches(/.*\d.*/, e('PasswordContainsNumber'))
        .matches(/.*[A-Z].*/, e('PasswordContainsUppercase'))
        .matches(/.*[a-z].*/, e('PasswordContainsLowercase'))
        .matches(
          /.*[!@#$%^&*(),.?":{}|<>].*/,
          e('PasswordContainsSpecialCharacter'),
        )
        .min(6, e('PasswordMinLength')),
    });
function j() {
  var a, n;
  const { t: e } = w(),
    c = b(e),
    {
      register: o,
      handleSubmit: l,
      formState: { errors: r },
    } = g({ mode: 'onChange', resolver: h(c) }),
    d = async (p) => {
      console.log(p);
    };
  return s.jsxs('div', {
    className: t.signInFormSection,
    children: [
      s.jsx('h2', { children: e('Login') }),
      s.jsxs('form', {
        onSubmit: l(d),
        className: t.formWrapper,
        children: [
          s.jsx(i, {
            type: 'email',
            label: e('Email'),
            name: 'email',
            placeholder: 'example@gmai.com',
            register: o,
            error: (a = r.email) != null && a.message ? r.email.message : '',
          }),
          s.jsx(i, {
            type: 'password',
            label: e('Password'),
            name: 'password',
            placeholder: void 0,
            register: o,
            error:
              (n = r.password) != null && n.message ? r.password.message : '',
          }),
          s.jsx(f, { btnType: 'submit', children: e('Submit') }),
        ],
      }),
    ],
  });
}
function y() {
  return s.jsx(j, {});
}
export { y as default };
