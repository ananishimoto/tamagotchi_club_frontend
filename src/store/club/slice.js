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
    ownerClubsFetched: (state, action) => {
      state.owner = action.payload;
      state.loading = false;
    },
    addClub: (state, action) => {
      state.list = [...state.list, action.payload];
    },
  },
});

export const { startLoading, clubsFetched, ownerClubsFetched, addClub } =
  clubSlice.actions;

export default clubSlice.reducer;
