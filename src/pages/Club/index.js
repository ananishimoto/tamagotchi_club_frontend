import "./style.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectClubs } from "../../store/club/selector";
import { fetchClub } from "../../store/club/thunk";
import { Loading } from "../../components";

const Club = () => {
  const dispatch = useDispatch();
  const routeParams = useParams();
  const clubDetails = useSelector(selectClubs);

  useEffect(() => {
    dispatch(fetchClub(routeParams.id));
  }, [dispatch, routeParams.id]);

  return clubDetails ? (
    <div className="clubpage">
      {clubDetails.name}
      {clubDetails.description}
      <div className="clubmembers">
        Members:
        {clubDetails.users.map((user) => {
          return user.name;
        })}
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export { Club };
