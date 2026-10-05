export function FeedbackMessage({ question, selectedKey }) {
  if (!selectedKey) {
    return (
      <div className="feedback neutral" aria-live="polite">
        <span className="feedback-icon" aria-hidden="true">?</span>
        <div>
          <strong>Choose an answer</strong>
          <span>Select an option above to reveal the result.</span>
        </div>
      </div>
    )
  }

  const correct = selectedKey === question.answer

  return (
    <div className={`feedback ${correct ? 'success' : 'danger'}`} role="status" aria-live="polite">
      <span className="feedback-icon" aria-hidden="true">{correct ? '✓' : '!'}</span>
      <div>
        <strong>{correct ? 'Correct!' : 'Not quite.'}</strong>
        <span>{correct ? 'Great job — that is the right answer.' : 'The correct answer is highlighted above.'}</span>
      </div>
    </div>
  )
}
