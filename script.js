function appendToResult(value) {
    document.getElementById('result').value += value;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function calculate() {
    var result = eval(document.getElementById('result').value);
    document.getElementById('result').value = result;
}

function backspace() {
    var currentValue = document.getElementById('result').value;
    document.getElementById('result').value = currentValue.slice(0, -1);
}
