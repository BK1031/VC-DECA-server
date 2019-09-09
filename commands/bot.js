const Discord = require('discord.js');

module.exports = {
	name: 'bot',
	description: 'Get info about the AirPods bot',
	execute(message, args) {
        if (message != null) {
            message.channel.send(new Discord.RichEmbed()
			.setAuthor('VC DECA Bot')
            .setColor('#0099ff')
            .setDescription('Hello, I am the VC DECA Bot!')
		);
        }
        else {
            console.log('Hello, I am the VC DECA Bot!');
        }
	},
};