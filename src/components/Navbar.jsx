import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.jpg'

const NAV_ITEMS = [
  { id: 'hero', label: 'الرئيسية' },
  { id: 'updates', label: 'المستجدات' },
  { id: 'projects', label: 'المشاريع' },
  { id: 'links', label: 'الروابط' },
  { id: 'closing', label: 'الخاتمة' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const goToSection = (id) => (event) => {
    event.preventDefault()
    setOpen(false)
    if (location.pathname === '/') {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      navigate('/', { state: { scrollTo: id } })
    }
  }

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="/" className="brand" onClick={goToSection('hero')}>
          <img src={logo} alt="شعار فريق القمة" className="brand-logo" />
          <span>فريق القمة</span>
        </a>

        <nav className="nav-links" aria-label="التنقل الرئيسي">
          {NAV_ITEMS.map((item) => (
            <a key={item.id} href={`/#${item.id}`} onClick={goToSection(item.id)}>
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? 'إغلاق القائمة' : 'فتح القائمة'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      <div className={`container mobile-menu ${open ? 'is-open' : ''}`}>
        {NAV_ITEMS.map((item) => (
          <a key={item.id} href={`/#${item.id}`} onClick={goToSection(item.id)}>
            {item.label}
          </a>
        ))}
      </div>
    </header>
  )
}
