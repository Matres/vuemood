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
		currentfeeling: null,
		timestamp: null,
		state: null,
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
		},
		changeFeeling: function () {
			this.feelingIsSet = false;
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