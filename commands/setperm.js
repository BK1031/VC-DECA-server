const Discord = require('discord.js');
var admin = require('firebase-admin');

var db = admin.database().ref();

module.exports = {
	name: 'setperm',
	description: 'Set db perms for a certain user.',
	execute(snapshot, message, args) {
        if (message != null) {
            // Discord message
            var targetID = "";
            console.log(args);
        }
        else if (snapshot != null) {
            // VC DECA App ChatMessage
            console.log(snapshot.ref.path.pieces_[1]);
            db.child("testing").push().set("Server - Admin").then(() => {
                db.child("chat").child(snapshot.ref.path.pieces_[1]).push().set({
                    "author": "VC DECA Bot",
                    "color": "#0073CE",
                    "date": "",
                    "message": "Test value uploaded: 'Server - Admin'",
                    "nsfw": false,
                    "profileUrl": "https://github.com/Equinox-Initiative/VC-DECA-flutter/blob/master/images/logo_white/ios/iTunesArtwork@3x.png?raw=true",
                    "role": "Bot",
                    "type": "text",
                    "userID": "bot1"
                });
            });
        }
        else {
            // Console time
        }
	},
};