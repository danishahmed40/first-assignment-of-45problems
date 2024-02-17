// Assign a random color to the alien color
let alien_color: string = ["green", "yellow", "red"][Math.floor(Math.random() * 3)];

console.log("The alien's color is:", alien_color);
if(alien_color=="green")
{
console.log(" waooo you just earned 5 points for shooting")
}
else {
  console.log("you have won 10 points");
}

//if_block runner
alien_color="green"
if (alien_color === "green") 
{
  console.log("the if block is runing");
}
 else
 {
console.log("the else block is running")

 }
 //else_block runner
 alien_color="yellow"
 if (alien_color === "green") 
 {
   console.log("the if block is runing");
 }
  else
  {
 console.log("the else block is running")
 
  }

