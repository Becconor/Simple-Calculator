const valuesForButtons = [
    "AC", "+/-", "%", "÷",
    "7", "8", "9", "x",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ".", "="
];

const topSymbols = ["AC", "+/-", "%"];
const mathSymbols = ["÷", "x", "-", "+", "="];

const display = document.getElementById("display");
display.value = "";

let A = 0;
let B = null;
let operator = null;

function clearAll() {
    A = 0;
    B = null;
    operator = null;
}

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

    button.addEventListener("click", function () {
        if (mathSymbols.includes(value)) {
            if (value == "=") {
                if (A != null) {
                    B = display.value;
                    let numA = Number(A);
                    let numB = Number(B);

                    if (operator == "÷") {
                        display.value = numA / numB;
                    } else if (operator == "x") {
                        display.value = numA * numB;
                    } else if (operator == "-") {
                        display.value = numA - numB;
                    } else if (operator == "+") {
                        display.value = numA + numB;
                    }

                    clearAll();
                }
            } else {
                operator = value;
                A = display.value;
                display.value = "";
            }
        } else if (topSymbols.includes(value)) {
            if (value == "AC") {
                clearAll();
                display.value = "";
            } else if (value == "+/-") {
                if (display.value != "" && display.value != "0") {
                    if (display.value[0] == "-") {
                        display.value = display.value.slice(1);
                    } else {
                        display.value = "-" + display.value;
                    }
                }
            } else if (value == "%") {
                display.value = Number(display.value) / 100;
            }
        } else if (display.value == "0") {
            display.value = value;
        } else {
            if (value == ".") {
                if (display.value != "" && !display.value.includes(value)) {
                    display.value += value;
                }
            } else {
                display.value += value;
            }
        }
    })

    let buttonsDiv = document.getElementById("buttons");
    buttonsDiv.appendChild(button);
}