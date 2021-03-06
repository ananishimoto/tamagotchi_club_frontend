import "./style.css";
import { AddClubForm, AddTamagotchiForm } from "../../components";
import { ClubCards } from "./clubcards";
import { ClubOwnerCards } from "./clubownercards";
import { TamagotchiCards } from "./tamagotchicards";

const Profile = () => {
  return (
    <div className="profilepage">
      <div className="profilesection">
        <div className="profiletitle">
          <h1>My Tamagotchi's</h1>
          <AddTamagotchiForm />
        </div>
        <TamagotchiCards />
      </div>
      <div className="profilesection">
        <div className="profiletitle">
          <h1>Clubs</h1>
        </div>
        <ClubCards />
      </div>
      <div className="profilesection">
        <div className="profiletitle">
          <h1>My Clubs</h1>
          <AddClubForm />
        </div>
        <ClubOwnerCards />
      </div>
    </div>
  );
};

export { Profile };
