import { siteInfo } from '../../app/data/site';

export default defineEventHandler((event) => {
  setHeader(event, 'Content-Type', 'text/plain; charset=utf-8');
  return `User-agent: *\nAllow: /\n\nSitemap: ${siteInfo.url}/sitemap.xml\n`;
});
