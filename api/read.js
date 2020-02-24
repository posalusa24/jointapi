const Post = require('../mongoose-init').postModel;

module.exports = (req, res) => {
  Post.find((err, posts) => {
    if (err) return console.error(err);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).send(posts);
  });
};
