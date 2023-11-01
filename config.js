var config = {
	// set your channel name between the quotes, ie: "eateren"
	channel: "fletchmakes",		

	// create a list of commands with the following properties:
	// {
	//   name: "NAME-OF-COMMAND",
	//   button: HEX-BUTTON-VALUE, (0x1 left, 0x2 right, 0x4 up, 0x8 down, 0x10 O, 0x20 X, 0x40 menu)
	//   duration: NUMBER-OF-MILLISECONDS
	// }
	commands: [
		{
			name: "l",
			button: 0x1,
			duration: 34
		},
		{
			name: "r",
			button: 0x2,
			duration: 34
		},
		{
			name: "u",
			button: 0x4,
			duration: 34
		},
		{
			name: "d",
			button: 0x8,
			duration: 34
		},
		{
			name: "o",
			button: 0x10,
			duration: 34
		},
		{
			name: "x",
			button: 0x20,
			duration: 34
		}
	]
};