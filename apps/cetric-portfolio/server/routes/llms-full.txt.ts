import { profile, projects, additionalProjects, experience, skills } from '../../app/data/profile';
export default defineEventHandler((event) => {
  setHeader(event, 'Content-Type', 'text/plain; charset=utf-8');
  return [
    `# ${profile.name}`, '', profile.summary, '',
    `Official website: ${profile.url}/`, `Current role: ${profile.title}`, `Company website: ${profile.companyUrl}`, `Location: ${profile.location}`, '',
    '## Experience', ...experience.map(job => [`### ${job.role} — ${job.company}`, job.dates, job.summary, ...job.highlights.map(item => `- ${item}`), ''].join('\n')), '',
    '## Projects', ...projects.map(project => `### ${project.name}\n${project.description}\n${project.detail}\n${project.url ? `Website: ${project.url}\n` : ''}`),
    ...additionalProjects.map(project => `### ${project.name}\n${project.description}\n`), '',
    '## Skills', ...skills.map(group => `- ${group.title}: ${group.items.join(', ')}`), '',
    '## Contact', `Email: ${profile.email}`, `Phone: ${profile.phone}`, '',
  ].join('\n');
});
