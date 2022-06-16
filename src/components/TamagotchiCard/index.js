import { Hearts } from "./hearts";
import "./style.css";

const TamagotchiCard = ({
  id,
  name,
  age,
  deaths,
  generation,
  evolutionlevel,
  evolutionimg,
  evolutionId,
  imageUrl,
  btnEdit,
  btnDelete,
  member,
}) => {
  return (
    <div className="tamagotchiCard" key={id}>
      <div className="tamagotchiCardImageBox">
        <img
          src={imageUrl}
          alt={name}
          className="tamagotchiImage"
          loading="lazy"
        />
      </div>
      <div className="tamagotchiCardInfo">
        <h3>{name}</h3>
        <div className="tamagotchiSpecs">
          <p>Age: {age}YR</p>
          <p>Deaths: {deaths}</p>
        </div>
        <div className="tamaevolution">
          <p>
            Evolution: {evolutionlevel}
            <img
              src={evolutionimg}
              style={{ maxHeight: "50px", maxWidth: "50px" }}
              alt={evolutionlevel}
              className="evolutionImage"
              loading="lazy"
            />
          </p>
          <p>
            <Hearts evolutionId={evolutionId} evolutionlevel={evolutionlevel} />
          </p>
        </div>
        <div className="tamagotchiButtons">
          <div>{btnEdit}</div>
          <div>{btnDelete}</div>
        </div>
        <div>{member}</div>
      </div>
    </div>
  );
};

export { TamagotchiCard };
