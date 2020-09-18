import Joi from "@hapi/joi";

export const eventSchema = Joi.object({
  title: Joi.string().min(3).required(),
  location: Joi.string().min(3).required(),
  participant: Joi.string().min(3).required(),
  note: Joi.string().min(50).required()
});