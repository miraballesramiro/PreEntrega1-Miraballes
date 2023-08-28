const numbers = document.querySelectorAll('.numbers');
const result = document.querySelector('.result span');
const signs = document.querySelectorAll('.item3.sign');
const equals = document.querySelector('.equal');
const clear = document.querySelector('.clear');
const negative = document.querySelector('.negative');
const percent = document.querySelector('.percent');

let firstValue = "";
let isFirstValue = false;
let secondValue = "";
let isSecondValue = false;
let sign = "";
let resultValue = 0;

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', (e) => {
        let atr = e.target.textContent;
        if (isFirstValue === false) {
            getFirstValue(atr);
        }
        if (isSecondValue == false) {
            getSecondValue(atr);
        }
    });
}


function getFirstValue(el) {
    result.innerHTML = "";
    firstValue += el;
    result.innerHTML = firstValue;
    firstValue = +firstValue;
}

function getSecondValue(el) {
    if(firstValue !== "" && sign !== "") {
        secondValue += el;
        result.innerHTML = secondValue;
        secondValue = +secondValue
    }
}

function getSign(el) {
    sign = el;
    isFirstValue = true;
    isSecondValue = true;
}


for (let i = 0; i < signs.length; i++) {
    signs[i].addEventListener('click', (e) => {
        let signValue = e.target.getAttribute('value');
        getSign(signValue);
    });
}

equals.addEventListener('click', () => {
    if (sign === "+") {
        resultValue = firstValue + secondValue;
    } else if (sign === "-") {
        resultValue = firstValue - secondValue;
    } else if (sign === "X") {
        resultValue = firstValue * secondValue;
    } else if (sign === "/") {
        resultValue = firstValue / secondValue;
    }
    
    result.innerHTML = resultValue;
    firstValue = resultValue;
    secondValue = "";
});




function checkResultLength() {
    if (resultValue.toString().length >= 8) {
        resultValue = parseFloat(resultValue.toFixed(5));
        result.innerHTML = resultValue;
    }
}


negative.addEventListener('click', () => {
    result.innerHTML = "";
    if(firstValue != "") {
        resultValue = -firstValue;
        firstValue = resultValue;
    }
    if(firstValue != "" && secondValue != "" && sign != "") {
        resultValue = -resultValue;
    }
        
    result.innerHTML = resultValue;
})

percent.addEventListener('click', () => {
    result.innerHTML = "";
    if(firstValue != "") {
        resultValue = firstValue / 100;
        firstValue = resultValue;
    }
    if(firstValue != "" && secondValue != "" && sign != "") {
        resultValue = resultValue / 100;
    }

    result.innerHTML = resultValue
})

clear.addEventListener('click', () => {
    result.innerHTML = 0;

    firstValue = "";
    isFirstValue = false;
    secondValue = "";
    isSecondValue = false;
    sign = "";
    resultValue = 0;

})