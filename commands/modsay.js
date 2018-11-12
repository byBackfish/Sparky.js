const Discord = require("discord.js")
const emojis  = require('../jsons/emojis.json');
const color   = require('../jsons/color.json');
const config  = require('../jsons/config.json');

module.exports.run = async (client, message, args) => {
    if(message.member.roles.find("name" , "Staff")){
        message.delete()
    message.channel.send(args.join(' '))
}else{
    msg.channel.send("You have to be a `@Staff`")   
}
}

module.exports.help = {
  name: "modsay"
}