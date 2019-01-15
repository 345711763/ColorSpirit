import React from "react";
import "./index.scss";
import IMG_1 from "../../../assets/img/aboutPage_img1.jpg";
class AboutPage extends React.Component {
    constructor(props) {
        super(props);
        this.status = {};
    }
    render() {
        return (
            <div className="row about-content">
                <div className="col-6">
                    <p>Ke is a UX/UI designer with experience of building the company's branding.  Her background in brand strategy, visual design, user experience inform her mindful but competitive approach. Ke is fuelled by her passion for understanding the nuances of cross-cultural advertising</p>
                    <p>She is passionate about art. She began to learn drawing when she was little. She graduated as a Graphic Designer from Algonquin College. She has more than 4+ years of experience of teaching kids how to draw. </p>
                    <p>She believes that all the kids are all artist, they are excellent at drawing! She's job is helping them to express their ideas and concept on paper! Kids are super creative.</p>
                </div>
                <div className="col-6"><img src={IMG_1} alt={IMG_1} onLoad={this.props.handleImageChange} className="container-fluid"/></div>
            </div>
        );
    }
}

export default AboutPage;
