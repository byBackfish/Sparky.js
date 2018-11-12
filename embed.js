const COLORS = {
    error: 0xe74c3c,
    success: 0x2ecc71,
    normal: 0xbdc3c7
}



module.exports = {

    /** 
     * @param {Discord.Channel} chan Channel where the Message is send to
     * @param {string} cont
     * @param {string} title
     * 
     * 
     * 
     * 
    */

    error(chan, cont, title){ 
        var emb = new Embe
            .setColor(COLORS.error)
            .setDescription(cont)
            if(title){
                emb.setTitle(title)
            }
            chan.send('Text before Embed', emb).then((m) => {
                message = m
            })
            return message


    },
    info(){
    return

    }
    

}