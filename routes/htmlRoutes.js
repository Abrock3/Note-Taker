const path = require("path");
const router = require("express").Router();

// directs the user to notes.html when the relative path /notes is used
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// directs the user to the home page index.html when any relative path aside from /notes is used
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;
