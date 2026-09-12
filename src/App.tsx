import { useState, useEffect, useMemo } from 'react';
import { questions, Category } from './data/questions';
import { words } from './data/words';
import logo from './assets/logo123.png';
import './App.css';

// Fisher-Yates shuffle algorithm
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

type FilterOption = Category | 'All';

type DeckCard = {
  question: string;
  answer: string;
  category: Category;
  example?: string;
};

function App() {
  const [selectedCategories, setSelectedCategories] = useState<Set<FilterOption>>(new Set(['All']));

  const deck = useMemo((): DeckCard[] => {
    const wordCards: DeckCard[] = words.map((w) => ({
      question: `Define: ${w.word}`,
      answer: w.definition,
      example: w.example,
      category: (w.category === 'New' ? 'New words' : 'Old words') as Category,
    }));

    return [...questions, ...wordCards];
  }, []);

  const categories = useMemo<FilterOption[]>(() => {
    const set = new Set<Category>();
    for (const item of deck) set.add(item.category);
    return [...Array.from(set).sort((a, b) => a.localeCompare(b)), 'All'];
  }, [deck]);
  
  // Filter questions based on selected categories
  const filteredQuestions = useMemo(() => {
    if (selectedCategories.has('All')) {
      return deck;
    }
    return deck.filter((q) => selectedCategories.has(q.category));
  }, [selectedCategories, deck]);

  // Shuffle filtered questions when they change
  const shuffledQuestions = useMemo(() => shuffleArray(filteredQuestions), [filteredQuestions]);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  // Reset to first question when filtered questions change
  useEffect(() => {
    setCurrentIndex(0);
    setShowAnswer(false);
  }, [filteredQuestions.length]);

  const currentQuestion = shuffledQuestions[currentIndex];
  const isLastQuestion = currentIndex === shuffledQuestions.length - 1;
  const isFirstQuestion = currentIndex === 0;

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  const handleBack = () => {
    if (!isFirstQuestion) {
      setCurrentIndex(currentIndex - 1);
      setShowAnswer(false);
    } else {
      // Loop to the end
      setCurrentIndex(shuffledQuestions.length - 1);
      setShowAnswer(false);
    }
  };

  const handleNext = () => {
    if (!isLastQuestion) {
      setCurrentIndex(currentIndex + 1);
      setShowAnswer(false);
    } else {
      // Loop back to the beginning
      setCurrentIndex(0);
      setShowAnswer(false);
    }
  };

  const handleCategoryToggle = (category: FilterOption) => {
    const newSelected = new Set(selectedCategories);
    
    if (category === 'All') {
      if (newSelected.has('All')) {
        // Can't unselect All if it's the only one selected
        if (newSelected.size === 1) {
          return;
        }
        newSelected.clear();
      } else {
        newSelected.clear();
        newSelected.add('All');
      }
    } else {
      newSelected.delete('All');
      if (newSelected.has(category)) {
        // Can't unselect the last remaining category
        if (newSelected.size === 1) {
          return;
        }
        newSelected.delete(category);
      } else {
        newSelected.add(category);
      }
    }
    
    setSelectedCategories(newSelected);
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // Ignore if user is typing in an input field
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
        return;
      }

      const key = event.key.toLowerCase();
      
      if (key === 'j') {
        event.preventDefault();
        const isFirst = currentIndex === 0;
        if (!isFirst) {
          setCurrentIndex(currentIndex - 1);
          setShowAnswer(false);
        } else {
          setCurrentIndex(shuffledQuestions.length - 1);
          setShowAnswer(false);
        }
      } else if (key === 'k') {
        event.preventDefault();
        if (!showAnswer) {
          setShowAnswer(true);
        }
      } else if (key === 'l') {
        event.preventDefault();
        const isLast = currentIndex === shuffledQuestions.length - 1;
        if (!isLast) {
          setCurrentIndex(currentIndex + 1);
          setShowAnswer(false);
        } else {
          setCurrentIndex(0);
          setShowAnswer(false);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [currentIndex, showAnswer, shuffledQuestions.length]);

  if (shuffledQuestions.length === 0) {
    return (
      <div className="app">
        <div className="card">
          <div className="no-questions">
            <p>No questions available. Please select at least one category.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <div className="brand">
        <img className="brand-logo" src={logo} alt="Trivia Train" />
      </div>

      <div className="card">
        <div className="category-filter">
          <h3 className="filter-title">Filter by Category</h3>
          <div className="checkbox-group">
            {categories.map(category => (
              <label key={category} className="checkbox-label">
                <input
                  type="checkbox"
                  checked={selectedCategories.has(category)}
                  onChange={() => handleCategoryToggle(category)}
                  className="checkbox-input"
                />
                <span className="checkbox-text">{category}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="question-section">
          <h2 className="question-label">Question</h2>
          <p className="question-text">{currentQuestion.question}</p>
        </div>

        {showAnswer && (
          <div className="answer-section">
            <h2 className="answer-label">Answer</h2>
            <p className="answer-text">{currentQuestion.answer}</p>
            {currentQuestion.example && (
              <p className="answer-example">
                <span className="answer-example-label">Example: </span>
                {currentQuestion.example}
              </p>
            )}
          </div>
        )}

        <div className="progress">
          {currentIndex + 1} / {shuffledQuestions.length}
        </div>

        <div className="controls">
          <button 
            className="btn btn-back" 
            onClick={handleBack}
          >
            Back
          </button>
          <button 
            className="btn btn-primary" 
            onClick={handleShowAnswer}
            disabled={showAnswer}
          >
            Show Answer
          </button>
          <button 
            className="btn btn-secondary" 
            onClick={handleNext}
          >
            {isLastQuestion ? 'Start Over' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
