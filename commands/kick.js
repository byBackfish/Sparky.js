const Discord = require("discord.js")
const emojis  = require('../jsons/emojis.json');
const color   = require('../jsons/color.json');
const config  = require('../jsons/config.json');

module.exports.run = async (client, msg, args, con) => {
    let member = msg.mentions
        if (member) {
            if(msg.member.roles.find("name" , "Staff")){
                
                
            let collector = new Discord.MessageCollector(msg.channel,collect => collect.author.id === msg.author.id && collect.channel.id === msg.channel.id);
        
            msg.channel.send(`Do you really want \`${member.name}\`? Respond with \`yes\` or \`no\`.`).then(m =>m.delete(5000));
            
            collector.on('collect',async msg =>{
                if (msg.content.toLowerCase() === "yes") {
                    
                    msg.delete(100);

                    await member.kick(`Kicked by ${msg.author.tag}`);
                    msg.channel.send(`\`${member.name}\` got kicked.`).then(m =>m.delete(3000));
    
    
                }else 
                if (msg.content.toLowerCase() === "no") {
                    msg.delete(100);
                    msg.channel.send(`\`${member.user}\` did not get kicked.`).then(m =>m.delete(3000));
                } 
                await collector.stop();
            })
        }else{
            msg.channel.send("You have to be a `@Staff`")
    
    }
}
}

module.exports.help = {
  name: "kick"
}