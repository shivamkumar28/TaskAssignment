import API, { ApiMethodType } from './api-config';
import { BASE_URL, EndPoints } from "../constant/api-endpoints";

/**
 * get Character List
 * @returns Api Response
 */
export const getCharater = async () => {
    return new Promise(async (resolve, reject) => {
        const res = await API.request<any, any>(
            EndPoints.getCharaters,
            ApiMethodType.get,
            {}
        );
        if (res.code == 200) {
            resolve(res.data);
        }
        resolve({});
    });
};

/**
 * get character details by id
 * @param id
 * @returns Api Response
 */
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
        resolve({});
    });
};