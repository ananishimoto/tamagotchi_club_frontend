import "./style.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";

import { selectClubs, selectClubMembers } from "../../store/club/selector";
import { fetchClub } from "../../store/club/thunk";
import { Loading } from "../../components";
import { MemberCards } from "./membercards";
import { TamagotchiClubCards } from "./tamagotchicards";
import { selectTamagotchis } from "../../store/tamagotchi/selector";

const Club = () => {
  const dispatch = useDispatch();
  const routeParams = useParams();
  const clubDetails = useSelector(selectClubs);
  const clubMembers = useSelector(selectClubMembers);
  console.log("club members", clubMembers);
  const tamagotchis = useSelector(selectTamagotchis);

  const deaths = tamagotchis.map((tamagotchi) => tamagotchi.deaths);
  let deathsum = 0;
  for (let i = 0; i < deaths.length; i++) {
    deathsum += deaths[i];
  }

  const age = tamagotchis.map((tamagotchi) => tamagotchi.age);
  const highestage = Math.max(...age);

  const evolution = tamagotchis.map((tamagotchi) => tamagotchi.evolution.id);
  console.log("evolution", evolution);
  const highestevolution = Math.max(...evolution);
  console.log(highestevolution);
  const n = highestevolution;
  console.log(n);
  const hearts = [...Array(n)].map(() => (
    <img
      src="https://i.pinimg.com/originals/df/b0/b6/dfb0b609d5324e967c35280436a4f22b.png"
      alt="hearts"
      style={{ maxHeight: "30px", maxWidth: "30px" }}
      loading="lazy"
    />
  ));

  useEffect(() => {
    dispatch(fetchClub(routeParams.id));
  }, [dispatch, routeParams.id]);

  return clubDetails ? (
    <div className="clubpage">
      <div className="clubbanner" key={clubDetails.id}>
        <Grid
          container
          alignItems="center"
          pl={2}
          style={{
            backgroundColor: `${clubDetails.backgroundcolor}`,
            color: `${clubDetails.textcolor}`,
            maxHeight: "200px",
          }}
        >
          <Grid item xs={4}>
            <img
              alt="club"
              style={{
                maxHeight: "200px",
                padding: "10px",
                borderRadius: "20px",
              }}
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
      <div
        className="clubsection"
        style={{
          backgroundColor: `${clubDetails.backgroundcolor}88`,
        }}
      >
        <h2 style={{ color: `${clubDetails.textcolor}` }}>Club stats</h2>
        <p>Total deaths: {deathsum}</p>
        <p>Highest age: {highestage} YR</p>
        <p>Best care: {hearts}</p>
      </div>
      <div
        className="clubsection"
        style={{
          backgroundColor: `${clubDetails.backgroundcolor}88`,
          color: `${clubDetails.textcolor}`,
        }}
      >
        <h2>Tamagotchis</h2>
        <div>
          <TamagotchiClubCards />
        </div>
      </div>
      {/* <div
        className="clubsection"
        style={{
          backgroundColor: `${clubDetails.backgroundcolor}88`,
          color: `${clubDetails.textcolor}`,
        }}
      >
        <h2>Members</h2>
        <div>
          <MemberCards />
        </div>
      </div> */}
    </div>
  ) : (
    <Loading />
  );
};

export { Club };
