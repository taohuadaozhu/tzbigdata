import axios from 'axios';

let base = '';

export const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data); };

export const getUserList = params => { return axios.get(`${base}/user/list`, { params: params }); };

export const getUserListPage = params => { return axios.get(`${base}/user/listpage`, { params: params }); };

export const removeUser = params => { return axios.get(`${base}/user/remove`, { params: params }); };

export const batchRemoveUser = params => { return axios.get(`${base}/user/batchremove`, { params: params }); };

export const editUser = params => { return axios.get(`${base}/user/edit`, { params: params }); };

export const addUser = params => { return axios.get(`${base}/user/add`, { params: params }); };

// export function fetch(url, params) {
//     return new Promise((resolve, reject) => {
//         axios.post(url, params)
//             .then(response => {
//                  alert('Api--ok');
//                 resolve(response.data);
//             })
//             .catch((error) => {
//               console.log(error)
//                reject(error)
//             })
//     })
// }

// export default {
//   // 获取我的页面的后台数据
//   mineBaseMsgApi() {
//      alert('进入api.js')
//     return fetch('/api/getBoardList');
//   }
// }