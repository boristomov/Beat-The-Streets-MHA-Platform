import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import { newUser, getUserData, updateTokens, updateAssessmentData } from "./database.mjs";

const PORT = 5050;
const app = express();
app.use(cors());
var jsonParser = bodyParser.json()

// POST: Login
app.post("/auth", jsonParser, (req, res) => {
  const user = req.body;
  newUser(user);

  const token = `${user.username}_${user.password}_test`;
  updateTokens(user, token)

  res.send({
    token: token
  });
});

// POST: Get User Data
app.post("/get_user_data", jsonParser, (req, res) => {
  const { token } = req.body;
  const userData = getUserData(token);

  res.send(userData);
});

// POST: Saving Assessment Data
app.post("/submit_assessment_data", jsonParser, (req, res) => {
  const { token, data } = req.body;
  const userData = getUserData(token);
  updateAssessmentData(userData, data);
});


// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
