import React from "react";
import "./index.scss";
import {Link} from "react-router-dom"
class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.status={};
    }
    render(){
        return(
            <div className="container-fluid">
                <div className="row ">
                    <div className="col-9 col-sm-10 col-xl-11">left</div>
                    <div className="col-3 col-sm-2 col-xl-1">
                        <nav>
                            <ul className="nav-font text-center list-unstyled">
                                <li><Link to="/">Home</Link></li>
                                <li> <Link to="/about">About</Link></li>
                                <li><Link to="/team">Team</Link></li>
                                <li> <Link to="/contact">Contact</Link></li></ul>
                        </nav>
                    </div>
                </div>

            </div>
        )
    }
}

export default HomePage;