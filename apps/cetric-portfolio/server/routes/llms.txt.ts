import { profile, projects, skills, experience } from '../../app/data/profile';
export default defineEventHandler((event) => {
  setHeader(event, 'Content-Type', 'text/plain; charset=utf-8');
  const currentRole = experience.find(job => job.dates === 'Present');
  return [
    `# ${profile.name}`, '', `> ${profile.summary}`, '',
    '## Current role', '- Founder and CEO of Staypace.', `- Based in ${profile.location}.`, '',
    '## Responsibilities at Staypace', currentRole?.summary ?? '',
    ...(currentRole?.highlights ?? []).map(item => `- ${item}`), '',
    '## Official pages', `- [Portfolio](${profile.url}/): selected work, experience, skills, and contact.`,
    `- [Curriculum vitae](${profile.url}/cv): detailed professional experience.`,
    `- [Download CV](${profile.url}/cetric-okola-cv.pdf)`,
    `- [Full profile text](${profile.url}/llms-full.txt)`, '',
    '## Selected work', ...projects.map(project => `- ${project.name}: ${project.description}`), '',
    '## Expertise', ...skills.map(group => `- ${group.title}: ${group.items.join(', ')}`), '',
    '## Contact', `- Email: ${profile.email}`, `- Phone: ${profile.phone}`, '',
  ].join('\n');
});
