let cur_user_names: string[]=["ali","roma","geni","kim","admin"]
let new_user_names: string[]=["Tom","dua","Kim","sam","ali"]
let available_flag : number;
for(let i=0;i<=new_user_names.length-1;i++)
    {   available_flag=0;
      for (let j=0;j<=cur_user_names.length-1;j++)
      {
      if (new_user_names[i].toLowerCase() == cur_user_names[j].toLowerCase())
        {
        available_flag = available_flag+1;  
        }
      
      }
if(available_flag == 1)
{
  console.log("user name " + new_user_names[i] + " is not available, please eneter a new user name");
}
else
{
  console.log("user name "+ new_user_names[i]+  " is available");

}
    }
       