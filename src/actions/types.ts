import { FetchUsersAction, DeleteUserAction } from "./index";

export enum ActionTypes {
  fetchUsers,
  deleteUsers,
}

export type Action = FetchUsersAction | DeleteUserAction;
