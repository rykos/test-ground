import { ChangeEvent, Component } from "react";
import { TestSuite } from "../models/TestSuite";

interface ScenarioEditState {
    testSuite: TestSuite;
}

export class ScenarioEdit extends Component<{}, ScenarioEditState> {
    id: number;
    constructor(p: any) {
        super(p);
        this.id = p.match.params.id;
        this.state = {
            testSuite: { id: this.id.toString(), name: "Scenariusz logowania", tests: 41 }
        };
    }

    inputChange(x: ChangeEvent<HTMLInputElement>) {
        let ts = this.state.testSuite;
        ts.name = x.target.value;
        this.setState({
            testSuite: ts
        })
    }

    deleteClick() {
        let input = prompt(`You are about to delete ${this.state.testSuite.tests} tests\nType "${this.state.testSuite.name}" in order to confirm removal`)
        if (input === this.state.testSuite.name) {

        }
        else {

        }
    }

    render() {
        return (
            <div className="m-5">
                <input type="text" className="text-2xl border" value={this.state.testSuite.name} onChange={this.inputChange.bind(this)} />
                <div className="text-xl">Tests: 41</div>
                <div className="button-success inline-block mr-1">Save</div>
                <div className="button-red inline-block" onClick={this.deleteClick.bind(this)}>Delete</div>
            </div>
        )
    }
}