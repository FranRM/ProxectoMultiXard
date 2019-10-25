export class Usuario {
    user: string;
    name: string;
    surname: string;
    rol: string;
    mail: string;
    constructor(mail, username, name, surname, rol) {
        this.user = username;
        this.name = name;
        this.surname = surname;
        this.rol = rol;
        this.mail = mail;
    }
    getUser(): string {
        return this.user;
    }
    getRol(): string {
        return this.rol;
    }
}
