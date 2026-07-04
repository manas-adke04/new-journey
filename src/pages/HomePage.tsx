import { ArchitectureList } from '../components/ArchitectureList'
import { Link } from 'react-router-dom'
import { StatCard } from '../components/StatCard'
import { useAppContext } from '../context/AppContext'
import { useSiteSnapshot } from '../hooks/useSiteSnapshot'
import { featureHighlights } from '../utils/siteContent'

export function HomePage() {
  const { tagline } = useAppContext()
  const { data, isLoading } = useSiteSnapshot()

  return (
    <>
      <section className="hero" id="overview">
        <div className="hero-copy">
          <p className="eyebrow">Architecture first</p>
          <h2>{data?.headline ?? 'Loading architecture...'}</h2>
          <p>{data?.description ?? 'Loading site snapshot...'}</p>
          <p className="supporting-copy">{tagline}</p>
          <div className="action-row">
            <Link className="button" to="/dashboard">
              Open dashboard
            </Link>
            <Link className="button button-secondary" to="/state-demo">
              See state examples
            </Link>
            <Link className="button button-secondary" to="/forms-demo">
              React Forms Playground
            </Link>
            <Link className="button button-secondary" to="/login">
              Try protected route
            </Link>
          </div>
        </div>

        <div className="metrics" aria-busy={isLoading}>
          {(data?.metrics ?? []).map((metric) => (
            <StatCard key={metric.label} label={metric.label} value={metric.value} />
          ))}
        </div>
      </section>

      <section className="panel" id="flow">
        <h2>How it connects</h2>
        <div className="feature-grid">
          {featureHighlights.map((feature) => (
            <article key={feature.title} className="feature-card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <ArchitectureList />
    </>
  )
}
