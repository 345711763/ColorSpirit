import React from "react";

export default ({left,mid,right})=>{
    return (
        <div className="container-fluid height-100">
            <div className="row ">
                <div className="col-1">
                    {left}
                </div>
                <div className="col-10">
                    {mid}
                </div>
                <div className="col-1">
                    {right}
                </div>
            </div>

        </div>
    )
}