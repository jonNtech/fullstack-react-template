const express = require("express");
const router = express.Router();
const upload = require("../middleware/multerMiddleware");
const postsController = require("../controllers/postsController");
const { ensureAuth, ensureGuest } = require("../middleware/authMiddleware");

//Post Routes - simplified for now
router.get("/:id", ensureAuth, postsController.getPost);

router.post("/createPost", upload.single("file"), postsController.createPost);

router.put("/likePost/:id", postsController.likePost);

router.delete("/deletePost/:id", postsController.deletePost);

module.exports = router;
