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
let newCards = card.src
// console.log(newCards)
}) 

let selectCard = []

function clickC() {
    for(let i = 0 ; i < cards.length ; i++){
        cards[i].addEventListener("click", () => {
            cards[i].classList.remove("x")
            selectCard.push(cards[i])
            if(selectCard.length === 2){
                setTimeout(checkForMatch,500)
            }
            // console.log(selectCard)
        })
        function checkForMatch(card1,card2){
            let cardF = selectCard[0]
            let cardS = selectCard[1]
            if( cardF.innerHTML === cardS.innerHTML){
                console.log('match')
            } else if(cardF !== cardS){
                cardF.classList.add("x")
                cardS.classList.add("x")
                console.log('no match')
                selectCard = []

            } 
        }
        
    }
}
clickC()


// function checkForMatch(){
//     let card1 = 
//     let card2 = 
//     if( card1.src === card2.src){
//         console.log('match')
//     } else if(card1 !== card2){
//         console.log('no match')
//     } 
// }


// console.dir(randomCArray)