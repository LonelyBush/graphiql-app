import { r as s, j as t } from './index-k4sjWK-j.js';
import { B as x } from './button-ikYNQhX4.js';
const j = ['GET', 'POST', 'PUT', 'DELETE'];
function y() {
  const [n, u] = s.useState('GET'),
    [o, l] = s.useState(''),
    [a, i] = s.useState(''),
    [r, c] = s.useState({ status: 0, body: '' }),
    h = async () => {
      try {
        const e = { method: n, headers: {} };
        n !== 'GET' && (e.body = a);
        const d = await fetch(o, e),
          p = await d.text();
        c({ status: d.status, body: p });
      } catch {
        c({ status: 0, body: 'Error' });
      }
    };
  return t.jsxs('div', {
    children: [
      t.jsxs('header', {
        children: [
          t.jsx('select', {
            value: n,
            onChange: (e) => u(e.target.value),
            children: j.map((e) =>
              t.jsx('option', { value: e, children: e }, e),
            ),
          }),
          t.jsx('input', {
            type: 'text',
            value: o,
            onChange: (e) => l(e.target.value),
            placeholder: 'Endpoint URL',
          }),
        ],
      }),
      t.jsx('textarea', {
        value: a,
        onChange: (e) => i(e.target.value),
        placeholder: 'Request Body',
      }),
      t.jsx(x, { btnType: 'button', onClick: h, children: 'Send Request' }),
      t.jsxs('section', {
        children: [
          t.jsx('h3', { children: 'Response' }),
          t.jsxs('p', { children: ['Status: ', r.status] }),
          t.jsx('pre', { children: r.body }),
        ],
      }),
    ],
  });
}
function v() {
  return t.jsx(y, {});
}
export { v as default };
