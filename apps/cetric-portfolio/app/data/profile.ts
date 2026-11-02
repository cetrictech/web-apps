export const profile = {
  name: 'Cetric Okola',
  title: 'Founder & CEO, Staypace',
  url: 'https://cetric.tech',
  companyUrl: 'https://staypace.com',
  email: 'cetric@staypace.com',
  phone: '+254 704 145832',
  phoneHref: 'tel:+254704145832',
  location: 'Nairobi, Kenya',
  summary: 'Founder and CEO of Staypace, and a software engineer and technical leader with 9+ years of experience designing, building, and scaling reliable software systems across web, cloud, data, and AI-enabled platforms.',
};

export const experience = [
  {
    company: 'Staypace', role: 'Founder & CEO', dates: 'Present', type: 'Leadership',
    summary: 'Lead Staypace’s company direction and product delivery while remaining hands-on in system architecture and software engineering.',
    highlights: [
      'Company leadership: Set strategy, priorities, and direction, aligning business goals with product and engineering delivery.',
      'Product direction: Translate customer and stakeholder needs into a clear roadmap, practical requirements, and delivery priorities.',
      'Technical architecture: Design scalable systems, service boundaries, APIs, and data models, with attention to security and maintainability.',
      'Hands-on engineering: Build and review backend services, integrations, and product features, guiding implementation from concept to production.',
      'Engineering leadership: Guide technical decisions, mentor developers, and establish code review, testing, and delivery practices.',
      'Infrastructure and reliability: Oversee cloud infrastructure, CI/CD, monitoring, and operational improvements for dependable software delivery.',
    ],
  },
  {
    company: 'Staypace Limited', role: 'Lead Fintech Architect & MVP Engineer',
    dates: 'Dec 2025 — Jun 2026', type: 'Contract',
    summary: 'Led architecture and hands-on development of a fintech MVP, taking payment workflows from early concept to a working platform.',
    highlights: ['Built pay-ins, payouts, collections, disbursements, refunds, reversals, and transaction tracking.', 'Designed configurable payment orchestration across providers, currencies, countries, and merchant rules.', 'Owned service boundaries, API contracts, database models, retries, callbacks, and asynchronous processing.'],
  },
  {
    company: 'Purple Elephant Ventures', role: 'Lead Systems Architect',
    dates: 'Jul 2025 — Jan 2026', type: 'Contract',
    summary: 'Led the architecture and development of Swoop Africa, establishing the technical roadmap and a scalable platform foundation.',
    highlights: ['Designed secure multi-tenant backend services with Node.js and PostgreSQL.', 'Established containerized cloud infrastructure and CI/CD pipelines.', 'Worked with product and business teams on technical priorities, maintainability, and infrastructure costs.'],
  },
  {
    company: 'TandaPay', role: 'Chief Technology Officer', dates: 'Feb 2024 — Jun 2025', type: 'Leadership',
    summary: 'Led technology strategy, platform scalability, engineering teams, and AI integration in the fintech ecosystem.',
    highlights: ['Developed Wallet-as-a-Service capabilities for merchant digital wallets and payments.', 'Scaled microservices using Docker, Kubernetes, and Google Cloud, supporting 99.9% uptime.', 'Led AI-powered KYC document parsing with OCR and NLP, alongside transaction anomaly detection.'],
  },
  {
    company: 'TandaPay', role: 'Lead Software Engineer', dates: 'Dec 2022 — Feb 2024', type: 'Engineering',
    summary: 'Managed a team of 10 developers building a payment gateway for merchant collections and disbursements.',
    highlights: ['Introduced Drone CI pipelines and automated testing across unit, integration, and end-to-end workflows.', 'Designed microservices and centralized email and SMS delivery.', 'Mentored engineers, led code reviews, and collaborated with product and design teams.'],
  },
  {
    company: 'TandaPay', role: 'Senior Software Engineer', dates: 'Sep 2021 — Dec 2022', type: 'Engineering',
    summary: 'Built data pipelines, APIs, monitoring, and transaction tracing for production payment systems.',
    highlights: ['Integrated third-party services and developed web alternatives to existing mobile applications.', 'Contributed to project planning, operational feasibility, and solution design.'],
  },
  {
    company: 'Cytonn Investments', role: 'Associate Software Engineer', dates: 'Jul 2020 — Sep 2021', type: 'Engineering',
    summary: 'Developed and maintained web applications, supported production systems, and mentored junior developers.',
    highlights: ['Worked across requirements, design, implementation, and technical support.', 'Collaborated with designers on intuitive web experiences.'],
  },
  {
    company: 'Cytonn Investments', role: 'Junior Software Engineer', dates: 'Oct 2019 — Jul 2020', type: 'Engineering',
    summary: 'Modernized existing applications with PHP Laravel and contributed to a new Vue.js web portal.',
    highlights: ['Updated legacy code to improve functionality and maintainability.'],
  },
];

export const projects = [
  { number: '01', category: 'PAYMENTS & PLATFORM ARCHITECTURE', title: 'From concept to\na fintech MVP.', name: 'Staypace · Fintech platform', url: 'https://staypace.com', description: 'Configurable pay-ins, payouts, merchant collections, and transaction orchestration. Architecture and hands-on engineering, from the data model to the payment flow.', tags: ['Payment orchestration', 'Backend systems', 'API design'], detail: 'Designed transaction references, provider routing, payment steps, audit trails, retries, and callbacks across multiple merchants, currencies, and countries.' },
  { number: '02', category: 'SPORTS & DIGITAL EXPERIENCES', title: 'A digital arena.\nBuilt for the fans.', name: 'PlayDarena · Sports challenge platform', url: 'https://playdarena.com', description: 'A sports challenge platform bringing together a public website, participant experience, and administration tools. Work spanning web applications and shared platform foundations.', tags: ['Nuxt.js', 'Nx monorepo', 'Platform integration'], detail: 'Worked on PlayDarena’s web platform, including participant and administration experiences, shared API integration, and identity flows across an Nx monorepo.' },
  { number: '03', category: 'MULTI-TENANT SYSTEMS', title: 'A foundation\nfor Swoop Africa.', name: 'Purple Elephant Ventures · Swoop Africa', url: null, description: 'A scalable platform foundation with secure multi-tenant services, a clear technical roadmap, and infrastructure built for sustainable growth.', tags: ['Node.js', 'PostgreSQL', 'Cloud & CI/CD'], detail: 'Led the system blueprint, backend data modelling, API design, containerized infrastructure, and technical delivery in collaboration with product and business teams.' },
  { number: '04', category: 'APPLIED AI & FINTECH', title: 'Less manual review.\nSmarter onboarding.', name: 'TandaPay · AI-driven KYC', url: null, description: 'AI-powered document parsing and onboarding workflows using OCR and NLP to reduce manual review and improve compliance accuracy.', tags: ['OCR & NLP', 'AI integration', 'KYC automation'], detail: 'Led the development of KYC automation tools and real-time transaction anomaly detection as part of the platform’s technology strategy.' },
];

export const additionalProjects = [
  { name: 'Kusco Agri Loans', description: 'A lending assessment system that evaluates farmer produce history to inform loan eligibility.' },
  { name: 'Lima Portal', description: 'A platform connecting farm produce suppliers and buyers to improve market linkages and supply chains.' },
];

export const skills = [
  { title: 'Backend & data', items: ['Golang', 'Node.js', 'Java', 'Python', 'REST APIs', 'gRPC', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis'] },
  { title: 'Web & interfaces', items: ['TypeScript', 'JavaScript', 'React.js', 'Vue.js', 'Nuxt.js', 'HTML & CSS'] },
  { title: 'Cloud & delivery', items: ['Docker', 'Kubernetes', 'AWS', 'Google Cloud', 'Drone CI', 'Jenkins', 'Linux', 'Nx'] },
  { title: 'Architecture & applied AI', items: ['Microservices', 'Multi-tenancy', 'Kafka', 'RabbitMQ', 'System design', 'Automated testing', 'OpenAI APIs', 'NLP & OCR', 'OpenCV'] },
];
