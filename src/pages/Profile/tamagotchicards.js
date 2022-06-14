import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Box, Grid, Button } from "@mui/material";

import "./style.css";
import { TamagotchiCard, Loading } from "../../components";
import { selectTamagotchis } from "../../store/tamagotchi/selector";
import {
  deleteUserTamagotchi,
  fetchUserTamagotchis,
} from "../../store/tamagotchi/thunk";

const TamagotchiCards = () => {
  const dispatch = useDispatch();
  const tamagotchis = useSelector(selectTamagotchis);

  useEffect(() => {
    dispatch(fetchUserTamagotchis);
  }, [dispatch]);

  const onClickDeleteTama = (id) => {
    dispatch(deleteUserTamagotchi(id));
  };

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
                  evolution={tamagotchi.evolution}
                  btnEdit={
                    <Button variant="text" style={{ color: "#009a7e" }}>
                      Edit
                    </Button>
                  }
                  btnDelete={
                    <Button
                      variant="text"
                      style={{ color: "#009a7e" }}
                      onClick={() => onClickDeleteTama(tamagotchi.id)}
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

export { TamagotchiCards };
