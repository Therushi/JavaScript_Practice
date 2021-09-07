var isEven = (element) =>{
    return element%2 ===0;
}

// callback
var result = [2,4,6,8,10].every(isEven);



//another way to write a same code

var results = [2,4,6,7,10].every((e) => (e%2===0));
console.log(results)