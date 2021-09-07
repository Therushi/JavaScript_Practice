var returnValue = Math.max(25, 24, 14, 7, 64, 65, 8, 75, 2, 9);
//console.log(returnValue);

//So look at above example we can pass as many as values & it can find maximum value from it

//Lets look at the another scenario
function sumOne(a, b) {
  return a + b;
}
//console.log(sumOne(9,8))

// here it works fine but suppose we have an array that we have to pass here

// var addNum = [9,8]

// var sumOneArr = (a,b) => {
//     return a+b;
// }
//console.log(sumOneArr(addNum))

//output for these section is like this {9,8undefined}
// IF your function expected a single value and you  have an array or an object with these values so we can just add {...addNum} before variable name add 3 dots lets look at it
//these is used in the case that we dont have to change the function

var addNum = [9, 8];

var sumOneArr = (a, b) => {
  return a + b;
};
//console.log(sumOneArr(...addNum));

//Here we have output a+b that is 17
//these is SPREAD operator
//it takes group {it can be array or object} and spread it to the multiple value

//Lets we an another scenario
//These is the REST operator

function addTwo(...args) {
  //console.log(args);  it can converts value into arrays
  let sum = 0;
  for (const arg of args) {
    //sum = sum + arg;
    sum += arg;
  }
  return sum;
}

//console.log(addTwo(3, 42, 4, 5, 8, 9, 6, 35));

//here we can add as many values as you want it can iterate through it using loop
// Values can be treated as an array you can console.log in the fuction and see

// suppose we have to multiply and add values in one function we can use these

function addTwo(a, b, ...args) {
  //console.log(args);  it can converts value into arrays
  let multi = a * b;
  let sum = 0;
  for (const arg of args) {
    //sum = sum + arg;
    sum += arg;
  }
  return [multi, sum];
}

console.log(addTwo(3, 42, 4, 5, 8, 9, 6, 35));
//output will be [ 126, 67 ] i.e 42*3=126  and 5, 8, 9, 6, 35 add = 67
