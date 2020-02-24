const mongoose = require('mongoose');

const DB_NAME = "jointapi";
const MONGODB_URI = process.env.MONGO_URL + "/" + DB_NAME + "?retryWrites=true&w=majority";

mongoose.connect(MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true});

exports.postModel = mongoose.model('Post', {
  id: Number,
  title: String,
  author: String,
  thumbnail: String,
  description: String,
  favouriate: { type: Boolean, default: false },
  tag: String,
  minRead: { type: Number, default: null }
});
