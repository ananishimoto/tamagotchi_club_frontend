import axios from "axios";
import { appLoading, appDoneLoading } from "../appState/slice";
import { showMessageWithTimeout } from "../appState/actions";
import { clubFetched, clubsFetched, ownerClubsFetched, publicClubsFetched } from "./slice";


export async function fetchUserClubs(dispatch, getState) {
  try {
    dispatch(appLoading());
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

export function fetchClub(id) {
  return async function (dispatch, getState) {
    try {
      dispatch(appLoading());
      const response = await axios.get(`http://localhost:4000/club/${id}`);
      console.log("thunk club response", response.data);
      const clubs = response.data;

      dispatch(clubFetched(clubs));
      dispatch(appDoneLoading());
    } catch (e) {
      console.log(e.message);
      dispatch(appDoneLoading());
    }
  };
}
