const Discord = require("discord.js")
const emojis  = require('../jsons/emojis.json');
const color   = require('../jsons/color.json');
const config  = require('../jsons/config.json');

module.exports.run = async (client, msg, args) => {
    // eval
       
        var creditemb = new Discord.RichEmbed()
            .setTitle("Credits")
            .setColor(msg.guild.owner.highestRole.color)
            .addField("Developer", "@byBackfish#3426 (369005267158827024)")
            .addField("Helpers", "I thank the whole Zekros Dev Schuppen Server for helping me coding this bot")
            .addField("Zekro", "Zekro helped me a lot with the YouTube Tutorials and Github Repositorys")
            .addField("Links", "from socials")
            .addField("Zekro Github", "https://github.zekro.de")
            .addField("Zekro Youtube", "https://youtube.zekro.de")
            .addField("Zekros Dev Schuppen", "https://discord.zekro.de")
            .addField("Support Server", "https://discord.gg/dJ9U3ZZ")
            msg.channel.send('', creditemb)
        
    }

module.exports.help = {
  name: "credits"
}