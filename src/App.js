import React, { Component } from 'react';
import './App.css';
import LineGraphComponent from "./components/LineGraphComponent";
import StackedGraphComponent from "./components/StackedGraphComponent";

class App extends Component {

  render() {
      return (
          <div>
              <LineGraphComponent/>
              <StackedGraphComponent/>
          </div>
      );
  }
}export default App;
