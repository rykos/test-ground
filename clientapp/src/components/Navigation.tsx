import { Component } from "react";
import { Link } from "react-router-dom";
import { User } from "../models/User";
import { ValidationService } from "../services/ValidationService";

export class Navigation extends Component<{}, { user: User | null }> {
    constructor(p: any) {
        super(p);
        this.state = {
            user: ValidationService.ActiveUser.value
        };
    }

    componentDidMount() {
        ValidationService.ActiveUser.subscribe(x => { this.setState({ user: x }); });
    }

    render() {
        let btn;
        let content;
        if (this.state.user) {
            content = <Link to="/profile"><div className="h-full">Logged in as: {this.state.user.username}</div></Link>
            btn = <Link to="/logout"><div className="h-full">Logout</div></Link>
        }
        else {
            content = <div className="cursor-pointer hover:text-yellow-400">Not logged in</div>
            btn = <Link to="/login"><div className="h-full">Login</div></Link>
        }

        return (
            <div className="flex justify-between w-full bg-blue-400 text-gray-100 text-xl px-5 overflow-clip" style={{ height: "30px" }}>
                <div className="flex space-x-4">
                    {content}
                    <Link to="/tests"><div className="">Tests</div></Link>
                    <Link to="/create-test"><div className="">New test</div></Link>
                    <Link to="/results"><div className="">Results</div></Link>
                </div>
                {btn}
            </div>
        );
    }
}