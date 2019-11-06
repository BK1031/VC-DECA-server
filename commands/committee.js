const Discord = require('discord.js');
var admin = require('firebase-admin');
const https = require('https');

var db = admin.database().ref();

module.exports = {
	name: 'committee',
    description: 'Set db perms for a committee member user.',
    dev: true,
	execute(snapshot, message, args) {
        var found = false;
        var permList = ["LEADER_CHAT_VIEW", "LEADER_CHAT_SEND", "CONFERENCE_MEDIA_UPLOAD"];
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
                                db.child("users").child(key).child("role").set("Committee Member");
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