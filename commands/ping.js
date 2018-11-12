const Discord = require("discord.js")
const emojis  = require('../jsons/emojis.json');
const color   = require('../jsons/color.json');
const config  = require('../jsons/config.json');

module.exports.run = async (client, msg, args) => {
    msg.channel.send("My Ping is: "+client.ping+"ms")
}

module.exports.help = {
  name: "ping"
}