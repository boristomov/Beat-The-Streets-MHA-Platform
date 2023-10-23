import fs from "fs";

// Helper Functions
function readUserData() {
  var currData = JSON.parse(fs.readFileSync("database/userData.json"));
  return currData;
}
function writeUserData(currData) {
  fs.writeFile("database/userData.json", JSON.stringify(currData), (error) => {
    if (error) {
      console.error(error);
      throw error;
    }
  });
}

// Main Functions
export function newUser(user) {
  var currData = readUserData();
  if (!currData.hasOwnProperty(`${user.username}`)) {
    currData[`${user.username}`] = { username: user.username, assessmentData: [] };
  }
  writeUserData(currData);
}

export function getUserData(token) {
  const tokenData = JSON.parse(fs.readFileSync("database/tokens.json"));
  const username = tokenData.tokenKey[`${token}`];
  const userData = readUserData();
  return userData[username];
}

export function updateTokens(user, token) {
  const currData = JSON.parse(fs.readFileSync("database/tokens.json"));
  const userKey = currData.userKey;
  const tokenKey = currData.tokenKey;
  userKey[`${user.username}`] = token;
  tokenKey[`${token}`] = user.username;
  fs.writeFile("database/tokens.json", JSON.stringify(currData), (error) => {
    if (error) {
      console.error(error);
      throw error;
    }
  });
}

export function updateAssessmentData(userData, data) {
  var currData = readUserData();
  var assessmentData = currData[`${userData.username}`].assessmentData;
  assessmentData.push(data);
  writeUserData(currData);
}
