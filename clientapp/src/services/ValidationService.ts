import { User } from './../models/User';
import { BehaviorSubject, observable, Observable, Observer, Subject } from 'rxjs'

export class ValidationService {
    private static readonly USERKEY = "user";
    static ActiveUser: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
    static isLoggedIn(): boolean {
        if (this.getKey())
            return true;
        else return false;
    }

    async login(username: string, password: string): Promise<void> {
        await fetch("http://localhost:3000", { mode: "no-cors" }).then(x => {
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