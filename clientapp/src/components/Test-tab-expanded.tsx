import { Component } from "react";
import { TestCaseResult } from "../models/TestResult";
import { TestStep } from "./TestStep";

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

        console.log(this.props.result.test);
    }

    render() {
        return (
            <div className="" style={{ transition: "500ms" }}>
                <h2 className="text-2xl mx-5">{this.props.result.test?.name}</h2>
                <h3 className="text-xl mx-5">{this.props.result.test?.description}</h3>
                {this.props.result.test?.steps?.map((x, i) => {
                    return <TestStep key={i} name={x} result={this.props.result.stepsSuccess![i]}></TestStep>
                })}
            </div>
        )
    }
}
