import {create} from "zustand";
import API_URLS from "../apis/url";
import axios from "axios";


const useCategoryStore = create((set, get) => ({
    titleData: {
        title: '인터뷰 준비',
        subtitle: '다양한 주제의 CS 질문에 대답하며 공부해보세요!'
    },
    isLoading: false,
    countTitle: 'Categories',
    categories: [],

    getCategories: async () => {
        try {
            const { isLoading } = get();

            if(!isLoading) {
                const response = await axios.get(API_URLS.GET_CATEGORIES());
                set({ isLoading: true });
                set({ categories: response.data });
            }
        } catch (error) {
            console.error('데이터를 가져오는데 실패하였습니다. 나중에 다시 시도해주세요.');
        }
    },

}));

export default useCategoryStore;