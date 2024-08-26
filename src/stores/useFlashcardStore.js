import {create} from "zustand";
import api from "../apis/api";
import API_URLS from "../apis/url";
import FLASHCARD_STATUS from "../constant/flashcardStatus";

const useFlashcardStore = create((set, get) => ({
    titleData: {
        title: null,
        subtitle: null
    },
    doneFlashcards: [],
    doFlashcards: [],

    getFlashcards: async (categoryId) => {
        try {
            const response = await api.get(API_URLS.GET_FLASHCARDS(categoryId));
            const { flashcardList, categoryName, categoryDescription } = response.data;

            const doneFlashcards = [];
            const doFlashcards = [];

            flashcardList.forEach((flashcard) => {
                if (flashcard.progress === false || flashcard.progress === null) {
                    doFlashcards.push(flashcard);
                } else {
                    doneFlashcards.push(flashcard);
                }
            });

            set({
                doneFlashcards,
                doFlashcards,
                titleData: { title: categoryName, subtitle: categoryDescription }
            });
        } catch (error) {
            console.error('데이터를 가져오는데 실패하였습니다. 나중에 다시 시도해주세요.');
        }
    },

    getFlashcard: async (flashcardId) => {
        try {
            const response = await api.get(API_URLS.GET_FLASHCARD(flashcardId));
            const { id, question, answer, categoryName, categoryDescription } = response.data;

            set({
                doFlashcards: [{ id, question, answer }],
                doneFlashcards:[],
                titleData: { title: categoryName, subtitle: categoryDescription },
            });
        } catch (error) {
            console.error('데이터를 가져오는데 실패하였습니다. 나중에 다시 시도해주세요.');
        }
    },

    updateRecordsProgress: async (categoryId, progress) => {
        try {
            const response = await api.post(API_URLS.POST_RECORDS(), { categoryId, progress });
            get().getFlashcards(categoryId);
        } catch (error) {
            console.error('데이터 업데이트에 실패하였습니다. 나중에 다시 시도해주세요.');
        }
    },

    updateRecordStatus: async (flashcardId, status) => {
        try {
            const response = await api.post(API_URLS.POST_RECORD(), { flashcardId, status });
        } catch (error) {
            console.error('데이터 업데이트에 실패하였습니다. 나중에 다시 시도해주세요.');
        }
    },

    moveFlashcardToDone: () => {
        const { doFlashcards, doneFlashcards } = get();

        if (doFlashcards.length > 0) {
            const [movedFlashcard, ...remainingFlashcards] = doFlashcards;

            set({
                doFlashcards: remainingFlashcards,
                doneFlashcards: [...doneFlashcards, movedFlashcard]
            });
        }
    },

}));

export default useFlashcardStore;