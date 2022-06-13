import React from "react";
import Spinner from "react-bootstrap/Spinner";
import "./spinner.css";

const Loading = () => {
  return (
    <div className="loading_spinner">
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
};

export { Loading };
