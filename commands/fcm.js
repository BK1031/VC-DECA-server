const Discord = require('discord.js');
var admin = require('firebase-admin');

var db = admin.database().ref();

module.exports = {
	name: 'fcm',
    description: 'Send a message to a certain user or topic',
    dev: true,
	execute(snapshot, message, args) {
        if (message != null) {
            // Discord message
            if (args.length >= 3) {
                if (args[0].length > 20) {
                    // FCM Token Given
                    admin.messaging().send({
                        token: args[0],
                        notification: {
                            title: args[1],
                            body: args[2]
                        }
                    }).then((response) => {
                        message.channel.send('Successfully sent message to user with token ' + args[0] + ': ' + response.toString());
                    });
                }
                else {
                    // Topic Given
                    admin.messaging().send({
                        topic: args[0],
                        notification: {
                            title: args[1],
                            body: args[2]
                        }
                    }).then((response) => {
                        message.channel.send('Successfully sent message to topic ' + args[0] + ': ' + response.toString());
                    });
                }
            }
            else {
                message.channel.send('Command Usage: ```?fmc [topic/token] [title] [body]```');
            }
        }
        else if (snapshot != null) {
            // VC DECA App ChatMessage
            console.log(snapshot.ref.path.pieces_[1]);
            if (args.length == 3) {
                if (args[0].length > 20) {
                    // FCM Token Given
                    admin.messaging().send({
                        token: args[0],
                        notification: {
                            title: args[1],
                            body: args[2]
                        }
                    }).then((response) => {
                        db.child("chat").child(snapshot.ref.path.pieces_[1]).push().set({
                            "author": "VC DECA Bot",
                            "color": "#0073CE",
                            "date": "",
                            "message": 'Successfully sent message to user with token ' + args[0] + ': ' + response.toString(),
                            "nsfw": false,
                            "profileUrl": "https://github.com/Equinox-Initiative/VC-DECA-flutter/blob/master/images/logo_white/ios/iTunesArtwork@3x.png?raw=true",
                            "role": "Bot",
                            "type": "text",
                            "userID": "bot1"
                        });
                    });
                }
                else {
                    // Topic Given
                    admin.messaging().send({
                        topic: args[0],
                        notification: {
                            title: args[1],
                            body: args[2]
                        }
                    }).then((response) => {
                        db.child("chat").child(snapshot.ref.path.pieces_[1]).push().set({
                            "author": "VC DECA Bot",
                            "color": "#0073CE",
                            "date": "",
                            "message": 'Successfully sent message to topic ' + args[0] + ': ' + response.toString(),
                            "nsfw": false,
                            "profileUrl": "https://github.com/Equinox-Initiative/VC-DECA-flutter/blob/master/images/logo_white/ios/iTunesArtwork@3x.png?raw=true",
                            "role": "Bot",
                            "type": "text",
                            "userID": "bot1"
                        });
                    });
                }
            }
            else {
                db.child("chat").child(snapshot.ref.path.pieces_[1]).push().set({
                    "author": "VC DECA Bot",
                    "color": "#0073CE",
                    "date": "",
                    "message": 'Command Usage: ```?fmc [topic/token] [title] [body]```',
                    "nsfw": false,
                    "profileUrl": "https://github.com/Equinox-Initiative/VC-DECA-flutter/blob/master/images/logo_white/ios/iTunesArtwork@3x.png?raw=true",
                    "role": "Bot",
                    "type": "text",
                    "userID": "bot1"
                });
            }
        }
        else {
            // Console time!
            if (args.length == 3) {
                if (args[0].length > 20) {
                    // FCM Token Given
                    admin.messaging().send({
                        token: args[0],
                        notification: {
                            title: args[1],
                            body: args[2]
                        }
                    }).then((response) => {
                        console.log('Successfully sent message to user with token ' + args[0] + ': ' + response.toString());
                    });
                }
                else {
                    // Topic Given
                    admin.messaging().send({
                        topic: args[0],
                        notification: {
                            title: args[1],
                            body: args[2]
                        }
                    }).then((response) => {
                        console.log('Successfully sent message to topic ' + args[0] + ': ' + response.toString());
                    });
                }
            }
            else {
                console.log('Command Usage: ```?fmc [topic/token] [title] [body]```');
            }
        }
	},
};