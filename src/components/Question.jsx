import QuestionTimer from "./QuestionTimer.jsx"
import Answers from "./Answers.jsx"
import {useState} from 'react';
import QUESTIONS from '../questions.js';

export default function Question({onSelectAnswer,onSkipAnswer,index}) {
    const [answer,setAnswer] = useState({selectedAnswer:'' , isCorrect:null});

    const handleSelectAnswer = (answer) => {
        setAnswer({answer, isCorrect: null});
        
        setTimeout(() => {
            setAnswer({selectedAnswer: answer,
            isCorrect: QUESTIONS[index].answers[0] === answer});

            setTimeout(()=> {
                onSelectAnswer(answer) }, 2000);
        }, 100);
    }

    let answerState = '';

    if (answer.selectedAnswer&&answer.isCorrect !== null) {
        answerState = answer.isCorrect ? 'correct' : 'wrong';
    } else if (answer.selectedAnswer) {
        answerState = 'answered';
    }
    return <div id='question'>
    <QuestionTimer timeOut={10000} onTimeOut={onSkipAnswer}/>
    <h2>{QUESTIONS[index].text}</h2>
    <Answers answers={QUESTIONS[index].answers} selectedAnswer={answer.selectedAnswer} answerState={answerState} onSelect={handleSelectAnswer}/>
    </div>
}
