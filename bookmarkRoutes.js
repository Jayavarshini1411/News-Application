const express = require('express');
const { saveArticle, getBookmarkedArticles } = require('../controllers/bookmarkController');
const router = express.Router();

router.post('/bookmark', saveArticle);
router.get('/bookmarks/:userId', getBookmarkedArticles);

module.exports = router;
