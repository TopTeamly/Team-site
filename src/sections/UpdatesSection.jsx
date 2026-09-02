import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import UpdateCard from '../components/UpdateCard.jsx'
import { updates } from '../data/updates.js'

export default function UpdatesSection() {
  return (
    <section id="updates" className="section">
      <div className="container">
        <Reveal>
          <SectionHeading
            kicker="أغسطس 2026"
            title="أبرز مستجدات أغسطس 2026"
          />
        </Reveal>
        <div className="grid grid-3">
          {updates.map((update, i) => (
            <UpdateCard update={update} delay={(i % 3) * 70} key={update.slug} />
          ))}
        </div>
      </div>
    </section>
  )
}
