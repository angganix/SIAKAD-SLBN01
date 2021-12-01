import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { services } from "../utils/api";
import dataForm from "../data/dataForm";
import toast from "react-hot-toast";

const dataSlice = (sliceName) => {

   const initialState = {
      data: {
         list: [],
         sort: {
            sortby: 'id',
            sortdir: 'desc'
         },
         page: 1,
         limit: 15,
         maxpage: 0,
      },
      form: dataForm[sliceName],
      loading: false,
      withPagination: false,
   };

   const fetchList = createAsyncThunk(
      `${sliceName}/getList`,
      async (search, { getState }) => {
         const { data: { sort, page, limit }, withPagination } = getState()[sliceName];
         const result = await services.dataList(`/${sliceName}`, {
            ...sort, page, limit, search, withPagination
         });
         return result;
      }
   );

   const fetchData = createAsyncThunk(
      `${sliceName}/getData`,
      async (id) => {
         const result = await services.dataShow(`/${sliceName}`, id);
         return result;
      }
   );

   const saveData = createAsyncThunk(
      `${sliceName}/saveData`,
      async (params = undefined, { getState }) => {
         const { form } = getState()[sliceName];
         const result = await form.id
            ? services.dataUpdate(`/${sliceName}`, form, form.id)
            : services.dataInsert(`/${sliceName}`, form);
         return result;
      }
   );

   const deleteData = createAsyncThunk(
      `${sliceName}/deleteData`,
      async (id) => {
         const result = await services.dataDelete(`/${sliceName}`, id);
         return result;
      }
   );

   const dataSlice = createSlice({
      name: sliceName,
      initialState,
      reducers: {
         setForm: (state, action) => {
            state.form = action.payload;
         },
         sorting: (state, action) => {
            state.data.sort.sortby = action.payload;
            state.data.sort.sortdir = state.data.sort.sortdir === 'desc' ? 'asc' : 'desc';
         },
         paginate: (state, action) => {
            state.data.page = action.payload;
         },
         withPaging: (state, action) => {
            state.withPagination = action.payload;
         },
      },
      extraReducers: (builder) => {
         builder
            // Fetch Data List
            .addCase(fetchList.pending, (state) => {
               state.loading = true;
            })
            .addCase(fetchList.fulfilled, (state, action) => {
               state.loading = false;
               state.data.list = typeof action.payload.data === 'undefined' ? action.payload : action.payload.data;
               if (typeof action.payload.data !== 'undefined') {
                  state.data.page = action.payload.current_page;
                  state.data.maxpage = action.payload.last_page;
               }
            })
            .addCase(fetchList.rejected, (state) => {
               state.loading = false;
               state.list = [];
            })
            // Fetch Single Data
            .addCase(fetchData.fulfilled, (state, action) => {
               state.form = action.payload;
            })
            // Save Data (Update / Insert) depend existing id
            .addCase(saveData.pending, (state) => {
               state.loading = true;
            })
            .addCase(saveData.fulfilled, (state) => {
               toast.success('Data berhasil disimpan');
               state.loading = false;
            })
            .addCase(saveData.rejected, (state, action) => {
               state.loading = false;
               toast.error(action.error.message);
            })
            // Delete Data
            .addCase(deleteData.fulfilled, (state) => {
               toast.success('Data berhasil dihapus');
            })
      }
   });

   return {
      dataSlice, reducer: dataSlice.reducer, actions: dataSlice.actions,
      fetchList, fetchData, saveData, deleteData
   }
}

export default dataSlice;