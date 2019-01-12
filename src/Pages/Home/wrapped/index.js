import React from "react";
import HomePage from "../index";
class WrappedHomePage extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <HomePage />
        )
    }
}

export default WrappedHomePage;