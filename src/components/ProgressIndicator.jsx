export function ProgressIndicator({ current, total }) {
  const progress = total ? (current / total) * 100 : 0

  return (
    <section className="progress-section" aria-label={`Question ${current} of ${total}`}>
      <div className="progress-labels">
        <span>Question {current} <b>/ {total}</b></span>
        <span>{Math.round(progress)}%</span>
      </div>
      <div className="progress-track" aria-hidden="true">
        <div className="progress-value" style={{ width: `${progress}%` }} />
      </div>
    </section>
  )
}
