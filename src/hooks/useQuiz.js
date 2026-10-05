import { useCallback, useEffect, useMemo, useState } from 'react'
import { API_URL, calculateScore, normalizeQuestions } from '../utils/quiz'

export function useQuiz() {
  const [questions, setQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState('')
  const [isFinished, setIsFinished] = useState(false)

  const loadQuiz = useCallback(async () => {
    setStatus('loading')
    setError('')
    setQuestions([])
    setCurrentIndex(0)
    setAnswers({})
    setIsFinished(false)

    try {
      const response = await fetch(API_URL, { headers: { Accept: 'application/json' } })
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}.`)
      }

      const data = await response.json()
      setQuestions(normalizeQuestions(data))
      setStatus('ready')
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : 'Unable to load the quiz.')
      setStatus('error')
    }
  }, [])

  useEffect(() => {
    loadQuiz()
  }, [loadQuiz])

  const currentQuestion = questions[currentIndex]
  const selectedKey = currentQuestion ? answers[currentIndex] : undefined
  const score = useMemo(() => calculateScore(questions, answers), [questions, answers])
  const answeredCount = Object.keys(answers).length

  const selectAnswer = useCallback(
    (choiceKey) => {
      if (!currentQuestion || selectedKey || isFinished) return
      setAnswers((previous) => ({ ...previous, [currentIndex]: choiceKey }))
    },
    [currentIndex, currentQuestion, isFinished, selectedKey],
  )

  const next = useCallback(() => {
    if (!selectedKey) return

    if (currentIndex === questions.length - 1) {
      setIsFinished(true)
      return
    }

    setCurrentIndex((index) => index + 1)
  }, [currentIndex, questions.length, selectedKey])

  const previous = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((index) => index - 1)
    }
  }, [currentIndex])

  return {
    questions,
    currentQuestion,
    currentIndex,
    selectedKey,
    score,
    answeredCount,
    status,
    error,
    isFinished,
    selectAnswer,
    next,
    previous,
    retry: loadQuiz,
  }
}
