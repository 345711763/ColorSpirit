import React from "react";
import "./index.scss";
import BigLogo from "../../../assets/img/homePage_bigLogo.png";
import IMG_1 from "../../../assets/img/homePage_img1.png";
import IMG_3 from "../../../assets/img/homePage_img3.jpg";
import IMG_4 from "../../../assets/img/homePage_img4.jpg";
import IMG_5 from "../../../assets/img/homePage_img5.jpg";
import IMG_6 from "../../../assets/img/homePage_img6.jpg";
import IMG_7 from "../../../assets/img/homePage_img7.jpg";
class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.status = {};
  }
  render() {
      ("rendering hompage");
    return (
      <div className="row">
        <div className="col homePage-title">
          We do Web Design,UX /UI
          <br />
          &Illustration design
        </div>
        <div className="w-100" />
        <div className="col ,mb-5">
          <div className="row justify-content-end">
            <div className="col-6">
              <img src={BigLogo} alt="biglogo" className="img-fluid" onLoad={this.props.handleImageChange}/>
            </div>
          </div>
        </div>
        <div className="w-100" />
          {/* End of Logo*/}
        <div className="col">
          <div className="row"> {/* container for both left and right*/}
              <section id="HomePageLeftSection" className="col-6">
                  <div className="row">
                      <div className="col-12">
                          <img src={IMG_1} alt="IMG_1" className="max-width-80 img-shadow homePage-img1" onLoad={this.props.handleImageChange} />
                      </div>
                      <div className="col-12 mt-5">
                          <img src={IMG_4} alt="IMG_4" className="max-width-80 img-shadow homePage_img4" onLoad={this.props.handleImageChange}/>
                      </div>
                      <div className="col-12 mt-5 ">
                          <img src={IMG_6} alt="IMG_6" className="max-width-80 img-shadow homePage_img6" onLoad={this.props.handleImageChange}/>
                      </div>
                  </div>
              </section>
              <section id="HomePageRightSection" className="col-6">
                  <div className="row">
                      <div className="col-12 homePage-section-1">
                          <p class="vertical-line">All work. All fun.</p>
                      </div>
                      <div className="col-12 mt-5">
                          <img src={IMG_3} alt="IMG3" className="max-width-80 img-shadow homePage_img3" onLoad={this.props.handleImageChange} />
                      </div>
                      <div className="col-12 mt-5 ">
                          <img src={IMG_5} alt="IMG_5" className="max-width-80 img-shadow homePage_img5" onLoad={this.props.handleImageChange}/>
                      </div>
                      <div className="col-12 mt-5 ">
                          <img src={IMG_7} alt="IMG_7" className="max-width-80 img-shadow homePage_img7" onLoad={this.props.handleImageChange}/>
                      </div>
                  </div>
              </section>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
