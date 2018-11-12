const Discord = require("discord.js")
const emojis  = require('../jsons/emojis.json');
const color   = require('../jsons/color.json');
const config  = require('../jsons/config.json');

module.exports.run = async (client, msg, args) => {
    let chan = msg.channel
    let invite = new Discord.RichEmbed()
    .setColor(msg.guild.owner.highestRole.color)
    .setTitle("Invite me")
    .addField("Klick here ", "https://discordapp.com/oauth2/authorize?client_id=456437326348943372&scope=bot&permissions=66186303")
chan.send(invite)
}

module.exports.help = {
  name: "invite"
}