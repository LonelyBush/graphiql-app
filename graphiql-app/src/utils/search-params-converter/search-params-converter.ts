export default function searchParamURLConverter(search: string) {
  return Object.entries(Object.fromEntries(new URLSearchParams(search))).map(
    (elem) => {
      return elem.reduce((acc: { [key: string]: string }, cur, index) => {
        if (index === 0) {
          acc['header-key'] = cur;
        }
        if (index === 1) {
          acc['header-value'] = cur;
        }
        return acc;
      }, {});
    },
  );
}
