
// Define variables
let score = 0;
const scoreButton = document.getElementById("scoreButton");
const movesDisplay = document.querySelector(".move-counter");
const cards = document.getElementsByClassName("card");
const restart = document.getElementById("restart");
const winCountNeeded = 6; // Number of pairs to match

let move = 0;
let winCount = 0;
let toggledCardsArray = [];

const imagesLinkArray = [
  // ... (your existing image array)
  {
    id: 1,
    image: "metal.jpg",
  },
  {
    id: 2,
    image: "glass.jpg",
  },
  {
    id: 3,
    image: "paper.jpg",
  },
  {
    id: 4,
    image: "glass.jpg",
  },
  {
    id: 5,
    image: "paper.jpg",
  },
  {
    id: 6,
    image: "metal.jpg",
  },
  {
    id: 7,
    image: "metal2.jpg",
  },
  {
    id: 8,
    image: "glass2.jpg",
  },
  {
    id: 9,
    image: "cans.png",
  },
  {
    id: 10,
    image: "metal2.jpg",
  },
  {
    id: 11,
    image: "cans.png",
  },
  {
    id: 12,
    image: "glass2.jpg",
  },
];

const restartGame = () => {
  // Reset variables and shuffle images
  let toggledCard = document.getElementsByClassName("card toggled");
  imagesLinkArray.sort(() => Math.random() - 0.5);
  Object.values(toggledCard).forEach(function (el) {
    setTimeout(() => {
      el.classList.remove("toggled");
    }, 0);
  });
  toggledCardsArray.length = 0;
  move = 0;
  winCount = 0;
  score = 0; // Reset the score
  updateScore(); // Update the score display

  movesDisplay.innerText = `Moves: ${move}`;
  let allImagesSrc = document.getElementsByClassName("card-image");
  Object.values(allImagesSrc).forEach((el, index) => {
    el.src = imagesLinkArray[index].image;
    el.alt = imagesLinkArray[index].newAlt;
    el.id = imagesLinkArray[index].id;
  });
};

restart.addEventListener("click", restartGame);

// Function to handle a correct match
function handleCorrectMatch() {
  score += 10; // Increase the score by 10 for each correct match
  updateScore(); // Update the score display
  showPopup(); // Show the popup for a correct match
}

// Function to update the score display
function updateScore() {
  scoreButton.textContent = `Score: ${score}`; // Update the text content of the score button
}

// Function to check if the game is won
function checkWin() {
  if (winCount === winCountNeeded) {
    setTimeout(() => {
      alert(`Congratulations!!! You won the game in ${move} moves.`);
    }, 300);
  }
}

// Function to show the popup
function showPopup() {
  const popupContainer = document.getElementById("popup-container");
  popupContainer.classList.remove("hidden");
  setTimeout(() => {
    popupContainer.classList.add("hidden");
  }, 2000); // Adjust the time the popup is visible (in milliseconds)
}

// Event listener for card clicks
for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", function () {
    this.classList.add("toggled");
    toggledCardsArray.push(this);

    if (toggledCardsArray.length === 2) {
      let [firstCard, secondCard] = toggledCardsArray;

      let firstCardImgSrc = firstCard.querySelector(".card-image").src;
      let secondCardImgSrc = secondCard.querySelector(".card-image").src;

      if (firstCardImgSrc === secondCardImgSrc) {
        // Matching cards
        toggledCardsArray = [];
        winCount++;
        handleCorrectMatch();
        checkWin();
      } else {
        // Not matching cards
        setTimeout(() => {
          toggledCardsArray.forEach((card) => card.classList.remove("toggled"));
          toggledCardsArray = [];
        }, 500);
      }

      move++;
      movesDisplay.innerText = `Moves: ${move}`;
    }
  });
}

// Event listener for restart button
restart.addEventListener("click", restartGame);

// Call updateScore() initially to set up the initial score display
updateScore();