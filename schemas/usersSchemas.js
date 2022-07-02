const joi = require('joi');

const fisrtNameUser = joi.string().alphanum().min(3).max(30);
const lastNameUser= joi.string().alphanum().min(3).max(30);
const passwordUser=joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'));
const tipodocUser=joi.string().min(3).max(30);
const docUser=joi.number().integer();
const ciudadUser=joi.string().min(3).max(30);
const emailUser= joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net','co','es'] } });
const rolUser=joi.string().min(3).max(30);
const imageUser=joi.string().uri();
const nacimientoUser=joi.date();


const createUserSchema=joi.object({
  fisrtNameUser:fisrtNameUser.required(),
  lastNameUser:lastNameUser.required(),
  passwordUser:passwordUser.required(),
  tipodocUser:tipodocUser.required(),
  docUser:docUser.required(),
  ciudadUser:ciudadUser.required(),
  emailUser:emailUser.required(),
  rolUser:rolUser.required(),
  imageUser:imageUser.required(),
  nacimientoUser:nacimientoUser.required()
});

const updateUserSchema=joi.object({
  docUser:docUser.required()
});

const getUserSchema=joi.object({
  docUser:docUser.required()
});

module.exports={createUserSchema,updateUserSchema,getUserSchema}
