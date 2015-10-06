module.exports = function(){
	return{
// DB INFORMATION
"mongodb"		:	"localhost:27017/gamification",
// TABLE LIST
"allUser"		:	"userList",
"allGame"		:	"gameList",
"allLevel"		:	"gameLevel",
"allType"		:	"gameType",
"allQns"		:	"qnsList",
// USERS INFORMATION
"userPage"		:	'./routes/users',
"userApp"		:	'/users',
"usersUrl"		:	'/userlist',
"usersView"		:	'userlist',

// NEW USER INFORMATION
"newUserRouts"	:	'/newuser',
"newuserView"	:	'newuser',
// ADD USERINFORMATOION
"addUserRoutes"	:	'/adduser',

//INDEX PAGE
"LandingPage"	:	'./routes/index',
// FOR LOGS
"logFile"		:	'./logs/game.log',

"error" : "GETTING ERROR",


//FILE UPLOADING INFORMATION
"fileUsageRoutes"		:	"./routes/uploadFile", 
"fileApp"				:	"/uploadFile",
"fileUsageView"			:	"uploadFile",
"UploadPath"			:	{ "dest": 'upload/'},

//API DATA
"gameApiRoutes"				:	"./routes/api/game",
"gameApiRoutes"				:	"./routes/api/game",

//LOGS
"fileFun"				:	require('fs'),



/* ==========GAME LIST=================== */
// USERS INFORMATION
"gamelistRoutes"		:	'./routes/gameList',
"gamesApp"		:	'/games',
"gamesApi"		:	'/api',
"gamesApiQuestion"		:	'/api/questions',
"gamesUrl"		:	'/all',
"gamesView"		:	'games',

/* ==========GAME LIST=================== */







"responseRoutes"		:	"./routes/must/response",
"rok"					:	200,
"rerror"				:	400,
	};
};



