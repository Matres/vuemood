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
	},
	methods: {
		registerFeeling: function () {
			//register click event here to the right button and receive it here.
			this.moods.text
			// When a feeling is declared by user, show next question to user.
			this.feelingIsSet = true
			// Register the timestamp of user click
			this.timestamp = Date.now()
		},
		displayTimestamp: function () {
			return this.timestamp // this does not work aparently
		}
	}
})