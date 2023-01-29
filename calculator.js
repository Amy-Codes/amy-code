var calculatorValue = "";
var equalsPressed = false;
var displayElement = document.getElementById("display");

var taskList = [];
var historyContainerElement = document.getElementsByClassName("history-container")[0];
var showHistoryPanel = false;
var historyListElement = document.getElementsByClassName("history-list")[0];


function keyPressed (key) { 
    if(key === "="){ 
        equalsPressed = true
        addHistory(calculatorValue)
        calculatorValue = eval(calculatorValue);
    }
    else if(key === "C"){
        calculatorValue = "";
        removeHistory();
    }
    else{
        if(equalsPressed === true){
            calculatorValue = "";
            equalsPressed = false;
        }
        calculatorValue = calculatorValue + key
    }
    displayElement.innerHTML = calculatorValue;
}

function removeHistory() {
    historyListElement.innerHTML = ""
}

function addHistory (taskHistory) { 
    removeHistory()  
    taskList.push(taskHistory);
    for(var i = 0; i < taskList.length; i++) {
        var taskParagraph = document.createElement("p");
        taskParagraph.innerHTML = taskList[i];
        historyListElement.appendChild(taskParagraph);
    }
}

function toggleHistory() {
    showHistoryPanel = !showHistoryPanel;
    if(showHistoryPanel === true){
        historyContainerElement.style.top = 0;
    }
    else{
        historyContainerElement.style.top = "35%";

    }
}
