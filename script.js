// Name: David Comeau
// Class: PROG2700 - Client Side Programming
// Instructor: Nadia Gouda
//Date: January 28 2025


// Part I: Variables and Constants
let height = 190; // Setting the user's height
const userAge = 39; // Setting the user's age
console.log("Height Variable is", height);
console.log("Age Variable is", userAge);

// Part II: Arrays
let petNames = ["Bob", "Wednesday", "Taz"]; // Array of pet names (I picked cats I've had)
petNames.push("Charlie"); // Adding a new element
console.log("After push:", petNames);
petNames.pop(); // Removing the last element
console.log("After pop:", petNames);
petNames.reverse(); // Reversing the array
console.log("Reversed array:", petNames);

// Part III: Objects
let car = {
    make: "Audi",
    model: "Q5",
    year: 2025,
    color: "Black",
    mileage: 50000,
};

console.log("Initial car object:", car);

car.year = 2026; // Updating an existing property
car.owner = "David Comeau"; // Adding a new property
console.log("Updated car object:", car);