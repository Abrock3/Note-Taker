const express = require("express");
const app = express();
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');
// can be set to the value of the environmental variable PORT, or to 3001 if that is undefined
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// uses imported routes from the "/routes" folder to direct the client's requests
app.use("/api", apiRoutes);
app.use("/", htmlRoutes)

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
