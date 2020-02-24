const Post = require('../mongoose-init').postModel;

module.exports = (req, res) => {
  Post.deleteOne({ id: req.query.id }, (err) => {
    if (err) return console.error(err);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).send('Deleted');
  });
  }
};
