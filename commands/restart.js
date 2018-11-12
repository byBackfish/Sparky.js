const Discord = require("discord.js")
const emojis  = require('../jsons/emojis.json');
const color   = require('../jsons/color.json');
const config  = require('../jsons/config.json');

module.exports.run = async (client, msg, args) => {
    // restart
    if(msg.author.id == config.owner){
msg.channel.send(new Discord.RichEmbed().setTitle("Restarting Now!").setDescription(":robot: Restarting now! :robot:").setTimestamp(Date.now()).setFooter("Restarting")).then(() => {
    client.destroy().then(()=> {
        client.login(config.token).then(()=>{
            msg.channel.send(new Discord.RichEmbed().setTitle("Restartet successfully").setDescription(":robot: Restart successfully! :robot:").setTimestamp(Date.now()).setFooter("Restart was Successfull"))
        })
    })
})

}else{
    msg.channel.send("Hey! you arent the Bot-Owner")
}
}
module.exports.help = {
  name: "restart"
}