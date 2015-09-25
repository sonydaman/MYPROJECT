var response =
{
"requestPage":
				{
				"renderPage" : function(res,page,number,data){
													//console.log(typeof(number));
													
													res.status(number).render(page,data)
													},
				"revokePage" : function(res,number,data){
													res.status(number).send(data).end()
													},
				"redirectPage" : function(res,page){
													res.redirect(page);
													},
				"apiPage" : function(res,number,data){
													res.status(number).json(data).end()
													},
				
				},
"mongoDB"	:
				{
					"createObj" :function(db,table){return db.get(table);},
					"fetchData" :function(obj,insertObj,option,next)
														{
												
												obj.find(insertObj,option,function(e,docs){
												if(e) {
									console.log(e);
									var res = {"status":false,msg:"cannot Get data from table of",error:e,
												'table':constant.userTables,"type":"mongoDB=>fetchData",}
													response.ErrorLogs.writeLogs(constant.logFile,res)
													next(res);
														}
															else
																next({"status":true,data:docs,msg:"Sucess"});
														delete res;
															});
														},
					"insertData":function(obj,data,options,next){
																obj.obj.insert(data,options, function (err, doc) {
																			if (err) {
								var res ={"status":false,msg:"There was a problem adding the information to the database.",
											'table':constant.userTables,"type":"mongoDB=>insertData"};
													response.ErrorLogs.writeLogs(constant.logFile,res);
														// If it failed, return error
														next(res);
																			}
																			else {
																				// And forward to success page
																				next({"status":true,data:doc,msg:"Sucess"});
																			}
																		});
							
													},
				},
"ErrorLogs"	:	{
					"readLogs"	:	function(fileName){console.info(fileName);},
					"writeLogs"	:	function(fileName,data){
						var l ="\n======="+constant.error+"==========\n";
						data["time"] =new Date();
						var k = l+JSON.stringify(data)+l;
					constant.fileFun.appendFile(fileName,k , function (err,data) {
										
								});
							},
				},
"printStack":
				function(){
					var orig = Error.prepareStackTrace;
					Error.prepareStackTrace = function(_, stack){ return stack; };
					var err = new Error;
					Error.captureStackTrace(err, arguments.callee);
					var stack = err.stack;
					Error.prepareStackTrace = orig;
					return stack;
				  },
"line":
				function(){
					return response.printStack[1].getLineNumber();
				  }
				
				
}

module.exports = response;