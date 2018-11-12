const Discord = require("discord.js")
const emojis  = require('../jsons/emojis.json');
const color   = require('../jsons/color.json');
const config  = require('../jsons/config.json');

module.exports.run = async (client, message, args) => {
    message.delete()
    message.channel.send(':postal_horn:' + args.join(' '))
}

module.exports.help = {
  name: "say"
}