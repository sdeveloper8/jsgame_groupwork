// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("randomNumber: ", randomNumber);
const timeStarted = Date.now();
console.log(timeStarted);

let lives = document.getElementById("lives");

//--------- Steps for Hackathon Code --------------

// Step 1: Write If/Else Statements, inside a function, to compare the guess from the user, to the randomly generated number
// Step 2: Call the function from the HTML document, using onsubmit()
// Step 3: Stop the page from refreshing using event.preventDefault()
// Step 4: Get the guess value from the onsubmit event using: event.target.guess.value
// Step 5: Add some response to the user, when the guess is submitted.
// Step 6: Take 1 life off for each failure
// Step 7: Add HTML for new page when user either wins or loses

//-------------- Event Handling -------------------

// We use event to get all information about the form submission
// Then we use .target to get information about the HTML form
// Then the name of the specific value, in our case, it is called guess.
// Then use .value to get the value of the input with the "guess" name.

//--------------- Extra Notes ---------------------------

// Our code does not work at the moment, We have not declared the randomNumber variable inside the function, so it is out of scope right now. If we call randomNumber as a parameter, it should give us access to the variable, and the code should start working.

// Finish print statements before return line, the code is being exited at the point which the function returns.

//----------------------------------- Code -------------------------------

// Defines a function called "guessTheNumber", to check the random number against the user input
function guessTheNumber(event, randomNumber, timeStarted) {
  // Prevents default from happening (Stops the page from refreshing)
  event.preventDefault();
  // Remove Life Buttons
  let lifeButtonEasy = document.getElementById("easy");
  let lifeButtonMid = document.getElementById("mid");
  let lifeButtonHard = document.getElementById("hard");
  if (lifeButtonEasy) {
  lifeButtonEasy.remove();
  lifeButtonMid.remove();
  lifeButtonHard.remove();
  }
  // Assigning feedback ID to the variable feedback
  let feedback = document.getElementById("feedback");
  // Assign the guess value from our HTML form to the variable "guess"
  guess = (event.target.guess.value);
  console.log(guess);
  // If guess is equal to random number, feedback: "That's Correct"
      if (guess == randomNumber) {
        feedback.innerText = "Congratulations! You guessed the number!";
        lives = lives.innerText;
        successPage(lives, timeStarted)
// If guess is greater than 100 or (||) less than 1, then feedback: "Outside range"
      } else if (guess > 100 || guess < 1) {
        feedback.innerText = `That number is not within the correct
        range! Please try again.`;
// If guess is greater than random number, feedback: "Guess too large"
      } else if (guess > randomNumber) {
        feedback.innerText = "That's too high! Try again!";
        adjustLives()   
// If guess is smaller than random number, feedback: "Guess too small"
      } else if (guess < randomNumber) {
        feedback.innerText = "That's too low! Try again!";
        adjustLives()
      } else {
        feedback.innerText = `You have not given a valid number. Please
        enter an integer between 1 and 100.`;
      }
}

function adjustLives() {
  //let lives = document.getElementById("lives");//removing from here to make global variable let
  currentLives = parseInt(lives.innerText);
  if (currentLives > 1) {
  newLives = currentLives - 1;
  lives.innerText = newLives;
  } else {
    lives.innerText = "No Lives Left";
    closePage()
  }
}

function closePage() {
  document.body.innerHTML = `
  <h1 class="finishedHeading">Game Over! Better luck next time!</h1>
  <p class="finishedParagraph">You ran out of lives!</p>
  <button class="button2" onclick="restart()">Restart</button>`;
  document.body.style = "background-color: red";
}

function successPage(lives, timeStarted) {
  let score = lives * 150;
  timeTakenSec = (Date.now() - timeStarted) / 1000;
  score = score - (timeTakenSec * 4);
  score = score.toFixed(0);
  if (score < 0) {
    score = 0;
  }
  let life = "lives";
  if (lives >= 1) {
      if(lives == 1){life = "life";}
      document.body.innerHTML = `
      <h1 class="finishedHeading">Congratulations, You Won!
      <br>Thank you for playing!</h1>
      <p class="finishedParagraph">You finished with ${lives} ${life}
      remaining. Well Done!</p>
      <p class="finishedParagraph"> Score: ${score}</p>
      <button class="button2" onclick="restart()">Restart</button>`
      document.body.style = "background-color: green";
      }
   }// else {
    
  //   document.body.innerHTML = `
  //   <h1 class="finishedHeading">Congratulations, You Won!
  //   <br>Thank you for playing!</h1>
  //   <p class="finishedParagraph">You finished with 1 life remaining.
  //   You just made it!</p>
  //   <p class="finishedParagraph">Score: ${score}</p>
  //   <button class="button2" onclick="restart()">Restart</button>`;
  //   document.body.style = "background-color: green";
  // }
//}

function setEasy() {
 // document.getElementById("lives");
  lives.innerText = "10";
}

function setMedium() {
 // document.getElementById("lives");
  lives.innerText = "7";
}

function setHard() {
  //document.getElementById("lives");
  lives.innerText = "5";
}

function restart() {
  location.reload()
}