const Discord = require('discord.js');
var admin = require('firebase-admin');

var db = admin.database().ref();

module.exports = {
	name: 'nchat',
    description: 'Get info about the VC DECA Bot',
    dev: false,
	execute(snapshot, message, args) {
        if (message != null) {
            // Discord message
            if (args.length == 2) {
                db.child("chat").child(args[0].toUpperCase() + "19").push().set({
                    "author": "VC DECA Bot",
                    "color": "#0073CE",
                    "date": "",
                    "message": "Welcome to " + args[0] + " " + args[1] + "'s mentor group!",
                    "nsfw": false,
                    "profileUrl": "https://github.com/Equinox-Initiative/VC-DECA-flutter/blob/master/images/logo_white/ios/iTunesArtwork@3x.png?raw=true",
                    "role": "Bot",
                    "type": "text",
                    "userID": "bot1"
                }).then(() => {
                    message.channel.send("Created new mentor group: " + args[0].toUpperCase() + "19");
                });
            }
            else {
                message.channel.send('Command Usage: ```?nchat [firstName] [lastName]```');
            }
        }
        else if (snapshot != null) {
            // VC DECA App ChatMessage
        }
        else {
            // Console time!
        }
	},
};