import React from 'react';
import Title from '../../components/title';
import Img_1 from "../../../assets/img/adult-backlit-bottles-697244.jpg";
import Img_2 from "../../../assets/img/aerial-shot-bird-s-eye-view-from-above-1746589.jpg";
import Img_3 from "../../../assets/img/cold-daylight-desktop-backgrounds-1468555.jpg";
export default (props)=>{
    return (
        <div className="container-fluid bg-secondary py-5">
            <div className="row">
                <Title title="projects"/>
            </div>
            <div className="row no-gutters py-3">
                <div className="col-md-4 col-sm-6 mx-auto">
                    <img src={Img_1} alt="projects" className="img-fluid"/>
                </div>
                <div className="col-md-4 col-sm-6 mx-auto" >
                    <img src={Img_2} alt="projects" className="img-fluid"/>
                </div>
                <div className="col-md-4 col-sm-6 mx-auto">
                    <img src={Img_3} alt="projects" className="img-fluid"/>
                </div>
            </div>
        </div>
    );
}
