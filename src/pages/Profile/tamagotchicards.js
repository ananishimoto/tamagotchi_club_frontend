import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Box, Grid, Button } from "@mui/material";

import "./style.css";
import { TamagotchiCard, Loading } from "../../components";
import { selectTamagotchis } from "../../store/tamagotchi/selector";
import { fetchUserTamagotchis } from "../../store/tamagotchi/thunk";

const TamagotchiCards = () => {
  const dispatch = useDispatch();
  const tamagotchis = useSelector(selectTamagotchis);

  useEffect(() => {
    dispatch(fetchUserTamagotchis);
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
                md={4}
                lg={3}
                xl={2}
                key={tamagotchi.id}
              >
                <TamagotchiCard
                  id={tamagotchi.id}
                  name={tamagotchi.name}
                  imageUrl={tamagotchi.imageUrl}
                  age={tamagotchi.age}
                  deaths={tamagotchi.deaths}
                  evolution={tamagotchi.evolution.level}
                  btnEdit={
                    <Button
                      variant="contained"
                      style={{ backgroundColor: "#bd5487", color: "#5d3c76" }}
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

export { TamagotchiCards };
