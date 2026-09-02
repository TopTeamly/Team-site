import { STATUS_CLASS } from '../data/updates.js'

export default function StatusBadge({ status }) {
  const className = STATUS_CLASS[status] || 'status-progress'
  return (
    <span className={`status ${className}`}>
      <span className="dot" />
      {status}
    </span>
  )
}
