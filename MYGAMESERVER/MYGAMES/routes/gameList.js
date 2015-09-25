var express = require('express');
var router = express.Router();
//var collection = new response.mongoDB.createObj(require('monk')(constant.mongodb),constant.allGame);

/* GET users listing. */
router.get('/', function(req, res, next) {
  var collection = req.db.get(constant.allGame)  
	response.mongoDB.fetchData(collection,{},{},function(result){        
		console.log(result)
		 response.requestPage.renderPage(res,constant.gamesView,constant.rok, {"games" : result.data}); 
    });
});
// ALL USERS INFORMATION
router.get(constant.gamesUrl, function(req, res) {
	//FETCH DATA FROM "gameList" TABLE
	var collection = req.db.get(constant.allGame)  
	response.mongoDB.fetchData(collection,{},{},function(result){        
		console.log(result)
		 response.requestPage.renderPage(res,constant.gamesView,constant.rok, {"games" : result.data}); 
    });
	
});

// /newuser rendering page
router.get(constant.newUserRouts, function(req, res) {
	response.requestPage.renderPage(res,constant.newuserView,constant.rok, { title: 'Add New User' }); 
    });

// /adduser in the database
router.post(constant.addUserRoutes, function(req, res) {

    // Get our form values. These rely on the "name" attributes
    var userName = req.body.username;
    var userEmail = req.body.useremail;

    // Set our collection
    
	response.mongoDB.insertData(collection,{"username" : userName,"email" : userEmail},{},
						function(result)
								{  		
										 response.requestPage.redirectPage(res,constant.usersView);
										
								});
    
});



module.exports = router;
