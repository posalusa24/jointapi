const Post = require('../mongoose-init').postModel;

module.exports = (req, res) => {
  /*Post.updateOne({ id: req.query.id }, {
    id: req.query.id,
    title: req.query.title,
    author: req.query.author,
    thumbnail: req.query.thumbnail,
    description: req.query.description,
    tag: req.query.tag,
  }, (err) => {
    if (err) return console.error(err);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).send('Updated');
  });*/
  Post.findOne({ id: req.query.id }, async (err, post) => {
    post.title = req.query.title || post.title;
    post.author = req.query.author || post.author;
    post.thumbnail = req.query.thumbnail || post.thumbnail;
    post.description = req.query.description || post.description;
    post.favouriate = req.query.favouriate || post.favouriate;
    post.tag = req.query.tag || post.tag;
    post.minRead = req.query.minRead || post.minRead;
    await post.save();
  });
};
