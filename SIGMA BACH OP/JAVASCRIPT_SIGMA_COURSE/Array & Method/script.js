let del = [1, 3, 44, 5, 56, 666];
let del1 = delete del[5];

console.log(del);

let tostr = [1, 3, 44, 5, 56, 666];

console.log(tostr.toString());
console.log(typeof tostr);

// map function
let arr = [2, 3, 45, 55, 65, 12, 4];
// let arr1 = [];
// for (let index = 0; index < arr.length; index++) {
//   const element = arr[index];
//   arr1.push(element ** 2);
// }
// console.log(arr1);

// let arr1 = arr.map((item) => {
//   return item ** 2;
// });
// console.log(arr1);
let arr1 = arr.map((item) => {
  return item + 2;
});

console.log(arr1);

// Filter function
//todo jo condition k mutabic hoga sirf wo hi print hoga
let arr2 = [2, 3, 45, 55, 65, 12, 4];

let arr3 = arr2.filter((item) => {
  return item % 2 === 0;
});
console.log(arr3);
let arr4 = arr3.map((e, index, array) => {
  return e ** 2;
});

console.log(arr4);
let fil = ["harr", "yosuuf", "tallal", "ayan"];
let a = fil.filter((item) => {
  return item.length < 5;
});
console.log(a);

let red = [1, 2, 3, 4, 5, 6, 7, 8];

let red1 = red.reduce((a, b) => {
  return a + b;
});
console.log(red1);

// write a array

let arr5 = [2, 3, 45, 55, 65, 12, 4];

let arr6 = arr5.map((item) => {
  return item + 2;
});

console.log(arr6);
