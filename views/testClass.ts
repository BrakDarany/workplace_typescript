//  This class include: properties, method, constructor
class TestCase{ 
    
    private id: number;
    private title: string;
    private des?: string;
 
    constructor(myId: number, myTitle: string, myDes?: string){
        this.id = myId;
        this.title = myTitle;
        this.des = myDes;
    } 

    getTitle(): string{
        return this.title;
    }
    
    getID(): number{
        return this.id;
    }

    getDes(): string{
        return this.des!;
    }
    justDisplay(): void{
        console.log(`ID: ${this.id}, Title: ${this.title}`, this.des! ==null ? `Des: N/A` : `Des: ${this.des}`);
    }
    
    //  justDisplay(){
    //     console.log(`ID: ${this.id}, Title: ${this.title}, Des: ${this.des} `);
    // }
}

let  obj = new TestCase(12, "Nhom Team QA"); // wheb create the obj of -> ts need to fill the value of parameter
console.log(obj.getID());
console.log(obj.getTitle());
obj.justDisplay()

