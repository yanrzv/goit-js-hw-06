const decreaseButton = document.querySelector('button[data-action="decrement"]');
const increaseButton = document.querySelector('button[data-action="increment"]');
const value = document.querySelector('#value');
let counterValue = 0;


decreaseButton.addEventListener('click', decreaseValue);
increaseButton.addEventListener('click', increaseValue);

function decreaseValue () {
    counterValue -= 1;
    value.textContent = counterValue;
};

function increaseValue () {
    counterValue += 1;
    value.textContent = counterValue;
};
