const PDFMake = require("pdfmake");
const sanitize = require("sanitize-filename");
const fs = require("fs");

module.exports = (data, config) => {
  const printer = new PDFMake(config.fonts);
  let document = config.document(data);

  const pdfDoc = printer.createPdfKitDocument(document);

  let docName = data.fileName || data.name || "document";
  docName = sanitize(docName);
  const output = data.output || `./output/${docName}.pdf`;
  pdfDoc.pipe(fs.createWriteStream(output));
  //pdfDoc.pipe(sendEmail(output, data));
  pdfDoc.end();
};

// const AWS = require("aws-sdk");
// const { PassThrough } = require("stream");
// var nodemailer = require("nodemailer");

// const sendEmail = (outputCfg, data) => {
//   AWS.config.update({
//     accessKeyId: outputCfg.aws3.accessKeyId,
//     secretAccessKey: outputCfg.aws3.secretAccessKey,
//     region: outputCfg.aws3.region
//   });

//   var ses = new AWS.SES();

//   const doc = new PassThrough();

//   var mailOptions = {
//     from: "thankyou@hamrolifebank.com",
//     subject: "This is an email sent from a Lambda function!",
//     html: `<p>You got a contact message from: <b>sss</b></p>`,
//     to: "santosh@rumsan.com",
//     attachments: [
//       {
//         filename: "certificate.pdf",
//         content: doc
//       }
//     ]
//   };

//   // create Nodemailer SES transporter
//   var transporter = nodemailer.createTransport({
//     SES: ses
//   });

//   // send email
//   transporter.sendMail(mailOptions, function(err, info) {
//     if (err) {
//       console.log("Error sending email");
//       console.log(err);
//     } else {
//       console.log("Email sent successfully");
//     }
//   });

//   return doc;
// };
