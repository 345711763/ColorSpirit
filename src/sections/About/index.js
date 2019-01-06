import React from "react";
import Title from "../../components/title";
export default (props)=>{
    return (
            <div className="container-fluid bg-info">
                <div className="row text-center">
                    <div className="col-md-6 col-sm-12 about-picture height-80 "></div>
                    <div className="col-md-6 col-sm-12 about-text height-80 px-5 d-flex justify-content-center align-items-center flex-column">
                        <Title title="about"/>
                        {/*end of the title*/}
                        <div className="d-flex">
                            <i class="fas fa-check fa-3x p-2 mr-2 bg-warning align-self-center "></i>
                            <p className="text-light lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, temporibus!</p>
                        </div>
                        <div className="d-flex">
                            <i class="fas fa-check fa-3x p-2 mr-2 bg-warning align-self-center"></i>

                            <p className="text-light lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, temporibus!</p>
                        </div>
                        <div className="d-flex">
                            <i class="fas fa-check fa-3x p-2 mr-2 bg-warning align-self-center"></i>

                            <p className="text-light lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, temporibus!</p>
                        </div>
                    </div>
                </div>
            </div>
    );
}