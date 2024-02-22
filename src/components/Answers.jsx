import {useRef} from 'react';
export default function Answers({answers, selectedAnswer, answerState, onSelect}) {
    const shuffleAnswers= useRef();


    if (shuffleAnswers.current === undefined){
    shuffleAnswers.current = [...answers];
    shuffleAnswers.current.sort(() => Math.random() - 0.5);
    }

    return <ul id='answers'>
        {shuffleAnswers.current.map((answer) => {
            const isSelected= selectedAnswer === answer;
            let cssClass = '';
            if(answerState === 'answered' && isSelected) {
                cssClass = 'selected';}
            if((answerState === 'correct' || answerState === 'wrong')&&isSelected) {
                cssClass = answerState; }
        return(
            <li className='answer' key={answer}>
                <button className={cssClass} onClick={() => onSelect(answer)} disabled={answerState !== ''}>{answer}</button>
            </li>

        )})}
    </ul>
}