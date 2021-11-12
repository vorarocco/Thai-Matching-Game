let cards = document.querySelectorAll(".card")
let noCards = document.querySelectorAll(".no-card")
let ansCard = document.querySelectorAll('.ans')

// console.log(cards)
// suffleCard()

// function suffleCard(){
//     cards.forEach(card =>{
//     if (!card.classList.contains("no-card")){
//         // cards.filter(cards!== noCards)
//         console.log(card)
//         let randomCard = Math.floor(Math.random() * 20)
//         card.style.order = randomCard
//         }
//     })
// }
// console.log(cards)

// console.log(noCards)

// cards.filter(cards!== noCards)

let randomCArray = ["ans1","ans2","ans3","ans4","ans5","ans6","ans7","ans8","ans9","ans10","ans1","ans2","ans3","ans4","ans5","ans6","ans7","ans8","ans9","ans10"]

function shuffle(array) {
    let currentIndex = array.length, randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
shuffle(randomCArray)
document.querySelectorAll(".ans").forEach((card,i)=>{
card.src=`./images/${randomCArray[i]}.png`
})

function clickC() {
    for(let i = 0 ; i < cards.length ; i++){
        cards[i].addEventListener("click", () => {
            cards[i].classList.remove("x")
        })
    }
}
 
clickC()
