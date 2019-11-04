const Discord = require('discord.js');
var admin = require('firebase-admin');

var db = admin.database().ref();

module.exports = {
	name: 'fcmtest',
    description: 'Send a test push notification to devs',
    dev: true,
	execute(snapshot, message, args) {
        if (message != null) {
            // Discord message
            admin.messaging().send({
                topic: 'DEV', // TODO: Replace this with GLOBAL_CHAT
                notification: {
                    title: 'Dev Test',
                    body: 'Test FCM push notification for devs, sent from Discord'
                }
            }).then((response) => {
                message.channel.send('Successfully sent message: ' + response.toString());
            });
        }
        else if (snapshot != null) {
            // VC DECA App ChatMessage
            console.log(snapshot.ref.path.pieces_[1]);
            admin.messaging().send({
                topic: 'DEV',
                notification: {
                    title: 'Dev Test',
                    body: 'Test push notification for devs'
                }
            }).then((response) => {
                db.child("chat").child(snapshot.ref.path.pieces_[1]).push().set({
                    "author": "VC DECA Bot",
                    "color": "#0073CE",
                    "date": "",
                    "message": 'Successfully sent message: ' + response.toString(),
                    "nsfw": false,
                    "profileUrl": "https://github.com/Equinox-Initiative/VC-DECA-flutter/blob/master/images/logo_white/ios/iTunesArtwork@3x.png?raw=true",
                    "role": "Bot",
                    "type": "text",
                    "userID": "bot1"
                });
            });
        }
        else {
            // Console time!
            admin.messaging().send({
                topic: 'DEV', // TODO: Replace this with GLOBAL_CHAT
                notification: {
                    title: 'Dev Test',
                    body: 'Test push notification for devs'
                }
            }).then((response) => {
                    console.log('Successfully sent message:', response);
            });
        }
	},
};