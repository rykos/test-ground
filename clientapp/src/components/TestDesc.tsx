import { Component } from "react";
import { Link } from "react-router-dom";
import { TestCase } from "../models/TestCase";

interface TestDescProps {
    index: number;
    test: TestCase;
}

export class TestDesc extends Component<TestDescProps> {
    render() {
        return (
            <Link to={`/tests/${this.props.test.id}`}>
                <div className={`${this.props.index % 2 === 0 ? "bg-gray-200" : "bg-gray-100"} px-2 py-1 cursor-pointer border-b border-white`}>
                    <div className="grid grid-cols-10 ">
                        <div className="col-span-2">
                            <div className="text-lg">{this.props.test.name}</div>
                        </div>
                        <div className="col-span-2">
                            <div className="">{this.props.test.description}</div>
                        </div>
                        <div className="col-span-1">
                            <input type="checkbox" checked={this.props.test.automation} readOnly />
                        </div>
                        <div className="col-span-2">
                            <div className="">{this.props.test.category || "none"}</div>
                        </div>
                        <div className="col-span-2">
                            <div className="">{this.props.test.author || "?"}</div>
                        </div>
                    </div>
                </div>
            </Link>
        );
    }
}