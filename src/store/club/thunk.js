import axios from "axios";
import { appLoading, appDoneLoading } from "../appState/slice";
import { tamagotchisFetched } from "../tamagotchi/slice";
import {
  clubFetched,
  clubsFetched,
  deleteUserClub,
  ownerClubsFetched,
  publicClubsFetched,
} from "./slice";

export async function fetchClubTamagotchis(dispatch, getState) {
  try {
    dispatch(appLoading());
    const members = getState().club.list.users;
    console.log("members", members[0].id);

    const response = await axios.get("http://localhost:4000/tamagotchi", {
      where: { userId: members.id },
    });
    console.log("thunk club tama response", response.data);
    const clubtamagotchis = response.data;

    dispatch(tamagotchisFetched(clubtamagotchis));
    dispatch(appDoneLoading());
  } catch (e) {
    console.log(e.message);
    dispatch(appDoneLoading());
  }
}

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

export const updateClub =
  (id, name, description, pictureUrl, backgroundcolor, textcolor, privated) =>
  async (dispatch, getState) => {
    try {
      const { token } = getState().user;
      dispatch(appLoading());
      const response = await axios.patch(
        `http://localhost:4000/club/${id}`,
        {
          name,
          description,
          pictureUrl,
          backgroundcolor,
          textcolor,
          privated,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // dispatch(editClub(response.data));
      // we don't need action, just load owner clubs again
      dispatch(fetchOwnerClubs);
      dispatch(appDoneLoading());
    } catch (error) {
      console.log(error.message);
      dispatch(appDoneLoading());
    }
  };

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

export const deleteClub = (clubId) => async (dispatch, getState) => {
  try {
    const { token } = getState().user;
    dispatch(appLoading());
    const userClub = await axios.delete(
      `http://localhost:4000/club/${clubId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("deleted", userClub.data);
    dispatch(deleteUserClub(clubId));
    dispatch(appDoneLoading());
  } catch (error) {
    console.log(error.message);
    dispatch(appDoneLoading());
  }
};
