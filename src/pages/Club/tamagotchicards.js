import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Box, Grid } from "@mui/material";

import "./style.css";
import { TamagotchiCard, Loading } from "../../components";
import { selectTamagotchis } from "../../store/tamagotchi/selector";
import { fetchClubTamagotchis } from "../../store/club/thunk";

const TamagotchiClubCards = () => {
  const dispatch = useDispatch();
  const tamagotchis = useSelector(selectTamagotchis);

  useEffect(() => {
    dispatch(fetchClubTamagotchis);
  }, [dispatch]);

  return tamagotchis ? (
    <div className="tamagotchicardspage">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {tamagotchis.map((tamagotchi) => {
            return (
              <Grid
                item
                xs={12}
                sm={6}
                // md={4}
                lg={4}
                xl={3}
                key={tamagotchi.id}
              >
                <TamagotchiCard
                  id={tamagotchi.id}
                  name={tamagotchi.name}
                  imageUrl={tamagotchi.imageUrl}
                  age={tamagotchi.age}
                  deaths={tamagotchi.deaths}
                  generation={tamagotchi.generation}
                  evolutionlevel={tamagotchi.evolution.level}
                  evolutionimg={tamagotchi.evolution.imageUrl}
                  evolutionId={tamagotchi.evolution.id}
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

export { TamagotchiClubCards };
