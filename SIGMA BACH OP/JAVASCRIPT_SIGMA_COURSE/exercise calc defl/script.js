

//todo Solution:-
let ren = Math.random();
console.log(ren)
let a = prompt("Enter Your First Number");
let c = prompt("Enter Your Operation");
let b = prompt("Enter Your Second Number");
let obj = {
    "+": "-",
    "-": "/",
    "*": "+",
    "/": "%",
}
if(ren>0.1){
    console.log(`The Answer is ${a} ${c} ${b}`);
    alert(`The Answer is ${eval(`${a} ${c} ${b}`)}`);
}
else{
    c=obj[c];
    console.log(`The Answer is ${a} ${c} ${b}`);
    alert(`The Answer is ${eval(`${a} ${c} ${b}`)}`);
}

