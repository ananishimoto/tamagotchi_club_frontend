import { HomePageMessage } from "../../components";
import { HomeClubCards } from "./homeClubCards";

import "./style.css";

const HomePage = () => {
  return (
    <div>
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
