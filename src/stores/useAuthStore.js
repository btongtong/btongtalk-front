import {create} from 'zustand';
import axios from 'axios';
import API_URLS from "../apis/url";

const useAuthStore = create((set, get) => ({
    accessToken: localStorage.getItem('accessToken') || null,

    setAccessToken: (token) => {
        localStorage.setItem('accessToken', token);
        set({ accessToken: token });
    },

    clearToken: () => {
        localStorage.removeItem('accessToken');
        set({ accessToken: null });
    },

    reissueAccessToken: async () => {
        try {
            const response = await axios.post(API_URLS.REISSUE(), {}, { withCredentials: true });
            const newToken = response.data;
            get().setAccessToken(newToken);
            return newToken;
        } catch (error) {
            get().clearToken();
            window.location.href = '/login';
            throw error;
        }
    },

    onOauthLogin: async (oauthUrl) => {
        get().clearToken();
        window.location.href = oauthUrl;
    }

}));

export default useAuthStore;

