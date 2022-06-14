import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUser } from "../../store/user/selectors";
import { ClubCards } from "./clubcards";
import { ClubOwnerCards } from "./clubownercards";
import "./style.css";
import { TamagotchiCards } from "./tamagotchicards";

const Profile = () => {
  return (
    <div className="profilepage">
      <div className="tamagotchiOverview">
        <div className="tamagotchiTitle">
          <h1>My Tamagotchi's</h1>
          <Button
            variant="contained"
            style={{ backgroundColor: "#f2944e", color: "#e4ed58" }}
          >
            Add new Tamagotchi
          </Button>
        </div>
        <TamagotchiCards />
      </div>
      <div className="clubmemberOverview">
        <div className="tamagotchiTitle">
          <h1>Clubs</h1>
          <Button
            variant="contained"
            style={{ backgroundColor: "#f2944e", color: "#e4ed58" }}
          >
            Add new Club
          </Button>
        </div>
        <ClubCards />
      </div>
      <div className="clubownerOverview">
        <div className="tamagotchiTitle">
          <h1>My Clubs</h1>
          <Button
            variant="contained"
            style={{ backgroundColor: "#f2944e", color: "#e4ed58" }}
          >
            Add new Club
          </Button>
        </div>
        <ClubOwnerCards />
      </div>
    </div>
  );
};

export { Profile };
