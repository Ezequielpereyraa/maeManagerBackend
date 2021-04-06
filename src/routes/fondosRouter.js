const {
  getFondos,
  postFondos,
  deleteDocuments,
} = require("../controllers/fondosControllers");

const router = require("express").Router();

router.get("/", getFondos);
router.post("/", postFondos);
router.delete("/", deleteDocuments);

module.exports = router;
