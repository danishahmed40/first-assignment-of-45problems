import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a number: ", (answer) => {
  const num = Number(answer);
  // Use the number 'num'
  console.log(num);
  console.log("your age is", num );
  rl.close();

  
  if(num <2)
  {
    console.log("you are baby");
  }
  else
      if (num >= 2 && num < 4) 
      {
      console.log("your are a toddler" );
      }
      else
           if (num >= 4 && num < 13)
           {
           console.log("your are a kid");
           }
          else
          if (num >= 13 && num < 20) 
          {
          console.log("you are a teen ager" );
          }
          else
          if (num >= 20 && num < 65) 
            {
            console.log("you are a adult");
            }
            else
              if (num >= 65) 
              {
               console.log("your are a elder");
              }
       
});
