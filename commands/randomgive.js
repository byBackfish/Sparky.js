const Discord = require("discord.js")
const emojis  = require('../jsons/emojis.json');
const color   = require('../jsons/color.json');
const config  = require('../jsons/config.json');

module.exports.run = async (client, msg, args) => {
    if(msg.member.roles.find("name" , "Staff")){
        var ru = msg.guild.members.filter(u => !u.user.bot).random()
        if(args[0]){
            if(args[0] == "Owner"){
                msg.channel.send("Are you serious? I cant give them the Owner role.")
            }else{ 
            msg.channel.send(new Discord.RichEmbed().setTitle("Random User").setDescription("I pick: " + ru + " ! \n\n " + ru +" now has the Role: " + args[0]).setFooter("Gives a random User a Role"))
            ru.addRole(msg.guild.roles.find("name", args[0]))
        }
        }
        }
}

module.exports.help = {
  name: "randomgive"
}