import {create} from "zustand";
import api from "../apis/api";
import API_URLS from "../apis/url";


const useStatisticStore = create((set, get) => ({
    trigger: false,
    headers: ['#', '카테고리', '문제 수'],
    customStatistics: [],
    statistics: [],

    getStatistics: async (status) => {
        try {
            const response = await api.get(API_URLS.GET_STATISTICS(status));

            const { headers } = get();
            const customData = response.data.map(item => ({
                [headers[0]]: item.id,
                [headers[1]]: item.name,
                [headers[2]]: item.count
            }));

            set({ trigger: true });
            set({ customStatistics: customData });
            set({ statistics: response.data });
        } catch (error) {
            console.error('데이터를 가져오는데 실패하였습니다. 나중에 다시 시도해주세요.');
        }
    },

    setTrigger: (trigger) => {
        set({trigger: trigger});
    }

}));

export default useStatisticStore;