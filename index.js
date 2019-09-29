var admin = require('firebase-admin');
var readline = require('readline');
const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const csv = require('csv-parser');  
const fs = require('fs');

const client = new Discord.Client();
client.commands = new Discord.Collection();

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://vc-deca.firebaseio.com"
});

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js')); 

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
var db = admin.database().ref();

client.login(botconfig.token);

client.on("ready", () => {
    console.log(`${client.user.username} is online!`);
});

client.on("message", (message) => {
    if (!message.content.startsWith(botconfig.dev_prefix + botconfig.prefix) || message.author.bot) return;
    // Parse user input
    const args = message.content.slice((botconfig.dev_prefix + botconfig.prefix).length).split(/ +/);
    const command = args.shift().toLowerCase();
    // Check if command exists
    if (!client.commands.has(command)) {
        console.log(`Command ${command} does not exist`);
        return;
    };
    client.commands.get(command).execute(null, message, args);
    if (botconfig.dev_prefix != "") {
        message.channel.send(new Discord.RichEmbed().setFooter('NOTE: This is a Dev Command. Some things may be broken.'));
    }
});

db.child("chat").child("dev").on("child_added", function(snapshot) {
    var message = snapshot.val();
    console.log(message.author + ": " + message.message);
    // Don't send notifications for nsfw messages
    if (message.nsfw) return;
    // Send notification
    if (!botconfig["notify"]) return;
    admin.messaging().send({
        topic: 'DEV', // TODO: Replace this with GLOBAL_CHAT
        notification: {
            title: message.author,
            body: message.message
        }
    }).then((response) => {
        console.log('Successfully sent message:', response);
    });
    // Check if message contains bot command
    if (!message.message.toLowerCase().startsWith(botconfig.dev_prefix + botconfig.prefix) || message.role == "Bot") return;
    if (botconfig.dev_prefix != "" && (botconfig.devs.indexOf(message.author) == -1)) return;
    const args = message.message.slice((botconfig.dev_prefix + botconfig.prefix).length).split(/ +/);
    const command = args.shift().toLowerCase();
    if (!client.commands.has(command)) {
        console.log(`Command ${command} does not exist`);
        return;
    };
    client.commands.get(command).execute(snapshot, null, args);
});

rl.on('line', (input) => {
    // Parse user input
    const args = input.split(/ +/);
    const command = args.shift().toLowerCase();
    // Check if command exists
    if (!client.commands.has(command)) {
        console.log(`Command ${command} does not exist`);
        return;
    };
    client.commands.get(command).execute(null, null, args);
});

// Push Notificaton Handler
db.child("notifications").on("child_added", (snapshot) => {
    var notification = snapshot.val();
    notification.topic.forEach(element => {
        if (element != "") {
            admin.messaging().send({
                topic: element,
                notification: {
                    title: notification.title,
                    body: notification.body
                }
            }).then((response) => {
                console.log('Successfully sent message:', response);
                db.child("notifications").child(snapshot.ref.path.pieces_[1]).set(null);
            });
        }
    });
});

db.child("users").on("child_added", (snapshot) => {
    var user = snapshot.val();
    if (user.title == null) {
        db.child("users").child(snapshot.key).child("title").set("")
    }
});