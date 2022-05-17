const fs = require("fs");
const util = require("util");

// This js condenses some common fs functions for use in our other files
const readFromFile = util.promisify(fs.readFile);

const writeToFile = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${destination}`)
  );

const readAndAppend = (content, file) => {
  fs.readFile(file, "utf8", (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);
      parsedData.push(content);
      writeToFile(file, parsedData);
    }
  });
};

const readAndDelete = (id, file) => {
  fs.readFile(file, "utf8", (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);
      const filteredData = parsedData.filter((note) => {
        return note.id !== id;
      });
      writeToFile(file, filteredData);
    }
  });
};

module.exports = { readFromFile, readAndAppend, readAndDelete };