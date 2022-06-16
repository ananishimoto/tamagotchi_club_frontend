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
      <div className="publicClubsSection">
        <div className="publicClubsTitle">
          <h2>Our members Clubs!</h2>
        </div>
        <HomeClubCards />
      </div>
    </div>
  );
};

export { HomePage };
