import axios from "../config";

export function getData(url, params, token) {
  // console.log(token)
  return axios.get(`${url}`, {
    params,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
export async function postDataHarga(url, payload, formData, token) {
  return await axios.post(`${url}`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": formData ? "multipart/form-data" : "application/json",
    },
  });
}
export async function postData(url, payload, token) {
  return await axios.post(`${url}`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
export async function putData(url, payload, token) {
  return await axios.put(`${url}`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
// export async function deleteData(url) {
//   return await axios.delete(`${url}`, payload, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
// }
export async function deleteData(url, id, token) {
  return await axios.delete(`${url}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
