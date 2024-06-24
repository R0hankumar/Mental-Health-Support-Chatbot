const express = require('express');
const bodyParser = require('body-parser');
const dialogflow = require('./dialogflow');

const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.post('/chat', async (req, res) => {
    const message = req.body.message;
    const response = await dialogflow.sendMessage(message);
    res.json(response);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
