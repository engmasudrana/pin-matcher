function getPin() {
    const random = Math.random() * 10000;
    const pin = (random + '').split('.')[0];
    if (pin.length === 4) {
        return pin;
    }
    else {
        return getPin();
    }
}

//display generate in

function generatePin() {
    const pinInput = document.getElementById('pin');
    pinInput.value = getPin();
}

// handel calculator button
const buttonContainer = document.getElementById('digits-container');
buttonContainer.addEventListener('click', function (event) {
    const digit = vent.target.innerText;
    if (isNaN(digit)) {
        // handel backspace
        // handel clear
        if (digit === 'C') {
            const typedInput = document.getElementById('typed-pin').value;
            typedInput.value = '';
        }
    }
    else {
        const typedInput = document.getElementById('typed-pin').value;
        typedInput.value = typedInput.value + digit;
    }
})

// verify pin
function verifyPin() {
    const pin = document.getElementById('pin').value;
    const typedPin = document.getElementById('typed-pin').value;
    if (pin === typedPin) {
        const correct = document.getElementById('correct-pin');
        correct.style.display = "block";
    }
    else {
        const inCorrect = document.getElementById('incorrect-pin');
        inCorrect.style.display = "block";
    }
}