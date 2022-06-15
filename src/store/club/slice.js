import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  list: [],
  owner: [],
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
    clubFetched: (state, action) => {
      state.list = action.payload;
      state.loading = false;
    },
    ownerClubsFetched: (state, action) => {
      state.owner = action.payload;
      state.loading = false;
    },
  },
});

export const { startLoading, clubsFetched, clubFetched, ownerClubsFetched } =
  clubSlice.actions;

export default clubSlice.reducer;
