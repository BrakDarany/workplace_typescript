// Basic datatype of Typescript
// Explicit
// let theString: string = "Hola";
// let theNumber: number= 2.222;
// let theBool: boolean = true;
// let theAny: any =["Hola", "nhom", "Sis", "Cute"];

// Implicit
// let implicit = 'hi';

// console.log(`String: ${theString}`);
// console.log(`Numer: ${theNumber}`);
// console.log(`Boolean: ${theBool}`);
// console.log(`Any: ${implicit}`);

// How to declare array in ts and using length()
// let strArray: Array<String> = ["Hola", "nhom", "Sis", "Cute"];
// console.log(`Array length: ${strArray.length}`);


// Concat()
// let array1: Array<string> = ["Hola", "nhom", "Sis", "Cute"]; 
// let array2: Array<string> = ["Nhom", "QA", "At", "Techbodia"]; 
// let array3: Array<string> = ["Darany", "Jol", "Jit", "Rean"];
// let num1: Array<number> = [11, 12, 13]; 
// console.log(array1.concat(array2,array3));


//indexOf()
// let names: Array<string> = ["Hola", "nhom", "Sis", "Cute"];
// let numbers: Array<number> = [12, 34, 34, 0.9];  
// console.log(names.indexOf("nhom", 1)) 
// console.log(names.indexOf("Kmeng toch"))
// console.log(numbers.indexOf(34 ))
// console.log(numbers.indexOf(0.9)) 


// lastIndexOf()
// const array1: Array<Number> =[10, 20, 50, 50, 60]; 
// console.log(array1.lastIndexOf(50, 5));
// Expected output: 4 
// console.log(array1.lastIndexOf(50,1));
// Expected output: 3


//slice()
// var arr:Array<String> = ["Hello", "Sous sdei", "Welcome", "Bye Bye"]; 
// console.log(arr.slice(1));  
// console.log(arr.slice(1, 3) );


//split()
// var myString:String = "apple-banana-orange";
// var arrSplit: Array<String>= myString.split('-', 2);
// console.log(arrSplit);

//forEach()
// var arr:Array<String> = ["Hello", "Welcome", "Bye Bye"]; 
// arr.forEach((element, index) => { 
//     console.log(`${element} at index[${index}]`); 
// });

// map()
// Use Map type and new keyword to create a map in TypeScript
 
// let nameMap = new Map<string, number>(
//     [
//         ["Mon", 37],
//         ["Tues", 55], 
//         ["Wed", 21]
//     ]
// ); 
 
// var setValue = new Map<string, number>();
// setValue =  nameMap.set("Hello", 21);
// console.log(setValue);
// console.log(setValue.values());
// console.log(setValue.keys());
  
// var getValue:any = nameMap.get("Hello"); 
// console.log(getValue); 

// var isHas:boolean = nameMap.has("Darany");
// console.log(isHas); 

// console.log(nameMap.size);

// var isDeleted:boolean = nameMap.delete("nhom");
// console.log(isDeleted);

// console.log(nameMap.clear);