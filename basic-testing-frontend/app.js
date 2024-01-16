import { extractEnteredNumberValues, extractNumbers } from './src/parser.js';
import { calculateResult } from './src/math.js';
import { generateResult } from './src/output.js';


const form = document.querySelector('form');
const output = document.getElementById('result');

function formSubmitHandler(event) {
  event.preventDefault();
  const numberValues = extractEnteredNumberValues(form);
  const result = calculateResult(numberValues);
  const resultText = generateResult(result);

  output.textContent = resultText;
}

form.addEventListener('submit', formSubmitHandler);
