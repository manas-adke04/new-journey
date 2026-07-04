import { useAppContext } from '../../context/AppContext'

export function AppContextBanner() {
  const { appName, tagline } = useAppContext()

  return (
    <div className="state-context-banner">
      <p className="eyebrow">Context</p>
      <strong>{appName}</strong>
      <p>{tagline}</p>
    </div>
  )
}