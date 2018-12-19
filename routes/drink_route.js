const express = require(`express`);
const router = express.Router();
const DrinkController = require(`./../controllers/drinks_controller`);

router.get("/", DrinkController.index);

router.post("/", DrinkController.post);

router.delete("/:id", DrinkController.remove);

router.patch("/:id", DrinkController.update);

router.put("/:id", DrinkController.update);

module.exports = router;