let car_maker: string = "suzuki";
let car_reg_number: string = "cs-2025";
let car_type: string = "BOLAN";
let registered: boolean = true ;
let milage: number = 150000;
let car_model: number =2006;
let car_engine:string ="eng-343434343 "
let car_chasis :string ="abn 12345"
let sitting_cap : number = 8;
let fuel : string =" petrol";

// equal and not equal for string
console.log("Is car suzuki?");
console.log(car_maker == "suzuki");
console.log("Is car mehran?");
console.log(car_maker == "mehran");

//lower case tests (casesensisitivity)
if (car_type.toLowerCase() === "bolan" ) {
  console.log("Strings are equal when ignoring case.");
} else {
  console.log("Strings are not equal when ignoring case.");
}

//test for relational operators equal and not equal, less or graeter then test and logical test (and /or)
console.log("Is car milage more than 100000 km and less than 200000?");
console.log(milage >= 100000 && milage <=200000); 

console.log("Is car milage more than 100000 km or more than 200000?");
console.log(milage >= 100000 || milage >=200000); 


console.log("searching the car makers in an array of companies ")
const cars_makers : string[]= ["suzuki", "toyota", "changan" ] ;

console.log("Does suzuki are in the available list of makers")
console.log(cars_makers.includes("suzuki"));
console.log("Does suzuki are in the available list of makers")
console.log(cars_makers.includes("havels"));
