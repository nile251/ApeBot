 //      Spam Bot      \\
// Created By Unlisting \\

// Settings \\

const BotName = "Spam Bot"; // Bot Name \\
const Token = "NzQ1MTEyNTgyNzE2Nzg0NzAy.XztCKw.ik8WJqokpB15bGaA0EsJ7nQUY4Q"; // The token for the bot \\
const SpamMessage = "<@711110891604803585> nigger"; // message you want to spam \\
const YourDiscordID = 182894387880132608; // Replace 0 with your discord id! \\

// Bot \\

const Discord = require("discord.js");
const prefix = ";";

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
	bot.user.setGame("Getting Things Ready", "https://twitch.tv/")

	console.log(`${BotName} Loaded!`);

	try {
		let link = await bot.generateInvite(["ADMINISTRATOR"]);
		console.log(link);
	} catch(e) {
		console.log(e);
	};
});

bot.on("message", async message => {
	if(message.author.bot) return;

	if(!command.startsWith(prefix)) return;

    if(command === `${prefix}spam`) {
    	if(!message.author.id === YourDiscordID) return;
    	let Ping = message.mentions.users.first();
    	setInterval(function(){
    		Ping.send(SpamMessage)
    	},
    		1200
    	);
    };
});

bot.login(Token);
