const categorySelect = document.getElementById('category');
const fromUnitSelect = document.getElementById('fromUnit');
const toUnitSelect = document.getElementById('toUnit');
const converterForm = document.getElementById('converterForm');
const resultDiv = document.getElementById('result');

const units = {
  length: ['km', 'miles', 'meters', 'feet'],
  weight: ['kg', 'pounds', 'grams', 'ounces'],
  temperature: ['celsius', 'fahrenheit', 'kelvin'],
};

//Function to populate unit dropdowns based on category
function populateUnitDropdowns() {
  const category = categorySelect.value;
  fromUnitSelect.innerHTML = units[category].map(unit => `<option value="${unit}">${unit}</option>`).join('');
  toUnitSelect.innerHTML = units[category].map(unit => `<option value="${unit}">${unit}</option>`).join('');
}

//Populating dropdowns on page load
populateUnitDropdowns();

//Updating dropdowns when category changes
categorySelect.addEventListener('change', populateUnitDropdowns);

//Handling form submission
converterForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const value = document.getElementById('value').value;
  const category = categorySelect.value;
  const fromUnit = fromUnitSelect.value;
  const toUnit = toUnitSelect.value;

  const response = await fetch('http://localhost:5000/api/convert', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ value, category, fromUnit, toUnit }),
  });

  const data = await response.json();
  if (data.result) {
    const roundedResult = parseFloat(data.result).toFixed(2); //Rounded to 2 decimal places
    resultDiv.innerText = `Result: ${roundedResult}`;
  } else {
    resultDiv.innerText = 'Invalid conversion. Try again!';
  }});