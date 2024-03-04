const axios = require("axios");
const { access } = require("fs");
const fs = require("fs");
const { processPdfFile } = require("./pdf-excel");

function downloadFile(token) {
  var folder_id = "";
  let apiLink =
    "https://www.zohoapis.com/workdrive/api/v1/files/"+folder_id+"/files?page%5Blimit%5D=1";
  axios({
    method: "get",
    url: apiLink,
    headers: {
      Accept: "*/*",
      Authorization: "Bearer " + token,
      "Accept-Encoding": "gzip, deflate, br",
      Connection: "Keep-Alive",
    },
  })
    .then((response) => {
      file_id = response.data.data[0].id;
      axios({
        method: "get",
        url: "https://download.zoho.com/v1/workdrive/download/" + file_id,
        headers: {
          Accept: "*/*",
          Authorization: "Bearer " + token,
          "Accept-Encoding": "gzip, deflate, br",
          Connection: "Keep-Alive",
        },
        responseType: "arraybuffer",
      }).then((response) => {
        const data = response.data;
        processPdfFile(data);
      });
    })
    .catch((error) => {
      console.error(error);
    });
}

module.exports = { downloadFile };
