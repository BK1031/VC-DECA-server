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
    client.commands.get(command).execute(message, args);
    if (botconfig.dev_prefix != "") {
        message.channel.send(new Discord.RichEmbed().setFooter('NOTE: This is a Dev Command. Some things may be broken.'));
    }
});

client.login(botconfig.token);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var db = admin.database().ref();

rl.on('line', (input) => {
    // Parse user input
    const args = input.split(/ +/);
    const command = args.shift().toLowerCase();
    // Check if command exists
    if (!client.commands.has(command)) {
        console.log(`Command ${command} does not exist`);
        return;
    };
    client.commands.get(command).execute(null, args);
});