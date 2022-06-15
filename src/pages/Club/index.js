import "./style.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Grid, Modal, Button, Typography, Box, Divider } from "@mui/material";

import { selectClubs, selectClubMembers } from "../../store/club/selector";
import { fetchClub } from "../../store/club/thunk";
import { Loading } from "../../components";

const Club = () => {
  const dispatch = useDispatch();
  const routeParams = useParams();
  const clubDetails = useSelector(selectClubs);
  const clubMembers = useSelector(selectClubMembers);
  console.log(clubMembers);

  useEffect(() => {
    dispatch(fetchClub(routeParams.id));
  }, [dispatch, routeParams.id]);

  return clubDetails ? (
    <div className="clubpage">
      <div className="clubbanner">
        <Grid
          container
          spacing={2}
          alignItems="center"
          pl={2}
          style={{
            backgroundColor: `${clubDetails.backgroundcolor}`,
            color: `${clubDetails.textcolor}`,
            minHeight: "200px",
          }}
        >
          <Grid item xs={4}>
            <img
              alt="club"
              src={
                clubDetails.pictureUrl
                  ? clubDetails.pictureUrl
                  : "https://img.gamewith.net/img/bcfc573ae2779a1eec9ad044f7afd037.jpg"
              }
            />
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={7}>
            <h1>{clubDetails.name}</h1>
            <h5>"{clubDetails.description}"</h5>
          </Grid>
        </Grid>
      </div>
      <div className="clubmembers">
        Members:
        {clubMembers.map((member) => {
          return member.name;
        })}
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export { Club };
