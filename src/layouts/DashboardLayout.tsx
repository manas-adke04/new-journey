import { NavLink, Outlet } from 'react-router-dom'

import { useAuth } from '../context/AuthContext'

const dashboardLinks = [
  { label: 'Overview', to: '' },
  { label: 'Profile', to: 'profile' },
  { label: 'Settings', to: 'settings' },
] as const

export function DashboardLayout() {
  const { userName, logout } = useAuth()

  return (
    <section className="dashboard-shell">
      <div className="dashboard-header">
        <div>
          <p className="eyebrow">Protected area</p>
          <h2>Dashboard</h2>
          <p>Logged in as {userName ?? 'guest'}.</p>
        </div>

        <button className="button button-secondary" type="button" onClick={logout}>
          Sign out
        </button>
      </div>

      <nav aria-label="Dashboard sections" className="dashboard-nav">
        {dashboardLinks.map((link) => (
          <NavLink
            key={link.label}
            end={link.to === ''}
            className={({ isActive }) => (isActive ? 'nav-chip active' : 'nav-chip')}
            to={link.to}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div className="panel dashboard-panel">
        <Outlet />
      </div>
    </section>
  )
}