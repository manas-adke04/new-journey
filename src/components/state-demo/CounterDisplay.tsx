type CounterDisplayProps = {
  label: string
  value: number
}

export function CounterDisplay({ label, value }: CounterDisplayProps) {
  return (
    <div className="state-value-box">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  )
}