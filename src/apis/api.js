import axios  from "axios";
import useAuthStore from "../stores/useAuthStore";

const api = axios.create({
    withCredentials: true
});

api.interceptors.request.use(
    async (config) => {
        let { accessToken } = useAuthStore.getState();

        if(!accessToken) {
            accessToken = await useAuthStore.getState().reissueAccessToken();
        }

        config.headers.Authorization = accessToken;

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

api.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;

        if(error.response.status === 401) {
            const { reissueAccessToken } = useAuthStore.getState();

            originalRequest.headers.Authorization = await reissueAccessToken();

            return api(originalRequest);
        }

        return Promise.reject(error)
    }
);

export default api;