let guests: string[] = ["elon musk", "mark zuckerberg", "jeff bezos"];
for (let i = 0; i < guests.length; i++){
console.log("my pleasure to see you at my dinner today sir " + guests [ i ] ) ;
}
console.log("\n unfortunatly mr " +guests[1]+ " is unable to come today \n" );
guests [1]=" zia khan" ;

for (let i = 0; i < guests.length; i++){
  console.log("my pleasure to see you at my dinner today sir " + guests [ i ] ) ;
  }
console.log("hurrah ! now  i have planned to make this dinner bigger...");

guests.unshift("Malik Riaz");
guests.splice(2,0,"jahangir tareen");
guests.push("Aleem khan");
for (let i = 0; i < guests.length; i++){
  console.log("now this is going big and happier than before to see you at my dinner today sir " + guests [ i ] ) ;
  }
  export const nog: number = guests.length;
  
 
