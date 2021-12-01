import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   search: '',
}

export const searchSlice = createSlice({
   name: 'search',
   initialState,
   reducers: {
      setSearch: (state, action) => {
         state.search = action.payload;
      },
      resetSearch: (state) => {
         state.search = '';
      }
   }
});

export const { setSearch, resetSearch, setType } = searchSlice.actions;
export default searchSlice.reducer;