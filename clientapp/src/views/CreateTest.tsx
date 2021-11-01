import { ChangeEvent, Component } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";

interface createTestState {
    name: string;
    description: string;
    requirements: string;
    steps: string[];
    automatic: boolean;
    result: string;
}

export class CreateTest extends Component<{}, createTestState> {
    constructor(p: any) {
        super(p);
        this.state = {
            name: "",
            description: "",
            requirements: "",
            steps: [""],
            automatic: false,
            result: ""
        };
    }

    nameChange(e: ChangeEvent<HTMLTextAreaElement>) {
        this.setState({ name: e.target.value });
    }

    descriptionChange(e: ChangeEvent<HTMLTextAreaElement>) {
        this.setState({ description: e.target.value });
    }

    requirementsChange(e: ChangeEvent<HTMLTextAreaElement>) {
        this.setState({ requirements: e.target.value });
    }

    resultChange(e: ChangeEvent<HTMLTextAreaElement>) {
        this.setState({ result: e.target.value });
    }

    stepsChange(e: ChangeEvent<HTMLTextAreaElement>, i: number) {
        let s = [...this.state.steps];
        s[i] = e.target.value;
        this.setState({ steps: s });
    }

    automaticChange(e: ChangeEvent<HTMLInputElement>) {
        this.setState({ automatic: e.target.checked });
    }
    sv = null;

    render() {
        let z = [1, 2, 3, 4, 5];
        let opt: any[] = [];
        z.map(x => opt.push({ value: x, label: x }));

        return (
            <div>
                <div className="text-3xl text-center mb-5">Create new test</div>
                <form action="" id="form">
                    <div className="container flex flex-col space-y-2 m-auto w-2/6">
                        <div className="grid grid-cols-3">
                            <div className="text-xl">Scenario</div>
                            <Select className="col-span-2" options={opt} inputValue={''} name={""} onChange={(x) => { console.log(x); this.sv = x; this.forceUpdate(); }} value={this.sv} onInputChange={(x) => { console.log(x) }} onMenuOpen={() => { }} onMenuClose={() => { }} />
                        </div>
                        <div className="flex justify-center">
                            <Link to="/"><div className="text-gray-400 underline">Create new scenario</div></Link>
                        </div>
                        <div className="grid grid-cols-3">
                            <div className="text-xl">Name</div>
                            <textarea className="col-span-2 border border-black" value={this.state.name} onChange={this.nameChange.bind(this)}></textarea>
                        </div>
                        <div className="grid grid-cols-3">
                            <div className="text-xl">Description</div>
                            <textarea className="col-span-2 border border-black" value={this.state.description} onChange={this.descriptionChange.bind(this)}></textarea>
                        </div>
                        <div className="grid grid-cols-3">
                            <div className="text-xl">Requirements</div>
                            <textarea className="col-span-2 border border-black" value={this.state.requirements} onChange={this.requirementsChange.bind(this)}></textarea>
                        </div>
                        <div className="grid grid-cols-3">
                            <div className="text-xl">Steps</div>
                            {this.state.steps.map((x, i) => {
                                return <textarea key={i} className="col-start-2 col-end-4 mb-1 border border-black" value={this.state.steps[i]} onChange={(e) => { this.stepsChange(e, i) }}></textarea>
                            })}
                            <div className="col-start-2 col-end-4 flex justify-center space-x-2">
                                <input type="button" value="+" className="p-1 rounded cursor-pointer bg-blue-500 text-white w-8 h-8" onClick={() => {
                                    this.setState({ steps: [...this.state.steps, ""] });
                                }} />
                                <input type="button" value="-" className="p-1 rounded cursor-pointer bg-red-500 text-white w-8 h-8" onClick={() => {
                                    this.setState({ steps: [...this.state.steps.slice(0, -1)] });
                                }} />
                            </div>
                        </div>
                        <div className="grid grid-cols-3">
                            <div className="text-xl">Automatic</div>
                            <input type="checkbox" className="h-full" checked={this.state.automatic} onChange={this.automaticChange.bind(this)}></input>
                        </div>
                        <div className="grid grid-cols-3">
                            <div className="text-xl">Expected result</div>
                            <textarea className="col-span-2 border border-black" value={this.state.result} onChange={this.resultChange.bind(this)}></textarea>
                        </div>
                        <div className="flex justify-center">
                            <input type="button" value="Create" className="p-1 rounded cursor-pointer bg-blue-500 text-white w-5/6" onClick={() => {
                                console.log(this.state);
                            }} />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}