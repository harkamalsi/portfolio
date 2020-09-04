"use strict";
require("dotenv").config({ path: "../../../.env" });
const mailjet = require("node-mailjet").connect(
  process.env.MAILJET_API_KEY1,
  process.env.MAILJET_API_KEY2
);

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {
  send: (userEmail, userName, subject, message) => {
    return mailjet
      .post("send", { version: "v3.1" })
      .request({
        Messages: [
          {
            From: {
              Email: process.env.PERSONAL_Gmail,
              Name: "From Portfolio",
            },
            To: [
              {
                Email: process.env.PERSONAL_EMAIL,
              },
            ],
            Subject: subject,
            TextPart: `${userName} /--/ ${userEmail} /--/ ${message}`,
            HTMLPart:
              `<h3>Stranger name:</h3> ${userName}` +
              "<br>" +
              `<h3>Stranger email:</h3> ${userEmail}` +
              "<br>" +
              `<h3>Subject:</h3> ${subject}` +
              "<br>" +
              `<h3>Message:</h3> ${message}`,
          },
        ],
      })
      .catch((err) => {});
  },
};
