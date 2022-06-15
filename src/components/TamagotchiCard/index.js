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
            <img
              src="https://i.pinimg.com/originals/df/b0/b6/dfb0b609d5324e967c35280436a4f22b.png"
              alt="hearts"
              style={{ maxHeight: "30px", maxWidth: "30px" }}
              loading="lazy"
            />
            <img
              src="https://i.pinimg.com/originals/df/b0/b6/dfb0b609d5324e967c35280436a4f22b.png"
              alt="hearts"
              style={{ maxHeight: "30px", maxWidth: "30px" }}
              loading="lazy"
            />
            <img
              src="https://i.pinimg.com/originals/df/b0/b6/dfb0b609d5324e967c35280436a4f22b.png"
              alt="hearts"
              style={{ maxHeight: "30px", maxWidth: "30px" }}
              loading="lazy"
            />
            <img
              src="https://i.pinimg.com/originals/df/b0/b6/dfb0b609d5324e967c35280436a4f22b.png"
              alt="hearts"
              style={{ maxHeight: "30px", maxWidth: "30px" }}
              loading="lazy"
            />
            <img
              src="https://i.pinimg.com/originals/df/b0/b6/dfb0b609d5324e967c35280436a4f22b.png"
              alt="hearts"
              style={{ maxHeight: "30px", maxWidth: "30px" }}
              loading="lazy"
            />
          </p>
          <p>
            <img
              src="https://i.pinimg.com/originals/df/b0/b6/dfb0b609d5324e967c35280436a4f22b.png"
              alt="hearts"
              style={{ maxHeight: "30px", maxWidth: "30px" }}
              loading="lazy"
            />
            <img
              src="https://i.pinimg.com/originals/df/b0/b6/dfb0b609d5324e967c35280436a4f22b.png"
              alt="hearts"
              style={{ maxHeight: "30px", maxWidth: "30px" }}
              loading="lazy"
            />
            <img
              src="https://i.pinimg.com/originals/df/b0/b6/dfb0b609d5324e967c35280436a4f22b.png"
              alt="hearts"
              style={{ maxHeight: "30px", maxWidth: "30px" }}
              loading="lazy"
            />
            <img
              src="https://i.pinimg.com/originals/df/b0/b6/dfb0b609d5324e967c35280436a4f22b.png"
              alt="hearts"
              style={{ maxHeight: "30px", maxWidth: "30px" }}
              loading="lazy"
            />
            <img
              src="https://i.pinimg.com/originals/df/b0/b6/dfb0b609d5324e967c35280436a4f22b.png"
              alt="hearts"
              style={{ maxHeight: "30px", maxWidth: "30px" }}
              loading="lazy"
            />
          </p>
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
