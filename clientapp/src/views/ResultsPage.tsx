import { Component } from "react";
import { TestResultTab } from "../components/TestResultTab";
import { TestCase } from "../models/TestCase";
import { TestCaseResult } from "../models/TestResult";

export class ResultsPage extends Component {
    tms: TestCase[] = [
        {
            id: 0, name: "Test", requirements: [], expectedResult: "", steps: [
                "Step 1", "Step 2", "Step 3"
            ], description: "Test logowania poprzez przycisk loguj", author: "", automation: true, category: ""
        },
        { id: 1, name: "nop", requirements: [], expectedResult: "", steps: ["Step 1", "Step 2", "Step 3"], description: "Test logowania poprzez przycisk loguj", author: "", automation: true, category: "" },
        { id: 2, name: "qwe", requirements: [], expectedResult: "", steps: ["Step 1", "Step 2", "Step 3", "Step 4"], description: "Test logowania poprzez przycisk loguj", author: "", automation: true, category: "" }
    ];

    tmr: TestCaseResult[] = [
        { result: "success", test: this.tms[0], stepsSuccess: [true, true, true] },
        { result: "success", test: this.tms[1], stepsSuccess: [true, true, true] },
        { result: "fail", test: this.tms[2], stepsSuccess: [true, true, false] }
    ];

    constructor(p: any) {
        super(p);
        this.tmr.sort((x, y) => {
            if (x.result && y.result) {
                if (x.result > y.result) return 1;
                if (x.result < y.result) return -1;
                return 0;
            }
            return (x) ? 1 : -1;
        });
    }

    render() {
        return (
            <div className="w-full items-center">
                {this.tmr.map(x => {
                    return <TestResultTab key={x.test?.id} testResult={x}></TestResultTab>
                })}
            </div>
        );
    }
}