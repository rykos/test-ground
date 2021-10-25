import { Component } from "react";
import { Navigation } from "../components/Navigation";
import { TestTab } from "../components/test-tab";
import { TestCase } from "../models/TestCase";
import { TestCaseResult } from "../models/TestResult";

export class Main extends Component {
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
            <div>
                <Navigation></Navigation>
                <fieldset className="flex flex-col items-center border border-gray-400 m-auto px-10 py-4 rounded-xl bg-blue-100" style={{ width: "50%" }}>
                    {/* <div className="text-2xl">Scenario</div> */}
                    <legend className="text-2xl">Login scenario</legend>
                    <div className="w-full flex-col flex items-center">
                        {this.tmr.map(x => {
                            return <TestTab key={x.test?.id} testResult={x}></TestTab>
                        })}
                    </div>
                </fieldset>
            </div>
        );
    }
}