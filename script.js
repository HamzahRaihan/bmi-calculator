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
    <div class="box">
      <p>Your Weight is:</p>
      <h2>${weight}kg</h2>
    </div>
    <div class="box">
      <p>Your Height is:</p>
      <h2>${height}cm</h2>
    </div>
    <div class="box">
      <p>Result :</p>
      <h2 style="font-weight: 400;">Your BMI is <strong>${bmi}</strong> which means you are <strong>${category}</strong></h2>
    </div>
    `;
    result.classList.add('container');
    result.innerHTML = finalResult;
    weightInput.value = '';
    heightInput.value = '';
  }
}
