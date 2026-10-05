export function LoadingScreen() {
  return (
    <main className="state-card" aria-live="polite">
      <div className="spinner" aria-hidden="true" />
      <p className="eyebrow">Loading quiz</p>
      <h1>Preparing your questions…</h1>
      <p>Fetching the question set from the quiz API.</p>
    </main>
  )
}

export function ErrorScreen({ message, onRetry }) {
  return (
    <main className="state-card error-state" role="alert">
      <div className="state-icon" aria-hidden="true">!</div>
      <p className="eyebrow">Something went wrong</p>
      <h1>We couldn’t load the quiz.</h1>
      <p>{message || 'Please check your connection and try again.'}</p>
      <button className="primary-button centered-button" type="button" onClick={onRetry}>Try again</button>
    </main>
  )
}

export function ResultScreen({ score, total, onRestart }) {
  const percentage = total ? Math.round((score / total) * 100) : 0

  return (
    <main className="state-card result-state" aria-labelledby="result-heading">
      <div className="result-badge" aria-hidden="true">✓</div>
      <p className="eyebrow">Quiz complete</p>
      <h1 id="result-heading">Nice work. You finished!</h1>
      <p className="result-description">Here’s your final score across all {total} questions.</p>
      <div className="result-score" aria-label={`Final score ${score} out of ${total}`}>
        <strong>{score}</strong><span>/ {total}</span>
      </div>
      <div className="result-meter" aria-hidden="true"><div style={{ width: `${percentage}%` }} /></div>
      <p className="percentage">{percentage}% correct</p>
      <button className="primary-button centered-button" type="button" onClick={onRestart}>Play again <span aria-hidden="true">↻</span></button>
    </main>
  )
}
