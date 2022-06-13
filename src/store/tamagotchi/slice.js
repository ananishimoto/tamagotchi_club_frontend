import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  list: [],
};

export const tamagotchiSlice = createSlice({
  name: "tamagotchi",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    tamagotchisFetched: (state, action) => {
      state.list = action.payload;
      state.loading = false;
    },
  },
});

export const { startLoading, tamagotchisFetched } = tamagotchiSlice.actions;

export default tamagotchiSlice.reducer;
