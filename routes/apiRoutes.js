const router = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const {
  readFromFile,
  readAndAppend,
  readAndDelete,
} = require("../helpers/fsUtils");

// this uses a function defined in a helper js to fetch the contents of a json file when requested
router.get("/notes", (req, res) => {
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

// this uses a function defined in a helper js to add a new entry to a json file when requested, complete with a unique id attribute
router.post("/notes", (req, res) => {
  const newNote = req.body;
  newNote.id = uuidv4();
  readAndAppend(newNote, "./db/db.json");
  res.json(newNote);
});

// this uses a function defined in a helper js to delete an entry by using a unique ID defined at the creation of the entry
router.delete("/notes/:id", (req, res) => {
readAndDelete(req.params.id, "./db/db.json");
  res.json({ ok: true });
});

module.exports = router;
