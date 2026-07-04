import type { JobPosting } from '../../utils/siteContent'

type JobCardProps = {
  job: JobPosting
  featured?: boolean
}

export function JobCard({ job, featured = false }: JobCardProps) {
  return (
    <article className="feature-card job-card" aria-label={`${job.title} at ${job.company}`}>
      <div className="job-card-top">
        <div>
          <p className="eyebrow">{job.company}</p>
          <h3>{job.title}</h3>
        </div>
        {featured ? <span className="job-badge">Featured</span> : null}
      </div>

      <p>{job.description}</p>

      <dl className="job-meta">
        <div>
          <dt>Location</dt>
          <dd>{job.location}</dd>
        </div>
        <div>
          <dt>Type</dt>
          <dd>{job.type}</dd>
        </div>
        <div>
          <dt>Salary</dt>
          <dd>{job.salary}</dd>
        </div>
      </dl>
    </article>
  )
}