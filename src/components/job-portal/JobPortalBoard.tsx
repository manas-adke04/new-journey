import type { JobPosting, JobStat } from '../../utils/siteContent'
import { JobListings } from './JobListings'
import { JobStats } from './JobStats'

type JobPortalBoardProps = {
  title: string
  description: string
  stats: JobStat[]
  jobs: JobPosting[]
}

export function JobPortalBoard({ title, description, stats, jobs }: JobPortalBoardProps) {
  return (
    <section className="panel">
      <p className="eyebrow">Job portal hierarchy</p>
      <h2>{title}</h2>
      <p>{description}</p>

      <JobStats stats={stats} />

      <h3 className="section-subtitle">Featured jobs</h3>
      <JobListings jobs={jobs} />
    </section>
  )
}