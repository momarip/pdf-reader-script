const axios = require("axios");
const fs = require("fs");
const { downloadFile } = require("./download-pdf");

let header = new Map();
header.set("Accept", "*/*");
var client_id = "";
var client_secret = "";
var refresh_token = "";
function getAccessToken() {
return axios({
  method: "POST",
  url: "https://accounts.zoho.com/oauth/v2/token",
  headers: header,
  params: {
    client_id: client_id,
    client_secret: client_secret,
    refresh_token:refresh_token,
    grant_type: "refresh_token",
  },
})
  .then((response) => {
    console.log("Refreshed access token");
    return response.data.access_token;
  })
  .catch((error) => {
    console.error("Error refreshing access token:", error);
    throw error;
  });
}


let accessToken;


function firstFile() {
  if (!accessToken) {
      return getAccessToken().then(token => {
          accessToken = token;
          downloadFile(accessToken);
      });
  } else {
    downloadFile(accessToken);
  }
}

firstFile(accessToken);