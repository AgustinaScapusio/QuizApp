import QuestionTimer from "./QuestionTimer.jsx"
import Answers from "./Answers.jsx"
import {useState} from 'react';
import QUESTIONS from '../questions.js';

export default function Question({questionText, answers, onSelectAnswer,selectedAnswer,answerState,onSkipAnswer}) {
    const [answer,setAnswer] = useState({selectedAnswer:'' , isCorrect:null});

    const handleSelectAnswer = (selectedAnswer) => {
        setAnswer({selectedAnswer, isCorrect: null});
        
        setTimeout(() => {
            setAnswer({selectedAnswer: answer,
            isCorrect: true
            })
        }, 1000);
    }
    return <div id='question'>
    <QuestionTimer timeOut={10000} onTimeOut={onSkipAnswer}/>
    <h2>{questionText}</h2>
    <Answers answers={answers} selectedAnswer={selectedAnswer} answerState={answerState} onSelect={onSelectAnswer}/>
    </div>
}
