import React from 'react';
import './flashcard.css';
import { AiOutlineSound } from "react-icons/ai";
import useFillColor from "../../hooks/useFillColor";
import useFlashcard from "../../hooks/useFlashcard";
import useFlashcardStore from "../../stores/useFlashcardStore";

const FlashcardC = () => {

    const { isFlipped, handleFlip, handleSpeak } = useFlashcard();
    const { fillColor, handleMouseOver, handleMouseLeave } = useFillColor('var(--gray-60)', 'var(--primary-color)');
    const { doFlashcards } = useFlashcardStore();

    if (doFlashcards.length === 0) return null;

    const { question, answer } = doFlashcards[0];

    return (
        <div className={`flashcard-box ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
            <div className='card'>
                <div className='front'>
                    <AiOutlineSound
                        className='sound-icon'
                        fill={fillColor}
                        onMouseOver={handleMouseOver}
                        onMouseLeave={handleMouseLeave}
                        onClick={handleSpeak}/>
                    <p className='question'>{question}</p>
                </div>
                <div className='back'>
                    <p className='answer'>{answer}</p>
                </div>
            </div>
        </div>
    )
}

export default FlashcardC;
