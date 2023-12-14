import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_HOST_NAME,
});

instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('jwtToken');
        try {
            if (token) {
                config.headers.accessToken = token;
            }

            return config;
        } catch (err) {
            console.error('[_axios.interceptors.request] config : ' + err);
        }
        return config;
    },
    (error) => {
        // 요청 에러 직전 호출됩니다.
        return Promise.reject(error);
    }
);

export default instance;
