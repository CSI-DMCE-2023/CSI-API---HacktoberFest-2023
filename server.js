const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const productsRouter = require("./routes/products");
const userRouter = require("./routes/user");

app.get("/", (req, res) => res.send("Hello World!"));
app.use("/", productsRouter);
app.use("/", userRouter);

app.listen(port, () => console.log(`http://localhost:${port}`));
