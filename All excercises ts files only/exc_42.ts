/*Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.*/

const magicians_names: string[]=["chris angle","david blaine","daren brown"]   

  function make_great(magician_names: string[]): void 
  {
    for (let i = 0; i < magicians_names.length; i++) 
    {
      magicians_names[i] = magicians_names[i]+ " the Great";
    }
  }

function show_magicians(magician_names: string[]): void 
  {
     console.log(magician_names);
}

show_magicians(magicians_names);
console.log("Names after updates")
make_great(magicians_names);
show_magicians(magicians_names);
