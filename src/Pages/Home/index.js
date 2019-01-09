import React from "react";
import "./index.scss";
import BigLogo from "../../../assets/img/homePage_bigLogo.png";
import IMG_1 from "../../../assets/img/homePage_img1.png";
import IMG_3 from "../../../assets/img/homePage_img3.jpg";
class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.status = {};
  }
  render() {
    return (
      <div className="row">
        <div className="col homePage-title">
          We do Web Design,UX /UI
          <br />
          &Illustration design
        </div>
        <div className="w-100" />
        <div className="col mb-5">
          <div className="row justify-content-end">
            <div className="col-6">
              <img src={BigLogo} alt="biglogo" className="img-fluid" />
            </div>
          </div>
        </div>
        <div className="w-100" />
        <div className="col">
          <div className="row">
            <div className="col">
              <div class="shadow-reverse">
                <img src={IMG_1} alt="IMG_1" className="img-fluid img-shadow" />
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="col-12 homePage-section-1">
                  <p class="vertical-line">All work. All fun.</p>
                </div>
                <div className="col IMG3">
                  <img src={IMG_3} alt="IMG3" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-100" />
        <div className="col bg-dark">
          <div className="bg-danger homePage_img4">IMG4</div>
          <div className="bg-success homePage_img5">IMG5</div>
          <div className="bg-info homePage_img6">IMG6</div>
          <div className="bg-secondary homePage_img7">IMG7</div>
        </div>
      </div>
    );
  }
}

export default HomePage;
