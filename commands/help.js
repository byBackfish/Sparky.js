const Discord = require("discord.js")
const emojis  = require('../jsons/emojis.json');
const color   = require('../jsons/color.json');
const config  = require('../jsons/config.json');

module.exports.run = async (client, msg, args) => {
    let chan = msg.channel
    let guild = msg.author.guild

    var helpemb = new  Discord.RichEmbed()
    .setTitle("Help")
    .setColor(msg.guild.owner.highestRole.color)
    .addField('User Commands', 'For Permission LEVEL 1')
    .addField('!help', 'Send you this Help Message')
    .addField('!say <text>', 'Will say your text in this channel with a :postal_horn: before the text')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
    .addField('!credits', 'Send you the credits of this Bot')
    .addField('!ping', 'Will send my Ping to the Discord-API')
    .addField('Staff Commands', 'Only for users with a Permission level of 3 or higher')
    .addField('!channel <create|close>', 'Will create a private channel. To close you have to write in the private channel !channel close')
    .addField('!modsay <text>', 'Will send your text in the channel without a :postal_horn:')
    .addField('!kick <@user>', 'Will kick the User.')
    
    .addField('Admin Commands', 'Only for Permission Level 4 or higher')
    .addField('coming soon', ':soon:')
    .addField('Owner Commands', 'Only for Permission Level 5 or higher')
    .addField('coming soon', ':soon:')
    .addField('Bot-Owner Commands', 'Only for Permission level 6')
    .addField('!setname <name>', ' Set a new Bot name')
    .addField('!eval <code>', ' Executes this Discord.js Code Snippet')
chan.send(helpemb)
}
module.exports.help = {
  name: "help"
}