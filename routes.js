module.exports = function(app) {
	// connect to database
	var config = require('./config');
	var mongoose = require('mongoose');
	mongoose.connect(config.debug.mongo);
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function callback () {
		// User Section 
		var userSchema = mongoose.Schema({
		    email: String
		});
		var User = mongoose.model('user', userSchema);  
	
		// get restaurant requests data
		app.get('/api/get/users', function(req, res) {
			User.find(function (err, users) {
				if(err){
					res.send('Oh fuck...' + err);
				}
				res.json(users);
			});
		});

		app.post('/api/put/user/', function(req, res) {
			var userData = req.body;

			User.find( { email: userData.email },
				function (err, foundUsers) {
				if(err){
					res.send('Oh fuck...' + err);
				}

				// increase votes for restaurant	
				if(foundUsers.length > 0) {				
					res.send('Already exists ' + foundUsers[0].email);
				} else {
					// create restaurant 
					var newUser = new Restaurant(userData);
					newUser.save(function(err, savedUser){
						if(err){
							res.send('Oh fuck...' + err);
						}
						res.send(newResaurant.name + ' added to the database');
					});
				}
			});
		});


		// Restaurant section
		// set datababase schema
		var restaurantSchema = mongoose.Schema({
		    name: String,
		    votesCount: Number
		});
		restaurantSchema.methods.incVotes = function() {
			this.votesCount++;
		};
		var Restaurant = mongoose.model('restaurant', restaurantSchema);  
	
		// get restaurant requests data
		app.get('/api/get/restaurants', function(req, res) {
			Restaurant.find(function (err, restaurants) {
				if(err){
					res.send('Oh fuck...' + err);
				}
				res.json(restaurants);
			});
		});

		// save restaurant requests
		app.post('/api/put/restaurant/', function(req, res) {
			var restData = req.body;

			Restaurant.find( { name: restData.name },
				function (err, restaurants) {
				if(err){
					res.send('Oh fuck...' + err);
				}

				// increase votes for restaurant	
				if(restaurants.length > 0) {
					restaurants[0].incVotes();
					restaurants[0].save(function(err, savedRestaurant){
						if(err){
							res.send('Oh fuck...' + err);
						}
						res.send('Votes increased for ' + savedRestaurant.name);	
					});
				} else {
					// create restaurant 
					restData.votesCount = 1;
					var newResaurant = new Restaurant(restData);
					newResaurant.save(function(err, newResaurant){
						if(err){
							res.send('Oh fuck...' + err);
						}
						res.send(newResaurant.name + ' added to the database');
					});
				}
			});
		});
	});
}