const axios = require('axios');

exports.getNews = async (req, res) => {
  try {
    const { category } = req.query;  // e.g., 'technology'
    const response = await axios.get('https://newsapi.org/v2/top-headlines', {
      params: {
        category: category || 'general',
        apiKey: process.env.NEWS_API_KEY,
      },
    });
    res.json(response.data.articles);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching news', error: err });
  }
};
