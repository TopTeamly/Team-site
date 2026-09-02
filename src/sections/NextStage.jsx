import Reveal from '../components/Reveal.jsx'

export default function NextStage() {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="transition-band">
          <span className="section-kicker">إلى الأمام</span>
          <h2 className="section-title">من أغسطس إلى المرحلة القادمة</h2>
          <p className="section-desc" style={{ marginInline: 'auto' }}>
            مع طي صفحة أغسطس، يواصل فريق القمة العمل على ما بدأه هذا الشهر،
            وينتقل بما تحقق إلى المرحلة القادمة، حاملًا معه نفس الحرص والجدية
            في متابعة كل مشروع وفكرة حتى تصل إلى صورتها النهائية.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
