export class User {
    private _id : number;
    private _lastname : string;
    private _firstname : string;
    
    
    constructor(id : number, lastname: string, firstname: string) {
        this._id = id;
        this._firstname = firstname;
        this._lastname = lastname;
    }

    get id (): number{
        return this._id;
    }

    set id (id:number){
        this._id = id;    
    }

    get lastname (): string{
        return this._lastname;
    }

    set lastname (lastname:string){
        this._lastname = lastname;    
    }

    get firstname (): string{
        return this._firstname;
    }

    set name (firstname:string){
        this._firstname = firstname;    
    }

}