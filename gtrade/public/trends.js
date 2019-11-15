const googleTrends = require('google-trends-api');

googleTrends.interestOverTime({keyword: 'Apple'})
.then(function(results){
  console.log('Results found: ', results);
})
.catch(function(err){
  console.error('ERROR: ', err);
});
