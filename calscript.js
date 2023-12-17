let currentInput = '';
let currentOperation = null;
let lastInput = '';

function updateDisplay() {
    document.getElementById('display').value = currentInput || '0';
}

function clearDisplay() {
    currentInput = '';
    currentOperation = null;
    updateDisplay();
}

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay();
    }
}

function setOperation(operation) {
    if (currentInput !== '') {
        if (currentOperation !== null) {
            calculate();
        }
        currentOperation = operation;
        lastInput = currentInput;
        currentInput = '';
        updateDisplay();
    }
}

function calculate() {
    if (currentOperation !== null && lastInput !== '' && currentInput !== '') {
        const num1 = parseFloat(lastInput);
        const num2 = parseFloat(currentInput);
        switch (currentOperation) {
            case '+':
                currentInput = (num1 + num2).toString();
                break;
            case '-':
                currentInput = (num1 - num2).toString();
                break;
            case '*':
                currentInput = (num1 * num2).toString();
                break;
            case '/':
                if (num2 !== 0) {
                    currentInput = (num1 / num2).toString();
                } else {
                    currentInput = 'Error';
                }
                break;
            default:
                break;
        }
        currentOperation = null;
        lastInput = '';
        updateDisplay();
    }
}

updateDisplay();