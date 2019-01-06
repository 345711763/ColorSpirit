import React from "react";
import { Link } from "react-router-dom"
import "./index.scss";
export default ()=>{
    return (
            <nav>
                <ul className="nav-font text-right list-unstyled">
                    <li><Link to="/">Home</Link></li>
                    <li> <Link to="/about">About</Link></li>
                    <li><Link to="/team">Team</Link></li>
                    <li> <Link to="/contact">Contact</Link></li></ul>
            </nav>
    )
}