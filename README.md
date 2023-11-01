# PICO-8 Twitch Plate

A quick and easy way to turn your PICO-8 game into a chat-controlled Twitch community experience!

## What is a PICO-8 Plate?

A plate is a paramter that you can provide to PICO-8's `export` command. By specifying the `-p` parameter, you can use a custom HTML shell that will modify the way in which PICO-8's HTML export gets built.

This HTML plate changes the following:
- removes the PICO-8 browser controls from the right side of the canvas
- makes the background transparent so that the game (as a .html file) can be added as a browser source to OBS
- adds the necessary controllers to receive Twitch chat inputs and interpret them as PICO-8 button presses

## Setup

1. Download this repo as a .zip (or go to the releases tab)
2. Copy and paste `twitch-plate.html` into the `plates` folder within the PICO-8 installation directory
    - Windows: ` C:/Users/Yourname/AppData/Roaming/pico-8/plates`
    - macOS: `/Users/Yourname/Library/Application Support/pico-8/plates`
    - Linux: `~/.lexaloffle/pico-8/plates`
    - in case you can't find the PICO-8 installation directory in those places, check [here](https://pico-8.fandom.com/wiki/Configuration)
3. Export your game as HTML, with the plate specified:
    - `export yourgame.html -p twitch-plate.html`
4. Copy and paste `config.js` into the same directory as your exported game's `.html` and `.js` files.
5. Open `config.js` and fill out the following:
    - "channel": a string specifying the Twitch username of the channel you want to listen to commands in
    - "commands": an array of objects with the following properties:
        - "name": this is the command that users will type in Twitch chat. The `!` prefix is assumed, so don't include it in the name field here.
        - "button": this is the hex value of the button(s) you'd like to be considered as pressed
        - "duration": how long (in milliseconds) to press the button before releasing it
6. Test your configuration by opening your game's `.html` file locally in your browser, then in another window, open your Twitch chat and type some commands in. See if the game responds to those commands as expected.
7. Finally, add your `.html` file as a Browser Source in OBS to have the game available without requiring a browser window open while you stream! Recommended settings:
    - Width: 600
    - Height: 800 (this is not a typo - it should be taller than wide)
    - Control audio via OBS (checked)
    - Shutdown source when not visible (checked)
    - Refresh browser when scene becomes active (checked)
    - Page permissions: No access to OBS

## Attributions

- fletchmakes - PICO-8 html plate
- Instafluff - ComfyJS library for interacting with Twitch
- zep.p8 - PICO-8