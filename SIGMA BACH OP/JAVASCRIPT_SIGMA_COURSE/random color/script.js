// let Barr = [ 'yellow','pink', 'green', 'blue','orange'];
// let Carr = ["red",'black', 'darkgreen', 'darkpink', 'navy']
// let ran = Math.floor(Math.random()*5)

// document.querySelectorAll(".box").forEach(e =>{
//     e.style.color = Carr[ran];
//     e.style.background = Barr[ran];
// })
let a = document.querySelector(".container"
).children
//todo for background
const fun = ()=>{
    let rc = Math.floor(Math.random()*120)
    let gc = Math.floor(Math.random()*120)
    let bc = Math.floor(Math.random()*120)
    let op = 0.90;
    //todo take value of no of color 
    return `rgba(${rc}, ${gc}, ${bc}, ${op})`;
}
//todo for color 
const func = ()=>{
    let rb = Math.floor(Math.random()*120)
    let gb = Math.floor(Math.random()*120)
    let bb = Math.floor(Math.random()*120)
    return `rgb(${rb}, ${gb}, ${bb})`;
}



//todo for impliment 

Array.from(a).forEach(e =>{
    e.style.background = fun();
    e.style.color = func();
})


