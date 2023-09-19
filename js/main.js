"use strict";

const select = document.querySelector (".js-select");
const btn =  document.querySelector (".js-btn");
const player = document.querySelector (".js-player");
const computer = document.querySelector(".js-computer");
const msj = document.querySelector(".js-msj");




function getRandomNumber(max){
    const randomNumber = Math.ceil(Math.random() * max)
    return randomNumber;
}

function play(){
    const valuePlay = select.value;
   
}

function randomNumber(){
    const randomNumber = getRandomNumber(10);
    computer.innerHTML = randomNumber;
    return randomNumber;

  
}
function resultPlay(){
    const playerNumber = parseInt(player,10);
    randomNumber();

    if(playerNumber === randomNumber){

        msj.innerHTML ="Empate";
    }else if(playerNumber=== 3 & (computer > 3 & computer < 7) || playerNumber=== 7 & computer >=3|| playerNumber=== 4 & computer >=7)
    {
        msj.innerHTML = "¡Has Ganado!";
    
    }else{
        msj.innerHTML ="¡Has Perdido!"
    }


  
}

function handleClick (evento){
    event.preventDefault();
    play();
    randomNumber();

}







btn.addEventListener("click", handleClick);
