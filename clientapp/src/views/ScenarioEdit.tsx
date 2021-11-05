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

    }

    render() {
        return (
            <div className="m-5">
                {/* <div className="text-2xl underline">{this.state.testSuite.name}</div> */}
                <input type="text" className="text-2xl border" value={this.state.testSuite.name} onChange={this.inputChange.bind(this)} />
                <div className="text-xl">Tests: 41</div>
                <div className="button-red inline-block">Delete</div>
            </div>
        )
    }
}