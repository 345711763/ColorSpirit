import React from "react";
import ContactImg from "../../../assets/img/contact-img.jpg";
import "./index.scss";
export default (props) => {
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
          <button
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#map"
          >
            VIEW IN MAPS
          </button>
        </p>
      </div>
      <div className="col-6 d-flex">
        <img
          src={ContactImg}
          alt="contact"
          className="contact-img align-self-center "
          onLoad={props.handleImageChange}
        />
      </div>
      <div className="modal fade" id="map" tabindex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="mapModalLabel">
                Location
              </h5>
              <button type="button" className="close" data-dismiss="modal">
                  <i class="fas fa-times" />
              </button>
            </div>
            <div className="modal-body">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2804.617089462723!2d-75.76729594869876!3d45.33635417899698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce07155e45805d%3A0x5085ebbba2573bf6!2s79+Maple+View+Crescent%2C+Nepean%2C+ON+K2G+5J2!5e0!3m2!1szh-CN!2sca!4v1546806456181"
                width="400"
                height="300"
                frameborder="0"
                style={{border:0}}
                allowfullscreen
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
