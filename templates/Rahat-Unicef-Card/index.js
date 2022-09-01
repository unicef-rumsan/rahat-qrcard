module.exports = {
  fonts: {
    Poppins: {
      normal: __dirname + "/Poppins-Regular.ttf",
      bold: __dirname + "/Poppins-Bold.ttf"
    }
  },
  document: data => {
    const qrPosition = 300;
    const namePosition = 800;
    return {
      pageSize: {
        width: 760,
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
          qr: data.phone,
          fit: "380",
          absolutePosition: { x: 0, y: qrPosition }
        },
        {
          text: data.phone,
          font: "Poppins",
          alignment: "center",
          fontSize: 28,
          absolutePosition: { x: 0, y: qrPosition + 400 }
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
          absolutePosition: { x: 0, y: namePosition + 62 }
        },
        {
          text: data.address,
          font: "Poppins",
          alignment: "center",
          fontSize: 22,
          absolutePosition: { x: 0, y: namePosition + 120 }
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
