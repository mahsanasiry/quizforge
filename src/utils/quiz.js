export const API_URL = 'https://johnmeade-webdev.github.io/chingu_quiz_api/trial.json'

export function shuffle(items) {
  const copy = [...items]

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1))
    ;[copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]]
  }

  return copy
}

export function normalizeQuestions(data) {
  if (!Array.isArray(data) || data.length === 0) {
    throw new Error('The quiz API returned no questions.')
  }

  return data.map((item, index) => {
    if (!item || typeof item.question !== 'string' || !item.choices || typeof item.answer !== 'string') {
      throw new Error(`Question ${index + 1} has an invalid structure.`)
    }

    const choices = Object.entries(item.choices).map(([key, text]) => ({
      key,
      text: String(text),
      isCorrect: key === item.answer,
    }))

    if (choices.length < 2 || !choices.some((choice) => choice.isCorrect)) {
      throw new Error(`Question ${index + 1} does not contain enough valid choices.`)
    }

    return {
      question: item.question,
      answer: item.answer,
      topic: typeof item.topic === 'string' ? item.topic : 'General',
      choices: shuffle(choices),
    }
  })
}

export function calculateScore(questions, answers) {
  return questions.reduce(
    (total, question, index) => total + (answers[index] === question.answer ? 1 : 0),
    0,
  )
}
