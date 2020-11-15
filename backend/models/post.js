const mongoose = require('mongoose');
const postSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  imagePath: {type: String, required: true},
  //Mongoose Types ObjectId this is what the id will be trested as in mongoose, relates to the ref property {User} Model
  creator: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true}
});

module.exports = mongoose.model('Post', postSchema);
