let age:number = 25;
console.log("Age is", age);
let fullName:string = "Ashwin" + "" + "Balamurugan";
console.log("fullName:", fullName)
//let name:string = 42;
let isAvailable:boolean= (5>3)||false;
console.log(isAvailable)
//let isActive:boolean = 1;
let message:string = "Hello World";
console.log("message length", message.length)
let count:number = 10;
let name1:string = "Sindhu";
let booleg:boolean = false;
let scores:number[]=[98,100,99];
console.log(scores);
let secondScore=scores[2];
console.log("Array access of 2nd element", secondScore)
let flags:boolean[]=[true,false]
console.log("Boolean array",flags)
let names2:string[]=["Ashwin","Bala"]
console.log("String array:",names2)
let names3:[string,string]=["Sindhu","Bala"]
let numb:[number,number]=[5,7]
let eg1:[string,number]=["Ashwin",100]
console.log("")
enum ProductNames {
  Laptop = "Laptop",
  Phone = "Phone",
  Tablet = "Tablet"
}
console.log("Product Name:", ProductNames.Laptop);
enum ProductIds {
  Laptop = 101,
  Phone = 102,
  Tablet = 103
}
console.log("Product ID:", ProductIds.Phone);
enum FavoriteProduct {
  Name = ProductNames.Tablet,
  ID = ProductIds.Tablet
}
console.log("Favorite Product:", FavoriteProduct.Name, "-", FavoriteProduct.ID);
function multiply(a: number, b:number):number{
    return a * b;
}
//console.log("Multiplication:", multiply("5", 10)); 
function returnString(): string {
  return "Hello";
}
//let result: number = returnString(); // ❌ Type Error
const addNumberAndBoolean = (num:number, flag:boolean):number =>{
    return num + Number(flag);
}
console.log(addNumberAndBoolean(5,true))
function pluralize(word: string): string {
  return word + "s";
}
console.log(pluralize("car"));
function adjustNumber(num: number, increase: boolean): number {
  return increase ? num + 1 : num - 1;
}
console.log(adjustNumber(10, true));  // Output: 11
console.log(adjustNumber(10, false)); 
function processNumbers(arr: number[]):number[]{
    return arr;
}
//console.log(processNumbers([1,2,true]))
function extractNames(data: [string, number][]): string[] {
  return data.map(item => item[0]);
}
console.log(extractNames([["Ashwin", 25], ["Bala", 30]]));
type BooleanPair = [boolean, boolean];
let flags1: BooleanPair = [true, false];
console.log("Boolean Pair:", flags1); 