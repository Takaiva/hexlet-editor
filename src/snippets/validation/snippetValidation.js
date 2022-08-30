import Joi from 'joi';

export const snippetSchema = Joi.object({
  name: Joi.string().alphanum().min(1).max(30).required(),
  textEditor: Joi.any().required(),
}).with('name', 'textEditor');
