import axios from "axios";
import { getToken, getTokenType, unAuthorizedHandler } from "../helpers/helpers";
import { IApiResponse } from "../interface/manage/IApiResponse";
import { axiosInstance, axiosInstanceFormData } from "./api_connection";

export async function get(url: string, params?: any, signal?: AbortSignal): Promise<IApiResponse> {
    const response = await axiosInstance.get(url, { params: params, signal: signal }).then(function (response) {
        const data: IApiResponse = {
            msg: response.data['message'],
            code: 200,
            data: response.data,
            error: null,
            success: true
        }
        return data;
    }).catch(function (error) {
        const data: IApiResponse = {
            msg: error?.response?.data?.message,
            code: error?.response?.status,
            data: null,
            error: error?.response?.data.errors,
            success: false
        }
        return data;
    });
    return response;
}

export async function post(url: string, body: any, params?: any) {
    const response = await axiosInstance.post(url, body, { params: params }).then(function (response) {
        const data: IApiResponse = {
            msg: response.data['message'],
            code: 200,
            data: response.data,
            error: null,
            success: true
        }
        return data;
    }).catch(function (error) {

        const data: IApiResponse = {
            msg: error.response.data.message,
            code: error.response.status,
            data: null,
            error: error.response.data,
            success: false
        }
        return data;

    });
    return response;
}

export async function postFormData(url: string, body: any) {
    const response = await axiosInstanceFormData.post(url, body).then(function (response) {
        const data: IApiResponse = {
            msg: response.data['message'],
            code: 200,
            data: response.data['data'],
            error: null,
            success: true
        }
        return data;
    }).catch(function (error) {
        const data: IApiResponse = {
            msg: error.response.data.message,
            code: error.response.status,
            data: null,
            error: error.response.data.errors,
            success: false
        }
        return data;
    });
    return response;
}

export async function put(url: string, body: any) {
    const response = await axiosInstance.put(url, body).then(function (response) {
        const data: IApiResponse = {
            msg: response.data['message'],
            code: 200,
            data: response.data['data'],
            error: null,
            success: true
        }
        return data;
    }).catch(function (error) {
        const data: IApiResponse = {
            msg: error.response.data.message,
            code: error.response.status,
            data: null,
            error: error.response.data.errors,
            success: false
        }
        return data;
    });
    return response;
}

export async function patch(url: string, body: any) {
    const response = await axiosInstance.patch(url, body).then(function (response) {
        const data: IApiResponse = {
            msg: response.data['message'],
            code: 200,
            data: response.data['data'],
            error: null,
            success: true
        }
        return data;
    }).catch(function (error) {
        const data: IApiResponse = {
            msg: error.response.data.message,
            code: error.response.status,
            data: null,
            error: error.response.data.errors,
            success: false
        }
        return data;
    });
    return response;
}

export async function deleteMethod(url: string) {
    const response = await axiosInstance.delete(url).then(function (response) {
        const data: IApiResponse = {
            msg: response.data['message'],
            code: 200,
            data: response.data['data'],
            error: null,
            success: true
        }
        return data;
    }).catch(function (error) {
        const data: IApiResponse = {
            msg: error.response.data.message,
            code: error.response.status,
            data: null,
            error: error.response.data.errors,
            success: false
        }
        return data;
    });
    return response;
}

export async function getServerProps(url: string, req: any) {
    const axiosInstanceServer = axios.create({
        baseURL: process.env.BASE_URL,
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json",
        },
        params: {

        },

    });

    axiosInstanceServer.interceptors.request.use(
        async (config) => {
            const token = await getToken(req);
            const type = await getTokenType(req);
            if (token) {
                config.headers.Authorization = `${type} ${token}`
            }
            return config;
        },
        error => Promise.reject(error)
    );

    axiosInstanceServer.interceptors.response.use((response) => {
        return response
    }, async (err) => {
        const status = err.response ? err.response.status : null;
        if (status === 401 && !err?.config?.params?.isLogin) {
            let res = await unAuthorizedHandler();
            if (res.code == 200) return axiosInstance(err?.config);
        }
        return Promise.reject(err);
    });
    const response = await axiosInstanceServer.get(url).then(function (response) {
        const data: IApiResponse = {
            msg: response.data['message'],
            code: 200,
            data: response.data['data'],
            error: null,
            success: true
        }
        return data;
    }).catch(function (error) {
        const data: IApiResponse = {
            msg: error.response.data.message,
            code: error.response.status,
            data: null,
            error: error.response.data.errors,
            success: false
        }
        return data;
    });
    return response;
}