import Joi from 'joi';

export const snippetSchema = Joi.object({
  name: Joi.string().min(1).max(30),
  textEditor: Joi.any().required(),
});
