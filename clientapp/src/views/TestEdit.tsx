import { Component } from "react";
import { TestCase } from "../models/TestCase";

interface TestEditState {
    testCase: TestCase;
}

export class TestEdit extends Component<{}, TestEditState> {
    id: number;

    constructor(p: any) {
        super(p);
        this.id = p.match.params.id;
        this.state = {
            testCase: {
                id: 0, name: "Test logowania", requirements: [], expectedResult: "Uzytkownik zostanie poprawnie zalogowany", steps: [
                    "Step 1", "Step 2", "Step 3"
                ], description: "Test logowania poprzez przycisk loguj", author: "Michał Rykowski", automation: true, category: ""
            }
        }
    }

    render() {
        return (
            <div className="m-10">
                <div className="text-2xl border border-green-400 text-green-500 rounded inline-block p-2">{this.state.testCase.name}</div>
                <div className="text-xl">{this.state.testCase.description}</div>
                <hr />
                <div className="text-xl">Creator: {this.state.testCase.author}</div>
                <div className="text-xl">Automated: {this.state.testCase.automation ? "yes" : "no"}</div>
                <div className="flex justify-end space-x-1">
                    <div className="button-success inline-block">Edit</div>
                    <div className="button-red inline-block">Delete</div>
                </div>
            </div>
        );
    }
}