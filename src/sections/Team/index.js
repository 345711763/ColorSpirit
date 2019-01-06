import React from "react";
import Title from "../../components/title";
import Img_1 from "../../../assets/img/adults-analysis-brainstorming-1661004.jpg";
import Img_2 from "../../../assets/img/adult-backlit-bottles-697244.jpg";
import Img_3 from "../../../assets/img/collaboration-community-cooperation-872955.jpg";
export default props => {
  return (
    <div className="container">
      <Title title="team" />
      <div className="row">
        <div className="col-lg-4 col-md-6 my-3">
          <div className="card">
            <img className="card-img-top" src={Img_2} alt="member1" />
            <div className="card-body">
              <div className="div card-title text-capitalize">team member</div>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eligendi, voluptatem!
              </p>
              <button className="btn btn-outline-warning text-uppercase">
                press here
              </button>
            </div>
            <div className="card-footer bg-secondary d-flex justify-content-around">
              <a>
                <i className="fab fa-facebook fa-2x text-dark" />
              </a>
              <a>
                <i className="fab fa-twitter fa-2x text-dark" />
              </a>
              <a>
                <i className="fab fa-youtube fa-2x text-dark" />
              </a>
              <a>
                <i className="fab fa-google fa-2x text-dark" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 my-3">
          <div className="card">
            <img className="card-img-top" src={Img_2} alt="member2" />
            <div className="card-body">
              <div className="div card-title text-capitalize">team member</div>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eligendi, voluptatem!
              </p>
              <button className="btn btn-outline-warning text-uppercase">
                press here
              </button>
            </div>
            <div className="card-footer bg-secondary d-flex justify-content-around">
              <a>
                <i className="fab fa-facebook fa-2x text-dark" />
              </a>
              <a>
                <i className="fab fa-twitter fa-2x text-dark" />
              </a>
              <a>
                <i className="fab fa-youtube fa-2x text-dark" />
              </a>
              <a>
                <i className="fab fa-google fa-2x text-dark" />
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 my-3">
          <div className="card">
            <img className="card-img-top" src={Img_3} alt="member3" />
            <div className="card-body">
              <div className="div card-title text-capitalize">team member</div>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eligendi, voluptatem!
              </p>
              <button className="btn btn-outline-warning text-uppercase">
                press here
              </button>
            </div>
            <div className="card-footer bg-secondary d-flex justify-content-around">
              <a>
                <i className="fab fa-facebook fa-2x text-dark" />
              </a>
              <a>
                <i className="fab fa-twitter fa-2x text-dark" />
              </a>
              <a>
                <i className="fab fa-youtube fa-2x text-dark" />
              </a>
              <a>
                <i className="fab fa-google fa-2x text-dark" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
