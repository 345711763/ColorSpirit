import React from "react";
import ContactPage from "../../Pages/Contact";
import HomePage from "../../Pages/Home";
import {Switch} from "react-router-dom";
import WrappedRoute from "../../../util/wrappedRoute";
class Main extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Switch>
                <WrappedRoute path="/" Component={HomePage} handleImageChange={this.props.handleImageChange}/>
                {/*<Route exact path="/" render={React.cloneElement(HomePage,{handleImageChange:this.props.handleImageChange})} />*/}
                {/*<Route exact path="/contact" component={React.cloneElement(ContactPage,{handleImageChange:this.props.handleImageChange})} />*/}
            </Switch>
        )
    }
}

export default Main;