let boxs = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newbtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");

let playerO = true; //player 1 , player 2
let playerX = false;


resetBtn.addEventListener("click" , () => {
    console.log("Reset Button Clicked!!!!!");
    enablebtn();
    msgContainer.classList.add("hide");
});


const winPattern = [
[0,1,2],
[0,3,6],
[0,4,8],

[1,4,7],
[2,5,8],
[2,4,6],

[3,4,5],
[6,7,8]

];


boxs.forEach((box)=>{
    
    box.addEventListener("click", ()=>{
console.log("box clicked");
if(playerO){
    box.innerText = "O";
    playerO=false;
}else{
    box.innerText = "X";
    playerO = true;
}
box.disabled = true;

checkWinner();
});
});


const enablebtn = () => {
    for(let box of boxs){
        box.disabled = false;
        box.innerText="";
    }
};


const disablebtn = () => {
    for(let box of boxs){
        box.disabled = true;
    }
};

const showWinner = (winner) => {
    console.log(msg.innerText);
    msg.innerText= `Winner ...........is ${winner}`;
   //msg.innerText= "Winner is ",winner;
    msgContainer.classList.remove("hide");
    disablebtn();
};

const checkWinner = () => {
    for(let patt of winPattern){

        console.log(patt);
        console.log(patt[0]);
        
        

        let pos1 = boxs[patt[0]].innerText;
        let pos2 = boxs[patt[1]].innerText;
        let pos3 = boxs[patt[2]].innerText;

        console.log(pos1);
        
        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("Winner is ", pos1);
                showWinner(pos1);
            }
        }


    }
}