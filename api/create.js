const Post = require('../mongoose-init').postModel;

module.exports = (req, res) => {
  var post = new Post({
    id: req.query.id,
    title: req.query.title,
    author: req.query.author,
    thumbnail: req.query.thumbnail,
    description: req.query.description,
    tag: req.query.tag,
    minRead: req.query.minRead
  });
  post.save((err) => {
    if (err) return console.error(err);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).send('Created');
  });
};
