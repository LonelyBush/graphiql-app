import { c as i } from './redux-toolkit.modern-C1Urj9PA.js';
const n = { restLinks: [] },
  s = i({
    name: 'rest-links',
    initialState: n,
    reducers: {
      addRestLinks: (e, t) => {
        e.restLinks.push(...t.payload);
      },
    },
  }),
  { addRestLinks: a } = s.actions,
  c = s.reducer;
export { a, c as r };
