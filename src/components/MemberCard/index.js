import "./style.css";

const MemberCard = ({ id, name, photoUrl }) => {
  return (
    <div className="memberCard" key={id}>
      <div className="memberCardImageBox">
        <img src={photoUrl} alt={name} className="memberImage" loading="lazy" />
      </div>
      <div className="memberCardInfo">
        <h2>{name}</h2>
      </div>
    </div>
  );
};

export { MemberCard };
