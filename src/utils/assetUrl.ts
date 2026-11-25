/** Resolve a public asset path cleanly across local dev (`/`) and subpath hosts like GitHub Pages (`./`). */
export function assetUrl(path: string): string {
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('data:') ||
    path.startsWith('./')
  ) {
    return path;
  }
  const base = import.meta.env.BASE_URL || '/';
  if (base !== '/' && path.startsWith(base)) {
    return path;
  }
  const normalized = path.replace(/^\/+/, '');
  return `${base}${normalized}`;
}
