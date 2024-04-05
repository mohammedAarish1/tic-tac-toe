const boxes = document.querySelectorAll(".box")
const resetBtn = document.querySelector(".reset-btn")
const winnerMsgBox=document.querySelector(".winner-msg");
const winnnerMsg=document.querySelector(".winner-msg p");
const newGameBtn=document.querySelector(".new-game")
let turn0 = true;
let counter=0;
const winningPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

boxes.forEach((box)=>{
    box.addEventListener("click",(e)=>{
        if(turn0){
            box.innerText="X";
            box.style.color="#170E50"
            turn0=false;
        }else{
            box.innerText=0;
            turn0=true;
        }
        counter++;
        console.log(counter)
        box.disabled=true;
        checkWinner();
        
    })
})

const checkWinner=()=>{
    for(let pattern of winningPatterns){
       let pos1Value=boxes[pattern[0]].innerText;
       let pos2Value=boxes[pattern[1]].innerText;
       let pos3Value=boxes[pattern[2]].innerText;
      
       if(pos1Value!="" && pos2Value!="" && pos3Value!=""){
        if(pos1Value===pos2Value && pos2Value===pos3Value){
            winnnerMsg.innerText = `Winner is ${pos1Value}`;
            winnerMsgBox.classList.remove("hide")
            
            disableBtn();
        }if(counter===9 && pos1Value!==pos2Value && pos2Value!==pos3Value){
            winnnerMsg.innerText = `Match Draw`;
            winnerMsgBox.classList.remove("hide")
        }
       }
    }
}

const disableBtn=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBtn=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        winnnerMsg.innerText ="";


    }
}

const resetGame =()=>{
    counter=0;
    turn0=true;
    enableBtn();
    winnerMsgBox.classList.add("hide")

}

resetBtn.addEventListener("click",resetGame);
newGameBtn.addEventListener("click",resetGame);



