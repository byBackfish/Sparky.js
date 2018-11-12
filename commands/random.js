const Discord = require("discord.js")
const emojis  = require('../jsons/emojis.json');
const color   = require('../jsons/color.json');
const config  = require('../jsons/config.json');

module.exports.run = async (client, msg, args) => {
    msg.channel.send(new Discord.RichEmbed().setTitle("Random User").setDescription("I pick: " +msg.guild.members.filter(u => !u.user.bot).random() + " !").setFooter("Picks a random User"))
}

module.exports.help = {
  name: "random"
}