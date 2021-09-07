// Array is just a collection of data

var countries = ["India", "USA", "Japan", "Russia"];

var states = new Array ("Maharastra", "Rajasthan", "delhi", "Mumbai");

console.log(states[3])

//Replacing the value of array

states[3] = "Punjab";


console.log(states.length)

// pop {remove last item from the array}
states.pop()

console.log(states)

//push {add value to the end of the array}
states.push("Tamilnadu")
console.log(states)

//unshift add item to the first index place 

states.unshift("Rushi")
console.log(states);

//shift remove item from the first

states.shift()
console.log(states);