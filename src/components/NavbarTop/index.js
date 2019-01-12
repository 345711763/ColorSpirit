import React from "react";
import Logo from "../../../assets/img/logo.svg";
import "./index.scss";
export default ()=>{
    return(
        <nav className="d-flex">
            <div id="NavbarTop-icon" className="col-2 mr-auto"/>
            <ul className="col-10 list-inline list-unstyled text-right NavbarTop-ul">
                <li className="list-inline-item"><i className="fas fa-home mr-1"/>Home</li>
                <li className="list-inline-item"><i className="fas fa-info-circle mr-1"/>About</li>
                <li className="list-inline-item"><i className="fas fa-address-card mr-1"/>Team</li>
                <li className="list-inline-item"><i className="fas fa-envelope mr-1"/>Contact</li>
            </ul>
        </nav>
    )
}