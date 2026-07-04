export type SiteSnapshot = {
  headline: string
  description: string
  metrics: Array<{
    label: string
    value: string
  }>
}

const snapshot: SiteSnapshot = {
  headline: 'Production-friendly React structure',
  description:
    'A small architecture that keeps UI, state, and data access separated from the start.',
  metrics: [
    { label: 'Layers', value: '6' },
    { label: 'Reusable blocks', value: '5' },
    { label: 'CSS footprint', value: 'Minimal' },
  ],
}

export async function fetchSiteSnapshot(): Promise<SiteSnapshot> {
  return Promise.resolve(snapshot)
}
