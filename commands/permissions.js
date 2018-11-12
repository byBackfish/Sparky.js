const Discord = require("discord.js")
const emojis  = require('../jsons/emojis.json');
const color   = require('../jsons/color.json');
const config  = require('../jsons/config.json');

module.exports.run = async (client, msg, args, con) => {
    let target = msg.mentions.members.first() || msg.guild.members.get(args[1]) || msg.author;
   
   if(msg.author.id == config.owner || msg.author.id == msg.guíld.owner.id){
   
    con.query(`SELECT * FROM permissions WHERE id = ${target.id} and guildid =  ${msg.guild.id}`, (err, rows) => {
        
        let level = args[0]
        if(level <= 5){
            
        if(err) throw err;
        
        let sql;

        if(rows.length < 1){
            
            sql = `INSERT INTO permissions (id, lvl, guildid) VALUES (${target.id}, ${level}, ${msg.guild.id} )`
        } else {
            

            let lvl = rows[0].lvl;
           
            sql = `UPDATE permissions SET lvl = ${level} WHERE id = ${target.id} and guildid = ${msg.guild.id}`;
            
        }

        con.query(sql)
        msg.channel.send(new Discord.RichEmbed().setTitle("You set an new Permission Level for " + target).setDescription("You set a new Permission Level for " + target + " ! He/She has now a Perm Level of " + level ).setTimestamp(Date.now()).setFooter("Permission changed!")




    
    
    )}


    })}}




module.exports.help = {
  name: "permission"
}