import Reveal from '../components/Reveal.jsx'

export default function Introduction() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <SectionText />
        </Reveal>
      </div>
    </section>
  )
}

function SectionText() {
  return (
    <div className="section-head" style={{ maxWidth: '760px' }}>
      <span className="section-kicker">مقدمة</span>
      <h2 className="section-title">أغسطس 2026</h2>
      <p className="section-desc" style={{ maxWidth: '68ch' }}>
        شهد شهر أغسطس استمرار العمل على المشاريع القائمة، إلى جانب اكتمال عدد منها،
        وانطلاق العمل على أفكار ومشاريع جديدة، وذلك بالتوازي مع التحضير للمرحلة
        القادمة. فيما يلي استعراض لأبرز ما شهده هذا الشهر من أعمال فريق القمة.
      </p>
    </div>
  )
}
