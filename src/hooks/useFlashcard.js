import {useState} from "react";

const useFlashcard = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    }

    const handleSpeak = (event) => {
        event.stopPropagation();    // 카드 뒤집힘 방지
        const text = document.querySelector('.question').textContent;
        const utterance = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(utterance);
    }

    return {
        isFlipped,
        setIsFlipped,
        handleFlip,
        handleSpeak
    }
}

export default useFlashcard;