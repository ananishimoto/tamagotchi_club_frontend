import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  list: [],
};

export const clubSlice = createSlice({
  name: "club",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    clubsFetched: (state, action) => {
      state.list = action.payload;
      state.loading = false;
    },
  },
});

export const { startLoading, clubsFetched } = clubSlice.actions;

export default clubSlice.reducer;
