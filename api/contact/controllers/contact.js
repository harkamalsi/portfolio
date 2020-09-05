"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

// Send an email to me about the contact initiation by a stranger
/* strapi.services.contact.send(
  data.userEmail,
  data.userName,
  data.subject,
  data.message
); */

const { parseMultipartData, sanitizeEntity } = require("strapi-utils");
module.exports = {
  /**
   * Create a record.
   *
   * @return {Object}
   */

  async create(ctx) {
    let entity;
    if (ctx.is("multipart")) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.contact.create(data, { files });
      strapi.services.contact.send(
        entity.email,
        entity.name,
        entity.subject,
        entity.message
      );
    } else {
      entity = await strapi.services.contact.create(ctx.request.body);
      strapi.services.contact.send(
        entity.email,
        entity.name,
        entity.subject,
        entity.message
      );
    }
    return sanitizeEntity(entity, { model: strapi.models.contact });
  },
};
