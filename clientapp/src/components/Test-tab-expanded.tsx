import { Component, Fragment } from "react";
import { TestCase } from "../models/TestCase";
import { TestCaseResult } from "../models/TestResult";

interface TestTabExpandedProps {
    result: TestCaseResult;
}
//flex justify-between

export class TestTabExpanded extends Component<TestTabExpandedProps> {
    constructor(p: any) {
        super(p);
        this.state = {
            expanded: false
        };
    }

    render() {
        return (
            <div className="" style={{ transition: "500ms" }}>
                <h2 className="text-2xl mx-5">{this.props.result.test?.name}</h2>
                {this.props.result.test?.steps?.map((x, i) => {
                    return <div>{x} {`${this.props.result.stepsSuccess![i] ? "Ok" : "Fail"}`}</div>
                })}
            </div>
        )
    }
}
