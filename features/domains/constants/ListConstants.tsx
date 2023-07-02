type List = {
  title?: string;
  subtitle?: string;
  category?: string;
  text?: string;
};

export const ListConstants: List[] = [
  {
    title: 'Programming Languages / Frameworks / Libraries etc...',
    subtitle: 'Frontend',
    category: 'Web',
    text: 'HTML, CSS, JavaScript, TypeScript, React.js, Next.js, tailwind CSS, Node.js, Vue.js, Jest, Testing Library, Material-UI, Bootstrap, Selenium',
  },
];

export const IsOpenListConstants: List[] = [
  {
    category: 'Mobile',
    text: 'React Native, Expo',
  },
  {
    subtitle: 'Backend',
    text: 'Python (Django, FastAPI), Ruby (Ruby on Rails), PHP (CodeIgniter), Go (Echo), Java (Spring Boot), AWS Lambda, Maven, JUnit',
  },
  {
    subtitle: 'Android',
    text: 'Kotlin, Java',
  },
  {
    subtitle: 'IOS',
    text: 'Swift',
  },
  {
    title: 'Infrastructure',
    text: 'AWS (Amazon Web Services)',
  },
  {
    subtitle: 'IaC (Infrastructure as Code)',
    text: 'CloudFormation, Terraform',
  },
  {
    subtitle: 'OS',
    text: 'Linux (Amazon Linux, Ubuntu), Windows',
  },
  {
    subtitle: 'Middleware',
    text: 'NGINX, Docker, Docker Compose, Git, Apache, NewRelic, SonarQube',
  },
  {
    subtitle: 'Database',
    text: 'MySQL, PostgreSQL, ElastiCache (Redis, Memcached), Amazon S3, Firebase, Oracle, DocumentDB, DynamoDB',
  },
  {
    title: 'Business Tools',
    text: 'GitHub, Slack, Google Workspace, Backlog, esa, Miro, draw.io, Teams',
  },
  {
    title: 'CMS',
    text: 'HeartCore, WordPress',
  },
  {
    title: 'CRM',
    text: 'Salesforce',
  },
];
