document.getElementById('calculatorForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);
    const operator = document.getElementById('operator').value;

    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                result = 'Cannot be divided by zero';
            } else {
                result = (num1 / num2).toFixed(2);
            }
            break;
        default:
            result = 'Invalid operator';
    }

    document.getElementById('result').textContent = `Result = ${result}`;
});


