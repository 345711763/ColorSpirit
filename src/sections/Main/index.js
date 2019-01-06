import React from "react";
import ContactPage from "../../Pages/Contact";
import HomePage from "../../Pages/Home";
import {Switch, Route} from "react-router-dom";

class Main extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/contact" component={ContactPage} />
            </Switch>
        )
    }
}

export default Main;