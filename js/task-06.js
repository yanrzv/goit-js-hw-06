const inputArea = document.querySelector('input[data-length="6"]');
const INPUT_DATA_LENGTH = inputArea.dataset.length;


inputArea.addEventListener('blur', (event) => {
    if (event.currentTarget.value.length < INPUT_DATA_LENGTH) {
        inputArea.classList.add('invalid');
        inputArea.classList.remove('valid');
    } else {
        inputArea.classList.add('valid');
        inputArea.classList.remove('invalid');
    }

});