const { convert } = require('../models/converter');

const convertController = (req, res) => {
  const { value, category, fromUnit, toUnit } = req.body;
  try {
    const result = convert(parseFloat(value), category, fromUnit, toUnit);
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: 'Invalid conversion request' });
  }
};

module.exports = { convertController };