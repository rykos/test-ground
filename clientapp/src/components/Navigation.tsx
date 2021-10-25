import { Component } from "react";
import { Redirect } from "react-router";
import { ValidationService } from "../services/ValidationService";

export class Navigation extends Component {
    vs: ValidationService;
    constructor(p: any) {
        super(p);
        this.vs = new ValidationService();
    }

    render() {
        let btn;
        let content;
        if (this.vs.isLoggedIn())
        {
            content = <div className="h-full">Logged in as: Admin</div>;
            btn = <a href="/logout"><div className="h-full">Logout</div></a>
        }
        else
        {
            content = <div className="cursor-pointer hover:text-yellow-400">Not logged in</div>
            btn = <a href="/login"><div className="h-full">Login</div></a>
        }

        return (
            <div className="flex justify-between w-full bg-blue-400 text-gray-100 text-xl px-5" style={{ height: "30px" }}>
                {content}
                {btn}
            </div>
        );
    }
}