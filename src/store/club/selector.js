export const selectClubs = (reduxState) => reduxState.club.list;

export const selectPublicClubs = (reduxState) => reduxState.club.list;

export const selectClubOwner = (reduxState) => reduxState.club.owner;

export const selectClubMembers = (reduxState) => reduxState.club.list.users;

