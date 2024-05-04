const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
const dropdowns = document.querySelectorAll(".dropdown select");
const button = document.querySelector("button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector('.msg')
for (let select of dropdowns) {
  for (code in countryList) {
    let newOpton = document.createElement("option");
    newOpton.innerHTML = code;
    newOpton.value = code;
    if (select.name === "from" && code === "USD") {
      newOpton.selected = "selected";
    } else if (select.name === "to" && code === "INR") {
      newOpton.selected = "selected";
    }
    select.append(newOpton);
  }
  select.addEventListener("change", (e) => {
    updateflag(e.target);
  });
}
const updateflag = (element) => {
  let code = element.value;
  let countryCode = countryList[code];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};
button.addEventListener("click", async (e) => {
  e.preventDefault();
  let amount = document.querySelector("form input");
  let amtval = parseInt(amount.value);
  console.log(amtval);
  if (amtval === "" || amtval < 1 || amtval === NaN) {
    amtval = 1;
    amount.value = "1";
  }
  let URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
  let response = await fetch(URL);
  let Data = await response.json();
  let rate = Data[toCurr.value.toLowerCase()];

  let finalAmount = amount.value * rate;
  msg.innerText = `${amtval} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`
   console.log(Data);
});
