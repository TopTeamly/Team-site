import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import StatusBadge from '../components/StatusBadge.jsx'
import { projects } from '../data/projects.js'

export default function ProjectsSection() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal>
          <SectionHeading kicker="مشاريع الفريق" title="المشاريع" />
        </Reveal>
        <div className="grid grid-2">
          {projects.map((project, i) => (
            <Reveal as="div" className="card project-card" delay={i * 80} key={project.name}>
              <StatusBadge status={project.status} />
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
