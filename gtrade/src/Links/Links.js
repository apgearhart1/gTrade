// Create NewsAPI object with API key
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('f88adea34f584c2ba358c1ce0783eb78');

// Create empty array for storing URLs
let urlArray = [];

// Fetch data with News API
let newsArticles = newsapi.v2.everything({
    qinTitle: '+Apple',
    q: '+Apple',
    sortBy: 'relevancy',
    language: 'en'
});

// Get news articles Promise 
newsArticles.then(response => {
    for (let i = 0; i < response.articles.length; i++)
    {
        // Push URL strings onto array 
        urlArray.push(response.articles[i].url);
    }
    //console.log(urlArray);
  });

module.exports = urlArray;
