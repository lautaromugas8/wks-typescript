import { User, FetchUsersAction } from "../actions";
import { ActionTypes } from "../actions/types";

const usersReducer = (state: User[] = [], action: FetchUsersAction) => {
  switch (action.type) {
    case ActionTypes.fetchUsers:
      return action.payload;
    default:
      return state;
  }
};

export { usersReducer };
