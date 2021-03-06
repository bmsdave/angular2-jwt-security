import { IEMail, category } from '../interfaces/interfaces';

export class EMail implements IEMail {

    public id:number = null;
    public cat:category = null;
    public body:string = null;

    constructor(email:IEMail) {
        this.id = email.id;
        this.cat = email.cat;
        this.body = email.body;
    };

}
