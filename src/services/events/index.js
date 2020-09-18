import Axios from 'axios';
import { appConfig } from 'configs';
import { createUrlParamFromObj } from 'utils';

export const getEvents = (search, page, limit) => new Promise((resolve, reject) => {
    const obj = {
        search,
        page,
        limit
    }
    const params = createUrlParamFromObj(obj);
    Axios({
        method: 'GET',
        url: appConfig.url.api + '/events' + params,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        resolve(res.data.data);
    }).catch(err => {
        reject(err);
    })
})
export const addEvent = (data) => new Promise((resolve, reject) => {
    Axios({
        method: 'POST',
        url: appConfig.url.api + '/events',
        data: data,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }).then(res => {
        resolve(res.data.data);
    }).catch(err => {
        reject(err);
    })
})