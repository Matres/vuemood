var moodapp = new Vue({
	el: '#moodapp',
	data: {
		moods: [
			{ text: 'very good', icon: ':D'},
			{ text: 'good', icon: ':)'},
			{ text: 'neutral', icon: ':|'},
			{ text: 'bad', icon: ':S'},
			{ text: 'very bad', icon: ':('}
		],
		feelingIsSet: false,
		timestamp: null,
		json: null,
		currentfeeling: null,
		state: null,
	},
	created: function() {
		// i need jQuery for this to work
		var ledger = this;
		$.getJSON('data/ledger.json', function(json){
			ledger.json = json;
		});
	},
	methods: {
		registerFeeling: function (mood) {
			//register click event here to the right button and receive it here.
			console.log(mood);
			this.currentfeeling = mood;
			// When a feeling is declared by user, show next question to user.
			this.feelingIsSet = true;
			// Register the timestamp of user click
			this.timestamp = Date.now();
			// Register geo-location
			// implement geolocation record coordinates you can save
		},
		changeFeeling: function () {
			this.feelingIsSet = false;
		},
		registerState: function (state) {
			this.state = state;
			console.log(this.state);
		},
		saveMood: function () {
			// write me some Json, and store it on a remote location, accessable from everywhere.
			var mood = {
				"feeling" : this.currentfeeling,
				"state" : this.state
			}
			console.log(mood);
			var JSONstr = JSON.stringify(mood);
			console.log(JSONstr);
		},
		getLedger: function(url) {
			var ledger = $;
		} 
	},
	computed: {
		displayFeeling: function () {
			return "Thanks for sharing. Ok, so you feel like " + this.currentfeeling +".";
		},
		displayTimestamp: function () {
			return this.timestamp;
		}
	}
})