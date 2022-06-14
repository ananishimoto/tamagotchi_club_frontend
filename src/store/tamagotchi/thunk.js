import axios from "axios";
import { appLoading, appDoneLoading, setMessage } from "../appState/slice";
import { showMessageWithTimeout } from "../appState/actions";
import { selectToken } from "../user/selectors";
import {
  startLoading,
  tamagotchisFetched,
  addTamagotchiSuccess,
} from "./slice";

export async function fetchUserTamagotchis(dispatch, getState) {
  try {
    dispatch(appLoading());
    dispatch(startLoading());
    const { token } = getState().user;

    const response = await axios.get("http://localhost:4000/tamagotchi/mine", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("thunk tamagotchi response", response.data);
    const tamagotchis = response.data;

    dispatch(tamagotchisFetched(tamagotchis));
    dispatch(appDoneLoading());
  } catch (e) {
    console.log(e.message);
    dispatch(appDoneLoading());
  }
}
//add tamagotchi

export function FetchAddTamagotchi(
  name,
  age,
  deaths,
  version,
  generation,
  imageUrl,
  evolutionId
) {
  return async function (dispatch, getState) {
    try {
      const { token } = getState().user;
      dispatch(startLoading());
      const { data } = await axios({
        method: "post",
        url: `http://localhost:4000/tamagotchi/submitTamaForm"`,
        data: {
          name: name,
          age: age,
          deaths: deaths,
          version: version,
          generation: generation,
          imageUrl: imageUrl,
          evolutionId: evolutionId,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data);
      const createForm = data;
      console.log("createTamagotchi", createForm);
      dispatch(
        showMessageWithTimeout("success", false, "Tamagotchi created", 1500)
      );
      const createTamagotchi = data;
      dispatch(addTamagotchiSuccess(createTamagotchi));
    } catch (error) {
      console.log(error.message);
    }
  };
}
