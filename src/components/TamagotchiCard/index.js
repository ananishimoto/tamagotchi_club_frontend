import "./style.css";

const TamagotchiCard = ({
  id,
  name,
  age,
  deaths,
  generation,
  evolution,
  evolutionId,
  imageUrl,
  btnEdit,
  btnDelete,
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
          <p>Evolution: {evolution}</p>
        </div>
        <div className="tamagotchiButtons">
          <div>{btnEdit}</div>
          <div>{btnDelete}</div>
        </div>
      </div>
    </div>
  );
};

export { TamagotchiCard };
