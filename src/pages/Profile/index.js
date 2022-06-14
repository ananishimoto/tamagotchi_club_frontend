import { ClubCards } from "./clubcards";
import { ClubOwnerCards } from "./clubownercards";
import "./style.css";
import { TamagotchiCards } from "./tamagotchicards";

const Profile = () => {
  return (
    <div className="profilepage">
      <div className="tamagotchiOverview">
        <h1>My Tamagotchi's</h1>
        <TamagotchiCards />
      </div>
      <div className="clubmemberOverview">
        <h1>Clubs</h1>
        <ClubCards />
      </div>
      <div className="clubownerOverview">
        <h1>My Clubs</h1>
        <ClubOwnerCards />
      </div>
    </div>
  );
};

export { Profile };
