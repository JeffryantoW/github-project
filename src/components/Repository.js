import React from "react";
import Readme from "./Readme";
import { getRepoReadme } from "../api/github";

const Repository = props => {
  const handleClick = () => {
    getRepoReadme(props.username, props.repo.name)
      .then(res => {
        const newData = props.state.data.slice();
        newData.find(e => e.id === props.repo.id).readme = res.data;

        props.dispatch({
          type: "setData",
          payload: { data: newData }
        });
      })
      .catch(err => {
        const newData = props.state.data.slice();
        newData.find(e => e.id === props.repo.id).readmeError = true;

        props.dispatch({
          type: "setData",
          payload: { data: newData }
        });
      });
  };

  return (
    <div className="card">
      <div className="card-header">
        <h4> {props.repo.name} </h4>
        <button className="btn btn-primary mb-1" onClick={handleClick}>
          Show Readme file
        </button>
      </div>
      <div className="card-body Readme">
        <p className="card-text" />
        <Readme readme={props.repo.readme} error={props.repo.readmeError} />
      </div>
    </div>
  );
};

export default Repository;
