import Reveal from '../components/Reveal.jsx'

export default function Hero() {
  const scrollToUpdates = (event) => {
    event.preventDefault()
    document.getElementById('updates')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-frame" aria-hidden="true" />
      <div className="container">
        <Reveal className="hero-inner">
          <span className="hero-badge">
            <span className="dot" />
            التقرير الشهري الرسمي
          </span>

          <p className="hero-team">فريق القمة</p>
          <h1 className="hero-title">أعمال ومستجدات فريق القمة</h1>
          <p className="eyebrow-date">أغسطس 2026</p>
          <p className="hero-desc">
            نستعرض فيه أبرز ما أُنجز، وما بدأ العمل عليه، وما يستعد للظهور.
          </p>

          <div className="hero-actions">
            <a href="#updates" className="btn btn-primary" onClick={scrollToUpdates}>
              استكشف مستجدات أغسطس
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
