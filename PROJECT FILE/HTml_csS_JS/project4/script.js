const random = parseInt(Math.random() * 100 + 1);
const userInput = document.querySelector("#guessfold").value;
const submit = document.querySelector("#subt");
const guesses = document.querySelector("#guessess");
submit.addEventListener("click", (e) => {
  if (userInput > random) {
    guesses.innerHTML = `The no is greater no then guess no`;
  } else if (userInput < random) {
    guesses.innerHTML = `The no is less no then guess no`;
  } else if (userInput === random) {
    guesses.innerHTML = `The no is equal no then guess no`;
  }
});
