let fac = prompt("Enter your factorial num");
let arr = [];
for (let i = 1; i <= fac; i++) {
  let psh = arr.push(i);
}
const reverse = arr.reverse();
let red = reverse.reduce((item, index) => {
  return item * index;
});

console.log(`The factorial num of ${fac}! is ${red}`);


let advertiser = {
  1:
}