export class User {
    username: string | undefined;
    jwt: string | undefined;

    constructor(username: string) {
        this.username = username;
    }
}