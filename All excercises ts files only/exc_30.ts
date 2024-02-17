let user_names: string[]=["ali","roma","geni","kim","admin"]
for (let i=0;i<=user_names.length-1;i++)
{
  if(user_names[i]=="admin")
  {
console.log("Hello admin, would you like to see a status report?\n")

  }
  else{console.log("Hello " +user_names[i]+ " thank you for logging in again\n");}
}