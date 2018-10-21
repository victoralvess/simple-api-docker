const express = require('express');
const app = express();

app.get('/hello/:name', (req, res) => {
	const hello = 'Hello';
	const { name } = req.params;
	res.send(`${hello} ${name}`);
});

app.listen(4500, () => console.log('Server running at http://localhost:4500'));