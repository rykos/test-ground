import { Component, Fragment } from "react";

interface TestStepProps {
    
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
        return (
            <div>

            </div>
        )
    }
}
