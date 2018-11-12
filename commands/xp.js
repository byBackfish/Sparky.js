const Discord = require("discord.js")
const emojis  = require('../jsons/emojis.json');
const color   = require('../jsons/color.json');
const config  = require('../jsons/config.json');

module.exports.run = async (client, msg, args, con) => {
    let target = msg.mentions.members.first() || msg.guild.members.get(args[1]) || msg.author;
    

    con.query(`SELECT * FROM xp WHERE id = ${target.id}`, (err, rows) =>{
        if(err) throw err;
if(!rows[0]) return msg.channel.send("This user has no XP registered!")
        let xp =rows[0].xp
        let lvl = xp / 100

        msg.channel.send(new Discord.RichEmbed().setTitle("XP of "+ target.user + " ").addField("XP", xp).addField("Level", lvl).setTimestamp(Date.now()).setFooter("XP"))



    });
}
module.exports.help = {
  name: "xp"
}