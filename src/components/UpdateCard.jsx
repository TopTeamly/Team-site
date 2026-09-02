import { Link } from 'react-router-dom'
import StatusBadge from './StatusBadge.jsx'
import Reveal from './Reveal.jsx'

export default function UpdateCard({ update, delay = 0 }) {
  return (
    <Reveal as="article" className="card update-card" delay={delay}>
      <span className="update-number">{String(update.number).padStart(2, '0')}</span>
      <StatusBadge status={update.status} />
      <h3>{update.title}</h3>
      <p>{update.summary}</p>
      <Link to={`/updates/${update.slug}`} className="update-read-more">
        اقرأ التفاصيل
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </Reveal>
  )
}
