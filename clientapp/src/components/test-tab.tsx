import { Component } from "react";
import { TestModel } from "../models/TestModel";

interface TestTabProps {
    test: TestModel;
}

export class TestTab extends Component<TestTabProps> {
    constructor(p: any) {
        super(p);
    }

    render() {
        return (
            <div className="test-tab-success" style={{width: "50%"}} onClick={() => {console.log(`Expand test id=${this.props.test.id}`)}}>
                <h2 className="text-2xl mx-5">Test name</h2>
                <h2 className="text-xl mx-5">Success</h2>
            </div>
        )
    }
}