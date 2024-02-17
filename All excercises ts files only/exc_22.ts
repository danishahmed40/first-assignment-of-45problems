let fruits: string[] = ['apple', 'banana', 'orange'];

let outOfBoundsElement: string = fruits[10];  // Error: Index out of range
console.log(outOfBoundsElement); // Showing Error Undefine
let valid_elements: string  = fruits[1];  // Accesses 'banana' successfully

console.log(valid_elements); // Output: banana