// // Adjective

// let m = Math.floor(Math.random() * 10);
// let a1;
// if (m < 3) {
//   a1 = "Crazy";
// } else if (m < 7) {
//   a1 = "Amazing";
// } else {
//   a1 = "Fire";
// }

// // Shop name

// let a2;
// let m2 = Math.round(Math.random() * 10);
// if (m2 < 4) {
//   a2 = "Engine";
// } else if (m2 < 7) {
//   a2 = "Foods";
// } else {
//   a2 = "Garments";
// }

// // Another word

// let a3;
// let m3 = Math.round(Math.random() * 10);
// if (m3 < 3) {
//   a3 = "Bros";
// } else if (m3 < 6) {
//   a3 = "Limited";
// } else {
//   a3 = "Hub";
// }

// function join(x, y, z) {
//   console.log(`The combinig name become "${x}-${y}-${z}"`);
// }

// join(a1, a2, a3);

// special type

let adjective = {
  1: "Crazy",
  2: "Amazing",
  3: "Fire",
};

let shopName = {
  1: "Engine",
  2: "Foods",
  3: "Garments",
};
let another = {
  1: "Bros",
  2: "Limited",
  3: "Hub",
};
r1 = Math.floor((Math.random() * 20) % 3);
r2 = Math.floor((Math.random() * 20) % 3);
r3 = Math.floor((Math.random() * 20) % 3);

console.log(`${adjective[r1]} ${shopName[r2]} ${another[r3]}`);
