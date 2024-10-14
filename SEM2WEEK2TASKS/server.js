const express = require('express');
const app = express();
const route = require('./src/routes/login');
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 3000;  // Set PORT from env or default to 3000

app.use(express.json());
app.use('/api', route);  // Corrected route path

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
