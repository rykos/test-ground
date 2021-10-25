import { Component } from "react";
import { Redirect } from "react-router";
import { ValidationService } from "../services/ValidationService";

export class LoginPage extends Component<{}, { redirect: boolean }> {
    constructor(p: any) {
        super(p);
        this.state = {
            redirect: false
        }
    }

    render() {
        if (this.state.redirect)
            return <Redirect to="/"></Redirect>
        return (
            <div>
                <input type="text" className="border" />
                <input type="password" className="border" />
                <input type="submit" value="Login" className="p-1 bg-gray-900 text-white cursor-pointer" onClick={() => {
                    new ValidationService().login().then(_ => {
                        this.setState({ redirect: true });
                    });
                }} />
            </div>
        );
    }
}