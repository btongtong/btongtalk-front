import React, { useState } from 'react';
import './flashcard.css';
import { AiOutlineSound } from "react-icons/ai";
import useFillColor from "../../hooks/useFillColor";

const Flashcard = (props) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const { fillColor, handleMouseOver, handleMouseLeave } = useFillColor('var(--gray-60)', 'var(--primary-color)');

    const handleFlip = () => {
        setIsFlipped(!isFlipped);

    }

    const handleSpeak = (event) => {
        event.stopPropagation();    // 카드 뒤집힘 방지
        const text = document.querySelector('.question').textContent;
        const utterance = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(utterance);
    }

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
                    <p className='question'>데이터 교환 형식에 대해 설명하세요</p>
                </div>
                <div className='back'>
                    <p className='answer'>데이터 교환 형식은 json, xml을 대표적 예시로 들 수 있습니다. 어쩌고 저쩌고</p>
                </div>
            </div>
        </div>
    )
}

export default Flashcard;
