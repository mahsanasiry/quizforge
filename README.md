# QuizForge

QuizForge is a responsive and interactive quiz application built with React. It allows users to answer multiple-choice questions, receive immediate feedback, track their progress, and view their final score.

The project focuses on creating a clean and intuitive quiz experience with clear navigation, responsive design, and reliable handling of loading and error states.

## Live Demo

[View QuizForge Live](https://mahsanasiry.github.io/quizforge/)

## Features

* Fetches quiz questions from an external API
* Multiple-choice quiz questions
* Immediate feedback for correct and incorrect answers
* Progress tracking throughout the quiz
* Previous and Next question navigation
* Prevents progressing without selecting an answer
* Final score display
* Loading state while questions are being fetched
* Error handling when the API request fails
* Responsive design for desktop, tablet, and mobile devices
* Clean and user-friendly interface

## Built With

* React
* JavaScript
* HTML5
* CSS3
* REST API
* Git
* GitHub Pages

## How It Works

1. QuizForge requests quiz questions from the quiz API.
2. A loading state is displayed while the data is being fetched.
3. Once the questions are loaded, the user can select an answer.
4. The application provides immediate feedback after an answer is submitted.
5. Users can move between questions using the navigation controls.
6. The application keeps track of the user's answers and progress.
7. At the end of the quiz, the user's final score is displayed.

## Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js
* npm
* Git

### Installation

Clone the repository:

```bash
git clone https://github.com/mahsanasiry/quizforge.git
```

Navigate to the project directory:

```bash
cd quizforge
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will be available at the local development URL shown in your terminal.

## API

QuizForge uses an external REST API to retrieve quiz questions.

API endpoint:

```text
https://johnmeade-webdev.github.io/chingu_quiz_api/trial.json
```

The application handles the API request and provides appropriate loading and error states while retrieving the quiz data.

## Project Structure

```text
quizforge/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── docs/
│   └── preview.svg
├── src/
│   ├── components/
│   │   ├── AnswerButton.jsx
│   │   ├── FeedbackMessage.jsx
│   │   ├── Header.jsx
│   │   ├── PageShell.jsx
│   │   ├── ProgressIndicator.jsx
│   │   ├── QuestionCard.jsx
│   │   ├── QuizNavigation.jsx
│   │   └── StateScreens.jsx
│   ├── hooks/
│   │   └── useQuiz.js
│   ├── utils/
│   │   └── quiz.js
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Responsive Design

QuizForge is designed to provide a consistent experience across different screen sizes, including:

* Desktop
* Tablet
* Mobile

The interface adapts to smaller screens while keeping the quiz controls and content easy to use.

## Deployment

The application is deployed using GitHub Pages.

Live application:

https://mahsanasiry.github.io/quizforge/

## Future Improvements

Potential future improvements include:

* Adding different quiz categories
* Adding difficulty levels
* Adding a timer mode
* Adding a question review section
* Saving quiz results
* Adding user statistics
* Adding more accessibility improvements

## License

This project is available for personal and educational use.
