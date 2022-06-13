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
    clubFetched: (state, action) => {
      state.list = action.payload;
      state.loading = false;
    },
  },
});

export const { startLoading, clubFetched } = clubSlice.actions;

export default clubSlice.reducer;
