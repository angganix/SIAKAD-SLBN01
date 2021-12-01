import api from "../utils/api"

const services = {
   get: async () => {
      try {
         const result = await api.get(`/identitas-sekolah`);
         return Promise.resolve(result.data);
      } catch (error) {
         return Promise.reject(error.response.data);
      }
   },
   save: async (form) => {
      try {
         const result = await api.put(`/identitas-sekolah`, form);
         return Promise.resolve(result.status);
      } catch (error) {
         return Promise.reject(error.response.data);
      }
   }
}

export default services;