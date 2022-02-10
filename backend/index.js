const express = require('express');
const app = express();
const cors = require("cors");

/* MIDDLEWARES */
app.use(express.json());
app.use(cors());


/* ROUTER */
app.use("/api", require("./routes/post_routes"));


const PORT = 3001;
app.listen(PORT);
console.log(`Server runnning on port ${PORT}`);