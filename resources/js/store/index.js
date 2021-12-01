import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "../services/dataSlice";
import searchSlice from "../services/searchSlice";

const store = configureStore({
   reducer: {
      search: searchSlice,
      agama: dataSlice('agama').reducer,
      golongan: dataSlice('golongan').reducer,
      jenis_ptk: dataSlice('jenis_ptk').reducer,
      ketunaan: dataSlice('ketunaan').reducer,
      kurikulum: dataSlice('kurikulum').reducer,
      status_pegawai: dataSlice('status_pegawai').reducer,
      tahun_akademik: dataSlice('tahun_akademik').reducer,
      kelas: dataSlice('kelas').reducer,
      role: dataSlice('role').reducer
   }
});

export default store;