import API, { ApiMethodType } from './api-config';
import { BASE_URL, EndPoints } from "../constant/api-endpoints";

export const getCharater = async () => {
    return new Promise(async (resolve, reject) => {
        const res = await API.request<any, any>(
            EndPoints.getCharaters,
            ApiMethodType.get,
            {}
        );
        // console.log('Charater-RES--', JSON.stringify(res));
        if (res.code == 200) {
            resolve(res.data);
        }
        resolve(null);
    });
};

export const getCharaterId = async (id: number) => {
    return new Promise(async (resolve, reject) => {
        const res = await API.request<any, any>(
            `${EndPoints.getCharaters}/${id}`,
            ApiMethodType.get,
            {}
        );
        if (res.code == 200) {
            resolve(res.data);
        }
        resolve(null);
    });
};