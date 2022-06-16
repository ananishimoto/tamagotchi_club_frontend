import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  list: null,
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
    addClub: (state, action) => {
      state.owner = [...state.owner, action.payload];
      state.list = [...state.list, action.payload];
    },
    publicClubsFetched: (state, action) => {
      state.list = action.payload;
      state.loading = false;
    },
    deleteUserClub: (state, action) => {
      const clubId = action.payload;
      state.owner = state.owner.filter((club) => club.id !== clubId);
      state.list = state.list.filter((club) => club.clubId !== clubId);
      state.loading = false;
    },
  },
});

export const {
  startLoading,
  clubsFetched,
  clubFetched,
  ownerClubsFetched,
  publicClubsFetched,
  addClub,
  deleteUserClub,
} = clubSlice.actions;

export default clubSlice.reducer;
