//program to write a person's name in different formats.
let personName: string = "kamran khan tessori";
//printing the name in lower case
console.log("Lowercase:", personName.toLowerCase());

//printing the name in upper case
console.log("Uppercase:", personName.toUpperCase());

//printing the name in title case
console.log("Titlecase:", toTitleCase(personName));
//describing function to make the name in title format. user define function
function toTitleCase(str: string): string {
    return str.toLowerCase().replace(/(^|\s)\S/g, function (char) {
        return char.toUpperCase();
    });
}
//program number 2 : to show different arithmatical operations 

//addition opertion
let addition = 5 + 3;
console.log("Addition: " + addition);
//subtraction opertion
let subtraction = 10 - 2;
console.log("Subtraction: " + subtraction);
//multiplication operation
let multiplication = 4 * 2;
console.log("Multiplication: " + multiplication);
//division operation
let division = 16 / 2;
console.log("division:" + division);
