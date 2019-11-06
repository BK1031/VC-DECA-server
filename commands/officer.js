const Discord = require('discord.js');
var admin = require('firebase-admin');
const https = require('https');

var db = admin.database().ref();

module.exports = {
	name: 'officer',
    description: 'Set db perms for an officer user.',
    dev: true,
	execute(snapshot, message, args) {
        var found = false;
        var permList = ["OFFICER_CHAT_VIEW", "OFFICER_CHAT_SEND", "LEADER_CHAT_VIEW", "LEADER_CHAT_SEND", "ALERT_CREATE", "ALERT_DELETE", "NOTIFICATION_SEND", "CONFERENCE_MEDIA_UPLOAD"];
        if (message != null) {
            // Discord message
            if (args.length == 2) {
                https.get('https://vc-deca.firebaseio.com/users/.json', (resp) => {
                    let data = '';
                    resp.on('data', (chunk) => {
                      data += chunk;
                    });
                    resp.on('end', () => {
                        var json = JSON.parse(data)
                        Object.keys(json).forEach((key) => {
                            if (json[key]["name"] == args[0] + " " + args[1]) {
                                found = true;
                                var user = json[key]
                                db.child("users").child(key).child("role").set("Officer");
                                for (var i = 0; i < permList.length; i++) {
                                    if (JSON.stringify(user["perms"]).indexOf(permList[i]) < 0) {
                                        db.child("users").child(key).child("perms").push().set(permList[i]);
                                        message.channel.send("Added perm: " + permList[i])
                                        console.log("Added perm: " + permList[i]);
                                    }
                                    else {
                                        message.channel.send("User already has perm: " + permList[i])
                                        console.log("User already has perm: " + permList[i]);
                                    }
                                }
                            }
                        });
                        if (!found) {
                            message.channel.send("Failed to find " + args[0] + " " + args[1])
                        }
                    });
                  });
            }
            else {
                message.channel.send('Command Usage: ```?setperm [firstName] [lastName]```');
            }
        }
        else if (snapshot != null) {
            // VC DECA App ChatMessage
        }
        else {
            // Console time
        }
	},
};