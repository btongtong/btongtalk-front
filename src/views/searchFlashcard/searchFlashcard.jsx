import './searchFlashcard.css';
import HeaderL from "../../layout/header/header";
import Table from "../../components/table/table";
import URLS from "../../constant/url";
import Heading from "../../components/heading/heading";
import useSearchFlashcardStore from "../../stores/useSearchFlashcardStore";
import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";

const SearchFlashcard = (props) => {
    const [ searchParams ] = useSearchParams();
    const question = searchParams.get('question');
    const { titleData, getSearchFlashcards, headers, customSearchFlashcards, totalPages, page, setPage } = useSearchFlashcardStore();
    const propsData = {
        showPagination: true,
        navigateUrl: URLS.FLASHCARD,
        headers: headers,
        data: customSearchFlashcards,
        pageData: {
            totalPages: totalPages,
            page: page,
            setPage: setPage
        }
    }

    useEffect(() => {
        if(question) {
            getSearchFlashcards(question, page);
        }
    }, [page, getSearchFlashcards, question]);

    return(
        <HeaderL>
            <div className='container'>
                <Heading data={titleData}/>
                <div className='component'>
                    <Table propsData={propsData} />
                </div>
            </div>
        </HeaderL>
    )
}

export default SearchFlashcard;