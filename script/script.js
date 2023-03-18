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
  if (/[^\d]/g.test(numberInput.value)) {
    numberInput.style.border = `2px solid red`
  } else {
    numberInput.style.border = `1px solid black`
  }
})

const dateMInput = document.getElementById('dateMInput')
const dateMCard = document.getElementById('dateMCard')

dateMInput.addEventListener('input', (event) => {
  dateMCard.textContent = event.target.value;
  if (/[^\d]/g.test(dateMInput.value)) {
    dateMInput.style.border = `2px solid red`
  } else {
    dateMInput.style.border = `1px solid black`
  }
});

const dateYInput = document.getElementById('dateYInput')
const dateYCard = document.getElementById('dateYCard')

dateYInput.addEventListener('input', (event) => {
  dateYCard.textContent = event.target.value
  if (/[^\d]/g.test(dateYInput.value)) {
    dateYInput.style.border = `2px solid red`
  } else {
    dateYInput.style.border = `1px solid black`
  }
})

const cvcInput = document.getElementById('cvcInput')
const cvcCard = document.getElementById('cvcCard')

cvcInput.addEventListener('input', (event) => {
  cvcCard.textContent = event.target.value;
  if (/[^\d]/g.test(cvcInput.value)) {
    cvcInput.style.border = `2px solid red`
  } else {
    cvcInput.style.border = `1px solid black`
  }
})

const formConfirm = document.getElementById('formConfirm')
const form = document.getElementById('form')

form.addEventListener('submit', (event) => {
  event.preventDefault()
  if((numberInput.style.border === `2px solid red`)||
  (dateMInput.style.border === `2px solid red`)||
  (dateYInput.style.border === `2px solid red`)||
  (cvcInput.style.border === `2px solid red`)){
    alert('Verifique os dados e tente novamente')
  }else{
    form.style.display = 'none'
    formConfirm.style.display = 'flex'
  }
})

