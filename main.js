// Letters
const letters = "abcdefghijklmnopqrstuvwxyz";

// Get Array From Letters
let lettersArray = Array.from(letters);

// Select Letters Container
let lettersContainer = document.querySelector(".letters");

// Generate Letters
lettersArray.forEach(letter => {

  // Create Span
  let span = document.createElement("span");

  // Create Letter Text Node
  let theLetter = document.createTextNode(letter);

  // Append The Letter To Span
  span.appendChild(theLetter);

  // Add Class On Span
  span.className = 'letter-box';

  // Append Span To The Letters Container
  lettersContainer.appendChild(span);

});

// Object Of Words + Categories
const words = {
  programming: ["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
  movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
  people: ["Albert Einstein", "Hitchcock", "Alexander", "Cleopatra", "Mahatma Ghandi"],
  countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"]
}

// Get Random Property

let allKeys = Object.keys(words);

// Random Number Depend On Keys Length
let randomPropNumber = Math.floor(Math.random() * allKeys.length);

// Category
let randomPropName = allKeys[randomPropNumber];

// Category Words
let randomPropValue = words[randomPropName];

// Random Number Depend On Words
let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);

// The Chosen Word
let randomValueValue = randomPropValue[randomValueNumber];

// Set Category Info
document.querySelector(".game-info .category span").innerHTML = randomPropName;

// Select Letters Guess Element
let lettersGuessContainer = document.querySelector(".letters-guess");

// Convert Chosen Word To Array
let lettersAndSpace = Array.from(randomValueValue);

// Create Spans Depened On Word
lettersAndSpace.forEach(letter => {

  // Create Empty Span
  let emptySpan = document.createElement("span");

  // If Letter Is Space
  if (letter === ' ') {

    // Add Class To The Span
    emptySpan.className = 'with-space';

  }

  // Append Span To The Letters Guess Container
  lettersGuessContainer.appendChild(emptySpan);

});
let guessSpan = document.querySelectorAll(".letters-guess span")

let wrongAttempts = 0;

let theDraw = document.querySelector(".hangman-draw");

document.addEventListener("click", (e) => {
let theStatus = false
  if(e.target.className === "letter-box"){

     e.target.classList.add("clicked");

     let theClickedLetter = e.target.innerHTML.toLowerCase()

     let theChosenWord = Array.from(randomValueValue.toLowerCase());

     theChosenWord.forEach((wordLetter, wordIndex) =>{

        if(theClickedLetter == wordLetter){

          theStatus = true

          guessSpan.forEach((span, spanIndex) =>{


            if(wordIndex === spanIndex){
              
              span.innerHTML=theClickedLetter
            }
          })

        }

     })
   
    if (theStatus !== true){
      wrongAttempts++

      theDraw.classList.add(`wrong-${wrongAttempts}`)

        document.getElementById("fail").play();
        if(wrongAttempts === 8){
          endGame()

          lettersContainer.classList.add("finished")
        }
    }else{
        document.getElementById("success").play();
    }
  }
})


function endGame() {

  // Create Popup Div
  let div = document.createElement("div");

  // Create Text
  let divText = document.createTextNode(`Game Over, The Word Is ${randomValueValue}`);

  // Append Text To Div
  div.appendChild(divText);

  // Add Class On Div
  div.className = 'popup';

  // Append To The Body
  document.body.appendChild(div);
}
