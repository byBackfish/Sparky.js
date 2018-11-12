const Discord = require("discord.js")
const emojis  = require('../jsons/emojis.json');
const color   = require('../jsons/color.json');
const config  = require('../jsons/config.json');

module.exports.run = async (client, msg, args) => {
    
        // if(msg.author.id === `369005267158827024` || `385154557874798593`){     
         if(msg.member.roles.find("name" , "Staff")){
             
       
           
               let guild = msg.member.guild
               let chan = msg.channel
               if (args[0] && args[0].toLowerCase() == "create") {
                   msg.channel.send(new Discord.RichEmbed().setTitle("Succesfully created a Private Talk!").setDescription("Your Private Talk was createt").addField("How i can delete my Private Channel?", "You have to write in your Private Talk  `!channel close`. And now your channel is deleted").setColor(msg.guild.owner.highestRole.color))
       
       guild.createChannel(`private-channel of ${msg.author.username}`, "text ", [{
       
           id: guild.id,
           
           deny: ['READ_MESSAGES'],
           allow: ['READ_MESSAGES'],
           
           
         }])
           .then(c => {
               c.setParent('478510417694425089')
               .then(updated => console.log(`Set the category of ${updated.name} to ${updated.parent.name}`))
               .catch(console.error);
           })
           .catch(console.error);
           chan.setTopic('private')
           .then(updated => console.log(`Channel's new topic is ${updated.topic}`))
           .catch(console.error);
           
          
       
          
               
               }else  if (args[0] && args[0].toLowerCase() == "close") {
                   if (!chan.name.startsWith(`private-channel`)){  
                      chan.send('This channel is no private talk channel.')
       
                       
                   }else{
                       chan.delete()
                   }
                  
       
                   }
               }else{
                   msg.channel.send("You have to be a `@Staff`")   
               
           
       
       
                   
       
       
               }
}

module.exports.help = {
  name: "channel"
}
