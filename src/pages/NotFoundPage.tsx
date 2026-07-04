import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <section className="panel auth-panel">
      <p className="eyebrow">No match</p>
      <h2>Page not found</h2>
      <p>The URL did not match any route in the tree.</p>
      <Link className="button" to="/">
        Go home
      </Link>
    </section>
  )
}