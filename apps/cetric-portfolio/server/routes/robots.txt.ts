import { profile } from '../../app/data/profile';
export default defineEventHandler((event) => {
  setHeader(event, 'Content-Type', 'text/plain; charset=utf-8');
  return `User-agent: *\nAllow: /\n\nSitemap: ${profile.url}/sitemap.xml\n`;
});
