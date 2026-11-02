import { siteInfo } from '../../app/data/site';

export default defineEventHandler((event) => {
  setHeader(event, 'Content-Type', 'application/xml; charset=utf-8');
  const urls = ['/', '/privacy'].map(path => `<url><loc>${siteInfo.url}${path}</loc></url>`).join('');
  return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
});
