import { Component } from "react";
import { TestDesc } from "../components/TestDesc";
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
            <div className="w-full items-center">
                <div className="bg-blue-300">
                    <div className="grid grid-cols-10 px-2">
                        <div className="col-span-2">
                            <div className="text-xl">Name</div>
                        </div>
                        <div className="col-span-2">
                            <div className="text-xl">Description</div>
                        </div>
                        <div className="col-span-1">
                            <div className="text-xl">Auto</div>
                        </div>
                        <div className="col-span-2">
                            <div className="text-xl">Type</div>
                        </div>
                        <div className="col-span-2">
                            <div className="text-xl">Creator</div>
                        </div>
                    </div>
                </div>
                <TestDesc index={0} test={this.tms[0]}></TestDesc>
                <TestDesc index={1} test={this.tms[1]}></TestDesc>
                <TestDesc index={2} test={this.tms[2]}></TestDesc>
            </div>
        );
    }
}