import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Box, Grid, Button } from "@mui/material";

import "./style.css";
import { Loading, ClubCard } from "../../components";
import { selectOwnerClubs } from "../../store/club/selector";
import { fetchOwnerClubs } from "../../store/club/thunk";

const ClubOwnerCards = () => {
  const dispatch = useDispatch();
  const clubs = useSelector(selectOwnerClubs);

  useEffect(() => {
    dispatch(fetchOwnerClubs);
  }, [dispatch]);

  return clubs ? (
    <div className="tamagotchicardspage">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {clubs.map((club) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={club.id}>
                <ClubCard
                  id={club.id}
                  name={club.name}
                  pictureUrl={club.pictureUrl}
                  description={club.description}
                  btnEdit={
                    <Button
                      variant="contained"
                      style={{ backgroundColor: "#1c1237", color: "#005f92" }}
                    >
                      Edit
                    </Button>
                  }
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

export { ClubOwnerCards };