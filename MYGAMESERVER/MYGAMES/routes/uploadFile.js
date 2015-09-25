var express = require('express');
var router = express.Router();
var multer  = require('multer')
var upload = multer(constant.UploadPath)
var collection = new response.mongoDB.createObj(require('monk')(constant.mongodb),constant.userTables);

router.get('/', function(req, res, next) {
	//"/uploadFile"
  response.requestPage.renderPage(res,constant.fileUsageView,constant.rok, {"userlist" : "nul"});
});
router.get('/api', function(req, res, next) {
	//"/uploadFile"
  response.mongoDB.fetchData(collection,{},{},function(result){        
		 response.requestPage.apiPage(res,constant.rok, {"userlist" : result.data}); 
    });
});

var type = upload.single('fileName');
var cpUpload = upload.fields([{ name: 'fileName', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])

router.post('/newfile', cpUpload,function(req, res){
    console.log(req.body) // form fields
    console.log(req.files) // form files
    res.status(204).end()
});
module.exports = router;
