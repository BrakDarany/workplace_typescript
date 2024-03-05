class Person{
    protected NID: number;
    protected name: string;
    protected dob: string;

    constructor(NID: number, name: string, dob: any){
        this.NID = NID;
        this.name = name;
        this.dob = dob;
    } 
    display(): void{
        console.log(`NID: ${this.NID}, Name: ${this.name}, DOB: ${this.dob}`);
    }
}

class Staff extends Person{
    private position: string;
    private salary: number;

    constructor(NID:number,name:string, dob:string ,position: string, salary: number){
        super(NID, name, dob);
        this.position = position;
        this.salary = salary;
    }

    display(): void{
        console.log(`NID: ${this.NID}, Name: ${this.name}, DOB: ${this.dob}, Position: ${this.position}, Salary: ${this.salary}`);
    }
}

let objStaff = new Staff(101, "Bro Beoun", "12/12/2000", "QA", 250);
objStaff.display();

