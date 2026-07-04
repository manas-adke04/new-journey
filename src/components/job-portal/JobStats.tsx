import type { JobStat } from '../../utils/siteContent'

type JobStatsProps = {
  stats: JobStat[]
}

export function JobStats({ stats }: JobStatsProps) {
  return (
    <div className="metrics job-stats">
      {stats.map((stat) => (
        <article key={stat.label} className="stat-card">
          <span>{stat.label}</span>
          <strong>{stat.value}</strong>
        </article>
      ))}
    </div>
  )
}