import {create} from "zustand";
import api from "../apis/api";

const useMemberStore = create((set, get) => ({
    profile: {
        profileImg: null,
        name: '',
        email: '',
    },

    getProfile: async () => {
        try {
            const { profile } = get();

            if(!profile.name || !profile.email) {
                const response = await api.get('http://localhost:8080/member');
                set({
                    profile: response.data
                });
            }
        } catch (error) {
            console.error('데이터를 가져오는데 실패하였습니다. 나중에 다시 시도해주세요.');
        }
    },

}));

export default useMemberStore;