/*Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
*/

function make_shirt(size: string, message: string): void 
{
    if(size=="large" || size=="medium")
    {
    console.log("You ordered of  a "+ size + " shirt with the message: I Love Typescript" );
    }
else
{
console.log("You ordered of  a "+ size + " shirt with the message: " + message );
}
}
 make_shirt("medium", "wrong message");
 make_shirt("large", "default message");
 make_shirt("small","HI! BABY TRADER");