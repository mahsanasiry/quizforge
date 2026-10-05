import { useEffect } from 'react'
import { FeedbackMessage } from './components/FeedbackMessage'
import { PageShell } from './components/PageShell'
import { ProgressIndicator } from './components/ProgressIndicator'
import { QuestionCard } from './components/QuestionCard'
import { QuizNavigation } from './components/QuizNavigation'
import { ErrorScreen, LoadingScreen, ResultScreen } from './components/StateScreens'
import { useQuiz } from './hooks/useQuiz'

function App() {
  const quiz = useQuiz()

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (quiz.status !== 'ready' || quiz.isFinished || !quiz.currentQuestion) return

      if (/^[1-9]$/.test(event.key)) {
        const choice = quiz.currentQuestion.choices[Number(event.key) - 1]
        if (choice) quiz.selectAnswer(choice.key)
      }

      if (event.key === 'Enter' && quiz.selectedKey) {
        quiz.next()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [quiz])

  if (quiz.status === 'loading') {
    return <PageShell><LoadingScreen /></PageShell>
  }

  if (quiz.status === 'error') {
    return <PageShell><ErrorScreen message={quiz.error} onRetry={quiz.retry} /></PageShell>
  }

  if (quiz.isFinished) {
    return <PageShell><ResultScreen score={quiz.score} total={quiz.questions.length} onRestart={quiz.retry} /></PageShell>
  }

  const isLastQuestion = quiz.currentIndex === quiz.questions.length - 1

  return (
    <PageShell>
      <main className="quiz-layout" aria-label="Quiz application">
        <section className="quiz-card">
          <div className="quiz-topline">
            <div>
              <p className="eyebrow">Frontend challenge</p>
              <h1>How well do you know the web?</h1>
            </div>
            <div className="score-pill" aria-label={`Current score ${quiz.score}`}>
              <span>Score</span>
              <strong>{quiz.score}</strong>
            </div>
          </div>

          <ProgressIndicator current={quiz.currentIndex + 1} total={quiz.questions.length} />
          <QuestionCard
            question={quiz.currentQuestion}
            questionNumber={quiz.currentIndex + 1}
            selectedKey={quiz.selectedKey}
            onAnswer={quiz.selectAnswer}
          />
          <FeedbackMessage question={quiz.currentQuestion} selectedKey={quiz.selectedKey} />
          <QuizNavigation
            canGoBack={quiz.currentIndex > 0}
            canGoForward={Boolean(quiz.selectedKey)}
            isLastQuestion={isLastQuestion}
            onPrevious={quiz.previous}
            onNext={quiz.next}
          />
          <p className="keyboard-hint">
            {quiz.answeredCount} of {quiz.questions.length} answered · Use 1–9 to choose · Enter to continue
          </p>
        </section>
      </main>
    </PageShell>
  )
}

export default App
