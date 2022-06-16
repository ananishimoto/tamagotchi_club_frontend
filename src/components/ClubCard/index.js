import { Link } from "@mui/material";
import "./style.css";

const ClubCard = ({
  id,
  name,
  description,
  pictureUrl,
  btnEdit,
  btnDelete,
}) => {
  return (
    <div className="clubCard" key={id}>
      <div className="clubCardImageBox">
        <img src={pictureUrl} alt={name} className="clubImage" loading="lazy" />
      </div>
      <div className="clubCardInfo">
        <Link href={`/club/${id}`} color="inherit">
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
