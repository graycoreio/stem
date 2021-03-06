/**
 * Truncates query parameters and fragments from a URI.
 * e.g. /foo/bar/baz.html?thing=test#id -> /foo/bar/baz.html
 */
export const daffUriTruncateQueryFragment = (uri: string): string => {
  if(uri[0] !== '/') {
    uri = `/${uri}`;
  }
  return uri.replace(/(\?.*)|(#.*)/, '');
};
