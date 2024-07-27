const express = require("express");
const cors = require("cors");
const app = express();
const portfolioContact = require("./routes/portfolioContact");
require("./conn/conn");
app.use(express.json());
app.use(cors());

app.use("/api/v1", portfolioContact);

app.listen("1000", () => {
    console.log("Server Started at port 1000");
});