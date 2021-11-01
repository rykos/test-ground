import { HttpClient } from './HttpClient';
import { User } from './../models/User';
import { BehaviorSubject } from 'rxjs'

export class ValidationService {
    private static readonly USERKEY = "user";
    private httpClient: HttpClient = new HttpClient();
    static ActiveUser: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(this.getUser());

    static isLoggedIn(): boolean {
        if (this.ActiveUser.value)
            return true;
        else return false;
    }

    async login(username: string, password: string): Promise<void> {
        await this.httpClient.fetch("http://localhost:3000", { mode: "no-cors" }).then(x => {
            let user = new User(username);
            localStorage.setItem(ValidationService.USERKEY, JSON.stringify(user));
            ValidationService.ActiveUser.next(user);
        });
    }

    logout() {
        localStorage.removeItem(ValidationService.USERKEY);
        ValidationService.ActiveUser.next(null);
    }

    static getKey(): string | null {
        return localStorage.getItem(ValidationService.USERKEY);
    }

    static getUser(): User | null {
        let key = this.getKey();
        if (key)
            return JSON.parse(key) as User;
        else
            return null;
    }
}