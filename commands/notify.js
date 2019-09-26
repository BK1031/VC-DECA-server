const Discord = require('discord.js');
var admin = require('firebase-admin');
const botconfig = require("../botconfig.json");

var db = admin.database().ref();

module.exports = {
	name: 'notify',
	description: 'Toggle the chat notification service',
	execute(snapshot, message, args) {
        if (message != null) {
            // Discord message
            botconfig["notify"] = !botconfig["notify"];
            message.channel.send("Notification Server Setting Updated: " + botconfig["notify"]);
        }
        else if (snapshot != null) {
            // VC DECA App ChatMessage
            console.log(snapshot.ref.path.pieces_[1]);
            botconfig["notify"] = !botconfig["notify"];
            db.child("chat").child(snapshot.ref.path.pieces_[1]).push().set({
                "author": "VC DECA Bot",
                "color": "#0073CE",
                "date": "",
                "message": "Notification Server Setting Updated: " + botconfig["notify"],
                "nsfw": false,
                "profileUrl": "https://github.com/Equinox-Initiative/VC-DECA-flutter/blob/master/images/logo_white/ios/iTunesArtwork@3x.png?raw=true",
                "role": "Bot",
                "type": "text",
                "userID": "bot1"
            });
        }
        else {
            // Console time
            console.log("Toggling Notification Service")
            botconfig["notify"] = !botconfig["notify"];
            console.log(botconfig["notify"])
        }
	},
};