import { JobPortalBoard } from '../components/job-portal/JobPortalBoard'
import { featuredJobs, jobPortalStats } from '../utils/siteContent'

export function DashboardHomePage() {
  return (
    <div className="route-page">
      <p className="eyebrow">Index route</p>
      <h3>Dashboard overview</h3>
      <p>
        This page is the parent in the hierarchy. It owns the data and passes it down to smaller
        job-portal components through props.
      </p>

      <div className="route-grid">
        <article className="route-card">
          <h4>Parent-child relationship</h4>
          <p>
            <strong>DashboardHomePage</strong> renders the whole job portal board, which then
            renders the stats block and each job card.
          </p>
        </article>
        <article className="route-card">
          <h4>Props</h4>
          <p>
            The parent passes <strong>title</strong>, <strong>description</strong>, <strong>stats</strong>,
            and <strong>jobs</strong> into the portal board so children stay generic.
          </p>
        </article>
        <article className="route-card">
          <h4>Reusability</h4>
          <p>
            The same <strong>JobCard</strong> can render any job object, so the UI can show
            internships, full-time roles, or referrals without rewriting the card.
          </p>
        </article>
      </div>

      <JobPortalBoard
        description="A parent component can own the page data and hand it to reusable children."
        jobs={featuredJobs}
        stats={jobPortalStats}
        title="Placement Portal"
      />
    </div>
  )
}