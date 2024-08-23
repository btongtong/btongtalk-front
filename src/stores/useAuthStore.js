import create from 'zustand';
import axios from 'axios';

const useAuthStore = create((set, get) => ({
    accessToken: localStorage.getItem('accessToken') || null,
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

    reissueAccessToken: async () => {
        try {
            const response = await axios.post('http://localhost:8080/resissue', {});
            return response.data.accessToken;
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

