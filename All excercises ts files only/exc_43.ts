/*Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.*/

const magicians_names: string[]=["chris angle","david blaine","daren brown"]   
const updated_magicians_names : string[]=[];
  
function make_great(magician_names: string[]): string[]
  {
    for (let i = 0; i < magicians_names.length; i++) 
    {
      updated_magicians_names[i] = magicians_names[i]+ " the Great";
    }
  return updated_magicians_names;
  }

function show_magicians(magician_names: string[]): void 
  {
     console.log(magician_names);
}

show_magicians(magicians_names);
console.log("Names after updates")
make_great(magicians_names);
show_magicians(updated_magicians_names);
