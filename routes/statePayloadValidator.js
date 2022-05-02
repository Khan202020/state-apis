const expressValidator = require("express-validator");
const { body, param, query } = expressValidator;

let getContigStatePayloadValidation = [query("contig").exists()];
let getSpecStatePayloadValidation = [param("state").exists()];

let getStateAttrValidation = [param("state").exists()];

let createFunfactsloadValidation = [
  param("state").exists(),
  body("funfacts")
    .notEmpty()
    .withMessage("Funfacts must be present")
    .isArray()
    .withMessage("Value must be Array Type"),
];

let updateFunfactsloadValidation = [
  param("state").exists(),
  body("index")
    .notEmpty()
    .withMessage("Index must be present")
    .isNumeric()
    .withMessage("Value must be Numeric Type"),
  body("funfacts")
    .notEmpty()
    .withMessage("Funfacts must be present")
    .isString()
    .withMessage("Value must be String Type"),
];

let deleteFunfactsloadValidation = [
  param("state").exists(),
  body("index")
    .notEmpty()
    .withMessage("Index must be present")
    .isNumeric()
    .withMessage("Value must be Numeric Type"),
];

module.exports = {
  getContigStatePayloadValidation,
  getSpecStatePayloadValidation,
  getStateAttrValidation,
  createFunfactsloadValidation,
  updateFunfactsloadValidation,
  deleteFunfactsloadValidation,
};
