export const selectClubs = (reduxState) => reduxState.club.list;

export const selectOwnerClubs = (reduxState) => reduxState.club.owner;

export const selectClubMembers = (reduxState) => reduxState.club.list.users;
