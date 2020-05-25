// MATH.ROUND
let roundInput = document.getElementById ('round-input');
let roundAnswer = document.getElementById ('round-answer');

function onRoundInput () {
    roundAnswer.textContent = Math.round(roundInput.value);
}

roundInput.addEventListener('input', onRoundInput);


// CEIL
let ceilInput = document.getElementById('ceil-input');
let ceilAnswer = document.getElementById('ceil-answer');

function onCeilInput () {
    ceilAnswer.textContent = Math.ceil(ceilInput.value);
}

ceilInput.addEventListener('input', onCeilInput);



// FLOOR
let floorInput = document.getElementById ('floor-input');
let floorAnswer = document.getElementById ('floor-answer');

function onFloorInput () {
    floorAnswer.textContent = Math.floor(floorInput.value);
}

floorInput.addEventListener('input', onFloorInput);



// MIN
let minInput1 = document.getElementById ('min-input1');
let minInput2 = document.getElementById ('min-input2');
let minAnswer = document.getElementById ('min-answer');

function onMinInput () {
    minAnswer.textContent = Math.min(minInput1.value, minInput2.value);
}

minInput1.addEventListener('input', onMinInput);
minInput2.addEventListener('input', onMinInput);

// MAX
let maxInput1 = document.getElementById ('max-input1');
let maxInput2 = document.getElementById ('max-input2');
let maxAnswer = document.getElementById ('max-answer');

function onMaxInput () {
    maxAnswer.textContent = Math.max(maxInput1.value, maxInput2.value);
}

maxInput1.addEventListener('input', onMaxInput);
maxInput2.addEventListener('input', onMaxInput);


// ABS
let absInput = document.getElementById ('abs-input');
let absAnswer = document.getElementById ('abs-answer');

function onAbsInput () {
    absAnswer.textContent = Math.abs(absInput.value);
}

absInput.addEventListener('input', onAbsInput);


// PI 

let piAnswer = document.getElementById ('pi-answer');

    piAnswer.textContent =  Math.PI.toFixed(7);



// MATH.RANDOM

let randomAnswer = document.getElementById ('random-answer');

    randomAnswer.textContent = Math.random().toFixed(7);