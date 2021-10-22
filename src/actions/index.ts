import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";

export interface User {
  id: number;
  name: string;
  lastName: string;
}

export interface FetchUsersAction {
  type: ActionTypes.fetchUsers;
  payload: User[];
}

export interface DeleteUserAction {
  type: ActionTypes.deleteUsers;
}

const url = "https://localhost:3001/user";

const fetchUsers = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<User[]>(url);
    dispatch<FetchUsersAction>({
      type: ActionTypes.fetchUsers,
      payload: response.data,
    });
  };
};

export { fetchUsers };
