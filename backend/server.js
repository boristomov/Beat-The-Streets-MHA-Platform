const express = require("express");
const cors = require("cors");

const PORT = 5050;
const app = express();
app.use(cors());

app.use("/login", (req, res) => {
  res.send({
    token: "test12345",
  });
});

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
