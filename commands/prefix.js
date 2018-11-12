

const Discord = require("discord.js")
const emojis  = require('../jsons/emojis.json');
const color   = require('../jsons/color.json');
const config  = require('../jsons/config.json');

module.exports.run = async (client, msg, args, con) => {




con.query(`SELECT * FROM prefix WHERE guildid = '${msg.guild.id}'`, (err, rows) => {
    if(err) throw(err);
    if(!args[0]){msg.channel.send("Please use !prefix <new prefix>");}
        
    if(msg.member.hasPermission('MANAGE_SERVER')){
    
        
    con.query(`UPDATE prefix SET prefix = '${args[0]}' WHERE guildid = '${msg.guild.id}'`)
    msg.channel.send(new Discord.RichEmbed().setTitle("New Prefix set").setDescription("You set the New Prefix to " + args[0]+ "").setTimestamp(Date.now()).setFooter("You set a Prefix!"))
    }
}

// cooldown





)

}

module.exports.help = {
name: "prefix"
}
