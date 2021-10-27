import { Component } from "react";
import { Redirect } from "react-router";
import { ValidationService } from "../services/ValidationService";
import './LoginPage.css'

export class LoginPage extends Component<{}, { redirect: boolean, loading: boolean }> {
    constructor(p: any) {
        super(p);
        this.state = {
            redirect: false,
            loading: false
        }
    }

    render() {
        if (this.state.redirect)
            // Add redirection to previously set location
            return <Redirect to="/"></Redirect>
        return (
            <div className="flex mt-72 justify-center items-center">
                <div className="flex flex-col w-2/6">
                    <input type="text" className="border" id="login" />
                    <input type="password" className="border" id="password" />
                    <input type="submit" value="Login" className="p-1 bg-gray-900 text-white cursor-pointer" onClick={() => {
                        this.setState({ loading: true });
                        new ValidationService().login("rykos", "123").then(_ => {
                            this.setState({ redirect: true });
                        }).catch(e => {
                            this.setState({ loading: false });
                        });
                    }} />
                    <div className={`flex justify-center ${this.state.loading ? "visible" : "hidden"}`}><div className={`lds-ring`}><div></div><div></div><div></div><div></div></div></div>
                </div>
            </div>
        );
    }
}