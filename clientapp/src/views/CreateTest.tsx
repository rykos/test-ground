import { Component } from "react";

interface createTestState {
    steps: string[];
}

export class CreateTest extends Component<{}, createTestState> {
    constructor(p: any) {
        super(p);
        this.state = {
            steps: [""]
        };
    }

    render() {
        return (
            <div>
                <div className="text-3xl">Create new test</div>
                <div className="container flex flex-col space-y-2 m-auto w-2/6">
                    <div className="grid grid-cols-3">
                        <div className="text-xl">Name</div>
                        <textarea className="col-span-2 border border-black"></textarea>
                    </div>
                    <div className="grid grid-cols-3">
                        <div className="text-xl">Description</div>
                        <textarea className="col-span-2 border border-black"></textarea>
                    </div>
                    <div className="grid grid-cols-3">
                        <div className="text-xl">Requirements</div>
                        <textarea className="col-span-2 border border-black"></textarea>
                    </div>
                    <div className="grid grid-cols-3">
                        <div className="text-xl">Steps</div>
                        {this.state.steps.map(x => {
                            return <textarea className="col-start-2 col-end-4 mb-1 border border-black"></textarea>
                        })}
                        <input type="button" value="+" className="p-1 rounded cursor-pointer bg-blue-500 text-white col-start-2 col-end-4 w-8 h-8 mt-1 m-auto" onClick={() => {
                            this.setState({ steps: [...this.state.steps, ""] });
                        }} />
                    </div>
                    {/* <div className="flex justify-center">
                        
                    </div> */}
                    <div className="grid grid-cols-3">
                        <div className="text-xl">Automatic</div>
                        <input type="checkbox" className="h-full"></input>
                    </div>
                    <div className="grid grid-cols-3">
                        <div className="text-xl">Expected result</div>
                        <textarea className="col-span-2 border border-black"></textarea>
                    </div>
                    <div className="flex justify-center">
                        <input type="button" value="Create" className="p-1 rounded cursor-pointer bg-blue-500 text-white w-5/6" />
                    </div>
                </div>
            </div>
        );
    }
}