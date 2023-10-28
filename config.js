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
			duration: 34
		},
		{
			name: "ll",
			button: 0x1,
			duration: 1000
		},
		{
			name: "r",
			button: 0x2,
			duration: 34
		},
		{
			name: "rr",
			button: 0x2,
			duration: 1000
		},
		{
			name: "u",
			button: 0x4,
			duration: 34
		},
		{
			name: "uu",
			button: 0x4,
			duration: 1000
		},
		{
			name: "d",
			button: 0x8,
			duration: 34
		},
		{
			name: "dd",
			button: 0x8,
			duration: 1000
		},
		{
			name: "ul",
			button: 0x4 | 0x1,
			duration: 34
		},
		{
			name: "ur",
			button: 0x4 | 0x2,
			duration: 34
		},
		{
			name: "dl",
			button: 0x8 | 0x1,
			duration: 34
		},
		{
			name: "dr",
			button: 0x8 | 0x2,
			duration: 34
		},
	]
};