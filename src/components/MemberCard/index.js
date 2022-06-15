import { TamagotchiCard } from "..";
import "./style.css";

const MemberCard = ({ id, name, photoUrl, props }) => {
  return (
    <div className="memberCard" key={id}>
      <div className="memberCardInfo">
        <div className="memberCardImageBox">
          <img
            src={photoUrl}
            alt={name}
            className="memberImage"
            loading="lazy"
          />
        </div>
        <h2>{name}</h2>
      </div>
      <TamagotchiCard
      // id={props.id}
      // name={props.name}
      // age={props.age}
      // deaths={props.deaths}
      // generation={props.generation}
      // imageUrl={props.imageUrl}
      // evolution={props.evolution.level}
      />
    </div>
  );
};

export { MemberCard };
