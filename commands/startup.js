const Discord = require("discord.js")
const emojis  = require('../jsons/emojis.json');
const color   = require('../jsons/color.json');
const config  = require('../jsons/config.json');

module.exports.run = async (client, msg, args) => {
    if(msg.guild.roles.find("name", "Staff")){
        msg.channel.send(new Discord.RichEmbed().setTitle("Startup instructions 1/3").setDescription("Create a role named `Staff` :white_check_mark:").setFooter("Instruction 1/3"))
    }else{
        msg.channel.send(new Discord.RichEmbed().setTitle("Startup instructions 1/3").setDescription("Create a role named `Staff` :no_entry_sign:").setFooter("Instruction 1/3"))
    }
       if(!msg.guild.roles.find("name", "Staff").members.size == 0){
        msg.channel.send(new Discord.RichEmbed().setTitle("Startup instructions 2/3").setDescription("Give the `@Staff` Role only that users which are a Staff. They can use all Staff commands. :white_check_mark: ").setFooter("Instruction 2/3"))
    }else{ 
        msg.channel.send(new Discord.RichEmbed().setTitle("Startup instructions 2/3").setDescription("Give the `@Staff` Role only that users which are a Staff. They can use all Staff commands. :no_entry_sign: ").setFooter("Instruction 2/3"))
    }
    msg.channel.send(new Discord.RichEmbed().setTitle("Startup instructions 3/3").setDescription("When in the Message at the End of each instructions is a :white_check_mark: , you have done it with 1 or more persons or created a Role named Staff. If there isa :no_entry_sign: you havent done this. If something gone wrong or you need help, do `!credits` and join my Support Server and ask the Owners/Admins. Have fun!").setFooter("Instruction 3/3"))
       }

module.exports.help = {
  name: "startup"
}