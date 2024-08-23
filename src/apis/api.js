import axios  from "axios";
import useAuthStore from "../stores/useAuthStore";

const api = axios.create({
    withCredentials: true
});

api.interceptors.request.use(
    async (config) => {
        const {accessToken} = useAuthStore.getState();
        if(accessToken) {
            config.headers.Authorization = accessToken;
        }
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
            try {
                const newAccessToken = await reissueAccessToken();
                originalRequest.headers.Authorization = newAccessToken;
                return api(originalRequest);
            } catch (reissueError) {
                return Promise.reject(reissueError);
            }
        }

        return Promise.reject(error)
    }
);

export default api;