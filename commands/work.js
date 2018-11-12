

    const Discord = require("discord.js")
const emojis  = require('../jsons/emojis.json');
const color   = require('../jsons/color.json');
const config  = require('../jsons/config.json');
const worked = new Set();

module.exports.run = async (client, msg, args, con) => {
   
    
    
    setTimeout(() => {
        // Removes the user from the set after 4 hours
        worked.delete(msg.author.id)
        
    },14400 * 1000)
    
    
    function generateCoins() {
        let min = 25;
        let max = 55;
        return Math.floor(Math.random() * (max- min + 1)) + min;
    }
   
    con.query(`SELECT * FROM coins WHERE id = ${msg.author.id}`, (err, rows) => {
        
            
        if(err) throw err;
        
        let sql;
        if (worked.has(msg.author.id)) {
           msg.channel.send("Hey! The work Command has an 4h Cooldown!")
        }else{
       // if(cooldown = true){ return msg.channel.send("Hey! The work Command has an 4h Cooldown!")}
       

        if(rows.length < 1){
            
            
            sql = `INSERT INTO coins (id, coins) VALUES (${msg.author.id}, ${generateCoins()})`
            worked.add(msg.author.id);
            
        } else {
            
           
            let coins = rows[0].coins;
            
            sql = `UPDATE coins SET coins = ${coins + generateCoins()} WHERE id = ${msg.author.id}`;
            worked.add(msg.author.id);
           
            
                
            }
            
            

        con.query(sql)
        
        
        msg.channel.send(new Discord.RichEmbed().setTitle("You worked very Hard!").setDescription("You worked very Hard and gained some Coins! You now have  `" +  + rows[0].coins + "` Coins!").setTimestamp(Date.now()).setFooter("You worked!"))
        }


   // cooldown
   
   
   
   
   
   
})
} 


module.exports.help = {
    name: "work"
}
