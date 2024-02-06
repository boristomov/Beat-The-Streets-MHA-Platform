import fs from "fs";

// Helper Functions
function readUserData() {
  var currData = JSON.parse(fs.readFileSync("database/currentSessionData.json"));
  console.log(JSON.stringify(currData))
  return currData;
}
function writeUserData(currData) {
  clearUserData()
  fs.writeFile("database/currentSessionData.json", JSON.stringify(currData), (error) => {
    if (error) {
      console.error(error);
      throw error;
    }
  });
}

// Main Functions
export function newUser(user) {
  clearUserData()
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
function clearUserData() {
  // Write an empty JSON object to the file
  fs.writeFileSync("database/currentSessionData.json", "{}");
}

export function updateAssessmentData(userData, data) {
  
  
  var newData = readUserData();
  // Update the assessment data for the specified user
  newData[userData.username] = {
    username: userData.username,
    assessmentData: [data]  // Overwrite the existing assessment data with new data
  };

  // Write the updated data back to the file
  writeUserData(newData);
}
