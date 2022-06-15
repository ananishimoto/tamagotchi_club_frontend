import { HomePageMessage } from "../../components";
import { HomeClubCards } from "./homeClubCards";

import "./style.css";

const HomePage = () => {
  return (
    <div>
      <div className="tama-animation">
        <img className="tama-img" src="/assets/tama.png" alt="" />
      </div>
      <HomePageMessage />
      <h2>Our members Clubs!</h2>
      <HomeClubCards />
    </div>
  );
};

export { HomePage };
