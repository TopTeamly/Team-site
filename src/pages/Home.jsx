import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Hero from '../sections/Hero.jsx'
import Introduction from '../sections/Introduction.jsx'
import Summary from '../sections/Summary.jsx'
import UpdatesSection from '../sections/UpdatesSection.jsx'
import ProjectsSection from '../sections/ProjectsSection.jsx'
import AtlasSecondarySection from '../sections/AtlasSecondarySection.jsx'
import ImportantLinksSection from '../sections/ImportantLinksSection.jsx'
import NextStage from '../sections/NextStage.jsx'
import Closing from '../sections/Closing.jsx'

export default function Home() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const targetId = location.state?.scrollTo
    if (!targetId) return
    const el = document.getElementById(targetId)
    if (el) {
      // Wait a tick so the page has finished laying out before scrolling.
      requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }))
    }
    navigate(location.pathname, { replace: true, state: {} })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.state])

  return (
    <>
      <Hero />
      <hr className="divider container" />
      <Introduction />
      <Summary />
      <UpdatesSection />
      <ProjectsSection />
      <AtlasSecondarySection />
      <ImportantLinksSection />
      <NextStage />
      <Closing />
    </>
  )
}
