import { useState } from 'react'
import { Link } from 'react-router-dom'

import { AppContextBanner } from '../components/state-demo/AppContextBanner'
import { CounterDisplay } from '../components/state-demo/CounterDisplay'
import { ExampleCard } from '../components/state-demo/ExampleCard'

function PropExample({ cartItems }: { cartItems: number }) {
  return <CounterDisplay label="Items in cart" value={cartItems} />
}

export function StateDemoPage() {
  const renderTime = new Date().toLocaleTimeString()
  const [cartItems, setCartItems] = useState(2)
  const [messages, setMessages] = useState(1)

  return (
    <section className="panel state-demo-page">
      <div className="state-demo-header">
        <div>
          <p className="eyebrow">React State from scratch</p>
          <h2>Variables, state, props, and context</h2>
          <p>
            The goal is to keep each tool simple: local variables for calculations, state for UI
            memory, props for parent-to-child data, and context for shared data across the tree.
          </p>
        </div>

        <Link className="button button-secondary" to="/">
          Back home
        </Link>
      </div>

      <div className="route-grid state-grid">
        <ExampleCard
          description="A plain variable is recreated on every render. It does not survive the next render and it does not update the UI by itself."
          title="Variable"
        >
          <div className="state-variable-box">
            <span>Render time</span>
            <strong>{renderTime}</strong>
          </div>
        </ExampleCard>

        <ExampleCard
          description="State belongs to React. When it changes, React re-renders the component and keeps the latest value between renders."
          title="State"
        >
          <div className="action-row">
            <button className="button" type="button" onClick={() => setCartItems((current) => current + 1)}>
              Add to cart
            </button>
            <button className="button button-secondary" type="button" onClick={() => setCartItems(0)}>
              Reset
            </button>
          </div>
          <CounterDisplay label="Cart items" value={cartItems} />
        </ExampleCard>

        <ExampleCard
          description="Props let a parent pass data into a child. The child stays reusable because it only knows about the values it receives."
          title="Props"
        >
          <PropExample cartItems={cartItems} />
        </ExampleCard>

        <ExampleCard
          description="Context is for shared data that many components need, such as app name, theme, language, or signed-in user info."
          title="Context"
        >
          <AppContextBanner />
        </ExampleCard>
      </div>

      <section className="panel state-rules-panel">
        <h3>When to use each</h3>
        <div className="feature-grid">
          <article className="feature-card">
            <h4>Variable</h4>
            <p>Use for temporary calculations inside one render, like formatting or derived values.</p>
          </article>
          <article className="feature-card">
            <h4>State</h4>
            <p>Use when the UI needs to remember something and update when the user interacts.</p>
          </article>
          <article className="feature-card">
            <h4>Props</h4>
            <p>Use when a parent knows the data and passes it to a child component.</p>
          </article>
          <article className="feature-card">
            <h4>Context</h4>
            <p>Use when many layers of components need the same data without prop drilling.</p>
          </article>
        </div>
        <div className="state-footer-tools">
          <button className="button button-secondary" type="button" onClick={() => setMessages((current) => current + 1)}>
            New notification {messages}
          </button>
        </div>
      </section>
    </section>
  )
}