import React, { Component } from 'react';
import './App.css';
import { TestTab } from './components/test-tab';
import { TestCase } from './models/TestCase';
import { TestCaseResult } from './models/TestResult';


class App extends Component {
  tms: TestCase[] = [
    {
      id: 0, name: "Test", requirements: [], expectedResult: "", steps: [
        "Step 1", "Step 2", "Step 3"
      ], description: "", author: "", automation: true, category: ""
    },
    { id: 1, name: "nop", requirements: [], expectedResult: "", steps: ["Step 1", "Step 2", "Step 3"], description: "", author: "", automation: true, category: "" },
    { id: 2, name: "qwe", requirements: [], expectedResult: "", steps: ["Step 1", "Step 2", "Step 3"], description: "", author: "", automation: true, category: "" }
  ];

  tmr: TestCaseResult[] = [
    { result: "success", test: this.tms[0], stepsSuccess: [true, true, true] },
    { result: "success", test: this.tms[1], stepsSuccess: [true, true, true] },
    { result: "fail", test: this.tms[2], stepsSuccess: [true, true, false] }
  ];

  render() {
    return (
      <div className="w-full flex-col flex items-center">
        {this.tmr.map(x => {
          return <TestTab key={x.test?.id} testResult={x}></TestTab>
        })}
      </div>
    );
  }
}

export default App;
