const createcard = (tittle, cName, views, monthsOld,duration, thumnil) => {
  // for card
let card = document.createElement("div");
card.setAttribute("id", "card");
document
  .querySelector("#container")
  .insertAdjacentElement("afterbegin", card);

  // for duration
  let dur = document.createElement("div");
  dur.setAttribute("id", "duration");
  document.querySelector("#card").insertAdjacentElement("afterbegin", dur).innerHTML = duration;
// for img
let image = document.createElement("div");
image.setAttribute("id", "image");
document.querySelector("#card").insertAdjacentElement("afterbegin", image).innerHTML = `<img src=${thumnil}>`;

//  for right
let span = document.createElement("div");
span.setAttribute("id", "right");
document.querySelector("#card").insertAdjacentElement("beforeend", span);

// for mth
let mth = document.createElement("span");
mth.setAttribute("id", "months");
document.querySelector("#right").insertAdjacentElement("afterbegin", mth).innerHTML =` ${monthsOld} months ago` ;
// for veiws

let vs = document.createElement("span");
vs.setAttribute("id", "veiws");
const abbrDict = [
  [3, "K"],
  [6, "M"],
  [9, "B"],
];

function abbrNumber(num) {
  let abbr = num + "";
  for (let abbrPair in abbrDict) {
    const abbrLimit = 10 ** abbrDict[abbrPair][0];
    const nextLimit =
      abbrDict[abbrPair + 1] != null
        ? 10 ** abbrDict[abbrPair + 1][0]
        : Infinity;
    const abbrSymbol = abbrDict[abbrPair][1];
    if (num >= abbrLimit && num < nextLimit) {
      abbr = `${Math.floor(num / abbrLimit)}${abbrSymbol}`;
      break;
    }
  }

  return abbr;
}
document.querySelector("#right").insertAdjacentElement("afterbegin", vs).innerHTML = ` .${abbrNumber(views)} veiws .`;
// for cname
let cname = document.createElement("span");
cname.setAttribute("id", "cname");
document.querySelector("#right").insertAdjacentElement("afterbegin", cname).innerHTML = ` ${cName} `;
// for tittle
let title = document.createElement("div");
title.setAttribute("id", "tittle");
document.querySelector("#right").insertAdjacentElement("afterbegin", title).innerHTML = tittle;
}
createcard(
  "Introduction to backend | Sigma Web Development course tutorial #2",
  "CodeWithHarry",
  560000,
  "7",
  "31:22",
  "https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLABJhdIBqlilwXKzJqa6StynbJT4Q"
);


