// const bodyParser = require("body-parser");
const express = require("express");

const STATUS_USER_ERROR = 422;

// This array of posts persists in memory across requests. Feel free
// to change this to a let binding if you need to reassign it.
const posts = [];
const id = 1;
const server = express();
// to enable parsing of json bodies for post requests
server.use(express.json());
// TODO: your code to handle requests

server.post('/posts', (req, res) => {
    const { author, title, contents } = req.body;

    if (author && title && contents) {
      const post = {
        author, title, contents, id: id++ 
      };
      posts.push(post);
      res.status(200).json(post);
    } else {
        res.status(STATUS_USER_ERROR).json({error: "No se recibieron los parámetros necesarios para crear el Post"});
      }
});

server.post('/posts/author/:author:', (req, res) => {
  const { author } = req.params;
  const { title, contents } = req.body;

  if (author && title && contents) {
    const postAuthor = {
      author, title, contents, id: id++
    };
    posts.push(postAuthor);
    res.status(200).json(postAuthor);
  } else {
      res.status(STATUS_USER_ERROR).json({error: "No se recibieron los parámetros necesarios para crear el Post"});
    } 
});

module.exports = { posts, server };
