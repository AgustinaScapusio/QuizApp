import { useState, useCallback} from 'react';
import QUESTIONS from '../questions.js';
import Question from './Question.jsx';
import quizComplete from '../assets/quiz-complete.png';

export default function Quiz() {
    const [answerState,setAnswerState] = useState('');
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = answerState === '' ? userAnswers.length : userAnswers.length - 1;

    const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
        setAnswerState('answered');
        setUserAnswers((prevState) => {
        return [...prevState, selectedAnswer];
        });

        setTimeout(() => {
        if(selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
            setAnswerState('correct');
        } else {
            setAnswerState('wrong');
        }
        setTimeout(() => {
            setAnswerState('');
        }, 2000);
        });

    }, [activeQuestionIndex]);

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
    questionText={QUESTIONS[activeQuestionIndex].text} 
    answers={QUESTIONS[activeQuestionIndex].answers} 
    answerState={answerState}
    selectedAnswer={userAnswers[userAnswers.length - 1]}
    onSelectAnswer={handleSelectAnswer}
    onSkipAnswer={handleSkipAnswer}
    />
    </div>
    </>
}