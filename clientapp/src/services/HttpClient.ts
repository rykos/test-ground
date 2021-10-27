import { User } from "../models/User";
import { ValidationService } from "./ValidationService";

export class HttpClient {
    user: User | null;

    constructor() {
        this.user = ValidationService.getUser();
        ValidationService.ActiveUser.subscribe(user => {
            this.user = user;
        })
    }

    fetch(url: string, request?: RequestInit): Promise<Response> {
        let request_headers = new Headers({
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        });
        if (!request)
            request = {};
        if (this.user)
            request_headers.append('Authorization', 'Bearer ' + this.user.jwt);
        request.headers = request_headers;

        console.log(request);

        return fetch(url, request);
    }

    private local() {
        let x = window.location.href;
        console.log(x);
    }
}