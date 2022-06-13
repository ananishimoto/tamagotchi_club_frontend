import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import "./style.css";
import { TamagotchiCards } from "./tamagotchicards";

const Profile = () => {
  return (
    <div className="profilepage">
      <TamagotchiCards />
    </div>
  );
};

export { Profile };
