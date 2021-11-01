import { Component } from "react";
import { TestResultTab } from "../components/TestResultTab";
import { TestCase } from "../models/TestCase";
import { TestCaseResult } from "../models/TestResult";

export class TestsPage extends Component {
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
            <div className="h-full flex justify-start">
                <div className="h-full w-48 bg-blue-100 border-r border-gray-400 text-center">
                    <div className="border-b border-gray-400 p-1 cursor-pointer hover:bg-yellow-100">Item 1</div>
                    <div className="border-b border-gray-400 p-1 cursor-pointer hover:bg-yellow-100">Item 2</div>
                </div>
                <div className="w-full">
                    <div className="w-full items-center">
                        {/* {this.tmr.map(x => {
                            return <TestResultTab key={x.test?.id} testResult={x}></TestResultTab>
                        })} */}
                        
                    </div>
                </div>
            </div>
        );
    }
}