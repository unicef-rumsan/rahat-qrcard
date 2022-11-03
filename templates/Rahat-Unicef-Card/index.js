module.exports = {
  fonts: {
    Poppins: {
      normal: __dirname + "/Poppins-Regular.ttf",
      bold: __dirname + "/Poppins-Bold.ttf"
    }
  },
  document: data => {
    const qrPosition = 270;
    const namePosition = 820;
    return {
      pageSize: {
        width: 765,
        height: "auto"
      },
      pageOrientation: "portrait",
      pageMargins: [0, 0, 0, 0],
      content: [
        {
          image: __dirname + `/bg.jpg`
          //fit: [600]
        },
        {
          alignment: "center",
          qr: `phone:${data.phone}?amount=${data.amount}`,
          fit: "430",
          absolutePosition: { x: 0, y: qrPosition }
        },
        {
          text: data.phone,
          font: "Poppins",
          alignment: "center",
          fontSize: 34,
          absolutePosition: { x: 0, y: qrPosition + 440 }
        },
        {
          text: data.name,
          font: "Poppins",
          alignment: "center",
          bold: true,
          fontSize: 44,
          absolutePosition: { x: 0, y: namePosition }
        },
        {
          text: data.ward,
          font: "Poppins",
          alignment: "center",
          fontSize: 22,
          absolutePosition: { x: 0, y: namePosition + 120 }
        },
        {
          text: data.address,
          font: "Poppins",
          alignment: "center",
          fontSize: 22,
          absolutePosition: { x: 0, y: namePosition + 72 }
        }
        // {
        //   text: `Thank you for donating blood at the Smart Blood Donation Drive
        //         organized on ${data.date}.
        //         You helped make a difference by supporting our
        //         smart city movement!`,
        //   font: "Poppins",
        //   bold: true,
        //   alignment: "center",
        //   color: "#A91F24",
        //   fontSize: 12,
        //   absolutePosition: { x: 0, y: 340 }
        // }
      ]
    };
  }
};
