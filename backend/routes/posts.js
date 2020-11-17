const express = require("express");

const checkAuth = require("../middleware/check-auth");
const fileUpload = require("../middleware/file");

const PostsController = require("../controllers/posts");

const router = express.Router();


router.post(
  "",
  checkAuth,
  fileUpload,
  PostsController.createPost
);

router.put(
  "/:id",
  checkAuth,
  fileUpload,
  PostsController.updatePost
);

router.get("",  PostsController.getPosts);

router.get("/:id", PostsController.getCreatorsPosts)

router.get("/:id", PostsController.getPost);

router.delete("/:id", checkAuth, PostsController.deletePost);

module.exports = router;
