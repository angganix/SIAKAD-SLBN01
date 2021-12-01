import axios from "axios";

const api = axios.create({
   baseURL: `/api`,
   timeout: 10000,
   timeoutErrorMessage: 'Server gagal merespon, coba beberapa saat lagi'
});

export const services = {
   dataList: async (url, options) => {
      try {
         let queryString = "";

         if (typeof options.sortby !== undefined) {
            queryString += `sortby=${options.sortby}&sortdir=${options.sortdir}`;
         }

         if (options.withPagination) {
            if (typeof options.page !== undefined && typeof options.limit !== undefined) {
               queryString += `&page=${options.page}&limit=${options.limit}`;
            }
         }

         if (typeof options.search !== undefined) {
            queryString += `&search=${options.search}`;
         }

         const apiURL = `${url}?${queryString}`;
         const result = await api.get(apiURL);

         return Promise.resolve(result.data);
      } catch (error) {
         return Promise.reject(error.response.data.error);
      }
   },
   dataShow: async (url, id) => {
      try {
         const result = await api.get(`${url}/${id}`);
         return Promise.resolve(result.data);
      } catch (error) {
         return Promise.reject(error.response.data.error);
      }
   },
   dataInsert: async (url, form) => {
      try {
         const result = await api.post(url, form);
         return Promise.resolve(result.data.data);
      } catch (error) {
         return Promise.reject(error.response.data.error);
      }
   },
   dataUpdate: async (url, form, id) => {
      try {
         const result = await api.put(`${url}/${id}`, form);
         return Promise.resolve(result.data.status);
      } catch (error) {
         return Promise.reject(error.response.data.error);
      }
   },
   dataDelete: async (url, id) => {
      try {
         const result = await api.delete(`${url}/${id}`);
         return Promise.resolve(result.data.status);
      } catch (error) {
         return Promise.reject(error.response.data.error);
      }
   }
}

export default api;