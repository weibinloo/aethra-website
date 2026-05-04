export function withBase(path = '/') {
  if (/^(https?:|mailto:|tel:|#)/.test(path)) {
    return path;
  }

  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  return `${base}${normalizedPath}` || '/';
}
