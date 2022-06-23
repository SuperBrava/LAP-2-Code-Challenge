const express = require("express");
const cors = require("cors");

const server = express();
server.use(cors());
server.use(express.json());

const postsRoutes = require("./routes/posts");

server.use("/posts", postsRoutes);

server.get("/", (req, res) => res.send("Hello there!"));

module.exports = server;
