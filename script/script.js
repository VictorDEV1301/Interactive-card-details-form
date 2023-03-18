const nameInput = document.getElementById('nameInput')
const nameCard = document.getElementById('nameCard')

nameInput.addEventListener('input', (event) => {
  nameCard.textContent = event.target.value
  nameCard.style.textTransform = 'uppercase'
})

const numberInput = document.getElementById('numberInput')
const numberCard = document.getElementById('numberCard')

numberInput.addEventListener('input', (event) => {
  numberCard.textContent = event.target.value;
  numberCard.style.textTransform = 'uppercase'
})

const dateMInput = document.getElementById('dateMInput')
const dateMCard = document.getElementById('dateMCard')

dateMInput.addEventListener('input', (event) => {
  dateMCard.textContent = event.target.value;
  dateMCard.style.textTransform = 'uppercase'
});

const dateYInput = document.getElementById('dateYInput')
const dateYCard = document.getElementById('dateYCard')

dateYInput.addEventListener('input', (event) => {
  dateYCard.textContent = event.target.value
  dateYCard.style.textTransform = 'uppercase'
})

const cvcInput = document.getElementById('cvcInput')
const cvcCard = document.getElementById('cvcCard')

cvcInput.addEventListener('input', (event) => {
  cvcCard.textContent = event.target.value;
  cvcCard.style.textTransform = 'uppercase'
})

const confirm = document.getElementById('confirm')
const formConfirm = document.getElementById('formConfirm')
const form = document.getElementById('form')
confirm.addEventListener('click', ()=>{
    form.style.display = 'none'
    formConfirm.style.display = 'flex'
})