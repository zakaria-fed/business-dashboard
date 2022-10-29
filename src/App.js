import { Component } from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Aside from "./Components/Aside/Aside";
import Content from "./Components/Content/Content";

export default class App extends Component {
  state = {
    asideState: true,
  };

  handleAsideBtn = () => {
    this.setState((prev) => ({ ...prev, asideState: !prev.asideState }));
  };

  render() {
    return (
      <div className="App m-0">
        {/* Navbar */}
        <Navbar
          aside={this.state.asideState}
          handleAside={this.handleAsideBtn}
        />
        {/* Full width wrapper */}
        <div className="d-flex container-fluid p-0">
          {/* Aside */}
          <Aside myState={this.state.asideState} />
          {/* Content */}
          <Content />
        </div> 
      </div>
    );
  }
}
