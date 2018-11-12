const Discord = require("discord.js")
const emojis  = require('../jsons/emojis.json');
const color   = require('../jsons/color.json');
const config  = require('../jsons/config.json');

module.exports.run = async (client, msg, args, con) => {
  let target = msg.mentions.members.first() || msg.guild.members.get(args[1]) || msg.author;


  con.query(`SELECT * FROM coins WHERE id = ${target.id}`, (err, rows) =>{
  if(err) throw err;
if(!rows[0]){ return msg.channel.send(new Discord.RichEmbed().setTitle("Coins of " + target.user).setDescription("This User has no Coins")) }
        let coins =rows[0].coins


        msg.channel.send(new Discord.RichEmbed().setTitle("Coins of "+ target.user + " ").addField("COINS", coins).setTimestamp(Date.now()).setFooter("COINS"))
  })
}

module.exports.help = {
  name: "coins"
}