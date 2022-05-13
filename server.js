const express = require("express");
const path = require("path");
const fs = require("fs");
const uuid = require("./helpers/uuid");
const PORT = 3001; //need to convert make this switch based on who's accessing it

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

// TODO: GET request for notes page

// TODO: GET request for notes

// TODO: POST request for notes

// TODO: UPDATE? request for notes

// // TODO: DELETE request for notes



app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);