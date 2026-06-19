const router = require("express").Router();

const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");
const SecurityEventController = require("../controllers/securityEventController");

router.get("/", auth, role("admin"), SecurityEventController.getAll);

module.exports = router;