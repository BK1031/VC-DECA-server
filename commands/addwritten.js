const Discord = require('discord.js');
var admin = require('firebase-admin');
const https = require('https');
const writtens = require('../models/written_data.js');

var db = admin.database().ref();

module.exports = {
	name: 'addwritten',
    description: 'Add written events to the db',
    dev: true,
	execute(snapshot, message, args) {
        if (message != null) {
            // Discord message
        }
        else if (snapshot != null) {
            // VC DECA App ChatMessage
        }
        else {
            // Console time
            var shortNameList = writtens.shortNames.split('\n');
            for (var i=0; i < shortNameList.length; i++) {
                if (shortNameList[i] != "") {
                    db.child("events").child("Written").child(writtens.clusters.split('\n')[i]).child(shortNameList[i]).set({
                        "desc": writtens.descs.split('\n')[i],
                        "guidelines": writtens.guidelines.split('\n')[i],
                        "name": writtens.names.split('\n')[i],
                        "pages": writtens.pages.split('\n')[i],
                        "participants": writtens.participants.split('\n')[i],
                        "penalty": writtens.penalties.split('\n')[i],
                        "presentationTime": writtens.presentationTimes.split('\n')[i],
                        "sample": writtens.samples.split('\n')[i],
                    }).then(() => {
                        console.log(`Added ${shortNameList[i]}: ${writtens.names.split('\n')[i]}`)
                    });
                }
            }
        }
	},
};