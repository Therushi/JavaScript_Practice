var names = document.getElementById("name");
var counter = document.getElementById("counter");

names.innerHTML = "This is coming from JS";

let count = 1;

setInterval(()=>{
    count++;
    counter.innerHTML = count
},100)