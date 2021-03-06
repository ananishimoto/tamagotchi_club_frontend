import { Link } from "@mui/material";
import "./style.css";

const ClubCard = ({
  id,
  name,
  description,
  pictureUrl,
  backgroundcolor,
  textcolor,
  btnEdit,
  btnDelete,
}) => {
  return (
    <div
      className="clubCard"
      key={id}
      style={{
        backgroundColor: `${backgroundcolor}`,
        borderColor: `${textcolor}`,
        color: `${textcolor}`,
      }}
    >
      <div className="clubCardImageBox">
        <img src={pictureUrl} alt={name} className="clubImage" loading="lazy" />
      </div>
      <div className="clubCardInfo">
        <Link href={`/club/${id}`} color="inherit" className="custom-link">
          <h2>{name}</h2>
        </Link>
        <p>{description}</p>
        <div className="editButton">{btnEdit}</div>
        <div className="deleteButton">{btnDelete}</div>
      </div>
    </div>
  );
};

export { ClubCard };
