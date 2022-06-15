import { HomePageMessage } from "../../components";
import { HomeClubCards } from "./homeClubCards";

import "./style.css";

const HomePage = () => {
  return (
    <div>
      <HomePageMessage />
      <h2>Our members Clubs!</h2>
      <HomeClubCards />
    </div>
  );
};

export { HomePage };
