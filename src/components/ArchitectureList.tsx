import { buildSteps } from '../utils/siteContent'

export function ArchitectureList() {
  return (
    <section className="panel" id="structure">
      <h2>Folder structure</h2>
      <ul className="architecture-list">
        {buildSteps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ul>
    </section>
  )
}
