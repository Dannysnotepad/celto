/*
*Celto
*from
*Dannysnotepad
*/

const form = document.getElementById('form')
let resultEl = document.getElementById('result')
let result

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const userInput = document.getElementById('userInput')
  const option = document.getElementById('option')
  
  if (userInput.value == '') {
    alert('Please enter degree to continue')
  } else{
    if(option.value == 1){
      result = Number((userInput.value * 9/5) + 32)
      resultEl.textContent = `${result}°`
      userInput.value = ''
    } else if(option.value == 2){
      result = Number((userInput.value - 32) * 5/9)
      resultEl.textContent = `${result}°`
      userInput.value = ''
    }
  }
})