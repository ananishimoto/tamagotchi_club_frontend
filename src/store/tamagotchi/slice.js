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
    addTamagotchiSuccess: (state, action) => {
      state.list = [...state.list, action.payload];
    },
    deleteTamagotchi: (state, action) => {
      const tamaId = action.payload;
      state.list = state.list.filter((tama) => tama.id !== tamaId);

    },
  },
});


export const { startLoading, tamagotchisFetched, deleteTamagotchi, addTamagotchiSuccess } =
  tamagotchiSlice.actions;

export default tamagotchiSlice.reducer;
