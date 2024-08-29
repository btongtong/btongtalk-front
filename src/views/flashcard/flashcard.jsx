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
import useStatisticStore from "../../stores/useStatisticStore";
import FlashcardStatistics from "../../components/flashcardStatistics/flashcardStatistics";

const Flashcard = (props) => {
    const navigate = useNavigate();
    const params = useParams();
    const { status } = props;
    const { categoryId, flashcardId } = params;
    const { titleData, doFlashcards, getFlashcards, getFlashcard, updateRecordsProgress, flashcardCategoryId } = useFlashcardStore();
    const { getStatisticsByFlashcard } = useStatisticStore();

    useEffect(() => {
        if(status === FLASHCARD_STATUS.FLASHCARD && flashcardId) {
            getFlashcard(flashcardId);
        }
        if(status === FLASHCARD_STATUS.FLASHCARDS && categoryId) {
            getFlashcards(categoryId);
        }
    }, [status, getFlashcards, getFlashcard, categoryId, flashcardId]);

    useEffect(() => {
        if(status === FLASHCARD_STATUS.FLASHCARDS && categoryId && doFlashcards.length === 0) {
            getStatisticsByFlashcard(categoryId);
        } else if(status === FLASHCARD_STATUS.FLASHCARD && flashcardCategoryId && doFlashcards.length === 0) {
            getStatisticsByFlashcard(flashcardCategoryId);
        }
    }, [status, doFlashcards.length, categoryId, flashcardCategoryId, getStatisticsByFlashcard]);

    if(!titleData.title) {
        return(
            <></>
        )
    }

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
                            <h1 className='heading'>수고하셨습니다, 모든 질문이 끝났습니다!</h1>
                            <FlashcardStatistics/>
                            {status === FLASHCARD_STATUS.FLASHCARDS ? (
                                <button onClick={() => updateRecordsProgress(params.categoryId, false)}>
                                    <span>{titleData.title}</span> 다시 공부하기
                                </button>
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