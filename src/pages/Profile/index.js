import { ClubCards } from "./clubcards";
import "./style.css";
import { TamagotchiCards } from "./tamagotchicards";

const Profile = () => {
  return (
    <div className="profilepage">
      <div className="tamagotchiOverview">
        <h1>My Tamagotchi's</h1>
        <TamagotchiCards />
      </div>
      <div className="clubOverview">
        <h1>My Clubs</h1>
        <ClubCards />
      </div>
    </div>
  );
};

export { Profile };
