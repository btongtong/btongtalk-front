import {create} from "zustand";
import api from "../apis/api";
import API_URLS from "../apis/url";


const useRecordStore = create((set, get) => ({
    status: null,
    headers: ['#', '카테고리', '제목', '날짜', '상태'],
    customRecords: [],
    records: [],
    totalPages: 0,
    page: 0,

    getRecords: async (s, page) => {
        try {
            const { status } = get();
            if(status !== s) set({ page: 0 });

            const response = await api.get(API_URLS.GET_RECORDS(s, page));

            const { headers } = get();
            const { records, totalPages } = response.data;
            const customData = records.map(item => ({
                [headers[0]]: item.id,
                [headers[1]]: item.name,
                [headers[2]]: item.question,
                [headers[3]]: item.datetime.substring(0, 10),
                [headers[4]]: item.status
            }));

            set({ records, totalPages, status: s, customRecords: customData });
        } catch (error) {
            console.error('데이터를 가져오는데 실패하였습니다. 나중에 다시 시도해주세요.');
        }
    },

    setPage: (newPage) => {
        set({ page:newPage });
    },

}));

export default useRecordStore;