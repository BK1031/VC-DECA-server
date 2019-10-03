const Discord = require('discord.js');
var admin = require('firebase-admin');
const https = require('https');

var db = admin.database().ref();

module.exports = {
	name: 'get',
    description: 'Get permissions for a certain user based on name',
    dev: false,
	execute(snapshot, message, args) {
        var found = false;
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
                                var msg = new Discord.RichEmbed()
                                .setAuthor(json[key]["name"])
                                .addField("Email", json[key]["email"], false)
                                .addField("Role", json[key]["role"], true);
                                if (json[key]["title"] != "") {
                                    msg.addField("Title", json[key]["title"], true)
                                }
                                msg.addField("Chaperone Group", json[key]["chapGroup"], true)
                                msg.addField("Mentor Group", json[key]["mentorGroup"], true)
                                msg.addField("Permissions", "––––––––––––", false)
                                Object.keys(json[key]["perms"]).forEach((perm) => {
                                    msg.addField(json[key]["perms"][perm]);
                                });
                                msg.setImage(json[key]["profilePicUrl"]);
                                message.channel.send(msg)
                            }
                        });
                        if (!found) {
                            message.channel.send("Failed to find " + args[0] + " " + args[1])
                        }
                    });
                  });
            }
            else {
                message.channel.send('Command Usage: ```?get [firstName] [lastName]```');
            }
        }
        else if (snapshot != null) {
            // VC DECA App ChatMessage
            console.log(snapshot.ref.path.pieces_[1]);
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
                                db.child("chat").child(snapshot.ref.path.pieces_[1]).push().set({
                                    "author": "VC DECA Bot",
                                    "color": "#0073CE",
                                    "date": "",
                                    "message": json[key]["profilePicUrl"],
                                    "nsfw": false,
                                    "profileUrl": "https://github.com/Equinox-Initiative/VC-DECA-flutter/blob/master/images/logo_white/ios/iTunesArtwork@3x.png?raw=true",
                                    "role": "Bot",
                                    "type": "image",
                                    "userID": "bot1"
                                });
                                var getString = `${json[key]["name"]}`;
                                getString += `\nEmail: ${json[key]["email"]}`;
                                getString += `\nRole: ${json[key]["role"]}`;
                                if (json[key]["title"] != "") {
                                    getString += `\nTitle: ${json[key]["title"]}`;
                                }
                                getString += `\nChaperone Group: ${json[key]["chapGroup"]}`;
                                getString += `\nMentor Group: ${json[key]["mentorGroup"]}`;
                                getString += `\nPermissions:`;
                                Object.keys(json[key]["perms"]).forEach((perm) => {
                                    getString += json[key]["perms"][perm];
                                });
                                db.child("chat").child(snapshot.ref.path.pieces_[1]).push().set({
                                    "author": "VC DECA Bot",
                                    "color": "#0073CE",
                                    "date": "",
                                    "message": getString,
                                    "nsfw": false,
                                    "profileUrl": "https://github.com/Equinox-Initiative/VC-DECA-flutter/blob/master/images/logo_white/ios/iTunesArtwork@3x.png?raw=true",
                                    "role": "Bot",
                                    "type": "text",
                                    "userID": "bot1"
                                });
                            }
                        });
                        if (!found) {
                            db.child("chat").child(snapshot.ref.path.pieces_[1]).push().set({
                                "author": "VC DECA Bot",
                                "color": "#0073CE",
                                "date": "",
                                "message": "Failed to find " + args[0] + " " + args[1],
                                "nsfw": false,
                                "profileUrl": "https://github.com/Equinox-Initiative/VC-DECA-flutter/blob/master/images/logo_white/ios/iTunesArtwork@3x.png?raw=true",
                                "role": "Bot",
                                "type": "text",
                                "userID": "bot1"
                            });
                        }
                    });
                  });
            }
            else {
                db.child("chat").child(snapshot.ref.path.pieces_[1]).push().set({
                    "author": "VC DECA Bot",
                    "color": "#0073CE",
                    "date": "",
                    "message": 'Command Usage: ```?get [firstName] [lastName]```',
                    "nsfw": false,
                    "profileUrl": "https://github.com/Equinox-Initiative/VC-DECA-flutter/blob/master/images/logo_white/ios/iTunesArtwork@3x.png?raw=true",
                    "role": "Bot",
                    "type": "text",
                    "userID": "bot1"
                });
            }
        }
	},
};