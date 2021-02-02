const mongoose = require("mongoose");

const PirateSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Pirate name is rquired argh!']
	},
	imgUrl: {
		type:String,
		required: [true, 'Pirate must have a portrait, include an image!']
	},
	chests: {
		type: String,
		required:[true, 'Pirate must have some treasure, please adjusrt # of chests field'],
	},
	catchPhrase: {
		type: String ,
		required : [true, 'Every great pirate has a catch phrase, please include one!']
	},
	crewPosition: {
		type: String,
		required : [true, 'Pirate miust have a position, please update Crew Position field']
	},
	pegLeg: {
		type: Boolean
	},
	eyePatch: {
		type: Boolean
	},
	hookHand: {
		type: Boolean
	}
}, {timestamps: true});

const Pirate = mongoose.model("Pirate", PirateSchema);

module.exports = Pirate;