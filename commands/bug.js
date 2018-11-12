const Discord = require("discord.js")
const emojis  = require('../jsons/emojis.json');
const color   = require('../jsons/color.json');
const config  = require('../jsons/config.json');

module.exports.run = async (client, message, args) => {
  if (!message.guild.member(client.user).hasPermission("CREATE_INSTANT_INVITE")) {
    let embed = new Discord.RichEmbed()
    .setTitle(emojis.no + `**Error:** I don't have permissions to create a ticket! I need the permissions: "Create Instant Invite"`)
    .setColor(color.error)
    message.channel.sendMessage(embed);
    return;
}
    if (message.content.length > 1000) {
    let embed = new Discord.RichEmbed()
    .setTitle(emojis.no + "**Error:** The maximum of characters is 1000!")
    .setColor(color.error)
    message.channel.sendMessage(embed);
    return;
}
    if(args.length === 0) {
    let embed = new Discord.RichEmbed()
    .setTitle(emojis.no + "**Error:** Please describe the Bug!")
    .setColor(color.error)
    message.channel.sendEmbed(embed);
    return;
}
{
    let bug = args.slice(0).join(" ");
    message.guild.channels.get(`${message.channel.id}`).createInvite().then(invite =>
        client.channels.get(config.bug_channel).send(invite.url)    
    )  
      let embed = new Discord.RichEmbed()
      .setTitle("ℹ New Bugreport from " + `${message.author.tag}`)
      .addField("Servername:", `${message.guild.name}`)
      .addField("Bug: ", bug)
      .setColor(color.info)
      client.channels.get(config.bug_channel).sendEmbed(embed);   
}
    let embed = new Discord.RichEmbed()
    .setTitle(emojis.ok + "**Info:** The bug was successfully reported to the support!")
    .setColor(color.info)
    message.channel.sendEmbed(embed);
    return;
}

module.exports.help = {
  name: "bug"
}