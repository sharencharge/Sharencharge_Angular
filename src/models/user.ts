export class User {
    private _firstname: string ='';
    private _lastname : string = '';
    private _email : string = '';
    private _password : string = '';
    private _phoneNumber : string = '';
    private _birthAt : Date = new Date();

    constructor(){

    }

    public get firstname(): string {
        return this._firstname;
    }
    public set firstname(value: string) {
        this._firstname = value;
    }

    public get lastname(): string {
        return this._lastname;
    }
    public set lastname(value: string) {
        this._lastname = value;
    }

    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }
    public get birthAt(): Date {
        return this._birthAt;
    }
    public set birthAt(value: Date) {
        this._birthAt = value;
    }
    public get phoneNumber(): string {
        return this._phoneNumber;
    }
    public set phoneNumber(value: string) {
        this._phoneNumber = value;
    }

    public get password(): string {
        return this._password;
    }
    public set password(value: string) {
        this._password = value;
    }
}