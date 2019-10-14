export class Usuario {
    user: string;
    pass: string;
    constructor(user, pass) {
        this.user = user;
        this.pass = pass;
    }
    getUser(): string {
        return this.user;
    }
}
