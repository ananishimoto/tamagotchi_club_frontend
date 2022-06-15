import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Grid } from "@mui/material";

import "./style.css";
import { Loading, MemberCard } from "../../components";
import { selectClubMembers } from "../../store/club/selector";
import { fetchClub } from "../../store/club/thunk";

const MemberCards = () => {
  const dispatch = useDispatch();
  const routeParams = useParams();
  const members = useSelector(selectClubMembers);

  useEffect(() => {
    dispatch(fetchClub(routeParams.id));
  }, [dispatch, routeParams.id]);

  return members ? (
    <div className="membercardspage">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {members.map((member) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={member.id}>
                <MemberCard
                  id={member.id}
                  name={member.name}
                  photoUrl={member.photoUrl}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  ) : (
    <p>
      <Loading />
    </p>
  );
};

export { MemberCards };
