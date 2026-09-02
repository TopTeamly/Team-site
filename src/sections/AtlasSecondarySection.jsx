import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { atlasSecondaryTracks } from '../data/atlasLinks.js'

export default function AtlasSecondarySection() {
  return (
    <section id="links" className="section">
      <div className="container">
        <Reveal>
          <SectionHeading
            kicker="أطلس"
            title="أطلس | المراحل الثانوية"
            desc="روابط منصات أطلس لكل مرحلة ثانوية، موزعة على القسمين العلمي والأدبي."
          />
        </Reveal>
        <div className="atlas-columns">
          {atlasSecondaryTracks.map((track, i) => (
            <Reveal as="div" className="atlas-track" delay={i * 90} key={track.grade}>
              <h3>{track.grade}</h3>
              <p className="track-sub">القسم العلمي والقسم الأدبي</p>
              {track.links.map((link) => (
                <a
                  key={link.url}
                  className="link-row"
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="label">{link.label}</span>
                  <span className="go">فتح القناة</span>
                </a>
              ))}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
