const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello world')
});

// app.get('/api/posts', (req, res) => {
//     res.send(['aqui van los posts'])
// });

/* MIDDLEWARES */
app.use(express.json());

/* ROUTER */
app.use("/api", require("./routes/post_routes"));

const PORT = 3001;
app.listen(PORT);
console.log(`Server runnning on port ${PORT}`);