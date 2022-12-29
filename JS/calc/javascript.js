let output = document.querySelector('.output');
let outputText = '';
let operation = '';
let firstNumber = '';
let secondNumber = '';
let numberButtons = [];
let operationButtons = [];
let dot = false;
let clearNextNum = false;
let enterButton = document.getElementById('buttonenter');
let clearButton = document.getElementById('buttonclear');
let dotButton = document.getElementById('buttondot');

getButtons();

function getButtons() 
{
    numberButtons[0] = document.getElementById('button0');
    numberButtons[1] = document.getElementById('button1');
    numberButtons[2] = document.getElementById('button2');
    numberButtons[3] = document.getElementById('button3');
    numberButtons[4] = document.getElementById('button4');
    numberButtons[5] = document.getElementById('button5');
    numberButtons[6] = document.getElementById('button6');
    numberButtons[7] = document.getElementById('button7');
    numberButtons[8] = document.getElementById('button8');
    numberButtons[9] = document.getElementById('button9');

    numberButtons.forEach(button => {
        button.addEventListener('click', handleNumberButtonPressed);
    });

    operationButtons[0] = document.getElementById('buttonplus');
    operationButtons[1] = document.getElementById('buttonminus');
    operationButtons[2] = document.getElementById('buttonmulti');
    operationButtons[3] = document.getElementById('buttondivi');

    operationButtons.forEach(button => {
        button.addEventListener('click', handleOperationButtonPressed);
    });

    enterButton.addEventListener('click', handleEnterButtonPressed);
    clearButton.addEventListener('click', handleClearButtonPressed);
    dotButton.addEventListener('click', handleDotButtonPressed);
}

function handleNumberButtonPressed(event) 
{
    if (clearNextNum) {
        handleClearButtonPressed();
        clearNextNum = false;
    }
    outputText += event.srcElement.textContent;
    output.textContent = outputText;
}

function handleOperationButtonPressed(event) 
{
    if (firstNumber != '') {
        handleEnterButtonPressed(null);
        secondNumber = '';
    }
    operation = event.srcElement.textContent;
    firstNumber = outputText;
    outputText = '';
    dot = false;
}

function handleEnterButtonPressed(event) 
{
    if (outputText == '') {
        return;
    }
    secondNumber = outputText;
    switch (operation) {
        case '+':
            outputText = Number(firstNumber) + Number(outputText);
            break;
        case '-':
            outputText = Number(firstNumber) - Number(outputText);
            break;
        case '*':
            outputText = Number(firstNumber) * Number(outputText);
            break;
        case '/':
            outputText = (Number(firstNumber) / Number(outputText)).toFixed(5);
            break;
        default:
            return;
    }

    output.textContent = outputText;
    if (event) {
        clearNextNum = true;
    }
}

function handleClearButtonPressed(event) 
{
    outputText = '';
    operation = '';
    firstNumber = '';
    output.textContent = '0';
}

function handleDotButtonPressed(event) 
{
    if (!dot) {
        outputText += '.';
        output.textContent = outputText;
        dot = true;
    }
}