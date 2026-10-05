export function QuizNavigation({ canGoBack, canGoForward, isLastQuestion, onPrevious, onNext }) {
  return (
    <div className="quiz-actions">
      <button className="secondary-button" type="button" onClick={onPrevious} disabled={!canGoBack}>
        <span aria-hidden="true">←</span> Previous
      </button>
      <button className="primary-button" type="button" onClick={onNext} disabled={!canGoForward}>
        {isLastQuestion ? 'Show result' : 'Next question'} <span aria-hidden="true">→</span>
      </button>
    </div>
  )
}
