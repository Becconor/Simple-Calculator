const valuesForButtons = [
    "AC", "+/-", "%", "÷",
    "7", "8", "9", "x",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ".", "="
];

const topSymbols = ["AC", "+/-", "%"];
const mathSymbols = ["÷", "x", "-", "+", "="];


for (let i = 0; i < valuesForButtons.length; i++) {
    let value = valuesForButtons[i];
    let button = document.createElement("button");
    button.innerText = value;

    if (value == "0") {
        button.style.width = "175px";
        button.style.gridColumn = "span 2";
    }

    if (mathSymbols.includes(value)) {
        button.style.backgroundColor = "#FAEB92";
    } else if (topSymbols.includes(value)) {
        button.style.backgroundColor = "#CC66DA";
        button.style.color = "#000000";
    }

    let buttonsDiv = document.getElementById("buttons");
    buttonsDiv.appendChild(button);
}