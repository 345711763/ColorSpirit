import React from "react";
import { Link } from "react-router-dom"
import "./index.scss";
export default ()=>{
    return (
            <nav>
                <ul className="nav-font text-right list-unstyled">
                    <li><Link className="onTopCanvas" to="/">Home</Link></li>
                    <li> <Link className="onTopCanvas" to="/about">About</Link></li>
                    <li><Link className="onTopCanvas" to="/team">Team</Link></li>
                    <li> <Link className="onTopCanvas" to="/contact">Contact</Link></li></ul>
            </nav>
    )
}