const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur() {
    const valueLength = inputEl.value.length;
    const dataLength = Number(inputEl.dataset.length);

    if (valueLength >= dataLength) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
    
  }
}