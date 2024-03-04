// import ZCRMRestClient from "zcrmsdk";
const axios = require("axios");

export function createOrderAndDeal(orderInfo, dealInfo, token) {
  let apiLink = "https://zohoapis.com/crm/v6/Biens";

  axios({
    method: "post",
    url: apiLink,
    headers: {
      Accept: "*/*",
      Authorization: "Bearer " + token,
      "Accept-Encoding": "gzip, deflate, br",
      Connection: "Keep-Alive",
    },
    data: {
      data: [
        {
          Montant_TVA: orderInfo["No_commande"],
          Name: orderInfo["Code_fournisseur"],
          Etage: orderInfo["Filiere"],
          Localisation: dealInfo["Livre_a"],
        },
      ],
    },
  }).then(function (response) {
    console.log(response);
  });
}
