import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Box, Grid } from "@mui/material";

import "./style.css";
import { Loading, ClubCard } from "../../components";
import { selectPublicClubs } from "../../store/club/selector";
import { fecthNonPrivateClubs } from "../../store/club/thunk";

const HomeClubCards = () => {
  const dispatch = useDispatch();
  const publicClubs = useSelector(selectPublicClubs);
  console.log("Home Page", publicClubs);

  useEffect(() => {
    dispatch(fecthNonPrivateClubs);
  }, [dispatch]);

  return publicClubs ? (
    <div className="tamagotchicardspage">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {publicClubs.map((club) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={club.id}>
                <ClubCard
                  id={club.id}
                  name={club.name}
                  pictureUrl={club.pictureUrl}
                  description={club.description}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  ) : (
    <p>
      <Loading />
    </p>
  );
};

export { HomeClubCards };
