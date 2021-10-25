export class ValidationService {
    private readonly USERKEY = "user";

    isLoggedIn(): boolean {
        if (this.getKey())
            return true;
        else return false;
    }

    async login(): Promise<void> {
        await fetch("https://www.google.pl", { mode: "no-cors" }).then(x => {
            localStorage.setItem(this.USERKEY, "qwe");
        });
    }

    logout() {
        localStorage.removeItem(this.USERKEY);
    }

    getKey(): string | null {
        return localStorage.getItem(this.USERKEY);
    }
}