export function AnswerButton({ choice, index, selectedKey, onSelect }) {
  const isSelected = selectedKey === choice.key
  const hasAnswered = Boolean(selectedKey)
  const state = hasAnswered
    ? choice.isCorrect
      ? 'correct'
      : isSelected
        ? 'incorrect'
        : 'locked'
    : ''

  return (
    <button
      className={`answer-button ${state}`}
      type="button"
      onClick={() => onSelect(choice.key)}
      disabled={hasAnswered}
      aria-pressed={isSelected}
    >
      <span className="answer-letter" aria-hidden="true">{String.fromCharCode(65 + index)}</span>
      <span className="answer-text">{choice.text}</span>
      {hasAnswered && choice.isCorrect && <span className="answer-status">Correct</span>}
      {hasAnswered && isSelected && !choice.isCorrect && <span className="answer-status">Incorrect</span>}
    </button>
  )
}
