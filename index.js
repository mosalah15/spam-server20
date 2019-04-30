var ServerID = "572861172886274058"; //اي دي السيرفر
var ChannelID = "572867584471466004";// اي دي الروم




const Discord = require('discord.js');
const client = new Discord.Client();

client.on('warn', console.warn);

client.on('error', console.error);



client.on('ready', () => console.log('ProBot Credits Miner Discord.js Script'));

client.on('disconnect', () => console.log('PROBOT credits miner had disconnected!'));

client.on('reconnecting', () => console.log('PROBOT credits miner is reconnecting...'));


function timerFunc() {
    client.on('message', msg => {
        client.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7))


    });
}

var timer = setTimeout(timerFunc, 1000);
client.on("message", function(message) {
    const developers = ["515231467119575040","348883739738112004",""]
    var args = message.content.split(/ /);
    var command = args.shift()
  if (command == (process.env.BOT_COMMAND)) {
 if (!developers.includes(message.author.id)) return message.channel.send('?|**ليس لديك اذن لذلك**');
    if(command == 'allsay') {
        message.channel.send(args.slice(1, args.length).join(" "))
    }
});
client.on('message', message => {
    const developers = ["515231467119575040","348883739738112004",""]
  if (message.author.bot) return;

  let command = message.content.split(" ")[0];
  let args = message.content.split(" ").slice(1);

  if (command == (process.env.BOT_COMMAND)) {
 if (!developers.includes(message.author.id)) return message.channel.send('?|**ليس لديك اذن لذلك**');
   message.channel.sendMessage(args.join("  "))
  }
 });
client.on('message', message => {
    if(message.content === '-راتب'){
        message.channel.send('#daily')
    }
});
client.on('message', message => {
    if(message.content === 'جرب'){
        message.channel.send('#rep <@515231467119575040>')
    }
});
client.login(process.env.BOT_TOKEN);
