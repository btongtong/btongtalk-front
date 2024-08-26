import {create} from 'zustand';
import axios from 'axios';
import API_URLS from "../apis/url";
import api from "../apis/api";

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
    },

    onLogout: async () => {
        try {
            await api.post(API_URLS.LOGOUT());
            get().clearToken();
            window.location.href = '/login';
        } catch (error) {
            console.error('로그아웃 실패하였습니다. 나중에 다시 시도해주세요.');
        }
    },

    onWithdraw: async () => {
        try {
            await api.post(API_URLS.WITHDRAW());
            get().clearToken();
            window.location.href = '/login';
        } catch (error) {
            console.error('회원탈퇴에 실패하였습니다. 나중에 다시 시도해주세요.');
        }
    }

}));

export default useAuthStore;

