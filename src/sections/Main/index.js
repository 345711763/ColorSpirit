import React from "react";
import ContactPage from "../../Pages/Contact";
import HomePage from "../../Pages/Home";
import {Switch} from "react-router-dom";
import AboutPage from "../../Pages/About";
import WrappedRoute from "../../../util/wrappedRoute";
class Main extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Switch>
                <WrappedRoute exact path="/" Component={HomePage} handleImageChange={this.props.handleImageChange}/>
                <WrappedRoute exact path="/contact" Component={ContactPage} handleImageChange={this.props.handleImageChange}/>
                <WrappedRoute exact path="/about" Component={AboutPage} handleImageChange={this.props.handleImageChange}/>
                {/*<Route exact path="/contact" component={React.cloneElement(ContactPage,{handleImageChange:this.props.handleImageChange})} />*/}
            </Switch>
        )
    }
}

export default Main;