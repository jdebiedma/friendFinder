// Load Data - Link to friendsData array in JS data source

var friendsData = require("../data/friends");

// Routing 

module.exports = function(app) {

// API Get Requests
// Determines what the program will fetch when certain URLs are typed in

 app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });


app.post("/api/friends", function(req, res) {

	friendsData.push(req.body);
	//res.json("Updated!");
	//res.json(friendsData);

	//inside here do compatability logic
	//mathematics, etc
	//first off make sure that the friends are added in 

	var newData = friendsData[friendsData.length - 1];
	var newDataScores = newData.scores;

	var compArray = [];

	var newNumbah = parseInt(newData.scores[0]) - parseInt(friendsData[0].scores[0]);

	var numberX = 0;
	var myMatch = 0;

	

	for (var i = 0; i < friendsData.length - 1; i++) {

			for (var j = 0; j < 10; j++) {

				var addMe = Math.abs( parseInt(newData.scores[j]) - parseInt(friendsData[i].scores[j]) );

				numberX = numberX + addMe;

				
				
			}
				compArray.push(numberX);
				numberX = 0;
				
				

	}

	myMin = Math.min.apply(Math, compArray);
	myMatch = compArray.indexOf(myMin);

	

	res.json(friendsData[myMatch]);

});


};

