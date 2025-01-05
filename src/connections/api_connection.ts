import { getToken, unAuthorizedHandler } from "@/helpers/helpers";
import axios from "axios";

export const axiosInstance = axios.create({
        baseURL: process.env.BASE_URL,
        headers: {
                "Content-type": "application/json",
                "Accept": "application/json",
        },
        params: {

        },
});

axiosInstance.interceptors.request.use(
        async (config) => {
                if (config?.params && config?.params?.isLogin) {
                        config.headers.Authorization = `${config?.params?.type} ${config?.params?.token}`
                } else {
                        const token = await getToken();
                        if (token && token != undefined) config.headers.Authorization = `Bearer ${token}`
                }
                if (config?.params && config?.params?.axiosNewSource) {
                        config.cancelToken = config?.params?.axiosNewSource.token
                }
                return config;
        },
        error => Promise.reject(error)
);

axiosInstance.interceptors.response.use((response) => {
        if (response?.config?.params && response?.config?.params?.axiosOldSource) {
                response?.config?.params?.axiosOldSource.cancel("Cancel", response?.config);
        }
        return response
}, async (err) => {
        const status = err.response ? err.response.status : null;
        if (status === 401 && !err?.config?.params?.isLogin) {
                let res = await unAuthorizedHandler();
                if (res.code == 200) return axiosInstance(err?.config);
        }

        if (axios.isCancel(err)) {
        }
        return Promise.reject(err);
});


export const axiosInstanceFormData = axios.create({
        baseURL: process.env.BASE_URL,
        headers: {
                "Content-type": "multipart/form-data"
        },
        params: {

        },
});

axiosInstanceFormData.interceptors.request.use(
        async (config) => {
                const token = await getToken();
                if (token && token != undefined) {
                        config.headers.Authorization = `Bearer ${token}`
                }
                return config;
        },
        error => Promise.reject(error)
);

axiosInstanceFormData.interceptors.response.use(undefined, err => {
        const status = err.response ? err.response.status : null;
        if (status === 401) {
        }
        return Promise.reject(err);
});
