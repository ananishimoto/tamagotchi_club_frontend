import "./style.css";

const TamagotchiCard = ({
  id,
  name,
  age,
  deaths,
  evolution,
  imageUrl,
  btnEdit,
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
        <h2>{name}</h2>
        <div className="tamagotchiSpecs">
          <p>Age: {age}YR</p>
          <p>Deaths: {deaths}</p>
          <p>Evolution: {evolution}</p>
        </div>
        <div className="editButton">{btnEdit}</div>
      </div>
    </div>
  );
};

export { TamagotchiCard };
