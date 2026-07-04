import type { ReactNode } from 'react'

type ExampleCardProps = {
  title: string
  description: string
  children: ReactNode
}

export function ExampleCard({ title, description, children }: ExampleCardProps) {
  return (
    <article className="feature-card state-example-card">
      <p className="eyebrow">Example</p>
      <h3>{title}</h3>
      <p>{description}</p>
      {children}
    </article>
  )
}