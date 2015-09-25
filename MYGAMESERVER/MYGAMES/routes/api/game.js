var express = require('express');
var router = express.Router();
var collection = new response.mongoDB.createObj(require('monk')(constant.mongodb),constant.gameTables);

router.get('/api', function(req, res, next) {
	//	gameList
  response.mongoDB.fetchData(collection,{},{},function(result){        
		 response.requestPage.apiPage(res,constant.rok, {"gameList" : result.data}); 
    });
});


module.exports = router;
