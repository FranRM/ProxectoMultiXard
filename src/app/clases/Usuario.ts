export class Usuario {
    user: string;
    pass: string;
    name: string;
    surname: string;
    constructor(user, pass, name, surname) {
    }
    getUser(): string {
        return this.user;
    }
}
