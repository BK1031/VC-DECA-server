const Discord = require('discord.js');
var admin = require('firebase-admin');

var db = admin.database().ref();

module.exports = {
	name: 'r',
    description: 'Reply to a chat message via the VC DECA Bot',
    dev: false,
	execute(snapshot, message, args) {
        if (message != null) {
            // Discord message
            if (args.length >= 2) {
                var messageBody = "";
                for (i = 1; i < args.length; i++) {
                    messageBody += args[i] + " ";
                }
                db.child("chat").child(args[0]).push().set({
                    "author": "VC DECA Bot",
                    "color": "#0073CE",
                    "date": "",
                    "message": messageBody,
                    "nsfw": false,
                    "profileUrl": "https://github.com/Equinox-Initiative/VC-DECA-flutter/blob/master/images/logo_white/ios/iTunesArtwork@3x.png?raw=true",
                    "role": "Bot",
                    "type": "text",
                    "userID": "bot1"
                });
            }
            else {
                message.channel.send('Command Usage: ```?r [chat ref] [message]```');
            }
            message.delete(1000);
        }
        else if (snapshot != null) {
            // VC DECA App ChatMessage
        }
        else {
            // Console time!;
        }
	},
};