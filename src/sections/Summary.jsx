import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'

const CATEGORIES = [
  {
    label: 'مكتمل',
    desc: 'أعمال أُنجزت بالكامل خلال هذا الشهر.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'قيد التطوير',
    desc: 'أعمال جارٍ العمل عليها حاليًا.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path
          d="M12 3v3m0 12v3m9-9h-3M6 12H3m14.5-6.5l-2.1 2.1M8.6 15.4l-2.1 2.1m0-11l2.1 2.1m8.8 8.8l-2.1-2.1"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: 'تطوير الأفكار',
    desc: 'أفكار قيد التبلور قبل الانتقال للتنفيذ.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path
          d="M9 18h6M10 21h4M12 3a6 6 0 00-3.5 10.9c.5.4.8 1 .8 1.6v.5h5.4v-.5c0-.6.3-1.2.8-1.6A6 6 0 0012 3z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: 'مشروع جديد',
    desc: 'مشاريع انطلقت لأول مرة هذا الشهر.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 5v14M5 12h14" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'قيد الإعداد',
    desc: 'خطوات تحضيرية جارية استعدادًا للانطلاق.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="5" width="16" height="15" rx="2" />
        <path d="M4 10h16M8 3v4M16 3v4" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default function Summary() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <SectionHeading kicker="نظرة عامة" title="حصيلة أغسطس" />
        </Reveal>
        <div className="grid grid-summary">
          {CATEGORIES.map((cat, i) => (
            <Reveal as="div" className="card summary-card" delay={i * 70} key={cat.label}>
              <span className="summary-icon">{cat.icon}</span>
              <h3>{cat.label}</h3>
              <p>{cat.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
