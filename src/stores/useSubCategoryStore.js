import {create} from "zustand";
import API_URLS from "../apis/url";
import axios from "axios";


const useSubCategoryStore = create((set, get) => ({
    isLoading: false,
    titleData: {
        title: null,
        subtitle: null
    },
    countTitle: 'Questions',
    subCategories: [],

    getSubCategories: async (categoryId) => {
        try {
            const { isLoding } = get();

            if(!isLoding) {
                const response = await axios.get(API_URLS.GET_SUB_CATEGORIES(categoryId));
                const { subCategories, rootName, rootDescription } = response.data;

                set({ isLoading: true });
                set({
                    subCategories,
                    titleData: {title: rootName, subtitle: rootDescription}
                });
            }
        } catch (error) {
            console.error('데이터를 가져오는데 실패하였습니다. 나중에 다시 시도해주세요.');
        }
    },

    clearSubCategories: () => {
        set({subCategories: []});
    }

}));

export default useSubCategoryStore;