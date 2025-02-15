import './flashcardBtn.css'
import useFlashcardStore from "../../stores/useFlashcardStore";
import STATUS from "../../constant/recordStatus";

const FlashcardBtn = (props) => {
    const { doFlashcards, doneFlashcards, updateRecordStatus, moveFlashcardToDone } = useFlashcardStore();
    const handleKnownBtnClick = async (flashcardId) => {
        await updateRecordStatus(flashcardId, STATUS.KNOWN);
        moveFlashcardToDone();
    }

    const handleUnknownBtnClick = async (flashcardId) => {
        await updateRecordStatus(flashcardId, STATUS.UNKNOWN);
        moveFlashcardToDone();
    }

    return (
        <div className='flashcard-btn-box'>
            <button className='unknown title' onClick={() => handleUnknownBtnClick(doFlashcards[0]?.id)}>X</button>
            <div className='cnt-div'>
                <span className='done-cnt'>{doneFlashcards.length}</span>
                <span>/</span>
                <span className='total-cnt'>{ doFlashcards.length + doneFlashcards.length }</span>
            </div>
            <button className='known title' onClick={() => handleKnownBtnClick(doFlashcards[0]?.id)}>V</button>
        </div>
    )
}

export default FlashcardBtn;