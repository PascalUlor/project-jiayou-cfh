var path = require('path'),
rootPath = path.normalize(__dirname + '/../..');
var keys = rootPath + '/keys.txt';

module.exports = {
	root: rootPath,
	port: process.env.PORT || 3000,
    db: process.env.DB_URL
	port: process.env.PORT,
  db: process.env.DB_URL 
};
