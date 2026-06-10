/**
 * Prepends Vite's base URL to an asset path.
 * In dev: base = "/"  →  "/assets/images/foo.png"
 * In prod (GitHub Pages): base = "/portfolio/"  →  "/portfolio/assets/images/foo.png"
 */
const base = import.meta.env.BASE_URL;

export function asset(path: string): string {
  // Remove leading slash to avoid double slashes
  const clean = path.startsWith("/") ? path.slice(1) : path;
  return `${base}${clean}`;
}
