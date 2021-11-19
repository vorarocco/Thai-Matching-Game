
let submitBT= document.querySelector(".submit-bt")
// let finalTime = document.querySelector(".timer").innerText
let topTenRecent = localStorage.getItem("topTenRecent");


// localStorage.setItem("hightScores",[])
submitBT.addEventListener("click" , ()=>{
    let hightScores = localStorage.getItem("hightScores") //|| [];
    let playerName = document.querySelector(".player-name").value
    localStorage.setItem("hightScores",hightScores += `,${playerName}`)
    console.log(localStorage.getItem("hightScores").split(","))
}) 



function topTen(){

}