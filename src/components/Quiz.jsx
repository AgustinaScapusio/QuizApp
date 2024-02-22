import { useState, useCallback} from 'react';
import QUESTIONS from '../questions.js';
import Question from './Question.jsx';
import quizComplete from '../assets/quiz-complete.png';

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;

    const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
        setUserAnswers((prevState) => {
        return [...prevState, selectedAnswer];
        });
    }, []);

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);
    
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    if (quizIsComplete) {
        return <div id='summary'>
            <img src={quizComplete} alt='Quiz Completed'/>
            <h2>Quiz Completed!</h2>
        </div>
    }
    return <>
    <div id='quiz'>
    <Question key={activeQuestionIndex} 
    index={activeQuestionIndex}
    onSelectAnswer={handleSelectAnswer}
    onSkipAnswer={handleSkipAnswer}
    />
    </div>
    </>
}