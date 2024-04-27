let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorePara = document.querySelector("#user-score");
const compscorePara = document.querySelector("#comp-score");


choices.forEach((choice)=>{
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});


const playGame = (userChoice)=>{
    const compChoice = generateChoice();

    if(compChoice === userChoice){
        drawGame();
        msg.innerText = "Game Draw";
        msg.style.backgroundColor = "#081b31";
    }
    else{
        let userWin = true;
        if(userChoice === "rock" ){
        userWin = compChoice === "paper" ? false :true
        }else if(userChoice === "paper" ){
            userWin = compChoice === "scissor" ? false :true
        }
        else{
            userWin = compChoice ==="rock" ? false : true;
        }
        showWinner(userWin);
    }
};

const showWinner = (userWin)=>{
    if(userWin){
        userscore++;
        userscorePara.innerText = userscore;
        msg.innerText ="You Win";
        msg.style.backgroundColor = "Green";
    }else{
        compscore++;
        compscorePara.innerText = compscore;
        msg.innerText ="You Loss";
        msg.style.backgroundColor = "red";
    }
}

const drawGame = ()=>{
    console.log("Game was draw");
}


const generateChoice = ()=>{
 const choices =["rock", "paper", "scissor"];

 let index  = Math.floor(Math.random()*3);
 let compChoice = choices[index];
 return compChoice;
}