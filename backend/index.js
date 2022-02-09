const express = require('express');
const app = express();
const cors = require("cors");

app.get('/', (req, res) => {
    res.send('Hello world')
});

// app.get('/api/posts', (req, res) => {
//     res.send(['aqui van los posts'])
// });

/* MIDDLEWARES */
app.use(express.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization, 'Content-Type' : 'multipart/form-data' ,* "
    );
    res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
});
app.use(cors());

/* ROUTER */
app.use("/api", require("./routes/post_routes"));

/* CORS  */
// app.all("/", function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     next();
// });

const PORT = 3001;
app.listen(PORT);
console.log(`Server runnning on port ${PORT}`);