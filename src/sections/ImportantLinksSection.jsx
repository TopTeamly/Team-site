import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { importantLinks } from '../data/importantLinks.js'

export default function ImportantLinksSection() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <SectionHeading kicker="روابط مهمة" title="روابط مهمة" />
        </Reveal>
        <Reveal className="links-list" style={{ maxWidth: '520px' }}>
          {importantLinks.map((link) => (
            <a key={link.url} className="link-row" href={link.url} target="_blank" rel="noreferrer">
              <span className="label">{link.label}</span>
              <span className="go">فتح القناة</span>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
