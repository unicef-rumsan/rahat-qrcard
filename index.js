const { GoogleSpreadsheet } = require("google-spreadsheet");

const cardTemplate = require("./templates/Rahat-Unicef-Card");
const PDFMaker = require("./PDFMaker");

const credsPath = "./config/google.json";
const docId = "1PCy4JHYMSgzH3uEklRHGRpeeAC2kFWSJm11l3f4yTD8";

const createFromGSheet = async () => {
  const doc = new GoogleSpreadsheet(docId);
  await doc.useServiceAccountAuth(require(credsPath));
  await doc.loadInfo();

  const sheet = doc.sheetsByIndex[0];
  const rows = await sheet.getRows();
  rows
    .filter(r => r.is_generated === "FALSE" && r.phone)
    .forEach(async r => {
      console.log(">", r.name);
      let amount = 0;
      try {
        amount = parseInt(r.amount);
      } catch (e) { }
      amount = amount || 0;
      PDFMaker(
        {
          fileName: r.name + " - " + r.phone,
          phone: r.phone,
          amount,
          name: r.name,
          ward: "j8f g= M " + r.ward,
          address: r.address
        },
        cardTemplate
      );
      r.is_generated = "TRUE";
      r.save();
      await new Promise(resolve => setTimeout(resolve, 1000));
    });
  console.log("----done-----");
};

const createSingle = data => {
  PDFMaker(data, cardTemplate);
  console.log("----done-----");
};

// createSingle({
//   name: "Santosh Shrestha",
//   phone: "9801109670",
//   ward: "Ward# 1",
//   address: "Jaleshwor, Janakpur"
// });

createFromGSheet();
