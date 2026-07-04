import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import { useAuth } from '../context/AuthContext'

type LocationState = {
  from?: {
    pathname: string
  }
}

export function LoginPage() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [userName, setUserName] = useState('Placement Candidate')

  const state = location.state as LocationState | null
  const destination = state?.from?.pathname ?? '/dashboard'

  function handleLogin() {
    login(userName)
    navigate(destination, { replace: true })
  }

  return (
    <section className="panel auth-panel">
      <p className="eyebrow">Protected route entry</p>
      <h2>Sign in to continue</h2>
      <p>
        If a protected route redirects here, React Router keeps the original location in route
        state so the app can send you back after login.
      </p>

      <label className="field">
        <span>Name</span>
        <input value={userName} onChange={(event) => setUserName(event.target.value)} />
      </label>

      <div className="action-row">
        <button className="button" type="button" onClick={handleLogin}>
          Sign in
        </button>
        <Link className="button button-secondary" to="/">
          Back home
        </Link>
      </div>
    </section>
  )
}