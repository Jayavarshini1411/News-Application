const User = require('../models/User');

exports.saveArticle = async (req, res) => {
  const { userId, articleId } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.bookmarkedArticles.push(articleId);
    await user.save();
    res.status(200).json({ message: 'Article bookmarked' });
  } catch (err) {
    res.status(500).json({ message: 'Error saving article', error: err });
  }
};

exports.getBookmarkedArticles = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId).populate('bookmarkedArticles');
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json(user.bookmarkedArticles);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving bookmarked articles', error: err });
  }
};

