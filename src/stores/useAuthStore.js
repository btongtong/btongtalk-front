import {create} from 'zustand';
import axios from 'axios';

const useAuthStore = create((set, get) => ({
    accessToken: localStorage.getItem('accessToken') || null,
    reissueUrl: 'http://localhost:8080/reissue',
    naverLoginUrl: 'http://localhost:8080/oauth2/authorization/naver',
    kakaoLoginUrl: 'http://localhost:8080/oauth2/authorization/kakao',

    setAccessToken: (token) => {
        localStorage.setItem('accessToken', token);
        set({ accessToken: token });
    },

    clearToken: () => {
        localStorage.removeItem('accessToken');
        set({ accessToken: null });
    },

    reissueAccessToken: async (reissueUrl) => {
        try {
            const response = await axios.post(reissueUrl, {}, { withCredentials: true });
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
        window.location.href = oauthUrl;
    }

}));

export default useAuthStore;

