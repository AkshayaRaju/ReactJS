export class Hero{
    constructor(fn,ln){
        this.fname=fn;
        this.lname=ln;
    }
    fullname(){
        return this.fname+" "+this.lname;
    }
}