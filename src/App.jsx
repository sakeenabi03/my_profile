import React from 'react';
import { ArrowDown, ArrowUpRight, Code2, Github, Linkedin } from 'lucide-react';

const projects = [
  {
    number: '01',
    name: 'Kubernetes GitOps Platform',
    category: 'CLOUD / DEVOPS',
    description:
      'An automated Kubernetes deployment platform combining Terraform infrastructure, Helm releases, and Argo CD GitOps. Prometheus and Grafana provide workload visibility across the local cluster.',
    image:
      'https://raw.githubusercontent.com/sakeenabi03/devops-gitops/main/images/kubernetes.png',
    imageAlt: 'Kubernetes workload view from the GitOps deployment platform',
    stack: ['Terraform', 'Kubernetes', 'Helm', 'Argo CD', 'Prometheus', 'Grafana'],
    href: 'https://github.com/sakeenabi03/devops-gitops',
  },
  {
    number: '02',
    name: 'AI-Powered Knowledge Search',
    category: 'AI / KNOWLEDGE SYSTEMS',
    description:
      'A document search and chat system that grounds answers in uploaded files, with source citations to make each response verifiable.',
    image:
      'https://raw.githubusercontent.com/sakeenabi03/AI-Powered-Knowledge-Search/main/images/dashboard.png',
    imageAlt: 'Document workspace and chat dashboard for AI-Powered Knowledge Search',
    stack: ['FastAPI', 'Next.js', 'ChromaDB', 'RAG'],
    href: 'https://github.com/sakeenabi03/AI-Powered-Knowledge-Search',
  },
  {
    number: '03',
    name: 'Kanesea',
    category: 'FULL-STACK / E-COMMERCE / DEVOPS',
    description:
      'A full-stack shopping platform with product discovery, secure checkout, order tracking, and inventory management. Its DevOps setup adds Docker and Compose, GitHub Actions image publishing, and Prometheus/Grafana monitoring with cAdvisor.',
    image: 'https://raw.githubusercontent.com/sakeenabi03/Kanesea/main/screenshots/1.png',
    imageAlt: 'Kanesea e-commerce storefront homepage',
    stack: ['React', 'Node.js', 'MongoDB', 'Razorpay', 'Docker', 'GitHub Actions', 'Prometheus', 'Grafana'],
    href: 'https://github.com/sakeenabi03/Kanesea',
  },
];

const focusAreas = [
  {
    index: '01',
    title: 'Cloud infrastructure',
    detail: 'Repeatable deployments, GitOps workflows, and infrastructure observability.',
  },
  {
    index: '02',
    title: 'Applied AI',
    detail: 'Retrieval, document pipelines, and answers grounded in source material.',
  },
  {
    index: '03',
    title: 'Product engineering',
    detail: 'Responsive interfaces and complete user journeys, from discovery to checkout.',
  },
];

const experience = [
  {
    role: 'Associate Software Engineer',
    company: 'Synamedia',
    dates: 'Jun 2025 – May 2026',
    highlights: [
      'Automated EC2 provisioning across customer environments with Terraform, cutting infrastructure delivery time by 50%.',
      'Diagnosed Kubernetes pod crashes and production deployment failures to help resolve incidents faster.',
      'Built GitHub Actions CI/CD pipelines with self-hosted runners to automate builds and deployments.',
      'Wrote Python scripts integrated with Grafana and Prometheus to detect anomalies and reduce alert noise.',
    ],
  },
  {
    role: 'Graduate Intern',
    company: 'Synamedia',
    dates: 'Feb 2025 – Jun 2025',
    highlights: [
      'Built an S3-triggered Lambda function to compress uploaded files, reducing S3 storage costs by 30%.',
      'Refactored Dockerfiles to reduce image size, speed up pipeline builds, and strengthen container security.',
      'Designed multi-tenant monitoring dashboards and alerting, reducing issue detection time by 80%.',
      'Upgraded Amazon EKS clusters across production environments to improve platform availability and scalability.',
    ],
  },
];

const skillGroups = [
  {
    title: 'DevOps / Cloud',
    skills: ['Docker', 'Kubernetes', 'Terraform', 'Helm', 'Argo CD', 'Jenkins', 'Git', 'GitHub', 'CI/CD pipelines'],
  },
  {
    title: 'Monitoring',
    skills: ['Prometheus', 'Grafana', 'CloudWatch', 'Logging', 'Alerting', 'Troubleshooting'],
  },
  { title: 'Languages', skills: ['Python', 'SQL'] },
  { title: 'Cloud platforms', skills: ['AWS', 'Cloud infrastructure', 'Cloud deployment'] },
  { title: 'Databases', skills: ['MongoDB', 'Redis'] },
  {
    title: 'Core concepts',
    skills: ['Microservices', 'Cloud-native architecture', 'Continuous improvement', 'Continuous delivery'],
  },
  {
    title: 'Soft skills',
    skills: ['Accountability', 'Collaboration', 'Communication', 'Reliability', 'Leadership', 'Teamwork'],
  },
];

function ProjectCard({ project }) {
  return (
    <article className={`project project--${project.number}`}>
      <a
        className="project__visual"
        href={project.href}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open ${project.name} on GitHub`}
      >
        <img src={project.image} alt={project.imageAlt} loading="lazy" />
        <span className="project__number">{project.number}</span>
        <span className="project__image-link" aria-hidden="true">
          <ArrowUpRight size={19} strokeWidth={1.8} />
        </span>
      </a>
      <div className="project__body">
        <p className="eyebrow">{project.category}</p>
        <h3>{project.name}</h3>
        <p className="project__description">{project.description}</p>
        <div className="project__meta">
          <ul className="tags" aria-label="Technologies">
            {project.stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <a className="text-link" href={project.href} target="_blank" rel="noreferrer">
            Explore project <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}

function App() {
  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Sakeena Bi, home">
          <span className="wordmark__monogram">SB</span>
          <span>Sakeena Bi</span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#work">Selected work</a>
          <a href="#approach">Focus</a>
        </nav>
        <a
          className="header-link"
          href="https://github.com/sakeenabi03"
          target="_blank"
          rel="noreferrer"
        >
          GitHub <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </header>

      <main>
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="hero__copy">
            <p className="eyebrow hero__eyebrow">
              <span className="status-dot" aria-hidden="true" />
              SOFTWARE · AI · INFRASTRUCTURE
            </p>
            <h1 id="hero-title">
              Building things
              <br />
              that <span>work together.</span>
            </h1>
            <div className="hero__lower">
              <p>
                I’m Sakeena. My work moves between intelligent software, thoughtful
                product experiences, and the systems that keep them running.
              </p>
              <a className="round-link" href="#work" aria-label="Scroll to selected work">
                <ArrowDown size={20} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="hero-art__orbit hero-art__orbit--outer" />
            <div className="hero-art__orbit hero-art__orbit--inner" />
            <div className="hero-art__core">S</div>
            <span className="hero-art__spark hero-art__spark--one">✳</span>
            <span className="hero-art__spark hero-art__spark--two">✳</span>
            <span className="hero-art__label">Curiosity in practice</span>
          </div>
          <div className="hero__index" aria-hidden="true">
            <span>PORTFOLIO</span>
            <span>01 — 03</span>
          </div>
        </section>

        <section className="work-section" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">A FEW THINGS I’VE MADE</p>
              <h2 id="work-title">Selected work<span className="accent-dot">.</span></h2>
            </div>
            <p className="section-heading__aside">Different problems, connected by care for the details.</p>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <ProjectCard key={project.number} project={project} />
            ))}
          </div>
        </section>

        <section className="experience-section" id="experience" aria-labelledby="experience-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">1.5+ YEARS AT SYNAMEDIA</p>
              <h2 id="experience-title">Experience<span className="accent-dot">.</span></h2>
            </div>
            <p className="section-heading__aside">Full-time and internship experience across DevOps and cloud monitoring.</p>
          </div>
          <div className="experience-list">
            {experience.map((position) => (
              <article className="experience-item" key={position.role}>
                <div className="experience-item__heading">
                  <div>
                    <h3>{position.role}</h3>
                    <p>{position.company}</p>
                  </div>
                  <span>{position.dates}</span>
                </div>
                <ul>
                  {position.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="skills-section" aria-labelledby="skills-title">
          <div className="skills-intro">
            <p className="eyebrow">TOOLS & PRACTICE</p>
            <h2 id="skills-title">A practical toolkit<span className="accent-dot">.</span></h2>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-group" key={group.title}>
                <h3>{group.title}</h3>
                <p>{group.skills.join(' · ')}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="education-section" aria-labelledby="education-title">
          <div>
            <p className="eyebrow">EDUCATION</p>
            <h2 id="education-title">Bachelor of Engineering<br />in Computer Science</h2>
          </div>
          <div className="education-details">
            <p>BNM Institute of Technology</p>
            <p>Bengaluru, Karnataka</p>
            <span>9.5 / 10 CGPA</span>
          </div>
        </section>

        <section className="approach-section" id="approach" aria-labelledby="approach-title">
          <div className="approach-intro">
            <p className="eyebrow">THE THROUGH-LINE</p>
            <h2 id="approach-title">Curious by nature.<br /><span>Practical by design.</span></h2>
          </div>
          <div className="focus-list">
            {focusAreas.map((area) => (
              <article className="focus-row" key={area.index}>
                <span className="focus-row__index">{area.index}</span>
                <h3>{area.title}</h3>
                <p>{area.detail}</p>
                <span className="focus-row__mark" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="wordmark wordmark--footer" href="#home" aria-label="Back to top">
          <span className="wordmark__monogram">SB</span>
          <span>Sakeena Bi</span>
        </a>
        <p>Made with intention. Deployed with care.</p>
        <div className="footer-links">
          <a href="https://github.com/sakeenabi03" target="_blank" rel="noreferrer" aria-label="GitHub profile">
            <Github size={18} aria-hidden="true" />
          </a>
          <a href="https://leetcode.com/u/sakeena_bi03/" target="_blank" rel="noreferrer" aria-label="LeetCode profile">
            <Code2 size={18} aria-hidden="true" />
          </a>
          <a href="https://www.linkedin.com/in/sakeenabi" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
            <Linkedin size={18} aria-hidden="true" />
          </a>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </>
  );
}

export default App;