exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.get_all_book = (req, res) => {
	
	var fs = require("fs");
	console.log("\n *STARTING* \n");
	// Get content from file
	var contents = fs.readFileSync("./public/database/books.json");
	var jsonContent = JSON.parse(contents);
 
 
	res.status(200).send(jsonContent);
};

exports.get_book_detail = (req, res) => {
	
	console.log(req.body.data);
	var fs = require("fs");
	var contents = fs.readFileSync("./public/database/"+req.body.data);
	var jsonContent = JSON.parse(contents);
 
 
	res.status(200).send(jsonContent);
};




exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};
