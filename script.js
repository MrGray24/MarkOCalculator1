let calculateMode = false
let clearDebug = 0

function clearScreen() {
    let displayBox = document.getElementById("result");
    displayBox.value = "";
}

function changeMode() {
    if(calculateMode == false){
        calculateMode = true
        let titleText = document.getElementById("topText");
        titleText.innerHTML = "<s>Number of Maidens Mark Ouyang Has</s>&nbspCalculator"
    } else  if(calculateMode == true){
        calculateMode = false
        let titleText = document.getElementById("topText");
        titleText.innerHTML = "Number of Maidens Mark Ouyang Has Calculator"
    }
}

function display(value) {
    let displayBox = document.getElementById("result"); 
    displayBox.value += value;
}

function calculate() {
    let displayBox = document.getElementById("result"); 
    if(calculateMode == false){
        displayBox.value += " * 0";
        setTimeout(function(){
            document.getElementById("result").value = "0"
        }, 2000);
    } else if(calculateMode == true){
        let displayBox = document.getElementById("result").value; 
        let answer = eval(displayBox);
        document.getElementById("result").value = answer; 
    }
}