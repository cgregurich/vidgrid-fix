function keydown(e) {
  if (e.key === 'Enter') {
    entered();
    input.value = '';
  }
}

function entered() {
  container.innerHTML = input.value;  
}


const input = document.querySelector('.input');
const container = document.querySelector('.container');
const clearButton = document.querySelector('.clear-button');


clearButton.addEventListener('click', () => container.innerHTML = '');
input.addEventListener('keydown', keydown);