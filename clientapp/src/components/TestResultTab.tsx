import { Component } from "react";
import { isSuccess } from "../helpers/isState";
import { TestCaseResult } from "../models/TestResult";
import { TestTabExpanded } from "./Test-tab-expanded";

interface TestTabProps {
    testResult: TestCaseResult;
}

interface TestTabState {
    expanded: boolean;
}

export class TestResultTab extends Component<TestTabProps, TestTabState> {
    constructor(p: any) {
        super(p);
        this.state = {
            expanded: false
        };
    }

    render() {
        let content;
        if (this.state.expanded === false)
            content = <div className="flex justify-between"><h2 className="text-2xl mx-5">{this.props.testResult.test?.name}</h2><h2 className="text-xl mx-5">{this.props.testResult.result}</h2></div>
        else
            content = <TestTabExpanded result={this.props.testResult}></TestTabExpanded>
        return (
            <div className={`${isSuccess(this.props.testResult.result) ? "test-tab-success" : "test-tab-fail"}`} style={{ width: "100%" }} onClick={() => { this.setState({ expanded: !this.state.expanded }) }}>
                {content}
            </div>
        )
    }
}