import {create} from "zustand";
import api from "../apis/api";
import API_URLS from "../apis/url";

const useSearchFlashcardStore = create((set, get) => ({
    titleData: {
        title: '검색 결과',
        subtitle: '제목을 입력하여 문제를 찾아보세요!'
    },
    headers: ['#', '카테고리', '제목', '상태'],
    searchFlashcards: [],
    customSearchFlashcards: [],
    totalPages: 0,
    page: 0,

    getSearchFlashcards: async (question) => {
        try {
            if(question !== null) {
                const response = await api.get(API_URLS.GET_SEARCH_FLASHCARD(question));
                const { headers } = get();
                const { flashcards, totalPages } = response.data;
                const customData = flashcards.map(item => ({
                    [headers[0]]: item.flashcardId,
                    [headers[1]]: item.categoryName,
                    [headers[2]]: item.question,
                    [headers[3]]: item.status
                }));

                set({ totalPages, flashcards, customSearchFlashcards: customData });
            }
        } catch (error) {
            console.error('데이터를 가져오는데 실패하였습니다. 나중에 다시 시도해주세요.');
        }
    },

    setPage: (newPage) => {
        set({ page:newPage });
    },

}));

export default useSearchFlashcardStore;