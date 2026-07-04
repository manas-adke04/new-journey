import { BrandMark } from './BrandMark'
import { NavLink } from 'react-router-dom'
import { navigationLinks } from '../utils/siteContent'

type SiteHeaderProps = {
  appName: string
}

export function SiteHeader({ appName }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <div className="brand">
        <BrandMark alt="Placement Portal logo" />
        <div>
          <p className="eyebrow">Vite React architecture</p>
          <h1>{appName}</h1>
        </div>
      </div>

      <nav aria-label="Primary" className="site-nav">
        {navigationLinks.map((link) => (
          <NavLink
            key={link.label}
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            to={link.to}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
