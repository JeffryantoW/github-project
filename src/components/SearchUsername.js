import React, { useState } from "react";
import { getGithubUserRepos } from "../api/github";
import Repository from "./Repository";

const SearchUsername = props => {
  const [username, setUsername] = useState("");

  const handleChange = e => {
    setUsername(e.target.value);
  };

  const onClick = () => {
    if (!!username) {
      getGithubUserRepos(username.trim())
        .then(res => {
          props.dispatch({
            type: "setData",
            payload: { data: res.data }
          });
        })
        .catch(err => {
          props.dispatch({
            type: "setData",
            payload: { data: "error" }
          });
        });
    } else {
      props.dispatch({
        type: "setData",
        payload: { data: "NotEmpty" }
      });
    }
  };

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <div className="form-group mx-sm-4 mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              value={username}
              onChange={handleChange}
            />
          </div>
          <button onClick={onClick} className="btn btn-primary mb-2">
            Find Username
          </button>
        </div>
      </div>
      {props.state.data === "error" ? (
        <p style={{ textAlign: "center" }}>User not found</p>
      ) : props.state.data === "NotEmpty" ? (
        <p style={{ textAlign: "center" }}>Username is empty</p>
      ) : (
        props.state.data &&
        props.state.data.map(item => (
          <Repository
            key={item.id}
            repo={item}
            username={username}
            dispatch={props.dispatch}
            state={props.state}
          />
        ))
      )}
    </div>
  );
};

export default SearchUsername;
