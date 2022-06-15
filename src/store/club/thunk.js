import axios from "axios";
import { appLoading, appDoneLoading, setMessage } from "../appState/slice";
import { showMessageWithTimeout } from "../appState/actions";
import { selectToken } from "../user/selectors";
import { startLoading } from "../tamagotchi/slice";
import { clubsFetched, ownerClubsFetched, publicClubsFetched } from "./slice";

export async function fetchUserClubs(dispatch, getState) {
  try {
    dispatch(appLoading());
    // dispatch(startLoading());
    const { token } = getState().user;

    const response = await axios.get("http://localhost:4000/club/mine", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("thunk club response", response.data);
    const clubs = response.data;

    dispatch(clubsFetched(clubs));
    dispatch(appDoneLoading());
  } catch (e) {
    console.log(e.message);
    dispatch(appDoneLoading());
  }
}

export async function fetchOwnerClubs(dispatch, getState) {
  try {
    dispatch(appLoading());
    // dispatch(startLoading());
    const { token } = getState().user;

    const response = await axios.get(`http://localhost:4000/club/owner`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("thunk owner response", response.data);
    const ownedclubs = response.data;

    dispatch(ownerClubsFetched(ownedclubs));
    dispatch(appDoneLoading());
  } catch (e) {
    console.log(e.message);
    dispatch(appDoneLoading());
  }
}

export async function fecthNonPrivateClubs(dispatch, getState) {
  try {
    dispatch(appLoading());

    const response = await axios.get(`http://localhost:4000/club/public`);
    // console.log("thunk owner response", response.data);
    const nonPrivateClubs = response.data;

    dispatch(publicClubsFetched(nonPrivateClubs));
    dispatch(appDoneLoading());
  } catch (e) {
    console.log(e.message);
    dispatch(appDoneLoading());
  }
}
