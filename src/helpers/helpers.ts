import { deleteCookie, getCookie, setCookie } from "cookies-next";
import { IApiResponse } from "../interface/manage/IApiResponse";
import { LOGIN_ROLE, LOGIN_USER, NOTIFICATION_DURATION, TOKEN_CONST, TOKEN_TYPE_CONST } from "../config/constant";
import { Notification } from "@arco-design/web-react";
// import { refresh } from "../service/AuthService";
import { jwtDecode } from "jwt-decode";
interface JwtPayload {
    exp: number;
}

export async function setBasicLoginDetails(token: any) {
    try {
        setCookie(TOKEN_CONST, token);
    } catch (error) {

    }
}

export async function setBasicLoginRole(role: any) {
    try {
        setCookie(LOGIN_ROLE, role);
    } catch (error) {

    }
}
export async function setBasicLoginUser(user: any) {
    try {
        setCookie(LOGIN_USER, user);
    } catch (error) {

    }
}

export async function removeBasicLoginDetails() {
    try {
        deleteCookie(TOKEN_CONST);
        deleteCookie(TOKEN_TYPE_CONST);
        deleteCookie(LOGIN_ROLE);
        deleteCookie(LOGIN_USER);
    } catch (error) {

    }
}

export async function getToken(req?: any) {
    try {
        if (req) {
            return String(getCookie(TOKEN_CONST, { req }));
        } else if (String(getCookie(TOKEN_CONST))) {
            return String(getCookie(TOKEN_CONST));
        }
        return "";
    } catch (error) {
        return ""
    }
}

export async function getTokenType(req?: any) {
    try {
        if (req) {
            return String(getCookie(TOKEN_TYPE_CONST, { req }));
        } else if (String(getCookie(TOKEN_TYPE_CONST))) {
            return String(getCookie(TOKEN_TYPE_CONST));
        }
        return "";
    } catch (error) {
        return ""
    }
}

export async function unAuthorizedHandler() {
    let res = {} as IApiResponse;
    try {
        deleteCookie(TOKEN_CONST);
    } catch (error) {
        deleteCookie(TOKEN_CONST);
        window.location.href = '/';
    }
    return res;
}
export function printToaster(message: string, type: 'SUCCESS' | 'ERROR') {
    if (type == 'SUCCESS') {
        Notification.success({
            content: message,
            duration: NOTIFICATION_DURATION,
            position: 'bottomRight',
        })
    } else {
        Notification.error({
            content: message,
            duration: NOTIFICATION_DURATION,
            position: 'bottomRight',
        })
    }
}


export function isTokenExpired(token: string): boolean {
    try {
        const decoded = jwtDecode<JwtPayload>(token);
        const currentTime = Date.now() / 1000;
        return decoded.exp < currentTime;
    } catch (error) {
        return true;
    }
}

export function checkSessionTimeout() {
    const token = getCookie(TOKEN_CONST) as string;
    if (!token || isTokenExpired(token)) {
        deleteCookie(TOKEN_CONST);
        return true;
    }
    return false;
}
