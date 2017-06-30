import mongoose from 'mongoose';

mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/test');

mongoose.connection.on('error', (err) => {
	console.error('Could not connect. Error:', err);
});

var User;

mongoose.connection.once('open', () => {
	let userSchema = mongoose.Schema({
		_id: { type: Number, unique: true, required: true },
		name: { type: String, required: true }
	});

	User = mongoose.model('User', userSchema);

});

let userDB = {
	create(user) {
		let snippet = {
			_id: user.id,
			name: user.name,
			email: user.email
		};

		User.create(snippet, (err, snippet) => {
			if (err || !snippet) {
				console.error('Could not create snippet', user.name);
				console.error(err);
				mongoose.disconnect();
				return;
			}
			console.log('Created snippet', snippet.name);
			mongoose.disconnect();
		});
	}
	// read(user) {
	// 	User.findOne({name: user.name, email: user.email}, (err, user.name) {
	// 		if (err || !user) {
	// 			console.error('Could not read snippet', user.name);
	// 			mongoose.disconnect();
	// 			return;
	// 		}
	// 		console.log('Read snippet', user.name);
	// 		mongoose.disconnect();
	// 	});
	// }
};


export { userDB };