export function ProfilePage() {
  return (
    <div className="route-page">
      <p className="eyebrow">Nested route</p>
      <h3>Profile</h3>
      <p>
        The path <strong>/dashboard/profile</strong> keeps the dashboard shell mounted while only
        the inner outlet changes.
      </p>
    </div>
  )
}