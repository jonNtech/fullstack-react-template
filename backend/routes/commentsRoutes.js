const express = require("express");
const router = express.Router();
const commentsController = require("../controllers/commentsController");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now

router.post("/createComment/:id", commentsController.createComment);

module.exports = router;
