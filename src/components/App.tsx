import React from "react";
import { connect } from "react-redux";
import { User, fetchUsers } from "../actions";
import { StoreState } from "../reducers";

interface AppProps {
  users: User[];
  fetchUsers(): any;
}

const App = (props: AppProps): JSX.Element => {
  return (
    <div>
      <button onClick={props.fetchUsers}>FETCH USERS!</button>
      {props.users.map((user: User) => (
        <div key={user.id}>
          {user.id}) {user.name}
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state: StoreState): { users: User[] } => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps, { fetchUsers })(App);
