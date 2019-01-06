import React from "react";
import "./index.scss";
export default ()=>{
    const onClickHandler = ()=>{
        console.log("clicked");
        document.getElementById("medias").classList.toggle("show");
        console.log(document.getElementById("medias").className);
    }
    return (
        <div className="media-box" onClick={()=>onClickHandler()}>
            <div id="medias" className="media flex-column show">
                <div><i className="fab fa-facebook-square"/></div>
                <div><i className="fab fa-instagram"/></div>
                <div><i className="fab fa-twitter-square"/></div>
            </div>
            <i className="fas fa-ellipsis-v" />
        </div>
    )
}