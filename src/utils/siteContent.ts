export const navigationLinks = [
  { label: 'Home', to: '/' },
  { label: 'State Demo', to: '/state-demo' },
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'Login', to: '/login' },
] as const

export const featureHighlights = [
  {
    title: 'Component driven',
    description: 'Reusable UI lives in components/ so pages stay focused on composition.',
  },
  {
    title: 'Route ready',
    description: 'pages/ is ready for real screens or a router later without changing the layout.',
  },
  {
    title: 'Service separated',
    description: 'services/ keeps data access out of components and hooks.',
  },
] as const

export const buildSteps = [
  'main.tsx boots the app and mounts the provider tree.',
  'context/ stores shared app state and branding details.',
  'layouts/ wraps page content with the shared shell.',
  'pages/ composes components and reads data through hooks.',
  'hooks/ coordinates state and service calls.',
  'services/ owns data fetching and transformation.',
  'utils/ keeps static content and helpers isolated.',
] as const

export type JobPosting = {
  id: string
  title: string
  company: string
  location: string
  type: string
  salary: string
  description: string
}

export type JobStat = {
  label: string
  value: string
}

export const jobPortalStats: JobStat[] = [
  { label: 'Open roles', value: '18' },
  { label: 'Hiring companies', value: '9' },
  { label: 'Referrals this week', value: '42' },
]

export const featuredJobs: JobPosting[] = [
  {
    id: 'j-1',
    title: 'Frontend Engineer',
    company: 'BlueOrbit',
    location: 'Remote',
    type: 'Full-time',
    salary: '$110k - $140k',
    description: 'Build candidate dashboards and interview workflows with React.',
  },
  {
    id: 'j-2',
    title: 'QA Automation Analyst',
    company: 'CampusFlow',
    location: 'Bengaluru',
    type: 'Hybrid',
    salary: '$80k - $100k',
    description: 'Own test coverage for application and placement pipeline reliability.',
  },
  {
    id: 'j-3',
    title: 'Placement Coordinator',
    company: 'TalentBridge',
    location: 'Pune',
    type: 'On-site',
    salary: '$60k - $75k',
    description: 'Coordinate employer outreach, drives, and student shortlists.',
  },
] as const
