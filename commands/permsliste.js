const Discord = require("discord.js")
const emojis  = require('../jsons/emojis.json');
const color   = require('../jsons/color.json');
const config  = require('../jsons/config.json');

module.exports.run = async (client, msg, args, con) => {
msg.delete()
con.query(`SELECT * FROM permissions WHERE id = ${msg.author.id} and guildid = ${msg.guild.id} and lvl = 3`, console.log)
msg.channel.send(new Discord.RichEmbed().setTitle("Permission Stage List").addField("Level 6", "Only for the Bot-Owner").addField("Level 5", "Guild-Owner").addField("Level 4", "Guild-Admin").addField("Level 3", "Server-Staff").addField("Level 2", "Guild-Premium").addField("Level 1", "Everyone").addField("The Guild-Owner can give everyone every Permission Levels (!Not Level 6!). Give only the other Owner the Level 5!")).then((list) => {

}
    )
}




module.exports.help = {
  name: "permlist"
}