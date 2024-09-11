export default function dynamicPathConverter(pathStr: string | undefined):
  | {
      url: string;
      body: string;
    }
  | Record<string, never> {
  return pathStr
    ? (pathStr.split('/').reduce(
        (acc, cur, index) => ({
          ...acc,
          [index === 0 ? 'url' : 'body']: cur,
        }),
        {},
      ) as { url: string; body: string })
    : {};
}
