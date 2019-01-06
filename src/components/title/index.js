import React from "react";
import "./index.scss";
export default props => {
  return (
      <div className="text-center text-dark mb-0 text-uppercase">
        <h1 className="display-4">
          <strong>{props.title}</strong>
        </h1>
        <div className="title-underline bg-warning" />
        <p className="text-capitalize text-muted mt-1">
          Lorem ipsum dolor sit amet
        </p>
      </div>
  );
};
