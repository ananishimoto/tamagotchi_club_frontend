import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Box, Grid, Button } from "@mui/material";

import "./style.css";
import { Loading, ClubCard } from "../../components";
import { selectClubs } from "../../store/club/selector";
import { fetchUserClubs } from "../../store/club/thunk";

const ClubCards = () => {
  const dispatch = useDispatch();
  const clubs = useSelector(selectClubs);

  useEffect(() => {
    dispatch(fetchUserClubs);
  }, [dispatch]);

  return clubs ? (
    <div className="tamagotchicardspage">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {clubs.map((club) => {
            console.log("club name", club.name);
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={club.id}>
                <ClubCard
                  id={club.id}
                  name={club.name}
                  pictureUrl={club.pictureUrl}
                  description={club.description}
                  btnEdit={
                    <Button variant="text" style={{ color: "#009a7e" }}>
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

export { ClubCards };
