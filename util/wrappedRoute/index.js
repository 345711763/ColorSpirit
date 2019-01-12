import React from "react";
import {Route} from "react-router-dom";
export default class Index extends React.Component{
    render(){
        let { Component, path, exact} = this.props;
        return (
            <Route
                path={path}
                exact={exact}
                render={props => <Component {...props} handleImageChange={this.props.handleImageChange} />}
            />
        );
    }
}