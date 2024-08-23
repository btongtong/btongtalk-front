import './flashcard.css';
import HeaderL from "../../layout/header/header";
import Heading from "../../components/heading/heading";
import FlashcardC from "../../components/flashcard/flashcard";
import FlashcardBtn from "../../components/flashcardBtn/flascardBtn";
import VoiceRecord from "../../components/voiceRecord/voiceRecord";

const Flashcard = (props) => {
    const data = {
        title: '기초',
        subtitle: '다양한 주제의 기초 질문에 대답하며 공부해보세요!'
    }

    return (
        <HeaderL>
            <div className='container'>
                <Heading data={data}/>
                <section className='flashcard-list'>
                    <FlashcardC/>
                </section>
                <section>
                    <VoiceRecord/>
                </section>
                <section>
                    <FlashcardBtn/>
                </section>
            </div>
        </HeaderL>
    )
}

export default Flashcard;