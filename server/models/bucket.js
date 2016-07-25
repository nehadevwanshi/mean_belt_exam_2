var mongoose = require('mongoose');
var  BucketSchema = new mongoose.Schema({
	title : String,
	user_name: String,
	description: String,
	date_created : { type: Date, required: true, default: Date.now },
	completed: { type: Boolean, required: true, default: false },
});

	mongoose.model('Bucketdb', BucketSchema);

	BucketSchema.path('title').required(true, 'title cannot be blank');

	BucketSchema.path('description').required(true, 'title cannot be blank');