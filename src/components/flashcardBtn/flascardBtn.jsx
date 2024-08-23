import './flashcardBtn.css'

const FlashcardBtn = (props) => {
    return (
        <div className='flashcard-btn-box'>
            <button className='unknown title'>X</button>
            <div className='cnt-div'>
                <span className='done-cnt'>3</span>
                <span>/</span>
                <span className='total-cnt'>12</span>
            </div>
            <button className='known title'>V</button>
        </div>
    )
}

export default FlashcardBtn;