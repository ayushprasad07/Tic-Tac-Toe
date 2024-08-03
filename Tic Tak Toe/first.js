let btn = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGame = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; // player X , player O
let count = 0;

const winPattern = [
    [0, 1, 2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = ()=>{
    turnO=true;
    enabledboxes();
    msgContainer.classList.add("hide");
    resetbtn.classList.remove("hide");
    count=0;
};

btn.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("box was clicked");
        if(turnO==true){
            box.innerText = "O";
            turnO=false;
        }else{
            box.innerText = "X";
            turnO=true;
        }
        box.disabled=true;
        // console.log(count);
        checkWinner();
        count++;
        if (count===9){
            draw();
        };
    })
})

let disabledboxes = ()=>{
    for (let box of btn){
        box.disabled=true;
    }
};

let enabledboxes = ()=>{
    for (let box of btn){
        box.disabled=false;
        box.innerText = "";
    }
};

const showWinner = (winner)=>{
    msg.innerText = `Congratulations Winner is ${winner}`
    msgContainer.classList.remove("hide");
    resetbtn.classList.add("hide");
    disabledboxes();
};

const draw = ()=>{
    msg.innerText = `Match Draw`;
    msgContainer.classList.remove("hide");
    resetbtn.classList.add("hide");
    disabledboxes();
};


const checkWinner= ()=>{
    for(pattern of winPattern){
        let posval1 = btn[pattern[0]].innerText;
        let posval2 = btn[pattern[1]].innerText;
        let posval3 = btn[pattern[2]].innerText;

        if (posval1 !="" && posval2 !='' && posval3 != ''){
            if(posval1==posval2 && posval2==posval3){
                // console.log("winner",posval1);
                showWinner(posval1);
            }
        }
    }
};

newGame.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
