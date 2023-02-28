const inputArea = document.querySelector('input[data-length="6"]');
const INPUT_DATA_LENGTH = inputArea.dataset.length;


inputArea.addEventListener('blur', (event) => {
    if (event.currentTarget.value.length < INPUT_DATA_LENGTH) {
        inputArea.classList.add('invalid')
    }

    inputArea.classList.add('valid');
   
});