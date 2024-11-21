import {create} from "zustand";
import api from "../apis/api";
import API_URLS from "../apis/url";

const useMemberStore = create((set, get) => ({
    profile: {
        profileImg: null,
        name: null,
        email: null,
    },

    getProfile: async () => {
        try {
            const response = await api.get(API_URLS.GET_MEMBER());
            set({
                profile: response.data
            });
        } catch (error) {
            console.error('데이터를 가져오는데 실패하였습니다. 나중에 다시 시도해주세요.');
        }
    },

}));

export default useMemberStore;