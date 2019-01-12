import React from "react";
import Logo from "../../../assets/img/logo.svg";
import MediaBox from "../../components/Media-box";
import MediaQuery from "react-responsive";
export default (props)=>{
    return (
        <div className="row height-100">
            <MediaQuery query="(min-device-width:768px)">
                <div className="col"><img src={Logo} className="mt-2" alt="logo" onLoad={()=>props.handleImageChange()}/></div>
            </MediaQuery>
            <MediaBox/>
        </div>
    )
}