const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const productsRouter = require("./routes/products");
const usersRouter = require("./routes/users");
const postRouter = require("./routes/posts")

app.get("/", (req, res) => res.send("Hello World!"));
app.use("/products", productsRouter);
app.use("/users", usersRouter);
app.use("/posts", postRouter);

app.listen(port, () => console.log(`http://localhost:${port}`));
