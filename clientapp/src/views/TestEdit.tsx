import { Component } from "react";

export class TestEdit extends Component {
    id: number;

    constructor(p: any) {
        super(p);
        this.id = p.match.params.id;
    }

    render() {
        return (
            <div>edycja {this.id}</div>
        );
    }
}