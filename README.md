# Trivia Training App

A simple TypeScript/React trivia training application that displays questions one at a time with the ability to reveal answers and navigate to the next question.

## Features

- Display one question at a time
- "Show Answer" button to reveal the answer
- "Next" button to move to the next question
- Progress indicator showing current question number
- Loops back to the beginning after the last question

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to the URL shown in the terminal (usually http://localhost:5173)

## Building for Production

```bash
npm run build
```

## Customizing Questions

Edit `src/data/questions.ts` to add, remove, or modify questions. The structure is:

```typescript
export const questions: Question[] = [
  { question: 'Your question here?', answer: 'Your answer here' },
  // ... more questions
];
```
