import { Component } from "react";

interface TestStepProps {
    name: string;
    result: boolean | undefined;
}
//flex justify-between

export class TestStep extends Component<TestStepProps> {
    constructor(p: any) {
        super(p);
        this.state = {
            expanded: false
        };
    }

    render() {
        if (this.props.result !== undefined)
            return (
                <div className={`${this.props.result ? "text-green-500" : "text-red-400"}`}>{this.props.name} {`${this.props.result ? "Ok" : "Fail"}`}</div>
            )
        else{
            return(
                <div className="text-gray-500">{this.props.name} -</div>
            )
        }
    }
}
