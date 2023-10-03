const submitButton = document.getElementById('submit-button');
const form = document.getElementById('form');
const result = document.getElementById('result');

const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');

form.addEventListener('submit', calculate);

function calculate(e) {
  e.preventDefault();

  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value);

  let bmi = (weight / (height / 100) ** 2).toFixed(1);

  if (weightInput == '' || (isNaN(weight) && heightInput == '') || isNaN(height)) {
    result.innerHTML = 'Please provide valid data';
  } else {
    let category = '';
    if (bmi < 18.5) {
      category = 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      category = 'Normal Weight';
    } else if (bmi >= 25 && bmi <= 29.9) {
      category = 'Overweight';
    } else {
      category = 'Obesity';
    }
    let finalResult = `
      <p>Your Weight is: <span>${weight}kg</span></p>
      <p>Your Height is: <span>${height}cm</span></p>
      <p>Result : Your BMI is ${bmi} which means you are ${category}</p>
    `;
    result.innerHTML = finalResult;
  }
}
