const express = require('express');
const app = express();
const cors = require("cors");

/* MIDDLEWARES */
app.use(express.json());
app.use(cors());
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept, Authorization, 'Content-Type' : 'multipart/form-data' ,* "
//     );
//     res.header(
//         "Access-Control-Allow-Methods",
//         "GET, POST, PATCH, PUT, DELETE, OPTIONS"
//     );
//     next();
// });


/* ROUTER */
app.use("/api", require("./routes/post_routes"));


const PORT = 3001;
app.listen(PORT);
console.log(`Server runnning on port ${PORT}`);