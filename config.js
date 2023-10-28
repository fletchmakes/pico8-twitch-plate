var config = {
	// set your channel name between the quotes, ie: "eateren"
	channel: "fletchmakes",		

	// create a list of commands with the following properties:
	// {
	//   name: "NAME-OF-COMMAND",
	//   button: HEX-BUTTON-VALUE, (0x1 left, 0x2 right, 0x4 up, 0x8 right, 0x10 O, 0x20 X, 0x40 menu)
	//   duration: NUMBER-OF-MILLISECONDS
	// }
	commands: [
		{
			name: "l",
			button: 0x1,
			duration: 500
		},
		{
			name: "r",
			button: 0x2,
			duration: 500
		},
		{
			name: "u",
			button: 0x4,
			duration: 500
		},
		{
			name: "d",
			button: 0x8,
			duration: 500
		},
		{
			name: "ul",
			button: 0x4 | 0x1,
			duration: 500
		},
		{
			name: "ur",
			button: 0x4 | 0x2,
			duration: 500
		},
		{
			name: "dl",
			button: 0x8 | 0x1,
			duration: 500
		},
		{
			name: "dr",
			button: 0x8 | 0x2,
			duration: 500
		},
	]
};