import type { JobPosting } from '../../utils/siteContent'
import { JobCard } from './JobCard'

type JobListingsProps = {
  jobs: JobPosting[]
}

export function JobListings({ jobs }: JobListingsProps) {
  return (
    <div className="feature-grid job-grid">
      {jobs.map((job, index) => (
        <JobCard key={job.id} featured={index === 0} job={job} />
      ))}
    </div>
  )
}