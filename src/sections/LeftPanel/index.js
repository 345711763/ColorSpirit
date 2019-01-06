import React from "react";
import Logo from "../../../assets/img/logo.svg";
import MediaBox from "../../components/media-box";
export default ()=>{
    return (
        <div className="row height-100">
            <div className="col"><img src={Logo} className="mt-2" alt="logo"/></div>
            <MediaBox/>
        </div>
    )
}