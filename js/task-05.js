const inputArea = document.querySelector('#name-input');
const outputSpan = document.querySelector('#name-output');

inputArea.addEventListener('input', setOutputSpan);


function setOutputSpan(inputText) {
    if (inputText.currentTarget.value.length === 0) {
        outputSpan.textContent = 'Anonymous';
    } else {
        outputSpan.textContent = inputText.currentTarget.value;    
    }
}


