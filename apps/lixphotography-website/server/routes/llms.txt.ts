import { faqs, services, siteInfo } from '../../app/data/site';

export default defineEventHandler((event) => {
  setHeader(event, 'Content-Type', 'text/plain; charset=utf-8');
  return [
    `# ${siteInfo.name}`, '', `> ${siteInfo.description}`, '',
    '## Official information',
    `- Website: ${siteInfo.url}/`, `- Address: ${siteInfo.location}`,
    `- Hours: ${siteInfo.hours}`, `- Phone: ${siteInfo.bookingPhone}`,
    `- Email: ${siteInfo.bookingEmail}`, `- Booking: ${siteInfo.whatsappHref}`, '',
    '## Pages', `- [Home, services and portfolio](${siteInfo.url}/)`,
    `- [Booking and contact](${siteInfo.url}/#contact)`,
    `- [Privacy and cookies](${siteInfo.url}/privacy)`, '',
    '## Services', ...services.map(service => `- ${service.title}: ${service.description}`), '',
    '## Frequently asked questions', ...faqs.map(faq => `### ${faq.question}\n${faq.answer}\n`),
  ].join('\n');
});
