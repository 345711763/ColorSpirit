import React from "react";
import MediaQuery from "react-responsive";
export default ({ left, mid, right }) => {
  return (
    <div className="container-fluid">
      <MediaQuery query="(min-device-width: 768px)">
        <div className="row no-gutters">
          <div className="col-1">{left}</div>
          <div className="col-10">{mid}</div>
          <div className="col-1">{right}</div>
        </div>
      </MediaQuery>
      <MediaQuery query="(max-device-width:767px)">
        <div className="row no-gutters ">
          <div className="col-2">{left}</div>
          <div className="col-10">{mid}</div>
        </div>
      </MediaQuery>
    </div>
  );
};
