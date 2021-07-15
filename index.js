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

client.login('ODY1MzExOTIzMDExNTg0MDEx.YPCKhw.y_83bEdfD6ZjSYa6guaQVF1BW0g');