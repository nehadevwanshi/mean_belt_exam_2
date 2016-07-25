var mongoose = require('mongoose');
var  UserSchema = new mongoose.Schema({
	
	user_name: String
});

	mongoose.model('Userdb', UserSchema);

	