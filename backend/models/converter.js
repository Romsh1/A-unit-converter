//Conversion logic (Model)
const conversions = {
    length: {
      km: { miles: 0.621371, meters: 1000 },
      miles: { km: 1.60934, feet: 5280 },
    },
    weight: {
      kg: { pounds: 2.20462, grams: 1000 },
      pounds: { kg: 0.453592, ounces: 16 },
    },
    temperature: {
      celsius: { fahrenheit: (c) => (c * 9/5) + 32, kelvin: (c) => c + 273.15 },
      fahrenheit: { celsius: (f) => (f - 32) * 5/9, kelvin: (f) => (f - 32) * 5/9 + 273.15 },
    },
  };
  
  function convert(value, category, fromUnit, toUnit) {
    if (category === 'temperature') {
      return conversions[category][fromUnit][toUnit](value);
    }
    return value * conversions[category][fromUnit][toUnit];
  }
  
  module.exports = { convert };