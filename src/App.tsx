import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { RequireAuth } from './components/RequireAuth'
import { AppLayout } from './layouts/AppLayout'
import { DashboardLayout } from './layouts/DashboardLayout'
import { HomePage } from './pages/HomePage'
import { DashboardHomePage } from './pages/DashboardHomePage'
import { LoginPage } from './pages/LoginPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { ProfilePage } from './pages/ProfilePage'
import { StateDemoPage } from './pages/StateDemoPage'
import { FormDemoPage } from './pages/FormDemoPage'
import { SettingsPage } from './pages/SettingsPage'
import { useAppContext } from './context/AppContext'

function App() {
  const { appName } = useAppContext()

  return (
    <BrowserRouter>
      <AppLayout appName={appName}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/state-demo" element={<StateDemoPage />} />
          <Route path="/forms-demo" element={<FormDemoPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route element={<RequireAuth />}>
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<DashboardHomePage />} />
              <Route path="profile" element={<ProfilePage />} />
              <Route path="settings" element={<SettingsPage />} />
            </Route>
          </Route>
          <Route path="/legacy-home" element={<Navigate replace to="/" />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  )
}

export default App
