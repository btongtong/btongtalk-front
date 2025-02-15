import './flashcard.css';
import HeaderL from "../../layout/base/base";
import Heading from "../../components/heading/heading";
import FlashcardC from "../../components/flashcard/flashcard";
import FlashcardBtn from "../../components/flashcardBtn/flascardBtn";
import VoiceRecord from "../../components/voiceRecord/voiceRecord";
import useFlashcardStore from "../../stores/useFlashcardStore";
import {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import useStatisticStore from "../../stores/useStatisticStore";
import FlashcardStatistics from "../../components/flashcardStatistics/flashcardStatistics";

const Flashcard = () => {
    const navigate = useNavigate();
    const { categoryId, flashcardId } = useParams();
    const { titleData, doFlashcards, doneFlashcards, getFlashcards, getFlashcard, updateRecordsProgress, flashcardCategoryId, clearFlashcards } = useFlashcardStore();
    const { getStatisticsByFlashcard } = useStatisticStore();
    const id = doFlashcards[0]?.id;

    useEffect(() => {
        const setData = async () => {
            clearFlashcards();
            if(flashcardId) {
                await getFlashcard(flashcardId);
            }
            if(categoryId) {
                await getFlashcards(categoryId);
            }
        }

        setData();
    }, [getFlashcards, getFlashcard, categoryId, flashcardId, clearFlashcards]);

    useEffect(() => {
        const setData = async () => {
            const targetId = categoryId || flashcardCategoryId;
            if(targetId && doFlashcards.length === 0) {
                await getStatisticsByFlashcard(targetId);
            }
        }

        setData();
    }, [doFlashcards.length, categoryId, flashcardCategoryId, getStatisticsByFlashcard]);

    if(!titleData.title || (doFlashcards.length === 0 && doneFlashcards.length === 0)) {
        return null;
    }

    return (
        <HeaderL>
            <div className='container'>
                <Heading data={titleData}/>
                <section className='flashcard-list'>
                    {doFlashcards.length > 0 ? (
                        <FlashcardC key={ id }/>
                    ) : (
                        <FlashcardCompletion
                            title={titleData.title}
                            categoryId={categoryId}
                            updateRecordsProgress={updateRecordsProgress}
                            navigate={navigate}
                        />
                    )}
                </section>
                {doFlashcards.length > 0 && <VoiceRecord key={ id }/>}
                {doFlashcards.length > 0 && <FlashcardBtn/>}
            </div>
        </HeaderL>
    )
}

const FlashcardCompletion = ({ title, categoryId, updateRecordsProgress, navigate }) => (
    <section className='finish-flashcard-box'>
        <div className='finish-flashcard-list'>
            <h1 className='heading'>수고하셨습니다, 모든 질문이 끝났습니다!</h1>
            <FlashcardStatistics/>
            {categoryId ? (
                <button onClick={() => updateRecordsProgress(categoryId, false)}>
                    <span>{title}</span> 다시 공부하기
                </button>
            ) : (
                <button onClick={() => navigate(-1)}>돌아가기</button>
            )}
        </div>
    </section>
)

export default Flashcard;