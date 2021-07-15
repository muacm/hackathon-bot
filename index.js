const Discord = require('discord.js');
const client = new Discord.Client();

// importing app modules
const InclusiveMessageChecker = require('./app/InclusiveMessageChecker');
const inclusiveMessageChecker = new InclusiveMessageChecker.InclusiveMessageChecker();

client.on('ready', () => {
  console.log(`logged in as ${client.user.tag}!`)
});

client.on('message', msg => {
  
  if (msg.author.bot) return;

  if (msg.content === "hey") {
    msg.channel.send('hello there!')
  }

  // checking inclusive messages
  msg.channel.send(inclusiveMessageChecker.SendResponseForNonInclusiveMessages(msg.content))
  
});

client.login(process.env.TOKEN);