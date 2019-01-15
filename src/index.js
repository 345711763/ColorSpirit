import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Main from "./sections/Main";
import LeftPanel from "./sections/LeftPanel";
import Nav from "./sections/Nav";
import "bootstrap";
import "./index.scss";
import Firebase from './components/Firebase';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <BrowserRouter>
          <Layout left={<LeftPanel />} mid={<Main />} right={<Nav />} />
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
