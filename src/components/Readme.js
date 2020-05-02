import React from "react";
import ReactMarkdown from "react-markdown";

const Readme = props => {
  if (props.error) {
    return (
      <p style={{ textAlign: "center" }}>
        Readme file is unavailable for this repository
      </p>
    );
  }
  return props.readme ? (
    <ReactMarkdown source={atob(props.readme.content)} />
  ) : null;
};

export default Readme;
