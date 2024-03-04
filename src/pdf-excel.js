const fs = require("fs");
const pdf2table = require("pdf2table");
// const { createOrderAndDeal } = require("./store-data.js");

function processPdfFile(data) {

  pdf2table.parse(data, function (err, rows) {
    console.log()
    if (err) return console.log(err);

    // Get the first 6 rows
    const firstRows = rows.slice(0, 6);

    // Get the last 2 rows
    const lastRows = rows.slice(-2);

    // Combine the first 6 rows and the last 2 rows
    const selectedRows = [...firstRows, ...lastRows];

    // Define the headers and their corresponding data
    const headers = selectedRows[0].map(
      (header, index) => `Column${index + 1}`
    );
    const dataRows = selectedRows.slice(1).map((row) => {
      const rowData = {};
      row.forEach((cell, index) => {
        // Handle cases where there are more columns in the data rows than in the headers
        const key = headers[index] || `Column${index + 1}`;
        rowData[key] = cell;
      });
      return rowData;
    });

    // Transform the first 2 rows into the specified format
    const firstRow1 = dataRows[0];
    const firstRow2 = dataRows[1];
    const transformedFirstRows = {
      Commande_par: `${firstRow1["Column1"]} ${firstRow1["Column2"]}`,
      Livre_a: `${firstRow1["Column3"]} ${firstRow1["Column4"]}`,
      Commande_a: firstRow2["Column5"],
    };

    // Transform the last two rows into the specified format
    const lastRow2 = dataRows[dataRows.length - 1];
    const transformedLastRows = {
      No_commande: lastRow2["Column1"],
      Date_commande: `${lastRow2["Column2"]} ${lastRow2["Column3"]}`,
      Code_fournisseur: lastRow2["Column4"],
      Contrat_commercial: lastRow2["Column5"],
      Filiere: lastRow2["Column6"],
      Etat_commande: `${lastRow2["Column7"]} ${lastRow2["Column8"]}`,
    };
    // createOrderAndDeal(transformedLastRows, transformedFirstRows);
    console.log(transformedFirstRows);
    console.log(transformedLastRows);
  });
  // });
}

module.exports = { processPdfFile };
