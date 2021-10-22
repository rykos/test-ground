import React, { Component } from 'react';
import './App.css';
import { TestTab } from './components/test-tab';
import { TestModel } from './models/TestModel';


class App extends Component {
  tms: TestModel[] = [
    { id: 0, name: "Test", requirements: [], expectedResult: "", steps: [] },
    { id: 1, name: "nop", requirements: [], expectedResult: "", steps: [] }, 
    { id: 2, name: "qwe", requirements: [], expectedResult: "", steps: [] }
  ];

  render() {
    return (
      <div className="w-full flex-col flex items-center">
        {this.tms.map(x => {
          return <TestTab key={x.id} test={x}></TestTab>
        })}
      </div>
    );
  }
}

export default App;
