import './flashcardBtn.css'
import useFlashcardStore from "../../stores/useFlashcardStore";
import STATUS from "../../constant/recordStatus";

const FlashcardBtn = (props) => {
    const { flashcardId } = props;
    const { doFlashcards, doneFlashcards, updateRecordStatus, moveFlashcardToDone } = useFlashcardStore();
    const handleKnownBtnClick = (flashcardId) => {
        updateRecordStatus(flashcardId, STATUS.KNOWN);
        moveFlashcardToDone();
    }

    const handleUnknownBtnClick = (flashcardId) => {
        updateRecordStatus(flashcardId, STATUS.UNKNOWN);
        moveFlashcardToDone();
    }

    return (
        <div className='flashcard-btn-box'>
            <button className='unknown title' onClick={() => handleUnknownBtnClick(flashcardId)}>X</button>
            <div className='cnt-div'>
                <span className='done-cnt'>{doneFlashcards.length}</span>
                <span>/</span>
                <span className='total-cnt'>{ doFlashcards.length + doneFlashcards.length }</span>
            </div>
            <button className='known title' onClick={() => handleKnownBtnClick(flashcardId)}>V</button>
        </div>
    )
}

export default FlashcardBtn;