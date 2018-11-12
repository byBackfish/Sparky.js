const Discord = require('discord.js')
const fs      = require('fs')
const Embeds = require('./util/embeds')
const WS = require('./ws/ws')   
const ArgParser = require('./util/argumentParser')
const  COLORS  = require('./util/statics')
const color   = JSON.parse(fs.readFileSync('./jsons/color.json', 'utf8'))
const emojis  = JSON.parse(fs.readFileSync('./jsons/emojis.json', 'utf8'))
const mysql = require("mysql")
const client = new Discord.Client()
client.commands = new Discord.Collection();
let cooldwon = new Set();
let cd = 30;





// Read out content of 'config.json' synchronous and
// parse it to a javascript objectnpm
const config = JSON.parse(fs.readFileSync('./jsons/config.json', 'utf8'))

// Creating instance of discord  bot client


var ws = new WS(config.ws.token, config.ws.port, client)

// Command register


fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err);
  
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
      console.log("Couldn't find commands.");
      return;
    }
  
    jsfile.forEach((f, i) =>{
      let props = require(`./commands/${f}`);
      console.log(`${f} loaded!`);
      client.commands.set(props.help.name, props);
    });
  
  });
  
  var con = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database
    
});
con.connect(err => {
    if(err) throw err;
    console.log("Connected to database!")


})
module.exports.check = function checklvl(level, id, guildid, msgchannel){
    con.query(`SELECT lvl FROM permissions WHERE guildid = '${guildid}' and id = '${id}'`, (err, results) => {
        let lvl = results[0].lvl;
        
        checkperms(level, lvl, msgchannel)
            
    })    
    

}

function checkperms(level, lvl, msgchannel) {
    if(lvl >= level){
        return true;
    
}else{
msgchannel.send("You have too low Permissions!")
return false;
}

}

function generateXp() {
    let min = 5;
    let max = 30;
    return Math.floor(Math.random() * (max- min + 1)) + min;
}
function generateCoins() {
    let min = 25;
    let max = 55;
    return Math.floor(Math.random() * (max- min + 1)) + min;
}



  client.on("message", async message => {
      
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
            
    con.query(`SELECT * FROM xp WHERE id = ${message.author.id}`, (err, rows) => {
        if(message.content.startsWith("!xp")){ return;}
        if(err) throw err;
        
        let sql;
        if(cooldwon.has(message.author.id)){ return;}

        if(rows.length < 1){
            
            sql = `INSERT INTO xp (id, xp) VALUES (${message.author.id}, ${generateXp()})`
        } else {
            

            let xp = rows[0].xp;
           
            sql = `UPDATE xp SET xp = ${xp + generateXp()} WHERE id = ${message.author.id}`;
            cooldwon.add(message.author.id)
        }

        con.query(sql)






    })
    
      
        
    let prefix2 =  con.query(`SELECT * FROM prefix WHERE guildid = '${message.guild.id}'`, (err, results) => {
       
        let prefix = results[0].prefix;
        restOfCode(prefix)
    })
    function restOfCode(prefix){
    if (!message.content.startsWith(prefix)){ return;}
    
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
  
    let commandfile = client.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(client,message,args, con);
    }
    setTimeout(() => {

        cooldwon.delete(message.author.id)
        
        }, cd * 1000)
    });

// Ready Event
// Fires when bot is logged in and ready to react on other events
client.on('ready', () => {
    
    setInterval(function() {
        client.user.setActivity('Prefix: ' + config.prefix, { type: 'WATCHING' });
        setTimeout(function() {
            client.user.setActivity('on many guilds!', { type: 'PLAYING' });
        }, 30000);
        setTimeout(function() {
            client.user.setActivity('with you!', { type: 'PLAYING' });
        }, 30000);
    }, 90000)

    console.log(`Logged in as ${client.user.username}... My Prefix is ${config.prefix} and my id is ${client.user.id}. I have ${client.guilds.size} guilds and totally ${client.users.size} Users!`)
     client.guilds.find('id', '455412468186087436').channels.find('id', '491538321437229057').send(new Discord.RichEmbed().setDescription("Bot started sucessfully!").setTitle("Start-Log").setFooter("Done!").setTimestamp(new Date()).setThumbnail(client.guilds.find('id', '455412468186087436').iconURL))

})
client.on('guildCreate', guild => {
    let sql;
    con.query(`SELECT * FROM prefix WHERE guildid = '${guild.id}'`, (err, rows) =>{
        if(err) throw err;
      if(rows.length < 1){
        sql = `INSERT INTO prefix (prefix, guildid) VALUES ('!', '${guild.id}')`
        
      }else{ 
          sql = `UPDATE prefix SET prefix = '!' WHERE guildid = '${guild.id}'`
      }
      con.query(sql)
    }
    )
    
})
client.on('guildRemove', guild => {
    
})
client.on('guildMemberAdd', member => {
    client.guilds.find('id', '455412468186087436').channels.find('id', '490129956387684352').send(' Hey, ' + member + '! Willkommen! Unsere neue Userzahl ist: ' + client.guilds.find('id', '455412468186087436').members.size + "!")
   
})
client.on(`guildMemberRemove`, member => {
    client.guilds.find('id', '455412468186087436').channels.find('id', '490129956387684352').send('Leider hat ' + member + ' uns verlassen. Unsere neue Userzahl ist: ' + client.guilds.find('id', '455412468186087436').members.size + "!")

    
})


    
 



client.login(config.token)

