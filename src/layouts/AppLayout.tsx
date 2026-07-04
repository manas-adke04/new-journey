import type { ReactNode } from 'react'

import { SiteHeader } from '../components/SiteHeader'

type AppLayoutProps = {
  appName: string
  children: ReactNode
}

export function AppLayout({ appName, children }: AppLayoutProps) {
  return (
    <div className="app-shell">
      <SiteHeader appName={appName} />
      <main>{children}</main>
    </div>
  )
}
