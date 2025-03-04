const express = require('express');
const cors = require('cors'); 
const convertRoutes = require('./routes/convertRoutes');

const app = express();
app.use(express.json()); 
app.use(cors()); 

//Using the conversion routes
app.use('/api', convertRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});