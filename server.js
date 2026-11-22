const express = require('express');

const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
	    res.send('Welcome to ShopEasy Lite - Docker is working!');
});

app.listen(PORT, '0.0.0.0', () => {
	    console.log(`Server running on port ${PORT}`);
});
