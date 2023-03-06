require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: "ngoakor12@gmail.com",
    pass: process.env.MAIL_APP_PASSWORD,
  },
});

async function checkConnectionToMailServer() {
  await transporter.verify();
}

// const mailOptions = {
//   from: '"Your Name" <youremail@gmail.com>', // sender address
//   to: "ngoakor12@gmail.com, ngoako.ramokgopa@umuzi.org", // list of receivers
//   subject: "Medium @edigleyssonsilva ✔", // Subject line
//   text: "There is a new article. It's about sending emails, check it out!", // plain text body
//   html: "<b>Hello! There is a new article. It's about sending emails, check it out!</b>", // html body
// };
async function sendEmail(mailOptions) {
  try {
    checkConnectionToMailServer();
  } catch (error) {
    console.error(
      "Something went wrong while connecting to mail server",
      error
    );
  }

  try {
    const result = await transporter.sendMail(mailOptions);
    return result;
  } catch (error) {
    console.error("Something went wrong while sending email", error);
  }
}

module.exports = { sendEmail };
