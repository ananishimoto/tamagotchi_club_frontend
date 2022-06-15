import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Box, Grid } from "@mui/material";
import { Button } from "@mui/material";

import "./style.css";

import { Loading, ClubCard, EditClubForm } from "../../components";
import { selectClubOwner } from "../../store/club/selector";
import { deleteClub, fetchOwnerClubs } from "../../store/club/thunk";

const ClubOwnerCards = () => {
  const dispatch = useDispatch();
  const clubs = useSelector(selectClubOwner);
  console.log("clubs form", clubs);

  const onClickDelete = (id) => {
    dispatch(deleteClub(id));
  };

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
                    <EditClubForm
                      id={club.id}
                      clubName={club.name}
                      clubPictureUrl={club.pictureUrl}
                      clubDescription={club.description}
                      clubBackground={club.backgroundcolor}
                      clubText={club.textcolor}
                      // privated={club.private}
                    />
                  }
                  btnDelete={
                    <Button
                      style={{ backgroundColor: "#bd5487", color: "#5d3c76" }}
                      variant="contained"
                      onClick={() => onClickDelete(club.id)}
                    >
                      Delete
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
