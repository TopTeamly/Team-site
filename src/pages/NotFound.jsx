import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container not-found">
      <span className="section-kicker">خطأ 404</span>
      <h1 className="section-title">هذه الصفحة غير موجودة</h1>
      <p className="section-desc" style={{ marginInline: 'auto' }}>
        الرابط الذي حاولت الوصول إليه غير متاح. يمكنك العودة إلى الصفحة الرئيسية
        لمتابعة استعراض مستجدات فريق القمة.
      </p>
      <Link to="/" className="btn btn-primary">
        العودة إلى الرئيسية
      </Link>
    </div>
  )
}
