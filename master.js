let letters = "abcdefghijklmnopqrstuvwxyz";
let lettersArray = Array.from(letters);
let contener = document.querySelector(".the-letters");
let r = [];
lettersArray.forEach((letr) => {
  let span = document.createElement("span");
  let letter = document.createTextNode(letr);
  span.appendChild(letter);
  span.classList.add("letter-box");
  r.push(span);
  contener.appendChild(span);
});

let words = {
  people: [
    "mohammed",
    "ahmed",
    "ali",
    "omer",
    "ameer",
    "kareem",
    "hasaane",
    "ashraf",
  ],
  movies: [
    "fall",
    "inception",
    "prestige",
    "intersteller",
    "the wallking dead",
    "game of throne",
  ],
  countries: ["palestine", "syria", "jorden", "egypt"],
  programing: ["php", "css", "html", "java", "java script", "c", "python"],
};
let keys = Object.keys(words);
let randomKeys = Math.floor(Math.random() * keys.length);
let randomValue = keys[randomKeys];
let arreys = words[randomValue];
let indexofAray = Math.floor(Math.random() * arreys.length);
let indexofArayvalue = arreys[indexofAray];
document.querySelector(".game-info .catagory span").innerHTML = randomValue;

let letterguesscontener = document.querySelector(".letters-gusses");

let lettersandspace = Array.from(indexofArayvalue);
console.log(indexofArayvalue);
lettersandspace.forEach((letter) => {
  let emptyspan = document.createElement("span");
  if (letter === " ") {
    emptyspan.classList.add("space");
  }
  letterguesscontener.appendChild(emptyspan);
});

let gussesspan = document.querySelectorAll(".letters-gusses span");
let wrongAttempt = 0;
let thedraw = document.querySelector(".hangman-draw");

document.addEventListener("click", (e) => {
  let statuse = false;
  if (e.target.className === "letter-box") {
    e.target.classList.add("clicked");
    let cleckedLetter = e.target.innerHTML.toLowerCase();
    lettersandspace.forEach((wordletter, index) => {
      if (cleckedLetter == wordletter) {
        statuse = true;
        console.log(cleckedLetter);
        gussesspan.forEach((span, spanindex) => {
          if (index === spanindex) {
            span.innerHTML = wordletter;
          }
        });
      }
    });
    if (statuse === false) {
      wrongAttempt++;
      thedraw.classList.add(`wrong-${wrongAttempt}`);
      if (wrongAttempt == 8) {
        endgame();
        r.forEach((le) => {
          le.classList.add("clicked");
        });
      }
    }
  }
});
function endgame() {
  let div = document.createElement("div");
  div.innerHTML = `Game over the word is <span>${indexofArayvalue}</span>`;
  div.className = `poupe`;
  document.body.appendChild(div);
}
