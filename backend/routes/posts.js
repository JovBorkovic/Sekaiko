const express = require("express");

const checkAuth = require("../middleware/check-auth");
const multer = require("multer");

const PostsController = require("../controllers/posts");

const router = express.Router();


router.post(
  "",
  checkAuth,
  multer({ dest: "backend/images" }).single("image"),
  PostsController.createPost
);

router.put(
  "/:id",
  checkAuth,
  multer({ dest: "backend/images" }).single("image"),
  PostsController.updatePost
);

router.get("",  PostsController.getPosts);

router.get("/:id", PostsController.getPost);

router.delete("/:id", checkAuth, PostsController.deletePost);

module.exports = router;
