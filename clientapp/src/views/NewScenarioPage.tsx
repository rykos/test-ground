import { randomInt } from "crypto";
import { Component } from "react";
import { Link } from "react-router-dom";

export class NewScenarioPage extends Component {
    render() {
        return (
            <div>
                <div className="text-3xl text-center mb-5">Create new test scenario</div>
                <form className="flex justify-center">
                    <div className="w-2/6 flex flex-col space-y-2">
                        <div className="container flex space-x-2 m-auto w-full">
                            <div className="text-xl">Name</div>
                            <input type="text" className="border w-full" />
                        </div>
                        <input type="button" value="Create" className="p-1 rounded bg-green-400 hover:bg-green-300 cursor-pointer" />
                    </div>
                </form>
                <div className="flex gap-1 mt-1 flex-wrap">
                    {Array.from({ length: 20 }, (x, i) => i).map(x => {
                        return <div key={x} className="border w-full rounded p-1 bg-gray-100 flex justify-between">
                            <div>Scenario {x}</div>
                            <div>Tests: {Math.floor(Math.random() * 100)}</div>
                            <Link to={`/scenario/${x}`}><div className="button-success">Edit</div></Link>
                        </div>
                    })}
                </div>
            </div>
        );
    }
}