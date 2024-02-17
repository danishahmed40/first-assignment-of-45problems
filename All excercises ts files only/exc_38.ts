/*Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
*/

function describe_city(city: string,country:string): void 
{
    if(city=="karachi" || city=="lahor" || city =="islamabad")
    {
       let country: string ="pakistan"
    console.log(`${city} is in ${country}`);
    }
else
{
    let country: string ="pakistan"

    console.log(`${city} is not in ${country}`);
}
}
 describe_city("karachi", "wrong message");
 describe_city("lahor", "default message");
 describe_city("kabul","new york");