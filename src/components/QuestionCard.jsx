import { AnswerButton } from './AnswerButton'

export function QuestionCard({ question, questionNumber, selectedKey, onAnswer }) {
  return (
    <section className="question-card" aria-labelledby="question-heading">
      <div className="question-meta">
        <span className="topic-tag">{question.topic}</span>
        <span className="question-index">Q{questionNumber}</span>
      </div>
      <h2 id="question-heading">{question.question}</h2>
      <p className="answer-instruction">Select one answer. Your choice will be locked after selection.</p>
      <div className="answer-grid" aria-label="Answer choices">
        {question.choices.map((choice, index) => (
          <AnswerButton
            key={`${questionNumber}-${choice.key}`}
            choice={choice}
            index={index}
            selectedKey={selectedKey}
            onSelect={onAnswer}
          />
        ))}
      </div>
    </section>
  )
}
