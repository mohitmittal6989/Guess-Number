let input = document.getElementById("userInput");
let result = document.getElementById("gameResult");
let random = Math.ceil(Math.random()*100);
function checkGuess(){
    let guessed_number = parseInt(input.value);
    if(random === guessed_number){
        result.textContent = "congo! You Got the Answer :)"
        result.style.backgroundColor = "green";
    }
    else if(random > guessed_number){
        result.textContent = "TOO LOW!"
        result.style.backgroundColor = "red";
    }
    else if(random < guessed_number){
        result.textContent = "TOO HIGH!"
        result.style.backgroundColor = "red";
    }
    else{
        result.textContent = "INVALID! :("
        result.style.backgroundColor = "#ffff11";
    }
}