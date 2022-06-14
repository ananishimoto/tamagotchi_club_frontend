import { configureStore } from "@reduxjs/toolkit";

import appStateReducer from "./appState/slice";
import userReducer from "./user/slice";
import tamagotchiReducer from "./tamagotchi/slice";
import clubReducer from "./club/slice";

export default configureStore({
  reducer: {
    appState: appStateReducer,
    user: userReducer,
    tamagotchi: tamagotchiReducer,
    club: clubReducer,
  },
});
