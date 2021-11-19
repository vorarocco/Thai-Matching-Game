let cards = document.querySelectorAll(".card");
let noCards = document.querySelectorAll(".no-card");
let ansCard = document.querySelectorAll(".ans");

let randomCArray = [
  "ans1",
  "ans2",
  "ans3",
  "ans4",
  "ans5",
  "ans6",
  "ans7",
  "ans8",
  "ans9",
  "ans10",
  "ans1",
  "ans2",
  "ans3",
  "ans4",
  "ans5",
  "ans6",
  "ans7",
  "ans8",
  "ans9",
  "ans10",
];

//shuffle card
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
shuffle(randomCArray);
document.querySelectorAll(".ans").forEach((card, i) => {
  card.src = `./images/${randomCArray[i]}.png`;
  let newCards = card.src;
  // console.dir(newCards)
});

let selectCard = [];
let matchedCard = [];

// win
function win() {
    cards.classList === ".card x";
    document.querySelector(".you-win").classList.add("visible")
    // document.querySelector(".you-win").addEventListener("click", ()=>{
    //     document.querySelector
    // })
  
  // console.log("win!")
}

// start
function startGame() {
  document
    .querySelector(".overlay-playbutton")
    .addEventListener("click", () => {
      document.querySelector(".overlay-start").classList.remove("visible");
      let startSound = new Audio("sound/songalong.mp3")
      startSound.play()
    

      // timer
      let playerTimer = setInterval(timeRun, 1000);
      function timeRun() {
        let time = document.querySelector(".timer").innerText;
        time++;
        document.querySelector(".timer").innerText = time;
      }
      clickC();

      // click
      function clickC() {
        for (let i = 0; i < cards.length; i++) {
          cards[i].addEventListener("click", () => {
            cards[i].classList.remove("x");
            selectCard.push(cards[i]);
            let clickSound = new Audio("sound/flip.wav")
              clickSound.play()
              if (selectCard.length === 2) {
              setTimeout(checkForMatch, 500);
            }
            // console.log(selectCard)
          });

          // match
          function checkForMatch(card1, card2) {
            let cardF = selectCard[0];
            let cardS = selectCard[1];
            // console.log(
            //   cardF.children[1].children[0],
            //   cardS.children[1].children[0]
            // );

            if (
              cardF.children[1].children[0].src ===
              cardS.children[1].children[0].src
            ) { let matchSound = new Audio("sound/match.wav")
            matchSound.play()
              matchedCard.push(card1, card2);
              if (matchedCard.length === 20) {
                win();
                clearInterval(playerTimer);
              }
              console.log("match");
              selectCard = [];
              // console.log(matchedCard)
            } else {
              cardF.classList.add("x");
              cardS.classList.add("x");
              console.log("no match");
              selectCard = [];
            }
          }
        }
      }
    });
}
startGame();
