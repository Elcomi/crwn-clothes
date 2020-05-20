import { createSelector } from "reselect";

const selectorUser = (state) => state.user;

export const selectUserCurrentUser = createSelector(
  [selectorUser],
  (user) => user.currentUser
);
