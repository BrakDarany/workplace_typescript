interface TPerson{
    p_name: string;
    p_age: number;  
    display_person_info(): void;
}

interface Company{
    c_name: string;
    c_brand: string;
    display_company_info(): void;
}

class Employee implements TPerson, Company{
    p_name: string;
    p_age: number;
    c_name: string;
    c_brand: string;

    constructor(p_name: string, p_age: number, c_name: string, c_brand: string){
        this.p_name = p_name;
        this.p_age = p_age;
        this.c_name = c_name;
        this.c_brand = c_brand;
    }
 
    display_person_info(): void{
        console.log(`Name: ${this.p_name}, Age: ${this.p_age}`);
    }

    display_company_info(): void{
        console.log(`Company: ${this.c_name}, Brand name: ${this.c_brand},`);
    }

    display(): void{
        this.display_person_info();
        this.display_company_info();
        // console.log(`Name: ${this.p_name}, Age: ${this.p_age} ,Company: ${this.c_name}, Brand name: ${this.c_brand},`)
    }
}

let com:Company = new Employee('NY',12, 'VN','Youn');
com.display_company_info();

let per:TPerson = new Employee('NY',12, 'VN','Youn');
per.display_person_info();

let emp:Employee = new Employee('NY',12, 'VN','Youn');
emp.display_person_info();
emp.display_company_info();
emp.display();