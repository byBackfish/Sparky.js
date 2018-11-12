const Discord = require("discord.js")
const emojis  = require('../jsons/emojis.json');
const color   = require('../jsons/color.json');
const config  = require('../jsons/config.json');

module.exports.run = async (client, msg, args, con) => {
    // eval 
    if(msg.member.id == config.owner){

        try{
            msg.channel.send("**Input:**\n```" + args.join(" ") + "```\n\n**Output:**\n```" + eval(args.join("")) + "```")
        } catch(err) {
           
        }
    }
    }


module.exports.help = {
  name: "eval"
}