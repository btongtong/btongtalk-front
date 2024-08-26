import './flashcard.css';
import HeaderL from "../../layout/header/header";
import Heading from "../../components/heading/heading";
import FlashcardC from "../../components/flashcard/flashcard";
import FlashcardBtn from "../../components/flashcardBtn/flascardBtn";
import VoiceRecord from "../../components/voiceRecord/voiceRecord";
import useFlashcardStore from "../../stores/useFlashcardStore";
import {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import FLASHCARD_STATUS from "../../constant/flashcardStatus";

const Flashcard = (props) => {
    const navigate = useNavigate();
    const params = useParams();
    const { categoryId, flashcardId } = params;
    const { status } = props;
    const { titleData, doFlashcards, getFlashcards, getFlashcard, updateRecordsProgress } = useFlashcardStore();

    useEffect(() => {
        if(status === FLASHCARD_STATUS.FLASHCARD && flashcardId) {
            getFlashcard(flashcardId);
        }
        if(status === FLASHCARD_STATUS.FLASHCARDS && categoryId) {
            getFlashcards(categoryId);
        }
    }, [status, getFlashcards, categoryId, flashcardId]);

    return (
        <HeaderL>
            <div className='container'>
                <Heading data={titleData}/>
                <section className='flashcard-list'>
                    {doFlashcards.length !== 0 ? (
                        <FlashcardC
                            key={doFlashcards[0]?.id}
                            flashcard={doFlashcards[0]}
                        />
                    ) : (
                        <div className='finish-flashcard-list'>
                            완료하셨습니다! 다시 시작하시겠습니까?
                            {status === FLASHCARD_STATUS.FLASHCARDS ? (
                                <button onClick={() => updateRecordsProgress(params.categoryId, false)}>버튼</button>
                            ) : (
                                <button onClick={() => navigate(-1)}>돌아가기</button>
                            )}
                        </div>
                    )}
                </section>
                {doFlashcards.length > 0 && (
                    <VoiceRecord key={doFlashcards[0]?.id}/>
                )}
                <section>
                    {doFlashcards.length > 0 && (
                        <FlashcardBtn flashcardId={doFlashcards[0]?.id}/>
                    )}
                </section>
            </div>
        </HeaderL>
    )
}

export default Flashcard;