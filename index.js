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
const Util = require('discord.js');

const getYoutubeID = require('get-youtube-id');

const fetchVideoInfo = require('youtube-info');

const YouTube = require('simple-youtube-api');

const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");

const queue = new Map();

const ytdl = require('ytdl-core');

const fs = require('fs');

const gif = require("gif-search");

client.on('ready', () => {
var x = client.channels.get("572861172886274062");
if (x) x.join();

client.on('message', message => {
	const prefix = ('1')
  if (message.author.bot) return;
	let command = message.content.toLowerCase().split(" ")[0];
	command = command.slice(prefix.length)

	if (command === `play`) {
		const voiceChannel = message.member.voiceChannel;
                
        const permissions = voiceChannel.permissionsFor(message.client.user);
        
        if (!permissions.has('CONNECT')) {

			return message.channel.send("ليست لدي صلاحيات للدخول الى الروم");
        }
        
		if (!permissions.has('SPEAK')) {

			return message.channel.send("انا لا يمكنني التكلم في هاذه الروم");
		}

		if (!permissions.has('EMBED_LINKS')) {

			return message.channel.sendMessage("انا لا املك صلاحيات ارسال روابط")
		}

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {

			const playlist = await youtube.getPlaylist(url);
            const videos = await playlist.getVideos();
            

			for (const video of Object.values(videos)) {
                
                const video2 = await youtube.getVideoByID(video.id); 
                await handleVideo(video2, msg, voiceChannel, true); 
            }
			return msg.channel.send(`**${playlist.title}**, Just added to the queue!`);
		} else {

			try {

                var video = await youtube.getVideo(url);
                
			} catch (error) {
				try {

					var videos = await youtube.searchVideos(searchString, 5);
					let index = 0;
                    const embed1 = new Discord.RichEmbed()
                    .setTitle(":mag_right:  YouTube Search Results :")
                    .setDescription(`
                    ${videos.map(video2 => `${++index}. **${video2.title}**`).join('\n')}`)
                    
					.setColor("#f7abab")
					msg.channel.sendEmbed(embed1).then(message =>{message.delete(20000)})
					
/////////////////					
					try {

						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 15000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						return msg.channel.send('لم يتم اختيار الاغنية');
                    }
                    
					const videoIndex = parseInt(response.first().content);
                    var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
                    
				} catch (err) {

					console.error(err);
					return msg.channel.send("I didn't find any results!");
				}
			}

            return handleVideo(video, msg, voiceChannel);
            
        }
		});
//////////////////////

client.login(process.env.BOT_TOKEN);
