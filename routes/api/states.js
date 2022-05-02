const express = require("express");
const router = express.Router();
const stateController = require("../../controllers/stateController");
const {
  getContigStatePayloadValidation,
  getSpecStatePayloadValidation,
  getStateAttrValidation,
  createFunfactsloadValidation,
  updateFunfactsloadValidation,
  deleteFunfactsloadValidation,
} = require("../statePayloadValidator");

const { requestValidation } = require("../../middleware/validationRequst");

router
  .get(
    "/:state",
    getSpecStatePayloadValidation,
    requestValidation,
    stateController.getSpecificState
  )
  // .get(
  //   "/:contig?",
  //   getContigStatePayloadValidation,
  //   requestValidation,
  //   stateController.getContgOrNonContgStates
  // )
  // .get("/", stateController.getAllStates)
  .get("/:state/funfact", stateController.getAllStates)
  .get(
    "/:state/capital",
    getStateAttrValidation,
    requestValidation,
    stateController.getStateCapital
  )
  .get(
    "/:state/nickname",
    getStateAttrValidation,
    requestValidation,
    stateController.getStateNickName
  )
  .get(
    "/:state/population",
    getStateAttrValidation,
    requestValidation,
    stateController.getStatePopulation
  )
  .get(
    "/:state/admission",
    getStateAttrValidation,
    requestValidation,
    stateController.getStateAdmissionDate
  );

router.post(
  "/:state/funfact",
  createFunfactsloadValidation,
  requestValidation,
  stateController.createFunFact
);
router.patch(
  "/:state/funfact",
  updateFunfactsloadValidation,
  requestValidation,
  stateController.updateFunFact
);
router.delete(
  "/:state/funfact",
  deleteFunfactsloadValidation,
  requestValidation,
  stateController.deleteFunFact
);

module.exports = router;
