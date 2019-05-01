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
client.on('message', message => {
    const developers = ["515231467119575040","348883739738112004",""]
  if (message.author.bot) return;
  let command = message.content.split(" ")[0];
  let args = message.content.split(" ").slice(1);

  if (command == ('allsay')) {
 if (!developers.includes(message.author.id)) return message.channel.send('?|**ليس لديك اذن لذلك**');
   message.channel.sendMessage(args.join("  "))
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


            
 client.on('ready', () => {
var x = client.channels.get("572861172886274062");
if (x) x.join();
});
 client.on('message', msg => {
const voiceChannel = msg.member.voiceChannel;
  let command = msg.content.split(" ")[0];
  let args = msg.content.split(" ").slice(1);

  if (command == ('join')) {
	  var video = ('https://www.youtube.com/watch?v=Ktync4j_nmA');

            return handleVideo(video, msg, voiceChannel);
  }
});	 
client.on('ready', message=> {
  let command = message.content.split(" ")[0];
  let args = message.content.split(" ").slice(1);

  if (command == ('join')) {
function Play(connection, message);
{
    var server = servers[message.guild.id]
    server.dispatcher = connection.playStream(ytdl(server.queue[0], {filter: "audioonly"}))
    server.queue.shift();
    server.dispatcher.on("end", function(){
        if(server.queue[0])
        {
            Play(connection,message);
        }
        else
        {
            connection.disconnect();
        }
    })
}

async run(message, args)
{
    if(message.member.voiceChannel)
    {
        if(!message.guild.voiceConnection)
        {
            if(!servers[message.guild.id])
            servers[message.guild.id] = {queue: []}
            }
            message.member.voiceChannel.join()
            .then (connection =>{
                var server = servers[message.guild.id];
                server.queue.push(args);
                message.reply('successfly added');
                Play (connection, message);
            })
        }
    }
    else
    {
        message.reply('join the ch frist')
    }
}
})
});
client.login(process.env.BOT_TOKEN);
