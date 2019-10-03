const Discord = require('discord.js');
var admin = require('firebase-admin');
const https = require('https');
const roleplays = require('../models/roleplay_data.js');

var db = admin.database().ref();

module.exports = {
	name: 'addroleplay',
    description: 'Add roleplay events to the db',
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
            var shortNameList = roleplays.shortNames.split('\n');
            for (var i=0; i < shortNameList.length; i++) {
                if (shortNameList[i] != "") {
                    db.child("events").child("Roleplay").child(roleplays.clusters.split('\n')[i]).child(shortNameList[i]).set({
                        "desc": roleplays.descs.split('\n')[i],
                        "exam": roleplays.exams.split('\n')[i],
                        "guidelines": roleplays.guidelines.split('\n')[i],
                        "interviewTime": roleplays.interviewTimes.split('\n')[i],
                        "name": roleplays.names.split('\n')[i],
                        "participants": roleplays.participants.split('\n')[i],
                        "prepTime": roleplays.prepTimes.split('\n')[i],
                        "sample": roleplays.samples.split('\n')[i],
                        "sampleExam": roleplays.sampleExams.split('\n')[i],
                    }).then(() => {
                        console.log(`Added ${shortNameList[i]}: ${roleplays.names.split('\n')[i]}`)
                    });
                }
            }
        }
	},
};