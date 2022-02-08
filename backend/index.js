const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello world')
});

app.get('/api/posts', (req, res) => {
    res.send(['aqui van los posts'])
});


const PORT = 3001
app.listen(PORT)
console.log(`Server runnning on port ${PORT}`)