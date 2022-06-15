import axios from "axios";
import { appLoading, appDoneLoading, setMessage } from "../appState/slice";
import { showMessageWithTimeout } from "../appState/actions";
import { selectToken } from "../user/selectors";
import {
  deleteTamagotchi,
  startLoading,
  tamagotchisFetched,
  addTamagotchiSuccess,
} from "./slice";

export async function fetchUserTamagotchis(dispatch, getState) {
  try {
    dispatch(appLoading());
    // dispatch(startLoading());
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

export function addTamagotchi(
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
      const newtama = await axios({
        method: "post",
        url: `http://localhost:4000/tamagotchi`,
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
      console.log(newtama.data);
      const createTamagotchi = newtama.data;
      dispatch(addTamagotchiSuccess(createTamagotchi));
    } catch (error) {
      console.log(error.message);
    }
  };
}

//edit tamagotchi
export const editTamaForm = (
  id,
  name,
  age,
  deaths,
  version,
  generation,
  imageUrl,
  evolutionId
) => {
  return async (dispatch, getState) => {
    try {
      const { token } = getState().user;
      const editTama = await axios.patch(
        `http://localhost:4000/tamagotchi/editTamaForm`,
        {
          id,
          name,
          age,
          deaths,
          version,
          generation,
          imageUrl,
          evolutionId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch(fetchUserTamagotchis);
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(
          setMessage({
            variant: "danger",
            dismissable: true,
            text: error.response.data.message,
          })
        );
      } else {
        console.log(error.message);
        dispatch(
          setMessage({
            variant: "danger",
            dismissable: true,
            text: error.message,
          })
        );
      }
      dispatch(appDoneLoading());
    }
  };
};

//delete tamagotchi
export const deleteUserTamagotchi = (tamaId) => async (dispatch, getState) => {
  try {
    const { token } = getState().user;
    dispatch(appLoading());
    const userTama = await axios.delete(
      `http://localhost:4000/tamagotchi/${tamaId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("delete thunk", userTama.data);
    dispatch(deleteTamagotchi(tamaId));
    dispatch(appDoneLoading());
  } catch (error) {
    console.log(error.message);
    dispatch(appDoneLoading());
  }
};
