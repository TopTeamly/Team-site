import { Link, useParams } from 'react-router-dom'
import StatusBadge from '../components/StatusBadge.jsx'
import Reveal from '../components/Reveal.jsx'
import { getUpdateBySlug, getAdjacentUpdates } from '../data/updates.js'
import NotFound from './NotFound.jsx'

export default function UpdateDetail() {
  const { slug } = useParams()
  const update = getUpdateBySlug(slug)

  if (!update) return <NotFound />

  const { prev, next } = getAdjacentUpdates(slug)

  return (
    <article className="detail-hero">
      <div className="container">
        <Reveal>
          <Link to="/" state={{ scrollTo: 'updates' }} className="back-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            العودة إلى المستجدات
          </Link>
        </Reveal>

        <Reveal>
          <div className="detail-meta">
            <span className="detail-number">{String(update.number).padStart(2, '0')}</span>
            <StatusBadge status={update.status} />
          </div>
          <h1 className="detail-title">{update.title}</h1>
        </Reveal>

        <Reveal className="detail-visual" delay={80}>
          <span>{update.title}</span>
        </Reveal>

        <Reveal delay={120}>
          <div className="detail-article">
            {update.article.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <nav className="detail-nav" aria-label="التنقل بين المستجدات">
          {prev ? (
            <Link className="detail-nav-link" to={`/updates/${prev.slug}`}>
              <span className="caption">السابق</span>
              <span className="title">{prev.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link className="detail-nav-link next" to={`/updates/${next.slug}`}>
              <span className="caption">التالي</span>
              <span className="title">{next.title}</span>
            </Link>
          )}
        </nav>
      </div>
    </article>
  )
}
