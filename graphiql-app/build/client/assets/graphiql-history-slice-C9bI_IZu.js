import { c as e } from './redux-toolkit.modern-C1Urj9PA.js';
const o = (r, a) => {
    try {
      const i = JSON.stringify(a);
      localStorage.setItem(r, i);
    } catch (i) {
      throw new Error(`error ${i}`);
    }
  },
  t = { graphiQLLinks: [] },
  s = e({
    name: 'graphiql-links',
    initialState: t,
    reducers: {
      addGraphiQLLinks: (r, a) => {
        r.graphiQLLinks.push(...a.payload), o('graphiQL', r.graphiQLLinks);
      },
    },
  }),
  { addGraphiQLLinks: c } = s.actions,
  L = s.reducer;
export { c as a, L as g };
