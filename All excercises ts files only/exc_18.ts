let favorite_places: string[] = ["iconic miami", "bali", "dubai", "sent lucia", "china"];
console.log("Original order:", favorite_places);
console.log("Alphabetical order:", [...favorite_places].sort());
console.log("Original order (again):", favorite_places);
console.log("Reverse alphabetical order:", [...favorite_places].sort().reverse());
console.log("Original order (yet again):", favorite_places);
favorite_places.reverse();
console.log("Reversed order:", favorite_places);
favorite_places.reverse();
console.log("Back to original order:", favorite_places);
favorite_places.sort();
console.log("Sorted in alphabetical order:", favorite_places);
favorite_places.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:", favorite_places);