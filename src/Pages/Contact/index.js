import React from "react";
import ContactImg from "../../../assets/img/contact-img.jpg";
import "./index.scss";
export default () => {
  return (
    <div className="row height-100">
      <div className="col-6 align-self-center text-center">
        <p>
          Ottawa
          <i class="fas fa-map-marker-alt pl-1" />
        </p>
        <p className="text-underline">dtx345711763@gmail.com</p>
        <p className="text-underline">+1(343)-777-6898</p>
        <p>
          79 Maple View Crescent
          <br />
          Ottawa, K2G5J2
        </p>
        <p>
          <a href="#">VIEW IN MAPS</a>
        </p>
      </div>
      <div className="col-6 d-flex">
        <img
          src={ContactImg}
          alt="contact"
          className="contact-img align-self-center "
        />
      </div>
    </div>
  );
};
