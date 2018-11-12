const Discord = require("discord.js")
const emojis  = require('../jsons/emojis.json');
const color   = require('../jsons/color.json');
const config  = require('../jsons/config.json');
const Main = require('../main')

module.exports.run = async (client, msg, args, con) => {
    var chan = msg.channel
    var memb = msg.member
    var guild = msg.member.guild

    if (!args[0]) {
        
        return;
    }
    let result = await Main.check(3 ,msg.author.id, msg.guild.id, msg.channel);
    if(result){
        

    

   // if(msg.member.roles.find("name" , "Staff")){
    var victim = guild.members.find(m => m.id == args[0].replace(/(<@!)|(<@)|>/g, ''))
    if (!victim)
        victim = guild.members.find(m => m.displayName.toLowerCase().indexOf(args[0].toLowerCase()) > -1)
    if (!victim) {
        msg.channel.send( 'Can not fetch any member by the given argument: ```' + args[0] + '```')
        return;
    }
    if (!victim.voiceChannel) {
        msg.channel.send(`The specified member (<@${victim.id}>) is currently not in a voice channel.`)
        return;
    }

    guild.createChannel('54267527825752725', 'voice').then(c => {
        victim.setVoiceChannel(c).then(() => {
            c.delete();
            msg.channel.send(`:boot:  Kicked <@${victim.id}> out of the voice channel.`)
        })
    })
}


}
    
    

module.exports.help = {
  name: "vckick"
}