let music = new Audio("/music/music.mp3");
let audioTurn = new Audio("/music/ting.mp3");
let gameOver = new Audio("/music/gameover.mp3");


let turn = "X";
let isGameOver = false;


//function to change the Turn
const changeTurn=()=>{
//    if(turn === "X"){
//     return "0";
//    }else{
//     return "X";
//    }
   return turn === "X"?"O":"X";
}

//function to check for win
const checkWin=()=>{
let boxTexts = document.getElementsByClassName("boxText");
let win = [
   [0,1,2],
   [3,4,5],
   [6,7,8],
   [0,3,6],
   [1,4,7],
   [2,5,8],
   [0,4,8],
   [2,4,6],

];
   win.forEach(e=>{
   if((boxTexts[e[0]].innerText === boxTexts[e[1]].innerText)&&(boxTexts[e[1]].innerText === boxTexts[e[2]].innerText)&&(boxTexts[e[0]].innerText !== "") ){
      document.querySelector('.info').innerText = boxTexts[e[0]].innerText + " Won"
      isGameOver = true;
      document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width = "170px";
      reset.style.background = "#ff8601";
   
   }
})

}



// game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(elem=>{
 let boxText = elem.querySelector(".boxText");
 elem.addEventListener("click",()=>{
    if(boxText.innerText === ''){
      boxText.style.background = "none"
        boxText.innerText = turn;
        turn = changeTurn();
        audioTurn.play();
        checkWin();
        if(!isGameOver){
         document.getElementsByClassName('info')[0].innerText = "Turnfor:  "+turn;
        }
         
       
    }
 })
})


//add onclick to  the reset button
let reset = document.querySelector("#reset");
reset.addEventListener("click",()=>{
  let boxTexts = document.querySelectorAll(".boxText");
  Array.from(boxTexts).forEach(e=>{
   e.innerText = "";
   turn = "X"
   isGameOver = false;
   document.getElementsByClassName('info')[0].innerText = "Turnfor:  "+turn;
   document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width="0px";
   reset.style.background  ="bisque"
  });
})
