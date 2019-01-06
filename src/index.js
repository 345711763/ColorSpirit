import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter,Route, Link} from "react-router-dom";
import HomePage from "./Pages/Home";
import 'bootstrap';
import "./index.scss";

const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <BrowserRouter>
          <Route path="/" component={HomePage}/>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
