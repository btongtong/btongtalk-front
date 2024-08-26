import {create} from "zustand";
import api from "../apis/api";
import API_URLS from "../apis/url";


const useStatisticStore = create((set, get) => ({
    headers: [],
    customStatistics: [],
    statistics: [],

    getStatistics: async (status) => {
        try {
            const response = await api.get(API_URLS.GET_STATISTICS(status));

            set({ headers: ['#', '카테고리', '문제 수'] });
            const { headers } = get();
            const customData = response.data.map(item => ({
                [headers[0]]: item.id,
                [headers[1]]: item.name,
                [headers[2]]: item.count
            }));

            set({ customStatistics: customData });
            set({ statistics: response.data });
        } catch (error) {
            console.error('데이터를 가져오는데 실패하였습니다. 나중에 다시 시도해주세요.');
        }
    },

    getStatisticsByFlashcard: async (categoryId) => {
        try {
            const response = await api.get(API_URLS.GET_STATISTICS_BY_STATUS(categoryId));
            const { knownCnt, unknownCnt, restCnt } = response.data;
            set({
                headers: ['맞은 문제', '틀린 문제', '남은 문제'],
                statistics: [
                    {name: '맞은 문제', count: knownCnt},
                    {name: '틀린 문제', count: unknownCnt},
                    {name: '남은 문제', count: restCnt}
                ]
            });
        } catch (error) {
            console.error('데이터를 가져오는데 실패하였습니다. 나중에 다시 시도해주세요.');
        }
    },

}));

export default useStatisticStore;