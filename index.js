var ServerID = "515067466570006528"; //اي دي السيرفر
var ChannelID = "515067564376981506";// اي دي الروم




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

client.on('message', async msg => {
const devs = ['348883739738112004'];
if(!devs.includes(message.author.id)) return;
  if(msg.author.bot) return;
  let prefix = "$";
  if(!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0].slice(prefix.length);
  let args = msg.content.split(" ").slice(1);
 
  if(command == 'say') {
    if(!args.join(" ")) return msg.delete();
    msg.channel.send(args.join(" "));
    return;
  }
client.login(process.env.BOT_TOKEN);
