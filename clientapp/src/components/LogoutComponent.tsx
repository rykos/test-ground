import { Component } from "react";
import { Redirect } from "react-router";
import { ValidationService } from "../services/ValidationService";

export class LogoutComponent extends Component {
    constructor(p: any) {
        super(p);
        new ValidationService().logout();
    }

    render() {
        return (
            <Redirect to="/"></Redirect>
        );
    }
}