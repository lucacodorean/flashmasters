import axios from "axios";

const api = axios.create({ withCredentials: true });
api.interceptors.request.use(
    async (config) => {
        if (["post", "put", "delete", "patch", "get"].includes(config.method)) {
            const response = await axios.get("/api/test_csrf");
            config.headers["X-CSRF-TOKEN"] = response.data.csrf_token;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
